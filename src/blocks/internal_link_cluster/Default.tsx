import type { BlockComponent, InternalLinkClusterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<InternalLinkClusterContent> = ({ links }) => (
  <Section>
    <Container>
      <nav aria-label="Related pages">
        <ul className="flex flex-col gap-2">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-base text-foreground">
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
