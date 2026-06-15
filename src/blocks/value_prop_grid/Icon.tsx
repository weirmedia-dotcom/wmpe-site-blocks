import * as LucideIcons from "lucide-react";

/**
 * Resolves a lucide icon name (kebab/snake/space-cased) to its PascalCase
 * component export, falling back to `Check` when unknown or unset.
 */
export function Icon({ name, className }: { name?: string; className?: string }) {
  const key = (name ?? "")
    .split(/[-_ ]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  const Cmp = (LucideIcons as any)[key] ?? LucideIcons.Check;
  return <Cmp className={className} aria-hidden />;
}

/** Maps a desired column count (2/3/4) to a mobile-first grid class. Defaults to 3. */
export function colsClass(columns?: number) {
  switch (columns) {
    case 2:
      return "md:grid-cols-2";
    case 4:
      return "sm:grid-cols-2 lg:grid-cols-4";
    default:
      return "sm:grid-cols-2 lg:grid-cols-3";
  }
}
