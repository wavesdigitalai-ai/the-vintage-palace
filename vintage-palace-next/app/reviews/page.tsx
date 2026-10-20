import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RatingBars } from "@/components/Marquee";
import { LOVE_CHIPS, PROFILES, RATINGS, VERBATIM } from "@/lib/venue";

export const metadata: Metadata = {
  title: "Reviews — What Guests Say",
  description:
    "An honest analysis of The Vintage Palace reviews: 4.3★ across 39 Google reviews, 4.8★ on WedMeGood, scores of 9.2/10 for reliability — plus verbatim guest quotes and what hosts should know.",
  alternates: { canonical: "/reviews" },
  openGraph: { title: "Reviews — The Vintage Palace, Hyderabad", description: "4.3★ Google · 4.8★ WedMeGood · 9.2/10 reliability. What guests say, verbatim.", images: ["/images/venue-hero.jpg"] },
};

const SITE = "https://thevintagepalace.in";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Reviews", item: `${SITE}/reviews` },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        label="Reviews"
        title="Every Word, Weighed Honestly"
        lead="Ratings pulled from public listings, quotes verbatim from couples and hosts — including the one thing to plan ahead for."
      />

      {/* Score */}
      <section className="bg-night py-[clamp(4rem,3rem+5vw,7.5rem)] text-ivory" aria-labelledby="score-h">
        <div className="mx-auto grid w-[min(1180px,100%-2.5rem)] items-center gap-12 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="text-center">
              <b className="h-display block text-[6rem] font-semibold leading-none">4.3</b>
              <span className="text-[1.1rem] tracking-[0.2em] text-gold-brt" role="img" aria-label="rated 4.3 of 5">
                ★★★★<span className="opacity-30">★</span>
              </span>
              <p className="mt-3 text-[0.78rem] uppercase tracking-[0.22em] text-ivory/60">39 Google reviews</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RatingBars rows={RATINGS} />
          </Reveal>
        </div>
        <div className="mx-auto mt-10 w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2.5">
              {LOVE_CHIPS.map((c) => (
                <span key={c} className="rounded-full border border-gold/40 px-4 py-1.5 text-[0.8rem] tracking-[0.1em] text-gold-brt">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verbatim */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="verb-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Verbatim</p>
              <h2 id="verb-h" className="h-display">In their words</h2>
              <p className="text-ink-soft">Published reviews from WedMeGood, quoted exactly as written.</p>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {VERBATIM.map((v, i) => (
              <Reveal key={v.who} delay={(i % 2) * 0.07}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-9 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                  <span className="h-display mb-4 text-6xl leading-[0.6] text-gold" aria-hidden="true">“</span>
                  <p className="h-display flex-1 text-[1.28rem] italic">{v.q}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-wine font-semibold text-ivory" aria-hidden="true">{v.av}</span>
                    <span>
                      <b className="block font-semibold">{v.who}</b>
                      <span className="text-[0.8rem] tracking-wide text-muted">{v.meta}</span>
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-14 max-w-[40rem] text-center text-ink-soft">
              Aggregated review analysis also highlights <b>professional staff</b>, <b>value for money</b> and{" "}
              <b>clean, comfort-first seating</b> — with one note worth knowing in advance:
            </p>
            <div className="mx-auto mt-6 max-w-[40rem] rounded-3xl border border-gold/40 bg-white p-7 shadow-[0_10px_30px_rgba(42,27,15,.10)]">
              <p className="text-ink-soft" style={{ margin: 0 }}>
                <b className="text-wine">Plan one thing:</b> at exceptionally large functions, on-site parking can feel busy
                around the height of the evening. Arrive early, or let us pre-arrange overflow support — hosts who do never
                think about it again.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profiles */}
      <section className="bg-wine py-[clamp(4rem,3rem+5vw,7.5rem)] text-ivory" aria-labelledby="where-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>Where guests check in</p>
              <h2 id="where-h" className="h-display">Find us on every directory</h2>
              <p className="text-ivory/80">
                Cross-check our ratings or leave a review on the platform you love. Booking works the same on all of them.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROFILES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.06}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-full rounded-3xl border border-ivory/15 bg-[rgba(250,246,239,.05)] p-8 no-underline transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:bg-[rgba(250,246,239,.09)]"
                >
                  <span className="h-display absolute right-6 top-5 text-2xl italic text-gold/40">{p.num}</span>
                  <h3 className="h-display text-xl">{p.name}</h3>
                  <p className="text-[0.93rem] text-ivory/75">{p.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
