import type { BlockComponent, DefinitionAnswerContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";

const Highlight: BlockComponent<DefinitionAnswerContent> = ({ question, answer }) => (
  <Section>
    <Container className="max-w-3xl">
      <div className="rounded-r-lg border-l-4 border-accent bg-muted/40 py-7 pl-6 pr-6 md:py-8 md:pl-8">
        <h2 className="text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
          {question}
        </h2>
        <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-foreground/90">
          {answer}
        </p>
      </div>
    </Container>
  </Section>
);

export default Highlight;
