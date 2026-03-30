import { useState } from "react";
import { Button, SharedAreaChart, SharedBarChart, MetricTile } from "@audere-apps/ui";
import { RefreshCw, Save } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const DAILY_DATA = [
  { date: "2 Mar", impressions: 120, engagement: 45 },
  { date: "3 Mar", impressions: 180, engagement: 62 },
  { date: "4 Mar", impressions: 140, engagement: 38 },
  { date: "5 Mar", impressions: 220, engagement: 88 },
  { date: "6 Mar", impressions: 190, engagement: 55 },
  { date: "7 Mar", impressions: 260, engagement: 92 },
  { date: "8 Mar", impressions: 240, engagement: 78 },
];

const DECAY_DATA = [
  { period: "0-1h", pct: 45 },
  { period: "1-2h", pct: 25 },
  { period: "2-4h", pct: 15 },
  { period: "4-8h", pct: 8 },
  { period: "8-24h", pct: 5 },
  { period: "24-72h", pct: 2 },
];

const BEST_TIMES = [
  { slot: "Wed at 16:00", posts: 12, avg: "8.0" },
  { slot: "Mon at 11:00", posts: 8, avg: "6.2" },
  { slot: "Thu at 09:00", posts: 10, avg: "5.8" },
];

export function MarketosReview() {
  const [subTab, setSubTab] = useState("insights");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Analytics</h1>
          <p className="mt-1 text-slate-600">Track performance across your social media channels.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
          <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
            <Save className="h-4 w-4" /> Save Snapshot
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600 min-w-[140px]">
            <option>Stewart Bell</option>
          </select>
          <span className="text-slate-400">LinkedIn · YouTube · Twitter</span>
        </div>
        <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
          <option>All channels</option>
        </select>
        <select className="h-9 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {["Overview", "Posts", "Insights", "Followers"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setSubTab(t.toLowerCase())}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-md ${
              subTab === t.toLowerCase() ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SharedAreaChart
          data={DAILY_DATA}
          dataKey="date"
          valueKey="impressions"
          secondaryValueKey="engagement"
          title="Daily Performance"
          height={240}
        />
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Best Times to Post</h3>
            <p className="text-xs text-slate-500 mb-4">Optimal posting slots based on historical engagement.</p>
            <ul className="space-y-2 text-sm">
              {BEST_TIMES.map((t, i) => (
                <li key={i} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-700">{t.slot}</span>
                  <span className="text-slate-500">Based on {t.posts} posts · {t.avg} avg engagement</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <SharedBarChart
        data={DECAY_DATA}
        dataKey="period"
        valueKeys={["pct"]}
        title="Content Engagement Decay"
        height={220}
      />

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-1">Platform Breakdown</h3>
          <p className="text-xs text-slate-500 mb-4">Aggregate metrics by platform in selected date range.</p>
          <div className="flex gap-2 mb-4">
            <Button size="sm" className="bg-teal-600 text-white">LinkedIn</Button>
            <Button variant="outline" size="sm" className="border-slate-200">Twitter</Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <MetricTile label="Impressions" value="1,091" />
            <MetricTile label="Reach" value="651" />
            <MetricTile label="Likes" value="8" />
            <MetricTile label="Comments" value="3" />
            <MetricTile label="Shares" value="0" />
            <MetricTile label="Clicks" value="0" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
