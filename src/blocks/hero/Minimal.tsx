import type { BlockComponent, HeroContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";
const Minimal: BlockComponent<HeroContent> = ({ headline, subhead, cta_label, cta_href }) => (
  <Section className="bg-background py-12 md:py-16">
    <Container className="max-w-2xl">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{headline}</h1>
      {subhead && <p className="mt-3 text-base text-muted-foreground">{subhead}</p>}
      {cta_label && <div className="mt-6"><Button asChild><a href={cta_href ?? "#"}>{cta_label}</a></Button></div>}
    </Container>
  </Section>
);
export default Minimal;
