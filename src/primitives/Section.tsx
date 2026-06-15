import { cn } from "../lib/cn";
export function Section({ className, children, ...rest }: React.ComponentProps<"section">) {
  return <section className={cn("w-full py-16 md:py-24", className)} {...rest}>{children}</section>;
}
