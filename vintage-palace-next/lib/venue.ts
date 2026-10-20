export const SITE = {
  name: "The Vintage Palace",
  tagline: "Karwan · Hyderabad",
  url: "https://thevintagepalace.in",
  phone: "+91 91603 74743",
  phoneDial: "+919160374743",
  phoneAlt: "+91 80481 25640",
  phoneDialAlt: "+918048125640",
  whatsapp: "919160374743",
  address: {
    line1: "Pillar No. 102, Golconda Road",
    line2: "beside Mahaboob Pride Function Hall, Karwan West",
    city: "Hyderabad",
    region: "Telangana",
    pin: "500006",
    country: "IN",
  },
  geo: { lat: 17.3760139, lng: 78.4342205 },
  hours: "Site visits daily · 11:00 AM – 10:00 PM",
  slot: "Event slots from 10:00 AM; overnight programmes till ~6 AM",
} as const;

export const WHATSAPP_TEXT =
  "Hi! I'd like to enquire about The Vintage Palace for my event.";
export const waLink = (text: string = WHATSAPP_TEXT) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "The Venue" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROFILES = [
  { name: "Google Maps", href: "https://www.google.com/maps/search/The+Vintage+Palace+Golconda+Road+Karwan+Hyderabad", note: "4.3★ · 39 reviews · the fastest way to see us on the map.", num: "G" },
  { name: "WedMeGood", href: "https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842", note: "4.8★ from wedding couples. Full portfolio and guest reviews.", num: "W1" },
  { name: "Weddingz", href: "https://weddingz.in/hyderabad/the-vintage-palace-karwan", note: "Full specification sheet — capacities, policies, parking.", num: "W2" },
  { name: "Wedding.net", href: "https://hyderabad.wedding.net/venues/436745", note: "Detailed venue policies — slots, advance, room rules.", num: "N" },
  { name: "BanquetHub", href: "https://banquethub.in/venue/the-vintage-palace", note: "4.3★ with logistics scores and listing data.", num: "B" },
  { name: "Justdial", href: "https://www.justdial.com/Hyderabad/The-Vintage-Palace-Pillar-No102-Karwan/040PXX40-XX40-160820110934-W3X7_BZDET", note: "“Serving the community for many years as a leading banquet hall.”", num: "J" },
  { name: "WeddingWire", href: "https://www.weddingwire.in/banquet-halls/the-vintage-palace--e92296", note: "International directory profile and couple reviews.", num: "W3" },
  { name: "Wheree", href: "https://the-vintage-palace.wheree.com/", note: "4.4★ aggregate review summary and event-space category.", num: "E" },
  { name: "VenueMonk", href: "https://www.venuemonk.com/venues/hyderabad/the-vintage-palace-karwan", note: "Karwan listing with visiting-hour suggestions.", num: "V" },
] as const;

export const STATS = [
  { value: 3000, suffix: "", label: "Guest capacity" },
  { value: 700, suffix: "", label: "Seated in the hall" },
  { value: 1500, suffix: "", label: "Floating on the lawn" },
  { value: 110, suffix: "+", label: "Parking spaces" },
] as const;

export const PH = {
  chandelier: "ph ph--chandelier",
  lawn: "ph ph--lawn",
  foyer: "ph",
  lights: "ph ph--lights",
} as const;

export type Ph = keyof typeof PH;

export const SPACES = [
  {
    id: "hall",
    name: "The Palace Hall",
    tag: "Indoor · Fully air-conditioned",
    kind: "chandelier" as Ph,
    desc: "Crystal chandeliers over a polished floor, a raised stage for stage-tableaus and milestones, and cool comfort that holds from a 10 AM muhurat to a 2 AM vidaai.",
    quote: "Guest reviews single the interiors out again and again — “amazing interiors and nice ambience.” Eighteen event types are hosted here, from ring ceremonies to farewell proms.",
    amenities: ["Full air-conditioning", "Raised stage with mic + projector points", "TV screens for milestone reels", "Power backup with generator support", "Muhurat-friendly morning slots", "Accommodates multi-day functions"],
    seated: "400",
    floating: "700",
    flip: false,
  },
  {
    id: "lawn",
    name: "The Royal Lawn",
    tag: "Outdoor · Open-air",
    kind: "lawn" as Ph,
    desc: "A wide green canvas for mandaps, jaan entrances, live baraat with the dhol, and receptions that breathe under the open sky.",
    quote: "The lawn is where the palace shows its range — daytime haldi, golden-hour nikaah photographs, night-time sangeet drones. The in-house decorating panel turns it around for any theme inside hours.",
    amenities: ["Mandap & stage setups included in packages", "Hawan and baarat both welcomed", "Overnight weddings permitted (event till ~6 AM)", "Marigold, floral, and royal theme panels", "Separate dining annex keeps the floor clear", "Easy guest flow from ribbon-gate to stage"],
    seated: "950",
    floating: "1,500",
    flip: true,
  },
] as const;

