"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/venue";
import { OrchLogo } from "./OrchLogo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(250,246,239,.92)] shadow-[0_12px_30px_rgba(42,27,15,.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-[min(1380px,100%-2.5rem)] items-center justify-between gap-4 py-3">
          <Link href="/" aria-label={`${SITE.name} — home`} className="flex items-center gap-3 no-underline">
            <OrchLogo className="h-11 w-11 transition-transform duration-500 hover:rotate-6" />
            <span
              className={`h-display text-lg leading-[1.05] transition-colors duration-300 sm:text-[1.28rem] ${
                scrolled ? "text-wine-deep" : "text-ivory"
              }`}
            >
              The Vintage Palace
              <small className="block font-body text-[0.58rem] font-medium uppercase tracking-[0.42em] text-gold-brt">
                Karwan · Hyderabad
              </small>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-8">
              {NAV.map((n) => {
                const active = pathname === n.href;
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-1 text-[0.82rem] font-medium uppercase tracking-[0.18em] no-underline transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-0 after:-translate-x-1/2 after:bg-gold-brt after:transition-[width] after:duration-300 hover:after:w-full ${
                        scrolled ? "text-ink hover:text-wine" : "text-ivory/90 hover:text-gold-brt"
                      } ${active ? (scrolled ? "!text-wine" : "!text-gold-brt") : ""} ${active ? "after:w-full" : ""}`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn btn--sm hidden lg:inline-flex">
              <span>Enquire Now</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              aria-expanded={open}
              className="relative z-[1102] flex cursor-pointer flex-col gap-[5px] px-2 py-3 lg:hidden"
            >
              {[0, 1, 2].map((i) => (
                <i
                  key={i}
                  className={`block h-[2px] w-[25px] rounded-full transition-all duration-400 ${
                    open
                      ? i === 0
                        ? "translate-y-[7px] rotate-45 bg-ivory"
                        : i === 1
                          ? "opacity-0"
                          : "-translate-y-[7px] -rotate-45 bg-ivory"
                      : scrolled
                        ? "bg-ink"
                        : "bg-ivory"
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav
        aria-label="Mobile"
        className={`fixed inset-0 z-[1101] flex flex-col justify-center bg-wine-deep px-8 pt-24 pb-12 transition-[clip-path,visibility] duration-[700ms] [transition-timing-function:cubic-bezier(0.62,0.05,0.18,1)] ${
          open
            ? "[clip-path:circle(150%_at_calc(100%-42px)_34px)] [visibility:visible]"
            : "[clip-path:circle(0%_at_calc(100%-42px)_34px)] [visibility:hidden] delay-[700ms]"
        }`}
      >
        <ul className="mb-8 grid">
          {NAV.map((n, i) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className={`h-display inline-flex items-baseline gap-3 text-[clamp(1.9rem,8vw,2.6rem)] font-medium text-ivory no-underline transition-all ${
                  open ? "translate-y-0 opacity-100" : "translate-y-[26px] opacity-0"
                } hover:text-gold-brt`}
                style={{ transitionDelay: `${150 + i * 60}ms` }}
              >
                {n.label} <i className="font-body text-sm not-italic text-gold-brt">0{i + 1}</i>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`transition-all ${open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          style={{ transitionDelay: "550ms" }}
        >
          <p className="text-sm tracking-widest text-ivory/60">Pillar No. 102, Golconda Road, Karwan, Hyderabad</p>
          <a href={`tel:${SITE.phoneDial}`} className="text-lg text-gold-brt no-underline">
            {SITE.phone}
          </a>
        </div>
      </nav>
    </>
  );
}
