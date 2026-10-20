import Link from "next/link";
import { SplitText } from "@/components/SplitText";
import { Reveal } from "@/components/Reveal";

export function PageHero({ label, title, lead }: { label: string; title: string; lead: string }) {
  return (
    <section className="page-hero relative overflow-hidden bg-night text-ivory">
      <div
        className="pointer-events-none absolute -right-[20vmax] -top-[30vmax] h-[60vmax] w-[60vmax] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(217,177,104,.16), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative z-[3] mx-auto w-[min(1180px,100%-2.5rem)] pt-36 pb-16">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="mb-6 flex list-none gap-3 p-0 text-[0.78rem] uppercase tracking-[0.22em] text-ivory/60">
              <li>
                <Link href="/" className="no-underline transition-colors hover:text-gold-brt">
                  Home
                </Link>
                <span className="mx-3 text-gold-brt">·</span>
              </li>
              <li aria-current="page">{label}</li>
            </ol>
          </nav>
          <h1 className="h-display max-w-[15ch] text-[clamp(2.6rem,1.6rem+4.6vw,5.2rem)] font-medium">
            <SplitText text={title} />
          </h1>
          <p className="mt-2 max-w-[44rem] text-lg text-ivory/85">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HeadCenter({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-[46rem] text-center">
      <Reveal>
        <p className="eyebrow justify-center after:mx-0 after:w-[34px] after:bg-gold after:content-['']" style={{ justifyContent: "center" }}>
          {eyebrow}
        </p>
        <h2 className="h-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)]">{title}</h2>
        {lead && <p className="text-ink-soft">{lead}</p>}
      </Reveal>
    </div>
  );
}
