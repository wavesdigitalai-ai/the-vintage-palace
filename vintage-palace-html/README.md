# The Vintage Palace — static website

A static, no-build venue website (HTML + CSS + vanilla JS) for **The Vintage Palace**, Pillar No. 102, Golconda Road, beside Mahaboob Pride Function Hall, Karwan West, Hyderabad 500006. Phone: **+91 91603 74743**.

Design: minimalist editorial system — Cormorant Garamond display + Manrope body, paper/ink/brass palette, scroll-reveal motion (line-masked hero titles, directional reveals, parallax, counters), full-bleed real photography. **No frameworks, no build step, no WhatsApp anywhere** — enquiry is a phone call and a site visit, like the venue itself works.

Pages: `index.html` → `venue.html` → `experiences.html` → `gallery.html` → `reviews.html` → `pricing.html` → `contact.html`. All content is real and sourced — nothing placeholder, nothing invented.

A Next.js version of this same site lives at **`../vintage-palace-next/`** in the parent repo — same content, same design, same logic.

---

## 1. Pages & what they do

| Page | Purpose |
|---|---|
| `index.html` | Full-bleed hero (real photo), manifesto, marquee, story chapters, stat counters, verified Ayesha quote, dark occasions list, gallery teaser, reviews strip, CTA |
| `venue.html` | The banquet hall (400 seated · 700 floating), the mandap, the dining hall (₹400/₹500 plates), the floodlit garden (950/1,500) + plain fact sheet |
| `experiences.html` | Nine occasions (wedding, sangeet, nikaah, birthdays, corporate…) + the day's rhythm (morning / afternoon / evening) |
| `gallery.html` | Ten real, filterable photographs (hall / garden / dining / after dark) with keyboard-accessible lightbox |
| `reviews.html` | 4.8★ WedMeGood (3 reviews), 4.3★ Google (39, via Wheree), 9.2/10 BanquetHub — three verbatim dated quotes + the honest note (non-AC halls, peak parking) + all nine directory profiles |
| `pricing.html` | Verified numbers only: ₹400 veg / ₹500 non-veg plates + 18% GST, ₹1,000 avg rooms, ₹75,000 advance, rental on request — full policy sheet + FAQ |
| `contact.html` | The events desk phone, address & directions (coords 17.375808, 78.434052), visiting hours, what to have ready when you call, embedded map |

Deliberate design stances: **no warning-toast flourishes, no fake urgency, no invented packages.** The pricing page quotes only figures published on the venue's own listings; seasonal rental is marked "on request".

## 2. Motion system (`assets/js/main.js` + `assets/css/style.css`)

- `[data-lines]` hero titles split into line-masked reveals; hero photo carries a slow ken-burns.
- `.rv` reveal-on-scroll (IntersectObserver) with `rv--left/right` variants and `--d` stagger.
- `[data-parallax]` gentle media drift; `[data-count]` stat counters; `.chip[data-filter]` gallery filtering; lightbox with arrow keys/Escape.
- `prefers-reduced-motion` disables all of it.

## 3. Deployment (already live)

Served by GitHub Pages from this folder via `.github/workflows/deploy-pages.yml` at **https://wavesdigitalai-ai.github.io/the-vintage-palace/**. Custom-domain DNS steps, if the domain is bought later, are in the root `README.md`.

## 4. Free SEO / Google setup checklist

- [ ] **Google Business Profile** — claim "The Vintage Palace" at Pillar No. 102, Golconda Rd, Karwan. Category: *Banquet hall / Event venue*. NAP must match this site exactly. Link the site URL.
- [ ] **Google Search Console** — verify, submit `sitemap.xml`, request indexing on all 7 pages.
- [x] Built in: `EventVenue` + `BreadcrumbList` JSON-LD (no `aggregateRating` — third-party rating markup is against Google guidelines; ratings are shown visually with source links), geo meta, Open Graph, canonical URLs, semantic landmarks, skip-link, alt text, lazy-loading, `fetchpriority` on heroes, `prefers-reduced-motion`.

## 5. Local preview

Open `index.html` in a browser — everything runs from the filesystem.

## 6. Verified venue facts used (sources)

- Address + phone: Justdial, Google Maps, Wheree, Weddingz (they agree).
- Capacities & capacities policies: WedMeGood listing (hall 400/700; garden 950/1,500), Weddingz services/policies sheet (parking 110, no valet).
- Prices: Weddingz / Wedding.net published figures — veg ₹400 & non-veg ₹500 per plate, 18% GST on F&B, five rooms avg ₹1,000/night, ₹75,000 advance. Seasonal rental quotes are NOT published publicly, so the site shows "on request" honestly.
- Policy truth: halls are **not air-conditioned** (Weddingz policy sheet); outside caterers and outside decorators both permitted; outside DJ permitted (no house DJ), no late-night amplified music; outside alcohol with corkage; hawan, baarat and overnight weddings allowed; no fireworks; changing rooms non-AC.
- Reviews: verbatim from WedMeGood — Snehith Reddy 5★ (Apr 2025), Ayesha 5★ (Apr 2020), Setu Sanghavi 4.5★ (Dec 2018).
- Photography: ten shots from the venue's own public albums on Weddingz & WedMeGood (credited in the footer).
