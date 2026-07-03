import type { BlockComponent, HeroContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<HeroContent> = ({ headline, headline_accent, subhead, cta_label, cta_href }) => (
  <Section>
    <Container className="space-y-5">
      <h1 className="text-3xl text-foreground">
        {headline}
        {headline_accent && <> <span className="text-primary">{headline_accent}</span></>}
      </h1>
      {subhead && <p className="text-lg text-muted-foreground">{subhead}</p>}
      {cta_label && (
        <p>
          <a href={cta_href ?? "#"}>{cta_label}</a>
        </p>
      )}
    </Container>
  </Section>
);

export default Default;
