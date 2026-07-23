import type { AppTeaserContent } from "../../types";
import { cn } from "../../lib/cn";

/**
 * Shared presentation for the app-teaser pattern: a card carrying the copy
 * (eyebrow / heading / subhead / CTA) with a screenshot of the tool layered
 * over its left side, tilted and bleeding past the card's edges so the two
 * read as one object.
 *
 * Two ways to wire the click:
 *   - `cta_href`   → renders an <a>, for a plain link (the package default).
 *   - `onActivate` → renders a <button>, for a client override that opens the
 *                    real tool in a modal. Takes precedence over `cta_href`.
 *
 * No "use client" here on purpose: with no `onActivate` this stays a server
 * component; a client consumer passing `onActivate` pulls it into their own
 * client boundary.
 */
export type AppTeaserCardProps = AppTeaserContent & {
  /** Opens the tool in-place (modal) instead of navigating. */
  onActivate?: () => void;
  className?: string;
};

export function AppTeaserCard({
  image,
  image_alt,
  eyebrow,
  heading,
  subhead,
  cta_label,
  cta_href,
  onActivate,
  className,
}: AppTeaserCardProps) {
  const inner = (
    <>
      {/* Screenshot: in flow above the card on mobile (flat, contained), then
          absolutely positioned over the card's left side from sm up. */}
      {image && (
        <div className="mb-6 sm:absolute sm:left-[-3%] sm:top-1/2 sm:z-10 sm:mb-0 sm:w-[58%] sm:-translate-y-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={image_alt ?? ""}
            className="w-full rounded-2xl border border-border shadow-md transition-transform duration-300 ease-out sm:rotate-[-3deg] sm:shadow-2xl sm:group-hover:rotate-[-1.5deg]"
          />
        </div>
      )}
      <div className="relative z-0 flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow group-hover:shadow-md sm:min-h-[22rem] sm:justify-center sm:py-14 sm:pl-[61%] sm:pr-10">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        )}
        {heading && (
          <h2 className="text-balance font-heading text-2xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-[2.25rem]">
            {heading}
          </h2>
        )}
        {subhead && (
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">{subhead}</p>
        )}
        {cta_label && (
          <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors group-hover:bg-primary/90">
            {cta_label}
          </span>
        )}
      </div>
    </>
  );

  // Extra vertical room so the bleeding screenshot never crowds the section edge.
  const root = "group relative block w-full text-left";

  return (
    <div className={cn("py-8 sm:py-16", className)}>
      {onActivate ? (
        <button type="button" onClick={onActivate} aria-haspopup="dialog" className={root}>
          {inner}
        </button>
      ) : (
        <a href={cta_href ?? "#"} className={root}>
          {inner}
        </a>
      )}
    </div>
  );
}

export default AppTeaserCard;
