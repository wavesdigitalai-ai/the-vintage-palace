import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Halls, Lawn & Celebrations",
  description:
    "A look inside The Vintage Palace: the chandeliered Palace Hall, the open Royal Lawn, evening lights and celebration moments — organised by space on Golconda Road, Karwan, Hyderabad.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery — The Vintage Palace, Hyderabad", description: "Chandeliered halls, open lawns and celebration moments — organised by space.", images: ["/images/venue-hero.jpg"] },
};

const SITE = "https://thevintagepalace.in";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        label="Gallery"
        title="The Palace, In Every Light"
        lead="Organised by space — the way couples actually browse. Tap any tile to open it full-screen."
      />

      <section className="py-[clamp(4rem,3rem+5vw,7.5rem)]" aria-label="Gallery">
        <div className="mx-auto w-[min(1380px,100%-2.5rem)]">
          <GalleryGrid />
          <p className="mt-8 text-center text-[0.86rem] text-muted">
            Each tile marks a real corner of the venue. Drop professional photographs into{" "}
            <code className="rounded bg-cream px-1.5 py-0.5">public/images/</code> and the gallery fills itself.
          </p>
        </div>
      </section>

      <section className="bg-cream py-[clamp(4rem,3rem+5vw,7.5rem)] text-center">
        <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
          <h2 className="h-display">Held your breath at tile one?</h2>
          <p className="mx-auto max-w-[34rem] text-ink-soft">Then come see it live. Site visits run daily from 11 AM to 10 PM.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn"><span>Book a site visit</span></Link>
            <Link href="/venue" className="btn btn--ghost"><span>Explore the spaces</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 3600;
