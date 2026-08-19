# Celestial Scribe: Writeup

New "Celestial Scribe" challenge, second-to-last "mobile" challenge from HackTheBox.

## Challenge Scenario

> A new secure note-taking app promises complete privacy, or is it?

## Initial Recon

I downloaded the zip and got an APK, BUT THAT'S NOT ALL, for once there's also a challenge server to connect to. Maybe I'll need to intercept requests, maybe I'll need to use Burp, I don't know yet.

I open the package with jadx-gui, at least to see if I can run it in an Android VM on my PC, or if I need to install it on my actual phone.

The libraries all seem to be available in x86, I connected to the VPN, so I can run the application on Android Studio.

As expected, it asks me for the HTB IP address (the nice thing is it's HTTP, so I won't need to unpin anything like that).

![Main screen](sc/main.webp)

## Exploring the App with Burp

I launch Burp, connect the proxy in the Android settings, and go through all the functions (login, register, new note, etc.) to get a feel for how it works.

- Register returns a JWT
- The JWT is then sent to `auth/verify`, which returns a userID
- Login does the same thing
- The API that returns notes takes the JWT as AUTH and returns JSON where each note has an undetectable UUID
- When posting a note to the cloud, a POST request is sent with a UUID set by the app locally, plus the text content
- When retrieving a note, it makes a "check permission" call first (probably for the UUID)

```http
GET /api/notes/f5062434-7cbe-4197-9c49-b8957ab3ceaf/check-permission HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MmQ1MTI3LThjMGEtNDI4NC1iNjNmLTczMzE0MzNjN2MyZSIsImVtYWlsIjoiZW1haWxAbWFpbC5jb20iLCJpYXQiOjE3ODYzNzUzMDgsImV4cCI6MTc4NjM3NjIwOH0.oFSS4RqSTnqE_CSp8e-MXFNwHSBd1zpMC_-WJM5YDAI
```

And then it sends a second request to retrieve the content (transmitted in clear):

```http
GET /api/notes/f5062434-7cbe-4197-9c49-b8957ab3ceaf HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MmQ1MTI3LThjMGEtNDI4NC1iNjNmLTczMzE0MzNjN2MyZSIsImVtYWlsIjoiZW1haWxAbWFpbC5jb20iLCJpYXQiOjE3ODYzNzUzMDgsImV4cCI6MTc4NjM3NjIwOH0.oFSS4RqSTnqE_CSp8e-MXFNwHSBd1zpMC_-WJM5YDAI
Host: 154.57.164.82:32310
Connection: keep-alive
Accept-Encoding: gzip, deflate, br
User-Agent: okhttp/4.10.0
```

This process strongly suggests that the JWT might be poorly (or not at all) verified on the second request, and that all security relies on the local app itself refusing to make the request if the JWT is rejected, which is security level 0.

## Testing JWT Validation

I test this by resending the request to receive the note, but changing the JWT signature (making it invalid, it shouldn't pass if tested).

It doesn't work, the JWT is at least checked a little.

When I decode the JWT I see nothing special: a UUID, my email, and a 15-minute lifetime.

```json
{
    "id": "162d5127-8c0a-4284-b63f-7331433c7c2e",
    "email": "email@mail.com",
    "iat": 1786375308,
    "exp": 1786376208
}
```

At first glance there's nothing in the API that's really exploitable, so I hope to find in the APK maybe leftovers of a debug mode with admin credentials (or the JWT signing key left in the code).

## Digging into the APK

I find a rat's nest of classes (way too many for the app's needs), and I quickly go through each one with my original theory of a hardcoded key.

I really find nothing interesting; in the end I think all the classes are just libraries for making requests. I try to find info elsewhere.

In `kotlin/coroutines/coroutines_kotlin.builtins` I stumble upon:
```
3hackToForceKotlinBuiltinsForKotlinCoroutinesPackage
```
There's "hack" in the name, but it's a red herring.

There's still `libconscrypt_jni.so` left to analyze, but when I search its name online I see it's already used elsewhere, if it's a library that exists outside the exercise, it's probably not custom.

## Testing with Two Accounts

I decide to test with 2 accounts to see if I can read a note with an ID I already know.

Since we're in the AI era, I really want to test something, I'm too lazy to create both accounts and then juggle between them, so I try feeding the different requests' info to opencode to build a TUI that quickly tests the different requests.

It's probably overkill (I could just open two Android VMs) but I want to try it.

First, I gather the whole API I managed to scrape in Burp.

![API summary](sc/api.webp)

Then I create the prompt, showing it a bit of the workflow:

