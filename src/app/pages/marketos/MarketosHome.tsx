import { Button, MetricTile, Badge } from "@audere/ui";
import { Send, Target, TrendingUp, HelpCircle, Calendar, Settings } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const TOPICS = [
  { id: "1", title: "The Hidden Cost of the 80% Completion Trap", status: "in progress" },
  { id: "2", title: "Why Hobby Horsing is the High-Intensity Exercise Yo..", status: "idea" },
  { id: "3", title: "The Founder Capacity Ceiling", status: "planned" },
];

const COMING_UP = [
  { date: "Sat 14 Mar 9:00 AM", title: "Why Your Tech Stack Thinks It's 2021", channel: "linkedin" },
  { date: "Mon 16 Mar 2:00 PM", title: "Coach AI pitch", channel: "linkedin" },
];

export function MarketosHome() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <Button className="mb-4 bg-teal-600 hover:bg-teal-700 text-white gap-2">
            Test ICP Segments
          </Button>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back, Stewart</h1>
          <p className="mt-1 text-slate-600">Here&apos;s what&apos;s happening across your accounts.</p>
        </div>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Send className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-slate-900">Posts to Review</h2>
          </div>
          <p className="text-slate-500 text-sm">No posts awaiting review — you&apos;re all caught up.</p>
          <a href="#pipeline" className="mt-3 inline-block text-sm font-medium text-teal-600 hover:text-teal-700">
            Go to Pipeline →
          </a>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-slate-900">Strategy Overview</h2>
          </div>
          <div className="space-y-2">
            <details className="group rounded-lg border border-slate-200 bg-slate-50/50">
              <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-sm font-medium text-slate-900 list-none">
                Niche Focus (5) <span className="text-slate-400 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-4 pb-3 space-y-1.5 text-sm text-slate-600">
                <p>The Overwhelmed Founder</p>
                <p>The Ambitious Scaler</p>
                <p>The Integrated Practice Stack</p>
              </div>
            </details>
            <details className="group rounded-lg border border-slate-200 bg-slate-50/50">
              <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-sm font-medium text-slate-900 list-none">
                Anchor Themes (5) <span className="text-slate-400 group-open:rotate-180">▼</span>
              </summary>
              <div className="px-4 pb-3 space-y-1.5 text-sm text-slate-600">
                <p>Profitability & Margin Engineering</p>
                <p>The Founder Capacity Ceiling</p>
              </div>
            </details>
          </div>
        </CardContent>
      </Card>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-teal-600" />
          <h2 className="text-lg font-semibold text-slate-900">Last 30 Days</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricTile label="TOTAL IMPRESSIONS" value="999" helperText="Across 3 profiles." />
          <MetricTile label="TOTAL ENGAGEMENT" value="11" helperText="Likes, comments, shares." />
          <MetricTile label="POSTS" value="4" helperText="Published in period." />
        </div>
        <a href="#analytics" className="mt-2 inline-block text-sm font-medium text-teal-600 hover:text-teal-700">
          Go to Analytics →
        </a>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-slate-900">Active Topics (7)</h2>
          </div>
          <ul className="space-y-3">
            {TOPICS.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-4 py-2 border-b border-slate-100 last:border-0">
                <span className="text-sm text-slate-700">{t.title}</span>
                <Badge
                  className={cn(
                    t.status === "in progress" && "bg-amber-100 text-amber-800 border-0",
                    t.status === "idea" && "bg-sky-100 text-sky-800 border-0",
                    t.status === "planned" && "bg-emerald-100 text-emerald-800 border-0",
                  )}
                >
                  {t.status}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-teal-600" />
            <h2 className="text-lg font-semibold text-slate-900">Coming Up (3)</h2>
          </div>
          <ul className="space-y-3">
            {COMING_UP.map((e, i) => (
              <li key={i} className="text-sm text-slate-600">
                <span className="font-medium text-slate-900">{e.date}</span> {e.title}{" "}
                <Badge variant="secondary" className="text-xs ml-1">{e.channel}</Badge>
              </li>
            ))}
          </ul>
          <a href="#plan" className="mt-3 inline-block text-sm font-medium text-teal-600 hover:text-teal-700">
            Go to Plan →
          </a>
        </CardContent>
      </Card>

      <div className="fixed bottom-8 right-8">
        <Button size="icon" className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg">
          <Settings className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
