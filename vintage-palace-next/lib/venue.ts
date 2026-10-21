export const SITE = {
  name: "The Vintage Palace",
  tagline: "Karwan Â· Hyderabad",
  url: "https://thevintagepalace.in",
  phone: "+91 91603 74743",
  phoneDial: "+919160374743",
  whatsapp: "919160374743",
  address: {
    line1: "Pillar No. 102, Golconda Road",
    line2: "beside Mahaboob Pride Function Hall, Karwan West",
    city: "Hyderabad",
    region: "Telangana",
    pin: "500006",
    country: "IN",
  },
  geo: { lat: 17.375808, lng: 78.434052 },
  hours: "Site visits daily Â· 11 am â€“ 10 pm",
  slot: "Booking slots from 10 am Â· overnight weddings permitted",
} as const;


export const WHATSAPP_TEXT = "Hi! I'd like to enquire about The Vintage Palace for my event.";
export const waLink = (text: string = WHATSAPP_TEXT) =>
  `https://wa.me/919160374743?text=${encodeURIComponent(text)}`;
export const NAV = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "The Venue" },
  { href: "/experiences", label: "Occasions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const PROFILES = [
  { name: "Google Maps", href: "https://www.google.com/maps/search/The+Vintage+Palace+Golconda+Road+Karwan+Hyderabad", note: "4.3â˜… Â· 39 reviews Â· the fastest way to see us on the map." },
  { name: "WedMeGood", href: "https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842", note: "4.8â˜… from wedding couples Â· full portfolio and the three published reviews." },
  { name: "Weddingz", href: "https://weddingz.in/hyderabad/the-vintage-palace-karwan/", note: "Full specification sheet â€” capacities, policies, parking, plate prices." },
  { name: "Wedding.net", href: "https://hyderabad.wedding.net/venues/436745", note: "Detailed venue policies â€” slots, advance, rooms." },
  { name: "BanquetHub", href: "https://banquethub.in/venue/the-vintage-palace", note: "Logistics scores â€” 9.2/10 reliability, 9.0 service, 8.5 customer care." },
  { name: "WeddingWire", href: "https://www.weddingwire.in/banquet-halls/the-vintage-palace--e92296", note: "International directory profile." },
  { name: "Justdial", href: "https://www.justdial.com/Hyderabad/The-Vintage-Palace-Pillar-No102-Karwan/040PXX40-XX40-160820110934-W3X7_BZDET", note: "\"Serving the community for many years as a leading banquet hall.\"" },
  { name: "Wheree", href: "https://the-vintage-palace.wheree.com/", note: "4.4â˜… aggregate review summary and event-space category." },
  { name: "VenueMonk", href: "https://www.venuemonk.com/venues/hyderabad/the-vintage-palace-karwan", note: "Karwan listing with visiting-hour suggestions." },
] as const;

export const STATS = [
  { value: 400, label: "Hall, seated" },
  { value: 700, label: "Hall, floating" },
  { value: 950, label: "Garden, seated" },
  { value: 110, label: "Parking spaces" },
] as const;

export const IMG = {
  "venue-hero": "/images/venue-hero.jpg",
  "reception-floor": "/images/reception-floor.jpg",
  "stage-violet": "/images/stage-violet.jpg",
  "hall-theatre": "/images/hall-theatre.jpg",
  "hall-day": "/images/hall-day.jpg",
  "mandap-seats": "/images/mandap-seats.jpg",
  "dining-night": "/images/dining-night.jpg",
  "dining-halls": "/images/dining-halls.jpg",
  "gold-arches": "/images/gold-arches.jpg",
  "lawn-floodlit": "/images/lawn-floodlit.jpg",
} as const;

export type ImgKey = keyof typeof IMG;

