import type { BlockComponent, InternalLinkClusterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<InternalLinkClusterContent> = ({ links }) => (
  <Section className="bg-background">
    <Container>
      <div className="mb-8 flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-border" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Explore more
        </span>
      </div>
      <nav aria-label="Related pages">
        <ul className="flex flex-wrap gap-3">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="group inline-flex items-center rounded-full border border-transparent bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:-translate-y-0.5 hover:border-border hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </Section>
);
export default Default;
