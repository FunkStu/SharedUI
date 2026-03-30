import type { ReactNode } from "react";

import { Surface } from "../surface/Surface";

export type TaskStatus = "todo" | "in-progress" | "done";

export type TaskCardProps = {
  status: TaskStatus;
  title: string;
  description?: string;
  footer?: ReactNode;
  actions?: ReactNode;
};

export function TaskCard({
  status,
  title,
  description,
  footer,
  actions,
}: TaskCardProps) {
  const statusLabel =
    status === "done" ? "Completed" : status === "in-progress" ? "In Progress" : "To Do";

  return (
    <Surface
      padding="none"
      className="transition-colors hover:border-primary/30"
    >
      <div className="px-5 pb-5 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {statusLabel}
          </span>
          {actions}
        </div>
        <h3 className="mb-1 text-sm font-semibold leading-snug text-foreground">
          {title}
        </h3>
        {description ? (
          <p className="mb-4 line-clamp-2 text-xs text-muted-foreground">{description}</p>
        ) : null}
        {footer ? (
          <div className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
            {footer}
          </div>
        ) : null}
      </div>
    </Surface>
  );
}
