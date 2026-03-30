import { Button, DataTable } from "@audere/ui";

type BugRow = {
  id: string;
  title: string;
  date: string;
  app: string;
  description: string;
  reporter: string;
  status: string;
};

const BUGS: BugRow[] = [
  {
    id: "1",
    title: "Marketos confirmed",
    date: "14 Feb 2026",
    app: "Marketos",
    description: "Confirmed that Marketos now has bug reports ...",
    reporter: "stewart@audere.com.au",
    status: "Open",
  },
  {
    id: "2",
    title: "Confirmation that Role Audit bug rep...",
    date: "14 Feb 2026",
    app: "RoleAudit",
    description: "Confirmed RoleAudit item ...",
    reporter: "stewart@audere.com.au",
    status: "Open",
  },
  {
    id: "3",
    title: "Who am I logged in as?",
    date: "15 Jan 2026",
    app: "CoachAI",
    description: "Produced answer 'You are logged in as a user ...'",
    reporter: "stewart@audere.com.au",
    status: "Open",
  },
] as const;

export function HubBugs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Bug Reports</h1>
        <p className="mt-1 text-slate-600">
          Centralised bug reports from all Audere apps.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-xs text-slate-600">
        <div className="flex flex-wrap items-center gap-2">
          <select className="h-8 rounded-md border border-slate-200 bg-white px-2 pr-6 text-xs">
            <option>All Apps</option>
          </select>
          <select className="h-8 rounded-md border border-slate-200 bg-white px-2 pr-6 text-xs">
            <option>Active Only</option>
          </select>
          <input
            type="text"
            placeholder="Search title, email, description..."
            className="h-8 w-64 rounded-md border border-slate-200 px-3 text-xs placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-rose-600 font-medium">7 open</span>
          <Button variant="outline" size="sm" className="h-8 border-slate-200 text-xs">
            Refresh
          </Button>
          <Button size="sm" className="h-8 bg-slate-900 text-white hover:bg-slate-800 text-xs">
            + Report Bug
          </Button>
        </div>
      </div>

      <DataTable<BugRow>
        columns={[
          { key: "title", header: "Title", render: (row) => <span className="font-medium text-slate-900">{row.title}</span> },
          { key: "date", header: "Date" },
          {
            key: "app",
            header: "App",
            render: (row) => (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                {row.app}
              </span>
            ),
          },
          { key: "description", header: "Description" },
          { key: "reporter", header: "Reporter" },
          {
            key: "status",
            header: "Status",
            render: (row) => (
              <span className="inline-flex items-center rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700">
                {row.status}
              </span>
            ),
          },
        ]}
        rows={BUGS}
      />
    </div>
  );
}

