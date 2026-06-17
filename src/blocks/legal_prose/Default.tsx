import type { BlockComponent, LegalProseContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Markdown } from "../../lib/Markdown";

const Default: BlockComponent<LegalProseContent> = ({ markdown }) => (
  <Section>
    <Container>
      <Markdown>{markdown}</Markdown>
    </Container>
  </Section>
);

export default Default;
