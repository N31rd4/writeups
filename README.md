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
- [Editor](./Editor/writeup.md)  
    *Overview*: Exploits XWiki vulnerabilities for initial access, find credentials, and escalates privileges using a SUID binary to gain root access.
- [Previous](./Previous/writeup.md)  
    *Overview*: Exploits a Next.js middleware authentication bypass vulnerability, leverages LFI to retrieve credentials, and escalates privileges by exploiting terraform.
- [Soulmate](./soulmate/writeup.md)  
    *Overview*: Exploits a race condition in CrushFTP to gain admin access, uploads a PHP reverse shell for foothold, and escalates privileges using a CVE in an Erlang-based SSH server.
- [Expressway](./expressway/writeup.md)  
    *Overview*: Explores an IKE VPN configuration vulnerability, cracks the preshared key using `psk-crack`, gains SSH access, and escalates privileges by exploiting a vulnerable `sudo` version.
- [Imagery](./Imagery/writeup.md)  
    *Overview*: Exploits an XSS vulnerability to extract admin cookies, leverages an LFI vulnerability to explore server files, and escalates privileges by exploiting a command injection flaw in image processing.
- [TombWatcher](./TombWatcher/writeup.md)  
    *Overview*: Demonstrates AD enumeration, BloodHound-based privilege escalation, GMSA password retrieval, and exploitation of AD CS ESC15 misconfiguration to gain Domain Admin access.
- [Signed](./signed/writeup.md)  
    *Overview*: Exploits a misconfigured MSSQL server, leverages Kerberos authentication vulnerabilities, and escalates privileges using silver ticket attacks to gain full system access.
- [Conversor](./conversor/writeup.md)  
    *Overview*: Exploits a path traversal vulnerability to achieve arbitrary file write, gains foothold via cron-executed Python scripts, and escalates privileges using the `needrestart` CVE-2024-48990 vulnerability.
- [Giveback](./giveback/writeup.md)  
    *Overview*: Exploits the GiveWP plugin vulnerability for initial access, leverages Kubernetes service account tokens to enumerate secrets, and escalates privileges by exploiting a misconfigured `runc` binary to escape the container and gain root access.
- [Eighteen](./Eighteen/writeup.md)  
    *Overview*: Exploits an MSSQL server misconfiguration for initial access, leverages Kerberos delegation vulnerabilities to impersonate privileged users, and escalates privileges using Badsuccessor
- [MonitorsFour](./MonitorsFour/writeup.md)  
    *Overview*: Explores API token bypass techniques, exploits a CVE in Cacti for initial access, gains foothold via Docker container escape, and escalates privileges by mounting the host filesystem to retrieve sensitive files.
- [Gavel](./Gavel/writeup.md)  
    *Overview*: Exploits a YAML injection vulnerability in a custom auction service, gains foothold via a crafted reverse shell, and escalates privileges by leveraging a misconfigured root daemon.
- [NanoCorp](./NanoCorp/writeup.md)  
    *Overview*: Explores NTLM hash theft via a ZIP extraction vulnerability, BloodHound-based privilege escalation, exploitation of CheckMK CVE for local privilege escalation, and bypassing Windows Defender with a custom payload to gain root access.
- [Browsed](./Browsed/writeup.md)  
    *Overview*: Explores a Chrome extension vulnerability to achieve initial access, leverages SSRF to discover internal services, and escalates privileges using Python cache poisoning to gain root access.
- [Facts](./Facts/Writeup.md)  
    *Overview*: Exploits a mass assignment vulnerability in Camaleon CMS for privilege escalation, retrieves AWS credentials to access S3 buckets, downloads private SSH keys for initial access, and escalates privileges using a custom Ruby fact with `facter` to gain root access.
- [Pterodactyl](./Pterodactyl/writeup.md)  
    *Overview*: Exploits a Pterodactyl Panel RCE vulnerability (CVE-2025-49132) for initial access, leverages database credentials to gain a foothold, and escalates privileges using a two-step chain involving `udisks` and `libblockdev` vulnerabilities (CVE-2025-6018 → CVE-2025-6019).
- [WingData](./WingData/writeup.md)  
    *Overview*: Exploits a NULL byte truncation vulnerability in Wing FTP Server for authentication bypass, leverages Lua code injection for RCE, and escalates privileges using a Python tarfile extraction vulnerability (CVE-2025-4517).
### How to Use
1. Navigate to the desired writeup by clicking the links above.
2. Follow the detailed steps to understand the exploitation process.
3. Use the insights to improve your pentesting skills or secure your systems.

---

### Disclaimer
These writeups are for educational purposes only. Unauthorized use of these techniques on systems you do not own or have explicit permission to test is illegal.

---  