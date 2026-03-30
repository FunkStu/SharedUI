import { Link, Outlet, useLocation } from "react-router";
import { Button } from "@audere/ui";
import { AppSwitcher } from "../platform/AppSwitcher";
import {
  ClipboardList,
  Calendar,
  MessageCircle,
  Settings,
  Users,
  Brain,
  Bell,
  HelpCircle,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { cn } from "../../utils/cn";

const NAV: { path: string; label: string; icon: typeof ClipboardList }[] = [
  { path: "/coachai", label: "Plan", icon: ClipboardList },
  { path: "/coachai/today", label: "Today", icon: Calendar },
  { path: "/coachai/coach", label: "Coach", icon: MessageCircle },
  { path: "/coachai/settings", label: "Settings", icon: Settings },
  { path: "/coachai/team", label: "Team", icon: Users },
];

export function CoachAILayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      {/* CoachAI sidebar - Deep Navy shell with teal AI accent */}
      <aside className="w-64 flex-shrink-0 flex flex-col fixed inset-y-0 z-10 bg-slate-800 text-white">
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Brain className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-teal-400">coachai</span>
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
          {NAV.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === "/coachai" && location.pathname === "/coachai");
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-teal-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <p className="text-xs text-slate-400">Welcome, Stewart Bell</p>
          <p className="text-xs text-slate-500 mt-0.5">Audere</p>
        </div>
      </aside>

      <main className="flex-1 flex flex-col pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <AppSwitcher className="shrink-0" />
              <div className="h-7 w-7 rounded bg-teal-600 flex items-center justify-center text-white shrink-0">
                <Brain className="h-4 w-4" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">Welcome, Stewart Bell</p>
                <p className="text-xs text-slate-500">Audere</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600 gap-1.5">
                <HelpCircle className="h-4 w-4" /> Help
              </Button>
              <button
                type="button"
                className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
              >
                Coach Admin <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
              >
                Menu <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                3 KPIs awaiting data
              </span>
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