export const SUPPORT_SPACES = [
  { title: "Bridal & Changing Suites", body: "Two complimentary, fully air-conditioned rooms with attached bathrooms for the couple and close family — ready from morning prep through the last outfit change. Additional guest rooms available on the premises." },
  { title: "Separate Dining Annex", body: "An independent dining wing — repeatedly named in reviews — so dinner queues never cross the greeting line, and the hall stays dressed and camera-perfect." },
  { title: "Parking & Arrival", body: "On-premises parking for 100–110 cars on the main Golconda Road corridor, with transport access guests call “easy.” Off-peak street support for peak-season overflow." },
] as const;

export const CAPACITIES = [
  { space: "The Palace Hall", ioo: "Indoor · AC", seated: "400", floating: "700", notes: "Chandeliers, stage, projector, TV screens" },
  { space: "The Royal Lawn", ioo: "Outdoor", seated: "950", floating: "1,500", notes: "Open-air, mandap, baraat entrance, hawan-ready" },
  { space: "Dining Annex", ioo: "Indoor", seated: "—", floating: "—", notes: "Independent service flow, kitchen coordination" },
  { space: "Bridal Suites", ioo: "Indoor · AC", seated: "—", floating: "—", notes: "2 complimentary + guest rooms on campus" },
] as const;

export const EXPERIENCES = [
  { num: "i", title: "The Wedding", body: "Multi-day ceremonies with halls, lawn, and a décor panel that reads a mood board like a manuscript. Muhurat dates get priority holds." },
  { num: "ii", title: "The Reception", body: "Stage greeting lines, a lit-up arch entrance, and a dining annex so dinner flows while hosts photograph and toast." },
  { num: "iii", title: "Sangeet & DJ Night", body: "Bring your own DJ (with licence) — reviews say the hall “was built to dance in.” Amplified sound, light rigs, late finish." },
  { num: "iv", title: "Haldi & Mehendi", body: "Tent courtyards on the lawn, dupatta lines, boardwalk seating for the aunties, and a wash-ready annex right behind." },
  { num: "v", title: "Engagement & Ring Ceremony", body: "Intimate seating around a dressed stage for 200–400; elders' blessing seats and photo-friendly lighting by default." },
  { num: "vi", title: "Nikaah Programme", body: "Reverently arranged mehfil seating, coordinated halal catering, and quiet family suites for the elders' sessions." },
  { num: "vii", title: "Birthday, Naming & Baby Showers", body: "Cake tables under the arch, soft balloon artistry on the panel's résumé, and rooms for the kids to nap." },
  { num: "viii", title: "Corporate & Seminars", body: "Projector and TV screens, stage with mic, boardroom-quiet AC hall, and tea-time in the annex. Conferences to prom fares." },
  { num: "ix", title: "Anniversaries & Reunions", body: "Milestone reels on the TVs, memory lanes of photos, and a turnout plan for three generations to sit well." },
] as const;

export const DAY_RHYTHM = [
  { pill: "Morning · from 10:00 AM", title: "Ready & dressed", body: "Bridal suite opens with the AC on. Décor team finishes the mandap while you sip your chai. Haldi and mehendi unfold on the lawn." },
  { pill: "Afternoon", title: "Ceremonies & lunch", body: "Rituals at the stage. Guests move to the dining annex in waves — no queue crossings, air conditioning wherever it counts." },
  { pill: "Evening · till late", title: "Lights, stage, farewell", body: "Chandeliers up, DJ on, chandelier-glow photographs — then a comfortable overnight wind-down with family rooms." },
] as const;

