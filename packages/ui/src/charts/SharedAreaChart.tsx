import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./ChartContainer";

export type AreaChartDataItem = Record<string, string | number>;

export type SharedAreaChartProps = {
  data: AreaChartDataItem[];
  dataKey: string;
  valueKey: string;
  title?: string;
  height?: number;
  /** Optional second series key for stacked/dual area (e.g. inflow vs outflow) */
  secondaryValueKey?: string;
  fill?: string;
};

const DEFAULT_FILL = "#0f172a";
const SECONDARY_FILL = "#14b8a6";

export function SharedAreaChart({
  data,
  dataKey,
  valueKey,
  title,
  height = 260,
  secondaryValueKey,
  fill = DEFAULT_FILL,
}: SharedAreaChartProps) {
  return (
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
        >
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fill} stopOpacity={0.35} />
              <stop offset="95%" stopColor={fill} stopOpacity={0} />
            </linearGradient>
            {secondaryValueKey && (
              <linearGradient id="areaFillSecondary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={SECONDARY_FILL} stopOpacity={0.35} />
                <stop offset="95%" stopColor={SECONDARY_FILL} stopOpacity={0} />
              </linearGradient>
            )}
          </defs>
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
          />
          {secondaryValueKey && (
            <Area
              type="monotone"
              dataKey={secondaryValueKey}
              stroke={SECONDARY_FILL}
              strokeWidth={2}
              fill="url(#areaFillSecondary)"
            />
          )}
          <Area
            type="monotone"
            dataKey={valueKey}
            stroke={fill}
            strokeWidth={2}
            fill="url(#areaFill)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
