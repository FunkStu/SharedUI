import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";
import { cn } from "../lib/utils";

export type InsightCardProps = {
  title: string;
  tone?: "neutral" | "warning" | "success";
  icon?: ReactNode;
  children: ReactNode;
};

/** Semantic accents — not mapped to theme tokens; use for clear status differentiation. */
const toneClasses: Record<NonNullable<InsightCardProps["tone"]>, string> = {
  neutral: "",
  warning: "border-l-4 border-l-amber-500",
  success: "border-l-4 border-l-emerald-500",
};

export function InsightCard({
  title,
  tone = "neutral",
  icon,
  children,
}: InsightCardProps) {
  return (
    <Surface
      className={cn(tone !== "neutral" && toneClasses[tone])}
      padding="md"
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0">
          <h4 className="mb-1 text-sm font-semibold text-foreground">{title}</h4>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </Surface>
  );
}
