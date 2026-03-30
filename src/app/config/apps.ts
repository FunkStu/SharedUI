import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Brain, CheckSquare, TrendingUp, MessageSquare, Home } from "lucide-react";

export type AppItem = {
  name: string;
  path: string;
  icon: LucideIcon;
  iconBg?: string;
};

export const PLATFORM_APPS: AppItem[] = [
  { name: "Audere Hub", path: "/hub", icon: LayoutGrid, iconBg: "bg-slate-700" },
  { name: "CoachAI", path: "/coachai", icon: Brain, iconBg: "bg-teal-600" },
  { name: "RoleAudit", path: "/roleaudit", icon: CheckSquare, iconBg: "bg-blue-600" },
  { name: "FeeModeler", path: "/feemodeler", icon: TrendingUp, iconBg: "bg-indigo-600" },
  { name: "Marketos", path: "/marketos", icon: MessageSquare, iconBg: "bg-violet-600" },
  { name: "Finsight", path: "/finsight", icon: LayoutGrid, iconBg: "bg-emerald-600" },
  { name: "Practice Evolution", path: "/home", icon: Home, iconBg: "bg-slate-600" },
];

export function getCurrentApp(pathname: string): AppItem {
  if (pathname.startsWith("/hub")) return PLATFORM_APPS[0];
  if (pathname.startsWith("/marketos")) return PLATFORM_APPS[4];
  if (pathname.startsWith("/finsight")) return PLATFORM_APPS[5];
  if (pathname.startsWith("/home")) return PLATFORM_APPS[6];
  if (pathname.startsWith("/roleaudit")) return PLATFORM_APPS[2];
  if (pathname.startsWith("/feemodeler")) return PLATFORM_APPS[3];
  if (pathname.startsWith("/coachai")) return PLATFORM_APPS[1];
  return PLATFORM_APPS[0];
}
