import type { BlockComponent, ImageContentSplitContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";

const Default: BlockComponent<ImageContentSplitContent> = ({ image, heading, body, cta_label, cta_href }) => (
  <Section className="bg-background">
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          {image.src
            ? <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" />
            : <div className="aspect-[4/3] w-full bg-muted" aria-label={image.alt} />}
        </div>
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">{heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>
          {cta_label && (
            <div className="mt-8">
              <Button asChild><a href={cta_href ?? "#"}>{cta_label}</a></Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
