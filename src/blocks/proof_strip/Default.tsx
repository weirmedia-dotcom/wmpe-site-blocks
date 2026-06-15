import type { BlockComponent, ProofStripContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";
import { Quote } from "lucide-react";

const Default: BlockComponent<ProofStripContent> = ({ items }) => (
  <Section className="bg-muted/40">
    <Container>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <Card
            key={i}
            className="group relative flex flex-col overflow-hidden p-7 transition-shadow duration-300 hover:shadow-md"
          >
            <span
              className="pointer-events-none absolute -right-2 -top-3 select-none font-heading text-7xl leading-none text-primary/10 transition-colors duration-300 group-hover:text-primary/20"
              aria-hidden
            >
              &rdquo;
            </span>
            <Quote
              className="mb-4 h-5 w-5 shrink-0 text-primary"
              aria-hidden
            />
            <figure className="flex h-full flex-col">
              <blockquote className="flex-1 text-pretty text-lg font-medium leading-relaxed text-card-foreground">
                {item.quote}
              </blockquote>
              {item.attribution && (
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="h-px w-6 bg-primary" aria-hidden />
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    {item.attribution}
                  </cite>
                </figcaption>
              )}
            </figure>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
);

export default Default;
