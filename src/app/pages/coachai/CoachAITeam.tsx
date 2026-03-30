import { Button, DataTable } from "@audere/ui";
import { Plus, Upload, Download } from "lucide-react";

type TeamRow = {
  id: string;
  name: string;
  lastLogin: string;
  score: string;
  confidence: string;
  overdue: number;
  actions?: void;
};

const TEAM: TeamRow[] = [
  { id: "1", name: "Rachel Bell", lastLogin: "2 days ago", score: "24%", confidence: "Low", overdue: 1 },
  { id: "2", name: "Stewart Bell", lastLogin: "Today", score: "100%", confidence: "High", overdue: 2 },
];

export function CoachAITeam() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Audere GamePlan</h1>
        <p className="mt-1 text-slate-600">Outcomes, KPIs and initiatives to cascade to team members.</p>
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
        <strong>3 overdue action(s):</strong> Stewart Bell (2), Rachel Bell (1) · <strong>1 low accountability:</strong> Rachel Bell (24%)
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">2 Team Members</span>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">5 Outcomes</span>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">6 Active Initiatives</span>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">13 Open Actions</span>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">62% score avg</span>
        <div className="ml-auto flex gap-2">
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-1"><Plus className="h-4 w-4" /> Add Outcome</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Sample</Button>
          <Button variant="outline" size="sm" className="border-slate-200 gap-1"><Upload className="h-4 w-4" /> Import</Button>
          <Button variant="outline" size="sm" className="border-slate-200 gap-1"><Download className="h-4 w-4" /> Export</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Modules</Button>
        </div>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Outcomes (3)</h2>
        <ul className="space-y-2">
          {["Add $30k new recurring revenue for Q1", "Prove the Audere Operating System", "Sustainable growth model"].map((title) => (
            <li key={title} className="p-3 rounded-lg border border-slate-100 flex items-center justify-between">
              <span className="font-medium text-slate-900">{title}</span>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">ACTIVE</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <h2 className="text-lg font-semibold text-slate-900 p-5 pb-0">Team</h2>
        <DataTable<TeamRow>
          columns={[
            { key: "name", header: "Name", render: (row) => <span className="font-medium text-slate-900">{row.name}</span> },
            { key: "lastLogin", header: "Last Login" },
            { key: "score", header: "Score" },
            { key: "confidence", header: "Confidence" },
            { key: "overdue", header: "Overdue", render: (row) => <span className={row.overdue > 0 ? "text-red-600" : ""}>{row.overdue}</span> },
            { key: "actions", header: "Actions", render: () => <Button variant="ghost" size="sm" className="text-slate-600">Edit</Button> },
          ]}
          rows={TEAM}
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Initiatives (5)</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {["Coach AI system load", "Launch Capacity & Profit Diagnostic", "Partner pipeline", "Content calendar", "Q1 revenue push"].map((title) => (
            <li key={title} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
              <span>{title}</span>
              <div className="w-20 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full rounded-full bg-amber-500" style={{ width: "45%" }} />
              </div>
              <button type="button" className="text-teal-600 hover:underline text-xs">Show Actions</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Rhythms (0)</h2>
        <p className="text-sm text-slate-500 mb-3">No rhythms defined yet.</p>
        <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-1"><Plus className="h-4 w-4" /> Add Rhythm</Button>
      </section>
    </div>
  );
}
