import type { BlockComponent, MediaListRowContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { ImageIcon, ArrowUpRight } from "lucide-react";

const Default: BlockComponent<MediaListRowContent> = ({ heading, eyebrow, items }) => (
  <Section className="bg-background">
    <Container className="max-w-4xl">
      {(eyebrow || heading) && (
        <div className="mb-8">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          )}
          {heading && (
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {items.map((item, i) => {
          const Tag = (item.cta_href ? "a" : "div") as "a" | "div";
          return (
            <Tag
              key={i}
              {...(item.cta_href ? { href: item.cta_href } : {})}
              className="group flex items-center gap-5 p-4 transition-colors hover:bg-muted/50 sm:gap-6 sm:p-5"
            >
              <div className="aspect-square w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-muted sm:w-28 md:w-32">
                {item.image?.src ? (
                  <img
                    src={item.image.src}
                    alt={item.image.alt || item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                    <ImageIcon className="h-7 w-7 opacity-50" aria-hidden />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-card-foreground md:text-xl">
                  {item.name}
                </h3>
                {item.tagline && (
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.tagline}
                  </p>
                )}
                {item.meta && item.meta.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {item.meta.map((m, j) => (
                      <li
                        key={j}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2 pl-2 text-right">
                {item.price && (
                  <span className="font-heading text-lg font-semibold text-foreground md:text-xl">
                    {item.price}
                  </span>
                )}
                {item.cta_label && (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent-foreground">
                    <span className="hidden sm:inline">{item.cta_label}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                )}
              </div>
            </Tag>
          );
        })}
      </div>
    </Container>
  </Section>
);

export default Default;
