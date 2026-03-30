import { Link } from "react-router";
import { FileText, LayoutGrid, DollarSign, BarChart3 } from "lucide-react";

const QUICK_LINKS = [
  { to: "/feemodeler/core-process", label: "Core Process", desc: "Stages and tasks for new clients", icon: FileText },
  { to: "/feemodeler/deliverables", label: "Client Deliverables", desc: "1-to-1 services", icon: FileText },
  { to: "/feemodeler/client-pricing", label: "Client Pricing", desc: "Custom pricing quotes", icon: DollarSign },
  { to: "/feemodeler/analysis", label: "Long Tail Analysis", desc: "Ongoing revenue uplift", icon: BarChart3 },
];

export function FeeModelerHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Fee Modeler</h1>
        <p className="mt-1 text-slate-600">Define stages, strategies, deliverables and pricing for your advice process.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {QUICK_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-semibold text-slate-900">{item.label}</h2>
              <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
            </Link>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Summary</h2>
        <p className="text-sm text-slate-600">
          Use the side menu to configure New Client stages (Core Process, Advice), Existing Client deliverables (1-to-1, 1-to-Many, Advice, Packages),
          then build your Costed Fee Schedule and Client Pricing. Run Long Tail Analysis to model fee uplifts.
        </p>
      </div>
    </div>
  );
}
