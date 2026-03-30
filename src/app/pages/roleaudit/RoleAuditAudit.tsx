import { useState } from "react";
import { Button, DataTable, Badge } from "@audere/ui";
import { Plus, Upload, Save, Pencil, Trash2 } from "lucide-react";

const TASKS = [
  { id: "1", task: "Friday Advantage", frequency: "Weekly", time: 2, priority: "Focus", monthlyHours: 8.7, pctRole: 12 },
  { id: "2", task: "App Development", frequency: "Monthly", time: 8, priority: "Focus", monthlyHours: 8, pctRole: 11 },
  { id: "3", task: "Workflow management and oversight", frequency: "Weekly", time: 4, priority: "Improve", monthlyHours: 17.3, pctRole: 24 },
  { id: "4", task: "Responding to complex client email queries", frequency: "Weekly", time: 1.5, priority: "Retain", monthlyHours: 6.5, pctRole: 9 },
];

const SUMMARY = [
  { label: "Total Tasks", value: 35, color: "bg-sky-100 text-sky-800" },
  { label: "Focus Tasks", value: 11, color: "bg-emerald-100 text-emerald-800" },
  { label: "Retain Tasks", value: 7, color: "bg-blue-100 text-blue-800" },
  { label: "Improve Tasks", value: 17, color: "bg-red-100 text-red-800" },
];

export function RoleAuditAudit() {
  const [name] = useState("Stewart Bell");
  const [role] = useState("Business Coach");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
          <input value={name} readOnly className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Role/Job Title</label>
          <input value={role} readOnly className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Role Seniority</label>
          <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Business Owner/Principal</option></select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Employment</label>
          <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Full-Time</option></select>
        </div>
      </div>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Task Analysis</h2>
          <div className="flex flex-wrap items-center gap-2">
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Frequencies</option></select>
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>All Priorities</option></select>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"><Plus className="h-4 w-4" /> Add Task</Button>
            <Button variant="outline" size="sm" className="gap-2 border-slate-200">Bulk Add</Button>
            <Button variant="outline" size="sm" className="border-slate-200">Save/Load ▾</Button>
            <Button variant="outline" size="sm" className="border-slate-200">Reports ▾</Button>
            <select className="h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Sort by Time</option></select>
          </div>
        </div>
        <DataTable
          columns={[
            { key: "task", header: "Task", render: (row) => <span className="font-medium text-slate-900">{row.task}</span> },
            { key: "frequency", header: "Frequency" },
            { key: "time", header: "Time (hours)" },
            {
              key: "priority",
              header: "Priority",
              render: (row) => (
                <Badge
                  className={
                    row.priority === "Focus" ? "bg-emerald-100 text-emerald-800 border-0" :
                    row.priority === "Improve" ? "bg-red-100 text-red-800 border-0" :
                    "bg-blue-100 text-blue-800 border-0"
                  }
                >
                  {row.priority}
                </Badge>
              ),
            },
            { key: "monthlyHours", header: "Monthly Hours" },
            { key: "pctRole", header: "% of Role", render: (row) => `${row.pctRole}%` },
            {
              key: "id",
              header: "Actions",
              render: () => (
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                </div>
              ),
            },
          ]}
          rows={TASKS}
        />
        <div className="flex flex-wrap gap-4 mt-4">
          {SUMMARY.map((s) => (
            <div key={s.label} className={s.color + " rounded-lg px-4 py-2 text-sm font-medium"}>
              {s.label}: {s.value}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
