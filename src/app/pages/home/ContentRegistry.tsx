import { Button, DataTable, Badge } from "@audere/ui";
import { Library, Download, Upload, Search } from "lucide-react";

const REGISTRY_ROWS = [
  { id: "1", title: "ADKAR Analysis Worksheet", type: "Worksheet", category: "Change Management", source: "Fusebase", description: "Structured worksheet for ADKAR assessment." },
  { id: "2", title: "ADKAR Framework", type: "Tool", category: "Change Management", source: "Fusebase", description: "Reference guide for the ADKAR model." },
  { id: "3", title: "Integration Analysis Tool", type: "Tool", category: "Operations", source: "Fusebase", description: "Analyse integration points and dependencies." },
  { id: "4", title: "Transition Positioning", type: "Template", category: "Strategy", source: "Fusebase", description: "Template for transition messaging." },
  { id: "5", title: "Unity Blueprint", type: "Template", category: "Strategy", source: "Fusebase", description: "Blueprint for unified practice positioning." },
];

export function ContentRegistry() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Library className="h-6 w-6 text-slate-600" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Content Registry</h1>
            <p className="mt-1 text-slate-600">Global library of modules and tools for assignment.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 border-slate-200">
            <Download className="h-4 w-4" /> Sample CSV
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-slate-200">
            <Upload className="h-4 w-4" /> Import
          </Button>
          <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">+ Add item</Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title or description..."
            className="w-full h-9 pl-9 pr-3 rounded-md border border-slate-200 text-sm"
          />
        </div>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>All Types</option></select>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>All Sources</option></select>
        <select className="h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-600"><option>Change...</option></select>
        <Button variant="ghost" size="sm" className="text-slate-500">✕ Clear</Button>
      </div>

      <p className="text-sm text-slate-500">Showing 6 of 239 items</p>

      <DataTable
        columns={[
          { key: "title", header: "Title", render: (row) => (
            <a href="#" className="font-medium text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
              {row.title} <span className="text-slate-400">↗</span>
            </a>
          )},
          { key: "type", header: "Type" },
          { key: "category", header: "Category" },
          { key: "source", header: "Source", render: (row) => <Badge className="bg-sky-100 text-sky-800 border-0">{row.source}</Badge> },
          { key: "description", header: "Description" },
          { key: "id", header: "Actions", render: () => <button type="button" className="text-slate-400 hover:text-slate-600">⋯</button> },
        ]}
        rows={REGISTRY_ROWS}
      />
    </div>
  );
}
