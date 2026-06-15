import type { BlockComponent, ProofStripContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Star } from "lucide-react";

const LogosAndQuote: BlockComponent<ProofStripContent> = ({ items }) => {
  const [lead, ...rest] = items;
  const trust = rest.length > 0 ? rest : items;
  return (
    <Section className="bg-background">
      <Container className="max-w-4xl text-center">
        {lead && (
          <figure>
            <div className="mb-6 flex justify-center gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-balance font-heading text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
              {lead.quote}
            </blockquote>
            {lead.attribution && (
              <figcaption className="mt-5">
                <cite className="text-sm font-semibold not-italic text-muted-foreground">
                  {lead.attribution}
                </cite>
              </figcaption>
            )}
          </figure>
        )}

        <div className="mt-12 border-t border-border pt-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by neighbours across the region
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {trust.map((item, i) =>
              item.attribution ? (
                <li
                  key={i}
                  className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  {item.attribution}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default LogosAndQuote;
