import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Button } from "@audere/ui";
import { AppSwitcher } from "../platform/AppSwitcher";
import { Bell, ArrowLeft } from "lucide-react";
import { cn } from "../../utils/cn";
import { PLATFORM_APPS } from "../../config/apps";
import {
  filterPlatformAppsForUser,
  filterHubNav,
  filterHubSideNav,
  getCurrentHubUser,
  HubNavItem,
  HubSideNavGroup,
  isHubAdmin,
} from "../../access/hubAccess";

const HUB_NAV: readonly HubNavItem[] = [
  { path: "/hub", label: "Access" },
  { path: "/hub/integrations", label: "Maintain" },
  { path: "/hub/notifications", label: "Notifications" },
  { path: "/hub/bugs", label: "Bug Reports" },
  { path: "/hub/roadmap", label: "Roadmap" },
] as const;

const HUB_SIDE_NAV: readonly HubSideNavGroup[] = [
  {
    section: "Growth",
    items: [
      { label: "Pipeline", path: "/finsight/active" },
      { label: "Marketing", path: "/marketos" },
    ],
  },
  {
    section: "Capacity",
    items: [{ label: "Audit", path: "/roleaudit" }],
  },
  {
    section: "Profit",
    items: [
      { label: "Design", path: "/feemodeler/core-process" },
      { label: "Price", path: "/feemodeler/client-pricing" },
    ],
  },
  {
    section: "Execution",
    items: [
      { label: "Today", path: "/coachai/today" },
      { label: "Coach", path: "/coachai/coach" },
      { label: "Cadence", path: "/home" },
    ],
  },
  {
    section: "Performance",
    items: [
      { label: "Plan", path: "/coachai" },
      { label: "Projections", path: "/finsight" },
      { label: "Progress", path: "/home" },
    ],
  },
  {
    section: "Settings",
    items: [
      { label: "Org Profile", path: "/hub" },
      { label: "Users", path: "/hub" },
      { label: "Custom Settings", path: "/hub" },
    ],
  },
  {
    section: "Admin",
    adminOnly: true,
    items: [
      { label: "Org Profile", path: "/hub" },
      { label: "Users", path: "/hub" },
      { label: "Products", path: "/hub" },
      { label: "Maintain", path: "/hub/integrations" },
      { label: "Notifications", path: "/hub/notifications" },
      { label: "Tracking", path: "/hub" },
      { label: "Bug Reports", path: "/hub/bugs" },
      { label: "Roadmap", path: "/hub/roadmap" },
    ],
  },
] as const;

export function HubLayout() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const currentUser = getCurrentHubUser();
  const isAdmin = isHubAdmin(currentUser);
  const visibleTopNav = filterHubNav(HUB_NAV, currentUser);
  const visibleSideNav = filterHubSideNav(HUB_SIDE_NAV, currentUser);
  const visibleApps = filterPlatformAppsForUser(PLATFORM_APPS, currentUser);

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      {/* Platform sidebar - Deep Navy */}
      <aside className="w-64 flex-shrink-0 flex flex-col fixed inset-y-0 z-10 bg-slate-800 text-white">
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-700 flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
            <span className="text-lg font-semibold tracking-tight">Audere Hub</span>
          </div>
        </div>
        <div className="p-3 flex-1 overflow-y-auto flex flex-col">
          <Link
            to="/hub"
            className="mb-3 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Dashboard
          </Link>
          <>
            <p className="px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Platform
            </p>
            <nav className="space-y-0.5">
              {visibleApps.map((app) => {
                const Icon = app.icon;
                const className = cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname.startsWith(app.path)
                    ? "bg-teal-600 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white",
                );
                return app.path.startsWith("#") ? (
                  <a key={app.name} href={app.path} className={className}>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded text-white",
                        app.iconBg,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {app.name}
                  </a>
                ) : (
                  <Link key={app.name} to={app.path} className={className}>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded text-white",
                        app.iconBg,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {app.name}
                  </Link>
                );
              })}
            </nav>
          </>
        </div>
        <div className="p-4 border-t border-slate-700 mt-auto">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-semibold shrink-0">
              S
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Stewart Bell</p>
              <p className="text-xs text-slate-400 truncate">stewart@audere.com.au</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col">
            <div className="flex h-14 items-center justify-between px-6 gap-4">
              <div className="flex items-center gap-3">
                <AppSwitcher className="shrink-0" />
                {isAdmin && (
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600">
                    Admin
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-semibold">
                  SB
                </div>
              </div>
            </div>
            <nav className="flex items-center gap-1 border-t border-slate-100 bg-slate-50/80 px-6">
              {visibleTopNav.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path === "/hub" && (location.pathname === "/hub" || location.pathname === "/hub/"));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "mt-1 mb-1 rounded-full px-3 py-1 text-xs font-medium transition-colors",
                      isActive
                        ? "bg-slate-900 text-slate-50 shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-slate-900",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
