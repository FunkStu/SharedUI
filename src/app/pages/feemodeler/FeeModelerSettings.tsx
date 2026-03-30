import { Button } from "@audere/ui";

export function FeeModelerSettings() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-600">Configure Fee Modeler preferences, default rates, and labels.</p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Default rates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Default hourly rate ($)</label>
            <input type="number" defaultValue={285} className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Outsourcing hourly rate ($)</label>
            <input type="number" defaultValue={95} className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm" />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Profit margin</h2>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Default profit margin (%)</label>
          <input type="number" defaultValue={40} className="w-24 h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <p className="text-xs text-slate-500 mt-1">Applied to costed fee schedule and client pricing.</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Labels & terminology</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Engagement fee label</label>
            <input type="text" defaultValue="New Client Engagement Fee" className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ongoing fee label</label>
            <input type="text" defaultValue="Ongoing Fee (Annual)" className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Currency</label>
            <select className="h-10 rounded-md border border-slate-200 px-3 text-sm min-w-[120px]">
              <option>AUD ($)</option>
              <option>USD ($)</option>
              <option>GBP (£)</option>
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Schedule of fees</h2>
        <p className="text-sm text-slate-600">Options for the published Schedule of Fees view (Final Fee Model).</p>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600" />
            <span className="text-sm text-slate-700">Show cost base in parentheses (admin view only)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-slate-300 text-indigo-600" />
            <span className="text-sm text-slate-700">Allow flat fee toggle for client-facing schedule</span>
          </label>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Data & export</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="border-slate-200">Export model</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Import model</Button>
        </div>
        <p className="text-xs text-slate-500">Export or import your full fee model (stages, strategies, deliverables, packages) for backup or use in another practice.</p>
      </section>

      <div className="flex gap-2">
        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">Save settings</Button>
        <Button variant="outline" size="sm" className="border-slate-200">Reset to defaults</Button>
      </div>
    </div>
  );
}
