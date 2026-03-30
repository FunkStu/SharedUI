import { useState } from "react";
import { Button } from "@audere-apps/ui";
import { Pencil, RefreshCw, Plus, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const SETTING_TABS = [
  "Users",
  "Connections",
  "Queue",
  "Services",
  "Organisation Profile",
  "Export",
  "Feature Flags",
  "Channels Debug",
];

export function MarketosSettings() {
  const [activeTab, setActiveTab] = useState("Organisation Profile");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
          <p className="mt-1 text-slate-600">Manage users, connections, and workspace settings</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Pencil className="h-4 w-4" /> Edit
        </Button>
      </div>

      <div className="flex gap-1 border-b border-slate-200 overflow-x-auto">
        {SETTING_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-md ${
              activeTab === tab ? "bg-slate-100 text-slate-900 border-b-2 border-teal-600 -mb-px" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Organisation Profile" && (
        <>
          <Button variant="outline" size="sm" className="gap-2 mb-4">
            <RefreshCw className="h-4 w-4" /> Rescan Profile
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-base font-semibold text-slate-900">Basic Information</h2>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Organisation Name</label>
                  <input defaultValue="Audere" className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Website</label>
                  <input defaultValue="https://audere.com.au/" className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Linkedin Company URL</label>
                  <input className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" placeholder="" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Timezone</label>
                  <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Australia/Sydney</option></select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Industry / Sector</label>
                  <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Financial advice</option></select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Target Market</label>
                  <textarea className="w-full min-h-[80px] rounded-md border border-slate-200 px-3 py-2 text-sm" defaultValue="Australian financial advisers and practice principals" />
                </div>
                <Button variant="outline" size="sm" className="gap-1"><Plus className="h-4 w-4" /> Add URL</Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-base font-semibold text-slate-900">Brand & Voice</h2>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Tone of Voice</label>
                  <textarea className="w-full min-h-[60px] rounded-md border border-slate-200 px-3 py-2 text-sm" defaultValue="Professional, clear, supportive." />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Value Proposition</label>
                  <textarea className="w-full min-h-[60px] rounded-md border border-slate-200 px-3 py-2 text-sm" defaultValue="Practice growth through better systems and content." />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Content Pillars</label>
                  <textarea className="w-full min-h-[80px] rounded-md border border-slate-200 px-3 py-2 text-sm" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm lg:col-span-2">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-base font-semibold text-slate-900">Key People</h2>
                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                  <div>
                    <p className="font-medium text-slate-900">Stewart Bell</p>
                    <p className="text-sm text-slate-500">Founder & Business Advisor · Primary Contact</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Full name</label>
                    <input placeholder="e.g. Managing Director" className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Title</label>
                    <input className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Role</label>
                    <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Primary Contact</option></select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {activeTab !== "Organisation Profile" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-8 text-center text-slate-500 text-sm">
            Content for &quot;{activeTab}&quot; — coming soon.
          </CardContent>
        </Card>
      )}

      <div className="fixed bottom-8 right-8">
        <Button size="icon" className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
