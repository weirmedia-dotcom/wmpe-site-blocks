import type { BlockComponent, ValuePropGridContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { cn } from "@/lib/cn";
import { Icon, colsClass } from "./Icon";

const Bordered: BlockComponent<ValuePropGridContent> = ({ items, props }) => (
  <Section className="bg-background">
    <Container>
      {/* Hairline grid: outer border + 1px gap filled by bg-border creates clean dividers */}
      <ul
        className={cn(
          "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border",
          colsClass(props?.columns),
        )}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="group relative flex flex-col bg-background p-8 transition-colors duration-300 hover:bg-muted"
          >
            <Icon
              name={item.icon}
              className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
            />
            <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Bordered;
