import { Link, Outlet, useLocation } from "react-router";
import { Button } from "@audere-apps/ui";
import { AppSwitcher } from "../platform/AppSwitcher";
import { PLATFORM_APPS } from "../../config/apps";
import {
  Bell,
  ChevronDown,
  LayoutGrid,
  Mail,
  CheckSquare,
  Library,
  Calendar,
  Settings,
} from "lucide-react";
import { cn } from "../../utils/cn";

const APP_NAV_ITEMS = [
  { path: "/home", label: "Dashboard", icon: LayoutGrid },
  { path: "/home/fathom", label: "Fathom Queue", icon: Mail },
  { path: "/home/tasks", label: "Task Tracker", icon: CheckSquare },
  { path: "/home/content", label: "Content Registry", icon: Library },
  { path: "/home/program", label: "Program Settings", icon: Calendar },
  { path: "/home/settings", label: "Settings", icon: Settings },
] as const;

export function PracticeEvolutionLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      {/* Platform-style dark sidebar - Deep Navy */}
      <aside className="w-64 flex-shrink-0 flex flex-col fixed inset-y-0 z-10 bg-slate-800 text-white">
        <div className="p-4 border-b border-slate-700">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Platform</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {PLATFORM_APPS.map((app) => {
            const Icon = app.icon;
            const isHome = app.path === "/home";
            const isActive = isHome && (location.pathname === "/home" || location.pathname.startsWith("/home/"));
            const className = cn(
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
              isActive ? "bg-teal-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
            );
            return app.path.startsWith("#") ? (
              <a key={app.name} href={app.path} className={className}>
                <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded text-white", app.iconBg)}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {app.name}
              </a>
            ) : (
              <Link key={app.name} to={app.path} className={className}>
                <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded text-white", app.iconBg)}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {app.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Practice Evolution</p>
          {APP_NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path || (item.path === "/home" && location.pathname === "/home");
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="p-4 border-t border-slate-700 space-y-2">
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
          <div className="flex h-14 items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-4">
              <AppSwitcher className="shrink-0" />
              <Link to="/home" className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900">PRACTICE</span>
                <span className="text-xs font-medium text-slate-500 -mt-0.5">evolution</span>
              </Link>
              <button
                type="button"
                className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Advance FP <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                <Bell className="h-5 w-5" />
              </Button>
              <button type="button" className="flex items-center gap-1 text-sm text-slate-600">
                Admin <ChevronDown className="h-4 w-4" />
              </button>
              <span className="text-xs text-slate-500">Admin</span>
              <span className="text-xs text-slate-500">AM</span>
              <span className="text-xs text-slate-500">& Member</span>
              <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-semibold">
                SB
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
