import { Button, Badge, Input, Tabs } from "@audere-apps/ui";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Search, Mail, Bell, Settings } from "lucide-react";
import { useState } from "react";

export function Components() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Core UI Components</h1>
        <p className="mt-2 text-lg text-slate-600">
          Reusable elements like buttons, inputs, and standard UI blocks.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Buttons</h2>
          <p className="mt-2 text-sm text-slate-500">Primary, secondary, and ghost variants.</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-8">
            <div className="flex flex-wrap items-end gap-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Primary</span>
                <Button variant="primary">Generate Report</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Accent (AI)</span>
                <Button variant="accent">Ask CoachAI</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Secondary</span>
                <Button variant="secondary">Cancel</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Ghost</span>
                <Button variant="ghost">Learn More</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Danger</span>
                <Button variant="danger">Delete Workspace</Button>
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-6 border-t border-slate-100 pt-8">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Small</span>
                <Button size="sm">Action</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Medium (Default)</span>
                <Button>Action</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Large</span>
                <Button size="lg">Get Started</Button>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Icon Only</span>
                <Button size="icon" variant="secondary"><Settings className="h-4 w-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Inputs & Form Controls</h2>
        </div>

        <Card>
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Standard Input</label>
                <Input placeholder="Enter workspace name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Email Address</label>
                <Input type="email" placeholder="name@company.com" icon={<Mail className="h-4 w-4" />} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Global Search</label>
                <Input placeholder="Search client records, insights..." icon={<Search className="h-4 w-4" />} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Toggles & Switches</label>
                <div className="flex items-center gap-4 pt-2">
                  <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2">
                    <span className="pointer-events-none block h-4 w-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition-transform" />
                  </div>
                  <span className="text-sm text-slate-600">Off</span>

                  <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-teal-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ml-4">
                    <span className="pointer-events-none block h-4 w-4 translate-x-4 rounded-full bg-white shadow-lg ring-0 transition-transform" />
                  </div>
                  <span className="text-sm text-slate-900 font-medium">On (AI Mode)</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <label className="text-sm font-medium text-slate-900 mb-2 block">Tabs Layout</label>
                <Tabs 
                  tabs={[
                    { id: "overview", label: "Overview" },
                    { id: "analytics", label: "Analytics" },
                    { id: "reports", label: "Reports" }
                  ]} 
                  activeTab={activeTab} 
                  onChange={setActiveTab} 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Badges & Status Tags</h2>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Active</Badge>
              <Badge variant="secondary">Draft</Badge>
              <Badge variant="outline">Archived</Badge>
              <Badge variant="success">Completed</Badge>
              <Badge variant="warning">At Risk</Badge>
              <Badge variant="danger">Overdue</Badge>
              <Badge variant="ai" className="flex items-center gap-1">
                <SparklesIcon className="h-3 w-3" /> AI Generated
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