export type GalCat = "hall" | "lawn" | "moments";
export const GALLERY_FILTERS: { key: GalCat | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hall", label: "The Hall" },
  { key: "lawn", label: "The Lawn" },
  { key: "moments", label: "Celebrations" },
];
export const GALLERY_ITEMS: {
  cat: GalCat; cap: string; kind: Ph | "photo"; span?: boolean;
}[] = [
  { cat: "hall", cap: "The Vintage Palace — Golconda Road", kind: "photo", span: true },
  { cat: "hall", cap: "Palace Hall — the chandelier view", kind: "chandelier", span: true },
  { cat: "lawn", cap: "Royal Lawn — evening glow", kind: "lawn" },
  { cat: "hall", cap: "Grand Foyer — the welcome arch", kind: "foyer" },
  { cat: "moments", cap: "Sangeet night, lights low", kind: "lights" },
  { cat: "hall", cap: "Stage — milestones and reels", kind: "chandelier" },
  { cat: "lawn", cap: "Mehendi courtyard — marigold morning", kind: "lawn" },
  { cat: "moments", cap: "Reception evening — dressed to the nines", kind: "foyer" },
  { cat: "lawn", cap: "Mandap morning — hawan-ready", kind: "lawn" },
  { cat: "moments", cap: "Dining annex — the flow that never stops", kind: "foyer" },
  { cat: "hall", cap: "Bridal suite — morning prep, AC on", kind: "lights" },
  { cat: "moments", cap: "The farewell — petals and prayers", kind: "foyer" },
];

export const RATINGS = [
  { src: "Google", w: "86%", display: "4.3 / 5" },
  { src: "WedMeGood", w: "96%", display: "4.8 / 5" },
  { src: "Wheree", w: "88%", display: "4.4 / 5" },
  { src: "Reliability", w: "92%", display: "9.2 / 10" },
  { src: "Service quality", w: "90%", display: "9.0 / 10" },
  { src: "Customer service", w: "85%", display: "8.5 / 10" },
] as const;

export const LOVE_CHIPS = [
  "✦ Elegant interiors & chandeliers",
  "✦ Spacious halls",
  "✦ Well-organised seating",
  "✦ Courteous staff",
  "✦ Clean facilities",
  "✦ Separate dining areas",
  "✦ Grand celebrations handled calmly",
] as const;

export const VERBATIM = [
  { q: "This location was selected for the wedding and the entire experience here was so amazing. The whole place was so beautiful and everyone loved it.", who: "Ayesha", meta: "Wedding · WedMeGood · 5★", av: "A" },
  { q: "We had approximately 700 guests, all of them were seated properly and given proper catering. Everyone appreciated the venue very much.", who: "Setu Sanghavi", meta: "700-guest reception · WedMeGood · 4.5★", av: "S" },
  { q: "The destination was simply beautiful. Everything from lights to sitting to the staff was perfect.", who: "Snehith Reddy", meta: "Wedding · WedMeGood · 5★", av: "S" },
  { q: "They have amazing interiors and nice ambience — a spacious convention, very beautiful and apt for a wedding.", who: "Listed guest", meta: "WedMeGood review round-up", av: "K" },
] as const;

export const PACKAGES = [
  { name: "The Palace Hall", amt: "₹2.7L", unit: "from, per function", tag: "AC · Indoor", hero: false, badge: "", suit: "For ceremonies that love the indoors", items: ["400 seated · 700 floating", "Chandelier-lit, fully air-conditioned", "Stage, projector & TV screens", "2 complimentary AC bridal suites", "Power backup included in rental window"], cta: "Hold this number" },
  { name: "The Royal Lawn", amt: "₹3.5L", unit: "full day, open air", tag: "Most booked", hero: true, badge: "Most Booked", suit: "For the grandest of grand days", items: ["950 seated · 1,500 floating", "Mandap, baraat entrance & hawan-ready", "Dining annex with independent flow", "Overnight events permitted till ~6 AM", "Parking for 100–110 cars included"], cta: "Reserve a date" },
  { name: "Décor & Kitchen", amt: "₹30K", unit: "from, décor panel", tag: "", hero: false, badge: "", suit: "The finishing touches", items: ["Panel decorators from ₹30,000–₹40,000+", "In-house catering team (veg & non-veg)", "Menu tasting before the final quote", "18% GST on F&B, stated upfront", "Generator/diesel billed at actuals"], cta: "Get a décor brief" },
] as const;

