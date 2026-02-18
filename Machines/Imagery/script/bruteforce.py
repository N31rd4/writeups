#!python3

import pyAesCrypt
import sys

if len(sys.argv) < 3:
    print("Usage: ./bruteforce.py file wordlist")
    exit()

encrypted_file = sys.argv[1]
wordlist = sys.argv[2]

with open(wordlist, 'r') as file:
    for line in file:
        pwd = line.rstrip('\n')
        print(f'Testing password: {pwd}', end="\r")
        try:
            pyAesCrypt.decryptFile(encrypted_file, "backup.zip", pwd)
            print(f'password found {pwd}')
            exit()
        except Exception:
            continue
