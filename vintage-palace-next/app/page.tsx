import Link from "next/link";
import { Heart, GlassWater, Users, Briefcase, Cake, Sparkles, Landmark, PartyPopper } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SplitText } from "@/components/SplitText";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Marquee } from "@/components/Marquee";
import { Ph } from "@/components/Ph";
import { HeadCenter } from "@/components/PageHero";
import { Ornament } from "@/components/WaFab";
import { SITE, STATS } from "@/lib/venue";

const EXPERIENCES_HOME = [
  { icon: Heart, title: "Wedding Ceremony", body: "Mandaps on the lawn or a fully air-conditioned hall — with hawan and baarat both warmly welcomed." },
  { icon: GlassWater, title: "Grand Receptions", body: "Stage tableaus, greeting lines and a dining annex that keeps dinner flowing while hosts meet guests." },
  { icon: Users, title: "Sangeet Nights", body: "Bring your own DJ — amplified music with licence is welcome, and the hall was built to dance in." },
  { icon: Sparkles, title: "Mehendi & Haldi", body: "Daytime slots on the lawn — marigold canopies, dupatta lines and room to let the colour spill." },
  { icon: PartyPopper, title: "Engagements", body: "A dressed stage, spotless interiors and seating for every elder — guest reviews call it out by name." },
  { icon: Cake, title: "Birthdays & Anniversaries", body: "Cake tables by the arch, projector for milestone reels, and rooms for family to rest between." },
  { icon: Landmark, title: "Nikaah Programmes", body: "Reverent arrangements with separate dining, halal-catering coordination and heritage-courtyard grace." },
  { icon: Briefcase, title: "Corporate & Seminars", body: "Projector, TV screens, stage mic setup and boardroom-quiet AC for conferences, workshops and proms." },
];

