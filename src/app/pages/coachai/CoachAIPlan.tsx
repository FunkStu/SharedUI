import { Button } from "@audere-apps/ui";
import { Plus, ChevronDown } from "lucide-react";

const OUTCOMES = [
  { title: "Add $10k new recurring revenue for Q1", metrics: 1, status: "ACTIVE", due: "by 31 Mar 2025" },
  { title: "Prove the Audere Operating System", metrics: 3, status: "ACTIVE", due: "by 30 Sep 2025" },
  { title: "Sustainable growth model", metrics: 8, status: "ACTIVE", due: "by 30 Sep 2025" },
];

const INITIATIVES = [
  { title: "Launch Capacity & Profit Diagnostic", outcomes: 2, actions: "8 pending", pct: 8, done: "0/6", status: "ACTIVE" },
  { title: "Coach AI system load", outcomes: 2, actions: "3 pending", pct: 25, done: "3/6", status: "ACTIVE" },
];

const RHYTHMS = [
  { title: "Daily Task & Time Tracking", freq: "1/day", history: "3", pct: 10, done: "3/30" },
  { title: "Strategic partner outreach", freq: "10/month", history: "4", pct: 40, done: "4/10" },
  { title: "Partner research", freq: "5/month", history: "0", pct: 0, done: "0/5" },
];

export function CoachAIPlan() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-sm text-amber-800">
        1 rhythm(s) have no check-ins yet.
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Outcomes (3)</h2>
              <div className="flex items-center gap-2">
                <button type="button" className="text-sm text-slate-500 hover:text-slate-700">Show completed (1)</button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-1"><Plus className="h-4 w-4" /> Add Outcome</Button>
              </div>
            </div>
            <ul className="space-y-3">
              {OUTCOMES.map((o) => (
                <li key={o.title} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                  <p className="font-medium text-slate-900">{o.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{o.metrics} Linked metric{o.metrics > 1 ? "s" : ""} · <button type="button" className="text-teal-600 hover:underline">Show Metrics ({o.metrics})</button></p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">{o.status}</span>
                    <span className="text-xs text-slate-500">{o.due}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Initiatives (2)</h2>
              <div className="flex items-center gap-2">
                <button type="button" className="text-sm text-slate-500">Show completed (2)</button>
                <Button variant="outline" size="sm" className="border-slate-200">Kanban</Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-1"><Plus className="h-4 w-4" /> Add Initiative</Button>
              </div>
            </div>
            <ul className="space-y-3">
              {INITIATIVES.map((i) => (
                <li key={i.title} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                  <p className="font-medium text-slate-900">{i.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{i.outcomes} Linked outcomes · <button type="button" className="text-teal-600 hover:underline">Show Actions ({i.actions})</button></p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: `${i.pct}%` }} />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">{i.status}</span>
                    <span className="text-xs text-slate-500">{i.done} completed</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Rhythms (3)</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-slate-200">Log</Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-1"><Plus className="h-4 w-4" /> Add Rhythm</Button>
              </div>
            </div>
            <ul className="space-y-3">
              {RHYTHMS.map((r) => (
                <li key={r.title} className="p-4 rounded-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{r.title}</p>
                    <p className="text-sm text-slate-500">{r.freq} · <button type="button" className="text-teal-600 hover:underline">Show History ({r.history})</button></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className={`h-full rounded-full ${r.pct === 0 ? "bg-red-500" : "bg-amber-500"}`} style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="text-sm text-slate-600">{r.done}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column - summary and focus */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button type="button" className="text-sm text-slate-500 hover:text-slate-700">Collapse all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">3</p>
              <p className="text-xs text-slate-500">Outcomes</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">2</p>
              <p className="text-xs text-slate-500">Active Initiatives</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">3</p>
              <p className="text-xs text-slate-500">Active Rhythms</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">13</p>
              <p className="text-xs text-slate-500">Check-ins This Year</p>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-200 bg-white p-4 text-center">
              <p className="text-3xl font-semibold text-emerald-600">66%</p>
              <p className="text-xs text-slate-500">Accountability Rating</p>
            </div>
          </div>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-slate-900">Focus Areas (2)</h2>
              <div className="flex items-center gap-2">
                <button type="button" className="text-sm text-slate-500">My Library</button>
                <button type="button" className="text-sm text-slate-500">Collapse all</button>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <span className="font-medium text-slate-900">Launch Capacity & Profit Diagnostic</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">ACTIVE</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <span className="font-medium text-slate-900">Coach AI system load</span>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">ACTIVE</span>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Key Metrics (4)</h2>
            <button type="button" className="text-sm text-slate-500 mb-3">Show completed (2)</button>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span className="text-slate-600">Annual Revenue</span><span className="font-medium text-slate-900">$500,000</span></li>
              <li className="flex justify-between"><span className="text-slate-600">Increased to monthly revenue</span><span className="font-medium text-slate-900">$10,000</span></li>
              <li className="flex justify-between"><span className="text-slate-600">New Evo clients (net)</span><span className="font-medium text-slate-900">4</span></li>
              <li className="flex justify-between"><span className="text-slate-600">Q1 Revenue</span><span className="font-medium text-slate-900">$100,000</span></li>
            </ul>
            <button type="button" className="text-sm text-teal-600 hover:underline mt-2">View more (0)</button>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Actions (9)</h2>
            <ul className="space-y-2">
              {["Define core C&P model", "Segment pilot candidates", "Design delivery workflow"].map((label, i) => (
                <li key={label} className="flex items-center gap-2 py-1.5">
                  <input type="checkbox" className="rounded border-slate-300 text-teal-600" />
                  <span className="text-sm text-slate-900">{label}</span>
                  <span className="text-xs text-red-600 ml-auto">{i < 2 ? "2026-03-06 Overdue" : "2026-03-13"}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Recent Updates (17)</h2>
            <button type="button" className="text-sm text-slate-500 mb-3">Show completed (0)</button>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Q1 Revenue / Reported $31,000</li>
              <li>Chat - 2026-03-02 / You successfully onboarded EGM Advice...</li>
              <li>Chat - 2026-02-23 / Welcome to the start of your journey...</li>
            </ul>
            <button type="button" className="text-sm text-teal-600 hover:underline mt-2">View more (12)</button>
          </section>
        </div>
      </div>
    </div>
  );
}
