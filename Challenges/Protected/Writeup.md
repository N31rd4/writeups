# Mobile Forensics Challenge - Writeup

## Challenge Scenario

> While examining the device, we discovered that critical evidence or artifacts may have been overlooked. We believe that your expertise in mobile forensics will enable you to uncover the missing piece.

---

## Step 1: Initial Discovery & Environment Setup

Unlike traditional mobile challenges that provide an `.apk` file, this challenge supplies a direct dump of an Android device's storage.

To clean up the directory structure before investigation, all empty directories were removed:

```bash
find /path/to/directory -depth -type d -empty -delete
```

---

## Step 2: Exploring Application Data

After gaining a general understanding of the Android directory structure, the investigation focused on non-Google application data (`/data/data/`).

1. **Notepad App Check:**
    - Database checked: `notes.notepad.checklist.calendar.todolist.notebook`
    - Result: Found a dummy flag: `HTB{Fake_Flaggggggggggggggggggggggggggg}`

2. **Target Selection:**
    - Filtered out default `com.google.android.*` packages to focus on third-party applications.

---

## Step 3: Signal Application Investigation (Rabbit Hole)

Initial inspection targeted Signal application data (typically encrypted locally).

- Attempted to follow local decryption guides:
  - [Reading a Droid's Signal](https://matthewplascencia.substack.com/p/reading-a-droids-signal)
  - [Decrypt Android Database](https://rado0z.github.io/Decrypt_Android_Database)
- Missing key: `/data/keystore/user_0/10044_USRSKEY_SignalSecret` was not present.
- Found alternative database in the keystore directory: `persistent.sqlite`.
  - Contained an entry in `keyentry` table with alias `SignalSecret` linked to ID `-3236971586366532847`.
  - Linked blob entry in `BlobEntry` started with header `PKMBLOB`.

---

## Step 4: GalleryVault Investigation & Resolution

Switching focus back to `com.thinkyeah.galleryvault`:

1. **Database Inspection:**
    - Found reference to a file named `flag.png` inside the main database.

2. **Decryption:**
    - Used existing decryption tool: [gv_decryptor](https://github.com/caveeroo/gv_decryptor)
    - Executing the decryptor yielded the decrypted `flag.png` image containing the flag.

---

## Technical Mechanism & Analysis

Analysis of the GalleryVault encryption mechanism reveals:
1. **XOR Encryption:** Performed on files located in `media/0`, using a specific position indicator and encryption mode byte.
2. **Key Generation:** Uses `DES-ECB` with a hardcoded key to generate a file-specific XOR key.
3. **Payload Decryption:** Combines the extracted XOR key and decryption mode to reconstruct original files.

### Related Resources
- [Cracking the Vault: Exposing the Weaknesses of Encrypted Apps](https://www.s-rminform.com/latest-thinking/cracking-the-vault-exposing-the-weaknesses-of-encrypted-apps)
- [GalleryVault Decryptor (GitHub)](https://github.com/Tom-Lovatt/galleryvault-decryptor)

---

## Conclusion

Although this was primarily a forensics and data recovery exercise rather than a pure reverse engineering task, it provided useful insights into Android storage dumps, keystore structures (`persistent.sqlite`), and application-level file encryption schemes.