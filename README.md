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
| `/philosophy.html` | System philosophy |
| `/world.html` | World model |
| `/agents.html` | Agent architecture |
| `/memory.html` | Memory & communication |
| `/generations.html` | Generations & inheritance |
| `/emergence.html` | Emergence targets |
| `/simulation.html` | Simulation loop & events |
| `/observer.html` | Observer layer |

## Stack

- Plain HTML/CSS/JS (no build step)
- [GSAP](https://gsap.com/) + ScrollTrigger for animations
- [Lucide](https://lucide.dev/) icons
