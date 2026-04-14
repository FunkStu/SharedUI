import type { ReactNode } from "react";
import {
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer } from "./ChartContainer";

export type SharedLineXAxisTickDef = { value: number; label: string };

function CompressedTimelineTooltip({
  active,
  payload,
  yTickFormatter,
  yearKey,
  titleKey,
}: {
  active?: boolean;
  payload?: ReadonlyArray<{
    name?: string | number;
    value?: unknown;
    color?: string;
    payload?: Record<string, unknown>;
  }>;
  yTickFormatter: (n: number) => string;
  yearKey: string;
  /** When set, row[`titleKey`] is the full tooltip title line (else `Year {row[yearKey]}`). */
  titleKey?: string;
}): ReactNode {
  if (!active || !payload?.length) return null;
  const row = payload[0]?.payload;
  const yearVal = row?.[yearKey];
  const yearLabel = yearVal != null ? String(yearVal) : "";
  const titleFromRow =
    titleKey && row?.[titleKey] != null && String(row[titleKey]).length > 0
      ? String(row[titleKey])
      : null;
  const titleLine = titleFromRow ?? `Year ${yearLabel}`;
  return (
    <div
      className="rounded-lg border border-border bg-card px-3 py-2 text-card-foreground shadow-sm"
      style={{ fontSize: 12 }}
    >
      <div className="mb-1.5 text-xs font-semibold">{titleLine}</div>
      <div className="space-y-0.5 text-xs text-muted-foreground">
        {payload.map((p, idx) => {
          const v = Array.isArray(p.value) ? p.value[0] : p.value;
          const display =
            v === null || v === undefined || Number.isNaN(Number(v))
              ? "—"
              : yTickFormatter(Number(v));
          return (
            <div key={idx} className="flex justify-between gap-4">
              <span style={{ color: p.color }}>{p.name != null ? String(p.name) : ""}</span>
              <span className="font-medium text-foreground tabular-nums">{display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export type SharedLineSeries = {
  dataKey: string;
  name: string;
  /** Stroke colour for the series line */
  color: string;
  /** When false (default), gaps in data (e.g. `null`) break the line. */
  connectNulls?: boolean;
  /**
   * Recharts interpolation. Default `monotone` can overshoot on sharp value changes; use `linear` for
   * piecewise-linear finance series.
   */
  lineType?: "linear" | "monotone" | "step" | "stepBefore" | "stepAfter";
  /**
   * When set, each row may include this string field with label text at the point (empty omits).
   * Not an extra series — uses Recharts LabelList on the same line.
   */
  pointLabelField?: string;
  /** Position for `pointLabelField` labels. Default `top`. */
  pointLabelPosition?: "top" | "bottom" | "left" | "right";
  /** Pixel offset from the point for `pointLabelField`. Default 8. */
  pointLabelOffset?: number;
  /** Font size (px) for `pointLabelField`. Default 10. */
  pointLabelFontSize?: number;
  /** Second label field (e.g. mid‑chart caption) on the same line. */
  pointLabel2Field?: string;
  pointLabel2Position?: "top" | "bottom" | "left" | "right";
  pointLabel2Offset?: number;
  pointLabel2FontSize?: number;
};

export type SharedLineChartProps = {
  data: Record<string, string | number | null>[];
  xDataKey: string;
  series: SharedLineSeries[];
  title?: string;
  height?: number;
  xLabel?: string;
  yTickFormatter?: (value: number) => string;
  /** Vertical marker on the X axis (numeric or string key matching data) */
  referenceX?: string | number;
  referenceXLabel?: string;
  /**
   * Recharts label position for `referenceXLabel` (e.g. `insideBottom` keeps the title off crowded top callouts).
   * Default `top`.
   */
  referenceXLabelPosition?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "insideTop"
    | "insideBottom"
    | "insideLeft"
    | "insideRight";
  /** Pixel offset for the reference label. Default 8. */
  referenceXLabelOffset?: number;
  /** When set, other series are dimmed; click legend or line to toggle selection. */
  selectedSeriesKey?: string | null;
  onSelectedSeriesKeyChange?: (key: string | null) => void;
  /** Opacity for non-selected series when `selectedSeriesKey` is set (default 0.18). */
  dimOpacity?: number;
  /** When set, X axis uses these positions and labels (e.g. compressed calendar timeline). */
  xAxisTickDefs?: SharedLineXAxisTickDef[];
  /** If set with `xAxisTickDefs`, tooltip uses this row field after `Year ` unless `tooltipTitleKey` is set. */
  tooltipYearKey?: string;
  /** Row field for the full tooltip title line (e.g. preformatted age line). */
  tooltipTitleKey?: string;
  /** Top margin inside the plot (e.g. room for `LabelList` above points). Default 8. */
  topMargin?: number;
  /** Right margin inside the plot (e.g. room for `LabelList` right of a reference line). Default 16. */
  marginRight?: number;
};

export function SharedLineChart({
  data,
  xDataKey,
  series,
  title,
  height = 320,
  xLabel,
  yTickFormatter = (v) => v.toLocaleString(),
  referenceX,
  referenceXLabel,
  referenceXLabelPosition = "top",
  referenceXLabelOffset = 8,
  selectedSeriesKey = null,
  onSelectedSeriesKeyChange,
  dimOpacity = 0.18,
  xAxisTickDefs,
  tooltipYearKey,
  tooltipTitleKey,
  topMargin = 8,
  marginRight = 16,
}: SharedLineChartProps) {
  const toggleKey = (key: string) => {
    if (!onSelectedSeriesKeyChange) return;
    onSelectedSeriesKeyChange(selectedSeriesKey === key ? null : key);
  };

  /** Room for tick labels, X-axis title, gap, then legend (may wrap on narrow widths). */
  const bottomMargin = xLabel ? 128 : 52;

  return (
    <ChartContainer title={title} height={height}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: topMargin, right: marginRight, bottom: bottomMargin, left: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="hsl(var(--border))"
          />
          <XAxis
            dataKey={xDataKey}
            type="number"
            domain={xAxisTickDefs?.length ? [0, 1] : ["dataMin", "dataMax"]}
            ticks={xAxisTickDefs?.map((d) => d.value)}
            tickFormatter={
              xAxisTickDefs?.length
                ? (v: number) =>
                    xAxisTickDefs.find((d) => Math.abs(d.value - v) < 1e-5)?.label ?? ""
                : undefined
            }
            allowDecimals
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            label={
              xLabel
                ? {
                    value: xLabel,
                    position: "bottom",
                    offset: 10,
                    fontSize: 11,
                    fill: "hsl(var(--muted-foreground))",
                  }
                : undefined
            }
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickFormatter={yTickFormatter}
            width={56}
          />
          {tooltipYearKey ? (
            <Tooltip
              content={({ active, payload }) => (
                <CompressedTimelineTooltip
                  active={active}
                  payload={payload}
                  yTickFormatter={yTickFormatter}
                  yearKey={tooltipYearKey}
                  titleKey={tooltipTitleKey}
                />
              )}
            />
          ) : (
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
                color: "hsl(var(--card-foreground))",
                fontSize: "12px",
              }}
              formatter={(value, name) => {
                const v = Array.isArray(value) ? value[0] : value;
                if (v === null || v === undefined || Number.isNaN(Number(v))) {
                  return ["—", name];
                }
                return [yTickFormatter(Number(v)), name];
              }}
            />
          )}
          {series.map((s) => {
            const active =
              selectedSeriesKey === null || selectedSeriesKey === s.dataKey;
            const opacity = active ? 1 : dimOpacity;
            return (
              <Line
                key={s.dataKey}
                type={s.lineType ?? "monotone"}
                dataKey={s.dataKey}
                name={s.name}
                stroke={s.color}
                strokeOpacity={opacity}
                strokeWidth={selectedSeriesKey === s.dataKey ? 3 : 2}
                dot={false}
                connectNulls={s.connectNulls === true}
                style={{ cursor: onSelectedSeriesKeyChange ? "pointer" : undefined }}
                onClick={
                  onSelectedSeriesKeyChange
                    ? () => toggleKey(s.dataKey)
                    : undefined
                }
              >
                {s.pointLabelField ? (
                  <LabelList
                    dataKey={s.pointLabelField}
                    position={s.pointLabelPosition ?? "top"}
                    offset={s.pointLabelOffset ?? 8}
                    formatter={(v: string | number | undefined) =>
                      v == null || v === "" ? null : String(v)
                    }
                    style={{
                      fontSize: s.pointLabelFontSize ?? 10,
                      fontWeight: 600,
                      fill: s.color,
                    }}
                  />
                ) : null}
                {s.pointLabel2Field ? (
                  <LabelList
                    dataKey={s.pointLabel2Field}
                    position={s.pointLabel2Position ?? "bottom"}
                    offset={s.pointLabel2Offset ?? 8}
                    formatter={(v: string | number | undefined) =>
                      v == null || v === "" ? null : String(v)
                    }
                    style={{
                      fontSize: s.pointLabel2FontSize ?? 10,
                      fontWeight: 600,
                      fill: s.color,
                    }}
                  />
                ) : null}
              </Line>
            );
          })}
          {referenceX !== undefined ? (
            <ReferenceLine
              x={referenceX}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="4 4"
              label={
                referenceXLabel
                  ? {
                      value: referenceXLabel,
                      position: referenceXLabelPosition,
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 11,
                      fontWeight: 600,
                      offset: referenceXLabelOffset,
                    }
                  : undefined
              }
            />
          ) : null}
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            wrapperStyle={{
              fontSize: 12,
              lineHeight: 1.35,
              width: "100%",
              paddingTop: xLabel ? 10 : 6,
              paddingBottom: 4,
              top: "auto",
              bottom: 0,
              left: 0,
              right: 0,
              cursor: onSelectedSeriesKeyChange ? "pointer" : undefined,
            }}
            onClick={
              onSelectedSeriesKeyChange
                ? (e) => {
                    const key = typeof e.dataKey === "string" ? e.dataKey : String(e.dataKey ?? "");
                    if (key) toggleKey(key);
                  }
                : undefined
            }
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
