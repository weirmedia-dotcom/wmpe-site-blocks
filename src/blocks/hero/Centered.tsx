import type { BlockComponent, HeroContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";
const Centered: BlockComponent<HeroContent> = ({ headline, subhead, cta_label, cta_href }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl text-center">
      <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight text-foreground">{headline}</h1>
      {subhead && <p className="mt-6 text-lg md:text-xl text-muted-foreground">{subhead}</p>}
      {cta_label && (
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg"><a href={cta_href ?? "#"}>{cta_label}</a></Button>
        </div>
      )}
    </Container>
  </Section>
);
export default Centered;
