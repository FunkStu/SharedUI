import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./ChartContainer";

const AUDERE_CHART_COLORS = [
  "#0f172a", // navy900
  "#14b8a6", // teal500
  "#64748b", // slate-500
  "#0d9488", // teal-600
  "#94a3b8", // slate-400
  "#2dd4bf", // teal-400
];

export type PieChartDataItem = {
  name: string;
  value: number;
};

export type SharedPieChartProps = {
  data: PieChartDataItem[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  /** Name of the value field for tooltip (e.g. "Clients", "Revenue") */
  valueLabel?: string;
};

export function SharedPieChart({
  data,
  title,
  height = 280,
  showLegend = true,
  valueLabel = "Value",
}: SharedPieChartProps) {
  return (
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={AUDERE_CHART_COLORS[index % AUDERE_CHART_COLORS.length]}
                stroke="white"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [value, valueLabel]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              boxShadow: "0 1px 3px 0 rgb(15 23 42 / 0.08)",
              fontSize: "12px",
            }}
            labelStyle={{ color: "var(--foreground)", fontWeight: 600 }}
          />
          {showLegend && (
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value: string, entry: any) => (
                <span className="text-xs text-muted-foreground">
                  {value}
                  {entry?.payload?.payload?.value != null && ` (${entry.payload.payload.value})`}
                </span>
              )}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
