import { useState } from "react";
import { Button, DataTable } from "@audere-apps/ui";
import { GripVertical, ChevronDown, ChevronRight, Pencil, Trash2, ClipboardList } from "lucide-react";

type DeliverableRow = {
  id: string;
  name: string;
  time: string;
  cost: string;
  role?: string;
  isSub?: boolean;
  handle?: void;
  expand?: void;
  actions?: void;
};

const DELIVERABLES: DeliverableRow[] = [
  { id: "1", name: "Strategy & Progress Review", time: "3 hrs 15 mins", cost: "$887", isSub: false },
  { id: "1a", name: "Book, follow up and conduct data collection", time: "0 hrs 45 mins", cost: "$212", role: "Client Service Manager", isSub: true },
  { id: "1b", name: "Prepare review pack", time: "1 hrs", cost: "$287", role: "Financial Adviser", isSub: true },
  { id: "1c", name: "Prepare for Review meeting", time: "0 hrs 30 mins", cost: "$144", role: "Financial Adviser", isSub: true },
  { id: "1d", name: "Conduct Review meeting", time: "1 hrs", cost: "$244", role: "Financial Adviser", isSub: true },
  { id: "2", name: "Performance Review", time: "0 hrs 30 mins", cost: "$97", isSub: false },
  { id: "3", name: "Sounding board meeting", time: "0 hrs 45 mins", cost: "$156", isSub: false },
  { id: "4", name: "End of Year tax report", time: "0 hrs 30 mins", cost: "$112", isSub: false },
];

export function Deliverables() {
  const [expanded, setExpanded] = useState(true);
  const [newName, setNewName] = useState("");

  const visibleRows = expanded ? DELIVERABLES : DELIVERABLES.filter((r) => !r.isSub);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">1-to-1 Services</h1>
        <p className="mt-1 text-slate-600">Define your services to individual clients.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-semibold tracking-wider w-10"></th>
                <th className="px-6 py-3 font-semibold tracking-wider w-10"></th>
                <th className="px-6 py-3 font-semibold tracking-wider">Deliverables</th>
                <th className="px-6 py-3 font-semibold tracking-wider">Total Time/hrs</th>
                <th className="px-6 py-3 font-semibold tracking-wider">Cost to Serve</th>
                <th className="px-6 py-3 font-semibold tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-slate-100 hover:bg-slate-50 ${row.isSub ? "bg-slate-50/50" : "bg-white"}`}
                >
                  <td className="px-6 py-3">
                    {!row.isSub && <GripVertical className="h-4 w-4 text-slate-400" />}
                  </td>
                  <td className="px-6 py-3">
                    {row.id === "1" ? (
                      <button type="button" onClick={() => setExpanded(!expanded)} className="text-slate-400 hover:text-slate-600">
                        {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </button>
                    ) : !row.isSub ? (
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    ) : null}
                  </td>
                  <td className="px-6 py-3">
                    <span className={row.isSub ? "pl-6 text-slate-700" : "font-medium text-slate-900"}>{row.name}</span>
                  </td>
                  <td className="px-6 py-3">{row.time}</td>
                  <td className="px-6 py-3">
                    {row.role ? <span className="text-slate-500">{row.role}</span> : row.cost}
                  </td>
                  <td className="px-6 py-3">
                    {!row.isSub && (
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-slate-600"><Pencil className="h-4 w-4" /> Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter deliverable name to add..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
          <Button variant="outline" size="sm" className="border-slate-200 gap-2">
            <ClipboardList className="h-4 w-4" /> Bulk Paste
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-xl border border-slate-200 bg-indigo-50 px-6 py-4">
        <span className="text-sm font-medium text-slate-700">Total Deliverables: 14</span>
        <span className="text-sm font-medium text-slate-700">Total Time: 6 hrs 45 mins</span>
        <span className="text-sm font-medium text-slate-700">Total Outsourcing Cost: $850</span>
        <span className="text-sm font-medium text-slate-700">Total Cost to Serve: $4,670</span>
      </div>
    </div>
  );
}
