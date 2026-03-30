import type { ReactNode } from "react";

import { Button } from "../primitives/button";
import { Badge } from "../primitives/badge";
import { Surface } from "../surface/Surface";
import { cn } from "../lib/utils";

/** One cross-app notification row (caller supplies app icon as ReactNode). */
export type CrossAppNotificationItem = {
  id: string;
  icon: ReactNode;
  appLabel: string;
  message: string;
  timeAgo: string;
  read?: boolean;
};

export type CrossAppNotificationsFeedV1Props = {
  /** Outer panel title (e.g. “Cross-app Notifications”). */
  panelTitle?: string;
  /** Inner list header (e.g. “Notifications”). */
  listHeader?: string;
  items: CrossAppNotificationItem[];
  onMarkAllRead?: () => void;
  onItemClick?: (id: string) => void;
  className?: string;
};

/**
 * **V1 — Single panel, divided list** (matches the cross-app mockup).
 * `Surface` container + inner header row + `divide-y` list; unread rows use bold body text.
 */
export function CrossAppNotificationsFeedV1({
  panelTitle = "Cross-app Notifications",
  listHeader = "Notifications",
  items,
  onMarkAllRead,
  onItemClick,
  className,
}: CrossAppNotificationsFeedV1Props) {
  return (
    <Surface padding="none" className={cn("overflow-hidden", className)}>
      {panelTitle ? (
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-base font-semibold tracking-tight text-foreground">{panelTitle}</h2>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
        <span className="text-sm font-semibold text-foreground">{listHeader}</span>
        {onMarkAllRead ? (
          <Button type="button" variant="link" size="sm" className="h-auto p-0 text-sm" onClick={onMarkAllRead}>
            Mark all as read
          </Button>
        ) : (
          <span className="text-sm text-muted-foreground"> </span>
        )}
      </div>

      <ul className="divide-y divide-border" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={cn(
                "flex w-full gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                item.read && "opacity-90",
              )}
              onClick={() => onItemClick?.(item.id)}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground">
                {item.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    "block text-sm leading-snug text-foreground",
                    !item.read ? "font-bold" : "font-normal text-muted-foreground",
                  )}
                >
                  <span className={!item.read ? "font-bold" : "font-semibold"}>{item.appLabel}:</span>{" "}
                  {item.message}
                </span>
                <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <span aria-hidden className="text-[11px]">
                    ◷
                  </span>
                  {item.timeAgo}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Surface>
  );
}

export type CrossAppNotificationsFeedV2Props = CrossAppNotificationsFeedV1Props;

/**
 * **V2 — Inset rows** on a muted canvas: same structure as V1 but each row sits in a soft inner
 * `Surface` strip (more separation, less ruler line).
 */
export function CrossAppNotificationsFeedV2({
  panelTitle = "Cross-app Notifications",
  listHeader = "Notifications",
  items,
  onMarkAllRead,
  onItemClick,
  className,
}: CrossAppNotificationsFeedV2Props) {
  return (
    <Surface padding="none" className={cn("overflow-hidden bg-muted/30", className)}>
      {panelTitle ? (
        <div className="border-b border-border bg-card px-5 py-4">
          <h2 className="text-base font-semibold tracking-tight text-foreground">{panelTitle}</h2>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-5 py-3">
        <span className="text-sm font-semibold text-foreground">{listHeader}</span>
        {onMarkAllRead ? (
          <Button type="button" variant="link" size="sm" className="h-auto p-0 text-sm" onClick={onMarkAllRead}>
            Mark all as read
          </Button>
        ) : null}
      </div>

      <div className="space-y-2 p-3">
        {items.map((item) => (
          <Surface
            key={item.id}
            padding="none"
            className="border-border/80 bg-card shadow-none transition-colors hover:border-primary/25"
          >
            <button
              type="button"
              className="flex w-full gap-3 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => onItemClick?.(item.id)}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
                {item.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    "block text-sm leading-snug",
                    !item.read ? "font-bold text-foreground" : "font-normal text-muted-foreground",
                  )}
                >
                  <span className={!item.read ? "font-bold" : "font-semibold text-foreground"}>{item.appLabel}:</span>{" "}
                  {item.message}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{item.timeAgo}</span>
              </span>
            </button>
          </Surface>
        ))}
      </div>
    </Surface>
  );
}

export type CrossAppNotificationsFeedV3Props = Omit<CrossAppNotificationsFeedV1Props, "listHeader"> & {
  listHeader?: string;
};

/**
 * **V3 — Dense single-line row**: `Badge` for app, truncated message, time on the right; best for many items.
 */
export function CrossAppNotificationsFeedV3({
  panelTitle = "Cross-app Notifications",
  listHeader = "Notifications",
  items,
  onMarkAllRead,
  onItemClick,
  className,
}: CrossAppNotificationsFeedV3Props) {
  return (
    <Surface padding="none" className={cn("overflow-hidden", className)}>
      {panelTitle ? (
        <div className="border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold tracking-tight text-foreground">{panelTitle}</h2>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{listHeader}</span>
        {onMarkAllRead ? (
          <Button type="button" variant="link" size="sm" className="h-auto p-0 text-xs" onClick={onMarkAllRead}>
            Mark all read
          </Button>
        ) : null}
      </div>

      <ul className="divide-y divide-border" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => onItemClick?.(item.id)}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-[10px]">
                {item.icon}
              </span>
              <Badge variant="secondary" className="shrink-0 text-[10px]">
                {item.appLabel}
              </Badge>
              <span
                className={cn(
                  "min-w-0 flex-1 truncate",
                  !item.read ? "font-semibold text-foreground" : "font-normal text-muted-foreground",
                )}
              >
                {item.message}
              </span>
              <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{item.timeAgo}</span>
            </button>
          </li>
        ))}
      </ul>
    </Surface>
  );
}
