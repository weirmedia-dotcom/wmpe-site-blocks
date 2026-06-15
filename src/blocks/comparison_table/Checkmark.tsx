import type { BlockComponent, ComparisonTableContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/ui/table";
import { cn } from "@/lib/cn";
import { Check, X, Minus } from "lucide-react";

const YES = new Set(["yes", "true", "✓"]);
const NO = new Set(["no", "false", "✗"]);
const EMPTY = new Set(["", "-", "—", "–"]);

// Renders boolean-ish cells as icons; falls back to raw text otherwise.
function renderCell(value: string) {
  const v = value.trim().toLowerCase();
  if (YES.has(v)) {
    return (
      <span className="inline-flex" title="Yes">
        <Check className="h-5 w-5 text-primary" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (NO.has(v)) {
    return (
      <span className="inline-flex" title="No">
        <X className="h-5 w-5 text-muted-foreground" aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  }
  if (EMPTY.has(v)) {
    return (
      <span className="inline-flex" title="Not applicable">
        <Minus className="h-5 w-5 text-muted-foreground" aria-hidden />
        <span className="sr-only">Not applicable</span>
      </span>
    );
  }
  return value;
}

// feature-matrix style: yes/no/empty cells become Check / X / Minus icons.
const Checkmark: BlockComponent<ComparisonTableContent> = ({ columns, rows }) => (
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
                  className="border-b border-border/60 transition-colors hover:bg-muted/40"
                >
                  {row.map((cell, c) => (
                    <TableCell
                      key={c}
                      className={cn(
                        "px-5 py-4 align-middle",
                        c === 0 ? "font-medium text-foreground" : "text-center",
                      )}
                    >
                      {c === 0 ? cell : renderCell(cell)}
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

export default Checkmark;
