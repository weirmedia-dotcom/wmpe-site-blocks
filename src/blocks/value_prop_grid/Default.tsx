import type { BlockComponent, ValuePropGridContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Card } from "@/ui/card";
import { cn } from "@/lib/cn";
import { Icon, colsClass } from "./Icon";

const Default: BlockComponent<ValuePropGridContent> = ({ items, props }) => (
  <Section className="bg-background">
    <Container>
      <ul className={cn("grid grid-cols-1 gap-6", colsClass(props?.columns))}>
        {items.map((item, i) => (
          <li key={i} className="h-full">
            <Card className="group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md focus-within:-translate-y-1">
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground ring-1 ring-border transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold tracking-tight text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
