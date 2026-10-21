# The Vintage Palace — Next.js site (design twin of the static build)

**Payload:** `next build` prerenders every route as static HTML. No server needed — deploy to Vercel, Netlify, or any Node host.

## Stack
- Next 16.3.0 (App Router, Turbopack) · React 19.2.8
- Tailwind CSS v4 (postcss plugin) + the shared editorial stylesheet in `app/globals.css`
  (same tokens/markup as `../vintage-palace-html/assets/css/style.css`)
- next/font: Cormorant Garamond (display) + Manrope (body)
- TypeScript strict · no framer-motion · no placeholder components · no forms backend (enquiry is WhatsApp)

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static prerender (11 routes) — verify before push
npm run lint    # must stay clean (0 errors; img-element warnings by design)
```

## Structure
```
app/              layout.tsx (fonts, metadata, JSON-LD) + 7 pages + sitemap.ts + robots.ts
components/       Motion.tsx (progress + line-split reveals + parallax + counters, client)
                  SiteHeader.tsx (scrolled state + drawer) · SiteFooter.tsx (+ CtaDark/CtaActions)
                  PageHero.tsx (+ BreadcrumbJsonLd) · GalleryGrid.tsx (filter chips + lightbox)
lib/venue.ts      SINGLE SOURCE OF TRUTH — facts, prices, quotes, profiles
public/images/    10 real photographs from the venue's Weddingz / WedMeGood albums
public/favicon.svg
```

## Content parity with the HTML twin
`../vintage-palace-html/` mirrors this site in plain HTML/CSS/JS and is what GitHub Pages
serves. When any fact changes, edit **both** `lib/venue.ts` **and** the matching HTML page +
`assets/css/style.css` if styles change. The verified fact sheet (capacities, ₹400/₹500
plates, 18% GST, ₹75k advance, 5 rooms @ ₹1,000, 110-car parking, no AC — well-ventilated,
outside caterers/decorators/DJ permitted, no late amplified music, no fireworks) is
documented in `../vintage-palace-html/README.md`; the twin must not drift.

## SEO shipped
- JSON-LD: EventVenue + WebSite (site-wide, **no aggregateRating** — third-party rating
  markup), BreadcrumbList (per page)
- OG/Twitter cards, canonical via `metadataBase`, geo meta (17.375808, 78.434052)
- Enquiry path is WhatsApp: `wa.me/919160374743` with a prefilled message (`waLink` helper in `lib/venue.ts`) — `tel:+919160374743` stays in the footer/drawer/fact-sheet; no forms backend
- `sitemap.ts` + `robots.ts`

## Before going live
1. **Domain**: replace every `https://thevintagepalace.in` (`lib/venue.ts` SITE.url, `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`) if the real domain differs.
2. **Deploy** (Vercel easiest): import the repo → zero config → add domain + redirect from www.
3. **Google Business Profile + Search Console**: submit `sitemap.xml`, claim the map listing, seed the GBP with the same ten photographs.
