import { Button } from "@audere/ui";
import { Calendar, Send, Target, FolderOpen, Wrench, Eye, Pencil, Share2, Trash2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const QUICK_ACCESS = [
  { label: "Audere Hub", href: "/" },
  { label: "Marketos", href: "/marketos" },
  { label: "Tools & Tech", href: "#tools" },
  { label: "Events", href: "#events" },
  { label: "Measurement", href: "#measurement" },
  { label: "Program Information", href: "#program" },
];

const SESSIONS = [
  { id: "1", date: "Feb 12, 2026", title: "Coaching Session", desc: "Reviewed Q1 goals and pipeline. Agreed next steps on delegation brief." },
  { id: "2", date: "Feb 5, 2026", title: "Check-in", desc: "Progress on Finsight rollout and training plan." },
];

const ACTION_ITEMS = [
  { id: "1", title: "Set up Training Channel", meta: "Brittany Mueller · Added Feb 12 · Due Feb 18" },
  { id: "2", title: "Schedule Copilot Session", meta: "Brittany Mueller, George Tsaidris · Added Feb 12 · Due Mar 11" },
];

const MODULES = [
  { name: "Role Audit", href: "#" },
  { name: "Delegation Brief", href: "#" },
  { name: "Integration Analysis", href: "#" },
  { name: "Transition Positioning", href: "#" },
];

const TOOLS = [
  { name: "Delegation Brief", href: "#" },
  { name: "Finsight", href: "/finsight" },
  { name: "Unity Blueprint", href: "#" },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-0 bg-slate-800 text-white shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div>
              <h1 className="text-2xl font-bold">Good morning, Stewart</h1>
              <p className="mt-2 text-slate-200 text-sm max-w-xl">
                Welcome to your Practice Evolution dashboard. Access session summaries, gameplan, learning modules, and tools all in one place.
              </p>
              <p className="mt-4 text-slate-300 text-sm">Monday 9 March 2026 – Sprint 1 Week 5</p>
              <Button variant="secondary" size="sm" className="mt-4 bg-white/10 hover:bg-white/20 text-white border-0">
                View Calendar
              </Button>
              <Button className="mt-6 bg-white text-slate-900 hover:bg-slate-100">Book Coaching Session</Button>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Quick Access</p>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_ACCESS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex flex-col items-center justify-center rounded-lg bg-slate-700/80 hover:bg-slate-600 py-4 px-3 text-center text-sm font-medium text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-slate-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Session Summaries</h2>
                </div>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">+ New Summary</Button>
              </div>
              <ul className="space-y-4">
                {SESSIONS.map((s) => (
                  <li key={s.id} className="flex items-start justify-between gap-4 py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <p className="text-xs text-slate-500">{s.date}</p>
                      <p className="font-medium text-slate-900">{s.title}</p>
                      <p className="text-sm text-slate-600 mt-0.5">{s.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Action Items</h2>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300" /> Toggle
                </label>
              </div>
              <ul className="space-y-3">
                {ACTION_ITEMS.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 py-2">
                    <input type="checkbox" className="mt-1 rounded border-slate-300" />
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.meta}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#completed" className="mt-3 inline-block text-sm font-medium text-teal-600 hover:text-teal-700">Show Completed</a>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Suggested Modules</h2>
                <Button size="sm" variant="outline" className="border-slate-200">+ Add</Button>
              </div>
              <ul className="space-y-2">
                {MODULES.map((m) => (
                  <li key={m.name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <a href={m.href} className="font-medium text-slate-900 hover:text-teal-600 flex items-center gap-2">
                      {m.name} <ExternalLink className="h-3.5 w-3 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Send className="h-5 w-5 text-slate-600" />
                <h2 className="text-lg font-semibold text-slate-900">Message Board</h2>
              </div>
              <div className="relative">
                <textarea placeholder="Write a message." className="w-full min-h-[80px] rounded-md border border-slate-200 px-3 py-2 text-sm resize-none" />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-500">0/280</span>
                  <Button size="sm" className="h-8"><Send className="h-4 w-4" /></Button>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500 text-center">No messages yet. Start the conversation!</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-slate-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Current GamePlan</h2>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
              </div>
              <p className="font-semibold text-slate-900">Advance 2026 GamePlan</p>
              <p className="text-sm text-slate-500 mt-0.5">Updated Feb 1, 2026</p>
              <a href="#gameplan" className="inline-flex items-center gap-1 mt-2 text-sm text-teal-600 hover:text-teal-700"><ExternalLink className="h-4 w-4" /></a>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5 text-slate-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Shared Folder</h2>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1 text-sm"><input type="checkbox" className="rounded border-slate-300" /> Toggle</label>
                  <Button variant="outline" size="sm" className="border-slate-200">Edit</Button>
                </div>
              </div>
              <a href="#folder" className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">Open Shared Folder <ExternalLink className="h-3.5 w-3" /></a>
              <p className="text-xs text-slate-500 mt-1">Access your private resources</p>
              <a href="#add" className="mt-3 inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"><FolderOpen className="h-4 w-4" /> Add Private Folder</a>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-slate-600" />
                  <h2 className="text-lg font-semibold text-slate-900">Tools & Tech</h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-slate-200">Custom</Button>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">+ Registry</Button>
                </div>
              </div>
              <ul className="space-y-2">
                {TOOLS.map((t) => (
                  <li key={t.name} className="flex items-center justify-between py-1.5">
                    <a href={t.href} className="text-sm font-medium text-slate-900 hover:text-teal-600 flex items-center gap-1">
                      {t.name} <ExternalLink className="h-3 w-3 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
