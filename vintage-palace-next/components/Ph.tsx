import type { Ph } from "@/lib/venue";

const KIND_CLASS: Record<Ph, string> = {
  chandelier: "ph--chandelier",
  lawn: "ph--lawn",
  foyer: "",
  lights: "ph--lights",
};

export function Ph({
  kind,
  label,
  className = "",
}: {
  kind: Ph;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`ph ${KIND_CLASS[kind]} ${className}`}
      data-label={label}
      role="img"
      aria-label={`Illustration of ${label}`}
    />
  );
}
