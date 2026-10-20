import { PageHero, BreadcrumbJsonLd } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaActions } from "@/components/SiteFooter";
import { GALLERY, IMG } from "@/lib/venue";

export const metadata = {
  title: "Gallery",
  description:
    "The photograph album of The Vintage Palace — the hall, the floodlit garden, the mandap, dinner service and the palace after dark. Sourced from the venue's official Weddingz and WedMeGood albums.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery — The Vintage Palace, Hyderabad", images: [IMG["venue-hero"]] },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Gallery" path="/gallery" />
      <PageHero
        img={IMG["gold-arches"]}
        alt="The entrance arcade facade of the palace at night"
        crumb="Gallery"
        title={<>Every corner, photographed.</>}
        lead="Sourced from the venue's official albums — tap any photograph to open it full-screen."
      />

      {/* GALLERY */}
      <section className="sec" aria-label="Photographs">
        <div className="wrap">
          <GalleryGrid />
          <p className="ph-note">
            {GALLERY.length} photographs, straight from the venue&apos;s own albums on{" "}
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
              href="https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842"
              target="_blank"
              rel="noopener"
              style={{ color: "inherit", borderBottom: "1px solid var(--brass)" }}
            >
              WedMeGood
            </a>{" "}
            — no mock-ups, no stock.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--dark cta-dark" aria-labelledby="cta">
        <div className="wrap">
          <div className="rv">
            <h2 id="cta" className="h2">
              Held your breath at <em>photograph one?</em>
            </h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Then come see it live — site visits run daily, 11 am to 10 pm.
            </p>
            <CtaActions primary={{ href: "/contact", label: "Plan the site visit" }} secondary={{ href: "/venue", label: "Explore the spaces" }} />
          </div>
        </div>
      </section>
    </>
  );
}
