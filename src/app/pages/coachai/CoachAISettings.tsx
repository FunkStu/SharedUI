import { Button } from "@audere/ui";

export function CoachAISettings() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-600">Accountability, context, and plan preferences.</p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Accountability Engine</h2>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Check-in Frequency</span>
            <button type="button" className="relative h-6 w-11 rounded-full bg-teal-600" aria-label="Enabled">
              <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
            </button>
          </div>
          <p className="text-sm text-slate-500 mb-3">How often do you want your coach to check in by email?</p>
          <div className="flex flex-wrap gap-3">
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Every (days)</option><option>1</option></select>
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Time</option><option>4:30pm</option></select>
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Timezone</option><option>Sydney (AEST)</option></select>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">Save</Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">You&apos;ll receive check-in emails every day at 4:30pm (Sydney / Melbourne (AEST)).</p>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm" className="border-slate-200">Preview</Button>
            <Button variant="outline" size="sm" className="border-slate-200">Send test email</Button>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">Accountability Level</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Go Easy</span>
            <input type="range" min="0" max="100" defaultValue="50" className="flex-1 h-2 rounded-full bg-slate-200" />
            <span>On My Case</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Balanced — acknowledges progress but flags overdue items clearly.</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">About You</h2>
        <p className="text-sm text-slate-600">Help the AI coach understand your context and reason about workload.</p>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Vision (one sentence)</label>
          <textarea
            rows={2}
            placeholder="e.g. Build a thriving practice that gives me freedom without sacrificing quality."
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400"
          />
          <p className="text-xs text-slate-500 mt-1">Used by the AI coach to align its tone and suggestions to your bigger picture.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Available hours / week</label>
          <input type="number" defaultValue={40} className="h-9 w-24 rounded-md border border-slate-200 px-3 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Capacity notes (optional)</label>
          <textarea rows={2} defaultValue="15 hours/week in coaching meetings or other meetings." className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
        </div>
        <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">Save Settings</Button>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Home Screen</h2>
        <p className="text-sm text-slate-600">Choose which page to land on after signing in.</p>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm min-w-[160px]">
          <option>Plan</option>
          <option>Today</option>
          <option>Coach</option>
        </select>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Section visibility</h2>
        <ul className="space-y-3">
          {["Outcomes", "Initiatives", "Rhythms", "Metrics"].map((name) => (
            <li key={name} className="flex items-center justify-between">
              <span className="text-sm text-slate-700">{name}</span>
              <button type="button" className="relative h-6 w-11 rounded-full bg-teal-600" aria-label={`${name} enabled`}>
                <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Plan Management</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="border-slate-200">Export PDF</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Export Plan</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Import Plan</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Download Sample</Button>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Rhythm History</h2>
        <p className="text-sm text-slate-600">Add, edit, or delete rhythm check-ins to correct issues or catch up on missed entries.</p>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm min-w-[200px]">
          <option>Choose a rhythm...</option>
        </select>
      </section>
    </div>
  );
}
