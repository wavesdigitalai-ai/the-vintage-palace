import Link from "next/link";
import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { IMG, PLANS, POLICIES, FAQS, SITE, waLink } from "@/lib/venue";

export const metadata = {
  title: "Pricing & Policies",
  description:
    "The published numbers for The Vintage Palace: catering from â‚¹400 a plate (veg) / â‚¹500 (non-veg), 18% GST on F&B, five rooms at about â‚¹1,000 a night, â‚¹75,000 booking advance â€” plus the full house-policy sheet.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing & Policies â€” The Vintage Palace, Hyderabad", images: [IMG["dining-night"]] },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Pricing & Policies" path="/pricing" />
      <PageHero
        img={IMG["dining-night"]}
        alt="Dining tables dressed in wine-red covers and gold sashes at night"
        crumb="Pricing & Policies"
        title={
          <>
            Every published number, <em>plainly put.</em>
          </>
        }
        lead="These figures come straight from the venue's published listings â€” the same baseline the events desk quotes on the phone. Seasonal rentals are confirmed per date."
      />

      {/* PRICES */}
      <section className="sec" aria-labelledby="price-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">The numbers</p>
            <h2 id="price-h" className="h2">
              Three figures that <em>shape the budget</em>
            </h2>
          </div>
          <div className="plans">
            {PLANS.map((p, i) => (
              <article key={p.num} className="plan rv" style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                <span className="numeral">{p.num}</span>
                <div className="plan-amt">
                  <b>{p.amt}</b>
                  <span>{p.unit}</span>
                </div>
                <p className="plan-alt">
                  {p.amt === "â‚¹400" ? (
                    <>
                      Non-veg menus from <b>â‚¹500</b> a plate
                    </>
                  ) : p.alt[0]}
                </p>
                <ul className="checks">
                  {p.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="ph-note rv">
            Booking advance: <b style={{ color: "var(--ink)" }}>â‚¹75,000</b> at confirmation. Every figure on this page is
            published on the venue&apos;s{" "}
            <a
              href="https://weddingz.in/hyderabad/the-vintage-palace-karwan/"
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", borderBottom: "1px solid var(--brass)" }}
            >
              Weddingz
            </a>{" "}
            and{" "}
            <a
              href="https://hyderabad.wedding.net/venues/436745"
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", borderBottom: "1px solid var(--brass)" }}
            >
              Wedding.net
            </a>{" "}
            listings â€” nothing on this page is a mock-up.
          </p>
        </div>
      </section>

      {/* POLICY SHEET */}
      <section className="sec sec--tint" aria-labelledby="pol-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">House rules</p>
            <h2 id="pol-h" className="h2">
              The fine print, <em>set large</em>
            </h2>
          </div>
          <dl className="fact-sheet rv" style={{ maxWidth: "56rem", marginInline: "auto" }}>
            {POLICIES.map((p) => (
              <div key={p.k} className="fact-row">
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="sec-head centered rv">
            <p className="kicker">FAQ</p>
            <h2 id="faq-h" className="h2">
              The questions <em>every family asks</em>
            </h2>
          </div>
          <div className="faq" style={{ maxWidth: "56rem", marginInline: "auto" }}>
            {FAQS.map((f) => (
              <details key={f.q} className="rv" open={f.first}>
                <summary>
                  {f.q}
                  <span className="plus">+</span>
                </summary>
                <p className="faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              One call, one sheet, <em>no surprises</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Share your date and headcount â€” the events desk returns a single itemised estimate the same day.
            </p>
            <div className="hero-cta" style={{ justifyContent: "center", animation: "none", opacity: 1 }}>
              <a className="btn btn--brass" href={waLink()}>
                <span>Chat on WhatsApp</span>
                <span className="arr">â†’</span>
              </a>
              <Link className="btn btn--paper" href="/contact">
                <span>Plan a site visit</span>
                <span className="arr">â†’</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
