import type { ReactNode } from "react";

import { cn } from "../lib/utils";

export type SectionProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export function Section({
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {title || description ? (
        <div className="space-y-1">
          {title ? (
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