const TEASER_QUOTES = [
  { q: "This location was selected for the wedding and the entire experience here was so amazing. The whole place was so beautiful and everyone loved it.", who: "Snehith Reddy", meta: "Wedding · 2025", av: "S", stars: "★★★★★", label: "5 stars" },
  { q: "We had approximately 700 guests, all of them were seated properly and given proper catering. Everyone appreciated the venue very much.", who: "Setu Sanghavi", meta: "Reception · WedMeGood", av: "S", stars: "★★★★½", label: "4 and a half stars" },
  { q: "They have amazing interiors and nice ambience — a spacious convention, very beautiful and apt for a wedding.", who: "Family of the bride", meta: "Wedding · Karwan", av: "K", stars: "★★★★★", label: "5 stars" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-night pb-[clamp(2.5rem,6vw,5rem)] text-ivory" aria-label="Welcome">
        <div className="absolute inset-0" aria-hidden="true">
          <ParallaxImage src="/images/venue-hero.jpg" alt="" speed={0.14} sizes="100vw" priority className="h-full w-full" />
          <div className="absolute inset-0 bg-[linear-gradient(185deg,rgba(36,19,22,.62)_0%,rgba(36,19,22,.18)_40%,rgba(36,19,22,.88)_92%)]" />
        </div>
        <div className="relative z-[3] mx-auto w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-ivory/30 bg-[rgba(250,246,239,.1)] px-5 py-2 text-[0.85rem] backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold-brt" aria-hidden="true">
                <path d="M12 2l3 6.6 7 .8-5.2 4.7 1.4 7L12 17.6 5.8 21l1.4-7L2 9.4l7-.8z" />
              </svg>
              4.3★ Google · 4.8★ WedMeGood · Booked months ahead in muhurat season
            </span>
          </Reveal>
          <h1 className="h-display mb-2 max-w-[15ch] text-[clamp(2.6rem,1.6rem+4.6vw,5.2rem)] font-medium [text-wrap:balance]">
            <SplitText text="The Palace Your Celebration Deserves" />
          </h1>
          <p className="max-w-[34rem] text-ivory/85">
            On historic Golconda Road, minutes from the Fort itself — grand halls, wide lawns and chandelier-lit evenings
            where 3,000 guests feel like family.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn">
              <span>Check Your Date</span>
            </Link>
            <Link href="/gallery" className="btn btn--ghost">
              <span>View the Gallery</span>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-9 gap-y-4 border-t border-ivory/25 pt-6">
            {STATS.map((s) => (
              <div key={s.label} className="min-w-[7.5rem]">
                <b className="h-display block text-3xl font-semibold leading-none text-gold-brt">
                  <Counter value={s.value} suffix={s.suffix} />
                </b>
                <span className="text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-cue absolute right-[clamp(1.2rem,4vw,3rem)] bottom-9 z-[4] flex flex-col items-center gap-3 text-[0.66rem] uppercase tracking-[0.34em] text-ivory/75 [writing-mode:vertical-rl]" aria-hidden="true">
          Scroll
        </div>
      </section>

      <Marquee />

      {/* ===== STORY ===== */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="story-h">
        <div className="grid items-center gap-8 md:grid-cols-2" style={{ gridTemplateColumns: undefined }}>
          <Reveal dir="left">
            <p className="eyebrow">A Golconda Road Landmark</p>
            <h2 id="story-h" className="h-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)]">Traditional hospitality, dressed for today</h2>
            <p className="text-ink-soft">
              WedMeGood calls The Vintage Palace “a fine relic of traditional Indian hospitality, blended with the
              technologically advanced facilities of the modern hospitality industry.” Nothing sums up the house style
              better.
            </p>
            <p className="text-ink-soft">
              Set beside Mahaboob Pride Function Hall on Karwan’s main road, the palace sits in the old city’s beating
              heart — the Fort on the horizon, temples and masjids around the corner, and easy transport on every side.
              Guests describe evenings under its chandeliers as <em>“amazing… everyone loved it.”</em>
            </p>
            <Link href="/venue" className="link-more mt-4">Explore the spaces</Link>
          </Reveal>
          <Reveal dir="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[200px_200px_20px_20px] shadow-[0_18px_44px_rgba(42,27,15,.16)] transition-transform duration-1000">
                <Ph kind="chandelier" label="The Grand Foyer" className="aspect-[4/4.6]" />
              </div>
              <div className="absolute -bottom-5 right-0 rounded-2xl bg-white px-5 py-3 text-sm text-ink shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                <b className="text-wine">9.2 / 10</b>&nbsp;reliability, as scored by BanquetHub
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== STAT BAND ===== */}
      <section className="bg-cream" aria-label="Venue statistics">
        <div className="mx-auto grid w-[min(1180px,100%-2.5rem)] grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-ink/10 px-6 py-12 text-center first:border-l-0">
              <b className="text-wine h-display block text-[clamp(2.6rem,2rem+2.4vw,4rem)] font-semibold leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </b>
              <small className="mt-2 block text-[0.72rem] uppercase tracking-[0.3em] text-muted">{s.label}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SPACES ===== */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="spaces-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <HeadCenter eyebrow="The Venue" title="Two spaces, endlessly dressed for you" lead="From an intimate ring ceremony of 200 to a full baraat-day feast of 1,500 — the palace bends to your celebration, never the reverse." />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { tag: "Indoor · Fully air-conditioned", kind: "chandelier" as const, label: "The Palace Hall", title: "The Palace Hall", desc: "Crystal chandeliers, a raised stage and cool, carpeted comfort for ceremonies that run late into the night.", meta: [["400", "seated"], ["700", "floating"], ["AC", ""]], d: 0 },
              { tag: "Outdoor · Star-lit evenings", kind: "lawn" as const, label: "The Royal Lawn", title: "The Royal Lawn", desc: "A wide, green open-air expanse for mandaps, jaan entrance processions and receptions under the sky.", meta: [["950", "seated"], ["1,500", "floating"], ["Baraat-friendly", ""]], d: 0.1 },
            ].map((s) => (
              <article key={s.title} className="group flex flex-col overflow-hidden rounded-3xl bg-white/95 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[rgba(60,19,22,.82)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-gold-brt backdrop-blur">
                    {s.tag}
                  </span>
                  <Ph kind={s.kind} label={s.label} className="absolute inset-0 transition-transform duration-[1.1s] group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-7">
                  <h3 className="h-display text-2xl">{s.title}</h3>
                  <p className="text-[0.95rem] text-ink-soft">{s.desc}</p>
                  <div className="mt-2 flex gap-6 border-t border-ink/10 pt-3 text-[0.85rem] text-muted">
                    {s.meta.map(([v, k]) => (
                      <span key={v}>
                        <b className="font-semibold text-wine">{v}</b> {k}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-9 text-center">
            <Link href="/venue" className="btn"><span>See every space in detail</span></Link>
          </p>
        </div>
      </section>

      {/* ===== EXPERIENCES ===== */}
      <section className="sec bg-wine py-[clamp(4rem,3rem+5vw,7.5rem)] text-ivory" aria-labelledby="exp-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <HeadCenter eyebrow="Experiences" title="Every ritual has a room here" lead="One campus, every celebration — from the first haldi stain to the vidaai farewell." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES_HOME.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.06}>
                <article className="relative h-full rounded-3xl border border-ivory/15 bg-[rgba(250,246,239,.045)] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:bg-[rgba(250,246,239,.08)]">
                  <span className="h-display absolute right-6 top-5 text-3xl italic text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent text-gold-brt transition-transform duration-500 hover:-rotate-6 hover:scale-105">
                    <e.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="h-display text-2xl">{e.title}</h3>
                  <p className="text-[0.95rem] text-ivory/75">{e.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARALLAX QUOTE ===== */}
      <section className="relative text-ivory" aria-label="Guest words">
        <ParallaxImage src="/images/venue-hero.jpg" alt="" speed={0.08} sizes="100vw" className="h-[110%] min-h-[60vh] w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(36,19,22,.93),rgba(36,19,22,.72))]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
            <Reveal>
              <blockquote className="max-w-[34rem]">
                <p className="h-display text-[clamp(1.7rem,3.4vw,2.9rem)] italic leading-[1.3]">
                  “The destination was simply beautiful. Everything from lights to sitting to the staff was perfect.”
                </p>
                <footer className="mt-4 text-[0.8rem] uppercase tracking-[0.22em] text-gold-brt">
                  Ayesha · Married here, 5★ on WedMeGood
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS TEASER ===== */}
      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="rev-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <HeadCenter eyebrow="Kind Words" title="Guests remember the details" />
          <div className="grid gap-6 md:grid-cols-3">
            {TEASER_QUOTES.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-9 shadow-[0_10px_30px_rgba(42,27,15,.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(42,27,15,.16)]">
                  <span className="h-display mb-4 text-6xl leading-[0.6] text-gold" aria-hidden="true">“</span>
                  <p className="h-display flex-1 text-[1.28rem] italic">{t.q}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-wine font-semibold text-ivory" aria-hidden="true">{t.av}</span>
                    <span>
                      <b className="block font-semibold">{t.who}</b>
                      <span className="text-[0.8rem] tracking-wide text-muted">{t.meta}</span>
                    </span>
                    <span className="ml-auto text-[0.8rem] text-gold-brt" role="img" aria-label={t.label}>{t.stars}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/reviews" className="link-more">Read the full review analysis</Link>
          </p>
        </div>
      </section>

      {/* ===== GALLERY TEASER ===== */}
      <section className="sec bg-cream py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-labelledby="gal-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <HeadCenter eyebrow="Gallery" title="A first look inside" />
          <div className="grid grid-cols-2 gap-3 auto-rows-[minmax(160px,auto)] lg:grid-cols-4">
            {[
              { kind: "chandelier" as const, label: "Chandelier Hall", s: "row-span-2" },
              { kind: "lawn" as const, label: "Royal Lawn", s: "" },
              { kind: "foyer" as const, label: "Grand Foyer", s: "" },
              { kind: "lights" as const, label: "Evening Lights", s: "" },
            ].map((g, i) => (
              <Reveal key={g.label} delay={i * 0.05} className={g.s}>
                <Link href="/gallery" aria-label={`Gallery — ${g.label}`} className="group block h-full w-full overflow-hidden rounded-2xl">
                  <Ph kind={g.kind} label={g.label} className="transition-transform duration-1000 group-hover:scale-105" />
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-9 text-center">
            <Link href="/gallery" className="btn"><span>The Full Gallery</span></Link>
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="sec bg-night py-[clamp(4rem,3rem+5vw,7.5rem)] text-center text-ivory" aria-labelledby="cta-h">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <Reveal>
            <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>Dates for muhurat season fill early</p>
            <h2 id="cta-h" className="h-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)]">Tell us your date. We’ll hold the palace.</h2>
            <p className="mx-auto max-w-[36rem] text-ivory/80">
              Full-day rental from ₹2,70,000. Advance ₹75,000. Transparent policies, no surprises — details on the pricing
              page.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <Reveal delay={0.05}>
              <Link href="/pricing" className="btn"><span>See Pricing &amp; Policies</span></Link>
            </Reveal>
            <Reveal delay={0.12}>
              <a href={`tel:${SITE.phoneDial}`} className="btn btn--ghost"><span>Call {SITE.phone}</span></a>
            </Reveal>
          </div>
          <Ornament />
        </div>
      </section>
    </>
  );
}
