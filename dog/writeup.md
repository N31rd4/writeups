# Dog HTB Writeup

Welcome to my writeup for the Dog HTB challenge! This box was a fun and educational experience that taught me the importance of thorough information gathering. I spent quite a bit of time stuck, thinking I had exhausted all possible sources of information, only to realize later that digging deeper into the repository would reveal the key to moving forward. Once I found the missing piece, the rest of the challenge unfolded smoothly—perhaps even too easily. Here's how it all went down.

---

## Initial Reconnaissance

I started with the usual reconnaissance steps, scanning ports 80 and 22 using Nmap. There were no subdomains to explore, but I discovered that the `.git` directory was exposed, along with the rest of the repository paths. Using `git-dumper`, I dumped the entire Git repository for further analysis.

The site was running Backdrop CMS, and I identified the version as `1.27.1` by visiting `http://dog.htb/core/profiles/standard/standard.info`. This was promising because I found an exploit for this version on Exploit-DB: [Backdrop CMS RCE](https://www.exploit-db.com/exploits/52021). However, the exploit required authentication, so I needed to find credentials.

---

## Exploring the Repository

While analyzing the dumped repository, I found a salt value in the `settings.php` file:

```php
$settings['hash_salt'] = 'aWFvPQNGZSz1DQ701dD4lC5v1hQW34NefHvyZUzlThQ';
```

Additionally, I discovered database credentials:

```plaintext
mysql://root:BackDropJ2024DS2024@127.0.0.1/backdrop
```

Unfortunately, the password didn't work with the `root` user, so I had to dig deeper. Since I had access to the original version of the repository, I cloned it and checked out version `1.27.1`. Using `diff`, I compared the dumped repository with the reference version to identify changes:

```bash
diff -ru --exclude=core ./reference ./repo_dumped | grep -v "Only in ./reference" > diff.patch
```

![Diff Results](sc/diff_res.jpg)

This revealed some interesting differences, but I had already seen the salt and database credentials. The `config` directory seemed underexplored, so I decided to revisit it.

---

## Diving Into Configuration Files

The `config` directory contained over 6,000 lines of JSON files, which I needed to filter efficiently. By comparing the reference configuration files with the dumped ones, I quickly found an email address that had been added: `tiffany@dog.htb`.

![Tiffany Email](sc/tiffany.jpg)

Combining this email with the previously discovered password (`BackDropJ2024DS2024`), I successfully logged in as an admin on the site.

---

## Exploiting Backdrop CMS

With admin access, I was able to use the RCE exploit mentioned earlier: [Backdrop CMS RCE](https://github.com/rvizx/backdrop-rce). The exploit worked perfectly, and I gained a foothold on the box.

![Foothold](sc/foothold.jpg)

---

## Enumerating Users and Password Reuse

I enumerated the users on the system and tried password reuse with the credentials I had. This worked for `johncusack:BackDropJ2024DS2024`, allowing me to retrieve the user flag.

![User Flag](sc/user_flag.jpg)

To maintain persistence, I connected via SSH.

---

## Privilege Escalation

Running `sudo -l` revealed that I could execute the `bee` binary as root. This binary is used to manage CMS projects, and its `--help` menu showed several options for executing PHP code.

![Sudoers](sc/sudoers.jpg)  
![PHP Execution](sc/exec.jpg)

However, every attempt to execute code resulted in a "bootstrap level" error. I realized that I needed to be at the root of an existing project to bypass this restriction. Once I navigated to the correct directory, I successfully executed my command and escalated to root.

![Bootstrap Error](sc/bootstrap.jpg)  
![Root Access](sc/root.jpg)

Finally, I retrieved the root flag from `/root/root.txt`.

---

## Lessons Learned

This box reinforced the importance of thorough information gathering. I spent a lot of time stuck, thinking I had found everything in the Git repository, only to discover later that there was more to uncover. Once I found the additional user, the rest of the challenge felt straightforward. It was a valuable reminder to always dig deeper and never assume you've exhausted all possibilities.

Thanks for reading, and happy hacking!  