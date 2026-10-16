import type { BlockComponent, IntroProseContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Markdown } from "../../lib/Markdown";

const Default: BlockComponent<IntroProseContent> = ({ markdown, heading }) => (
  <Section>
    <Container>
      {heading && <h2 className="mb-8 text-2xl text-heading">{heading}</h2>}
      <Markdown>{markdown}</Markdown>
    </Container>
  </Section>
);

export default Default;
