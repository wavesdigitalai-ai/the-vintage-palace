import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE, PACKAGES, PRICE_NOTE, PRICE_PRINCIPLES, POLICIES, FAQS } from "@/lib/venue";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Transparent pricing for The Vintage Palace, Hyderabad: hall rental from ₹2,70,000, Royal lawn from ₹3,50,000, advanced décor packages from ₹30,000–40,000. Advance ₹75,000, GST 18% on F&B — every policy listed in plain words.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing & Packages — The Vintage Palace", description: "Hall from ₹2,70,000 · Lawn from ₹3,50,000 · Transparent policies.", images: ["/images/venue-hero.jpg"] },
};

const SITEURL = "https://thevintagepalace.in";
const jsonLdBread = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITEURL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITEURL}/pricing` },
  ],
};
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBread) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <PageHero
        label="Pricing"
        title="Honest Numbers, No Passwords"
        lead="Base rentals published in plain sight. Catering and décor scale to your guest list — here’s exactly how."
      />

      {/* Principle note */}
      <section className="py-[clamp(3.5rem,2.5rem+4vw,6.5rem)]" aria-label="Pricing principles">
        <div className="mx-auto grid w-[min(1180px,100%-2.5rem)] gap-6 md:grid-cols-4">
          <Reveal className="md:col-span-1">
            <p className="eyebrow">Our pricing is</p>
            <h2 className="h-display text-[clamp(1.7rem,1.2rem+2vw,2.6rem)]">Built on four principles</h2>
          </Reveal>
          {PRICE_PRINCIPLES.map((n, i) => (
            <Reveal key={n.t} delay={i * 0.05}>
              <b className="h-display block text-xl">{n.t}</b>
              <p className="text-[0.94rem] text-ink-soft">{n.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="pkgs-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-4 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Packages</p>
              <h2 id="pkgs-h" className="h-display">Pick your canvas</h2>
              <p className="text-ink-soft">
                Every package includes staff coordination, clean setup before and breakdown after, and full house rules
                handed over in writing.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-8 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(42,27,15,.16)] ${
                    p.hero ? "bg-wine text-ivory" : "bg-white"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-gold-brt to-gold px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-night shadow">
                      {p.badge}
                    </span>
                  )}
                  <p className="eyebrow" style={p.hero ? { color: "rgba(217,177,104,.85)" } : undefined}>{p.suit}</p>
                  <h3 className="h-display text-3xl">{p.name}</h3>
                  <p className="mt-2 min-h-[3.5rem] text-[0.94rem]" style={{ color: p.hero ? "rgba(250,246,239,.8)" : "var(--muted)" }}>{p.tag || "Flexible design"}</p>
                  <div className="mt-2 border-t pt-4" style={{ borderColor: p.hero ? "rgba(250,246,239,.18)" : "rgba(37,29,21,.1)" }}>
                    <span className="text-[0.7rem] uppercase tracking-[0.22em]" style={{ opacity: 0.7 }}>{p.unit}</span>
                    <b className={`h-display mt-1 block text-[2.8rem] leading-none ${p.hero ? "text-gold-brt" : "text-wine"}`}>{p.amt}</b>
                  </div>
                  <ul className={`mt-5 flex flex-1 flex-col gap-2.5 text-[0.95rem] ${p.hero ? "text-ivory/85" : "text-ink-soft"}`}>
                    {p.items.map((pt) => (
                      <li key={pt} className="flex gap-3 before:mt-[0.35em] before:text-[0.65em] before:text-gold-brt before:content-['✦']">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`btn mt-7 w-full ${p.hero ? "" : "btn--ghost"}`}
                    style={p.hero ? { background: "linear-gradient(135deg,#d9b168,#b08d57)", color: "#241316" } : undefined}
                  >
                    <span>{p.cta}</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-[44rem] rounded-3xl border border-gold/50 bg-cream p-6 text-center text-ink-soft">
              {PRICE_NOTE}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Policies */}
      <section className="bg-cream py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="pol-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-12 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>House rules</p>
              <h2 id="pol-h" className="h-display">Every policy, in plain words</h2>
              <p className="text-ink-soft">No fine print games. If it affects your day, it’s written here.</p>
            </Reveal>
          </div>
          <ol className="mx-auto grid max-w-[52rem] gap-3.5 list-none p-0">
            {POLICIES.map((p, i) => (
              <Reveal key={p.q} delay={Math.min(i * 0.035, 0.28)}>
                <li className="flex gap-4 rounded-2xl bg-white p-5 pl-6 shadow-[0_4px_16px_rgba(42,27,15,.06)]">
                  <b className="h-display flex-none text-2xl text-gold" aria-hidden="true">{String(i + 1).padStart(2, "0")}</b>
                  <span>
                    <b className="block font-semibold text-ink">{p.q}</b>
                    <span className="text-[0.95rem] text-ink-soft">{p.a}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ with native details/summary (accessible, no-JS safe) */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="faq-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <div className="mx-auto mb-10 max-w-[46rem] text-center">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: "center" }}>Good to know</p>
              <h2 id="faq-h" className="h-display">The questions every host asks</h2>
            </Reveal>
          </div>
          <div className="mx-auto max-w-[44rem]">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.04, 0.3)}>
                <details className="faq group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium transition-colors hover:text-wine [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="h-display text-2xl text-gold transition-transform duration-500 group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="pb-5 text-ink-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-night py-[clamp(4rem,3rem+5vw,7.5rem)] text-center text-ivory" aria-labelledby="cta-h">
        <div
          className="pointer-events-none absolute -left-[24vmax] -top-[40vmax] h-[70vmax] w-[70vmax] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(87,29,33,.7), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative z-[3] mx-auto w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <h2 id="cta-h" className="h-display">Ready to write your date in gold?</h2>
            <p className="mx-auto max-w-[34rem] text-ivory/80">
              Share your date and headcount — we’ll confirm availability same day and send a full cost sheet within 24
              hours.
            </p>
          </Reveal>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Reveal delay={0.05}>
              <Link href="/contact" className="btn"><span>Send an enquiry</span></Link>
            </Reveal>
            <Reveal delay={0.12}>
              <a href={`tel:${SITE.phoneDial}`} className="btn btn--ghost"><span>Call {SITE.phone}</span></a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
