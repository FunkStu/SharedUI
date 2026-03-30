import type { ReactNode } from "react";

export type HubRole = "admin" | "member";

export type HubUserContext = {
  role: HubRole;
  /**
   * App paths the user is entitled to (mirrors tile visibility rules in Hub).
   * Example: ["/hub", "/coachai", "/finsight"].
   */
  entitledAppPaths: string[];
};

// Role can be overridden via Vite env (VITE_HUB_ROLE=admin|member)
// to simulate different users without code changes.
const envRole = (import.meta as any).env?.VITE_HUB_ROLE as HubRole | undefined;
const envApps =
  ((import.meta as any).env?.VITE_HUB_APPS as string | undefined)?.split(",").map((a) => a.trim()) ??
  [];

const DEFAULT_HUB_USER: HubUserContext = {
  role: envRole === "member" ? "member" : "admin",
  // Non-destructive default: if VITE_HUB_APPS is unset, treat user as entitled to all apps.
  entitledAppPaths: envApps.length > 0 ? envApps : [],
};

export function getCurrentHubUser(): HubUserContext {
  return DEFAULT_HUB_USER;
}

export function isHubAdmin(user: HubUserContext): boolean {
  return user.role === "admin";
}

export type HubNavItem = {
  path: string;
  label: string;
};

export type HubSideNavItem = {
  label: string;
  path: string;
};

export type HubSideNavGroup = {
  section: string;
  items: HubSideNavItem[];
  adminOnly?: boolean;
};

export function filterHubNav(items: readonly HubNavItem[], user: HubUserContext): HubNavItem[] {
  if (isHubAdmin(user)) return items as HubNavItem[];

  const adminPaths = new Set<string>([
    "/hub/integrations",
    "/hub/notifications",
    "/hub/bugs",
    "/hub/roadmap",
  ]);

  return items.filter((item) => !adminPaths.has(item.path));
}

export function filterHubSideNav(
  groups: readonly HubSideNavGroup[],
  user: HubUserContext,
): HubSideNavGroup[] {
  if (isHubAdmin(user)) return groups as HubSideNavGroup[];

  return groups.filter((group) => !group.adminOnly);
}

export type PlatformApp = {
  name: string;
  path: string;
  iconBg?: string;
  icon?: ReactNode;
};

/**
 * Filter platform apps to those the user is entitled to.
 * If user.entitledAppPaths is empty, return all apps (non-destructive default).
 */
export function filterPlatformAppsForUser<T extends { path: string }>(
  apps: readonly T[],
  user: HubUserContext,
): T[] {
  if (!user.entitledAppPaths || user.entitledAppPaths.length === 0) {
    return apps as T[];
  }

  return apps.filter((app) =>
    user.entitledAppPaths.some((allowed) => app.path === allowed || app.path.startsWith(`${allowed}/`)),
  ) as T[];
}

