import { Fragment, type ComponentType, type ReactNode } from "react";
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
  /** When true, render a separator above this group (e.g. before org-level nav). */
  dividerBefore?: boolean;
};

export type FeeModelerSidebarLinkProps = {
  to: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

export type FeeModelerAppSidebarProps = {
  pathname: string;
  navigate: (to: string) => void;
  Link: ComponentType<FeeModelerSidebarLinkProps>;
  /** Logo row, optional badge, etc. */
  branding: ReactNode;
  /** Primary rail link below back link; omit when all entry routes live in accordion groups. */
  home?: FeeModelerNavItem;
  /** Footer rail link (e.g. Settings / Admin); omit if not used. */
  settings?: FeeModelerNavItem;
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
  navigate: _navigate,
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
  const HomeIcon = home?.icon;
  const SettingsIcon = settings?.icon;

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

          {home && HomeIcon ? (
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
          ) : null}

          {visibleGroups.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <Fragment key={group.id}>
                {group.dividerBefore ? <div className={t.groupDivider} role="separator" /> : null}
                <div className="mt-1">
                  <button
                    type="button"
                    className={t.sectionTrigger}
                    onClick={() => onOpenGroupChange(isOpen ? null : group.id)}
                  >
                    <span>{group.label}</span>
                    <ChevronRight open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className={t.nestedList}>
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
              </Fragment>
            );
          })}
        </div>

        {settings || belowSettings ? (
          <div className={t.footerRegion}>
            {settings && SettingsIcon ? (
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
            ) : null}
            {belowSettings ?? null}
          </div>
        ) : null}
      </nav>
    </aside>
  );
}
