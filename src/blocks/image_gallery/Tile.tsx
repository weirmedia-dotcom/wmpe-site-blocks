import { ImageIcon } from "lucide-react";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/cn";

// Shared image-or-placeholder renderer used by every image_gallery variant.
// - With src: a lazy-loaded, cover-fit <img> that gently zooms on hover.
// - Without src: a bg-muted placeholder tile with a centered (decorative) icon,
//   the alt surfaced as sr-only text so the gallery stays accessible + laid out.
export function Tile({
  src,
  alt,
  className,
  imgClassName,
}: GalleryImage & { className?: string; imgClassName?: string }) {
  return (
    <div
      className={cn(
        "group/tile relative overflow-hidden rounded-2xl border border-border bg-muted",
        "transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-ring/40",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 ease-out group-hover/tile:scale-105",
            imgClassName,
          )}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
          <ImageIcon aria-hidden="true" className="h-10 w-10 opacity-50" />
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  );
}

export default Tile;
