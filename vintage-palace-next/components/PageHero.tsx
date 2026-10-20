import Link from "next/link";

export function PageHero({
  img,
  alt,
  crumb,
  title,
  lead,
  priority = true,
}: {
  img: string;
  alt: string;
  crumb: string;
  title: React.ReactNode;
  lead: string;
  priority?: boolean;
}) {
  return (
    <section className="page-hero" aria-label={crumb}>
      <div className="hero-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} fetchPriority={priority ? "high" : "auto"} />
      </div>
      <div className="wrap">
        <p className="crumb">
          <Link href="/">Home</Link>
          <span>·</span>
          {crumb}
        </p>
        <h1 className="hero-title" data-lines>
          {title}
        </h1>
        <p className="hero-lead">{lead}</p>
      </div>
      <div className="hero-cue" aria-hidden="true"></div>
    </section>
  );
}

export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thevintagepalace.in/" },
      { "@type": "ListItem", position: 2, name, item: `https://thevintagepalace.in${path}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
