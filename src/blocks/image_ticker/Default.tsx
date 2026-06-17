import type { BlockComponent, ImageTickerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ImageTickerContent> = ({ items, eyebrow }) => (
  <Section>
    <Container>
      {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
      <ul className="mt-6 flex gap-6 overflow-x-auto">
        {items.map((item, i) => (
          <li key={i} className="flex w-72 shrink-0 flex-col gap-3">
            <img src={item.src} alt={item.alt} className="w-full h-auto bg-muted" />
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-4 w-4"
                style={{ backgroundColor: item.hex }}
                aria-hidden
              />
              <span className="text-base text-foreground">{item.colour}</span>
              {item.room && (
                <span className="text-sm text-muted-foreground">{item.room}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
