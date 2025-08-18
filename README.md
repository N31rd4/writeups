# Pentesting Labs & CTF Writeups

Welcome to the repository showcasing detailed writeups for various pentesting labs and Capture The Flag (CTF) challenges. Each writeup provides a comprehensive walkthrough of the exploitation process, including enumeration, vulnerability analysis, and privilege escalation techniques.

## Writeups Index

### HackTheBox
- [PLANNING](./planning/writeup.md)  
    *Overview*: Demonstrates the exploitation of a Grafana vulnerability, privilege escalation via a misconfigured Node.js crontab service, and retrieval of root access.
- [Nocturnal](./nocturnal/writeup.md)  
    *Overview*: Explores enumeration techniques, exploitation of file upload vulnerabilities, command injection attempts, and privilege escalation using a known CVE in ISPConfig.
- [Dog](./dog/writeup.md)  
    *Overview*: Highlights the exploitation of Backdrop CMS vulnerabilities, enumeration of users, password reuse, and privilege escalation using the `bee` binary.
- [Outbound](./outbound/writeup.md)  
    *Overview*: Covers the exploitation of Roundcube Webmail, decryption of sensitive data, and privilege escalation using a vulnerable binary.
- [Fluffy](./Fluffy/writeup.md)  
    *Overview*: AD DC compromise via NTLMv2 capture from a malicious ZIP, crack to p.agila, BloodHound path through “Service Accounts” for GenericWrite on winrm_svc, shadow credentials with `pywhisker`, PKINIT-derived NT hash, and foothold via `evil-winrm`.
- [CodeTwo](./Code_2/writeup.md)  
    *Overview*: Exploits a vulnerability in `js2py` to escape the sandbox and execute Python code, cracks MD5 hashes for user credentials, and escalates privileges using a backup tool to gain root access.

### How to Use
1. Navigate to the desired writeup by clicking the links above.
2. Follow the detailed steps to understand the exploitation process.
3. Use the insights to improve your pentesting skills or secure your systems.

---

### Disclaimer
These writeups are for educational purposes only. Unauthorized use of these techniques on systems you do not own or have explicit permission to test is illegal.

---  