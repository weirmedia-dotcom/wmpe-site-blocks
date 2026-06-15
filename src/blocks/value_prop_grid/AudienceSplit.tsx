import type { BlockComponent, ValuePropGridContent, ValuePropItem } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Icon } from "./Icon";

function Panel({
  label,
  items,
  tone,
}: {
  label: string;
  items: ValuePropItem[];
  tone: "primary" | "accent";
}) {
  const isPrimary = tone === "primary";
  return (
    <div
      className={
        isPrimary
          ? "relative flex flex-col gap-6 bg-primary p-8 text-primary-foreground md:p-12"
          : "relative flex flex-col gap-6 bg-card p-8 text-card-foreground md:p-12"
      }
    >
      <p
        className={
          isPrimary
            ? "text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70"
            : "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        }
      >
        {label}
      </p>
      <ul className="flex flex-col gap-6">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span
              className={
                isPrimary
                  ? "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 text-primary-foreground"
                  : "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"
              }
            >
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-heading text-base font-semibold tracking-tight">{item.title}</h3>
              <p
                className={
                  isPrimary
                    ? "mt-1 text-sm leading-relaxed text-primary-foreground/80"
                    : "mt-1 text-sm leading-relaxed text-muted-foreground"
                }
              >
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AudienceSplit: BlockComponent<ValuePropGridContent> = ({ items }) => {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border shadow-sm md:grid-cols-2">
          <Panel label="For your home" items={left} tone="primary" />
          <Panel label="For your project" items={right} tone="accent" />
        </div>
      </Container>
    </Section>
  );
};

export default AudienceSplit;
