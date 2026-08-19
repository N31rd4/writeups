from __future__ import annotations

import unittest
from dataclasses import dataclass
from typing import Any, Mapping
from urllib.request import Request

from scribe_tui.api import (
    ApiClient,
    ApiError,
    ForcedProxyHandler,
    TransportResponse,
    normalize_url,
)
from scribe_tui.models import Account


@dataclass
class CapturedCall:
    method: str
    path: str
    headers: dict[str, str]
    json_body: dict[str, Any] | None


class FakeTransport:
    def __init__(self, responses: list[TransportResponse]) -> None:
        self.responses = responses
        self.calls: list[CapturedCall] = []

    def request(
        self,
        method: str,
        path: str,
        *,
        headers: Mapping[str, str],
        json_body: Mapping[str, Any] | None = None,
    ) -> TransportResponse:
        self.calls.append(
            CapturedCall(method, path, dict(headers), dict(json_body) if json_body else None)
        )
        if not self.responses:
            raise AssertionError(f"Unexpected call: {method} {path}")
        return self.responses.pop(0)


class ApiClientTests(unittest.TestCase):
    def test_normalize_url_adds_http_and_rejects_base_paths(self) -> None:
        self.assertEqual(
            normalize_url("127.0.0.1:8080", label="Burp proxy URL"), "http://127.0.0.1:8080"
        )
        with self.assertRaisesRegex(ValueError, "server root"):
            normalize_url("http://target.example/api", label="HTB server URL")

    def test_forced_proxy_handler_does_not_honor_no_proxy(self) -> None:
        handler = ForcedProxyHandler("http://127.0.0.1:8080")
        request = Request("http://target.example/api/notes")

        handler.proxy_open(request, "http://127.0.0.1:8080", "http")

        self.assertEqual(request.host, "127.0.0.1:8080")
        self.assertEqual(request.selector, "http://target.example/api/notes")

    def test_register_sends_observed_payload_and_stores_jwt(self) -> None:
        transport = FakeTransport([TransportResponse(200, {"success": True, "token": "jwt-1"})])
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a")

        client.register_account(account)

        self.assertEqual(account.token, "jwt-1")
        self.assertEqual(len(transport.calls), 1)
        self.assertEqual(transport.calls[0].method, "POST")
        self.assertEqual(transport.calls[0].path, "/api/auth/register")
        self.assertEqual(
            transport.calls[0].json_body, {"email": "u123@a.a", "password": "a"}
        )

    def test_list_notes_verifies_before_requesting_notes(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(200, {"success": True, "userId": "user-1"}),
                TransportResponse(
                    200,
                    {
                        "success": True,
                        "notes": [
                            {"id": "note-1", "title": "First", "createdAt": "2026-01-01T00:00:00Z"}
                        ],
                    },
                ),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="current-jwt")

        notes = client.list_notes(account)

        self.assertEqual([call.path for call in transport.calls], ["/api/auth/verify", "/api/notes"])
        self.assertTrue(all(call.headers["Authorization"] == "Bearer current-jwt" for call in transport.calls))
        self.assertEqual(account.user_id, "user-1")
        self.assertEqual(notes[0].title, "First")

    def test_get_note_checks_permission_before_fetching_content(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(200, {"success": True}),
                TransportResponse(
                    200,
                    {
                        "success": True,
                        "note": {
                            "id": "note/1",
                            "title": "Private",
                            "content": "contents",
                            "createdAt": "2026-01-01T00:00:00Z",
                        },
                    },
                ),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="current-jwt")

        note = client.get_note(account, "note/1")

        self.assertEqual(
            [call.path for call in transport.calls],
            ["/api/notes/note%2F1/check-permission", "/api/notes/note%2F1"],
        )
        self.assertEqual(note.content, "contents")
        self.assertIs(account.open_note, note)

    def test_list_notes_relogs_after_expired_jwt_during_verify(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(401, {"success": False, "error": "Token expired"}),
                TransportResponse(200, {"success": True, "token": "fresh-jwt"}),
                TransportResponse(200, {"success": True, "userId": "user-1"}),
                TransportResponse(200, {"success": True, "notes": []}),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="expired-jwt")

        notes = client.list_notes(account)

        self.assertEqual(notes, [])
        self.assertEqual(account.token, "fresh-jwt")
        self.assertEqual(
            [(call.method, call.path) for call in transport.calls],
            [
                ("GET", "/api/auth/verify"),
                ("POST", "/api/auth/login"),
                ("GET", "/api/auth/verify"),
                ("GET", "/api/notes"),
            ],
        )
        self.assertEqual(transport.calls[0].headers["Authorization"], "Bearer expired-jwt")
        self.assertEqual(transport.calls[1].json_body, {"email": "u123@a.a", "password": "a"})
        self.assertEqual(transport.calls[2].headers["Authorization"], "Bearer fresh-jwt")
        self.assertEqual(transport.calls[3].headers["Authorization"], "Bearer fresh-jwt")

    def test_note_request_retries_once_after_auth_failure(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(403, {"success": False, "error": "Expired"}),
                TransportResponse(200, {"success": True, "token": "fresh-jwt"}),
                TransportResponse(200, {"success": True}),
                TransportResponse(
                    200,
                    {
                        "success": True,
                        "note": {"id": "note-1", "title": "Title", "content": "Body"},
                    },
                ),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="expired-jwt")

        client.get_note(account, "note-1")

        self.assertEqual(
            [(call.method, call.path) for call in transport.calls],
            [
                ("GET", "/api/notes/note-1/check-permission"),
                ("POST", "/api/auth/login"),
                ("GET", "/api/notes/note-1/check-permission"),
                ("GET", "/api/notes/note-1"),
            ],
        )
        self.assertEqual(transport.calls[0].headers["Authorization"], "Bearer expired-jwt")
        self.assertEqual(transport.calls[2].headers["Authorization"], "Bearer fresh-jwt")
        self.assertEqual(transport.calls[3].headers["Authorization"], "Bearer fresh-jwt")

    def test_list_notes_auth_failure_restarts_with_verify(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(200, {"success": True, "userId": "user-1"}),
                TransportResponse(401, {"success": False, "error": "Expired"}),
                TransportResponse(200, {"success": True, "token": "fresh-jwt"}),
                TransportResponse(200, {"success": True, "userId": "user-1"}),
                TransportResponse(200, {"success": True, "notes": []}),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="expired-jwt")

        client.list_notes(account)

        self.assertEqual(
            [(call.method, call.path) for call in transport.calls],
            [
                ("GET", "/api/auth/verify"),
                ("GET", "/api/notes"),
                ("POST", "/api/auth/login"),
                ("GET", "/api/auth/verify"),
                ("GET", "/api/notes"),
            ],
        )

    def test_note_content_auth_failure_restarts_with_permission_check(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(200, {"success": True}),
                TransportResponse(401, {"success": False, "error": "Expired"}),
                TransportResponse(200, {"success": True, "token": "fresh-jwt"}),
                TransportResponse(200, {"success": True}),
                TransportResponse(
                    200,
                    {
                        "success": True,
                        "note": {"id": "note-1", "title": "Title", "content": "Body"},
                    },
                ),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="expired-jwt")

        client.get_note(account, "note-1")

        self.assertEqual(
            [(call.method, call.path) for call in transport.calls],
            [
                ("GET", "/api/notes/note-1/check-permission"),
                ("GET", "/api/notes/note-1"),
                ("POST", "/api/auth/login"),
                ("GET", "/api/notes/note-1/check-permission"),
                ("GET", "/api/notes/note-1"),
            ],
        )

    def test_mutating_request_is_not_replayed_after_auth_failure(self) -> None:
        transport = FakeTransport(
            [
                TransportResponse(403, {"success": False, "error": "Expired"}),
                TransportResponse(200, {"success": True, "token": "fresh-jwt"}),
            ]
        )
        client = ApiClient(transport)
        account = Account(email="u123@a.a", password="a", token="expired-jwt")

        with self.assertRaisesRegex(ApiError, "JWT was refreshed"):
            client.create_note(account, note_id="note-1", title="Title", content="Body")

        self.assertEqual(account.token, "fresh-jwt")
        self.assertEqual(
            [(call.method, call.path) for call in transport.calls],
            [("POST", "/api/notes"), ("POST", "/api/auth/login")],
        )


if __name__ == "__main__":
    unittest.main()
