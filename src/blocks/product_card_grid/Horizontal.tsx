import type { BlockComponent, ProductCardGridContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { Check } from "lucide-react";

const Horizontal: BlockComponent<ProductCardGridContent> = ({ items }) => (
  <Section className="bg-muted/40">
    <Container>
      <ul className="flex flex-col gap-6">
        {items.map((item, i) => (
          <li key={i}>
            <Card className="flex flex-col overflow-hidden md:flex-row">
              <div className="aspect-video shrink-0 bg-muted md:aspect-auto md:w-64">
                {item.image && (
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-card-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.tagline}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline">
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

export default Horizontal;
