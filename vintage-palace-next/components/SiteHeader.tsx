"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, waLink } from "@/lib/venue";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-head on-dark${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${SITE.name} â€” home`}>
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#14100B" />
            <path d="M14 52V30a18 18 0 0 1 36 0v22" fill="none" stroke="#C7A76B" strokeWidth="1.5" />
            <path d="M22 22l10 18 10-18M32 40v10" fill="none" stroke="#F3EEE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            <span className="brand-name">The Vintage Palace</span>
            <span className="brand-sub">Karwan Â· Hyderabad</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <a className="head-call" href={waLink()}>
          WhatsApp · {SITE.phone}
        </a>
        <a className="wa-mobile" href={waLink()} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </a>
      <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span>
        </button>
      </div>
      <div className="drawer-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      <nav className="drawer" aria-label="Mobile">
        {[...NAV, { href: "/contact", label: "Contact" }].map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <p className="drawer-foot">
          Site visits 11 am â€“ 10 pm, daily Â· <a href={waLink()}>{SITE.phone}</a>
        </p>
      </nav>
    </header>
  );
}
