import type { ReactNode } from "react";

import { cn } from "../lib/utils";

export type ToolbarProps = {
  children: ReactNode;
  className?: string;
};

/** Primary row for filters, bulk actions, or view controls above a table or list. */
export function Toolbar({ children, className }: ToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
}
