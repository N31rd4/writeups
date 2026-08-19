# Capture Repository Notes

- `api/*.burp` are Burp Suite XML 1.1 request/response exports, not executable scripts. The standalone Python client is in `celestial_scribe_tui/`; the captures themselves have no build, test, lint, or task configuration.
- Preserve the Burp XML structure (including its DTD and CDATA request/response blocks) when editing exports. Burp warns that future exports can contain NULL bytes; use its base64 encoding option if a strict XML parser cannot read one.

## Replay Flow

- `register.burp` records a successful `POST /api/auth/register` and returns a bearer token. `login.burp` is a `401` failure example, not a successful-authentication baseline.
- `verify.burp` validates `Authorization: Bearer <token>`; every notes request uses that header. Obtain fresh tokens and note IDs instead of replaying the captured JWTs and UUIDs.
- `get_notes.burp` lists note IDs. Use an ID with `get_note.burp`, `check_note.burp`, or `delete_note.burp`; `post_notes.burp` supplies a client-generated `id`, `title`, and `content`.
- The captures target `http://154.57.164.82:30785`. Registration, note creation, and deletion mutate that remote service; replay only against an authorized target and avoid `delete_note.burp` for routine validation.

## Python TUI

- Run the client from `celestial_scribe_tui/` with `python3 run.py --htb-url <target-root-url> --proxy-url <burp-listener-url>`; both CLI arguments are required and it has no runtime dependencies. Run its focused, offline tests with `python3 -m unittest discover -s tests -v`.
- Keep request behavior in `scribe_tui/api.py` aligned with the captures: all traffic uses the explicitly configured Burp proxy, listing notes verifies the JWT first, and opening note content checks permission first.
- Accounts and JWTs are memory-only. Read flows re-authenticate and retry their full sequence once only for `401`/`403`; mutations refresh the JWT but require a manual retry to avoid duplicate side effects.
