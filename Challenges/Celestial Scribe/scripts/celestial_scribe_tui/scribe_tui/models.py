from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
import secrets
from typing import Any, Mapping


@dataclass(slots=True)
class NoteSummary:
    id: str
    title: str
    created_at: str | None = None

    @classmethod
    def from_payload(cls, payload: Mapping[str, Any]) -> "NoteSummary":
        note_id = payload.get("id")
        if not isinstance(note_id, str) or not note_id:
            raise ValueError("The API returned a note without a valid id.")

        title = payload.get("title")
        created_at = payload.get("createdAt")
        return cls(
            id=note_id,
            title=title if isinstance(title, str) else "",
            created_at=created_at if isinstance(created_at, str) else None,
        )


@dataclass(slots=True)
class Note(NoteSummary):
    content: str = ""

    @classmethod
    def from_payload(cls, payload: Mapping[str, Any]) -> "Note":
        summary = NoteSummary.from_payload(payload)
        content = payload.get("content")
        return cls(
            id=summary.id,
            title=summary.title,
            created_at=summary.created_at,
            content=content if isinstance(content, str) else "",
        )


@dataclass(slots=True)
class Account:
    email: str
    password: str
    token: str | None = None
    user_id: str | None = None
    last_authenticated_at: datetime | None = None
    notes: list[NoteSummary] = field(default_factory=list)
    selected_note_index: int = 0
    open_note: Note | None = None

    @property
    def selected_note(self) -> NoteSummary | None:
        if 0 <= self.selected_note_index < len(self.notes):
            return self.notes[self.selected_note_index]
        return None

    def set_notes(self, notes: list[NoteSummary]) -> None:
        previous_id = self.selected_note.id if self.selected_note else None
        self.notes = notes
        self.open_note = None

        if not notes:
            self.selected_note_index = 0
            return

        if previous_id:
            for index, note in enumerate(notes):
                if note.id == previous_id:
                    self.selected_note_index = index
                    return

        self.selected_note_index = min(self.selected_note_index, len(notes) - 1)


def generate_credentials() -> tuple[str, str]:
    """Return a unique email and the one-character password verified by the capture."""

    local_part = f"u{secrets.token_hex(6)}"
    return f"{local_part}@a.a", "a"
