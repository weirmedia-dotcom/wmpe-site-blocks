import type { BlockComponent, StepListContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<StepListContent> = ({ steps }) => (
  <Section>
    <Container>
      <ol className="space-y-8">
        {(steps ?? []).map((step, i) => (
          <li key={i}>
            <h3 className="text-lg text-foreground">{step.title}</h3>
            <p className="mt-2 text-base text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
);

export default Default;
