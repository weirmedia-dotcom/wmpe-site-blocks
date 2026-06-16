import type { BlockComponent, ProductCardGridContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Check } from "lucide-react";

const Default: BlockComponent<ProductCardGridContent> = ({ items }) => (
  <Section className="bg-background">
    <Container>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={i} className="flex">
            <Card className="flex w-full flex-col overflow-hidden">
              <div className="aspect-video bg-muted">
                {item.image && (
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-card-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <a href={item.cta_href ?? "#"}>{item.cta_label}</a>
                  </Button>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
