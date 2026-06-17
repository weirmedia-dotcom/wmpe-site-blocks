import type { BlockComponent, ImageContentSplitContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ImageContentSplitContent> = ({ image, heading, body, cta_label, cta_href }) => (
  <Section>
    <Container>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          {image.src
            ? <img src={image.src} alt={image.alt} className="w-full h-auto" />
            : <div className="w-full h-64 bg-muted" role="img" aria-label={image.alt} />}
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl text-foreground">{heading}</h2>
          <p className="text-base text-muted-foreground">{body}</p>
          {cta_label && <a href={cta_href ?? "#"} className="text-base text-foreground">{cta_label}</a>}
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
