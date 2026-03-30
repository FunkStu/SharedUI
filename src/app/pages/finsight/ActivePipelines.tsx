import { useState } from "react";
import { Button, MetricTile, DataTable, Badge } from "@audere/ui";
import { Download, Save, Upload, Plus, Star } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const MOCK_PIPELINES = [
  { id: "1", starred: true, stage: "Discovery Meeting", clientName: "Cheung, H", adviser: "Simon Forbes", engaged: "Aug 2025", estCompletion: "Jan 2026", turnaround: "5m", adviceFee: "$12,400", ongoingFee: "$3,200", type: "New", source: "Ezy Mortgages" },
  { id: "2", starred: false, stage: "Awaiting Decision", clientName: "Fukushi, N & R", adviser: "Simon Forbes", engaged: "Sep 2025", estCompletion: "Mar 2026", turnaround: "6m", adviceFee: "$18,200", ongoingFee: "$4,100", type: "Existing", source: "Hansen Accountants" },
  { id: "3", starred: true, stage: "Fact Finding", clientName: "Patel, N", adviser: "Simon Forbes", engaged: "Oct 2025", estCompletion: "Dec 2025", turnaround: "2m", adviceFee: "$14,800*", ongoingFee: "$2,900", type: "New", source: "Direct" },
  { id: "4", starred: false, stage: "Discovery Meeting", clientName: "Williams, J", adviser: "Simon Forbes", engaged: "Nov 2025", estCompletion: "Feb 2026", turnaround: "3m", adviceFee: "$11,000", ongoingFee: "$2,500", type: "New", source: "Elian Carpenter" },
];

export function ActivePipelines() {
  const [sortBy, setSortBy] = useState("Stage");

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Pipelines</h1>
          <p className="mt-1 text-slate-600">Track and manage active client opportunities</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700">
            <Download className="h-4 w-4" /> Load
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700">
            <Save className="h-4 w-4" /> Save
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700">
            <Upload className="h-4 w-4" /> Import CSV
          </Button>
          <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
            <Plus className="h-4 w-4" /> Add New Client
          </Button>
        </div>
      </div>
      <a href="#sample-csv" className="text-sm text-teal-600 hover:text-teal-700 hover:underline">
        Download sample CSV
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Advice Fee</p>
                <p className="text-2xl font-bold text-slate-900">$56,800</p>
                <p className="text-xs text-slate-500 mt-0.5">Projected: $45,440</p>
              </div>
              <span className="text-slate-400 text-lg font-medium">$</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Ongoing Fee</p>
                <p className="text-2xl font-bold text-slate-900">$14,500</p>
                <p className="text-xs text-slate-500 mt-0.5">Projected: $11,600</p>
              </div>
              <span className="text-slate-400 text-lg font-medium">$</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Avg. Turnaround</p>
                <p className="text-2xl font-bold text-slate-900">7 months</p>
                <p className="text-xs text-slate-500 mt-0.5">Average completion time</p>
              </div>
              <span className="text-slate-400">🕐</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <h2 className="text-lg font-semibold text-slate-900">Active Pipeline</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Stage</option>
              <option>Client Name</option>
              <option>Est. Completion</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="px-4 py-3 w-10" />
                <th className="px-4 py-3 font-semibold">Stage</th>
                <th className="px-4 py-3 font-semibold">Client Name</th>
                <th className="px-4 py-3 font-semibold">Adviser</th>
                <th className="px-4 py-3 font-semibold">Engaged</th>
                <th className="px-4 py-3 font-semibold">Est. Completion</th>
                <th className="px-4 py-3 font-semibold">T/A</th>
                <th className="px-4 py-3 font-semibold">Advice Fee</th>
                <th className="px-4 py-3 font-semibold">Ongoing Fee</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="px-4 py-2" />
                <td className="px-4 py-2" />
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><input type="text" placeholder="Search..." className="w-full rounded border border-slate-200 px-2 py-1 text-xs" /></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
                <td className="px-4 py-2"><select className="w-full rounded border border-slate-200 bg-white px-2 py-1 text-xs"><option>All</option></select></td>
              </tr>
            </thead>
            <tbody>
              {MOCK_PIPELINES.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="px-4 py-3">
                    <button type="button" className="text-slate-400 hover:text-amber-500">
                      <Star className={cn("h-4 w-4", row.starred && "fill-red-500 text-red-500")} />
                    </button>
                  </td>
                  <td className="px-4 py-3"><Badge variant="default" className="bg-blue-100 text-blue-800 border-0">{row.stage}</Badge></td>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.clientName}</td>
                  <td className="px-4 py-3">{row.adviser}</td>
                  <td className="px-4 py-3">{row.engaged}</td>
                  <td className={cn("px-4 py-3", (row.estCompletion === "Jan 2026" || row.estCompletion === "Dec 2025") && "text-red-600 font-medium")}>{row.estCompletion}</td>
                  <td className="px-4 py-3">{row.turnaround}</td>
                  <td className="px-4 py-3">{row.adviceFee}</td>
                  <td className="px-4 py-3">{row.ongoingFee}</td>
                  <td className="px-4 py-3"><Badge variant="secondary">{row.type}</Badge></td>
                  <td className="px-4 py-3">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">* Indicates client has paid a deposit/pre-payment</p>
      </section>

      <div className="fixed bottom-8 right-8">
        <Button size="icon" className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg">
          <span className="sr-only">Chat</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2H16c0 2.21-1.79 4-4 4z"/></svg>
        </Button>
      </div>
    </div>
  );
}
