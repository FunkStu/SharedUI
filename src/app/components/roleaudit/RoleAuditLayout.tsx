import { Link, Outlet, useLocation } from "react-router";
import { Button } from "@audere-apps/ui";
import { AppSwitcher } from "../platform/AppSwitcher";
import { ClipboardCheck, BarChart3, Workflow, Users, Shield, Bell, FileText, HelpCircle, LogOut, ArrowLeft } from "lucide-react";
import { cn } from "../../utils/cn";

const SIDEBAR_ITEMS = [
  { path: "/roleaudit", label: "Audit", icon: ClipboardCheck },
  { path: "/roleaudit/analyse", label: "Analyse", icon: BarChart3 },
  { path: "/roleaudit/adapt", label: "Adapt", icon: Workflow },
  { path: "/roleaudit/align", label: "Align", icon: Users },
  { path: "/roleaudit/admin", label: "Admin", icon: Shield },
] as const;

export function RoleAuditLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      {/* Role Audit sidebar - Deep Navy */}
      <aside className="w-64 flex-shrink-0 flex flex-col fixed inset-y-0 z-10 bg-slate-800 text-white">
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ClipboardCheck className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Role Audit</span>
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
              (item.path === "/roleaudit" && location.pathname === "/roleaudit");
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
          <p className="text-xs text-slate-400 truncate" title="stewart@audere.com.au">
            stewart@audere.com.au
          </p>
          <a href="#help" className="flex items-center gap-2 text-xs text-slate-400 hover:text-white">
            Help <HelpCircle className="h-3 w-3" />
          </a>
          <button type="button" className="flex items-center gap-2 text-xs text-slate-400 hover:text-white">
            Sign Out <LogOut className="h-3 w-3" />
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-6 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <AppSwitcher className="shrink-0" />
              <div className="h-7 w-7 rounded bg-blue-600 flex items-center justify-center text-white shrink-0">
                <ClipboardCheck className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-slate-900 hidden sm:inline">Role Audit</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700 h-9">
                <FileText className="h-4 w-4" /> Files
              </Button>
              <Button variant="outline" size="sm" className="border-slate-200 text-slate-700 h-9">
                Help
              </Button>
              <Button variant="outline" size="sm" className="border-slate-200 text-slate-700 h-9">
                Logout
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
