import type { BlockComponent, StepListContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Card } from "@/ui/card";

const Cards: BlockComponent<StepListContent> = ({ steps }) => (
  <Section className="bg-muted/40">
    <Container>
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={i} className="h-full">
            <Card className="group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md focus-within:-translate-y-1">
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary font-heading text-lg font-semibold tabular-nums text-secondary-foreground ring-1 ring-border transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
);

export default Cards;