export const PRICE_PRINCIPLES = [
  { t: "Published", b: "The base rentals you just read are the numbers we quote. No password-gated PDFs, no “call for price” games." },
  { t: "Itemised", b: "Advance, balance, décor, catering, GST and diesel — one payable sheet, line by line, before you commit." },
  { t: "Adjustable", b: "The ₹75,000 advance is non-refundable but fully adjustable across any occasion at the venue within 3 months." },
  { t: "Guided", b: "Our events desk walks you through the sheet on a call — every rupee explained in plain words." },
] as const;

export const PRICE_NOTE =
  "Advance ₹75,000 at booking · balance due 3 days before the event · non-refundable, but fully adjustable within 3 months across any occasion · GST & actuals extra. Bookings via cash, bank transfer, cheques or cards.";

export const POLICIES = [
  { q: "Booking & advance", a: "₹75,000 at booking; the remainder 3 days before the event date. Amounts are non-refundable but adjustable within 3 months for any occasion at the venue." },
  { q: "Décor policy", a: "Décor is executed by the venue's panel decorators (from ₹30,000). Outside decorator panels are not permitted, which keeps quality and teardown discipline consistent." },
  { q: "Catering", a: "The house kitchen and caterers serve veg and non-veg menus; outside food is generally not brought in. Final menu and per-plate pricing are fixed after tasting." },
  { q: "DJ & music", a: "The venue doesn't run a house DJ — bring your own with the required licence. Amplified sound respects neighbourhood late-night norms." },
  { q: "Alcohol", a: "Serving alcohol requires a valid liquor licence arranged by the host, with standard corkage norms thereafter." },
  { q: "What's not allowed", a: "Firecrackers are not permitted. Hawan is warmly permitted; baarat and overnight weddings are welcome." },
  { q: "Power & electricity", a: "Hall electrical usage and generator charges are billed at actuals (diesel beyond the base figure). Power backup is on-site throughout your slot." },
  { q: "Rooms", a: "Two complimentary fully-AC changing/bridal rooms with attached bathrooms; additional guest rooms on campus (standard doubles from about ₹1,000/night)." },
  { q: "Taxes & payment", a: "18% GST applies on F&B; venue rental terms as quoted. Pay by cash, bank transfer, cheque, or credit/debit card." },
] as const;

export const FAQS = [
  { q: "How many guests can The Vintage Palace host?", a: "600–3,000: the Palace Hall seats 400 (700 floating); the Royal Lawn seats 950 (1,500 floating). Combined evening events have run near 3,000." },
  { q: "What's the total budget shape?", a: "Rental from ₹2.7L (hall) or ₹3.5L full day (lawn) + décor from ₹30K + food per plate + 18% GST on F&B + generator actuals. The events desk gives a single payable sheet before you commit." },
  { q: "Can we visit before booking?", a: "Always. Site visits run daily 11 AM–10 PM. Call +91 91603 74743 or use the contact form." },
  { q: "Is the date adjustable if plans change?", a: "Yes — payments are non-refundable but adjustable within 3 months for any occasion at the venue, subject to availability." },
  { q: "Do you allow outside caterers?", a: "The venue's in-house kitchen handles catering to hold quality and hygiene steady. Special-diet and multi-cuisine requests are welcomed at the briefing." },
  { q: "Which documents do we bring for booking?", a: "A basic ID and the advance amount. For liquor service, the host arranges a valid liquor licence. For your own DJ, a music licence." },
  { q: "Is parking really enough for 1,000+ guests?", a: "On-premises parking holds 100–110 cars, and the main-road location keeps drop-and-park queues moving. For very large evenings, arrive early — as with most venues in the old city." },
  { q: "How early should we book for muhurat dates?", a: "Muhurat-season Saturdays pull date requests months ahead. Enquire at least 3–4 months out for peak dates; off-season flexibility extends to the 3-month adjustability window." },
] as const;

export const MARQUEE = [
  "Weddings", "Receptions", "Sangeet", "Mehendi", "Engagements", "Nikaah", "Birthdays", "Corporate Events", "Anniversaries", "Baby Showers",
] as const;
