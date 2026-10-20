import { waLink } from "@/lib/venue";

export function WaFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="wa-fab">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[27px] w-[27px]">
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2Zm5.7 13.9c-.2.7-1.3 1.4-1.9 1.5-.5 0-1.2.2-3.9-1a13.9 13.9 0 01-5.9-5.2c-.7-1.2-1-2.3-1-3.3 0-1 .5-1.9 1-2.3.3-.3.6-.4.9-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4-.1.6l-.4.5c-.2.2-.4.4-.2.7.3.5.9 1.4 1.6 2 .9.9 1.7 1.2 2.1 1.4.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l2.2 1c.3.2.5.3.5.5a3 3 0 010 .7Z" />
      </svg>
    </a>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={`ornament mx-auto mt-6 ${className}`} width="150" height="14" viewBox="0 0 150 14" fill="none" aria-hidden="true">
      <path d="M0 7h58M92 7h58" stroke="currentColor" strokeWidth="1" />
      <path d="M75 1l2.2 4.2L81 7l-3.8 1.8L75 13l-2.2-4.2L69 7l3.8-1.8L75 1Z" fill="currentColor" />
    </svg>
  );
}
