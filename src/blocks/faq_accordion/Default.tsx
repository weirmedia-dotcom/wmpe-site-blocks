import type { BlockComponent, FaqAccordionContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const Default: BlockComponent<FaqAccordionContent> = ({ items }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Questions &amp; Answers
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="border-t border-border">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={String(i)}
            className="border-b border-border"
          >
            <AccordionTrigger className="group gap-4 py-6 text-base font-medium tracking-tight text-foreground hover:no-underline md:text-lg">
              <span className="flex items-start gap-4 text-left">
                <span
                  className="mt-0.5 select-none font-heading text-sm font-semibold tabular-nums text-primary/60"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="transition-colors group-hover:text-primary">
                  {item.q}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pl-10 pr-8">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </Section>
);

export default Default;
