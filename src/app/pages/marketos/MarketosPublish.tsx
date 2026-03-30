import { useState } from "react";
import { Button, Badge } from "@audere-apps/ui";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "../../utils/cn";

const CALENDAR_DAYS = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];

const POSTS = [
  { id: "1", title: "The PDF in the Bottom Drawer is Not a Strategy", channel: "WordPress", status: "scheduled", tag: "Wildcard Direct Observation" },
  { id: "2", title: "Coach AI pitch", channel: "LinkedIn", status: "approved", tag: "Mistake + Lesson" },
];

export function MarketosPublish() {
  const [activeSubTab, setActiveSubTab] = useState("calendar");
  const [hidePencilled, setHidePencilled] = useState(false);

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Publish</h1>

        <div className="flex gap-1 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveSubTab("upcoming")}
            className={cn("px-4 py-2.5 text-sm font-medium", activeSubTab === "upcoming" ? "border-b-2 border-teal-600 text-slate-900 -mb-px" : "text-slate-600")}
          >
            Upcoming
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab("calendar")}
            className={cn("px-4 py-2.5 text-sm font-medium", activeSubTab === "calendar" ? "border-b-2 border-teal-600 text-slate-900 -mb-px" : "text-slate-600")}
          >
            Calendar
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
            <option>All Statuses</option>
          </select>
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
            <option>All Themes</option>
          </select>
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
            <option>All Channels</option>
          </select>
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
            <option>All Styles</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" className="rounded border-slate-300" /> Weekends
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-900">March 2026</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1"><ChevronLeft className="h-4 w-4" /> Previous</Button>
            <Button variant="outline" size="sm">Today</Button>
            <Button variant="outline" size="sm" className="gap-1">Next <ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                  <th key={d} className="px-2 py-3 font-medium text-slate-600">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CALENDAR_DAYS.map((row, i) => (
                <tr key={i} className="border-b border-slate-100">
                  {row.map((day, j) => (
                    <td key={j} className="align-top p-2 min-h-[80px] border-r border-slate-100 last:border-r-0">
                      {day != null ? (
                        <div className="space-y-1">
                          <span className="text-slate-500 text-xs">{day}</span>
                          {day === 14 && (
                            <div className="rounded bg-teal-100 px-2 py-1 text-xs">
                              <div className="font-medium text-slate-900">Coach AI pitch</div>
                              <Badge className="mt-1 bg-teal-600 text-white border-0 text-[10px]">Published</Badge>
                            </div>
                          )}
                          {day === 16 && (
                            <div className="rounded bg-sky-50 px-2 py-1 text-xs">
                              <div className="font-medium text-slate-900">The Hidden Cost of Being...</div>
                              <Badge className="mt-1 bg-sky-200 text-sky-800 border-0 text-[10px]">Scheduled</Badge>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside className="w-80 flex-shrink-0 rounded-xl border border-slate-200 bg-white p-4 h-fit">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">Posts</h2>
          <Badge className="bg-teal-100 text-teal-800 border-0">13</Badge>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input type="text" placeholder="Q Search posts..." className="w-full h-9 pl-8 pr-2 rounded-md border border-slate-200 text-sm" />
          </div>
        </div>
        <select className="w-full h-9 rounded-md border border-slate-200 mb-2 text-sm text-slate-600">All (13)</select>
        <select className="w-full h-9 rounded-md border border-slate-200 mb-4 text-sm text-slate-600">All Channels</select>
        <label className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <input type="checkbox" checked={hidePencilled} onChange={(e) => setHidePencilled(e.target.checked)} className="rounded border-slate-300" /> Hide pencilled in
        </label>
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-500 uppercase">The Capacity Wall Breakthrough</p>
          {POSTS.map((p) => (
            <div key={p.id} className="rounded-lg border border-slate-200 p-3 text-sm">
              <p className="font-medium text-slate-900">{p.title}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">{p.channel}</Badge>
                <Badge className="text-xs bg-slate-100 text-slate-700 border-0">{p.status}</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-1">{p.tag}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
