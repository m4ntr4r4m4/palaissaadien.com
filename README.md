# Palais Saadien

A single-page marketing site for **Palais Saadien** — a heritage Moroccan boutique in the Medina of Marrakech, home of the Abouothman family's collection of Berber rugs and Arabian treasures (a tradition dating to the 1940s).

Built with the Next.js App Router and shipped as a fully static site to GitHub Pages.

> **Status:** prototype (`palais-saadien-nextjs-prototype`, v0.1.0)

## Tech stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI library | React 18.3 |
| Language | JavaScript (no TypeScript) |
| Styling | Plain CSS (`app/globals.css`) with CSS custom properties |
| Fonts | Cinzel + Outfit (Google Fonts) |
| Output | Static export (`output: 'export'`) |
| Hosting | GitHub Pages (via GitHub Actions) |

## Project structure

```
.
├── app/
│   ├── layout.js        # Root layout + page metadata
│   ├── page.js          # The full single-page site (client component)
│   └── globals.css      # Global styles, theme tokens, animations
├── public/
│   └── images/
│       ├── geometric-pattern.png
│       ├── magical-door.png        # Hero image
│       ├── the-family/             # family-1..4.jpg (Collections slideshow)
│       └── the-galleries/          # gallery-1..9.jpg (gallery grid)
├── .github/workflows/deploy.yml    # Build + deploy to GitHub Pages
├── next.config.mjs                 # Static-export + image config
├── jsconfig.json                   # baseUrl for path resolution
└── package.json
```

### The page

`app/page.js` renders the entire site as one scrolling page with anchor navigation:

- **Hero** — full-bleed "magical door" image with intro copy and CTAs
- **Heritage** (`#heritage`) — the Maison Abouothman story
- **Wonderland** (`#wonderland`) — a grid gallery of collection pieces
- **Collections** (`#collections`) — an auto-advancing family-photo slideshow (4s interval)
- **Visit** (`#visit`) — address, contact details, Google Maps and Instagram links
- **Footer** — copyright

## Getting started

Requires Node.js 20+ (CI uses Node 20; this repo was developed on Node 22).

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Produce a static export in `out/` |
| `npm run start` | Serve a production build |
| `npm run lint` | Run Next.js linting |

## Building & deploying

The site is configured for static export (`output: 'export'` in `next.config.mjs`), so `npm run build` emits a static `out/` directory with no server runtime required.

Deployment is automated by `.github/workflows/deploy.yml`: every push to `main` (or a manual run from the Actions tab) builds the site with `next build` and publishes the `out/` artifact to GitHub Pages.

### Images

Next.js image optimization is disabled (`images.unoptimized: true`) because static export cannot run the image optimizer. Images are served as-is from `public/images`.

## Notes

- **Merge conflict in `next.config.mjs`:** the committed file currently contains unresolved Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). This will fail the build until resolved. The two sides disagree on `basePath` and `remotePatterns` — pick the correct configuration for your deployment (GitHub Pages typically needs `basePath: '/<repo-name>'`) and remove the markers before building.
- This is a marketing/prototype front end only — there is no backend, CMS, or form handling.

## Contact (from the site)

**Palais Saadien** · 1, Haram Cheikh. Ksour — Médina · Marrakech, Morocco 40000
📧 info@palaissaadien.com · 📞 +212 5 24 44 51 76 · [Instagram](https://instagram.com/palaissaadien)
