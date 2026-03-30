import { useState } from "react";
import { Button, DataTable } from "@audere/ui";
import { GripVertical, ChevronRight, Pencil, Trash2, ClipboardList } from "lucide-react";

type StageRow = {
  id: string;
  name: string;
  time: string;
  cost: string;
  handle?: void;
  expand?: void;
  actions?: void;
};

const STAGES: StageRow[] = [
  { id: "1", name: "First Contact", time: "0 hrs 30 mins", cost: "$203" },
  { id: "2", name: "Discovery", time: "1 hrs 45 mins", cost: "$787" },
  { id: "3", name: "Data Collection", time: "2 hrs", cost: "$612" },
  { id: "4", name: "Strategy Development", time: "3 hrs 30 mins", cost: "$1,198" },
  { id: "5", name: "Plan Production", time: "2 hrs 15 mins", cost: "$771" },
  { id: "6", name: "Plan Presentation", time: "1 hrs 30 mins", cost: "$514" },
  { id: "7", name: "Implementation", time: "4 hrs", cost: "$1,366" },
  { id: "8", name: "Compliance", time: "2 hrs 45 mins", cost: "$981" },
];

export function CoreProcess() {
  const [newStage, setNewStage] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">New Clients</h1>
        <p className="mt-1 text-slate-600">Define stages and their tasks for the 3-meeting advice process.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <DataTable<StageRow>
          columns={[
            { key: "handle", header: "", render: () => <GripVertical className="h-4 w-4 text-slate-400" /> },
            { key: "expand", header: "", render: () => <ChevronRight className="h-4 w-4 text-slate-400" /> },
            { key: "name", header: "Stages", render: (row) => <span className="font-medium text-slate-900">{row.name}</span> },
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
          rows={STAGES}
        />
        <div className="p-4 border-t border-slate-100 flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter stage name to add..."
            value={newStage}
            onChange={(e) => setNewStage(e.target.value)}
            className="flex-1 h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
          <Button variant="outline" size="sm" className="border-slate-200 gap-2">
            <ClipboardList className="h-4 w-4" /> Bulk Paste
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
        <span className="text-sm font-medium text-slate-700">Total Stages: 8</span>
        <span className="text-sm font-medium text-slate-700">Total Time: 18 hrs 15 mins</span>
        <span className="text-sm font-medium text-slate-700">Total Outsourcing Cost: $550</span>
        <span className="text-sm font-medium text-slate-700">Total Cost to Serve: $5,432</span>
      </div>
    </div>
  );
}
