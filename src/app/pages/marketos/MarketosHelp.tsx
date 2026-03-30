import { Card, CardContent } from "../../components/ui/card";

export function MarketosHelp() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Help</h1>
        <p className="mt-1 text-slate-600">Documentation and support for Marketos</p>
      </div>
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-8 text-center text-slate-500">
          <p className="mb-4">Help content and links to Audere Help Desk can go here.</p>
          <a href="#help-desk" className="text-teal-600 hover:text-teal-700 font-medium">
            Open Audere Help Desk →
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
