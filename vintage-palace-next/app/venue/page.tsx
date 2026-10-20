import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/venue";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Ph } from "@/components/Ph";
import { SPACES, SUPPORT_SPACES, CAPACITIES } from "@/lib/venue";

export const metadata: Metadata = {
  title: "The Venue — Halls & Lawn",
  description:
    "Explore The Vintage Palace's event spaces: an air-conditioned banquet hall for 700 and a grand lawn for 1,500 — plus dining annex, bridal suites, stage, parking for 100+ cars. Golconda Road, Karwan, Hyderabad.",
  alternates: { canonical: "/venue" },
  openGraph: { title: "The Venue — The Vintage Palace, Hyderabad", description: "Palace Hall for 700 · Royal Lawn for 1,500 · Separate dining · Bridal suites · Parking for 100+ cars.", images: ["/images/venue-hero.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "The Venue", item: `${SITE.url}/venue` },
  ],
};

export default function VenuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        label="The Venue"
        title="Every Space, Dressed To The Nines"
        lead="600 to 3,000 guests — two marquee spaces, a flowing dining annex, bridal suites and logistics that hosts thank you for."
      />

      {SPACES.map((sp, idx) => (
        <section key={sp.id} className={`py-[clamp(4rem,3rem+5vw,7.5rem)] ${idx === 1 ? "bg-cream" : ""}`} aria-labelledby={`h-${sp.id}`}>
          <div className="mx-auto grid w-[min(1180px,100%-2.5rem)] items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <Reveal dir={idx === 1 ? "right" : "left"} className={idx === 1 ? "lg:order-2" : ""}>
              <div className="relative">
                <div className={`overflow-hidden shadow-[0_18px_44px_rgba(42,27,15,.16)] transition-transform duration-1000 ${idx === 1 ? "rounded-[20px_20px_130px_130px]" : "rounded-[200px_200px_20px_20px]"}`}>
                  <Ph kind={sp.kind} label={sp.name} className="aspect-[4/4.6]" />
                </div>
                <div className="absolute -bottom-5 right-0 rounded-2xl bg-white px-5 py-3 text-sm text-ink shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                  <b className="text-wine">{sp.seated} seated</b>&nbsp;·&nbsp;{sp.floating} floating
                </div>
              </div>
            </Reveal>
            <Reveal dir={idx === 1 ? "left" : "right"}>
              <p className="eyebrow">{sp.tag}</p>
              <h2 id={`h-${sp.id}`} className="h-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)]">{sp.name}</h2>
              <p className="text-lg text-ink-soft">{sp.desc}</p>
              <p className="text-ink-soft">{sp.quote}</p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {sp.amenities.map((a) => (
                  <li key={a} className="flex gap-3 text-[0.97rem] text-ink-soft before:shrink-0 before:text-[0.75em] before:text-gold before:content-['✦']">
                    {a}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn mt-8"><span>{idx === 1 ? "Reserve the lawn" : "Hold this hall"}</span></Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Support spaces */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="extras-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Behind the scenes</p>
              <h2 className="h-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)]">Thoughtful spaces for the people hosting</h2>
              <p className="text-ink-soft">Because a smooth celebration is won long before the first guest arrives.</p>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SUPPORT_SPACES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="h-full rounded-3xl bg-white p-9 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                  <span className="text-gold" aria-hidden="true">✦</span>
                  <h3 className="h-display mt-3 text-2xl">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-soft">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity table */}
      <section className="bg-wine py-[clamp(4rem,3rem+5vw,7.5rem)] text-ivory" aria-labelledby="cap-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-10 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>At a glance</p>
              <h2 id="cap-h" className="h-display">Capacity &amp; facilities</h2>
            </Reveal>
          </div>
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[0.95rem]">
                <thead>
                  <tr className="text-left" style={{ borderBottom: "1px solid rgba(250,246,239,.25)" }}>
                    {["Space", "Indoor/Outdoor", "Seated", "Floating", "Highlights"].map((h) => (
                      <th key={h} className="p-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CAPACITIES.map((c) => (
                    <tr key={c.space} style={{ borderBottom: "1px solid rgba(250,246,239,.12)" }}>
                      <td className="p-4 font-semibold">{c.space}</td>
                      <td>{c.ioo}</td>
                      <td>{c.seated}</td>
                      <td>{c.floating}</td>
                      <td>{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-7 max-w-[38rem] text-ivory/80">
              Muhurat evenings on the lawn can hold nearly 3,000 guests across both spaces combined — one of Old
              Hyderabad’s largest mixes of hall + open ground near the Fort.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)] text-center">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <h2 className="h-display">See it exactly as your guests will</h2>
            <p className="mx-auto max-w-[34rem] text-ink-soft">
              Book a guided walk-through — our team will show you every corner, both spaces and the quiet corners in
              between.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn"><span>Book a site visit</span></Link>
            <Link href="/gallery" className="btn btn--ghost"><span>Walk the gallery</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
