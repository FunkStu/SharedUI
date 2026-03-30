import { CheckSquare } from "lucide-react";

const APP_ITEMS = [
  { name: "Overview", active: true },
  { name: "Roles", active: false },
  { name: "Capacity", active: false },
  { name: "Delegation", active: false },
  { name: "Insights", active: false },
];

export function AppSidebarMode() {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 shadow-sm flex flex-col justify-start">
      <div className="flex items-center gap-3 mb-6 px-3">
        <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center">
          <CheckSquare className="h-3 w-3 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-white">App Mode (RoleAudit)</h3>
      </div>
      <div className="space-y-1 w-56">
        {APP_ITEMS.map((item) => (
          <div 
            key={item.name} 
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
              item.active 
                ? 'bg-blue-500/10 text-blue-400 font-medium' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}