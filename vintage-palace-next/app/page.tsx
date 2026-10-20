import Link from "next/link";
import { IMG } from "@/lib/venue";

const METRICS = [
  { b: <>4.8<sup style={{ fontSize: "0.42em" }}>★</sup></>, s: "WedMeGood · 3 reviews" },
  { b: "700", s: "Seated in the hall max" },
  { b: "1,500", s: "Floating in the garden" },
  { b: "₹400", s: "Veg plate, catering from" },
];

const MARQUEE = ["Weddings", "Receptions", "Sangeet", "Mehendi", "Engagements", "Nikaah", "Birthdays", "Anniversaries"];

const OCCASIONS = [
  { h: "Wedding ceremony", p: "Mandaps in the garden, rituals in the hall — hawan and baarat both warmly welcomed." },
  { h: "Grand reception", p: "A dressed stage, greeting lines, and dinner that keeps flowing while hosts meet guests." },
  { h: "Sangeet & DJ night", p: "Bring your own DJ with music licence — the hall was built to be danced in." },
  { h: "Haldi & mehendi", p: "Daytime slots on the garden, with room for the colour to spill." },
  { h: "Engagement & nikaah", p: "Intimate mehfil seating for elders, halal-catering coordination." },
  { h: "Birthdays & anniversaries", p: "Cake tables under the arch, five rooms for family between moments." },
  { h: "Corporate & seminars", p: "Stage, projector and TV screens, and a hall quiet enough to think in." },
];

const REVIEWS = [
  { stars: "★★★★★", label: "5 stars", q: "This location was selected for the wedding and the entire experience here was so amazing. The whole place was so beautiful and everyone loved it.", who: "Snehith Reddy", when: "Apr 2025", d: "0s", half: false },
  { stars: "★★★★★", label: "5 stars", q: "We had approximately 700 guests, all of them were seated properly and given proper catering. Everyone appreciated the venue very much.", who: "Ayesha", when: "Apr 2020", d: ".08s", half: false },
  { stars: "★★★★★", label: "4 and a half stars", q: "The Vintage Palace is a spacious convention and is very beautiful and apt for a wedding. They have amazing interiors and nice ambiance.", who: "Setu Sanghavi", when: "Dec 2018", d: ".16s", half: true },
];

