import {
  Button,
  MetricTile,
  SharedPieChart,
  SharedBarChart,
  CashflowChart,
} from "@audere-apps/ui";

// Sample data for Finsight dashboard charts
const referralSourceData = [
  { name: "Ezy Mortgages", value: 28 },
  { name: "Hansen Accountants", value: 22 },
  { name: "Elian Carpenter", value: 17 },
  { name: "Other Referrers", value: 18 },
  { name: "Direct", value: 15 },
];

const clientTriggerData = [
  { name: "Starting a family", value: 22 },
  { name: "Second Opinion", value: 17 },
  { name: "Inheritance", value: 13 },
  { name: "Retirement", value: 19 },
  { name: "Other", value: 29 },
];

const newClientNumbersData = [
  { month: "Aug 2025", clients: 4 },
  { month: "Sep 2025", clients: 6 },
  { month: "Oct 2025", clients: 5 },
  { month: "Nov 2025", clients: 8 },
  { month: "Dec 2025", clients: 7 },
];

const cashflowData = [
  { period: "Jul", inflow: 42_000, outflow: 38_000 },
  { period: "Aug", inflow: 48_000, outflow: 44_000 },
  { period: "Sep", inflow: 51_000, outflow: 47_000 },
  { period: "Oct", inflow: 55_000, outflow: 52_000 },
  { period: "Nov", inflow: 62_000, outflow: 58_000 },
  { period: "Dec", inflow: 58_000, outflow: 54_000 },
];

export function Finsight() {
  return (
    <div className="space-y-8">
      {/* Page title - blueprint */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="mt-1 text-slate-600">
          Overview of your pipeline performance and revenue metrics
        </p>
      </div>

      {/* Dashboard-level filters - shared Button */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Fee Calculation:</span>
          <Button variant="outline" size="sm" className="h-8 border-slate-200 text-slate-700 bg-white">
            Median
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Conversion Rate:</span>
          <Button variant="outline" size="sm" className="h-8 border-slate-200 text-slate-700 bg-white">
            Estimated (80%)
          </Button>
        </div>
      </div>

      {/* Key metric cards - shared MetricTile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricTile
          label="Projected"
          value="$754,737"
          helperText="108% of target"
        />
        <MetricTile
          label="Completed"
          value="$106,717"
        />
        <MetricTile
          label="Active Opportunities"
          value="7"
          helperText="in pipeline stages"
        />
      </div>

      {/* Referral Source & Client Trigger Breakdown - same row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Referral Source Breakdown</h2>
          <SharedPieChart
            data={referralSourceData}
            title=""
            valueLabel="Referrals"
            height={280}
          />
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Client Trigger Breakdown</h2>
          <SharedPieChart
            data={clientTriggerData}
            title=""
            valueLabel="Clients"
            height={280}
          />
        </section>
      </div>

      {/* New Client Numbers - shared bar chart */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">New Client Numbers</h2>
        <SharedBarChart
          data={newClientNumbersData}
          dataKey="month"
          valueKeys={["clients"]}
          title=""
          height={260}
          referenceLine={{ value: 6, label: "Monthly target" }}
        />
      </section>

      {/* Client Metrics - 6 tiles using shared MetricTile */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Client Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <MetricTile label="Median Advice Fee" value="$6,300" helperText="Active & Completed ($50k)" />
          <MetricTile label="Median Ongoing Fee" value="$2,900" helperText="New clients only (>5k)" />
          <MetricTile label="New Clients (Completed)" value="7" helperText="New clients only" />
          <MetricTile label="New Clients (Projected)" value="12" helperText="Based on 80% conversion" />
          <MetricTile label="New Advice (Completed)" value="4" helperText="Existing clients only" />
          <MetricTile label="New Advice (Projected)" value="5" helperText="Existing clients only" />
        </div>
      </section>

      {/* Cashflow - shared CashflowChart */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Cashflow</h2>
        <CashflowChart
          data={cashflowData}
          title=""
          height={260}
          currency="£"
        />
      </section>
    </div>
  );
}
