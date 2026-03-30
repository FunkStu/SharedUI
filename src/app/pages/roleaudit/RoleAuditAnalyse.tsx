import { Button, MetricTile, SharedBarChart } from "@audere-apps/ui";
import { Card, CardContent } from "../../components/ui/card";

const DISTRIBUTION_DATA = [
  { day: "Mon", improve: 8, priority: 0, focus: 0 },
  { day: "Tue", improve: 8, priority: 0, focus: 0 },
  { day: "Wed", improve: 5.7, priority: 2.3, focus: 0 },
  { day: "Thu", improve: 3.2, priority: 0, focus: 4.8 },
  { day: "Fri", improve: 0, priority: 0, focus: 8 },
  { day: "Sat", improve: 0, priority: 0, focus: 8 },
  { day: "Sun", improve: 0, priority: 0, focus: 8 },
];

export function RoleAuditAnalyse() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Time Breakdown Analysis</h1>
        <Button variant="outline" size="sm" className="border-slate-200">Reports ▾</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 bg-sky-50">
          <CardContent className="p-5">
            <p className="text-2xl font-bold text-sky-700">72.1</p>
            <p className="text-sm text-slate-600">hours/week</p>
            <p className="text-xs text-slate-500 mt-1">180% of 40hr FTE</p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-emerald-600 text-white">
          <CardContent className="p-5">
            <p className="text-2xl font-bold">40%</p>
            <p className="text-sm text-emerald-100">of total role</p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-blue-600 text-white">
          <CardContent className="p-5">
            <p className="text-2xl font-bold">8%</p>
            <p className="text-sm text-blue-100">of total role</p>
          </CardContent>
        </Card>
        <Card className="border-0 bg-red-600 text-white">
          <CardContent className="p-5">
            <p className="text-2xl font-bold">52%</p>
            <p className="text-sm text-red-100">of total role</p>
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Priority Distribution - Working Week</h2>
        <SharedBarChart
          data={DISTRIBUTION_DATA}
          dataKey="day"
          valueKeys={["improve", "priority", "focus"]}
          title=""
          height={280}
        />
        <div className="flex flex-wrap gap-6 mt-4 text-sm">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-red-500" /> Improve: 37.7h</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-blue-500" /> Priority: 5.5h</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-emerald-500" /> Focus: 28.9h</span>
        </div>
      </section>
    </div>
  );
}
