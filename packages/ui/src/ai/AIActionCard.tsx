import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";

export type AIActionCardProps = {
  title: string;
  description: string;
  badge?: ReactNode;
  children?: ReactNode;
};

export function AIActionCard({
  title,
  description,
  badge,
  children,
}: AIActionCardProps) {
  return (
    <Surface padding="md" className="overflow-hidden border-primary/20">
      {badge ? (
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
          {badge}
        </div>
      ) : null}
      <h3 className="mb-2 text-xl font-medium text-foreground">{title}</h3>
      <p className="mb-6 max-w-3xl text-muted-foreground">{description}</p>
      {children ? <div className="space-y-4">{children}</div> : null}
    </Surface>
  );
}
