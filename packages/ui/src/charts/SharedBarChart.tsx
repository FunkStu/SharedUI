import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ChartContainer } from "./ChartContainer";

export type BarChartDataItem = Record<string, string | number>;

export type SharedBarChartProps = {
  data: BarChartDataItem[];
  /** Key in each item for the category axis (e.g. "name", "month") */
  dataKey: string;
  /** Key(s) for the bar value(s). Single = one bar series, multiple = grouped/stacked */
  valueKeys?: string[];
  title?: string;
  height?: number;
  /** Optional reference line value (e.g. monthly target) */
  referenceLine?: { value: number; label?: string };
  /** Bar fill colour (default Audere teal) */
  fill?: string;
};

const DEFAULT_FILL = "#14b8a6";

export function SharedBarChart({
  data,
  dataKey,
  valueKeys = ["value"],
  title,
  height = 260,
  referenceLine,
  fill = DEFAULT_FILL,
}: SharedBarChartProps) {
  const colors = ["#14b8a6", "#0f172a", "#64748b", "#0d9488"];

  return (
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey={dataKey}
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
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              boxShadow: "0 1px 3px 0 rgb(15 23 42 / 0.08)",
              fontSize: "12px",
            }}
            cursor={{ fill: "var(--muted)" }}
          />
          {referenceLine != null && (
            <ReferenceLine
              y={referenceLine.value}
              stroke="#dc2626"
              strokeDasharray="4 4"
              label={{
                value: referenceLine.label ?? "Target",
                position: "right",
                fontSize: 11,
                fill: "#64748b",
              }}
            />
          )}
          {valueKeys.map((key, idx) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[idx % colors.length]}
              radius={[4, 4, 0, 0]}
              name={key.replace(/([A-Z])/g, " $1").trim()}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
