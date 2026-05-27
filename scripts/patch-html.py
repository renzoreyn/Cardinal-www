#!/usr/bin/env python3
"""Patch all HTML pages with shared head, nav, and layout fixes."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

HEAD_OLD = re.compile(
    r'<link rel="icon"[^>]+>\s*'
    r'<link rel="preconnect"[^>]+>\s*'
    r'<link rel="preconnect"[^>]+>\s*'
    r'<link href="https://fonts\.googleapis\.com/css2\?family=Fraunces[^"]+" rel="stylesheet" />\s*'
    r'<link rel="stylesheet" href="/assets/css/main\.css" />',
    re.DOTALL,
)

HEAD_NEW = """  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/main.css" />"""

NAV_ITEMS = [
    ("/", "home", "Overview"),
    ("/philosophy.html", "compass", "Philosophy"),
    ("/world.html", "globe", "World"),
    ("/agents.html", "users", "Agents"),
    ("/memory.html", "brain", "Memory"),
    ("/generations.html", "git-branch", "Generations"),
    ("/emergence.html", "sparkles", "Emergence"),
    ("/simulation.html", "activity", "Simulation"),
    ("/observer.html", "eye", "Observer"),
]

PAGES = {
    "index.html": "/",
    "philosophy.html": "/philosophy.html",
    "world.html": "/world.html",
    "agents.html": "/agents.html",
    "memory.html": "/memory.html",
    "generations.html": "/generations.html",
    "emergence.html": "/emergence.html",
    "simulation.html": "/simulation.html",
    "observer.html": "/observer.html",
}


def nav_link(href, icon, label, current_href):
    cur = ' aria-current="page"' if href == current_href else ""
    return f"""        <li><a href="{href}"{cur}><i data-lucide="{icon}" width="14" height="14"></i> {label}</a></li>"""


def mobile_link(href, icon, label, current_href):
    cur = ' aria-current="page"' if href == current_href else ""
    return f"""        <li><a href="{href}"{cur}><span class="mobile-nav__icon"><i data-lucide="{icon}" width="20" height="20"></i></span>{label}</a></li>"""


def build_nav(current_href):
    desktop = "\n".join(nav_link(h, i, l, current_href) for h, i, l in NAV_ITEMS)
    mobile = "\n".join(mobile_link(h, i, l, current_href) for h, i, l in NAV_ITEMS)
    return f"""  <div class="nav-progress" aria-hidden="true"></div>
  <div class="noise" aria-hidden="true"></div>
  <div class="cursor-glow" aria-hidden="true"></div>

  <header class="site-nav">
    <div class="site-nav__inner">
      <a href="/" class="site-nav__brand">
        <span class="site-nav__brand-icon"><i data-lucide="flame" width="22" height="22"></i></span>
        <span class="site-nav__brand-text">Cardinal</span>
      </a>
      <nav class="site-nav__desktop" aria-label="Main navigation">
        <ul class="site-nav__links">
{desktop}
        </ul>
      </nav>
      <button class="site-nav__toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
        <span class="site-nav__toggle-icon site-nav__toggle-icon--open"><i data-lucide="menu" width="22" height="22"></i></span>
        <span class="site-nav__toggle-icon site-nav__toggle-icon--close"><i data-lucide="x" width="22" height="22"></i></span>
      </button>
    </div>
  </header>

  <div class="mobile-nav" id="mobile-nav" aria-hidden="true" inert>
    <button type="button" class="mobile-nav__backdrop" tabindex="-1" aria-label="Close menu"></button>
    <div class="mobile-nav__panel" role="dialog" aria-label="Navigation">
      <div class="mobile-nav__head">
        <span class="mobile-nav__title">Cardinal</span>
        <button type="button" class="mobile-nav__close" aria-label="Close menu"><i data-lucide="x" width="22" height="22"></i></button>
      </div>
      <ul class="mobile-nav__list">
{mobile}
      </ul>
    </div>
  </div>"""


NAV_OLD = re.compile(
    r'  <div class="nav-progress"[^>]*></div>\s*'
    r'(?:<div class="noise"[^>]*></div>\s*)'
    r'(?:<div class="vignette"[^>]*></div>\s*)?'
    r'<div class="cursor-glow"[^>]*></div>\s*'
    r'<header class="site-nav">.*?</header>',
    re.DOTALL,
)


def patch_file(path: Path, current_href: str):
    text = path.read_text(encoding="utf-8")
    text = HEAD_OLD.sub(HEAD_NEW, text)
    text = NAV_OLD.sub(build_nav(current_href), text)
    text = text.replace('style="margin-top: 2.5rem;"', 'class="mt-2"')
    text = text.replace('style="margin-top: 2rem;"', 'class="mt-2"')
    text = text.replace('style="margin-top: 1.5rem; text-align: center;"', 'class="text-center mt-2"')
    text = text.replace('style="margin: 1.5rem auto 0; text-align: center; color: var(--ash-dim);"', 'class="text-center mt-2"')
    text = text.replace('style="margin-top: 2rem; text-align: center;"', 'class="text-center mt-2"')
    text = text.replace('style="justify-content: center; margin-top: 2.5rem;"', 'class="hero__cta hero__cta--center mt-2"')
    text = text.replace('container--narrow" style="margin: 0 auto;"', 'container--narrow"')
    text = text.replace('style="margin: 0 auto;"', '')
    path.write_text(text, encoding="utf-8")
    print("patched", path.name)


def main():
    for filename, current in PAGES.items():
        patch_file(ROOT / filename, current)


if __name__ == "__main__":
    main()
