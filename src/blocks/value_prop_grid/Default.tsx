import type { BlockComponent, ValuePropGridContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ValuePropGridContent> = ({ items, heading }) => (
  <Section>
    <Container>
      {heading && <h2 className="mb-8 text-2xl text-heading">{heading}</h2>}
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(items ?? []).map((item, i) => (
          <li key={i}>
            <h3 className="text-lg text-heading">{item.title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
