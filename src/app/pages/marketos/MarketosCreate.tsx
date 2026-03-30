import { Button } from "@audere-apps/ui";
import { Plus, Paperclip, Copy, Check, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

export function MarketosCreate() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create from Topic</h1>
            <button type="button" className="mt-2 flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700">
              <ChevronLeft className="h-4 w-4" /> Create from Topic
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Plus className="h-4 w-4" /> New ▾
            </Button>
            <span className="text-sm text-slate-500 flex items-center gap-1">
              <Paperclip className="h-4 w-4" /> Unpublished Posts
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600">
          1 Posts Generated for &quot;The 24/7 Lead Engine: Moving Beyond the Content Marketing Struggle&quot;
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-slate-200 text-slate-700">Select All</Button>
          <Button variant="outline" size="sm" className="border-slate-200 text-slate-700">Generate Again</Button>
        </div>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">The Content Production Line</h2>
                <p className="text-sm text-slate-500 mt-0.5">Framework / How-To · ★ 91/100</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Copy className="h-4 w-4" /> Copy
                </Button>
                <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
                  <Check className="h-4 w-4" /> Use This
                </Button>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              This post addresses the &apos;Ambitious Scaler&apos; by reframing content as a production line: extract once, translate with AI, apply guardrails, then schedule. It positions your practice as the operator of a repeatable system.
            </p>
            <div className="prose prose-sm text-slate-700 max-w-none space-y-3">
              <p>
                Most advice firms treat content as one-off projects. The result? Inconsistent output, last-minute scrambles, and messaging that drifts. The fix is to run content like a production line.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Extraction</strong> — Capture one core idea (e.g. from a client conversation or research).</li>
                <li><strong>AI Translation</strong> — Turn it into platform-ready drafts (LinkedIn, email, blog) with clear prompts.</li>
                <li><strong>Guardrail</strong> — One human check for compliance and tone before anything goes out.</li>
                <li><strong>Scheduling</strong> — Publish across channels from a single calendar.</li>
              </ol>
              <p>
                If you want to see the specific prompts and workflows, we can walk through them in a call. Or, if you&apos;re ready to fix the execution gap, book a Practice Growth Session.
              </p>
            </div>
            <button type="button" className="mt-4 flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700">
              View scorecard & image prompt <span className="text-slate-400">→</span>
            </button>
          </CardContent>
        </Card>
      </div>

      <aside className="w-80 flex-shrink-0 rounded-xl border border-slate-200 bg-slate-50/50 p-4 h-fit">
        <div className="flex items-center gap-2 mb-4">
          <Paperclip className="h-5 w-5 text-teal-600" />
          <h2 className="font-semibold text-slate-900">Unpublished Posts</h2>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Q Search..."
            className="flex-1 h-9 rounded-md border border-slate-200 bg-white px-3 text-sm"
          />
          <select className="h-9 rounded-md border border-slate-200 bg-white px-2 text-sm text-slate-600">
            <option>All statuses</option>
          </select>
          <select className="h-9 rounded-md border border-slate-200 bg-white px-2 text-sm text-slate-600">
            <option>All channels</option>
          </select>
        </div>
        <p className="text-sm text-slate-500 text-center py-8">No unpublished posts</p>
      </aside>
    </div>
  );
}
