import type { BlockComponent, CredentialStripContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<CredentialStripContent> = ({ items, heading }) => (
  <Section>
    <Container>
      {heading && (
        <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">{heading}</h2>
      )}
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col items-center gap-2 text-center">
            <span className="text-4xl font-semibold text-primary">{item.figure}</span>
            <span className="text-base font-semibold text-foreground">{item.label}</span>
            {item.note && <span className="text-sm text-muted-foreground">{item.note}</span>}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
