from __future__ import annotations

from contextlib import redirect_stderr
from io import StringIO
import unittest
from unittest.mock import patch

from scribe_tui.__main__ import build_parser, main


class CliTests(unittest.TestCase):
    def test_both_urls_are_required(self) -> None:
        parser = build_parser()

        with redirect_stderr(StringIO()):
            with self.assertRaises(SystemExit) as error:
                parser.parse_args([])

        self.assertEqual(error.exception.code, 2)

    def test_urls_are_normalized_before_starting_the_tui(self) -> None:
        with patch("scribe_tui.__main__.run_tui") as run_tui:
            main(["--htb-url", "target.example:30785", "--proxy-url", "127.0.0.1:8080"])

        run_tui.assert_called_once_with(
            server_url="http://target.example:30785",
            proxy_url="http://127.0.0.1:8080",
        )

    def test_urls_with_paths_are_rejected(self) -> None:
        parser = build_parser()

        with redirect_stderr(StringIO()):
            with self.assertRaises(SystemExit) as error:
                parser.parse_args(
                    [
                        "--htb-url",
                        "http://target.example/api",
                        "--proxy-url",
                        "http://127.0.0.1:8080",
                    ]
                )

        self.assertEqual(error.exception.code, 2)


if __name__ == "__main__":
    unittest.main()
