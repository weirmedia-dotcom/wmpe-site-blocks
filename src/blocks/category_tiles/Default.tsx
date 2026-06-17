import type { BlockComponent, CategoryTilesContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { ArrowUpRight, ImageIcon } from "lucide-react";

const Default: BlockComponent<CategoryTilesContent> = ({ heading, eyebrow, items }) => (
  <Section className="bg-background">
    <Container>
      {(eyebrow || heading) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          )}
          {heading && (
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Tag = (item.href ? "a" : "div") as "a" | "div";
          return (
            <Tag
              key={i}
              {...(item.href ? { href: item.href } : {})}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {item.image?.src ? (
                <img
                  src={item.image.src}
                  alt={item.image.alt || item.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="size-9 opacity-40" aria-hidden />
                </div>
              )}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
              />

              <div className="relative p-5 md:p-6">
                <h3 className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-background md:text-2xl">
                  {item.title}
                  <ArrowUpRight
                    className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </h3>
                {item.blurb && (
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-background/85">
                    {item.blurb}
                  </p>
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
