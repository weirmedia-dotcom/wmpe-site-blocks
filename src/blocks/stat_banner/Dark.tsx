import type { BlockComponent, StatBannerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Dark: BlockComponent<StatBannerContent> = ({ items, heading }) => (
  <Section className="bg-foreground">
    <Container>
      {heading && (
        <h2 className="mb-10 text-center font-heading text-2xl font-semibold tracking-tight text-background">
          {heading}
        </h2>
      )}
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col items-center text-center">
            <span className="font-heading text-4xl font-bold text-background">{item.number}</span>
            <span className="mt-2 text-sm text-background/60">{item.label}</span>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Dark;