export const CHAPTERS = [
  {
    num: "01 Â· The banquet hall",
    title: ["Gold arches, high ceiling, ", "one tall stage"],
    img: "hall-day" as ImgKey,
    caption: "The hall in daylight â€” family seating for the rites",
    lead: "The hall seats up to 400 guests in ritual-facing rows and holds 700 across the floor. Ornate gold-on-ivory arches wrap the walls; the stage is raised so elders and cameras both find sight-lines.",
    checks: ["Stage, projector and TV screens included", "Well-ventilated interiors â€” cooling arrangements on request", "Suitable from morning muhurats to late-evening receptions"],
  },
  {
    num: "02 Â· The mandap",
    title: ["Carved white ", "columns", ", red florals"],
    img: "mandap-seats" as ImgKey,
    caption: "The carved mandap, dressed for the rites",
    lead: "The venue's own decorator builds a mandap from carved white columns and red floral arches â€” hawan is warmly permitted, and baarat entrances are welcome. Prefer your own decorator? Outside panels are allowed.",
    checks: ["In-house decorator with outside panels permitted", "Hawan and multi-ritual layouts welcomed", "Dress-up themes from marigold to minimal gold"],
  },
  {
    num: "03 Â· The dining hall",
    title: ["A service that ", "never queues"],
    img: "dining-night" as ImgKey,
    caption: "Dinner dressed in wine & gold",
    lead: "An independent dining hall keeps dinner flowing while hosts meet guests at the stage. Tables arrive dressed â€” wine covers, gold sashes, and the in-house kitchen's spread before guests walk in.",
    checks: ["Menu from â‚¹400 a plate (veg) Â· â‚¹500 (non-veg)", "Outside caterers permitted, subject to the briefing", "Jain & special-diet requests welcomed"],
  },
  {
    num: "04 Â· The floodlit garden",
    title: ["An open-air ", "stage", " under the arches"],
    img: "lawn-floodlit" as ImgKey,
    caption: "The floodlit garden, after dark",
    lead: "The garden seats 950 and floats 1,500. Palms and potted green frame the lawn; a lit rose-window arch makes the evening look royal from every angle.",
    checks: ["Baraat entrances, jaan processions â€” all welcomed", "Overnight weddings permitted", "Drone shots coordinated at booking"],
  },
] as const;

export const FACTS = [
  { k: "Address", v: "Pillar No. 102, Golconda Road, beside Mahaboob Pride Function Hall, Karwan West, Hyderabad, Telangana 500006" },
  { k: "Spaces", v: "Banquet hall (400 seated Â· 700 floating) Â· floodlit garden (950 seated Â· 1,500 floating) Â· dining hall" },
  { k: "Phone", v: "+91 91603 74743 â€” site visits daily, 11 am â€“ 10 pm" },
  { k: "Parking", v: "On-premises parking for 110 vehicles (no valet)" },
  { k: "Rooms", v: "Five rooms on premises (average â‚¹1,000/night) Â· changing rooms available (non-AC)" },
  { k: "Food", v: "Venue kitchen, veg â‚¹400 / non-veg â‚¹500 per plate Â· outside caterers permitted" },
  { k: "Decor", v: "In-house decorator Â· outside decorators permitted" },
  { k: "Occasions", v: "Weddings, receptions, sangeet, nikaah, engagements, birthdays, corporate events" },
] as const;

export const OCCASIONS = [
  { title: "The wedding", body: "Hall rituals, garden mehfils, a decorated mandap with hawan â€” and an overnight option for the weddings that want to run late." },
  { title: "The reception", body: "A party scrupulously punctuated by chandelier discs â€” greeting lines flow from the stage, the party line gets its spotlights." },
  { title: "Sangeet & DJ night", body: "Bring your own DJ with a music licence â€” the hall was built to be danced in. Music wraps before the neighbourhood's late-night hush." },
  { title: "Haldi & mehendi", body: "Morning slots on the floodlit garden â€” marigold canopies, dupatta lines and room to let the colour spill." },
  { title: "Engagement & ring ceremony", body: "Intimate seating around a dressed stage in the 200â€“400 range, with soft daylight across the gold arches." },
  { title: "Nikaah programme", body: "Mehfil seating, halal-catering coordination with the venue kitchen, and quiet rooms for the elders' sessions." },
  { title: "Birthday & naming", body: "Cake tables under the arches, balloons and story panels from the in-house decorator." },
  { title: "Anniversaries & reunions", body: "Milestone reels on the TV screens, a memory lane of photos, and seating that respects three generations." },
  { title: "Corporate & seminars", body: "Projector, TV screens, stage microphone and a hall quiet enough to think in â€” tea on the dining side." },
] as const;

