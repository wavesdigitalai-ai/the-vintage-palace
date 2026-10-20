import Link from "next/link";
import { NAV, PROFILES, SITE } from "@/lib/venue";
import { OrchLogo } from "./OrchLogo";

export function SiteFooter() {
  return (
    <footer className="bg-night pt-16 pb-8 text-ivory/70">
      <div className="mx-auto w-[min(1180px,100%-2.5rem)]">
        <div className="grid gap-10 border-b border-ivory/15 pb-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3 no-underline">
              <OrchLogo className="h-10 w-10" dark={false} />
              <span className="h-display text-2xl text-ivory">
                The Vintage Palace
                <small className="block font-body text-[0.58rem] font-medium uppercase tracking-[0.42em] text-gold-brt">
                  Karwan · Hyderabad
                </small>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed">
              A Golconda Road landmark for grand celebrations — weddings, receptions, nikaahs, sangeets, birthdays and
              corporate occasions.
            </p>
          </div>

          <nav aria-label="Footer — pages">
            <h4 className="mb-5 text-[1.02rem] font-semibold uppercase tracking-[0.22em] text-ivory">Pages</h4>
            <ul className="grid gap-2.5">
              {NAV.filter((n) => n.href !== "/").map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm no-underline transition-all duration-300 hover:translate-x-1 hover:text-gold-brt">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — occasions">
            <h4 className="mb-5 text-[1.02rem] font-semibold uppercase tracking-[0.22em] text-ivory">Occasions</h4>
            <ul className="grid gap-2.5">
              {["Weddings", "Receptions", "Sangeet & Mehendi", "Nikaah Programmes", "Corporate Events"].map((o) => (
                <li key={o}>
                  <Link href="/experiences" className="text-sm no-underline transition-all duration-300 hover:translate-x-1 hover:text-gold-brt">
                    {o}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-5 text-[1.02rem] font-semibold uppercase tracking-[0.22em] text-ivory">Find us on</h4>
            <div className="flex flex-wrap gap-2">
              {PROFILES.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-ivory/20 px-3 py-1.5 text-[0.76rem] uppercase tracking-[0.1em] no-underline transition-colors hover:border-gold-brt hover:text-gold-brt"
                >
                  {p.name}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              <b className="text-ivory">{SITE.address.line1}</b>, {SITE.address.line2}, {SITE.address.city} —{" "}
              {SITE.address.pin}
            </p>
            <a href={`tel:${SITE.phoneDial}`} className="text-gold-brt no-underline">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm">
          <span>© {new Date().getFullYear()} The Vintage Palace. All rights reserved.</span>
          <span>
            Crafted with care ·{" "}
            <a href="https://mishsystems.in" target="_blank" rel="noopener noreferrer" className="text-gold-brt">
              Mish Systems
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
