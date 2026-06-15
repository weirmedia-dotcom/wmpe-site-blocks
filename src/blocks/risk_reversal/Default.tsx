import type { BlockComponent, RiskReversalContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Markdown } from "@/lib/Markdown";
import { ShieldCheck } from "lucide-react";

/**
 * Default variant — a reassurance panel: a prominent shield icon beside
 * the guarantee prose, set on a soft muted surface.
 */
const Default: BlockComponent<RiskReversalContent> = ({ markdown }) => (
  <Section className="bg-background">
    <Container className="max-w-4xl">
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-muted p-8 sm:flex-row sm:items-start sm:gap-8 sm:p-10">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground ring-1 ring-border">
          <ShieldCheck className="h-7 w-7" aria-hidden />
        </div>
        <div className="min-w-0 [&>div>*:first-child]:mt-0">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
