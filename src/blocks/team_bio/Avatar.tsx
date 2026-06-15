import { cn } from "../../lib/cn";

/** Compute initials from a name: first letters of up to 2 words, uppercased. */
export function initialsFromName(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

type AvatarProps = {
  name: string;
  className?: string;
  /** Tailwind size token e.g. "size-16", "size-20". Defaults to "size-16". */
  size?: string;
  /** Color treatment. "muted" = bg-muted/text-foreground, "secondary" = bg-secondary/text-secondary-foreground. */
  tone?: "muted" | "secondary";
};

/** Initials avatar rendered as a circle. No image — initials are derived from `name`. */
export function Avatar({
  name,
  className,
  size = "size-16",
  tone = "muted",
}: AvatarProps) {
  const initials = initialsFromName(name);
  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        "flex shrink-0 select-none items-center justify-center rounded-full font-heading font-semibold tracking-tight ring-1 ring-border",
        size,
        tone === "secondary"
          ? "bg-secondary text-secondary-foreground"
          : "bg-muted text-foreground",
        className
      )}
    >
      {initials}
    </span>
  );
}

export default Avatar;
