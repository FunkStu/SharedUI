import { useState } from "react";
import { Button } from "@audere-apps/ui";
import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const TABS = [
  { value: "sprint", label: "Sprint System" },
  { value: "events", label: "Upcoming Events" },
  { value: "contacts", label: "Contacts" },
];

const EVENTS = [
  { id: "1", title: "What You Should Be Charging (and Why You're Not)", date: "Fri 13 Feb 2026 - 10:30 AM", tz: "Australia/Sydney" },
  { id: "2", title: "Monthly Masterclass", date: "Mon 16 Mar 2026 - 2:00 PM", tz: "Australia/Sydney" },
];

export function ProgramSettings() {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Program Settings</h1>
        <p className="mt-1 text-slate-600">Configure the sprint calendar, manage events, and maintain org contacts.</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium rounded-t-md transition-colors",
              activeTab === tab.value ? "bg-white text-slate-900 border border-b-0 border-slate-200 -mb-px shadow-sm" : "text-slate-600 hover:text-slate-900",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "events" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-slate-600" />
              <h2 className="text-lg font-semibold text-slate-900">Upcoming Events</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">Manage events displayed in the Quick Access panel on the dashboard.</p>

            <ul className="space-y-4 mb-8">
              {EVENTS.map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4">
                  <div>
                    <p className="font-medium text-slate-900">{e.title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{e.date} ({e.tz})</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-semibold text-slate-900 mb-4">Add New Event</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input placeholder="e.g., Monthly Masterclass" className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description (optional)</label>
                <input placeholder="Brief description of the event..." className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date & Time</label>
                <input placeholder="dd/mm/yyyy, --:-- --" className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
                <select className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm"><option>Australia/Sydney</option></select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Registration URL</label>
                <input placeholder="https://zoom.us/meeting/re..." className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="active-event" className="rounded border-slate-300" />
                <label htmlFor="active-event" className="text-sm text-slate-700">Active (visible on dashboard)</label>
              </div>
            </div>
            <Button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white gap-2">+ Add Event</Button>
          </CardContent>
        </Card>
      )}

      {activeTab !== "events" && (
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-8 text-center text-slate-500 text-sm">
            Content for &quot;{TABS.find((t) => t.value === activeTab)?.label}&quot; — coming soon.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
