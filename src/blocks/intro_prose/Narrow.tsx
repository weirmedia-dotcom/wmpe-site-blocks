import type { BlockComponent, IntroProseContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";

/**
 * Narrow variant — a tighter measure with slightly smaller body type
 * for dense, focused reading passages.
 */
const Narrow: BlockComponent<IntroProseContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-2xl">
      <Markdown className="[&>p]:text-sm [&>p]:my-3 [&>ul]:text-sm [&>ol]:text-sm">
        {markdown}
      </Markdown>
    </Container>
  </Section>
);

export default Narrow;