export type GalCat = "hall" | "garden" | "dining" | "nights";
export const GALLERY_FILTERS: { key: GalCat | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hall", label: "The hall" },
  { key: "garden", label: "The garden" },
  { key: "dining", label: "Dining" },
  { key: "nights", label: "After dark" },
];

export const GALLERY: {
  src: string; cat: GalCat; cap: string; alt: string; wide?: boolean;
}[] = [
  { src: IMG["venue-hero"], cat: "nights", cap: "The palace after dark Â· Golconda Road", alt: "The full palace facade lit at night with the venue's name on the gate", wide: true },
  { src: IMG["gold-arches"], cat: "nights", cap: "The entrance arcade, after dark", alt: "The entrance arcade facade at night with gold and columns" },
  { src: IMG["reception-floor"], cat: "hall", cap: "The reception floor, dressed for an evening", alt: "Reception floor with tufted sofas, floral chandeliers and chandelier discs" },
  { src: IMG["hall-theatre"], cat: "hall", cap: "Ceremony seating facing the tall stage", alt: "Theatre-style seating inside the banquet hall facing the lit stage" },
  { src: IMG["stage-violet"], cat: "hall", cap: "A stage dressed in violet for the sangeet", alt: "Stage dressed in violet light with floral discs and chandeliers" },
  { src: IMG["hall-day"], cat: "hall", cap: "The hall in daylight, family-seated", alt: "The banquet hall in daylight with cream sofas and gold arches" },
  { src: IMG["mandap-seats"], cat: "hall", cap: "The carved mandap, dressed for the rites", alt: "A carved white mandap with red floral arches dressed inside the hall" },
  { src: IMG["lawn-floodlit"], cat: "garden", cap: "The floodlit garden, after dark", alt: "The garden floodlit at night with arches, palms and a glowing rose window" },
  { src: IMG["dining-night"], cat: "dining", cap: "Dinner dressed in wine & gold", alt: "Dining tables dressed in wine covers with gold sashes and set plates" },
  { src: IMG["dining-halls"], cat: "dining", cap: "The dining hall, set for the families", alt: "The dining hall with red chairs, white plates and planters" },
];

export const RATINGS = [
  { big: "4.8â˜…", src: "WedMeGood Â· 3 reviews", href: "https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842" },
  { big: "4.3â˜…", src: "Google Â· 39 reviews, via Wheree", href: "https://the-vintage-palace.wheree.com/" },
  { big: "9.2/10", src: "Reliability Â· BanquetHub", href: "https://banquethub.in/venue/the-vintage-palace" },
] as const;

export const VERBATIM = [
  {
    stars: 5,
    quote: "This location was selected for the wedding and the entire experience here was so amazing. The whole place was so beautiful and everyone loved it.",
    who: "Snehith Reddy",
    when: "Apr 2025",
    src: "WedMeGood",
  },
  {
    stars: 5,
    quote: "The destination was simply beautiful. Everything from lights to sitting to the staff was perfect. We had approximately 700 guests, all of them were seated properly and given proper catering. Everyone appreciated the venue very much.",
    who: "Ayesha",
    when: "Apr 2020",
    src: "WedMeGood",
  },
  {
    stars: 4.5,
    quote: "The Vintage Palace is a spacious convention and is very beautiful and apt for a wedding. They have amazing interiors and nice ambiance.",
    who: "Setu Sanghavi",
    when: "Dec 2018",
    src: "WedMeGood",
  },
] as const;

export const HONEST = [
  { num: "One", t: "Parking at peak evenings", b: "The on-site lot holds 110 vehicles â€” generous by old-city standards, but on the busiest muhurat nights the front rows fill early. Arrive a touch early, or let the team stage the gate for drop-and-park flow. This is simply what hosts should expect at peak times." },
  { num: "Two", t: "These halls are not air-conditioned", b: "The halls are high, arched and well-ventilated, with coolers on the floor and additional arrangements possible. If you expect a sealed, chilled ballroom, call ahead and discuss cooling for your date â€” the team will show you what the halls feel like on a similar evening." },
] as const;

