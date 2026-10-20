import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DAY_RHYTHM, EXPERIENCES } from "@/lib/venue";

export const metadata: Metadata = {
  title: "Experiences — Weddings to Corporate Events",
  description:
    "Every occasion gets its own room at The Vintage Palace: wedding ceremonies, receptions, sangeets, mehendi, engagements, nikaahs, birthdays, anniversaries, baby showers, farewells and corporate conferences on Golconda Road, Hyderabad.",
  alternates: { canonical: "/experiences" },
  openGraph: { title: "Experiences — The Vintage Palace, Hyderabad", description: "One campus, every celebration — from the first haldi to the final farewell.", images: ["/images/venue-hero.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://thevintagepalace.in" },
    { "@type": "ListItem", position: 2, name: "Experiences", item: "https://thevintagepalace.in/experiences" },
  ],
};

export default function ExperiencesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        label="Experiences"
        title="One Campus, Every Celebration"
        lead="Eighteen event types seen on one campus — moods shifting under the same chandeliers, season after season."
      />

      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="occ-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Occasions</p>
              <h2 id="occ-h" className="h-display">Choose the mood, we bring the grace</h2>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.06}>
                <article className="relative h-full rounded-3xl border border-ink/10 bg-white p-9 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                  <span className="h-display absolute right-6 top-5 text-3xl italic text-gold/30">{e.num}</span>
                  <h3 className="h-display text-2xl">{e.title}</h3>
                  <p className="text-[0.95rem] text-ink-soft">{e.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wine py-[clamp(4rem,3rem+5vw,7.5rem)] text-ivory" aria-labelledby="day-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>Your day, our way</p>
              <h2 id="day-h" className="h-display">A rhythm that keeps the day kind</h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {DAY_RHYTHM.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div>
                  <span className="inline-flex rounded-full border border-gold/40 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-gold-brt">
                    {d.pill}
                  </span>
                  <h3 className="h-display mt-4 text-2xl">{d.title}</h3>
                  <p className="text-ivory/80">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)] text-center">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <h2 className="h-display">Your occasion, listed and loved</h2>
            <p className="mx-auto max-w-[34rem] text-ink-soft">
              Tell us the occasion and the rough headcount. We’ll respond with spaces, date options and a full cost sheet.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn"><span>Start an enquiry</span></Link>
            <Link href="/pricing" className="btn btn--ghost"><span>See the pricing</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