> "I want you to create a Python TUI app in a new folder that mimics the behavior of an application for pentest purposes.
> I'm going to explain the observed behavior of the API, and you'll see an `api` folder containing examples of requests captured with Burp.
> My main goal is to manage several accounts at once, to test interactions, you can generate passwords and emails yourself (this is an HTB challenge, you don't need anything complicated, an email in the format `a@a.a` is fine, and a password with one character works). I want to be able to create accounts with a single click and switch between them with tabs, for example. JWTs have a 15-minute lifetime, so in case of an error I expect it to automatically re-login.
>
> When launching the application, the software needs two parameters: 1. the Burp proxy address, 2. the HTB server address.
>
> The login and register flow is fairly classic (JWT), the JWT has a 15-minute lifetime.
> Before retrieving the note list (`get_notes.burp`), it often does a verify (`verify.burp`).
> Before getting the content of a note (`get_note.burp`), it systematically does a check (`check_note.burp`)."

I launch opencode to see if it can build me something nice that would abstract away account management and ease my workflow (GPT 5.6 Terra with my Copilot subscription).

## Continuing to Poke at the API

I thought this would take 2 minutes tops, but while waiting we keep testing things with Burp and the VM.

I wonder for example if you can access a note by blocking the check. I make a request on a note without the check, and indeed it works, the usefulness of the check seems more and more unclear.

Meanwhile, my API-testing TUI is done. After a few tweaks, everything works very well.

![TUI tool](sc/tui.webp)

Indeed it may have been a bit overkill just to test between two accounts, but I wanted to test the AI's ability to create tools that ease pentesting, and I find it simpler now to check this.

## Investigating the Check-Permission Endpoint

Right away, thanks to the app, I notice that the default notes have different UUIDs (totally logical in hindsight, lol). Now at least I can see if I can read other people's notes.

Quickly, with or without check-permission, I conclude it's not possible. The check-permission still leaves me with a weird feeling, I have the impression, based on the path, that it's linked to the note, and since the base app expects this request to be made, it must have a concrete role I haven't understood.

I try several things.

When I make a valid check request for one account and send, in the same connection, the path to another account's note, I get a "note not found" instead of "unauthorized".

Is the "not found" within a single request an HTTP thing?

I vaguely remember, from a CTF, a vulnerability based on sending two HTTP requests in a single one, even if it seems weird for a "medium" challenge, I quickly explore this lead and try to recall the name and mechanism of the flaw (as I write these words I remember: HTTP smuggling). They use HTTP 1.1 too, so maybe it's the right target.

But no, it doesn't work.

I keep exploring the API; I try, for example, creating a note with a UUID identical to another note (to know if note lookup is done by uuid+user or just uuid).

Forbidden, so UUIDs really are unique across all users. By the way, I can use this strategy to see if there are already-used UUIDs. Of course, by definition UUIDs are too long to enumerate, but if I can't list them, maybe the flag has a much simpler name. I try things by hand: "secret", "flag", "test", etc... but I find really nothing, even with the first 10000 rockyou entries.

Does that mean I'd need to be able to list other people's notes?

I don't know, I keep searching and testing things around the "check-note" request, maybe once checked, it doesn't verify the JWT signature? No.

I'm really stuck, I go back to look at the APK again (after all, this is supposed to be a "mobile" category exercise, not web).

I find where the request to `/check-permission` is located (the files I ended up thinking were just ready-made libraries). I rename a lot of stuff but find nothing interesting, the same workflow I was already thinking about.

## The Breaking Point

After 2 days of fruitless research I give up and go look for the answer, AND I LOSE MY MIND.

This is the first time in my life I'm going to leave a minimum-score review on an HTB challenge, this is a MOCKERY.

Let me explain:

The solution, as my intuition had been telling me from the start, was to do the check on a valid note and then perform a race condition to retrieve the admin's note at ID `"1"` (`/notes/1`). Grouped requests in Burp, in a single connection, and it works 100% of the time.

BUT... if you've been following this writeup carefully, this is EXACTLY what I had already tried to test. I had told myself that the UUID was unfindable, and since there was no way to list them (and the UUID was arbitrarily managed by the client), then surely the ID of the note to find was a simple word. So I had looked for a way to test whether notes existed on other accounts by trying to create new ones and checking if it returned 200 (didn't exist) or 403 (exists).

And it worked VERY well, example of a note created on another account and tested with this method:

![403 test](sc/403.webp)

BUT BUT BUUUUTTT

When I test with the id `/notes/1`, NO PROBLEM AT ALL, THIS NOTE DIDN'T ALREADY EXIST (200), WE JUST CREATED IT ON YOUR ACCOUNT.

![200 test](sc/200.webp)

WORSE

Once I test the exploit with this account, it returns the note "1" of THIS account (so it no longer works).

## Another Problem

When testing the exploit with two different accounts, the SAME famous race-condition exploit, IT DOESN'T WORK, so THERE'S NO WAY TO PROVE THAT THIS IS INDEED THE EXPLOIT WITHOUT ALREADY HAVING THE ADMIN'S NOTE (e.g., it's supposed to work here with my two accounts):

![Not found](sc/not_found.webp)

In other words, the solution is a flaw THAT DOESN'T ACTUALLY EXIST on the server, they hardcoded a path to give the impression of a vulnerability, but in the normal operation of the server it doesn't exist.

Because what we're supposed to understand is that the check temporarily changes a global variable that then allows reading any note if you find its unique id, BUT IN THE END the id of the note containing the flag isn't unique, and the flaw doesn't even exist outside the precise conditions needed to get the flag.

I made a diagram to understand the vulnerability we're trying to simulate and how the path was hardcoded:

![Diagram](sc/schema.webp)

## Conclusion

To sum up:

I was able to refresh my memory a bit on how to use Burp with Android Studio (without dealing with SSL certificates and pinning), and I was also able to test using AI to generate helper scripts (very useful), so it's not wasted time. That said, this wasn't really a reverse-engineering challenge, it was really web, which wouldn't have taken particularly long if the race condition had been properly implemented.

Maybe there are reasons why it couldn't be implemented normally (perhaps if several people are on the challenge at the same time), but still, I feel like I wasted my time because of a design mistake.