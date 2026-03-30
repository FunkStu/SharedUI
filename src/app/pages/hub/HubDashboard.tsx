import {
  CrossAppNotificationsFeedV1,
  CrossAppNotificationsFeedV2,
  CrossAppNotificationsFeedV3,
  type CrossAppNotificationItem,
  MetricTile,
  Checklist,
  ProgressTracker,
} from "@audere/ui";
import { Brain, LineChart, TrendingUp, TrendingDown } from "lucide-react";

const CROSS_APP_DEMO_ITEMS: CrossAppNotificationItem[] = [
  {
    id: "demo-1",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-full bg-teal-600">
        <Brain className="h-5 w-5 text-white" aria-hidden />
      </span>
    ),
    appLabel: "CoachAI Insight",
    message: "Pricing anomaly detected in comprehensive planning fees.",
    timeAgo: "2m ago",
    read: false,
  },
  {
    id: "demo-2",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-full bg-indigo-100">
        <LineChart className="h-5 w-5 text-indigo-700" aria-hidden />
      </span>
    ),
    appLabel: "FeeModeler",
    message: 'Scenario "2024 Base Increase" is ready for review.',
    timeAgo: "1h ago",
    read: true,
  },
];

export function HubDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="mt-1 text-slate-600">
          Your unified landing view, powered by your Practice Evolution home dashboard.
        </p>
      </div>

      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <h2 className="text-xl font-semibold text-slate-900">Cross-app notifications (Shared UI)</h2>
          <p className="mt-1 text-sm text-slate-500">
            Variations built from <code className="text-xs">Surface</code>, <code className="text-xs">Button</code>,{" "}
            <code className="text-xs">Badge</code> — compare layouts on this page.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">V1 — Divided list</p>
            <CrossAppNotificationsFeedV1
              items={CROSS_APP_DEMO_ITEMS}
              onMarkAllRead={() => {}}
              onItemClick={() => {}}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">V2 — Inset row cards</p>
            <CrossAppNotificationsFeedV2
              items={CROSS_APP_DEMO_ITEMS}
              onMarkAllRead={() => {}}
              onItemClick={() => {}}
            />
          </div>
          <div className="space-y-2 xl:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">V3 — Dense</p>
            <CrossAppNotificationsFeedV3
              items={CROSS_APP_DEMO_ITEMS}
              onMarkAllRead={() => {}}
              onItemClick={() => {}}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2 mb-4">
          Practice Evolution Dashboard (Embedded)
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          In production this would be an authenticated embed of the user&apos;s Practice Evolution
          home dashboard (e.g. <code>/embed/dashboard</code>). Here we mock the frame and header only.
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-4 py-2">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-[10px] font-semibold text-white">
                PE
              </span>
              <span className="font-semibold tracking-tight">Practice Evolution – Home</span>
              <span className="text-slate-400">Embedded in Hub</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Today · 3 KPIs awaiting data</span>
            </div>
          </div>

          <div className="h-[560px] bg-white px-6 py-5 space-y-5 overflow-hidden">
            {/* Hero banner */}
            <section className="flex flex-col gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-slate-50 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400 mb-1">
                  PRACTICE EVOLUTION
                </p>
                <h3 className="text-xl font-semibold tracking-tight">Good morning, Stewart</h3>
                <p className="mt-1 text-sm text-slate-300 max-w-xl">
                  Welcome to your Practice Evolution dashboard. Access session summaries, gameplan,
                  learning modules, and tools all in one place.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Monday 9 March 2026 · Sprint 11 Week 5
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="inline-flex items-center rounded-md bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100">
                    View Calendar
                  </button>
                  <button className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-600">
                    Book Coaching Session
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-right text-xs text-slate-300">
                <span className="inline-flex justify-end gap-2">
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Audere Hub
                  </button>
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Marketos
                  </button>
                </span>
                <span className="inline-flex justify-end gap-2">
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Tools &amp; Tech
                  </button>
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Events
                  </button>
                </span>
                <span className="inline-flex justify-end gap-2">
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Measurement
                  </button>
                  <button className="rounded-full border border-slate-500 px-3 py-1 text-[11px]">
                    Program Information
                  </button>
                </span>
              </div>
            </section>

            {/* Main grid: Session Summaries + Message Board */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Left: Session Summaries + Action Items + Suggested Modules */}
              <div className="space-y-4 lg:col-span-2">
                <section className="rounded-xl border border-slate-200 bg-white p-4">
                  <header className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Session Summaries</h4>
                      <p className="text-xs text-slate-500">
                        Recent coaching and check-in notes.
                      </p>
                    </div>
                    <button className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100">
                      + New Summary
                    </button>
                  </header>
                  <div className="space-y-3 text-sm">
                    <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                      <p className="text-xs text-slate-400 mb-0.5">Feb 12, 2026</p>
                      <p className="font-medium text-slate-900">Coaching Session</p>
                      <p className="text-xs text-slate-600">
                        Reviewed Q1 goals and pipeline. Agreed next steps on delegation brief.
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                      <p className="text-xs text-slate-400 mb-0.5">Feb 6, 2026</p>
                      <p className="font-medium text-slate-900">Check-in</p>
                      <p className="text-xs text-slate-600">
                        Progress on Finsight rollout and training plan.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-4">
                  <header className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Action Items</h4>
                      <p className="text-xs text-slate-500">
                        The next few steps to keep momentum.
                      </p>
                    </div>
                  </header>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 h-3.5 w-3.5 rounded border-slate-300" />
                      <div>
                        <p className="font-medium text-slate-900">Set up Training Channel</p>
                        <p className="text-xs text-slate-500">
                          Brittany Mueller · Added Feb 12 · Due Feb 18
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 h-3.5 w-3.5 rounded border-slate-300" />
                      <div>
                        <p className="font-medium text-slate-900">Schedule Copilot Session</p>
                        <p className="text-xs text-slate-500">
                          Brittany Mueller, George Tsakiris · Added Feb 12 · Due Mar 11
                        </p>
                      </div>
                    </li>
                    <li>
                      <button className="mt-1 text-xs font-medium text-slate-500 hover:text-slate-700">
                        Show Completed
                      </button>
                    </li>
                  </ul>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-4">
                  <header className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Suggested Modules</h4>
                      <p className="text-xs text-slate-500">
                        Next modules based on your current plan.
                      </p>
                    </div>
                  </header>
                  <div className="grid grid-cols-1 gap-2 text-xs md:grid-cols-2">
                    <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left hover:bg-slate-100">
                      <span>Role Audit</span>
                      <span className="text-slate-400">Start</span>
                    </button>
                    <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left hover:bg-slate-100">
                      <span>Delegation Brief</span>
                      <span className="text-slate-400">Start</span>
                    </button>
                    <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left hover:bg-slate-100">
                      <span>Integration Analysis</span>
                      <span className="text-slate-400">Start</span>
                    </button>
                    <button className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left hover:bg-slate-100">
                      <span>Transition Positioning</span>
                      <span className="text-slate-400">Start</span>
                    </button>
                  </div>
                </section>
              </div>

              {/* Right: Message Board + GamePlan + Tools & Tech */}
              <div className="space-y-4">
                <section className="rounded-xl border border-slate-200 bg-white p-4">
                  <header className="mb-2 flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">Message Board</h4>
                    <span className="text-[11px] text-slate-400">0/280</span>
                  </header>
                  <textarea
                    className="h-20 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                    placeholder="Write a message..."
                  />
                  <div className="mt-2 flex justify-end">
                    <button className="inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
                      Post
                    </button>
                  </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                  <header className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">Current GamePlan</h4>
                    <button className="text-xs text-slate-500 hover:text-slate-700">Edit</button>
                  </header>
                  <p className="text-xs font-medium text-slate-800">Advance 2026 GamePlan</p>
                  <p className="text-[11px] text-slate-500">Updated Feb 1, 2026</p>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                  <header className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">Shared Folder</h4>
                    <div className="flex items-center gap-2 text-xs">
                      <button className="text-slate-500 hover:text-slate-700">Toggle</button>
                      <button className="text-slate-500 hover:text-slate-700">Edit</button>
                    </div>
                  </header>
                  <button className="text-xs font-medium text-slate-700 hover:text-slate-900">
                    Open Shared Folder
                  </button>
                  <button className="mt-1 text-xs text-slate-500 hover:text-slate-700">
                    + Add Private Folder
                  </button>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                  <header className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">Tools &amp; Tech</h4>
                    <button className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-800">
                      Registry
                    </button>
                  </header>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li>Delegation Brief</li>
                    <li>Finsight</li>
                    <li>Unity Blueprint</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
