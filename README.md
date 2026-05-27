# Cardinal Research Docs

Static research documentation site for the Cardinal project. Built for Cloudflare Pages.

## Local preview

```bash
npx serve .
```

Or with Python:

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to Cloudflare Pages

### Dashboard

1. Push this folder to a Git repository.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)

### Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy . --project-name=cardinal-docs
```

## Structure

| Path | Content |
|------|---------|
| `/` | Overview |
| `/terminology.html` | Lexicon (Cardinal, Scintilla, Substrate, Continuity, Administrator) |
| `/roadmap.html` | MVP Roadmap (phases and deferred work) |
| `/philosophy.html` | System philosophy |
| `/world.html` | Inside Cardinal |
| `/agents.html` | Scintillae |
| `/memory.html` | Continuity & communication |
| `/generations.html` | Generations & inheritance |
| `/emergence.html` | Emergence targets |
| `/simulation.html` | Substrate loop & events |
| `/observer.html` | Observer layer (Administrator view) |

## Shared layout

Every page uses `#site-header` and `#site-footer` placeholders. `assets/js/layout.js` injects the navbar and footer on load.

**Edit navigation in one place:** `assets/js/nav-config.js`

- `CARDINAL_NAV` — desktop + mobile nav links (and right-click context menu). Uses project lexicon labels (Scintillae, Continuity, Substrate, etc.).
- `CARDINAL_FOOTER_LINKS` — footer columns

Set `data-page` on `<body>` (for example `data-page="/agents.html"`) so the active link gets `aria-current="page"`.

Preview with a local server (`npx serve .`). Opening HTML files directly (`file://`) will not run the layout scripts correctly.

## Stack

- Plain HTML/CSS/JS (no build step)
- [GSAP](https://gsap.com/) + ScrollTrigger for animations
- [Lucide](https://lucide.dev/) icons
