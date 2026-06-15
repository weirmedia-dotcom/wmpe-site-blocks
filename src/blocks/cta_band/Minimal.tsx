import type { BlockComponent, CtaBandContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";

const Minimal: BlockComponent<CtaBandContent> = ({ headline, cta_label, cta_href }) => (
  <Section className="bg-background text-foreground">
    <Container className="max-w-3xl">
      {/* editorial: large display headline, inline link-style CTA */}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {headline}
      </h2>
      <div className="mt-6">
        <Button
          asChild
          variant="link"
          size="lg"
          className="group h-auto p-0 text-base font-medium text-primary"
        >
          <a href={cta_href ?? "#"}>
            {cta_label}
            <span
              aria-hidden
              className="ml-1 inline-block transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </Button>
      </div>
    </Container>
  </Section>
);
export default Minimal;
