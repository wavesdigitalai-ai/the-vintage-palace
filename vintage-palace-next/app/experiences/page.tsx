import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { CtaActions } from "@/components/SiteFooter";
import { IMG, OCCASIONS } from "@/lib/venue";

export const metadata = {
  title: "Occasions",
  description:
    "From haldi mornings to late receptions — how weddings, sangeets, nikaahs, engagements, birthdays, anniversaries and corporate events unfold at The Vintage Palace, Karwan.",
  alternates: { canonical: "/experiences" },
  openGraph: { title: "Occasions — The Vintage Palace, Hyderabad", images: [IMG["stage-violet"]] },
};

const RHYTHM = [
  {
    num: "Morning",
    h: "10:00 am · doors open, decor done",
    img: IMG["hall-day"],
    cap: "Guest rows face the stage — the family rows in between",
    alt: "The banquet hall with ceremony seating facing the stage in daylight",
    lead: "Booking slots open at 10 am. The decorator finishes the mandap while the family drinks chai in the changing rooms. Haldi unfolds first on the day sheet.",
    muted: "Site visits run 11 am – 10 pm daily, so daytime walk-throughs are easy to arrange around work hours.",
  },
  {
    num: "Afternoon",
    h: "Rituals, then the dining hall",
    img: IMG["dining-halls"],
    cap: "Dinner in waves · no queue crossings",
    alt: "The dining hall set with red chairs and planters, fans above",
    lead: "Wedding rites conclude at the stage. Guests move to dinner in waves; the greeting line stays clear for portraits and conversations.",
    muted: "Well-ventilated halls plus coolers keep the afternoon humane — ask the team about threshold cooling on your date.",
  },
  {
    num: "Evening",
    h: "Chandeliers, spotlight, farewell",
    img: IMG["stage-violet"],
    cap: "Lights up, DJ on — till the house's late rules",
    alt: "The stage dressed in violet for the evening celebration",
    lead: "Overnight weddings are permitted, and the garden knows how to glow — but the house respects its neighbours: no late-night music, so plan the last dance before the night hush.",
    muted: "Dessert at the farewell, rest for the elders in the rooms, then families turn in on campus.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Occasions" path="/experiences" />
      <PageHero
        img={IMG["stage-violet"]}
        alt="The banquet hall stage dressed in violet light for a sangeet"
        crumb="Occasions"
        title={<>One campus, every celebration.</>}
        lead="Moods shift under the same chandeliers — from the first haldi stain to the final farewell."
      />

      {/* EDITORIAL LIST */}
      <section className="sec" aria-labelledby="occ">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="kicker">The list</p>
            <h2 id="occ" className="h2">
              Nine occasions, <em>one address</em>
            </h2>
          </div>
          <div className="ed-list">
            {OCCASIONS.map((o) => (
              <div key={o.title} className="ed-item rv">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <span className="arr">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RHYTHM */}
      <section className="sec sec--tint" aria-labelledby="rhythm">
        <div className="wrap">
          <div className="sec-head centered rv">
            <p className="kicker">Your day</p>
            <h2 id="rhythm" className="h2">
              A rhythm that keeps the day <em>kind</em>
            </h2>
          </div>
          {RHYTHM.map((r, i) => (
            <div key={r.num} className={`chapter${i % 2 === 1 ? " flip" : ""}`}>
              <figure className={`chapter-media rv ${i % 2 === 1 ? "rv--right" : "rv--left"}`}>
                <div className="frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.alt} data-parallax="-0.05" />
                </div>
                <figcaption>{r.cap}</figcaption>
              </figure>
              <div className="chapter-copy rv">
                <span className="numeral">{r.num}</span>
                <h2 className="h3">{r.h}</h2>
                <p className="lead">{r.lead}</p>
                <p className="muted">{r.muted}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              Your occasion, <em>listed and loved</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Tell us the occasion and the rough headcount. We&apos;ll respond with spaces, dates and a full cost sheet
              over the phone.
            </p>
            <CtaActions
              primary={{ href: "tel:+919160374743", label: "Start the enquiry" }}
              secondary={{ href: "/pricing", label: "See the pricing" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
