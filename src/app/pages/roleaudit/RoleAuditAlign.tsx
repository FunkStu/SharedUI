import { useState } from "react";
import { Button, DataTable, Badge } from "@audere/ui";
import { Users, ClipboardList, Clock, Plus } from "lucide-react";
import { cn } from "../../utils/cn";

const TABS = ["Consolidated", "New", "Roles", "Docs"];

const REGISTER_ROWS = [
  { id: "1", task: "Basic social scheduling", user: "Jennifer Algarate", seniority: "Practice/Operational Manager", frequency: "Weekly", weeklyHrs: "1.0", priority: "Focus", category: "Coming soon", notes: "" },
  { id: "2", task: "Book meetings, manage cance..", user: "Stewart Bell", seniority: "Business Owner/Principal", frequency: "Quarterly", weeklyHrs: "1.5", priority: "Focus", category: "Coming soon", notes: "Stewart Bell" },
  { id: "3", task: "R&D for new modules", user: "Stewart Bell", seniority: "Business Owner/Principal", frequency: "Monthly", weeklyHrs: "0.4", priority: "Focus", category: "Coming soon", notes: "Audere Apps" },
];

export function RoleAuditAlign() {
  const [activeTab, setActiveTab] = useState("Consolidated");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Practice Task Register</h1>
          <p className="text-sm text-slate-500 mt-0.5">Audere - Consolidated view of all tasks across the practice</p>
        </div>
        <div className="flex gap-2">
          <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Audere</option></select>
          <Button variant="outline" size="sm" className="border-slate-200">Reports ▾</Button>
        </div>
      </div>

      <div className={cn("flex gap-1 border-b border-slate-200")}>
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-t-md",
              activeTab === tab ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px" : "text-slate-600 hover:bg-slate-50",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700"><Users className="h-4 w-4" /> 2 Users</span>
        <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700"><ClipboardList className="h-4 w-4" /> 60 Tasks</span>
        <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700"><Clock className="h-4 w-4" /> 102.2 Weekly Hours</span>
        <div className="ml-auto flex gap-2">
          <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white"><Plus className="h-4 w-4" /> Add Option</Button>
          <Button variant="outline" size="sm" className="border-slate-200">Export</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Users</option></select>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Seniorities</option></select>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Frequencies</option></select>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Priorities</option></select>
      </div>

      <DataTable
        columns={[
          { key: "task", header: "Task", render: (row) => <span className="font-medium text-slate-900">{row.task}</span> },
          { key: "user", header: "User" },
          { key: "seniority", header: "Seniority" },
          { key: "frequency", header: "Frequency" },
          { key: "weeklyHrs", header: "Weekly Hrs" },
          { key: "priority", header: "Priority", render: (row) => <Badge className="bg-emerald-100 text-emerald-800 border-0">{row.priority}</Badge> },
          { key: "category", header: "Category" },
          { key: "notes", header: "Notes" },
          { key: "id", header: "Reassign", render: () => <select className="h-8 rounded border border-slate-200 px-2 text-xs"><option>Clawd</option></select> },
        ]}
        rows={REGISTER_ROWS}
      />
    </div>
  );
}
