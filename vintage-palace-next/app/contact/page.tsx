import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Ornament } from "@/components/WaFab";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SITE, waLink } from "@/lib/venue";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Enquire about your date at The Vintage Palace, Karwan, Hyderabad. Call +91 91603 74743, WhatsApp, or send an enquiry — site visits from 11 AM to 10 PM. Pillar No. 102, Golconda Road, beside Mahaboob Pride Function Hall.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — The Vintage Palace, Hyderabad", description: "Site visits daily from 11 AM to 10 PM. Same-day availability confirmation.", images: ["/images/venue-hero.jpg"] },
};

const SITEURL = "https://thevintagepalace.in";
const jsonLdBread = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITEURL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITEURL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBread) }} />
      <PageHero
        label="Contact"
        title="Reserve Your Date"
        lead="Enquiries answered the same day. Site visits daily from 11 AM to 10 PM — bring the family."
      />

      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-label="Enquiry">
        <div className="mx-auto grid w-[min(1180px,100%-2.5rem)] gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(42,27,15,.10)] md:p-10">
              <p className="eyebrow">Enquiry form</p>
              <h2 className="h-display text-[clamp(1.7rem,1.3rem+1.8vw,2.5rem)]">Tell us about your celebration</h2>
              <p className="text-ink-soft">
                Fill this out and the enquiry opens in WhatsApp with everything typed — just press send.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>

          <Reveal dir="right" delay={0.08}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[28px] bg-night p-8 text-ivory">
                <p className="eyebrow eyebrow--light" style={{ color: "rgba(217,177,104,.9)" }}>Visit</p>
                <address className="h-display text-[1.6rem] not-italic leading-snug text-ivory">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.pin}
                </address>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.geo.lat},${SITE.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-more link-more--light"
                >
                  Get directions
                </a>
              </div>
              <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(42,27,15,.10)]">
                <p className="eyebrow">Talk to us</p>
                <p className="mt-2 space-y-1">
                  <a href={`tel:${SITE.phoneDial}`} className="h-display block text-2xl text-wine no-underline">
                    {SITE.phone}
                  </a>
                  <span className="text-[0.85rem] uppercase tracking-[0.16em] text-muted">Front desk · 11 AM – 10 PM</span>
                </p>
                <p className="mt-3">
                  <a href={`tel:${SITE.phoneDialAlt}`} className="text-lg text-wine no-underline">
                    {SITE.phoneAlt}
                  </a>
                  <span className="text-[0.85rem] uppercase tracking-[0.16em] text-muted"> · booking line</span>
                </p>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn mt-6 w-full" style={{ backgroundColor: "#1f2c34" }}>
                  <svg viewBox="0 0 32 32" className="h-5 w-5 fill-[#25d366]" aria-hidden="true">
                    <path d="M16 3a13 13 0 0 0-11.3 19.5L3 29l6.7-1.7A13 13 0 1 0 16 3Zm0 2.4A10.6 10.6 0 1 1 8.5 23.9l-.5-.2-3.3.9.9-3.2-.3-.5A10.6 10.6 0 0 1 16 5.4Zm-4.6 5c-.3 0-.7 0-1 .3-.4.4-1.2 1.2-1.2 2.8 0 1.6 1.2 3.2 1.3 3.4.2.2 2.4 3.7 5.9 5 2.9 1.2 3.5.9 4.1.9.7 0 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8 0-.2-.2-.3-.5-.4l-2.4-1.1c-.3-.2-.5-.1-.7.1l-1.1 1.4c-.2.2-.4.2-.6.1a8.8 8.8 0 0 1-4.4-3.8c-.1-.3 0-.4.1-.6l1-1.1c.1-.2.2-.4 0-.7l-1-2.4c-.2-.5-.4-.6-.8-.6h-.4Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className="rounded-[28px] bg-cream p-8">
                <p className="eyebrow" style={{ color: "#8a6a3a" }}>Good to know</p>
                <ul className="mt-2 flex flex-col gap-2.5 text-[0.95rem] text-ink-soft">
                  <li className="before:mr-2 before:text-gold before:content-['✦']">Booking slots open 10:00 AM; overnight events run to ~6 AM.</li>
                  <li className="before:mr-2 before:text-gold before:content-['✦']">Panel decorators; outside caterers welcome.</li>
                  <li className="before:mr-2 before:text-gold before:content-['✦']">Advance ₹75,000 · GST 18% on catering.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Location map" className="pb-[clamp(3rem,2rem+4vw,6rem)]">
        <Reveal>
          <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
            <div className="map-frame overflow-hidden rounded-[28px] shadow-[0_10px_30px_rgba(42,27,15,.10)]">
              <iframe
                title={`Map to The Vintage Palace, ${SITE.address.city}`}
                src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=16&output=embed`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
        <Ornament />
      </section>
    </>
  );
}
