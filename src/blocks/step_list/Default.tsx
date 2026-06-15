import type { BlockComponent, StepListContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<StepListContent> = ({ steps }) => (
  <Section className="bg-background">
    <Container>
      <ol className="relative mx-auto max-w-3xl">
        {/* continuous vertical rail behind the nodes */}
        <span
          className="pointer-events-none absolute left-6 top-6 bottom-6 w-px bg-border md:left-7"
          aria-hidden
        />
        {steps.map((step, i) => (
          <li
            key={i}
            className="group relative grid grid-cols-[3rem_1fr] gap-x-5 pb-12 last:pb-0 md:grid-cols-[3.5rem_1fr] md:gap-x-8"
          >
            {/* numbered node */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card font-heading text-base font-semibold tabular-nums text-foreground shadow-sm transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:h-14 md:w-14 md:text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="pt-1.5 md:pt-2.5">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
);

export default Default;
