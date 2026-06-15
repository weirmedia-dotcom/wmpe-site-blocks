import type { BlockComponent, ValuePropGridContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { cn } from "@/lib/cn";
import { colsClass } from "./Icon";

const Numbered: BlockComponent<ValuePropGridContent> = ({ items, props }) => (
  <Section className="bg-background">
    <Container>
      <ol className={cn("grid grid-cols-1 gap-x-10 gap-y-12", colsClass(props?.columns))}>
        {items.map((item, i) => (
          <li key={i} className="group relative flex flex-col">
            <div className="flex items-baseline gap-4">
              <span
                className="font-heading text-5xl font-semibold leading-none text-primary/20 tabular-nums transition-colors duration-300 group-hover:text-primary"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 translate-y-[-0.35rem] bg-border" aria-hidden />
            </div>
            <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </Section>
);

export default Numbered;
