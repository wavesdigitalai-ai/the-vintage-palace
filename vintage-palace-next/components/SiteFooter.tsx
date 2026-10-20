import Link from "next/link";
import { NAV, SITE } from "@/lib/venue";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="brand-name">The Vintage Palace</span>
            <span className="brand-sub">Karwan · Hyderabad</span>
            <p>
              A palace-style banquet venue on Golconda Road — two marquee spaces, an in-house caterer and decorator, and
              five rooms for the families.
            </p>
          </div>
          <div className="foot-col">
            <h4>Site</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Find us on</h4>
            <ul>
              <li>
                <a href="https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842" target="_blank" rel="noopener">
                  WedMeGood · 4.8★
                </a>
              </li>
              <li>
                <a href="https://weddingz.in/hyderabad/the-vintage-palace-karwan/" target="_blank" rel="noopener">
                  Weddingz
                </a>
              </li>
              <li>
                <a href="https://banquethub.in/venue/the-vintage-palace" target="_blank" rel="noopener">
                  BanquetHub
                </a>
              </li>
              <li>
                <a href="https://hyderabad.wedding.net/venues/436745" target="_blank" rel="noopener">
                  Wedding.net
                </a>
              </li>
              <li>
                <a href="https://the-vintage-palace.wheree.com/" target="_blank" rel="noopener">
                  Wheree
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/The+Vintage+Palace+Golconda+Road+Karwan+Hyderabad"
                  target="_blank"
                  rel="noopener"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Visit &amp; call</h4>
            <address>
              {SITE.address.line1},<br />
              {SITE.address.line2},<br />
              {SITE.address.city} {SITE.address.pin}
            </address>
            <p style={{ margin: "1rem 0 0" }}>
              <a className="foot-tel" href={`tel:${SITE.phoneDial}`}>
                {SITE.phone}
              </a>
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
              Site visits daily · 11 am – 10 pm
            </p>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 The Vintage Palace · Karwan, Hyderabad</span>
          <span>
            Photos &amp; facts sourced from the venue&apos;s official albums on{" "}
            <a href="https://weddingz.in/hyderabad/the-vintage-palace-karwan/" target="_blank" rel="noopener">
              Weddingz
            </a>{" "}
            &amp;{" "}
            <a href="https://www.wedmegood.com/wedding-venues/The-Vintage-Palace-999842" target="_blank" rel="noopener">
              WedMeGood
            </a>{" "}
            · <Link href="/sitemap.xml">Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function CtaDark({ title, sub }: { title: React.ReactNode; sub: string }) {
  return (
    <section className="sec sec--dark cta-dark" aria-labelledby="cta">
      <div className="wrap">
        <div className="rv">
          <h2 id="cta" className="h2">
            {title}
          </h2>
          <p className="muted" style={{ marginTop: "1rem" }}>
            {sub}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CtaActions({ primary, secondary }: { primary: { href: string; label: string }; secondary: { href: string; label: string } }) {
  return (
    <div className="hero-cta" style={{ justifyContent: "center", animation: "none", opacity: 1 }}>
      <a className="btn btn--brass" href={primary.href}>
        <span>{primary.label}</span>
        <span className="arr">→</span>
      </a>
      <a className="btn btn--paper" href={secondary.href}>
        <span>{secondary.label}</span>
        <span className="arr">→</span>
      </a>
    </div>
  );
}
