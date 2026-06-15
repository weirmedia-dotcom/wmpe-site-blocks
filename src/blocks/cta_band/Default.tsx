import type { BlockComponent, CtaBandContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";

const Default: BlockComponent<CtaBandContent> = ({ headline, cta_label, cta_href }) => (
  <Section className="relative overflow-hidden bg-primary text-primary-foreground">
    {/* atmospheric depth: soft radial wash + hairline top accent */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(60%_120%_at_50%_-10%,currentColor,transparent_70%)]"
    />
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary-foreground/20" />
    <Container className="relative flex flex-col items-center text-center">
      <span className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
        <span aria-hidden className="h-px w-8 bg-primary-foreground/40" />
        Get started
        <span aria-hidden className="h-px w-8 bg-primary-foreground/40" />
      </span>
      <h2 className="font-heading max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {headline}
      </h2>
      <div className="mt-9">
        <Button
          asChild
          size="lg"
          className="bg-primary-foreground text-primary shadow-lg transition-transform hover:bg-primary-foreground/90 hover:-translate-y-0.5"
        >
          <a href={cta_href ?? "#"}>{cta_label}</a>
        </Button>
      </div>
    </Container>
  </Section>
);
export default Default;
