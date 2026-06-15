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

// first data column (columns[1]) = the "recommended" option, visually lifted:
// tinted bg-primary/5, primary header band + "Recommended" pill, bolder cells.
const HighlightFirst: BlockComponent<ComparisonTableContent> = ({ columns, rows }) => {
  const isHighlight = (colIndex: number) => colIndex === 1;
  return (
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
                        "h-auto whitespace-nowrap px-5 py-4 font-heading text-sm font-semibold tracking-tight",
                        i === 0 ? "text-left" : "text-center",
                        isHighlight(i)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground",
                      )}
                    >
                      <span className="inline-flex flex-col items-center gap-1.5">
                        {col}
                        {isHighlight(i) && (
                          <span className="rounded-full bg-primary-foreground/20 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em]">
                            Recommended
                          </span>
                        )}
                      </span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, r) => (
                  <TableRow
                    key={r}
                    className="border-b border-border/60 transition-colors hover:bg-transparent"
                  >
                    {row.map((cell, c) => (
                      <TableCell
                        key={c}
                        className={cn(
                          "px-5 py-4 align-middle",
                          c === 0 && "font-medium text-foreground",
                          c !== 0 && !isHighlight(c) && "text-center text-muted-foreground",
                          isHighlight(c) &&
                            "bg-primary/5 text-center font-semibold text-foreground",
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
};

export default HighlightFirst;
