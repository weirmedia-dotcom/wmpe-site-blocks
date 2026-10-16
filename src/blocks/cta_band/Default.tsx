import type { BlockComponent, CtaBandContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<CtaBandContent> = ({ headline, cta_label, cta_href, body }) => (
  <Section>
    <Container>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-heading">{headline}</h2>
        {body ? <p className="text-base text-muted-foreground">{body}</p> : null}
        <div>
          <a href={cta_href ?? "#"} className="text-base text-foreground">
            {cta_label}
          </a>
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
