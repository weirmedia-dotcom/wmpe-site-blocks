import type { BlockComponent, StepListContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";

const Connected: BlockComponent<StepListContent> = ({ steps }) => (
  <Section className="bg-background">
    <Container>
      <ol className="grid grid-cols-1 gap-y-10 md:auto-cols-fr md:grid-flow-col md:gap-x-6 md:gap-y-0">
        {steps.map((step, i) => {
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;
          return (
            <li key={i} className="group relative flex md:flex-col md:items-center md:text-center">
              {/* node + connectors */}
              <div className="relative flex flex-col items-center md:w-full md:flex-row md:justify-center">
                {/* vertical connector (mobile) */}
                <span
                  className={[
                    "absolute left-1/2 top-0 -z-0 w-px -translate-x-1/2 bg-border md:hidden",
                    isFirst ? "h-1/2 top-1/2" : isLast ? "h-1/2 bottom-1/2 top-auto" : "h-full",
                  ].join(" ")}
                  aria-hidden
                />
                {/* horizontal connectors (desktop) */}
                {!isFirst && (
                  <span
                    className="absolute right-1/2 top-1/2 hidden h-px w-1/2 -translate-y-1/2 bg-border md:block"
                    aria-hidden
                  />
                )}
                {!isLast && (
                  <span
                    className="absolute left-1/2 top-1/2 hidden h-px w-1/2 -translate-y-1/2 bg-border md:block"
                    aria-hidden
                  />
                )}
                {/* dot / node */}
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background font-heading text-sm font-semibold tabular-nums text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="ml-5 md:ml-0 md:mt-6 md:px-2">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mx-auto md:max-w-[22ch]">
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Container>
  </Section>
);

export default Connected;
