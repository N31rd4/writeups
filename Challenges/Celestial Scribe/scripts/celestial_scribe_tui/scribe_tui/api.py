from __future__ import annotations

from collections.abc import Callable, Mapping
from dataclasses import dataclass
from datetime import datetime, timezone
import json
from typing import Any, Protocol, TypeVar
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit
from urllib.request import ProxyHandler, Request, build_opener

from .models import Account, Note, NoteSummary


AUTH_FAILURE_STATUSES = frozenset({401, 403})
T = TypeVar("T")


class ApiError(RuntimeError):
    def __init__(self, message: str, *, status: int | None = None) -> None:
        super().__init__(message)
        self.status = status

    @property
    def is_auth_failure(self) -> bool:
        return self.status in AUTH_FAILURE_STATUSES


@dataclass(frozen=True, slots=True)
class TransportResponse:
    status: int
    body: Any


class Transport(Protocol):
    def request(
        self,
        method: str,
        path: str,
        *,
        headers: Mapping[str, str],
        json_body: Mapping[str, Any] | None = None,
    ) -> TransportResponse: ...


def normalize_url(value: str, *, label: str) -> str:
    value = value.strip()
    if not value:
        raise ValueError(f"{label} is required.")
    if "://" not in value:
        value = f"http://{value}"

    parsed = urlsplit(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ValueError(f"{label} must be a complete HTTP(S) URL.")
    if parsed.path not in {"", "/"}:
        raise ValueError(f"{label} must point to the server root, not a path.")
    if parsed.query or parsed.fragment:
        raise ValueError(f"{label} must not include a query string or fragment.")
    return value.rstrip("/")


class UrllibTransport:
    """JSON HTTP transport that deliberately ignores environment proxy settings."""

    def __init__(self, server_url: str, proxy_url: str, *, timeout: float = 15.0) -> None:
        self.server_url = normalize_url(server_url, label="HTB server URL")
        self.proxy_url = normalize_url(proxy_url, label="Burp proxy URL")
        self.timeout = timeout
        self._opener = build_opener(ForcedProxyHandler(self.proxy_url))

    def request(
        self,
        method: str,
        path: str,
        *,
        headers: Mapping[str, str],
        json_body: Mapping[str, Any] | None = None,
    ) -> TransportResponse:
        data = None
        request_headers = {"Accept": "application/json", "User-Agent": "CelestialScribeTUI/0.1"}
        request_headers.update(headers)
        if json_body is not None:
            data = json.dumps(json_body).encode("utf-8")
            request_headers["Content-Type"] = "application/json; charset=utf-8"

        full_path = path if path.startswith("/") else f"/{path}"
        request = Request(
            f"{self.server_url}{full_path}",
            data=data,
            headers=request_headers,
            method=method,
        )
        try:
            with self._opener.open(request, timeout=self.timeout) as response:
                return TransportResponse(response.status, self._decode_body(response.read()))
        except HTTPError as error:
            return TransportResponse(error.code, self._decode_body(error.read()))
        except URLError as error:
            reason = getattr(error, "reason", error)
            raise ApiError(f"Network error: {reason}") from error
        except TimeoutError as error:
            raise ApiError("The request timed out.") from error

    @staticmethod
    def _decode_body(raw_body: bytes) -> Any:
        if not raw_body:
            return None
        text = raw_body.decode("utf-8", errors="replace")
        try:
            return json.loads(text)
        except json.JSONDecodeError:
            return text


class ForcedProxyHandler(ProxyHandler):
    """Route every request through the configured proxy, ignoring NO_PROXY."""

    def __init__(self, proxy_url: str) -> None:
        super().__init__({"http": proxy_url, "https": proxy_url})

    def proxy_open(self, req: Request, proxy: str, type: str):
        parsed = urlsplit(proxy)
        if parsed.username is not None or parsed.password is not None:
            raise ApiError("Burp proxy credentials are not supported.")
        if not parsed.hostname:
            raise ApiError("Burp proxy URL has no host.")
        req.set_proxy(parsed.netloc, parsed.scheme or type)
        return None


class ApiClient:
    """Implements the request ordering observed in the Burp captures."""

    def __init__(self, transport: Transport) -> None:
        self._transport = transport

    def register_account(self, account: Account) -> None:
        payload = self._request(
            "POST",
            "/api/auth/register",
            json_body={"email": account.email, "password": account.password},
        )
        self._store_token(account, payload)

    def login_account(self, account: Account) -> None:
        payload = self._request(
            "POST",
            "/api/auth/login",
            json_body={"email": account.email, "password": account.password},
        )
        self._store_token(account, payload)

    def verify_account(self, account: Account) -> str | None:
        return self._with_reauthentication(account, lambda: self._verify_once(account))

    def list_notes(self, account: Account) -> list[NoteSummary]:
        def operation() -> list[NoteSummary]:
            # A notes listing is always preceded by a fresh verify request.
            self._verify_once(account)
            payload = self._authorized_request_once(account, "GET", "/api/notes")
            raw_notes = payload.get("notes")
            if not isinstance(raw_notes, list):
                raise ApiError("The API response does not contain a notes list.")

            try:
                notes = [
                    NoteSummary.from_payload(item)
                    for item in raw_notes
                    if isinstance(item, Mapping)
                ]
            except ValueError as error:
                raise ApiError(str(error)) from error
            if len(notes) != len(raw_notes):
                raise ApiError("The API returned a malformed note list.")
            return notes

        notes = self._with_reauthentication(account, operation)
        account.set_notes(notes)
        return notes

    def check_note_permission(self, account: Account, note_id: str) -> None:
        self._with_reauthentication(account, lambda: self._check_note_permission_once(account, note_id))

    def get_note(self, account: Account, note_id: str) -> Note:
        def operation() -> Note:
            # The mobile client capture checks access before fetching note content.
            self._check_note_permission_once(account, note_id)
            payload = self._authorized_request_once(
                account, "GET", f"/api/notes/{self._quote_note_id(note_id)}"
            )
            raw_note = payload.get("note")
            if not isinstance(raw_note, Mapping):
                raise ApiError("The API response does not contain a note.")
            try:
                return Note.from_payload(raw_note)
            except ValueError as error:
                raise ApiError(str(error)) from error

        note = self._with_reauthentication(account, operation)
        account.open_note = note
        return note

    def create_note(self, account: Account, *, note_id: str, title: str, content: str) -> str:
        payload = self._mutating_authorized_request(
            account,
            "POST",
            "/api/notes",
            json_body={"id": note_id, "title": title, "content": content},
        )
        returned_id = payload.get("noteId")
        if returned_id is not None and not isinstance(returned_id, str):
            raise ApiError("The API returned an invalid note id.")
        return returned_id or note_id

    def delete_note(self, account: Account, note_id: str) -> None:
        self._mutating_authorized_request(
            account, "DELETE", f"/api/notes/{self._quote_note_id(note_id)}"
        )

    def _verify_once(self, account: Account) -> str | None:
        if not account.token:
            raise ApiError("This account has no JWT. Log in first.")
        payload = self._request(
            "GET",
            "/api/auth/verify",
            headers=self._authorization_header(account),
        )
        user_id = payload.get("userId")
        account.user_id = user_id if isinstance(user_id, str) else account.user_id
        return account.user_id

    def _check_note_permission_once(self, account: Account, note_id: str) -> None:
        self._authorized_request_once(
            account,
            "GET",
            f"/api/notes/{self._quote_note_id(note_id)}/check-permission",
        )

    def _with_reauthentication(self, account: Account, operation: Callable[[], T]) -> T:
        if not account.token:
            self.login_account(account)
        try:
            return operation()
        except ApiError as error:
            if not error.is_auth_failure:
                raise
            self.login_account(account)
            return operation()

    def _authorized_request_once(
        self,
        account: Account,
        method: str,
        path: str,
        *,
        json_body: Mapping[str, Any] | None = None,
    ) -> dict[str, Any]:
        if not account.token:
            raise ApiError("This account has no JWT. Log in first.")

        return self._request(
            method, path, headers=self._authorization_header(account), json_body=json_body
        )

    def _mutating_authorized_request(
        self,
        account: Account,
        method: str,
        path: str,
        *,
        json_body: Mapping[str, Any] | None = None,
    ) -> dict[str, Any]:
        if not account.token:
            self.login_account(account)
        try:
            return self._authorized_request_once(account, method, path, json_body=json_body)
        except ApiError as error:
            if not error.is_auth_failure:
                raise
            self.login_account(account)
            raise ApiError(
                "The JWT was refreshed; repeat the mutating operation manually.",
                status=error.status,
            ) from error

    def _request(
        self,
        method: str,
        path: str,
        *,
        headers: Mapping[str, str] | None = None,
        json_body: Mapping[str, Any] | None = None,
    ) -> dict[str, Any]:
        response = self._transport.request(
            method, path, headers=headers or {}, json_body=json_body
        )
        if response.status >= 400:
            raise ApiError(self._error_message(response.body), status=response.status)
        if not isinstance(response.body, dict):
            raise ApiError("The API returned a non-JSON-object response.", status=response.status)
        if response.body.get("success") is False:
            raise ApiError(self._error_message(response.body), status=response.status)
        return response.body

    @staticmethod
    def _authorization_header(account: Account) -> dict[str, str]:
        if not account.token:
            raise ApiError("This account has no JWT. Log in first.")
        return {"Authorization": f"Bearer {account.token}"}

    @staticmethod
    def _error_message(body: Any) -> str:
        if isinstance(body, Mapping):
            message = body.get("error") or body.get("message")
            if isinstance(message, str) and message:
                return message
        if isinstance(body, str) and body:
            return body
        return "The API request failed."

    @staticmethod
    def _quote_note_id(note_id: str) -> str:
        if not note_id:
            raise ApiError("A note id is required.")
        return quote(note_id, safe="")

    @staticmethod
    def _store_token(account: Account, payload: Mapping[str, Any]) -> None:
        token = payload.get("token")
        if not isinstance(token, str) or not token:
            raise ApiError("The API response does not contain a JWT.")
        account.token = token
        account.last_authenticated_at = datetime.now(timezone.utc)
