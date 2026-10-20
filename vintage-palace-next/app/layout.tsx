import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Motion } from "@/components/Motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib/venue";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Vintage Palace — Wedding & Event Venue in Karwan, Hyderabad",
    template: `%s · The Vintage Palace, ${SITE.tagline}`,
  },
  description:
    "A palace-style banquet venue on Golconda Road, Karwan — banquet hall for 700, floodlit garden for 1,500, in-house kitchen and decorator, five rooms for the families. Site visits daily, 11 am – 10 pm. Call +91 91603 74743.",
  alternates: { canonical: "/" },
  keywords: [
    "wedding venue Hyderabad",
    "banquet hall Karwan",
    "The Vintage Palace",
    "function hall Golconda Road",
    "wedding hall old city Hyderabad",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "The Vintage Palace — Wedding & Event Venue in Karwan, Hyderabad",
    description: "Banquet hall for 700 · floodlit garden for 1,500 · five rooms for the families.",
    url: SITE.url,
    images: [{ url: "/images/venue-hero.jpg", width: 1200, height: 800 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vintage Palace — Karwan, Hyderabad",
    description: "Banquet hall for 700 · floodlit garden for 1,500 · five rooms for the families.",
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
  themeColor: "#14100B",
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
      maximumAttendeeCapacity: 1500,
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
        { "@type": "LocationFeatureSpecification", name: "On-site parking (110 vehicles)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Changing rooms", value: true },
        { "@type": "LocationFeatureSpecification", name: "Guest rooms on premises", value: true },
        { "@type": "LocationFeatureSpecification", name: "Stage", value: true },
        { "@type": "LocationFeatureSpecification", name: "Separate dining hall", value: true },
        { "@type": "LocationFeatureSpecification", name: "In-house catering and decorator", value: true },
      ],
      image: `${SITE.url}/images/venue-hero.jpg`,
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
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Motion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
