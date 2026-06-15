import type { BlockComponent, LegalProseContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";

/**
 * Dense variant — smaller type and tighter vertical rhythm across a
 * wider measure, suited to long terms & conditions.
 */
const Dense: BlockComponent<LegalProseContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-4xl">
      <Markdown className="[&>p]:text-sm [&>p]:my-3 [&>ul]:text-sm [&>ol]:text-sm [&>ul]:my-3 [&>ol]:my-3 [&>h2]:text-xl [&>h2]:mt-6 [&>h2]:mb-2 [&>h3]:text-base [&>h3]:mt-5 [&>h3]:mb-2">
        {markdown}
      </Markdown>
    </Container>
  </Section>
);

export default Dense;
