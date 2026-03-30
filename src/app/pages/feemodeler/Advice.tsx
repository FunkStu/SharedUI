import { useState } from "react";
import { Button, DataTable } from "@audere-apps/ui";
import { GripVertical, ChevronDown, ChevronRight, Pencil, Trash2, ClipboardList } from "lucide-react";

type AdviceRow = {
  id: string;
  name: string;
  time: string;
  cost: string;
  isSub?: boolean;
  handle?: void;
  expand?: void;
  actions?: void;
};

const ADVICE_TYPES: AdviceRow[] = [
  { id: "1", name: "High-touch client", time: "1 hrs 25 mins", cost: "$385", isSub: false },
  { id: "1a", name: "Additional contact, meeting time", time: "0 hrs 45 mins", cost: "$244", isSub: true },
  { id: "1b", name: "Additional admin time, email management", time: "0 hrs 40 mins", cost: "$141", isSub: true },
  { id: "2", name: "Additional modelling", time: "1 hrs 15 mins", cost: "$446", isSub: false },
  { id: "3", name: "Cashflow Coaching", time: "0 hrs 45 mins", cost: "$320", isSub: false },
  { id: "4", name: "Complex investments", time: "1 hrs", cost: "$393", isSub: false },
  { id: "5", name: "SMSF administration", time: "1 hrs 15 mins", cost: "$438", isSub: false },
  { id: "6", name: "Retirement income streams", time: "0 hrs 45 mins", cost: "$267", isSub: false },
  { id: "7", name: "Extra-ordinary administration", time: "0 hrs 30 mins", cost: "$193", isSub: false },
  { id: "8", name: "Life and TPD insurance", time: "0 hrs 30 mins", cost: "$193", isSub: false },
  { id: "9", name: "Income protection", time: "0 hrs 15 mins", cost: "$97", isSub: false },
  { id: "10", name: "Review of Centrelink schedules", time: "0 hrs 45 mins", cost: "$182", isSub: false },
  { id: "11", name: "Travel (per 10kms)", time: "0 hrs 30 mins", cost: "$171", isSub: false },
  { id: "12", name: "Additional research", time: "1 hrs", cost: "$364", isSub: false },
  { id: "13", name: "Portfolio Rebalancing", time: "0 hrs 45 mins", cost: "$267", isSub: false },
  { id: "14", name: "Professional Liaison", time: "1 hrs 15 mins", cost: "$438", isSub: false },
];

export function Advice() {
  const [expanded, setExpanded] = useState(true);
  const [newName, setNewName] = useState("");

  const visibleRows = expanded ? ADVICE_TYPES : ADVICE_TYPES.filter((r) => !r.isSub);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Advice</h1>
          <p className="mt-1 text-slate-600">Define additional advice types for existing clients.</p>
        </div>
        <Button variant="outline" size="sm" className="border-slate-200 gap-2">
          <ClipboardList className="h-4 w-4" /> Bulk Paste
        </Button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-semibold tracking-wider w-10"></th>
                <th className="px-6 py-3 font-semibold tracking-wider w-10"></th>
                <th className="px-6 py-3 font-semibold tracking-wider">Advice Type</th>
                <th className="px-6 py-3 font-semibold tracking-wider">Time</th>
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
                  <td className="px-6 py-3">{row.cost}</td>
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
        <div className="p-4 border-t border-slate-100">
          <input
            type="text"
            placeholder="Enter advice type to add..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-xl border border-slate-200 bg-indigo-50 px-6 py-4">
        <span className="text-sm font-medium text-slate-700">Total Advice Types: 14</span>
        <span className="text-sm font-medium text-slate-700">Total Time: 12 hrs 35 mins</span>
        <span className="text-sm font-medium text-slate-700">Outsourcing Cost: $250</span>
        <span className="text-sm font-medium text-slate-700">Total Cost to Serve: $4,153</span>
      </div>
    </div>
  );
}
