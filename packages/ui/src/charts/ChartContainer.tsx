import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";
import { cn } from "../lib/utils";

export type ChartContainerProps = {
  title?: string;
  className?: string;
  height?: number;
  children: ReactNode;
};

/** Wrapper for shared chart cards: consistent surface, height, optional title. */
export function ChartContainer({
  title,
  className = "",
  height = 280,
  children,
}: ChartContainerProps) {
  return (
    <Surface className={cn("flex flex-col overflow-hidden", className)}>
      {title ? (
        <div className="px-6 pb-2 pt-4">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
      ) : null}
      <div className="flex-1 px-4 pb-4" style={{ minHeight: height }}>
        {children}
      </div>
    </Surface>
  );
}
