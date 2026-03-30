import { useState } from "react";
import { Button, Badge, DataTable } from "@audere-apps/ui";
import { FinsightBanner } from "../../components/finsight/FinsightBanner";
import { RefreshCw, Plus, Pencil, FolderOpen, Eye, Trash2 } from "lucide-react";

const ADMIN_TABS = [
  { value: "users", label: "User Management" },
  { value: "reporting", label: "Reporting" },
  { value: "gtm", label: "Google Tag Manager" },
  { value: "account-members", label: "Account Members" },
  { value: "updates", label: "System Updates" },
];

const USER_ROWS = [
  { id: "1", account: "Advance FP", email: "admin@advancefp.com.au", roles: "Admin" },
  { id: "2", account: "Audere", email: "stewart@audere.com.au", roles: "Admin" },
  { id: "3", account: "DollarGrowth", email: "practice@dollargrowth.com", roles: "Practice" },
  { id: "4", account: "Sample Co", email: "user@sample.com", roles: "User" },
];

export function Admin() {
  const [viewAs, setViewAs] = useState<"Default" | "AM" | "Member">("Default");
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="space-y-8">
      <FinsightBanner viewAs={viewAs} onViewAsChange={setViewAs} />

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Panel</h1>
        <p className="mt-1 text-slate-600">Manage system settings and permissions</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {ADMIN_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === tab.value
                ? "bg-slate-100 text-slate-900 border-b-2 border-slate-900 -mb-px"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "users" && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">User Management</h2>
              <p className="text-sm text-slate-500">View and manage all registered users.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 border-slate-200 text-slate-700">
                <RefreshCw className="h-4 w-4" /> Refresh
              </Button>
              <Button size="sm" className="gap-2 bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="h-4 w-4" /> Add User
              </Button>
            </div>
          </div>
          <DataTable
            columns={[
              { key: "account", header: "Account" },
              { key: "email", header: "Email" },
              {
                key: "roles",
                header: "Roles",
                render: (row) => (
                  <Badge variant="default" className="bg-teal-100 text-teal-800 border-0">
                    {row.roles}
                  </Badge>
                ),
              },
              {
                key: "id",
                header: "Actions",
                render: () => (
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-700">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-700">
                      <FolderOpen className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-700">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ),
              },
            ]}
            rows={USER_ROWS}
          />
        </section>
      )}

      {activeTab !== "users" && (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500 text-sm">
          Content for “{ADMIN_TABS.find((t) => t.value === activeTab)?.label}” — coming soon.
        </section>
      )}
    </div>
  );
}
