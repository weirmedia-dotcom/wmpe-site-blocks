import type { BlockComponent, InternalLinkClusterContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { ChevronRight } from "lucide-react";

const List: BlockComponent<InternalLinkClusterContent> = ({ links }) => (
  <Section className="bg-background">
    <Container>
      <h2 className="font-heading mb-8 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Explore more
      </h2>
      <nav aria-label="Related pages">
        <ul className="columns-1 gap-x-12 md:columns-2 lg:columns-3">
          {links.map((link, i) => (
            <li key={i} className="mb-1 break-inside-avoid">
              <a
                href={link.href}
                className="group flex items-center gap-3 border-b border-border/60 py-3 text-base text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary"
              >
                <ChevronRight
                  aria-hidden
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                />
                <span className="font-medium">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </Section>
);
export default List;
