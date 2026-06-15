import type { BlockComponent, ComparisonTableContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../ui/table";
import { cn } from "../../lib/cn";

// striped table — alternating row bg, header on bg-muted, framed + rounded for lift
const Default: BlockComponent<ComparisonTableContent> = ({ columns, rows }) => (
  <Section className="bg-background">
    <Container>
      <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
        <div className="overflow-x-auto">
          <Table className="text-sm">
            <TableHeader>
              <TableRow className="border-b border-border hover:bg-transparent">
                {columns.map((col, i) => (
                  <TableHead
                    key={i}
                    scope="col"
                    className={cn(
                      "h-auto whitespace-nowrap bg-muted px-5 py-4 font-heading text-sm font-semibold tracking-tight text-foreground",
                      i === 0 ? "text-left" : "text-center",
                    )}
                  >
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, r) => (
                <TableRow
                  key={r}
                  className={cn(
                    "border-b border-border/60 transition-colors",
                    r % 2 === 1 && "bg-muted/50",
                  )}
                >
                  {row.map((cell, c) => (
                    <TableCell
                      key={c}
                      className={cn(
                        "px-5 py-4 align-middle",
                        c === 0
                          ? "font-medium text-foreground"
                          : "text-center text-muted-foreground",
                      )}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
