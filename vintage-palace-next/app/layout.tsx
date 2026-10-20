import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WaFab } from "@/components/WaFab";
import { SITE } from "@/lib/venue";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Vintage Palace — Wedding & Event Venue in Karwan, Hyderabad",
    template: "%s | The Vintage Palace, Hyderabad",
  },
  description:
    "The Vintage Palace, Golconda Road, Karwan, Hyderabad — a heritage-style venue for grand weddings, receptions, sangeets and celebrations. Halls for 700, lawns for 1,500, parking for 100+ cars. Rated 4.3★ on Google. Call +91 91603 74743.",
  alternates: { canonical: "/" },
  keywords: ["wedding venue Hyderabad", "banquet hall Karwan", "The Vintage Palace", "function hall Golconda Road"],
  openGraph: {
    type: "website",
    siteName: "The Vintage Palace",
    title: "The Vintage Palace — Wedding & Event Venue in Karwan, Hyderabad",
    description: "A Golconda Road landmark for grand celebrations. 2 stunning spaces, 3,000 guests, in the heart of Old Hyderabad.",
    url: SITE.url,
    images: [{ url: "/images/venue-hero.jpg", width: 1200, height: 800 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vintage Palace — Karwan, Hyderabad",
    description: "Heritage-style wedding venue on Golconda Road. Hall for 700 · Lawn for 1,500 · Parking for 100+ cars.",
    images: ["/images/venue-hero.jpg"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#241316",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EventVenue",
      "@id": `${SITE.url}/#venue`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      priceRange: "₹₹",
      maximumAttendeeCapacity: 3000,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.pin,
        addressCountry: SITE.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      openingHours: "Mo-Su 11:00-22:00",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free on-site parking (100+ cars)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Bridal changing rooms", value: true },
        { "@type": "LocationFeatureSpecification", name: "Power backup", value: true },
        { "@type": "LocationFeatureSpecification", name: "Stage", value: true },
        { "@type": "LocationFeatureSpecification", name: "Separate dining area", value: true },
      ],
      image: `${SITE.url}/images/venue-hero.jpg`,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "39", bestRating: "5", worstRating: "1" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#venue` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="absolute -left-[9999px] top-0 z-[2000] rounded-br-xl bg-wine-deep px-5 py-2.5 text-ivory focus:left-0"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WaFab />
      </body>
    </html>
  );
}
