import type { BlockComponent, StatBannerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<StatBannerContent> = ({ items, heading }) => (
  <Section>
    <Container>
      {heading && <h2 className="mb-8 text-2xl text-foreground">{heading}</h2>}
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col gap-2">
            <span className="text-3xl text-foreground">{item.number}</span>
            <span className="text-sm text-muted-foreground">{item.label}</span>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
