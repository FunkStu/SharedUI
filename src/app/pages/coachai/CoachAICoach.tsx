import { AIChatPanel, Button, Input } from "@audere-apps/ui";
import { Send, ThumbsUp, ThumbsDown } from "lucide-react";

const CONTEXT_UPDATES = [
  "Logged $31k for February against your...",
  "Is the $31k February revenue being...",
  "Logged $31k as February revenue for...",
  "Logged EJM Advice as the first...",
];

export function CoachAICoach() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">Embedded AI Assistant</h1>
        <p className="text-slate-600 font-medium">CoachAI Assistant</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
        <div className="lg:col-span-2 flex flex-col min-h-0">
          <AIChatPanel
            className="flex-1 min-h-0"
            title="CoachAI Assistant"
            messages={[
              {
                id: 1,
                role: "assistant",
                content: <p>How can I help you analyse your practice today?</p>,
              },
              {
                id: 2,
                role: "user",
                content: <p>Show me the profitability of my Top 10 clients.</p>,
              },
              {
                id: 3,
                role: "assistant",
                content: (
                  <div className="space-y-2">
                    <p>
                      I&apos;ve calculated the net margin for your top 10 clients based on hours
                      logged vs. revenue generated this YTD.
                    </p>
                    <div className="mt-3 bg-white p-3 rounded-lg border border-slate-200 text-xs">
                      <div className="flex justify-between border-b border-slate-100 pb-2 mb-2 font-medium text-slate-900">
                        <span>Client</span>
                        <span>Margin</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-slate-600">
                          <span>1. Acme Corp</span>
                          <span className="text-emerald-600 font-medium">42%</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>2. Stark Ind.</span>
                          <span className="text-emerald-600 font-medium">38%</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>3. Globex</span>
                          <span className="text-red-500 font-medium">12%</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full mt-2 text-teal-600 h-8 text-xs bg-teal-50 hover:bg-teal-100"
                      >
                        View Full Report
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 pl-2 mt-2">
                      <button type="button" className="text-slate-400 hover:text-teal-600 transition-colors" aria-label="Good response">
                        <ThumbsUp className="h-3.5 w-3.5" />
                      </button>
                      <button type="button" className="text-slate-400 hover:text-red-600 transition-colors" aria-label="Poor response">
                        <ThumbsDown className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ),
              },
            ]}
            footer={
              <div className="relative">
                <Input
                  placeholder="Ask CoachAI a question..."
                  className="pr-10 bg-slate-50 focus-visible:bg-white transition-colors rounded-lg"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-teal-600 hover:bg-teal-50 hover:text-teal-700 rounded-md"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            }
          />
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-5 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-900">Context</h2>
            <button type="button" className="text-xs text-slate-500 hover:text-slate-700">Collapse all</button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">My Library</p>
              <p className="text-sm text-slate-400">Empty</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Focus Areas (2)</p>
              <ul className="space-y-1 text-sm">
                <li className="text-slate-700">Launch Capacity & Profit Diagnostic</li>
                <li className="text-slate-700">Coach AI system load</li>
              </ul>
              <span className="text-xs text-emerald-600">Active</span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Key Metrics (3)</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>Capacity & Profit Diagnostics: 10</li>
                <li>CoachAI implemented with all coaching clients: 100</li>
                <li>Q3 Revenue: $130,000</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Actions (0)</p>
              <p className="text-sm text-slate-500">No pending actions.</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Recent Updates (5)</p>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {CONTEXT_UPDATES.map((t, i) => (
                  <li key={i}>{t} {i === 0 && "(6 days ago)"}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
