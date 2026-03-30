import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";

export type MetricTileProps = {
  label: string;
  value: string;
  helperText?: string;
  trend?: ReactNode;
};

export function MetricTile({ label, value, helperText, trend }: MetricTileProps) {
  return (
    <Surface padding="sm">
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
      </div>
      {helperText ? (
        <p className="mt-2 text-xs text-muted-foreground">{helperText}</p>
      ) : null}
      {trend ? <div className="mt-3 text-xs">{trend}</div> : null}
    </Surface>
  );
}
