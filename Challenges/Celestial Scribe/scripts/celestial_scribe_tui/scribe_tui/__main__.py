from __future__ import annotations

import argparse
from collections.abc import Sequence

from .api import normalize_url
from .ui import run_tui


def _url_argument(label: str):
    def parse(value: str) -> str:
        try:
            return normalize_url(value, label=label)
        except ValueError as error:
            raise argparse.ArgumentTypeError(str(error)) from error

    return parse


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Multi-account TUI client for the Celestial Scribe HTB API."
    )
    parser.add_argument(
        "--htb-url",
        required=True,
        type=_url_argument("HTB server URL"),
        help="HTB target root URL, for example http://154.57.164.82:30785",
    )
    parser.add_argument(
        "--proxy-url",
        required=True,
        type=_url_argument("Burp proxy URL"),
        help="Burp proxy listener URL, for example http://127.0.0.1:8080",
    )
    return parser


def main(argv: Sequence[str] | None = None) -> None:
    args = build_parser().parse_args(argv)
    run_tui(server_url=args.htb_url, proxy_url=args.proxy_url)


if __name__ == "__main__":
    main()
