import { Link, Outlet, useLocation } from "react-router";
import { Button } from "@audere/ui";
import { AppSwitcher } from "../platform/AppSwitcher";
import {
  Home,
  ClipboardList,
  PenLine,
  Send,
  BarChart3,
  Settings,
  HelpCircle,
  Shield,
  Bell,
  LogOut,
  Menu,
  ArrowLeft,
} from "lucide-react";
import { cn } from "../../utils/cn";

const SIDEBAR_ITEMS = [
  { path: "/marketos", label: "Home", icon: Home },
  { path: "/marketos/plan", label: "Plan", icon: ClipboardList },
  { path: "/marketos/create", label: "Create", icon: PenLine },
  { path: "/marketos/publish", label: "Publish", icon: Send },
  { path: "/marketos/review", label: "Review", icon: BarChart3 },
  { path: "/marketos/settings", label: "Settings", icon: Settings },
  { path: "/marketos/help", label: "Help", icon: HelpCircle },
  { path: "/marketos/admin", label: "Admin", icon: Shield },
] as const;

export function MarketosLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      {/* Marketos sidebar - Deep Navy */}
      <aside className="w-64 flex-shrink-0 flex flex-col fixed inset-y-0 z-10 bg-slate-800 text-white">
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-700 flex items-center justify-center text-white text-sm font-bold">
              M
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight block">Marketos</span>
              <span className="text-[10px] text-slate-400">Audere Marketing</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto text-slate-400 hover:text-white hover:bg-slate-700">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          <Link
            to="/hub"
            className="mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Dashboard
          </Link>
          {SIDEBAR_ITEMS.map((item, idx) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === "/marketos" && location.pathname === "/marketos");
            const Icon = item.icon;
            return (
              <Link
                key={`${item.path}-${item.label}-${idx}`}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-teal-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-semibold shrink-0">
              S
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Stewart Bell</p>
              <p className="text-xs text-slate-400 truncate">stewart@audere.com.au</p>
              <p className="text-[10px] text-slate-500">Audere Global Admin</p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white w-full"
          >
            Sign out <LogOut className="h-3 w-3" />
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <AppSwitcher className="shrink-0" />
              <div className="h-7 w-7 rounded bg-slate-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                M
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-slate-500">Admin</span>
              <span className="text-xs text-slate-500">AM</span>
              <span className="text-xs text-slate-500">Member</span>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xs font-medium text-slate-600">
                SB
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
