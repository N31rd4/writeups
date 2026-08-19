from __future__ import annotations

import curses
from datetime import datetime
from textwrap import wrap
from uuid import uuid4

from .api import ApiClient, ApiError, UrllibTransport
from .models import Account, Note, generate_credentials


class ScribeApp:
    def __init__(self, stdscr: curses.window, *, server_url: str, proxy_url: str) -> None:
        self.stdscr = stdscr
        self.server_url = server_url
        self.proxy_url = proxy_url
        self.client = ApiClient(UrllibTransport(server_url, proxy_url))
        self.accounts: list[Account] = []
        self.active_account_index = 0
        self.status = "Press A to register a generated account."

    def run(self) -> None:
        self.stdscr.keypad(True)
        try:
            curses.curs_set(0)
        except curses.error:
            pass

        self._dashboard_loop()

    def _dashboard_loop(self) -> None:
        while True:
            self._draw_dashboard()
            key = self.stdscr.getch()

            if key in (ord("q"), ord("Q")):
                return
            if key == curses.KEY_RESIZE:
                continue
            if key in (9, curses.KEY_RIGHT, ord("]")):
                self._switch_account(1)
                continue
            if key in (curses.KEY_BTAB, curses.KEY_LEFT, ord("[")):
                self._switch_account(-1)
                continue
            if key in (ord("a"), ord("A"), ord("n"), ord("N")):
                self._register_generated_account()
                continue
            if key in (ord("l"), ord("L")):
                self._login_active_account()
                continue
            if key in (ord("v"), ord("V")):
                self._verify_active_account()
                continue
            if key in (ord("r"), ord("R")):
                self._load_notes()
                continue
            if key in (curses.KEY_UP, ord("k")):
                self._move_note_selection(-1)
                continue
            if key in (curses.KEY_DOWN, ord("j")):
                self._move_note_selection(1)
                continue
            if key in (10, 13, curses.KEY_ENTER, ord("o"), ord("O")):
                self._open_selected_note()
                continue
            if key in (ord("g"), ord("G")):
                self._open_note_by_id()
                continue
            if key in (ord("c"), ord("C")):
                self._create_note()
                continue
            if key in (ord("d"), ord("D")):
                self._delete_selected_note()

    def _draw_dashboard(self) -> None:
        self.stdscr.erase()
        height, width = self.stdscr.getmaxyx()
        if height < 14 or width < 60:
            self._add(0, 0, "Terminal too small: need at least 60x14.", curses.A_BOLD)
            self._add(1, 0, "Resize the terminal, then press any key.")
            self.stdscr.refresh()
            return

        self._add(0, 2, "Celestial Scribe", curses.A_BOLD)
        self._add(0, 20, self._clip(f"Target: {self.server_url}", width - 22), curses.A_DIM)
        self._add(1, 2, self._clip(f"Burp: {self.proxy_url}", width - 4), curses.A_DIM)
        self._draw_tabs(3, width)

        account = self.active_account
        if account is None:
            self._add(5, 2, "No account yet. Press A to generate and register one.", curses.A_BOLD)
        else:
            self._draw_account_workspace(account, height, width)

        self._add(height - 2, 2, self._clip(self.status, width - 4), curses.A_BOLD)
        controls = (
            "A: new account  Tab/[ ]: accounts  L: login  V: verify  R: notes  "
            "Enter: open  G: note ID  C: create  D: delete  Q: quit"
        )
        self._add(height - 1, 2, self._clip(controls, width - 4), curses.A_DIM)
        self.stdscr.refresh()

    def _draw_tabs(self, y: int, width: int) -> None:
        if not self.accounts:
            self._add(y, 2, "[ no account tabs ]", curses.A_DIM)
            return

        x = 2
        for index, account in enumerate(self.accounts):
            label = f" {index + 1}:{account.email.split('@', 1)[0]} "
            if x + len(label) >= width - 2:
                self._add(y, x, "...", curses.A_DIM)
                break
            attr = curses.A_REVERSE if index == self.active_account_index else curses.A_NORMAL
            self._add(y, x, label, attr)
            x += len(label) + 1

    def _draw_account_workspace(self, account: Account, height: int, width: int) -> None:
        self._add(5, 2, f"Account: {account.email}", curses.A_BOLD)
        self._add(6, 2, f"Password: {account.password}    JWT: {self._jwt_status(account)}")

        list_top = 8
        list_bottom = height - 3
        split = max(31, width // 2)
        self._add(list_top, 2, "Notes", curses.A_UNDERLINE)
        self._add(list_top, split + 2, "Selected note", curses.A_UNDERLINE)

        visible_rows = max(0, list_bottom - list_top - 1)
        self._draw_note_list(account, list_top + 1, visible_rows, split - 4)
        self._draw_note_detail(account.open_note, list_top + 1, visible_rows, split + 2, width - split - 4)

    def _draw_note_list(self, account: Account, y: int, rows: int, width: int) -> None:
        if not account.notes:
            self._add(y, 2, "Press R to verify and load notes.", curses.A_DIM)
            return

        start = max(0, account.selected_note_index - rows + 1)
        for offset, note in enumerate(account.notes[start : start + rows]):
            index = start + offset
            prefix = "> " if index == account.selected_note_index else "  "
            title = note.title or "(untitled)"
            created = self._format_timestamp(note.created_at)
            text = self._clip(f"{prefix}{title} [{created}]", width)
            attr = curses.A_REVERSE if index == account.selected_note_index else curses.A_NORMAL
            self._add(y + offset, 2, text, attr)

    def _draw_note_detail(self, note: Note | None, y: int, rows: int, x: int, width: int) -> None:
        if note is None:
            self._add(y, x, "Select a note and press Enter.", curses.A_DIM)
            return

        self._add(y, x, self._clip(note.title or "(untitled)", width), curses.A_BOLD)
        self._add(y + 1, x, self._clip(f"ID: {note.id}", width), curses.A_DIM)
        line_y = y + 3
        content_rows = max(0, rows - 3)
        lines: list[str] = []
        for paragraph in note.content.splitlines() or [""]:
            lines.extend(wrap(paragraph, width=width) or [""])
        for offset, line in enumerate(lines[:content_rows]):
            self._add(line_y + offset, x, self._clip(line, width))

    def _register_generated_account(self) -> None:
        client = self._require_client()
        if client is None:
            return
        email, password = generate_credentials()
        account = Account(email=email, password=password)
        self._set_working(f"Registering {email}...")
        try:
            client.register_account(account)
        except ApiError as error:
            self.status = f"Registration failed: {error}"
            return
        self.accounts.append(account)
        self.active_account_index = len(self.accounts) - 1
        self.status = f"Registered {email}. Password: {password}"

    def _login_active_account(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        self._set_working(f"Logging in as {account.email}...")
        try:
            client.login_account(account)
        except ApiError as error:
            self.status = f"Login failed: {error}"
            return
        self.status = f"Logged in as {account.email}."

    def _verify_active_account(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        self._set_working(f"Verifying {account.email}...")
        try:
            user_id = client.verify_account(account)
        except ApiError as error:
            self.status = f"Verification failed: {error}"
            return
        suffix = f" (user {user_id})" if user_id else ""
        self.status = f"JWT is valid{suffix}."

    def _load_notes(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        self._set_working(f"Verifying then loading notes for {account.email}...")
        try:
            notes = client.list_notes(account)
        except ApiError as error:
            self.status = f"Could not load notes: {error}"
            return
        self.status = f"Loaded {len(notes)} note(s) for {account.email}."

    def _open_selected_note(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        note = account.selected_note
        if note is None:
            self.status = "Load notes and select one first."
            return
        self._open_note(account, client, note.id)

    def _open_note_by_id(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        note_id = self._prompt("Note ID to open (Esc cancels): ")
        if note_id is None:
            self.status = "Open note cancelled."
            return
        if not note_id:
            self.status = "A note ID is required."
            return
        self._open_note(account, client, note_id)

    def _open_note(self, account: Account, client: ApiClient, note_id: str) -> None:
        self._set_working(f"Checking permission then opening {note_id}...")
        try:
            opened_note = client.get_note(account, note_id)
        except ApiError as error:
            self.status = f"Could not open note: {error}"
            return
        self.status = f"Opened {opened_note.title or opened_note.id}."

    def _create_note(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        title = self._prompt("New note title (Esc cancels): ")
        if title is None:
            self.status = "Note creation cancelled."
            return
        content = self._prompt("Content (use \\n for a line break, Esc cancels): ")
        if content is None:
            self.status = "Note creation cancelled."
            return
        note_id = str(uuid4())
        self._set_working("Creating note...")
        try:
            client.create_note(
                account, note_id=note_id, title=title, content=content.replace("\\n", "\n")
            )
            notes = client.list_notes(account)
        except ApiError as error:
            self.status = f"Could not create note: {error}"
            return
        self.status = f"Created note {note_id}; refreshed {len(notes)} note(s)."

    def _delete_selected_note(self) -> None:
        account = self._require_account()
        client = self._require_client()
        if account is None or client is None:
            return
        note = account.selected_note
        if note is None:
            self.status = "Load notes and select one first."
            return
        answer = self._prompt(f"Delete '{note.title or note.id}'? Type yes: ")
        if answer != "yes":
            self.status = "Deletion cancelled."
            return
        self._set_working(f"Deleting {note.id}...")
        try:
            client.delete_note(account, note.id)
            notes = client.list_notes(account)
        except ApiError as error:
            self.status = f"Could not delete note: {error}"
            return
        self.status = f"Deleted note; refreshed {len(notes)} note(s)."

    def _prompt(self, prompt: str) -> str | None:
        value = ""
        try:
            curses.curs_set(1)
        except curses.error:
            pass
        while True:
            self._draw_dashboard()
            height, width = self.stdscr.getmaxyx()
            visible_value = self._clip(value, max(0, width - len(prompt) - 5))
            self._add(height - 2, 2, self._clip(f"{prompt}{visible_value}_", width - 4), curses.A_REVERSE)
            self.stdscr.refresh()
            key = self.stdscr.getch()
            if key == 27:
                self._hide_cursor()
                return None
            if key in (10, 13, curses.KEY_ENTER):
                self._hide_cursor()
                return value
            if key in (curses.KEY_BACKSPACE, 127, 8):
                value = value[:-1]
                continue
            if 32 <= key <= 126:
                value += chr(key)

    def _set_working(self, message: str) -> None:
        self.status = message
        self._draw_dashboard()

    def _switch_account(self, direction: int) -> None:
        if not self.accounts:
            self.status = "Create an account first."
            return
        self.active_account_index = (self.active_account_index + direction) % len(self.accounts)
        self.status = f"Active account: {self.active_account.email}"

    def _move_note_selection(self, direction: int) -> None:
        account = self.active_account
        if account is None or not account.notes:
            return
        account.selected_note_index = (account.selected_note_index + direction) % len(account.notes)
        account.open_note = None

    def _require_account(self) -> Account | None:
        account = self.active_account
        if account is None:
            self.status = "Create an account first."
        return account

    def _require_client(self) -> ApiClient | None:
        if self.client is None:
            self.status = "The client is not configured."
        return self.client

    @property
    def active_account(self) -> Account | None:
        if 0 <= self.active_account_index < len(self.accounts):
            return self.accounts[self.active_account_index]
        return None

    @staticmethod
    def _jwt_status(account: Account) -> str:
        if account.last_authenticated_at is None:
            return "not authenticated"
        timestamp = account.last_authenticated_at.astimezone().strftime("%H:%M:%S")
        return f"obtained {timestamp} (re-login on 401/403)"

    @staticmethod
    def _format_timestamp(value: str | None) -> str:
        if not value:
            return "unknown"
        try:
            return datetime.fromisoformat(value.replace("Z", "+00:00")).astimezone().strftime("%H:%M")
        except ValueError:
            return value

    def _add(self, y: int, x: int, text: str, attr: int = curses.A_NORMAL) -> None:
        height, width = self.stdscr.getmaxyx()
        if not (0 <= y < height and 0 <= x < width):
            return
        try:
            self.stdscr.addnstr(y, x, text, max(0, width - x - 1), attr)
        except curses.error:
            pass

    @staticmethod
    def _clip(text: str, width: int) -> str:
        if width <= 0:
            return ""
        if len(text) <= width:
            return text
        if width == 1:
            return text[:1]
        return f"{text[: width - 1]}~"

    def _hide_cursor(self) -> None:
        try:
            curses.curs_set(0)
        except curses.error:
            pass


def run_tui(*, server_url: str, proxy_url: str) -> None:
    curses.wrapper(
        lambda stdscr: ScribeApp(stdscr, server_url=server_url, proxy_url=proxy_url).run()
    )
