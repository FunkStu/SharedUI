import { ChevronDown } from "lucide-react";

export function WorkspaceSelector() {
  return (
    <div className="border border-slate-200 rounded-lg w-64 bg-white shadow-sm">
      <button className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
            AF
          </div>
          <div className="text-left">
            <div className="font-semibold text-slate-900">Acme Financial</div>
            <div className="text-xs text-slate-500">Enterprise Plan</div>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>
    </div>
  );
}