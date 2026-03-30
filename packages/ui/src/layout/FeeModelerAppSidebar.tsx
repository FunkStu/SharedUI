import type { ComponentType, ReactNode } from "react";
import { cn } from "../lib/utils";
import { feeModelerSidebarTokens as t } from "./feeModelerSidebarTokens";

export type FeeModelerNavItem = {
  path: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type FeeModelerNavGroup = {
  id: string;
  label: string;
  items: FeeModelerNavItem[];
};

export type FeeModelerSidebarLinkProps = {
  to: string;
  className?: string;
  children?: ReactNode;
};

export type FeeModelerAppSidebarProps = {
  pathname: string;
  navigate: (to: string) => void;
  Link: ComponentType<FeeModelerSidebarLinkProps>;
  /** Logo row, optional badge, etc. */
  branding: ReactNode;
  home: FeeModelerNavItem;
  settings: FeeModelerNavItem;
  groups: FeeModelerNavGroup[];
  isGroupVisible?: (group: FeeModelerNavGroup) => boolean;
  backLink?: { to: string; label: string };
  openGroupId: string | null;
  onOpenGroupChange: (id: string | null) => void;
  /** Optional block below the Settings link (e.g. user / org line) */
  belowSettings?: ReactNode;
};

function ChevronRight({ open }: { open: boolean }) {
  return (
    <svg
      className={cn(t.sectionChevron, open && "rotate-90")}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Fee Modeler application sidebar: accordion sections, primary Home, Settings footer.
 * Routing-agnostic: pass your router `Link` and `navigate`.
 */
export function FeeModelerAppSidebar({
  pathname,
  navigate,
  Link,
  branding,
  home,
  settings,
  groups,
  isGroupVisible,
  backLink,
  openGroupId,
  onOpenGroupChange,
  belowSettings,
}: FeeModelerAppSidebarProps) {
  const visibleGroups = isGroupVisible ? groups.filter(isGroupVisible) : groups;
  const HomeIcon = home.icon;
  const SettingsIcon = settings.icon;

  return (
    <aside className={t.shell}>
      <div className={t.brandRegion}>{branding}</div>

      <nav className={t.navRoot}>
        <div className={t.navScroll}>
          {backLink ? (
            <Link to={backLink.to} className={t.backLink}>
              <span className="inline-flex items-center gap-2">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                {backLink.label}
              </span>
            </Link>
          ) : null}

          <Link
            to={home.path}
            className={cn(
              t.primaryRailLink,
              pathname === home.path ? t.primaryRailLinkActive : t.primaryRailLinkInactive,
            )}
          >
            <HomeIcon className={t.primaryIcon} />
            {home.label}
          </Link>

          {visibleGroups.map((group) => {
            const isOpen = openGroupId === group.id;
            const only = group.items.length === 1 ? group.items[0] : null;

            // Single route per section (e.g. SETUP): use a real Link so navigation always works.
            // Accordion + navigate(first) was easy to miss under overlapping main content (low z-index).
            if (only) {
              const isActive = pathname === only.path;
              const OnlyIcon = only.icon;
              return (
                <div key={group.id} className="mt-1">
                  <Link
                    to={only.path}
                    className={cn(
                      t.sectionTrigger,
                      "no-underline",
                      isActive ? "bg-teal-600 text-white hover:bg-teal-600" : "",
                    )}
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-2">
                      <OnlyIcon className={t.nestedIcon} />
                      <span>{group.label}</span>
                    </span>
                  </Link>
                </div>
              );
            }

            return (
              <div key={group.id} className="mt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (isOpen) {
                      onOpenGroupChange(null);
                      return;
                    }
                    const first = group.items[0];
                    if (first) {
                      if (pathname !== first.path) {
                        navigate(first.path);
                      }
                      onOpenGroupChange(group.id);
                    }
                  }}
                  className={t.sectionTrigger}
                >
                  <span>{group.label}</span>
                  <ChevronRight open={isOpen} />
                </button>

                {isOpen && (
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const isActive = pathname === item.path;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={cn(
                            t.nestedLink,
                            isActive ? t.nestedLinkActive : t.nestedLinkInactive,
                          )}
                        >
                          <Icon className={t.nestedIcon} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={t.footerRegion}>
          <Link
            to={settings.path}
            className={cn(
              t.primaryRailLink,
              pathname === settings.path ? t.primaryRailLinkActive : t.primaryRailLinkInactive,
            )}
          >
            <SettingsIcon className={t.primaryIcon} />
            {settings.label}
          </Link>
          {belowSettings ?? null}
        </div>
      </nav>
    </aside>
  );
}
