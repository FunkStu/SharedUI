import { useState } from "react";
import { Button, MetricTile, Badge } from "@audere-apps/ui";
import { FinsightBanner } from "../../components/finsight/FinsightBanner";
import { Download } from "lucide-react";

const COMPLETED_ROWS = [
  { id: "1", clientName: "Mark G and A G", adviser: "Simon Forbes", engaged: "Aug 2025", completed: "Jan 2026", fum: "$2,500,000", notUsed: "$0", type: "New", status: "Completed" },
];

const DNP_ROWS = [
  { id: "1", clientName: "AL", adviser: "Simon Forbes", engaged: "Oct 2024", closed: "June 2025", type: "New", status: "Did Not Proceed" },
  { id: "2", clientName: "Peter S and CS", adviser: "Simon Forbes", engaged: "Aug 2025", closed: "Jan 2026", type: "Existing", status: "Did Not Proceed" },
];

export function Completed() {
  const [viewAs, setViewAs] = useState<"Default" | "AM" | "Member">("AM");
  const [archived, setArchived] = useState(true);

  return (
    <div className="space-y-8">
      <FinsightBanner viewAs={viewAs} onViewAsChange={setViewAs} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Completed</h1>
          <p className="mt-1 text-slate-600">Archive of completed deals and opportunities.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setArchived(false)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium ${!archived ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Current Year
            </button>
            <button
              type="button"
              onClick={() => setArchived(true)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium ${archived ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Archived
            </button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricTile
          label="Total New FUM"
          value="$2,950,000"
          helperText="include pre-payments & deposits totalling $450,000"
        />
        <MetricTile
          label="Total New Not Used (Annualised)"
          value="$0"
          helperText="Actual fees received $0"
        />
        <MetricTile
          label="Conversion Rate"
          value="33%"
          helperText="1 of 3 opportunities"
        />
      </div>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Completed</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 w-10" />
                <th className="px-4 py-3 font-semibold">Client Name</th>
                <th className="px-4 py-3 font-semibold">Adviser</th>
                <th className="px-4 py-3 font-semibold">Engaged</th>
                <th className="px-4 py-3 font-semibold">Completed</th>
                <th className="px-4 py-3 font-semibold">FUM</th>
                <th className="px-4 py-3 font-semibold">Not Used</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="px-4 py-2" />
                <td className="px-4 py-2"><input type="text" placeholder="Search..." className="w-full rounded border border-slate-200 px-2 py-1 text-xs" /></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
              </tr>
            </thead>
            <tbody>
              {COMPLETED_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.clientName}</td>
                  <td className="px-4 py-3">{row.adviser}</td>
                  <td className="px-4 py-3">{row.engaged}</td>
                  <td className="px-4 py-3">{row.completed}</td>
                  <td className="px-4 py-3">{row.fum}</td>
                  <td className="px-4 py-3">{row.notUsed}</td>
                  <td className="px-4 py-3"><Badge variant="default" className="bg-blue-100 text-blue-800 border-0">{row.type}</Badge></td>
                  <td className="px-4 py-3"><Badge className="gap-1 bg-emerald-100 text-emerald-800 border-0"><span className="inline-block w-1 h-1 rounded-full bg-current" />{row.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">* Indicates client has paid a deposit/pre-payment</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Did Not Proceed</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 w-10" />
                <th className="px-4 py-3 font-semibold">Client Name</th>
                <th className="px-4 py-3 font-semibold">Adviser</th>
                <th className="px-4 py-3 font-semibold">Engaged</th>
                <th className="px-4 py-3 font-semibold">Closed</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="px-4 py-2" />
                <td className="px-4 py-2"><input type="text" placeholder="Search..." className="w-full rounded border border-slate-200 px-2 py-1 text-xs" /></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
              </tr>
            </thead>
            <tbody>
              {DNP_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.clientName}</td>
                  <td className="px-4 py-3">{row.adviser}</td>
                  <td className="px-4 py-3">{row.engaged}</td>
                  <td className="px-4 py-3">{row.closed}</td>
                  <td className="px-4 py-3"><Badge variant="secondary">{row.type}</Badge></td>
                  <td className="px-4 py-3"><Badge variant="destructive" className="gap-1 bg-red-50 text-red-700 border-0">✕ {row.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">* Indicates client has paid a deposit/pre-payment</p>
      </section>
    </div>
  );
}
