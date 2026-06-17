import type { BlockComponent, FaqAccordionContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<FaqAccordionContent> = ({ items }) => (
  <Section>
    <Container>
      <div className="space-y-4">
        {(items ?? []).map((item, i) => (
          <details key={i}>
            <summary className="text-lg text-foreground">{item.q}</summary>
            <p className="mt-2 text-base text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </Container>
  </Section>
);

export default Default;
