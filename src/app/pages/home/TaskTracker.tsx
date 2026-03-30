import { useState } from "react";
import { Button, Badge } from "@audere/ui";
import { LayoutGrid, LayoutList, Users, Search, RefreshCw, Unlink, Plus } from "lucide-react";
import { cn } from "../../utils/cn";

const COLUMNS = [
  { id: "planned", label: "Not Started / Planned", count: 12 },
  { id: "next", label: "Next", count: 3 },
  { id: "now", label: "Now", count: 0 },
  { id: "awaiting", label: "Awaiting Input", count: 4 },
  { id: "completed", label: "Completed", count: 0 },
];

const TASKS = {
  planned: [
    { id: "1", title: "Let AI take the load", entity: "EJM Advice", date: "25 Feb", badges: ["Not Urgent"], initials: "MW" },
    { id: "2", title: "Map docs", entity: "EJM Advice", date: "05 Feb", badges: ["New"], initials: "SB" },
    { id: "3", title: "Regroup on specialis.", entity: "EJM Advice", date: "13 Feb", badges: ["New"], initials: "PM" },
  ],
  next: [
    { id: "4", title: "Deploy Email Assistant", entity: "EJM Advice", date: "05 Feb", badges: ["Important"], initials: "SB", urgent: true },
    { id: "5", title: "Train Brendan on agent", entity: "EJM Advice", date: "06 Feb", badges: ["Important"], initials: "PM", urgent: true },
    { id: "6", title: "Project scoping", entity: "EJM Advice", date: "13 Feb", badges: ["Important"], initials: "DC", urgent: true },
  ],
  now: [] as { id: string; title: string; entity: string; date: string; badges: string[]; initials: string }[],
  awaiting: [
    { id: "7", title: "Trial personal plan", entity: "EJM Advice", date: "6 Mar", badges: [], initials: "CG", done: true },
    { id: "8", title: "Review compliance docs", entity: "EJM Advice", date: "10 Mar", badges: [], initials: "SB" },
  ],
  completed: [],
};

export function TaskTracker() {
  const [view, setView] = useState<"table" | "board" | "accountability">("board");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Task Tracker</h1>
        <p className="mt-1 text-slate-600">Manage and track tasks across all organisations</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setView("table")}
              className={cn("flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium", view === "table" ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50")}
            >
              <LayoutGrid className="h-4 w-4" /> Table
            </button>
            <button
              type="button"
              onClick={() => setView("board")}
              className={cn("flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium", view === "board" ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50")}
            >
              <LayoutList className="h-4 w-4" /> Board
            </button>
            <button
              type="button"
              onClick={() => setView("accountability")}
              className={cn("flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium", view === "accountability" ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50")}
            >
              <Users className="h-4 w-4" /> Accountability
            </button>
          </div>
          <Button variant="outline" size="sm" className="border-slate-200">Collapse</Button>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input type="text" placeholder="Search tasks..." className="h-9 pl-8 pr-3 rounded-md border border-slate-200 w-48 text-sm" />
          </div>
          <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>EJM Advice</option></select>
          <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>All Owners</option></select>
          <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>Due Date</option></select>
          <label className="flex items-center gap-1.5 text-sm text-slate-600"><input type="checkbox" className="rounded border-slate-300" /> New Only</label>
          <label className="flex items-center gap-1.5 text-sm text-slate-600"><input type="checkbox" className="rounded border-slate-300" /> Include Completed</label>
          <label className="flex items-center gap-1.5 text-sm text-slate-600"><input type="checkbox" className="rounded border-slate-300" /> Archived</label>
          <button type="button" className="text-sm text-slate-500 hover:text-slate-700">Clear</button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 border-slate-200"><RefreshCw className="h-4 w-4" /> Sync</Button>
          <Button variant="outline" size="sm" className="gap-2 border-slate-200"><Unlink className="h-4 w-4" /> Disconnect</Button>
          <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white"><Plus className="h-4 w-4" /> New Task</Button>
        </div>
      </div>

      {view === "board" && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {COLUMNS.map((col) => (
            <div key={col.id} className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">{col.label}</h3>
                <span className="text-sm text-teal-600 font-medium">{col.count}</span>
              </div>
              <div className="space-y-3">
                {(TASKS as Record<string, { id: string; title: string; entity: string; date: string; badges: string[]; initials: string; urgent?: boolean; done?: boolean }[]>)[col.id]?.length === 0 ? (
                  <p className="text-sm text-slate-500 py-8 text-center">No tasks</p>
                ) : (
                  (TASKS as Record<string, { id: string; title: string; entity: string; date: string; badges: string[]; initials: string; urgent?: boolean; done?: boolean }[]>)[col.id]?.map((task) => (
                    <div
                      key={task.id}
                      className={cn(
                        "rounded-lg border bg-white p-3 shadow-sm text-sm",
                        task.urgent && "border-red-300",
                      )}
                    >
                      <p className="font-medium text-slate-900">{task.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{task.entity}</p>
                      <p className="text-xs text-slate-500">{task.date}</p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        {task.badges.map((b) => (
                          <Badge
                            key={b}
                            className={cn(
                              b === "Important" && "bg-teal-100 text-teal-800 border-0",
                              b === "New" && "bg-amber-100 text-amber-800 border-0",
                              b === "Not Urgent" && "bg-slate-100 text-slate-600 border-0",
                            )}
                          >
                            {b}
                          </Badge>
                        ))}
                        <span className="ml-auto h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-medium">
                          {task.initials}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {view !== "board" && (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-12 text-center text-slate-500 text-sm">
          {view === "table" ? "Table view — coming soon." : "Accountability view — coming soon."}
        </div>
      )}
    </div>
  );
}
