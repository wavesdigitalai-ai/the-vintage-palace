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
        <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span>
        </button>
      </div>
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
