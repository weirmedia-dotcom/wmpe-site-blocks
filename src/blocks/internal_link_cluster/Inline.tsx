import type { BlockComponent, InternalLinkClusterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Inline: BlockComponent<InternalLinkClusterContent> = ({ links }) => (
  <Section className="bg-background py-12 md:py-16">
    <Container>
      <nav
        aria-label="Related pages"
        className="flex flex-col items-start gap-x-2 gap-y-2 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Explore
        </span>
        <span
          aria-hidden
          className="hidden text-muted-foreground/50 sm:inline"
        >
          &middot;
        </span>
        {links.map((link, i) => (
          <span key={i} className="inline-flex items-center gap-x-2">
            <a
              href={link.href}
              className="text-base font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline focus-visible:outline-none"
            >
              {link.label}
            </a>
            {i < links.length - 1 && (
              <span aria-hidden className="text-muted-foreground/50">
                &middot;
              </span>
            )}
          </span>
        ))}
      </nav>
    </Container>
  </Section>
);
export default Inline;
