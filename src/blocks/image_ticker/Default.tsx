import type { BlockComponent, ImageTickerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ImageTickerContent> = ({ items, eyebrow }) => (
  <>
    {eyebrow && (
      <Section className="bg-background">
        <Container>
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-border" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </span>
          </div>
        </Container>
      </Section>
    )}
    <div className="w-full overflow-x-auto border-y border-border bg-background py-8">
      <ul className="flex w-max gap-5 px-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative h-60 w-[22rem] shrink-0 overflow-hidden rounded-2xl bg-muted shadow-sm md:h-72 md:w-[26rem]"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5">
              <span
                className="size-7 shrink-0 rounded-full border-2 border-border shadow"
                style={{ backgroundColor: item.hex }}
                aria-hidden
              />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-sm font-semibold text-background">
                  {item.colour}
                </span>
                {item.room && (
                  <span className="text-xs text-background/80">{item.room}</span>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Default;
