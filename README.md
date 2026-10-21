# The Vintage Palace — Karwan, Hyderabad

Website system for "The Vintage Palace" wedding venue (Pillar No. 102, Golconda
Road, Karwan, Hyderabad 500006), maintained as **two twins with identical
content and an identical editorial design** (Cormorant Garamond + Manrope,
warm-paper/ink/brass palette, scroll-reveal motion; enquiry is WhatsApp-first —
header links and all CTA buttons open `wa.me/919160374743` with a prefilled
message, the phone number stays as a `tel:` link in the footer/drawer/fact
sheet for people who prefer to call, and there is no forms backend):

| Folder | Stack | Where to publish |
|---|---|---|
| `vintage-palace-html/` | Static HTML + CSS + vanilla JS | **GitHub Pages (live via this repo's workflow)** |
| `vintage-palace-next/` | Next.js 16 / React 19 / Tailwind v4 | **Vercel (planned — client sign-off pending)** |

Every fact on the site is verified against the venue's public listings
(Weddingz, WedMeGood, Wedding.net, BanquetHub, Justdial, Wheree) and sourced
reviews are quoted verbatim; the pricing page shows verified numbers only and
marks seasonal rental "on request".

## GitHub Pages (live)
The included workflow (`.github/workflows/deploy-pages.yml`) publishes the
static HTML twin to Pages on every push touching it. You can find it under
Actions → "Deploy static site (HTML) to GitHub Pages". URL is published as
shown in the deployment's environment, and it serves the contents of
`vintage-palace-html/`.

To change site content for the live site, edit only `vintage-palace-html/`.
Keep the Next.js twin in sync when facts change — sourced facts, pricing and
policies are documented in `vintage-palace-html/README.md`, and
`vintage-palace-next/README.md` documents the shared data contract (`lib/venue.ts`).

## Local preview
```bash
# Static twin — open in a browser
start vintage-palace-html\index.html

# Next.js twin
cd vintage-palace-next
npm install     # first time
npm run dev
```
