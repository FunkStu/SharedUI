import { Card, CardContent } from "../components/ui/Card";
import { Button } from "@audere-apps/ui";
import { Badge } from "@audere-apps/ui";
import { TaskCard, Checklist, ProgressTracker } from "@audere-apps/ui";
import { CheckCircle2, Circle, MoreHorizontal, Clock, ArrowRight, User } from "lucide-react";

export function Workflows() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Workflows</h1>
        <p className="mt-2 text-lg text-slate-600">
          Components for execution tracking, task management, and business initiatives.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Task Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TaskCard
            status="in-progress"
            title="Prepare Q3 Review for Globex Inc."
            description="Compile portfolio performance, tax harvesting opportunities, and risk re-assessment."
            actions={
              <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            }
            footer={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
                  <Clock className="h-3.5 w-3.5" /> Due Tomorrow
                </div>
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-medium text-slate-600">
                    JS
                  </div>
                  <div className="h-6 w-6 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] font-medium text-teal-700">
                    AK
                  </div>
                </div>
              </div>
            }
          />

          <TaskCard
            status="todo"
            title="Implement Fee Restructure"
            description="Update standard billing templates to reflect new 1.25% baseline for comprehensive tier."
            actions={
              <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            }
            footer={
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <Clock className="h-3.5 w-3.5" /> Oct 24
                </div>
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[10px] font-medium text-slate-100">
                    SJ
                  </div>
                </div>
              </div>
            }
          />

          <TaskCard
            status="done"
            title="Role Audit Kickoff"
            description="Initial meeting to define capacity constraints across senior advising team."
            actions={
              <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            }
            footer={
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Done Oct 12
              </div>
            }
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Checklists</h2>
          </div>

          <Checklist
            title="Client Onboarding"
            items={[
              {
                id: 1,
                label: "Signed Engagement Letter",
                status: "done",
                meta: "Oct 15, 09:30 AM",
              },
              {
                id: 2,
                label: "Initial Data Gathering Form",
                status: "done",
                meta: "Oct 16, 11:15 AM",
              },
              {
                id: 3,
                label: "Risk Tolerance Questionnaire",
                status: "done",
                meta: "Oct 16, 02:45 PM",
              },
              {
                id: 4,
                label: "Transfer Authority Docs",
                status: "pending",
                meta: "Pending Signatures",
              },
              {
                id: 5,
                label: "Welcome Package Sent",
                status: "todo",
                meta: "Scheduled: Oct 20",
              },
            ]}
          />
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Progress Trackers</h2>
          </div>

          <ProgressTracker
            title="Q4 Revenue Target"
            steps={[
              {
                id: 1,
                title: "Analysis Phase",
                description: "RoleAudit complete. Capacity limits identified.",
                state: "complete",
              },
              {
                id: 2,
                title: "Strategy Design",
                description: "Modeling new fee structures using FeeModeler.",
                state: "current",
              },
              {
                id: 3,
                title: "Execution",
                description: "Deploy automated marketing campaigns.",
                state: "upcoming",
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
}
