import { Button, MetricTile } from "@audere/ui";
import { Card, CardContent } from "../../components/ui/card";

const COLS = [
  { id: "improve", label: "To Improve", hours: "13.7h/week", color: "border-red-200 bg-red-50/50" },
  { id: "planned", label: "Planned", hours: "8.0h/week", color: "border-slate-200" },
  { id: "now", label: "Now", hours: "0h/week", color: "border-slate-200" },
  { id: "done", label: "Done", hours: "0h/week", color: "border-slate-200" },
];

const SAMPLE_TASKS = [
  { title: "Outside-of-session client tasks", freq: "Weekly", time: "0.5h/week", actions: ["Automate", "Delegate"] },
  { title: "Responding to simple client email queries", freq: "Monthly", time: "0.3h/week", actions: ["Automate", "Optimise"] },
  { title: "Workflow management and oversight", freq: "Weekly", time: "4.0h/week", actions: ["Delegate", "Optimise"] },
];

export function RoleAuditAdapt() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <MetricTile label="Target Role Capacity" value="34.4h" />
        <MetricTile label="Focus Tasks" value="28.9h" helperText="40%" className="bg-emerald-50" />
        <MetricTile label="Priority Tasks" value="5.5h" helperText="8%" />
        <MetricTile label="Improve Tasks" value="37.7h" helperText="52%" className="bg-red-50" />
      </div>

      <p className="text-sm text-slate-600">
        Drag and drop improvement tasks through the workflow stages. Click on cards to select strategies and add notes.
      </p>
      <div className="flex gap-2">
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Filter: All Strategies</option></select>
        <Button variant="outline" size="sm" className="border-slate-200">Reports ▾</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {COLS.map((col) => (
          <div key={col.id} className={"rounded-xl border p-4 min-h-[320px] " + col.color}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-slate-900">{col.label}</h3>
              <span className="text-xs text-slate-500">{col.hours}</span>
            </div>
            <div className="space-y-2">
              {(col.id === "improve" ? SAMPLE_TASKS : []).map((t, i) => (
                <Card key={i} className="border-slate-200 shadow-sm">
                  <CardContent className="p-3 text-sm">
                    <p className="font-medium text-slate-900">{t.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{t.freq} · {t.time}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {t.actions.map((a) => (
                        <button key={a} type="button" className="text-xs text-blue-600 hover:underline">{a}</button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              {col.id !== "improve" && <p className="text-sm text-slate-400 py-4 text-center">No tasks</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
