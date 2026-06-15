import type { BlockComponent, FaqAccordionContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const Bordered: BlockComponent<FaqAccordionContent> = ({ items }) => (
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

      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={String(i)}
            className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-colors data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="group gap-4 px-6 py-5 text-base font-medium tracking-tight text-card-foreground hover:no-underline md:text-lg">
              <span className="text-left transition-colors group-hover:text-primary">
                {item.q}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0">
              <div className="border-t border-border pt-4">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </Section>
);

export default Bordered;
