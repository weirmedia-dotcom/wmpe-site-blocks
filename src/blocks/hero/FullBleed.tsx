import type { BlockComponent, HeroContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";
const FullBleed: BlockComponent<HeroContent> = ({ headline, subhead, cta_label, cta_href }) => (
  <Section className="bg-primary text-primary-foreground py-24 md:py-32">
    <Container className="max-w-3xl text-center">
      <h1 className="font-heading text-5xl md:text-7xl font-semibold tracking-tight">{headline}</h1>
      {subhead && <p className="mt-6 text-lg md:text-xl opacity-90">{subhead}</p>}
      {cta_label && <div className="mt-10 flex justify-center"><Button asChild size="lg" variant="secondary"><a href={cta_href ?? "#"}>{cta_label}</a></Button></div>}
    </Container>
  </Section>
);
export default FullBleed;
