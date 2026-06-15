import type { BlockComponent, IntroProseContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";

/**
 * Lead variant — the opening paragraph is rendered larger and in the
 * foreground colour to act as a magazine-style standfirst, while the
 * remaining prose settles into the muted body treatment.
 */
const Lead: BlockComponent<IntroProseContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <Markdown className="[&>div>p:first-child]:text-xl [&>div>p:first-child]:leading-relaxed [&>div>p:first-child]:text-foreground [&>div>p:first-child]:mb-6 [&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:text-foreground">
        {markdown}
      </Markdown>
    </Container>
  </Section>
);

export default Lead;
