import { Brain, LineChart, Clock } from "lucide-react";

export function NotificationPanel() {
  return (
    <div className="border border-slate-200 rounded-lg w-full max-w-sm bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
        <span className="text-sm font-semibold text-slate-900">Notifications</span>
        <span className="text-xs text-teal-600 font-medium cursor-pointer">Mark all as read</span>
      </div>
      <div className="divide-y divide-slate-100">
        <div className="p-4 flex gap-3 hover:bg-slate-50 bg-teal-50/30 transition-colors">
          <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600 mt-0.5">
            <Brain className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm text-slate-900">
              <span className="font-semibold">CoachAI Insight:</span> Pricing anomaly detected in comprehensive planning fees.
            </div>
            <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <Clock className="h-3 w-3" /> 2m ago
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-3 hover:bg-slate-50 transition-colors">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600 mt-0.5">
            <LineChart className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm text-slate-900">
              <span className="font-semibold">FeeModeler:</span> Scenario "2024 Base Increase" is ready for review.
            </div>
            <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <Clock className="h-3 w-3" /> 1h ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}