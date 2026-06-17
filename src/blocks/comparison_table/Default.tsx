import type { BlockComponent, ComparisonTableContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ComparisonTableContent> = ({
  columns,
  rows,
  eyebrow,
  heading,
  intro,
}) => (
  <Section>
    <Container>
      {eyebrow && (
        <p className="text-sm text-muted-foreground">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="text-3xl text-foreground">{heading}</h2>
      )}
      {intro && (
        <p className="mt-2 text-base text-muted-foreground">{intro}</p>
      )}
      <table className="w-full text-base text-foreground">
        <thead>
          <tr>
            {(columns ?? []).map((col, i) => (
              <th key={i} scope="col" className="text-left text-foreground">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(rows ?? []).map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} className="text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  </Section>
);

export default Default;
