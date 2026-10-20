import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { CtaActions } from "@/components/SiteFooter";
import { CHAPTERS, FACTS, IMG, SITE } from "@/lib/venue";

export const metadata = {
  title: "The Venue",
  description:
    "Tour The Vintage Palace: the banquet hall (400 seated · 700 floating), the floodlit garden (950 seated · 1,500 floating), the dining annex and the carved mandap — all on one campus on Golconda Road.",
  alternates: { canonical: "/venue" },
  openGraph: { title: "The Venue — The Vintage Palace, Hyderabad", images: [IMG["reception-floor"]] },
};

const CHAPTER_STYLE = [{}, {}, {}, {}];

export default function VenuePage() {
  return (
    <>
      <BreadcrumbJsonLd name="The Venue" path="/venue" />
      <PageHero
        img={IMG["reception-floor"]}
        alt="Chandelier discs and floral arrangements over the banquet hall reception floor"
        crumb="The Venue"
        title={<>Every ritual has a room here.</>}
        lead="A banquet hall for the rites, a floodlit garden for the mehfil, a dining annex that never queues, and five rooms for the families."
      />

      {/* FACT STRIP */}
      <section className="sec" style={{ paddingBottom: 0 }} aria-label="At a glance">
        <div className="wrap">
          <div className="stats rv">
            {[
              [400, "Hall, seated"],
              [700, "Hall, floating"],
              [950, "Garden, seated"],
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

      {/* CHAPTERS */}
      <section className="sec" aria-labelledby="h-hall">
        <div className="wrap">
          {CHAPTERS.map((ch, i) => (
            <div key={ch.num} className={`chapter${i % 2 === 1 ? " flip" : ""}`}>
              <figure className={`chapter-media rv ${i % 2 === 1 ? "rv--right" : "rv--left"}`}>
                <div className="frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG[ch.img]} alt={ch.caption} data-parallax="-0.05" />
                </div>
                <figcaption>{ch.caption}</figcaption>
              </figure>
              <div className="chapter-copy rv" style={CHAPTER_STYLE[i] as React.CSSProperties}>
                <span className="numeral">{ch.num}</span>
                <h2 id={i === 0 ? "h-hall" : undefined} className="h2">
                  {i === 0 ? (
                    <>
                      Gold arches, high ceiling, <em>one tall stage</em>
                    </>
                  ) : i === 1 ? (
                    <>
                      Carved white <em>columns</em>, red florals
                    </>
                  ) : i === 2 ? (
                    <>
                      A service that <em>never queues</em>
                    </>
                  ) : (
                    <>
                      An open-air <em>stage</em> under the arches
                    </>
                  )}
                </h2>
                <p className="lead">{ch.lead}</p>
                {i === 1 && (
                  <p className="muted">
                    Dress-up conversations begin at the site visit: marigold canopies, dupatta lines, gold themes, or a
                    minimal modern look — the in-house team turns panels around inside hours.
                  </p>
                )}
                <ul className="checks">
                  {ch.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACT SHEET */}
      <section className="sec sec--tint" aria-labelledby="facts">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Fact sheet</p>
            <h2 id="facts" className="h2">
              The details, <em>plainly</em>
            </h2>
          </div>
          <dl className="fact-sheet rv" style={{ maxWidth: "56rem", marginInline: "auto" }}>
            {FACTS.map((f) => (
              <div key={f.k} className="fact-row">
                <dt>{f.k}</dt>
                <dd>
                  {f.k === "Phone" ? (
                    <a href={`tel:${SITE.phoneDial}`} style={{ color: "inherit" }}>
                      {f.v}
                    </a>
                  ) : (
                    f.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              See it exactly as <em>your guests will</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Book a guided walk-through — every corner, both spaces, the dining hall and the quiet corners between.
            </p>
            <CtaActions
              primary={{ href: "/contact", label: "Plan the site visit" }}
              secondary={{ href: "/gallery", label: "Walk the gallery" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
