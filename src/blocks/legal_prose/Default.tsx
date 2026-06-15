import type { BlockComponent, LegalProseContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";

/**
 * Default variant — a comfortable single legal column at normal type.
 */
const Default: BlockComponent<LegalProseContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <Markdown>{markdown}</Markdown>
    </Container>
  </Section>
);

export default Default;
