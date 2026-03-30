import { Button } from "@audere/ui";

const APPS = [
  { id: "home", name: "Home" },
  { id: "finsight", name: "Finsight" },
  { id: "roleaudit", name: "Role Audit" },
  { id: "aidere", name: "Aidere" },
  { id: "marketos", name: "Marketos" },
  { id: "coachai", name: "CoachAI" },
  { id: "feemodeler", name: "Fee Modeler" },
] as const;

export function HubIntegrations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Integration Status</h1>
        <p className="mt-1 text-slate-600">
          Monitor provisioning integrations and hub-login app activity.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-900">Auto-Repair</p>
          <p className="text-xs text-slate-500">
            Automatically fix Hub↔App entitlement mismatches detected by drift scans.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Status</span>
          <button
            type="button"
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200"
            aria-label="Auto-Repair off"
          >
            <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-1 py-1 text-xs font-medium text-slate-600">
          <button className="rounded-full bg-white px-3 py-1 shadow-sm">Recent Logins</button>
          <button className="rounded-full px-3 py-1 hover:text-slate-900">Hub-Login Apps (4)</button>
          <button className="rounded-full px-3 py-1 hover:text-slate-900">Provisioning</button>
          <button className="rounded-full px-3 py-1 hover:text-slate-900">Availability</button>
          <button className="rounded-full px-3 py-1 hover:text-slate-900">Drift</button>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-4 w-7 items-center rounded-full bg-slate-200 p-0.5">
              <span className="inline-flex h-3 w-3 translate-x-3 rounded-full bg-emerald-500" />
            </span>
            <span>Include Global Admins</span>
          </div>
          <Button variant="outline" size="sm" className="h-7 border-slate-200 text-xs">
            Refresh
          </Button>
        </div>
      </div>

      <section className="space-y-3">
        <p className="text-xs text-slate-500">
          Recent login activity across all Audere apps. Shows last 5 logins per app with 30-day totals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {APPS.map((app) => (
            <div
              key={app.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-600"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-slate-900">{app.name}</p>
                <span className="text-[10px] text-slate-400">12 / 30d</span>
              </div>
              <ul className="space-y-1.5">
                <li className="flex justify-between">
                  <span>stewart</span>
                  <span>13 Mar 11:45</span>
                </li>
                <li className="flex justify-between">
                  <span>stewart</span>
                  <span>12 Mar 13:52</span>
                </li>
                <li className="flex justify-between">
                  <span>handan.dilici</span>
                  <span>11 Mar 19:37</span>
                </li>
                <li className="flex justify-between">
                  <span>p.monohan</span>
                  <span>11 Mar 14:05</span>
                </li>
                <li className="flex justify-between text-slate-400">
                  <span>+ 15 more — click to view all</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

