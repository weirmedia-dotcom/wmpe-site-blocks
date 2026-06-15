import type { BlockComponent, HeroContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";
const Default: BlockComponent<HeroContent> = ({ headline, subhead, cta_label, cta_href }) => (
  <Section className="bg-background">
    <Container className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground">{headline}</h1>
        {subhead && <p className="mt-5 text-lg text-muted-foreground">{subhead}</p>}
        {cta_label && <div className="mt-8"><Button asChild size="lg"><a href={cta_href ?? "#"}>{cta_label}</a></Button></div>}
      </div>
      <div className="aspect-[4/3] w-full rounded-lg bg-muted" aria-hidden />
    </Container>
  </Section>
);
export default Default;
