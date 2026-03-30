import { Button } from "@audere/ui";

export function CoachAIToday() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">AI NUDGE</h2>
          <p className="text-sm text-slate-700">
            You haven&apos;t progressed &apos;Launch Capacity & Profit Diagnostic&apos; in 10 days. Think about what your next step should be.
          </p>
          <Button variant="outline" size="sm" className="mt-4 border-slate-200">Dismiss</Button>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">QUICK CHECK IN</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="I completed..."
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="I want to..."
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="I'm struggling to..."
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400"
            />
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">FOCUS</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-900">Launch Capacity & Profit Diagnostic</span>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-sm text-slate-500 mb-2">Pricing, packaging, and positioning</p>
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden mb-1">
                <div className="h-full rounded-full bg-amber-500 w-0" />
              </div>
              <p className="text-xs text-slate-500">Due 2026-03-31</p>
            </li>
            <li className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-900">Coach AI system load</span>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Active</span>
              </div>
              <p className="text-sm text-slate-500 mb-2">Run live walkthroughs and short &apos;how we use this&apos; sessions...</p>
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden mb-1">
                <div className="h-full rounded-full bg-amber-500 w-1/2" />
              </div>
              <p className="text-xs text-slate-500">Due 2026-03-13</p>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">HEALTH</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-sm text-slate-700">KPIs</span>
              <span className="text-xs text-amber-700 ml-auto">Behind</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-sm text-slate-700">Actions</span>
              <span className="text-xs text-amber-700 ml-auto">Behind</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-red-700" />
              <span className="text-sm text-slate-700">Rhythms</span>
              <span className="text-xs text-red-600 ml-auto">Off Track</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-700">Accountability</span>
              <span className="text-xs text-emerald-700 ml-auto">On Track</span>
            </li>
          </ul>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">ACTIONS</h2>
          <button type="button" className="text-sm text-slate-500 hover:text-slate-700">Show completed (3)</button>
        </div>
        <ul className="space-y-2 max-h-80 overflow-y-auto">
          {[
            { label: "Define core C&P model", project: "Launch Capacity & Profit Diagnostic", status: "2026-03-06 Overdue", overdue: true },
            { label: "Segment pilot candidates", project: "Coach AI system load", status: "2026-03-12 Overdue", overdue: true },
            { label: "Design delivery workflow", project: "Launch Capacity & Profit Diagnostic", status: "2026-03-13 Today", overdue: false },
            { label: "Build diagnostic report", project: "Launch Capacity & Profit Diagnostic", status: "2026-03-13 Today", overdue: false },
            { label: "Integrate CoachAI into coaching flow", project: "Coach AI system load", status: "2026-03-13 Today", overdue: false },
            { label: "Pricing, packaging, and positioning", project: "Launch Capacity & Profit Diagnostic", status: "2026-03-20", overdue: false },
            { label: "Launch to market", project: "Launch Capacity & Profit Diagnostic", status: "2026-03-27", overdue: false },
          ].map((a) => (
            <li key={a.label} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
              <input type="checkbox" className="rounded border-slate-300 text-teal-600" />
              <span className="text-sm text-slate-900 flex-1">{a.label}</span>
              <span className="text-xs text-slate-500">{a.project}</span>
              <span className={`text-xs ${a.overdue ? "text-red-600" : "text-amber-600"}`}>{a.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
