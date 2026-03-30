import { useState } from "react";
import { Button, Badge } from "@audere/ui";
import { AlertTriangle, Sparkles, Plus, Archive, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const TABS = [
  { value: "niche", label: "Niche Focus" },
  { value: "research", label: "Research Reports" },
  { value: "language", label: "Market Language" },
  { value: "themes", label: "Themes" },
  { value: "topics", label: "Topics" },
];

const ANCHOR_THEMES = [
  { id: "1", name: "The Integrated Practice Stack", desc: "Unified tech and advice delivery for modern practices.", niche: "+ Niche" },
  { id: "2", name: "Profitability & Margin Engineering", desc: "Pricing, efficiency and margin improvement strategies." },
  { id: "3", name: "The Founder Capacity Ceiling", desc: "Scaling beyond the founder bottleneck." },
  { id: "4", name: "The new marketing paradigm", desc: "From broadcast to trust-based content and referrals." },
  { id: "5", name: "Hobby horsing", desc: "Light-touch theme for engagement and reach." },
];

export function MarketosPlan() {
  const [activeTab, setActiveTab] = useState("themes");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Plan</h1>
        <p className="mt-1 text-slate-600">Plan and organise your content strategy.</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-t-md transition-colors",
              activeTab === tab.value
                ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px"
                : "text-slate-600 hover:bg-slate-50",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "themes" && (
        <>
          <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-900">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
            Maximum 5 active themes reached. Archive a theme to add a new one.
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-slate-900">Suggest Themes from Research</h2>
              </div>
              <p className="text-sm text-slate-500 mb-3">Research Report (optional - improves suggestions)</p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-64">
                  <select className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600 appearance-none pr-8">
                    <option>Select a report...</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">▼</span>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
                  <Sparkles className="h-4 w-4" /> Suggest Themes
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-900">Anchor Themes (5/5)</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700">
                <Archive className="h-4 w-4" /> Archived (10)
              </Button>
              <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="h-4 w-4" /> Add Manually
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {ANCHOR_THEMES.map((theme) => (
              <Card key={theme.id} className="border-slate-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-slate-900">{theme.name}</h3>
                        <Badge className="bg-emerald-100 text-emerald-800 border-0">Active</Badge>
                        <Badge variant="secondary">AI</Badge>
                      </div>
                      <p className="text-sm text-slate-600">{theme.desc}</p>
                      {theme.niche && (
                        <p className="text-xs text-slate-500 mt-2">→ Audere Adviser OS & Practice Success Portal {theme.niche}</p>
                      )}
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-700">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {activeTab !== "themes" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-8 text-center text-slate-500 text-sm">
            Content for &quot;{TABS.find((t) => t.value === activeTab)?.label}&quot; — coming soon.
          </CardContent>
        </Card>
      )}

      <div className="fixed bottom-8 right-8">
        <Button size="icon" className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg">
          <span className="sr-only">Feedback</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </Button>
      </div>
    </div>
  );
}
