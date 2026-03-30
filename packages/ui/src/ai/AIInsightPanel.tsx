import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";

export type AIInsightPanelProps = {
  title: string;
  children: ReactNode;
  headerAccessory?: ReactNode;
};

export function AIInsightPanel({
  title,
  children,
  headerAccessory,
}: AIInsightPanelProps) {
  return (
    <Surface
      padding="md"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {headerAccessory}
      </div>
      <div className="leading-relaxed text-foreground">{children}</div>
    </Surface>
  );
}
