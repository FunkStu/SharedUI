import { useState } from "react";
import { Button, Badge } from "@audere-apps/ui";
import { FileText, User, Archive, Mail } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../utils/cn";

const TABS = [
  { value: "pending", label: "Pending", count: 6, icon: FileText },
  { value: "assigned", label: "Assigned", count: 0, icon: User },
  { value: "archived", label: "Archived", count: 0, icon: Archive },
];

const PENDING_ITEMS = [
  { id: "1", date: "Mar 12, 2026", assignee: "Stewart Bell", title: "Coaching Session - Advance", participants: "stewart@audere.com.au, brittany@advancefp.com.au", actionItems: 9 },
  { id: "2", date: "Mar 10, 2026", assignee: "Stewart Bell", title: "Check-in with Bradley Smith", participants: "stewart@audere.com.au, bradley@example.com", actionItems: 3 },
  { id: "3", date: "Mar 10, 2026", assignee: "Warren Loudon", title: "Strategy Review", participants: "warren@audere.com.au", actionItems: 5 },
];

export function FathomSummaryQueue() {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-slate-600" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Fathom Summary Queue</h1>
            <p className="mt-1 text-slate-600">Review and assign incoming meeting summaries from Fathom</p>
          </div>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2">+ Create Manual</Button>
      </div>

      <div className="flex gap-1 border-b border-slate-200">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-md transition-colors",
                activeTab === tab.value
                  ? "bg-white text-slate-900 border border-b-0 border-slate-200 -mb-px shadow-sm"
                  : "text-slate-600 hover:text-slate-900",
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {tab.count > 0 && <Badge className="bg-slate-200 text-slate-700 border-0 text-xs">{tab.count}</Badge>}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {activeTab === "pending" && PENDING_ITEMS.map((item) => (
          <Card key={item.id} className="border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm text-slate-500">{item.date}</span>
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <User className="h-3 w-3" /> {item.assignee}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">Participants: {item.participants}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{item.actionItems} action items</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" className="border-slate-200">Edit</Button>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white gap-2">Assign</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {activeTab !== "pending" && (
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-12 text-center text-slate-500 text-sm">
              No items in {TABS.find((t) => t.value === activeTab)?.label.toLowerCase()}.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
