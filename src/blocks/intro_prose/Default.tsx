import type { BlockComponent, IntroProseContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Markdown } from "../../lib/Markdown";

const Default: BlockComponent<IntroProseContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <Markdown>{markdown}</Markdown>
    </Container>
  </Section>
);

export default Default;
