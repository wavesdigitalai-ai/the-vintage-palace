# The Vintage Palace — Next.js Site (arsenal twin of the static build)

**Payload:** `next build` prerenders every route as static HTML. No server needed — deploy to Vercel, Netlify, or any Node host.

## Stack
- Next 16.3.0 (App Router, Turbopack) · React 19.2.8
- Tailwind CSS v4 (postcss plugin, theme in `app/globals.css`)
- framer-motion 13 · lucide-react 1.x
- TypeScript strict

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static prerender — verify before push
npm run lint    # must stay clean
```

## Structure
```
app/            layout.tsx (fonts, metadata, JSON-LD) + 7 pages + sitemap.ts + robots.ts
components/     SiteHeader, SiteFooter, WaFab, Reveal, SplitText, Counter, Marquee,
                ParallaxImage, Ph, GalleryGrid (filter + lightbox), EnquiryForm, PageHero
lib/venue.ts    SINGLE SOURCE OF TRUTH — every fact, price, quote, profile lives here
public/images/  venue-hero.jpg (real photo) — drop replacements/Addl photos here
```

## Content rules (keep the HTML twin in sync)
`vintage-palace-html/` mirrors this site in plain HTML/CSS/JS. When changing any fact,
edit **both** `lib/venue.ts` **and** the matching HTML page. Facts are sourced in the
HTML README — prices (₹2.7L hall / ₹3.5L lawn / ₹75K advance / 18% GST), capacities
(700 hall, 1,500 lawn), policies (panel decor, own DJ, liquor licence, no
firecrackers) and the four verbatim reviews must not drift.

## SEO shipped
- JSON-LD: EventVenue + aggregateRating (site-wide), WebSite, BreadcrumbList (per page), FAQPage (pricing)
- OG/Twitter cards, canonical via `metadataBase`, geo meta, `sitemap.xml`, `robots.txt`
- Phone as main enquiry path: tel `+91 91603 74743`, WhatsApp `wa.me/919160374743`

## Before going live
1. **Domain**: replace every `https://thevintagepalace.in` if the real domain differs (`lib/venue.ts` SITE.url, `app/sitemap.ts`, `app/robots.ts`, `app/venue|experiences|gallery|reviews|pricing|contact` JSON-LD, `app/layout.tsx`).
2. **Photos**: replace the CSS `Ph` placeholders with real images (`public/images/`), update `GALLERY_ITEMS` kinds from `Ph` types to `photo` entries, and swap the sections that hardcode `venue-hero.jpg` behind parallax blocks.
3. **Deploy** (Vercel easiest): import repo → zero config → add domain + redirect from www.
4. **Google Business Profile + Search Console**: submit `sitemap.xml`, claim the map listing, seed the GBP with the same photos.
