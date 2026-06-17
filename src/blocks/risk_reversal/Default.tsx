import type { BlockComponent, RiskReversalContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Markdown } from "../../lib/Markdown";

const Default: BlockComponent<RiskReversalContent> = ({ markdown }) => (
  <Section>
    <Container>
      <Markdown>{markdown}</Markdown>
    </Container>
  </Section>
);

export default Default;
