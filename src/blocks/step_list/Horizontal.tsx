import type { BlockComponent, StepListContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";

const Horizontal: BlockComponent<StepListContent> = ({ steps }) => (
  <Section className="bg-background">
    <Container>
      <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, i) => (
          <li key={i} className="group relative flex flex-col">
            <div className="flex items-baseline gap-4">
              <span
                className="font-heading text-6xl font-semibold leading-none tabular-nums text-primary/15 transition-colors duration-300 group-hover:text-primary md:text-7xl"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
);

export default Horizontal;
