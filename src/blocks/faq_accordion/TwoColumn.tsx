import type { BlockComponent, FaqAccordionContent, FaqItem } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/ui/accordion";

const Column = ({
  items,
  offset,
}: {
  items: FaqItem[];
  offset: number;
}) => (
  <Accordion type="single" collapsible className="border-t border-border">
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        value={String(offset + i)}
        className="border-b border-border"
      >
        <AccordionTrigger className="group gap-4 py-5 text-base font-medium tracking-tight text-foreground hover:no-underline">
          <span className="text-left transition-colors group-hover:text-primary">
            {item.q}
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-5 pr-8">
          <p className="text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
            {item.a}
          </p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const TwoColumn: BlockComponent<FaqAccordionContent> = ({ items }) => {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <Section className="bg-background">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Questions &amp; Answers
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you might be wondering
          </h2>
        </div>

        <div className="grid gap-x-12 md:grid-cols-2">
          <Column items={left} offset={0} />
          {right.length > 0 && <Column items={right} offset={mid} />}
        </div>
      </Container>
    </Section>
  );
};

export default TwoColumn;
