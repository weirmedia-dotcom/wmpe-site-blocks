import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

// F8: `--btn-radius`/`--btn-pad-x`/`--btn-pad-y`/`--btn-bg`/`--btn-fg` are
// studio-authored element-scoped vars (design-studio/state.ts tokens map),
// each with a `var(--x, <fallback>)` fallback that reproduces today's exact
// shadcn look byte-for-byte when unset — so an un-refined client's Button
// renders identically to before this change. Fallbacks match the classes
// they replace: rounded-md = calc(var(--radius) - 2px), default size padding
// = px-4 py-2 (1rem / 0.5rem), default variant colors = bg-primary/
// text-primary-foreground. sm/lg previously re-declared a redundant static
// "rounded-md" (identical to the base class) — dropped so the radius var
// applies once, unambiguously, to every size instead of racing two
// conflicting utilities for the same property.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap [border-radius:var(--btn-radius,calc(var(--radius)_-_2px))] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "[background:hsl(var(--btn-bg,var(--primary)))] [color:hsl(var(--btn-fg,var(--primary-foreground)))] shadow hover:opacity-90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 [padding-inline:var(--btn-pad-x,1rem)] [padding-block:var(--btn-pad-y,0.5rem)]",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
