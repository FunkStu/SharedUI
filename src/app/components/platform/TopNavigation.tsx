import { Search, ChevronDown, Bell } from "lucide-react";

export function TopNavigation() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Audere Hub
            </span>
          </div>
          <div className="h-4 w-px bg-slate-200"></div>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
            Acme Financial <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center px-8">
          <div className="group flex h-9 w-full max-w-md items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 ring-offset-white transition-colors hover:border-slate-300 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="flex-1 text-left">Search anything...</span>
            <kbd className="hidden h-5 items-center gap-1 rounded border border-slate-200 bg-white px-1.5 font-mono text-[10px] font-medium text-slate-500 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-slate-600 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-300 cursor-pointer">
            JS
          </div>
        </div>
      </div>
    </div>
  );
}