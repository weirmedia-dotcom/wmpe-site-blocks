import type { BlockComponent, RiskReversalContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Markdown } from "../../lib/Markdown";

/**
 * Inline variant — a lightweight bordered callout for dropping a single
 * reassurance line into a content flow.
 */
const Inline: BlockComponent<RiskReversalContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <div className="rounded-lg border border-border p-6 [&>div>*:first-child]:mt-0 [&>div>*:last-child]:mb-0">
        <Markdown>{markdown}</Markdown>
      </div>
    </Container>
  </Section>
);

export default Inline;
