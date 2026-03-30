import { Button, DataTable } from "@audere-apps/ui";
import { Plus, Download, Pencil, Trash2 } from "lucide-react";

type ClientRow = {
  id: string;
  client: string;
  status: string;
  engagement: string;
  ongoing: string;
  year1: string;
  date: string;
  actions?: void;
};

const CLIENTS: ClientRow[] = [
  { id: "1", client: "Smith, P & E", status: "Draft", engagement: "$5,529", ongoing: "$4,136", year1: "$9,665", date: "Created 12 Mar 2026" },
  { id: "2", client: "Ravel, A", status: "Draft", engagement: "$5,432", ongoing: "$1,981", year1: "$7,413", date: "Created 12 Mar 2026" },
];

export function ClientPricing() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Client Pricing</h1>
          <p className="mt-1 text-slate-600">Create custom pricing quotes for individual clients.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-slate-200 gap-2">
            <Download className="h-4 w-4" /> Export All
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
            <Plus className="h-4 w-4" /> Add Client
          </Button>
        </div>
      </div>

      <p className="text-sm text-slate-600">2 clients priced</p>

      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <DataTable<ClientRow>
          columns={[
            { key: "client", header: "Client", render: (row) => <span className="font-medium text-slate-900">{row.client}</span> },
            { key: "status", header: "Status", render: (row) => <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">{row.status}</span> },
            { key: "engagement", header: "Engagement Fee" },
            { key: "ongoing", header: "Ongoing Fee" },
            { key: "year1", header: "Year 1 Total" },
            { key: "date", header: "Date" },
            {
              key: "actions",
              header: "",
              render: () => (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-slate-600"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                </div>
              ),
            },
          ]}
          rows={CLIENTS}
        />
      </div>
    </div>
  );
}
