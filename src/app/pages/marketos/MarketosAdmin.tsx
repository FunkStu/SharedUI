import { useState } from "react";
import { Button, Badge } from "@audere/ui";
import { Save } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const ADMIN_TABS = ["Users", "Connections", "Agents", "AI", "Platform Rules", "Style Rules"];

const MODEL_ROWS = [
  { id: "1", name: "Research - Query Planning", tags: ["Lovable AI", "Default"], desc: "Plans research queries from briefs.", action: "generate-research-report (Stage 1a)", model: "Gemini 2.5 Pro (Premium)" },
  { id: "2", name: "Niche Focus Suggestions", tags: ["Lovable AI"], desc: "Suggests niche focus areas from research.", action: "suggest-niche-focuses", model: "Sonar Pro (Balanced)" },
  { id: "3", name: "ICP Segment Generation", tags: ["Perplexity", "Default"], desc: "Generates ICP segments from themes.", action: "generate-icp-segments", model: "GPT-6.2 (Premium)" },
];

const API_ROWS = [
  { id: "1", name: "OpenAI", desc: "Research Reports (analysis & writing), AI Agents (when configured).", status: "Connected", key: "-JUSA" },
  { id: "2", name: "Anthropic", desc: "Content generation and guardrails.", status: "Connected", key: "-GBSV" },
  { id: "3", name: "Google AI", desc: "Gemini models for research and suggestions.", status: "Connected", key: "-cell2" },
  { id: "4", name: "Perplexity", desc: "Search-augmented research.", status: "Connected", key: "-2345" },
];

export function MarketosAdmin() {
  const [activeTab, setActiveTab] = useState("AI");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin</h1>
        <p className="mt-1 text-slate-600">Cross-workspace administration</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {ADMIN_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-md ${
              activeTab === tab ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "AI" && (
        <>
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Model Assignment</h2>
                <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
                  <Save className="h-4 w-4" /> Save
                </Button>
              </div>
              <div className="space-y-4">
                {MODEL_ROWS.map((row) => (
                  <div key={row.id} className="flex flex-wrap items-center gap-3 py-4 border-b border-slate-100 last:border-0">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-900">{row.name}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {row.tags.map((t) => (
                          <Badge key={t} className={t === "Default" ? "bg-slate-800 text-white border-0" : "bg-sky-100 text-sky-800 border-0"}>
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500 mt-1">{row.desc}</p>
                      <Button variant="outline" size="sm" className="mt-2 h-7 text-xs border-slate-200 text-slate-600">
                        {row.action}
                      </Button>
                    </div>
                    <select className="h-9 min-w-[180px] rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
                      <option>{row.model}</option>
                    </select>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900">API Keys</h2>
                <span className="text-sm text-slate-500">4/4 configured</span>
              </div>
              <div className="space-y-4">
                {API_ROWS.map((row) => (
                  <div key={row.id} className="flex flex-wrap items-center gap-3 py-4 border-b border-slate-100 last:border-0">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-900">{row.name}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{row.desc}</p>
                      <Button variant="outline" size="sm" className="mt-2 h-7 text-xs border-slate-200 text-slate-600">
                        Research Reports (analysis & writing)
                      </Button>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 border-0 shrink-0">Connected</Badge>
                    <span className="text-xs text-slate-400">…{row.key}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                API keys are securely stored as backend secrets and are never exposed to the browser. Model assignments are saved to system settings and read by backend functions at runtime.
              </p>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab !== "AI" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-8 text-center text-slate-500 text-sm">
            Content for &quot;{activeTab}&quot; — coming soon.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
