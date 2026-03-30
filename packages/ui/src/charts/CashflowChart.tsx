import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ChartContainer } from "./ChartContainer";

export type CashflowChartDataItem = {
  /** Period label (e.g. "Jan", "Q1") */
  period: string;
  /** Inflow amount */
  inflow: number;
  /** Outflow amount */
  outflow: number;
  /** Optional net (inflow - outflow); computed if not provided */
  net?: number;
};

export type CashflowChartProps = {
  data: CashflowChartDataItem[];
  title?: string;
  height?: number;
  /** Currency or unit for tooltip (e.g. "£", "$") */
  currency?: string;
};

function formatValue(value: number, currency = ""): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "−" : "";
  if (abs >= 1_000_000) return `${sign}${currency}${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}${currency}${(abs / 1_000).toFixed(1)}k`;
  return `${sign}${currency}${abs.toLocaleString()}`;
}

export function CashflowChart({
  data,
  title,
  height = 260,
  currency = "£",
}: CashflowChartProps) {
  const series = data.map((d) => ({
    ...d,
    net: d.net ?? d.inflow - d.outflow,
  }));

  return (
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={series}
          margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <defs>
            <linearGradient id="cashflowNet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="period"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
            dx={-8}
            tickFormatter={(v) => formatValue(v, currency)}
          />
          <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="2 2" />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px 0 rgb(15 23 42 / 0.08)",
              fontSize: "12px",
            }}
            formatter={(value: any, name: any) => [
              formatValue(Number(value), currency),
              name === "inflow" ? "Inflow" : name === "outflow" ? "Outflow" : "Net",
            ]}
            labelFormatter={(label) => `Period: ${label}`}
            content={({ active, payload, label }: any) => {
              if (!active || !payload?.length || !label) return null;
              const row = series.find((d) => d.period === label);
              return (
                <div className="rounded-lg border border-border bg-card px-3 py-2 text-card-foreground shadow-sm">
                  <div className="mb-1.5 text-xs font-semibold">{label}</div>
                  {row && (
                    <div className="grid grid-cols-1 gap-0.5 text-xs text-muted-foreground">
                      <span>Inflow: {formatValue(row.inflow, currency)}</span>
                      <span>Outflow: {formatValue(row.outflow, currency)}</span>
                      <span className="font-medium text-foreground">
                        Net: {formatValue(row.net ?? row.inflow - row.outflow, currency)}
                      </span>
                    </div>
                  )}
                </div>
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="net"
            stroke="#14b8a6"
            strokeWidth={2}
            fill="url(#cashflowNet)"
            name="net"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
