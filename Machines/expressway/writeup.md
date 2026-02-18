# Expressway Writeup

Welcome to my writeup for the HackTheBox machine **Expressway**. As the name suggests, this box was pretty straightforward, but it still had some interesting steps that I enjoyed exploring. Let me walk you through my thought process and the steps I took to root this machine.

---

## Initial Reconnaissance

Starting with a basic `nmap` scan, I noticed that only port **22** (SSH) was open. This was a bit unusual, so I decided to test a few common username/password combinations for SSH access. Unfortunately, nothing worked. At this point, I decided to dig deeper and scan for **UDP ports**, which often reveal overlooked services.

To my surprise, I found **port 500/udp** open. This port is commonly associated with IPsec/IKE VPNs, so I turned to [HackTricks](https://book.hacktricks.wiki/en/network-services-pentesting/ipsec-ike-vpn-pentesting.html) for guidance.

---

## Exploring the IKE Service

Following the HackTricks methodology, I ran the `ike-scan` tool to probe the service:

```bash
ike-scan -M 10.10.11.87
```

The output confirmed that the target was configured for IPsec and was willing to perform IKE negotiation. The handshake revealed some interesting details:

```
SA=(Enc=3DES Hash=SHA1 Group=2:modp1024 Auth=PSK LifeType=Seconds LifeDuration=28800)
VID=09002689dfd6b712 (XAUTH)
VID=afcad71368a1f1c96b8696fc77570100 (Dead Peer Detection v1.0)
```

The **Auth=PSK** field indicated that the VPN was using a **preshared key**, which is great news for a pentester. Encouraged by this, I decided to attempt an aggressive mode scan to extract more information.

```bash
ike-scan -M -A -P --pskcrack=hash.txt 10.10.11.87
```

This time, the scan returned a hash and revealed the user ID `ike@expressway.htb`. The hash was saved to `hash.txt`, and I was ready to crack it.

---

## Cracking the PSK

Using `psk-crack`, I ran a dictionary attack against the hash with the famous `rockyou.txt` wordlist:

```bash
psk-crack -d /usr/share/wordlists/rockyou.txt hash.txt
```

After a few seconds, the tool revealed the preshared key: **freakingrockstarontheroad**. With this, I had the credentials `ike:freakingrockstarontheroad` for SSH access.

---

## Gaining Initial Access

I logged into the machine via SSH using the credentials:

```bash
ssh ike@10.10.11.87
```

Success! I was in. The first thing I did was grab the **user flag** from Ike's home directory. With that done, I started enumerating the system for privilege escalation opportunities.

---

## Privilege Escalation

While checking the version of `sudo`, I noticed it was vulnerable to **CVE-2025-32463**. This vulnerability allows privilege escalation to root. I found an exploit for it on GitHub ([CVE-2025-32463 Exploit](https://github.com/kh4sh3i/CVE-2025-32463)) and decided to give it a try.

After downloading and running the exploit, it worked like a charm. I now had root access! Navigating to `/root`, I found the **root flag** and completed the box.

---

## Reflections

As the name "Expressway" suggests, this box was pretty direct and simple. The IKE VPN configuration was the main challenge, but tools like `ike-scan` and `psk-crack` made it manageable. The privilege escalation was straightforward thanks to the vulnerable `sudo` version.

Overall, this was a fun and educational box. Thanks for reading my writeup, and I hope it helps you in your own journey!
