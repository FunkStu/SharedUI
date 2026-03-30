import { useState } from "react";
import { Button, DataTable } from "@audere/ui";
import { GripVertical, Pencil, Trash2, ClipboardList } from "lucide-react";

type OneToManyRow = {
  id: string;
  name: string;
  clients: number;
  time: string;
  totalCost: string;
  costPerClient: string;
  handle?: void;
  actions?: void;
};

const ITEMS: OneToManyRow[] = [
  { id: "1", name: "MyProsperity", clients: 100, time: "0 hrs", totalCost: "$5,136", costPerClient: "$51" },
  { id: "2", name: "Annual Fee reporting", clients: 15, time: "1 hrs 30 mins", totalCost: "$364", costPerClient: "$24" },
  { id: "3", name: "Let Us Know Check-in", clients: 100, time: "0 hrs 30 mins", totalCost: "$612", costPerClient: "$6" },
  { id: "4", name: "Economic Update", clients: 100, time: "0 hrs", totalCost: "$412", costPerClient: "$4" },
  { id: "5", name: "Special Market Commentary", clients: 50, time: "0 hrs 45 mins", totalCost: "$287", costPerClient: "$6" },
  { id: "6", name: "Annual Budget Update", clients: 50, time: "1 hrs", totalCost: "$298", costPerClient: "$6" },
  { id: "7", name: "Newsletter", clients: 200, time: "0 hrs 30 mins", totalCost: "$220", costPerClient: "$1" },
];

export function OneToMany() {
  const [newName, setNewName] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">1-to-Many Services</h1>
          <p className="mt-1 text-slate-600">Define your group services with time tasks and fixed costs.</p>
        </div>
        <Button variant="outline" size="sm" className="border-slate-200 gap-2">
          <ClipboardList className="h-4 w-4" /> Bulk Paste
        </Button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <DataTable<OneToManyRow>
          columns={[
            { key: "handle", header: "", render: () => <GripVertical className="h-4 w-4 text-slate-400" /> },
            { key: "name", header: "Deliverables", render: (row) => <span className="font-medium text-slate-900">{row.name}</span> },
            { key: "clients", header: "# Clients" },
            { key: "time", header: "Time" },
            { key: "totalCost", header: "Total Cost" },
            { key: "costPerClient", header: "Cost/Client" },
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
          rows={ITEMS}
        />
        <div className="p-4 border-t border-slate-100">
          <input
            type="text"
            placeholder="Enter deliverable name to add..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-4">
        <span className="text-sm font-medium text-slate-700">Total Deliverables: 7</span>
        <span className="text-sm font-medium text-slate-700">Total Clients: 615</span>
        <span className="text-sm font-medium text-slate-700">Total Time: 4 hrs 15 mins</span>
        <span className="text-sm font-medium text-slate-700">Total Cost: $7,329</span>
      </div>
    </div>
  );
}
