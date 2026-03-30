import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { Button } from "@audere/ui";
import {
  FeeModelerAppSidebar,
  type FeeModelerNavGroup,
} from "@audere/ui/layout";
import { AppSwitcher } from "../platform/AppSwitcher";
import {
  Home,
  FileText,
  LayoutGrid,
  DollarSign,
  BarChart3,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";

const FEEMODELER_GROUPS: FeeModelerNavGroup[] = [
  {
    id: "new-clients",
    label: "NEW CLIENTS",
    items: [
      { path: "/feemodeler/core-process", label: "Core Process", icon: FileText },
      { path: "/feemodeler/strategies", label: "Advice", icon: FileText },
    ],
  },
  {
    id: "existing-clients",
    label: "EXISTING CLIENTS",
    items: [
      { path: "/feemodeler/deliverables", label: "Client Deliverables", icon: FileText },
      { path: "/feemodeler/one-to-many", label: "1-to-Many", icon: LayoutGrid },
      { path: "/feemodeler/advice", label: "Advice", icon: FileText },
      { path: "/feemodeler/packages", label: "Packages", icon: FileText },
    ],
  },
  {
    id: "pricing",
    label: "PRICING",
    items: [
      { path: "/feemodeler/costed-schedule", label: "Costed Fee Schedule", icon: DollarSign },
      { path: "/feemodeler/client-pricing", label: "Client Pricing", icon: DollarSign },
    ],
  },
  {
    id: "analysis",
    label: "ANALYSIS",
    items: [{ path: "/feemodeler/analysis", label: "Long Tail Analysis", icon: BarChart3 }],
  },
];

const HOME = { path: "/feemodeler", label: "Home", icon: Home };
const SETTINGS = { path: "/feemodeler/settings", label: "Settings", icon: Settings };

export function FeeModelerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  useEffect(() => {
    const active = FEEMODELER_GROUPS.find((g) => g.items.some((i) => i.path === location.pathname));
    setOpenGroupId(active?.id ?? null);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-[#F6F7F9] font-sans text-slate-900">
      <FeeModelerAppSidebar
        pathname={location.pathname}
        navigate={(to) => navigate(to)}
        Link={Link}
        branding={
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <DollarSign className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Fee Modeler</span>
          </div>
        }
        home={HOME}
        settings={SETTINGS}
        groups={FEEMODELER_GROUPS}
        backLink={{ to: "/hub", label: "Back to Dashboard" }}
        openGroupId={openGroupId}
        onOpenGroupChange={setOpenGroupId}
        belowSettings={
          <p className="mt-2 truncate px-1 text-xs text-slate-400">Brad Smith • Financially Able</p>
        }
      />

      <main className="flex min-h-screen flex-1 flex-col pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between gap-4 px-6">
            <div className="flex min-w-0 items-center gap-3">
              <AppSwitcher className="shrink-0" />
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-indigo-600 text-white">
                <DollarSign className="h-4 w-4" />
              </div>
              <span className="hidden text-sm font-semibold text-slate-900 sm:inline">Fee Modeler</span>
              <div className="ml-2 flex items-center gap-1.5">
                <button type="button" className="rounded border border-slate-200 p-1.5 hover:bg-slate-50">
                  <FileText className="h-4 w-4 text-slate-500" />
                </button>
                <button
                  type="button"
                  className="flex h-9 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 hover:bg-slate-50"
                >
                  March 2026 <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                <button type="button" className="rounded border border-slate-200 p-1.5 hover:bg-slate-50">
                  <FileText className="h-4 w-4 text-slate-500" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Draft</span>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-slate-700">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600">
                BS
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
