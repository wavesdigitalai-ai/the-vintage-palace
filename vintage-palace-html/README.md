# The Vintage Palace — static website

A static, no-build venue website (HTML + CSS + vanilla JS) for **The Vintage Palace**, Pillar No. 102, Golconda Road, beside Mahaboob Pride Function Hall, Karwan West, Hyderabad 500006. Phone: **+91 91603 74743**.

Pages: `index.html` → `venue.html` → `experiences.html` → `gallery.html` → `reviews.html` → `pricing.html` → `contact.html`. Enquiry happens via a WhatsApp popup (no server, no backend needed).

A Next.js version of this same site lives at **`vintage-palace-next/`** in the parent repo — same content, same design, same logic.

---

## 1. Pages & what they do

| Page | Purpose |
|---|---|
| `index.html` | Hero (real venue photo), story, stats band, spaces, 8 experiences, guest quote, reviews teaser, gallery teaser, CTA |
| `venue.html` | Palace Hall (AC, 400/700), Royal Lawn (950/1,500), dining annex, bridal suites, capacity table |
| `experiences.html` | 9 occasion cards + the day's rhythm (morning/afternoon/evening flow) |
| `gallery.html` | Filterable gallery (Hall / Lawn / Celebrations) with keyboard-accessible lightbox |
| `reviews.html` | 4.3★ Google (39), 4.8★ WedMeGood, verbatim guest quotes, honest "plan one thing" note, links to all 9 directory profiles |
| `pricing.html` | ₹2.7L hall / ₹3.5L lawn / décor from ₹30K, house policies, FAQ with `FAQPage` JSON-LD |
| `contact.html` | Address, phones, hours, enquiry form → WhatsApp deep-link, embedded Google map |

## 2. Put it online FREE with GitHub Pages

```bash
git init -b main
git add .
git commit -m "The Vintage Palace — first launch"
git remote add origin https://github.com/<YOUR-USERNAME>/vintage-palace.git
git push -u origin main
```

Create the empty repo at **github.com/new** first (Public, no README). Then: **Settings → Pages → Deploy from a branch → main → /(root)**. Live in ~2 minutes at `https://<user>.github.io/vintage-palace/`.

## 3. Custom domain (recommended)

The SEO files currently point to `https://thevintagepalace.in/`. When you buy the domain:

1. Add a `CNAME` file containing `thevintagepalace.in`.
2. DNS: A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` + CNAME `www → <username>.github.io`.
3. **Settings → Pages → Custom domain** = `thevintagepalace.in`, then **Enforce HTTPS**.

If you stay on the free `github.io` URL, search-and-replace `https://thevintagepalace.in` across all 7 HTML heads + `sitemap.xml` + `robots.txt`.

## 4. Photos — replace the illustrations with real shots

The gallery currently uses elegant CSS/SVG-style placeholders (`ph-*` classes) plus one real photo (`images/venue-hero.jpg`). To swap in professional photos:

1. Add photos to `images/` (JPG, ~1600px wide, compressed — use squoosh.app).
2. In `gallery.html`, replace each `<figure class="gal-item">` placeholder `<div class="ph ph--chandelier" …></div>` with `<img src="images/hall-1.jpg" alt="…">`.
3. Same pattern on `venue.html` and `index.html` space cards.

Suggested shot list (matches the tiles): chandelier hall wide, stage dressed, lawn at dusk, mandap morning, mehendi courtyard, foyer arch, dining annex, bridal suite, evening lights, farewell.

## 5. Free SEO / Google setup checklist

- [ ] **Google Business Profile** (business.google.com) — claim "The Vintage Palace" at Pillar No. 102, Golconda Rd, Karwan. Category: *Banquet hall / Event venue*. NAP must match this site exactly (name, address, +91 91603 74743). Link the site URL. This powers Google Maps + the local pack — the #1 traffic source for venues.
- [ ] **Google Search Console** — add property, verify via DNS, submit `https://your-domain/sitemap.xml`, request indexing on all 7 pages.
- [ ] **Backlinks already wired in**: footer "Find Us On" badges + the Reviews page link to WedMeGood, Weddingz, Wedding.net, Justdial, BanquetHub, WeddingWire, Wheree, VenueMonk, Google Maps — all nine existing directory profiles of this venue. This cross-references every NAP citation the venue already owns.
- [x] Built in already: `EventVenue` + `WebSite` + `FAQPage` + `BreadcrumbList` JSON-LD, `aggregateRating`, geo meta, Open Graph + Twitter cards, canonical URLs, sitemap + robots, semantic landmarks, skip-link, alt text, lazy-loading, `fetchpriority` on hero, `prefers-reduced-motion` support.
- [ ] After 2–3 weeks: check Search Console → Performance, and Google Business → Insights.

## 6. Local preview

Just open `index.html` in a browser — everything runs from the filesystem.

## 7. Verified venue facts used (sources)

- Address + phone: Google/Justdial/Wheree listings (Pillar No. 102, Golconda Rd; +91 91603 74743)
- Capacities: WedMeGood (400 seated/700 indoor floating; 950 seated/1,500 lawn floating), Wedding.net, Weddingz (110 vehicles)
- Rental benchmarks: ₹2,70,000 per function (WedMeGood, Wedding.net), ₹3,50,000 full-day lawn (VenueMonk listing), décor from ₹30,000–₹40,000, advance ₹75,000, GST 18% F&B
- Policies: panel decorators only, own DJ with licence, liquor licence for alcohol, no firecrackers, hawan/baarat allowed, overnight events, 2 complimentary AC changing rooms
- Reviews: verbatim from WedMeGood (Ayesha 5★, Setu Sanghavi 4.5★, Snehith Reddy 5★); aggregate analysis from Wheree (elegant interiors, courteous staff, separate dining areas, 9.2 reliability); constructive parking note at peak events
