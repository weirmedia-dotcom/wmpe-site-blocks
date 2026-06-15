import type { BlockComponent, ComparisonTableContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";

// each data row → a Card. Column headers become inline labels per attribute.
// Mobile-first: cards stack on small screens, grid up on wider ones.
const CardGrid: BlockComponent<ComparisonTableContent> = ({ columns, rows }) => {
  const [rowLabel, ...attrLabels] = columns;
  return (
    <Section className="bg-background">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row, r) => {
            const [title, ...cells] = row;
            return (
              <li key={r} className="h-full">
                <Card className="group relative h-full overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="border-b border-border bg-muted/40 px-6 py-5">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {rowLabel}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-semibold tracking-tight text-card-foreground">
                      {title}
                    </h3>
                  </div>
                  <dl className="divide-y divide-border/60">
                    {cells.map((cell, c) => (
                      <div
                        key={c}
                        className="flex items-baseline justify-between gap-4 px-6 py-3.5"
                      >
                        <dt className="text-sm font-medium text-muted-foreground">
                          {attrLabels[c]}
                        </dt>
                        <dd className="text-right text-sm font-medium text-card-foreground">
                          {cell}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default CardGrid;
