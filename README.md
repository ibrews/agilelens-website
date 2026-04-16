# Agile Lens Website

The marketing website for [Agile Lens](https://agilelens.com) — a 10-year-old immersive XR design studio. Built with Next.js + Tailwind CSS, deployed on GitHub Pages.

**Live:** https://ibrews.github.io/agilelens-website/

Six pages: Home, Products, Portfolio (21 projects), Team (15 members), Contact, and three homepage variations (Clean/Minimal, Bold/Theatrical, Tech/Futurist).

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Things to Try

1. **Run `npm run dev` and open `http://localhost:3000`** — the homepage loads with hero section, service pillars, 6 product cards, and 5 testimonials; no login or data setup required.
2. **Visit `/variations/a`, `/variations/b`, and `/variations/c`** — three distinct homepage designs (Clean/Minimal, Bold/Theatrical, Tech/Futurist) show the same content in radically different visual styles; pick one as the direction for the real site.
3. **Open the Portfolio page at `/portfolio`** — 21 real Agile Lens projects organized across Architecture, Entertainment, Marketing, and R&D categories with filter tabs.
4. **Open `src/` and edit any copy in the Home page component** — Next.js HMR reflects the change in the browser immediately without a full reload.
5. **Run `node check-links.mjs`** — crawls all internal links and reports any broken hrefs; all should resolve green on a clean install.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- GitHub Pages (static export via `next.config.ts`)
- Formspree for contact form
