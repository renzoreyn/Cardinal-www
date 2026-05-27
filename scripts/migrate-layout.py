#!/usr/bin/env python3
"""Strip duplicated header/footer from pages and use layout partials."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAGES = {
    "index.html": "/",
    "terminology.html": "/terminology.html",
    "roadmap.html": "/roadmap.html",
    "philosophy.html": "/philosophy.html",
    "world.html": "/world.html",
    "agents.html": "/agents.html",
    "memory.html": "/memory.html",
    "generations.html": "/generations.html",
    "emergence.html": "/emergence.html",
    "simulation.html": "/simulation.html",
    "observer.html": "/observer.html",
}

SCRIPTS = """  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js"></script>
  <script src="/assets/js/nav-config.js"></script>
  <script src="/assets/js/layout.js"></script>
  <script src="/assets/js/nav.js"></script>
  <script src="/assets/js/context-menu.js"></script>
  <script src="/assets/js/animations.js"></script>"""

CHROME_START = re.compile(
    r'<div class="nav-progress"[^>]*></div>[\s\S]*?</div>\s*</div>\s*\n\s*<main>',
)

FOOTER_BLOCK = re.compile(
    r'\n\s*<footer class="site-footer">[\s\S]*?</footer>\s*\n',
    re.MULTILINE,
)

OLD_SCRIPTS = re.compile(
    r'\n\s*<script src="https://cdn\.jsdelivr\.net/npm/gsap[\s\S]*?</script>\s*\n</body>',
    re.MULTILINE,
)

BODY_TAG = re.compile(r'<body class="is-loading">')


def migrate(name: str, data_page: str) -> None:
    path = ROOT / name
    text = path.read_text(encoding="utf-8")

    text = BODY_TAG.sub(f'<body class="is-loading" data-page="{data_page}">', text, count=1)

    if 'id="site-header"' not in text:
        text = CHROME_START.sub("\n\n  <div id=\"site-header\"></div>\n\n  <main>", text, count=1)
        if 'id="site-header"' not in text:
            raise RuntimeError(f"{name}: could not replace header block")

    text = FOOTER_BLOCK.sub("\n\n  <div id=\"site-footer\"></div>\n\n", text, count=1)
    if 'id="site-footer"' not in text:
        raise RuntimeError(f"{name}: could not replace footer block")

    text = OLD_SCRIPTS.sub(f"\n{SCRIPTS}\n</body>", text, count=1)

    path.write_text(text, encoding="utf-8")
    print("migrated", name)


def main() -> None:
    for name, page in PAGES.items():
        migrate(name, page)


if __name__ == "__main__":
    main()
