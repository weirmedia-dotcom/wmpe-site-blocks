import type { BlockComponent, RiskReversalContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";
import { Check } from "lucide-react";

/**
 * BadgeRow variant — the reassurance prose followed by a row of
 * guarantee pills. Content has no badge field, so a sensible default
 * set of guarantees is rendered as secondary-toned pills.
 */
const BADGES = ["Free measure", "Lifetime warranty", "Local install"];

const BadgeRow: BlockComponent<RiskReversalContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      <Markdown className="[&>div>*:last-child]:mb-0">{markdown}</Markdown>
      <ul className="mt-6 flex flex-wrap gap-3">
        {BADGES.map((label) => (
          <li
            key={label}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-1 ring-border"
          >
            <Check className="h-4 w-4 text-primary" aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default BadgeRow;
