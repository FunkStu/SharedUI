import { Link, useLocation } from "react-router";
import { Palette, Component, LayoutTemplate, Sparkles, LineChart, CheckSquare, Navigation2 } from "lucide-react";
import { cn } from "../../utils/cn";

const NAV_ITEMS = [
  { path: "/foundations", label: "Foundations", icon: Palette, description: "Color, typography, and tokens" },
  { path: "/core-ui", label: "Core UI", icon: Component, description: "Buttons, inputs, badges, tabs" },
  { path: "/platform-navigation", label: "Platform & Navigation", icon: Navigation2, description: "Shell, workspaces, app switcher" },
  { path: "/dashboard-data", label: "Dashboard & Data", icon: LineChart, description: "Shared metrics, tables, insights" },
  { path: "/hub", label: "Audere Hub", icon: LineChart, description: "Core dashboard, app switcher, KPIs" },
  { path: "/coachai", label: "CoachAI", icon: LineChart, description: "Plan, Today, Coach, Settings, Team" },
  { path: "/finsight", label: "Finsight App", icon: LineChart, description: "Unified analytics experience" },
  { path: "/marketos", label: "Marketos App", icon: LineChart, description: "Marketing & content production" },
  { path: "/home", label: "Practice Evolution (home)", icon: LineChart, description: "Session summaries, tasks, content" },
  { path: "/roleaudit", label: "Role Audit", icon: LineChart, description: "Audit, analyse, adapt, align" },
  { path: "/feemodeler", label: "Fee Modeler", icon: LineChart, description: "Stages, strategies, pricing" },
  { path: "/ai-interactions", label: "AI Interactions", icon: Sparkles, description: "AI cards, panels, chat" },
  { path: "/workflows", label: "Workflows", icon: CheckSquare, description: "Tasks, checklists, progress" },
  { path: "/layouts", label: "Layouts", icon: LayoutTemplate, description: "Page layouts and grids" },
] as const;

export function DocsSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white shadow-sm flex flex-col fixed inset-y-0 z-10">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Audere UI
          </span>
        </div>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Design system & component library
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-start gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-slate-900 text-slate-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              )}
            >
              <Icon
                className={cn(
                  "mt-0.5 h-4 w-4",
                  isActive ? "text-slate-50" : "text-slate-400",
                )}
              />
              <div className="flex flex-col">
                <span className={cn("font-medium", isActive && "text-slate-50")}>
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-500">
                  {item.description}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

