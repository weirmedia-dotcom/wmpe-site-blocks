import type { BlockComponent, ValuePropGridContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ValuePropGridContent> = ({ items }) => (
  <Section>
    <Container>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(items ?? []).map((item, i) => (
          <li key={i}>
            <h3 className="text-lg text-foreground">{item.title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
