import { useState } from "react";
import { Button } from "@audere-apps/ui";
import { FinsightBanner } from "../../components/finsight/FinsightBanner";
import { GripVertical, Pencil, Trash2 } from "lucide-react";
import { cn } from "../../utils/cn";

const STAGES = [
  { id: "1", order: 1, name: "Prospect" },
  { id: "2", order: 2, name: "Follow Up" },
  { id: "3", order: 3, name: "First meeting" },
  { id: "4", order: 4, name: "Awaiting decision" },
  { id: "5", order: 5, name: "Commence work" },
  { id: "6", order: 6, name: "Present work" },
  { id: "7", order: 7, name: "Implementing" },
  { id: "8", order: 8, name: "Awaiting Payment" },
  { id: "9", order: 9, name: "Implementation" },
];

const TAB_ITEMS = [
  { value: "stages", label: "Stages" },
  { value: "advisors", label: "Advisors" },
  { value: "referral-sources", label: "Referral Sources" },
  { value: "client-trigger", label: "Client Trigger" },
  { value: "system", label: "System Settings" },
  { value: "account-members", label: "Account Members" },
];

export function Settings() {
  const [viewAs, setViewAs] = useState<"Default" | "AM" | "Member">("AM");
  const [activeTab, setActiveTab] = useState("stages");

  return (
    <div className="space-y-8">
      <FinsightBanner viewAs={viewAs} onViewAsChange={setViewAs} />

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-600">Manage stages, team members, and system configuration</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {TAB_ITEMS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-t-md transition-colors",
              activeTab === tab.value
                ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "stages" && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Pipeline Stages</h2>
              <p className="text-sm text-slate-500">Define and organize your pipeline stages</p>
            </div>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
              + Add Stage
            </Button>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 font-semibold w-24">Order</th>
                  <th className="px-6 py-3 font-semibold">Stage Name</th>
                  <th className="px-6 py-3 font-semibold w-28">Actions</th>
                </tr>
              </thead>
              <tbody>
                {STAGES.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button type="button" className="text-slate-400 hover:text-slate-600 cursor-grab" aria-label="Drag to reorder">
                          <GripVertical className="h-4 w-4" />
                        </button>
                        <span className="font-medium text-slate-900">{row.order}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">{row.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-700">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab !== "stages" && (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500 text-sm">
          Content for “{TAB_ITEMS.find((t) => t.value === activeTab)?.label}” — coming soon.
        </section>
      )}

      <div className="fixed bottom-8 right-8">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
          aria-label="Feedback"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
        </button>
      </div>
    </div>
  );
}
