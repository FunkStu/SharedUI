import { Badge, Button, Input, MetricTile, DataTable, InsightCard, SharedPieChart, SharedBarChart, SharedAreaChart, CashflowChart } from "@audere/ui";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { TrendingUp, TrendingDown, AlertCircle, Clock, Filter, Download, Plus, ArrowRight, Target } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const performanceData = [
  { name: 'Jan', revenue: 4000, margin: 2400 },
  { name: 'Feb', revenue: 3000, margin: 1398 },
  { name: 'Mar', revenue: 2000, margin: 9800 },
  { name: 'Apr', revenue: 2780, margin: 3908 },
  { name: 'May', revenue: 1890, margin: 4800 },
  { name: 'Jun', revenue: 2390, margin: 3800 },
  { name: 'Jul', revenue: 3490, margin: 4300 },
];

const sharedPieData = [
  { name: "Category A", value: 40 },
  { name: "Category B", value: 30 },
  { name: "Category C", value: 20 },
  { name: "Other", value: 10 },
];
const sharedBarData = [
  { month: "Jan", value: 24 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 32 },
  { month: "Apr", value: 28 },
];
const sharedAreaData = [
  { period: "Q1", value: 120 },
  { period: "Q2", value: 145 },
  { period: "Q3", value: 138 },
  { period: "Q4", value: 165 },
];
const sharedCashflowData = [
  { period: "Jan", inflow: 50_000, outflow: 42_000 },
  { period: "Feb", inflow: 48_000, outflow: 45_000 },
  { period: "Mar", inflow: 55_000, outflow: 50_000 },
];

const tableData = [
  { id: "1", client: "Acme Corp", aum: "$2.4M", status: "Active", risk: "Low", lastReview: "12 Oct 2023" },
  { id: "2", client: "Globex Inc", aum: "$1.1M", status: "Review", risk: "Medium", lastReview: "05 Nov 2023" },
  { id: "3", client: "Stark Industries", aum: "$8.9M", status: "Active", risk: "High", lastReview: "28 Jan 2024" },
  { id: "4", client: "Wayne Enterprises", aum: "$5.2M", status: "Onboarding", risk: "Low", lastReview: "Pending" },
];

export function DashboardData() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard & Data</h1>
        <p className="mt-2 text-lg text-slate-600">
          KPI metrics, charts, tables, and data-dense views prioritising analytical readability.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">KPI Metric Variants</h2>
          <p className="mt-2 text-sm text-slate-500">Essential metric tiles for diverse SaaS dashboard use-cases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <MetricTile label="Total AUM" value="$18.4M" helperText="Across 142 clients" />
          <MetricTile
            label="Revenue"
            value="$2.4M"
            helperText="vs last year ($2.1M)"
            trend={
              <span className="flex items-center text-xs font-medium text-emerald-600">
                <TrendingUp className="mr-0.5 h-3 w-3" /> +12.3%
              </span>
            }
          />
          <MetricTile
            label="Active Clients"
            value="142"
            helperText="Trending upwards"
            trend={
              <span className="flex items-center text-xs font-medium text-emerald-600">
                <TrendingUp className="mr-1 h-3 w-3" /> Trending upwards
              </span>
            }
          />
          <MetricTile
            label="Target Revenue"
            value="$2.4M / $3.0M"
            helperText="80% of target"
          />
          <MetricTile
            label="Avg Margin"
            value="32.4%"
            helperText="Last 12 months"
            trend={
              <span className="flex items-center text-xs font-medium text-amber-600">
                <TrendingDown className="mr-1 h-3 w-3" /> Slightly down
              </span>
            }
          />
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Chart Containers</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs key="defs">
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0f172a" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis key="xaxis" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                    <YAxis key="yaxis" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                    <RechartsTooltip 
                      key="tooltip"
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                    />
                    <Area key="area" type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Profit Margins</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis key="xaxis" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                    <YAxis key="yaxis" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} />
                    <RechartsTooltip 
                      key="tooltip"
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                    />
                    <Bar key="bar" dataKey="margin" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Shared chart components</h2>
          <p className="mt-2 text-sm text-slate-500">
            Reusable <code className="rounded bg-slate-100 px-1 text-xs">@audere/ui</code> charts: pie, bar, area, and cashflow. Used in Finsight and any dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SharedPieChart data={sharedPieData} title="Pie — Distribution" valueLabel="Count" height={260} />
          <SharedBarChart data={sharedBarData} dataKey="month" valueKeys={["value"]} title="Bar — Monthly" referenceLine={{ value: 25, label: "Target" }} height={240} />
          <SharedAreaChart data={sharedAreaData} dataKey="period" valueKey="value" title="Area — Trend" height={240} />
          <CashflowChart data={sharedCashflowData} title="Cashflow — Net" currency="£" height={240} />
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Professional Data Table</h2>
        </div>

        <Card>
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Input placeholder="Filter clients..." className="w-full sm:w-64 h-9" />
              <Button variant="outline" size="sm" className="h-9 gap-2 border-slate-200 text-slate-600 bg-white hover:bg-slate-50">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
            <Button size="sm" className="h-9 gap-2 w-full sm:w-auto"><Plus className="h-4 w-4" /> Add Client</Button>
          </div>
          <DataTable
            columns={[
              { key: "client", header: "Client Name" },
              { key: "aum", header: "AUM" },
              {
                key: "status",
                header: "Status",
                render: (row) => (
                  <Badge
                    variant={
                      row.status === "Active"
                        ? "success"
                        : row.status === "Review"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {row.status}
                  </Badge>
                ),
              },
              {
                key: "risk",
                header: "Risk Profile",
                render: (row) => (
                  <span
                    className={`flex items-center gap-1.5 ${
                      row.risk === "High"
                        ? "text-red-600"
                        : row.risk === "Medium"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        row.risk === "High"
                          ? "bg-red-600"
                          : row.risk === "Medium"
                          ? "bg-amber-600"
                          : "bg-emerald-600"
                      }`}
                    />
                    {row.risk}
                  </span>
                ),
              },
              { key: "lastReview", header: "Last Review" },
              {
                key: "id",
                header: "Actions",
                render: () => (
                  <div className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                    >
                      View
                    </Button>
                  </div>
                ),
              },
            ]}
            rows={tableData}
          />
          <div className="p-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
            <span>Showing 1 to 4 of 4 entries</span>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0" disabled>1</Button>
            </div>
          </div>
        </Card>
      </section>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Insight & Alert Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InsightCard
            title="Margin Alert: Advisory Fees"
            tone="warning"
            icon={<AlertCircle className="h-4 w-4 text-amber-600" />}
          >
            <p className="mt-1 text-sm text-slate-600">
              Advisory service margins have dropped below 30% for the second consecutive
              month. Consider reviewing pricing model.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 -ml-2 text-amber-700 hover:bg-amber-50 hover:text-amber-800"
            >
              Review Pricing
            </Button>
          </InsightCard>

          <InsightCard
            title="Upcoming Client Reviews"
            tone="neutral"
            icon={<Clock className="h-4 w-4 text-slate-600" />}
          >
            <p className="mt-1 text-sm text-slate-600">
              You have 4 client reviews scheduled for this week. Capacity analysis
              indicates you have sufficient preparation time.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 -ml-2 text-slate-700 hover:bg-slate-100"
            >
              View Schedule
            </Button>
          </InsightCard>
        </div>
      </section>
    </div>
  );
}
