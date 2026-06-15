import type { BlockComponent, InternalLinkClusterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { ArrowRight } from "lucide-react";

const Cards: BlockComponent<InternalLinkClusterContent> = ({ links }) => (
  <Section className="bg-muted/40">
    <Container>
      <div className="mb-10 flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-border" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Explore more
        </span>
      </div>
      <nav aria-label="Related pages">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="font-heading text-lg font-medium leading-snug tracking-tight">
                  {link.label}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </Section>
);
export default Cards;
