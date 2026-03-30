import { useState } from "react";
import { Button, Badge } from "@audere/ui";
import { Eye } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const PROVIDERS = [
  { id: "anthropic", name: "Anthropic", desc: "Claude 3.5 Sonnet, Claude 3 Opus and more.", active: false, hasKey: true, keyPlaceholder: "Enter Anthropic API key", keyValue: "" },
  { id: "lovable", name: "Lovable AI", desc: "Built-in AI gateway – no API key required.", active: false, hasKey: false },
  { id: "openai", name: "OpenAI", desc: "GPT-4o, GPT-4, GPT-3.5 and more.", active: true, hasKey: true, keyPlaceholder: "Enter OpenAI API key", keyValue: "sk-proj-••••••••••••••••••••••••", keySaved: true },
];

export function HomeSettings() {
  const [activeId, setActiveId] = useState("openai");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-600">Manage AI provider configuration</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-1">AI Providers</h2>
        <p className="text-sm text-slate-500">
          Choose which AI provider powers features like session analysis and pain-signal detection. Only one provider can be active at a time.
        </p>
      </div>

      <div className="space-y-4">
        {PROVIDERS.map((p) => (
          <Card
            key={p.id}
            className={cn(
              "border-slate-200 shadow-sm transition-colors",
              p.active && "ring-2 ring-teal-500 border-teal-500",
            )}
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                    {p.active && <Badge className="bg-teal-600 text-white border-0">Active</Badge>}
                  </div>
                  <p className="text-sm text-slate-500">{p.desc}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm text-slate-500">{p.active ? "Active" : "Inactive"}</span>
                    <button
                      type="button"
                      onClick={() => setActiveId(p.id)}
                      className={cn(
                        "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none",
                        p.active ? "bg-teal-600" : "bg-slate-200",
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition",
                          p.active ? "translate-x-5" : "translate-x-1",
                        )}
                      />
                    </button>
                  </div>
                  {p.hasKey && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-slate-700 mb-1">API Key</label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          placeholder={p.keyPlaceholder}
                          defaultValue={p.keyValue}
                          className="flex-1 h-9 rounded-md border border-slate-200 px-3 text-sm"
                        />
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500"><Eye className="h-4 w-4" /></Button>
                        <Button variant="outline" size="sm" className={cn("border-slate-200", p.active && "text-teal-600")}>Save</Button>
                      </div>
                      {p.keySaved && <p className="text-xs text-slate-500 mt-1">Key saved. Enter a new value to replace it.</p>}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
