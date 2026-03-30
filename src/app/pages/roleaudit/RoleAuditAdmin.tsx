import { useState } from "react";
import { Button } from "@audere/ui";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const ADMIN_TABS = ["User Management", "Firms", "Updates", "AI", "Optimization", "Tracking"];
const UPDATES = [
  { id: "1", title: "Central Analytics Dashboard Now Live", date: "Feb 11, 2026", desc: "New analytics dashboard with role capacity and priority distribution views.", published: true },
  { id: "2", title: "Hiring Profile & Job Description Creator", date: "Nov 26, 2025", desc: "Create hiring profiles and job descriptions from role audit data.", published: true },
];

export function RoleAuditAdmin() {
  const [activeTab, setActiveTab] = useState("Updates");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage users, updates, and system settings.</p>
        </div>
        <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white"><Plus className="h-4 w-4" /> Create Update</Button>
      </div>

      <div className={cn("flex gap-1 border-b border-slate-200")}>
        {ADMIN_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-t-md",
              activeTab === tab ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px" : "text-slate-600 hover:bg-slate-50",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Updates" && (
        <div className="space-y-4">
          {UPDATES.map((u) => (
            <Card key={u.id} className="border-slate-200 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{u.title}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{u.date}</p>
                    <p className="text-sm text-slate-600 mt-2">{u.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" defaultChecked={u.published} className="rounded border-slate-300" />
                      Published
                    </label>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab !== "Updates" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-12 text-center text-slate-500 text-sm">
            Content for &quot;{activeTab}&quot; — coming soon.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
