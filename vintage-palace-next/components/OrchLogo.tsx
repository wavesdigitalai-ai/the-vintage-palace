export function OrchLogo({ className = "h-11 w-11", dark = true }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 5c8 0 13 5.5 13 13v21H11V18C11 10.5 16 5 24 5Zm0 3.4C17 8.4 14.4 12.9 14.4 18v17.6h19.2V18c0-5.1-2.6-9.6-9.6-9.6Z"
        fill="#d9b168"
      />
      <path
        d="M16 12.2l2.6 2.2 2.7-2.6 2.7 2.6 2.7-2.6 2.7 2.6 2.6-2.2-2 5.4H18l-2-5.4Z"
        fill="#b08d57"
      />
      <path
        d="M18.2 21h2.7l3.1 9.6L27.1 21h2.7l-4.4 12.4h-2.8L18.2 21Z"
        fill={dark ? "#571d21" : "#241316"}
        stroke="#ffd98c"
        strokeWidth=".55"
      />
      <path
        d="M26.6 21h4.6c2.3 0 3.6 1.2 3.6 3.1 0 1.5-.8 2.5-2.1 2.9 1.6.3 2.6 1.4 2.6 3.2 0 2.2-1.5 3.2-3.9 3.2h-4.8V21Zm2.7 5h1.6c1 0 1.6-.5 1.6-1.5s-.6-1.4-1.6-1.4h-1.6V26Zm0 5.3h1.9c1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.6-1.8-1.6h-1.9v3.2Z"
        fill={dark ? "#571d21" : "#241316"}
        stroke="#ffd98c"
        strokeWidth=".55"
      />
      <rect x="17" y="36.5" width="14" height="1.4" rx=".7" fill="#b08d57" />
    </svg>
  );
}
