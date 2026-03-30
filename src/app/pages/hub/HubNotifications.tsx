import { Button } from "@audere-apps/ui";

const NOTIFICATIONS = [
  { id: "1", title: "CoPilot Rewriter", status: "Published", audience: "All users", app: "aidere" },
  { id: "2", title: "Stay in the Loop", status: "Draft", audience: "All users", app: "all" },
  { id: "3", title: "Your Message Board is live", status: "Published", audience: "All users", app: "me" },
] as const;

export function HubNotifications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Notifications</h1>
        <p className="mt-1 text-slate-600">
          Manage system announcements across all apps.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-1 py-1 text-xs font-medium text-slate-600">
          <button className="rounded-full px-3 py-1 hover:bg-white hover:text-slate-900">All</button>
          <button className="rounded-full bg-slate-900 px-3 py-1 text-slate-50 shadow-sm">
            Published
          </button>
          <button className="rounded-full px-3 py-1 hover:bg-white hover:text-slate-900">Draft</button>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select className="h-8 rounded-md border border-slate-200 bg-white px-2 pr-6 text-xs text-slate-600">
            <option>All Apps</option>
          </select>
          <select className="h-8 rounded-md border border-slate-200 bg-white px-2 pr-6 text-xs text-slate-600">
            <option>All Products</option>
          </select>
          <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 text-xs h-8">
            + New Announcement
          </Button>
        </div>
      </div>

      <section className="space-y-3">
        {NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-900">{n.title}</span>
                <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {n.status}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                From 17/02/2026 · {n.audience} · <span className="font-mono text-[11px]">app_code: {n.app}</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <button type="button" className="hover:text-slate-600" aria-label="Preview">
                ✉️
              </button>
              <button type="button" className="hover:text-slate-600" aria-label="Edit">
                ✏️
              </button>
              <button type="button" className="hover:text-red-600" aria-label="Delete">
                🗑
              </button>
            </div>
          </div>
        ))}
        <button className="mx-auto mt-2 block text-xs text-slate-500 hover:text-slate-700">
          View More (15 remaining)
        </button>
      </section>
    </div>
  );
}

