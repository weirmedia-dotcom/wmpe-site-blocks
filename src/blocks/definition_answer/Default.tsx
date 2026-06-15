import type { BlockComponent, DefinitionAnswerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<DefinitionAnswerContent> = ({ question, answer }) => (
  <Section>
    <Container className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Answer
        </span>
      </div>
      <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
        {question}
      </h2>
      <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
        {answer}
      </p>
    </Container>
  </Section>
);

export default Default;
