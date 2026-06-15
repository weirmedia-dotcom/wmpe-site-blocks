import type { BlockComponent, DefinitionAnswerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card as UICard } from "../../ui/card";
import { HelpCircle } from "lucide-react";

const Card: BlockComponent<DefinitionAnswerContent> = ({ question, answer }) => (
  <Section className="bg-muted/40">
    <Container className="max-w-3xl">
      <UICard className="relative overflow-hidden p-8 md:p-10">
        <span
          className="pointer-events-none absolute -right-3 -top-5 select-none font-heading text-8xl leading-none text-primary/5"
          aria-hidden
        >
          ?
        </span>
        <div className="relative flex items-start gap-4">
          <span
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"
            aria-hidden
          >
            <HelpCircle className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-card-foreground md:text-3xl">
              {question}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </UICard>
    </Container>
  </Section>
);

export default Card;
