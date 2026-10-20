import Link from "next/link";
import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { CtaActions } from "@/components/SiteFooter";
import { HONEST, IMG, PROFILES, RATINGS, VERBATIM } from "@/lib/venue";

export const metadata = {
  title: "Reviews",
  description:
    "Every public review of The Vintage Palace, verbatim and dated — 4.8★ on WedMeGood (3 reviews), 4.3★ on Google (39 reviews via Wheree), BanquetHub's 9.2 reliability score — plus the two things worth knowing in advance.",
  alternates: { canonical: "/reviews" },
  openGraph: { title: "Reviews — The Vintage Palace, Hyderabad", images: [IMG["hall-theatre"]] },
};

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Reviews" path="/reviews" />
      <PageHero
        img={IMG["hall-theatre"]}
        alt="Rows of ceremony seating inside the banquet hall facing the lit stage"
        crumb="Reviews"
        title={<>Every word, weighed honestly.</>}
        lead="Verbatim quotes, dated, and linked to where they live — including the one thing worth planning for."
      />

      {/* RATING STRIP */}
      <section className="sec" style={{ paddingBottom: 0 }} aria-label="Ratings across directories">
        <div className="wrap">
          <div className="rating-strip rv">
            {RATINGS.map((r) => (
              <div key={r.src}>
                <b>{r.big}</b>
                <span>{r.src}</span>
              </div>
            ))}
          </div>
          <p className="ph-note">Each figure links to the directory that told us — check it yourself.</p>
        </div>
      </section>

      {/* VERBATIM QUOTES */}
      <section className="sec" aria-labelledby="verb">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Verbatim</p>
            <h2 id="verb" className="h2">
              In their <em>words</em>
            </h2>
          </div>
          <div className="reviews-grid">
            {VERBATIM.map((v, i) => (
              <article key={v.who} className="review-card rv" style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                <span className="stars" aria-label={`${v.stars} of 5 stars`}>
                  {v.stars === 4.5 ? (
                    <>
                      ★★★★<span style={{ opacity: 0.4 }}>★</span>
                    </>
                  ) : (
                    "★★★★★"
                  )}
                </span>
                <p>{v.quote}</p>
                <footer>
                  {v.who} · {v.when} <span>{v.src}</span>
                </footer>
              </article>
            ))}
          </div>
          <p className="ph-note">
            These three quotes plus the 4.8★ average come directly from the{" "}
            <a
              href="https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842"
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", borderBottom: "1px solid var(--brass)" }}
            >
              WedMeGood profile
            </a>
            .
          </p>
        </div>
      </section>

      {/* HONEST NOTE */}
      <section className="sec sec--tint" aria-labelledby="honest">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">Also honest</p>
            <h2 id="honest" className="h2">
              Two things worth <em>knowing</em>
            </h2>
          </div>
          <div className="chapter" style={{ gap: "2rem" }}>
            {HONEST.map((h, i) => (
              <div key={h.num} className="chapter-copy rv" style={i === 1 ? ({ "--d": ".08s" } as React.CSSProperties) : undefined}>
                <span className="numeral">{h.num}</span>
                <h2 className="h3">{h.t}</h2>
                <p className="lead">{h.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORIES */}
      <section className="sec sec--dark" aria-labelledby="dirs">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker on-dark">Where guests check in</p>
            <h2 id="dirs" className="h2">
              Find us on <em>every directory</em>
            </h2>
          </div>
          <dl
            className="fact-sheet rv"
            style={{ maxWidth: "56rem", marginInline: "auto", borderTopColor: "rgba(243,238,229,.2)" }}
          >
            {PROFILES.map((p) => (
              <div key={p.name} className="fact-row" style={{ borderBottomColor: "rgba(243,238,229,.14)" }}>
                <dt>
                  <Link className="link-plain" href={p.href} target="_blank" rel="noopener">
                    {p.name}
                  </Link>
                </dt>
                <dd>{p.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              Read them all, then <em>come see</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Site visits daily · 11 am – 10 pm · Pillar No. 102, Golconda Road.
            </p>
            <CtaActions primary={{ href: "/contact", label: "Plan the site visit" }} secondary={{ href: "/gallery", label: "See the gallery" }} />
          </div>
        </div>
      </section>
    </>
  );
}
