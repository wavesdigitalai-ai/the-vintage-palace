import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { CtaActions } from "@/components/SiteFooter";
import { IMG, SITE } from "@/lib/venue";

export const metadata = {
  title: "Contact & Directions",
  description:
    "Plan a site visit to The Vintage Palace: Pillar No. 102, Golconda Road, Karwan West, Hyderabad 500006 · call +91 91603 74743 · site visits daily, 11 am – 10 pm.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — The Vintage Palace, Hyderabad", images: [IMG["venue-hero"]] },
};

const READY = [
  "Your date (or two dates, if flexible)",
  "Rough guest count — 200 or 1,500, both welcome",
  "The occasion — hall, garden or full campus follows from it",
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      <PageHero
        img={IMG["venue-hero"]}
        alt="The palace facade lit at night, seen from Golconda Road"
        crumb="Contact"
        title={
          <>
            Come walk the <em>halls.</em>
          </>
        }
        lead="One call sets up a guided visit — morning light, evening light, and every corner in between."
      />

      {/* CALL STRIP */}
      <section className="sec" style={{ paddingBottom: 0 }} aria-label="Call the events desk">
        <div className="wrap">
          <div className="rv" style={{ textAlign: "center" }}>
            <p className="kicker" style={{ textAlign: "center" }}>
              The events desk
            </p>
            <p style={{ margin: 0 }}>
              <a className="tel-hero" href={`tel:${SITE.phoneDial}`}>
                {SITE.phone}
              </a>
            </p>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Site visits daily · 11 am – 10 pm — daytime and after-dark walk-throughs both recommended before you book.
            </p>
          </div>
        </div>
      </section>

      {/* VISIT GRID */}
      <section className="sec" aria-labelledby="visit-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Visit</p>
            <h2 id="visit-h" className="h2">
              Finding us is <em>half the charm</em>
            </h2>
          </div>
          <div className="visit-grid">
            <div className="visit-card rv">
              <span className="numeral">Address</span>
              <h3 className="h3">The palace gates</h3>
              <p>
                {SITE.address.line1},
                <br />
                {SITE.address.line2},
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.pin}
              </p>
              <a
                className="btn btn--ghost"
                href="https://www.google.com/maps/dir/?api=1&destination=17.375808,78.434052"
                target="_blank"
                rel="noopener"
              >
                <span>Open directions</span>
                <span className="arr">→</span>
              </a>
            </div>
            <div className="visit-card rv" style={{ "--d": ".08s" } as React.CSSProperties}>
              <span className="numeral">Hours</span>
              <h3 className="h3">Site visits, daily</h3>
              <dl className="hours">
                <div>
                  <dt>Visits</dt>
                  <dd>11:00 am – 10:00 pm, every day</dd>
                </div>
                <div>
                  <dt>First slot</dt>
                  <dd>Bookings open from 10:00 am</dd>
                </div>
              </dl>
              <p className="muted">
                Evening visits show the floodlit garden at its best; morning visits show the daylight inside the gold
                arches. See both before deciding.
              </p>
            </div>
            <div className="visit-card rv" style={{ "--d": ".16s" } as React.CSSProperties}>
              <span className="numeral">Before you call</span>
              <h3 className="h3">Three things in hand</h3>
              <ol className="ed-ol">
                {READY.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
              <p className="muted">With these three, the desk can quote spaces, availability and a full cost sheet in one call.</p>
            </div>
          </div>
          <figure className="map-frame rv" style={{ marginTop: "3rem" }}>
            <iframe
              title="Map to The Vintage Palace, Karwan, Hyderabad"
              src="https://www.google.com/maps?q=The%20Vintage%20Palace%2C%20Golconda%20Road%2C%20Karwan%2C%20Hyderabad&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              The date you want is <em>one call away</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Muhurat evenings go months ahead — the ₹75,000 advance locks yours.
            </p>
            <CtaActions primary={{ href: `tel:${SITE.phoneDial}`, label: `Call ${SITE.phone}` }} secondary={{ href: "/pricing", label: "See pricing & policies" }} />
          </div>
        </div>
      </section>
    </>
  );
}
