import { useLocation, useNavigate } from "react-router";
import { cn } from "../../utils/cn";

const ROUTES = [
  { path: "/foundations", label: "Foundations" },
  { path: "/core-ui", label: "Core UI" },
  { path: "/platform-navigation", label: "Platform & Navigation" },
  { path: "/dashboard-data", label: "Dashboard & Data" },
  { path: "/hub", label: "Hub" },
  { path: "/coachai", label: "CoachAI" },
  { path: "/finsight", label: "Finsight" },
  { path: "/marketos", label: "Marketos" },
  { path: "/home", label: "Home" },
  { path: "/roleaudit", label: "Role Audit" },
  { path: "/feemodeler", label: "Fee Modeler" },
  { path: "/ai-interactions", label: "AI Interactions" },
  { path: "/workflows", label: "Workflows" },
  { path: "/layouts", label: "Layouts" },
] as const;

export function DocsRouteSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <div>
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Audere UI
        </p>
        <p className="text-xs text-slate-500">
          Working routes: /foundations, /core-ui, /platform-navigation, /dashboard-data, /hub, /coachai, /finsight, /marketos, /home, /roleaudit, /feemodeler, /ai-interactions, /workflows, /layouts
        </p>
      </div>
      <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-1 py-1">
        {ROUTES.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <button
              key={route.path}
              type="button"
              onClick={() => navigate(route.path)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                isActive
                  ? "bg-slate-900 text-slate-50 shadow-sm"
                  : "text-slate-600 hover:bg-white hover:text-slate-900",
              )}
            >
              {route.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

