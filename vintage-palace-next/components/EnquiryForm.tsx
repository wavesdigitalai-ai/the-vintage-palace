"use client";

import { useState } from "react";
import { SITE } from "@/lib/venue";

const OCCASIONS = [
  "Wedding", "Reception", "Sangeet", "Mehendi / Haldi", "Engagement", "Nikaah", "Birthday / Anniversary", "Corporate event", "Other",
];

export function EnquiryForm() {
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "*The Vintage Palace — Enquiry*",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Event: ${f.get("type")}`,
      `Guests: ${f.get("guests")}`,
      `Date: ${f.get("date") || "flexible"}`,
      `Message: ${f.get("msg") || "—"}`,
    ].join("\n");
    setOk(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener"), 500);
  };

  return (
    <form onSubmit={submit} aria-label="Enquiry form" className="grid gap-4.5">
      <div className="grid gap-4.5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Your name</span>
          <input name="name" required placeholder="Full name" autoComplete="name"
            className="w-full rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold-brt focus:shadow-[0_0_0_3px_rgba(217,177,104,.18)] focus:outline-none" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Phone</span>
          <input name="phone" type="tel" required placeholder="+91" autoComplete="tel"
            className="w-full rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold-brt focus:shadow-[0_0_0_3px_rgba(217,177,104,.18)] focus:outline-none" />
        </label>
      </div>
      <div className="grid gap-4.5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Occasion</span>
          <select name="type" required className="w-full rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory focus:border-gold-brt focus:outline-none [&>option]:text-ink">
            {OCCASIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Guests</span>
          <input name="guests" type="number" min={50} max={5000} required placeholder="e.g. 700"
            className="w-full rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold-brt focus:shadow-[0_0_0_3px_rgba(217,177,104,.18)] focus:outline-none" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Preferred date</span>
        <input name="date" type="date"
          className="w-full rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory [color-scheme:dark] focus:border-gold-brt focus:outline-none" />
      </label>
      <label className="block">
        <span className="mb-2 block text-[0.74rem] uppercase tracking-[0.22em] text-ivory/70">Anything to add</span>
        <textarea name="msg" rows={4} placeholder="Décor theme, catering preference, budget range…"
          className="min-h-[110px] w-full resize-y rounded-xl border border-ivory/25 bg-[rgba(250,246,239,.06)] px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold-brt focus:shadow-[0_0_0_3px_rgba(217,177,104,.18)] focus:outline-none" />
      </label>
      <button type="submit" className="btn">
        <span>Send enquiry on WhatsApp</span>
      </button>
      {ok && (
        <p className="rounded-xl border border-gold bg-[rgba(176,141,87,.16)] px-5 py-4 text-sm text-gold-brt">
          Thanks! Your enquiry is ready — WhatsApp will open with everything pre-filled. Press send and we&apos;ll take it
          from there.
        </p>
      )}
      <p className="text-sm text-ivory/55">
        Prefer talking? <a href={`tel:${SITE.phoneDial}`} className="text-gold-brt">Call {SITE.phone}</a> — we answer 11 AM
        to 10 PM.
      </p>
    </form>
  );
}
