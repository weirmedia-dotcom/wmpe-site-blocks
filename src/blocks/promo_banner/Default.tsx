import type { BlockComponent, PromoBannerContent } from "../../types";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<PromoBannerContent> = ({ text, cta_label, cta_href }) => (
  <Container className="flex flex-wrap items-center justify-center gap-4 py-4">
    <p className="text-base text-foreground">{text}</p>
    {cta_label && (
      <a href={cta_href ?? "#"} className="text-base text-foreground">
        {cta_label}
      </a>
    )}
  </Container>
);

export default Default;
