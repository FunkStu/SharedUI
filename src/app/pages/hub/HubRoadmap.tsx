import { Button } from "@audere-apps/ui";

const COLUMNS = [
  { id: "backlog", title: "Backlog" },
  { id: "planned", title: "Planned" },
  { id: "in-progress", title: "In Progress" },
  { id: "on-hold", title: "On Hold" },
  { id: "done", title: "Done" },
] as const;

const SAMPLE_ITEMS = [
  { id: "1", columnId: "backlog", title: "CoachAI + Home hybrid", app: "Home", progress: "37%" },
  { id: "2", columnId: "planned", title: "Migrate Home", app: "Home", progress: "20%" },
  { id: "3", columnId: "planned", title: "Migrate Hub", app: "Hub", progress: "58%" },
  { id: "4", columnId: "done", title: "Outbound notifications", app: "Hub", progress: "100%" },
] as const;

export function HubRoadmap() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Development Roadmap</h1>
          <p className="mt-1 text-slate-600">
            Track feature development across all apps.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <label className="flex items-center gap-2">
            <span className="text-slate-600">Hide Done</span>
            <span className="inline-flex h-4 w-8 items-center rounded-full bg-slate-200 px-0.5">
              <span className="h-3 w-3 rounded-full bg-white shadow" />
            </span>
          </label>
          <select className="h-8 rounded-md border border-slate-200 bg-white px-2 pr-6 text-xs text-slate-600">
            <option>All Apps</option>
          </select>
          <Button size="sm" className="h-8 bg-slate-900 text-white hover:bg-slate-800 text-xs">
            + Add Feature
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {COLUMNS.map((column) => {
          const items = SAMPLE_ITEMS.filter((i) => i.columnId === column.id);
          const tone =
            column.id === "backlog"
              ? "border-slate-200 bg-slate-50"
              : column.id === "planned"
              ? "border-sky-200 bg-sky-50/60"
              : column.id === "done"
              ? "border-emerald-200 bg-emerald-50/60"
              : "border-slate-200 bg-slate-50/40";

          return (
            <div
              key={column.id}
              className={`flex h-full flex-col rounded-xl border ${tone} p-3 text-xs text-slate-700`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  {column.title}
                </span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-500 border border-slate-200">
                  {items.length}
                </span>
              </div>
              <div className="space-y-2">
                {items.length === 0 && (
                  <p className="rounded-md border border-dashed border-slate-200 bg-white/40 p-3 text-[11px] text-slate-400">
                    No items yet.
                  </p>
                )}
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-md border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <p className="text-[11px] font-medium text-slate-900">{item.title}</p>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                      <span>{item.app}</span>
                      <span>{item.progress}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

