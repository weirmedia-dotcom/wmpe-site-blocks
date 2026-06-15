import type { BlockComponent, CtaBandContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";

const Boxed: BlockComponent<CtaBandContent> = ({ headline, cta_label, cta_href }) => (
  <Section className="bg-background">
    <Container>
      {/* floating accent card — not full-bleed, layered ring + shadow for lift */}
      <div className="relative overflow-hidden rounded-3xl bg-accent text-accent-foreground px-8 py-14 text-center shadow-xl ring-1 ring-border/50 md:px-16 md:py-20">
        {/* subtle inner glow for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background:radial-gradient(50%_80%_at_50%_0%,currentColor,transparent_75%)]"
        />
        {/* decorative corner brackets */}
        <span aria-hidden className="pointer-events-none absolute left-6 top-6 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent-foreground/25" />
        <span aria-hidden className="pointer-events-none absolute right-6 bottom-6 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent-foreground/25" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {headline}
          </h2>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent-foreground text-accent shadow-md transition-transform hover:bg-accent-foreground/90 hover:-translate-y-0.5"
            >
              <a href={cta_href ?? "#"}>{cta_label}</a>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
export default Boxed;
