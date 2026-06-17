import type { BlockComponent, DefinitionAnswerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<DefinitionAnswerContent> = ({ question, answer }) => (
  <Section>
    <Container className="space-y-3">
      <h2 className="text-2xl text-foreground">{question}</h2>
      <p className="text-lg text-muted-foreground">{answer}</p>
    </Container>
  </Section>
);

export default Default;
