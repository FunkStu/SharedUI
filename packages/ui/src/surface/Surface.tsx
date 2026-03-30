import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const surfaceVariants = cva(
  "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
      },
    },
    defaultVariants: {
      padding: "none",
    },
  },
);

export type SurfaceProps = React.ComponentProps<"div"> &
  VariantProps<typeof surfaceVariants>;

/**
 * Default elevated panel for tables, metrics, charts, and grouped content.
 * Uses theme CSS variables (`--card`, `--border`); host apps must define :root tokens.
 */
export function Surface({ className, padding, ...props }: SurfaceProps) {
  return (
    <div
      data-slot="surface"
      className={cn(surfaceVariants({ padding }), className)}
      {...props}
    />
  );
}

export { surfaceVariants };
