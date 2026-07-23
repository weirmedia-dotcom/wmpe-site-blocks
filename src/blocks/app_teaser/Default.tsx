import type { BlockComponent, AppTeaserContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { AppTeaserCard } from "./AppTeaserCard";

/**
 * Promotes an interactive tool with a screenshot of it bleeding out of the
 * copy card. The package default links to `cta_href`; a client repo that owns
 * the actual tool can override this block type and pass `onActivate` to
 * AppTeaserCard instead, opening the tool in a modal.
 */
const Default: BlockComponent<AppTeaserContent> = (content) => (
  <Section>
    <Container>
      <AppTeaserCard {...content} />
    </Container>
  </Section>
);

export default Default;
