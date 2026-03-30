import { useState } from "react";
import { Button, DataTable } from "@audere-apps/ui";
import { GripVertical, ChevronRight, Pencil, Trash2, ClipboardList } from "lucide-react";

type StrategyRow = {
  id: string;
  name: string;
  time: string;
  cost: string;
  handle?: void;
  expand?: void;
  actions?: void;
};

const STRATEGIES: StrategyRow[] = [
  { id: "1", name: "Cashflow Modeling", time: "0 hrs 30 mins", cost: "$297" },
  { id: "2", name: "Retirement Modeling", time: "0 hrs 30 mins", cost: "$217" },
  { id: "3", name: "Debt management/restructuring", time: "0 hrs 30 mins", cost: "$241" },
  { id: "4", name: "Super splitting", time: "3 hrs", cost: "$848" },
  { id: "5", name: "Life & TPD", time: "1 hrs 15 mins", cost: "$361" },
  { id: "6", name: "Income Protection", time: "1 hrs 15 mins", cost: "$423" },
  { id: "7", name: "Insurance Review (existing)", time: "1 hrs", cost: "$341" },
  { id: "8", name: "Superannuation Review", time: "2 hrs", cost: "$683" },
];

export function Strategies() {
  const [newName, setNewName] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Strategies</h1>
        <p className="mt-1 text-slate-600">Define the different strategies and the variations they impose on your process.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <DataTable<StrategyRow>
          columns={[
            { key: "handle", header: "", render: () => <GripVertical className="h-4 w-4 text-slate-400" /> },
            { key: "expand", header: "", render: () => <ChevronRight className="h-4 w-4 text-slate-400" /> },
            { key: "name", header: "Strategies", render: (row) => <span className="font-medium text-slate-900">{row.name}</span> },
            { key: "time", header: "Total Time/hrs" },
            { key: "cost", header: "Cost to Serve" },
            {
              key: "actions",
              header: "",
              render: () => (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-slate-600"><Pencil className="h-4 w-4" /> Edit</Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                </div>
              ),
            },
          ]}
          rows={STRATEGIES}
        />
        <div className="p-4 border-t border-slate-100 flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter strategy name to add..."
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
        <span className="text-sm font-medium text-slate-700">Total Strategies: 8</span>
      </div>
    </div>
  );
}