export const PLANS = [
  {
    num: "Catering",
    amt: "â‚¹400",
    unit: "veg, per plate",
    alt: ["Non-veg menus from ", "â‚¹500", " a plate"],
    checks: [
      "Served by the in-house kitchen across hall & dining",
      "Multi-cuisine and special-diet requests welcomed",
      "18% GST applies on food & beverage",
    ],
  },
  {
    num: "Venue rental",
    amt: "On request",
    unit: "quoted per date",
    alt: ["Quotes move with the season, the space and the slot", "", ""],
    checks: [
      "Hall, garden or full-campus bookings",
      "Muhurat dates are asked for months ahead",
      "One itemised estimate before you commit",
    ],
  },
  {
    num: "Stay",
    amt: "â‚¹1,000",
    unit: "avg per room, per night",
    alt: ["Five rooms on premises for the families", "", ""],
    checks: [
      "Changing rooms available for the wedding party (non-AC)",
      "Elders rest on campus between rituals",
      "Overnight weddings permitted",
    ],
  },
] as const;

export const PRICE_NOTE_SOURCE = "Booking advance: â‚¹75,000 at confirmation. Every figure on this page is published on the venue's official Weddingz and Wedding.net listings â€” nothing on this page is a mock-up.";

export const POLICIES = [
  { k: "Booking & advance", v: "â‚¹75,000 advance confirms the date; balances close before the event. Cancellation terms are confirmed on the call before any payment is made." },
  { k: "Catering", v: "Veg â‚¹400 / non-veg â‚¹500 per plate + 18% GST. The in-house kitchen serves; outside caterers are permitted on request." },
  { k: "Decor", v: "An in-house decorator executes the mandap, stage and florals; outside decorators are also permitted. Fireworks are not." },
  { k: "DJ & music", v: "No house DJ â€” bring your own with the required music licence. The house keeps amplified sound off after late hours, out of respect for the neighbourhood." },
  { k: "Alcohol", v: "Outside alcohol is permitted, subject to corkage norms and the host arranging the required permits." },
  { k: "Rituals", v: "Hawan, baarat entrances and overnight weddings are all warmly permitted. Firecrackers are not." },
  { k: "Parking", v: "On-premises lot for 110 vehicles, no valet. Peak muhurat evenings fill the front rows early." },
  { k: "Comfort", v: "Halls are high, arched and well-ventilated â€” not air-conditioned. Cooling arrangements can be discussed for your date; changing rooms are non-AC." },
  { k: "Timing", v: "Booking slots open from 10 am; site visits run 11 am â€“ 10 pm every day." },
] as const;

export const FAQS = [
  { q: "What does a wedding actually cost here?", a: "The shape is: venue rental (quoted per date) + catering (â‚¹400â€“â‚¹500 a plate + 18% GST) + decor + DJ/photography you bring. Call the events desk with your date and headcount â€” you'll get one itemised estimate before you commit to anything.", first: true },
  { q: "How many guests fit comfortably?", a: "The banquet hall seats 400 (700 floating); the floodlit garden seats 950 (1,500 floating). For the biggest evenings, both spaces run together.", first: false },
  { q: "Can we bring our own caterer or decorator?", a: "Yes to both â€” outside caterers and outside decorators are permitted, and the house teams coordinate with them at the briefing.", first: false },
  { q: "Are the halls air-conditioned?", a: "No â€” the halls are high, arched and well-ventilated with coolers on the floor. If your date falls in the hottest weeks, discuss additional cooling at the site visit and feel the hall on a similar evening yourself.", first: false },
  { q: "Can the DJ play late into the night?", a: "The finale lands before the neighbourhood's late-night hush â€” plan the last dance early in the evening. Overnight weddings are permitted, so families can continue on campus without amplified sound.", first: false },
  { q: "Is there parking for 1,000+ guests?", a: "The on-site lot holds 110 vehicles with no valet. On the busiest muhurat nights the front rows fill early â€” arrive a touch early, or let the team stage the gate for drop-and-park flow.", first: false },
  { q: "How early should we book for muhurat dates?", a: "Peak-season Saturdays get asked for months ahead. Enquire at least 3â€“4 months out for popular dates; the â‚¹75,000 advance locks yours.", first: false },
] as const;

export const MARQUEE = [
  "Banquet hall", "Floodlit garden", "In-house kitchen", "In-house decorator", "Five rooms on campus", "110-car parking", "Overnight weddings",
] as const;

export const BREADCRUMB = (name: string, path: string) =>
  ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  }) as const;
