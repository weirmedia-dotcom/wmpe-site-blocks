import type { BlockComponent, MfPaintsBandContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";
import { Check } from "lucide-react";

const Default: BlockComponent<MfPaintsBandContent> = ({
  paint_can,
  chips,
  eyebrow,
  heading,
  body,
  points,
  cta_label,
  cta_href,
}) => (
  <Section className="bg-secondary">
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        {/* product image */}
        <div className="relative flex items-center justify-center">
          {paint_can ? (
            <img
              src={paint_can}
              alt={heading}
              loading="lazy"
              className="relative z-10 w-full max-w-xl object-contain"
            />
          ) : (
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-border bg-muted text-muted-foreground" />
          )}

          {chips && chips.length > 0 && (
            <div className="absolute bottom-2 right-0 z-20 flex flex-col gap-2 rounded-xl border border-border bg-background/70 p-2.5 shadow-lg backdrop-blur md:right-4">
              {chips.map((chip, i) => (
                <span
                  key={i}
                  className="size-7 rounded-md ring-1 ring-inset ring-border"
                  style={{ backgroundColor: chip }}
                  aria-hidden
                />
              ))}
            </div>
          )}
        </div>

        {/* copy */}
        <div className="text-foreground">
          {eyebrow && (
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden className="h-px w-8 bg-current opacity-50" />
              {eyebrow}
            </span>
          )}

          <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {heading}
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {body}
          </p>

          {points && points.length > 0 && (
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {cta_label && (
            <div className="mt-9">
              <Button asChild size="lg">
                <a href={cta_href ?? "#"}>{cta_label}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