export const metadata = {
  title: "The Vintage Palace — Wedding & Event Venue in Karwan, Hyderabad",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Welcome">
        <div className="hero-img" data-parallax="0.12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG["venue-hero"]} alt="The Vintage Palace facade lit at night, Golconda Road, Karwan, Hyderabad" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <h1 className="hero-title" data-lines>
            Your celebration, set inside a real palace.
          </h1>
          <p className="hero-lead">
            Gold arches, carved mandaps and chandelier discs on Golconda Road — minutes from the Fort, in the old
            city&apos;s beating heart.
          </p>
          <div className="hero-cta">
            <Link className="btn btn--paper" href="/contact">
              <span>Reserve a date</span>
              <span className="arr">→</span>
            </Link>
            <Link className="btn btn--brass" href="/gallery">
              <span>See the gallery</span>
              <span className="arr">→</span>
            </Link>
          </div>
          <div className="hero-meta">
            {METRICS.map((m, i) => (
              <div key={i}>
                <b>{m.b}</b>
                <span>{m.s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-cue" aria-hidden="true"></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* CHAPTER 01 — THE HOUSE */}
      <section className="sec" aria-labelledby="ch1">
        <div className="wrap chapter">
          <figure className="chapter-media rv rv--left">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG["reception-floor"]} alt="Chandelier discs and floral chandeliers over the reception floor of the banquet hall" data-parallax="-0.06" />
            </div>
            <figcaption>The banquet floor, dressed for an evening</figcaption>
          </figure>
          <div className="chapter-copy rv">
            <span className="numeral">01 · The house</span>
            <h2 id="ch1" className="h2">
              A fine relic of traditional <em>hospitality</em>
            </h2>
            <p className="lead">
              WedMeGood&apos;s editors describe The Vintage Palace as exactly that — traditional Indian hospitality
              blended with the facilities of a modern venue. Guests repeat the sentiment in every review: beautiful,
              spacious, and apt for a wedding.
            </p>
            <p className="muted">
              The palace stands on Golconda Road beside Mahaboob Pride Function Hall — Pillar No. 102, so your drivers
              know exactly where to stop. Temples, masjids and the Fort sit within a few minutes&apos; drive; transport
              access is one of this address&apos;s great quiet strengths.
            </p>
            <ul className="checks">
              <li>Two marquee spaces: a grand banquet hall and a floodlit garden</li>
              <li>In-house caterer &amp; in-house decorator on call</li>
              <li>Five rooms on the premises for the families</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="sec" style={{ paddingTop: 0 }} aria-label="Venue at a glance">
        <div className="wrap">
          <div className="stats rv">
            {[
              [1500, "Garden, floating"],
              [950, "Garden, seated"],
              [700, "Hall, floating"],
              [110, "Parking spaces"],
            ].map(([v, label]) => (
              <div key={label as string}>
                <b data-count={v as number}>0</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 02 — HALL */}
      <section className="sec sec--tint" aria-labelledby="ch2">
        <div className="wrap chapter flip">
          <figure className="chapter-media rv rv--right">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG["hall-theatre"]} alt="Ceremony seating arranged theatre-style inside the banquet hall, facing the stage" data-parallax="-0.05" />
            </div>
            <figcaption>Ceremony seating facing the tall stage</figcaption>
          </figure>
          <div className="chapter-copy rv">
            <span className="numeral">02 · The banquet hall</span>
            <h2 id="ch2" className="h2">
              Chandeliers, arches and a hall built <em>to be danced in</em>
            </h2>
            <p className="lead">
              Up to 400 guests seated in ritual-facing rows, 700 across the floor for a reception. Gold-on-ivory arches,
              ornate ceiling mouldings and a stage raised high enough that every eye finds it.
            </p>
            <ul className="checks">
              <li>Stage with projector &amp; TV screens for milestone reels</li>
              <li>Well-ventilated interiors; comfort cooling on request</li>
              <li>Morning slots are welcome — overnight weddings permitted</li>
            </ul>
            <p style={{ marginTop: "1.8rem" }}>
              <Link className="link-more" href="/venue">
                Explore the venue <span className="arr">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 03 — GARDEN */}
      <section className="sec" aria-labelledby="ch3">
        <div className="wrap chapter">
          <figure className="chapter-media rv rv--left">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG["lawn-floodlit"]} alt="The open-air garden floodlit at night with arches, palms and rose windows" data-parallax="-0.05" />
            </div>
            <figcaption>The garden, floodlit for an evening reception</figcaption>
          </figure>
          <div className="chapter-copy rv">
            <span className="numeral">03 · The floodlit garden</span>
            <h2 id="ch3" className="h2">
              An open-air <em>mehfil</em> under lights
            </h2>
            <p className="lead">
              A wide green canvas for mandaps, jaan entrances and baraat processions. At night the arches, palms and rose
              windows glow violet and champagne — it is the venue&apos;s most photographed corner after dark.
            </p>
            <ul className="checks">
              <li>Opens to a glowing arcade with a lit rose-window gallery</li>
              <li>Hawan, baarat and overnight weddings all permitted</li>
              <li>Dinner service flows separately from the greeting line</li>
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="sec sec--tint" aria-label="Guest words">
        <div className="wrap quote rv">
          <blockquote>
            The destination was simply beautiful. Everything from lights to sitting to the staff was perfect. We had
            approximately 700 guests, all of them were seated properly and given proper catering.
          </blockquote>
          <figcaption>Ayesha · married here · WedMeGood · April 2020</figcaption>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="sec sec--dark" aria-labelledby="occ">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker on-dark">Occasions</p>
            <h2 id="occ" className="h2">
              Every ritual has a room <em>here</em>
            </h2>
          </div>
          <div className="ed-list">
            {OCCASIONS.map((o) => (
              <Link key={o.h} className="ed-item rv" href="/experiences">
                <h3>{o.h}</h3>
                <p>{o.p}</p>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="sec" aria-labelledby="galtry">
        <div className="wrap">
          <div className="sec-head centered rv">
            <p className="kicker">Gallery</p>
            <h2 id="galtry" className="h2">
              A first look <em>inside</em>
            </h2>
          </div>
          <div className="gal-grid rv">
            <div className="gal-item wide">
              <img src={IMG["mandap-seats"]} alt="The carved white mandap dressed with red florals" loading="lazy" />
              <figcaption>Mandap, ready for the rites</figcaption>
            </div>
            <div className="gal-item">
              <img src={IMG["gold-arches"]} alt="The entrance arcade facade at night with gold-lit arches" loading="lazy" />
              <figcaption>The arcade, after dark</figcaption>
            </div>
            <div className="gal-item">
              <img src={IMG["dining-night"]} alt="Dining tables dressed in wine-red covers with gold accents" loading="lazy" />
              <figcaption>Dinner in wine &amp; gold</figcaption>
            </div>
          </div>
          <p className="ph-note">
            <Link className="link-more" href="/gallery">
              All photographs <span className="arr">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec sec--tint" aria-labelledby="revs">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Kind words</p>
            <h2 id="revs" className="h2">
              Published where you can <em>check</em>
            </h2>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <article key={r.who} className="review-card rv" style={{ "--d": r.d } as React.CSSProperties}>
                <span className="stars" aria-label={r.label}>
                  {r.half ? (
                    <>
                      ★★★★<span style={{ opacity: 0.4 }}>★</span>
                    </>
                  ) : (
                    r.stars
                  )}
                </span>
                <p>{r.q}</p>
                <footer>
                  {r.who} <span>{r.when}</span>
                </footer>
              </article>
            ))}
          </div>
          <p className="ph-note">
            <Link className="link-more" href="/reviews">
              Reviews, sourced &amp; linked <span className="arr">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <p className="kicker on-dark" style={{ justifyContent: "center", display: "inline-flex" }}>
              Muhurat dates go first
            </p>
            <h2 id="cta" className="h2">
              Tell us the date.
              <br />
              <em>We&apos;ll hold the palace.</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Advance ₹75,000 · catering from ₹400 a plate · policies in plain words on the pricing page.
            </p>
            <div className="hero-cta" style={{ justifyContent: "center", animation: "none", opacity: 1 }}>
              <a className="btn btn--brass" href="tel:+919160374743">
                <span>Reserve a date</span>
                <span className="arr">→</span>
              </a>
              <Link className="btn btn--paper" href="/pricing">
                <span>Pricing &amp; policies</span>
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
