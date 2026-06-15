import type { BlockComponent, CtaBandContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";

const Split: BlockComponent<CtaBandContent> = ({ headline, cta_label, cta_href }) => (
  <Section className="bg-secondary text-foreground">
    <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
      <div className="md:max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {headline}
        </h2>
        {/* asymmetric accent rule anchoring the headline */}
        <span aria-hidden className="mt-6 block h-1 w-16 rounded-full bg-primary md:hidden" />
      </div>
      <div className="shrink-0">
        <Button
          asChild
          size="lg"
          className="group transition-transform hover:-translate-y-0.5"
        >
          <a href={cta_href ?? "#"}>
            {cta_label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </Button>
      </div>
    </Container>
  </Section>
);
export default Split;
