import { Card, CardContent } from "../components/ui/Card";
import { Button } from "@audere/ui";
import { Input } from "@audere/ui";
import { AIActionCard, AIInsightPanel, AIChatPanel } from "@audere/ui";
import { Brain, Sparkles, Send, RefreshCw, ThumbsUp, ThumbsDown, TrendingUp, ArrowRight } from "lucide-react";

export function AIInteraction() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">AI Interactions</h1>
        <p className="mt-2 text-lg text-slate-600">
          Embedded AI experiences that feel native to the analytical workflow.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">AI Action Card</h2>
          <p className="mt-2 text-sm text-slate-500">The core UI of the platform for executing AI-driven recommendations.</p>
        </div>

        <AIActionCard
          title="Increase comprehensive planning fee by 15%"
          description="Based on recent billing runs, your margin for Comprehensive Planning has dropped to 28%. Raising fees adjusts for inflation and maintains target profitability."
          badge={
            <>
              <Sparkles className="h-5 w-5" />
              <span>CoachAI Recommendation</span>
            </>
          }
        >
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 max-w-md">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Projected Impact</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Annual Revenue</span>
                <span className="text-emerald-600 font-medium flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +$320k
                </span>
              </div>
              <div className="h-px w-full bg-slate-200" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Service Margin</span>
                <span className="text-emerald-600 font-medium">
                  28% <ArrowRight className="h-3 w-3 inline mx-1 text-slate-400" /> 37%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm border-0">
              Implement Change
            </Button>
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              Run Scenario
            </Button>
          </div>
        </AIActionCard>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">AI Insights Panel</h2>
        </div>

        <AIInsightPanel
          title="CoachAI Strategic Insight"
          headerAccessory={
            <div className="opacity-60">
              <Brain className="h-6 w-6 text-teal-600" />
            </div>
          }
        >
          <p className="text-slate-700 leading-relaxed max-w-2xl">
            Based on recent billing runs, your margin for <strong>Comprehensive Planning</strong> has
            dropped to 28%. We recommend increasing your baseline fee by 15% to maintain target
            profitability, or delegating standard discovery prep to junior associates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm border-0">
              Model Pricing Increase
            </Button>
            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              View Role Capacity
            </Button>
          </div>
        </AIInsightPanel>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Suggestion Cards</h2>
          </div>

          <div className="space-y-4">
            <Card className="border-l-2 border-l-teal-500 hover:border-teal-500 transition-colors cursor-pointer bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1 bg-teal-100 p-1.5 rounded-md text-teal-700">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Optimise Tax Workflow</h4>
                      <p className="mt-1 text-sm text-slate-600">Automate document collection for 42 clients currently in the "Data Gathering" phase.</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-teal-600 hover:text-teal-700 hover:bg-teal-50">Apply</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-2 border-l-teal-500 hover:border-teal-500 transition-colors cursor-pointer bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1 bg-teal-100 p-1.5 rounded-md text-teal-700">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Client Risk Alert</h4>
                      <p className="mt-1 text-sm text-slate-600">Acme Corp has not been contacted in 90 days despite a "High Touch" service tier.</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-teal-600 hover:text-teal-700 hover:bg-teal-50">Draft Email</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Embedded AI Assistant</h2>
          </div>

          <AIChatPanel
            title="CoachAI Assistant"
            messages={[
              {
                id: 1,
                role: "assistant",
                content: (
                  <p>How can I help you analyse your practice today?</p>
                ),
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
                      I've calculated the net margin for your top 10 clients based on hours
                      logged vs. revenue generated this YTD.
                    </p>
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200 text-xs">
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
                        className="w-full mt-2 text-teal-600 h-6 text-xs bg-teal-50"
                      >
                        View Full Report
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 pl-2">
                      <button className="text-slate-400 hover:text-teal-600 transition-colors">
                        <ThumbsUp className="h-3 w-3" />
                      </button>
                      <button className="text-slate-400 hover:text-red-600 transition-colors">
                        <ThumbsDown className="h-3 w-3" />
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
                  className="pr-10 bg-slate-50 focus-visible:bg-white transition-colors"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1 h-8 w-8 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            }
          />
        </section>
      </div>
    </div>
  );
}
