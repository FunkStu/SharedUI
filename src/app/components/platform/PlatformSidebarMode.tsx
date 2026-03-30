import { Grid, Brain, CheckSquare, LineChart, MessageSquare, LayoutDashboard } from "lucide-react";

const PLATFORM_ITEMS = [
  { name: "Hub", icon: Grid, active: true },
  { name: "CoachAI", icon: Brain, active: false },
  { name: "RoleAudit", icon: CheckSquare, active: false },
  { name: "FeeModeler", icon: LineChart, active: false },
  { name: "Marketos", icon: MessageSquare, active: false },
  { name: "Finsight", icon: LayoutDashboard, active: false },
];

export function PlatformSidebarMode() {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 shadow-sm flex flex-col justify-start">
      <h3 className="text-sm font-semibold text-white mb-6">Platform Mode</h3>
      <div className="space-y-1 w-56">
        {PLATFORM_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.name} 
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-teal-500/10 text-teal-400 font-medium' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}