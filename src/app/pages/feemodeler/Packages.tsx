import { Button } from "@audere-apps/ui";
import { ChevronDown, ChevronUp, Trash2, Plus } from "lucide-react";
import { useState } from "react";

const CLIENT_DELIVERABLES = [
  { name: "Strategy & Progress Review", qty: 1, time: "3 hrs 15 mins", cost: "$887", userPays: false },
  { name: "Portfolio Review", qty: 1, time: "1 hrs", cost: "$342", userPays: false },
  { name: "Extraordinary online/in-person meeting", qty: 0.2, time: "0 hrs 39 mins", cost: "$89", userPays: true },
];

const ONE_TO_MANY = [
  { name: "MyProsperity", qty: 1, note: "(100 clients)", time: "0 hrs", cost: "$51" },
  { name: "Annual Fee reporting", qty: 1, note: "(15 clients)", time: "0 hrs 6 mins", cost: "$24" },
  { name: "Newsletter", qty: 0.25, note: "(25 clients)", time: "0 hrs 4 mins", cost: "$1" },
];

export function Packages() {
  const [privateWealthOpen, setPrivateWealthOpen] = useState(true);
  const [whoIsItFor, setWhoIsItFor] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Packages</h1>
        <p className="mt-1 text-slate-600">Create service packages by combining deliverables.</p>
      </div>

      {/* Private Wealth package */}
      <section className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Private Wealth</h2>
            <p className="text-sm text-slate-600 mt-1">Package Fee $3,290 · Time 7 hrs 31 mins</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPrivateWealthOpen(!privateWealthOpen)}
              className="p-2 rounded-md hover:bg-slate-100 text-slate-500"
            >
              {privateWealthOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
          </div>
        </div>

        {privateWealthOpen && (
          <>
            <div className="px-5 pb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Who is it for and why does it exist?</label>
              <p className="text-xs text-slate-500 mb-2">Describe the target client and the purpose of this package.</p>
              <textarea
                rows={3}
                value={whoIsItFor}
                onChange={(e) => setWhoIsItFor(e.target.value)}
                placeholder="e.g. High-net-worth clients seeking comprehensive advice and ongoing relationship management."
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400"
              />
            </div>

            <div className="border-t border-slate-200">
              <h3 className="px-5 py-3 text-sm font-semibold text-slate-900 bg-slate-50">Included Services</h3>
              <div className="px-5 py-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Client Deliverables</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-slate-500 uppercase">
                      <th className="text-left py-2 w-8"></th>
                      <th className="text-left py-2">Deliverable</th>
                      <th className="text-left py-2 w-20">Qty</th>
                      <th className="text-left py-2">Time/Client</th>
                      <th className="text-left py-2">Cost/Client</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {CLIENT_DELIVERABLES.map((r) => (
                      <tr key={r.name} className="border-b border-slate-100">
                        <td className="py-2"><input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600" /></td>
                        <td className="py-2">{r.name}{r.userPays && <span className="ml-2 text-xs text-slate-500">User Pays</span>}</td>
                        <td className="py-2"><input type="text" defaultValue={String(r.qty)} className="w-14 h-8 rounded border border-slate-200 px-2 text-sm" /></td>
                        <td className="py-2">{r.time}</td>
                        <td className="py-2">{r.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-3">1-to-Many Services</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-slate-500 uppercase">
                      <th className="text-left py-2 w-8"></th>
                      <th className="text-left py-2">Deliverable</th>
                      <th className="text-left py-2 w-20">Qty</th>
                      <th className="text-left py-2">Time/Client</th>
                      <th className="text-left py-2">Cost/Client</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {ONE_TO_MANY.map((r) => (
                      <tr key={r.name} className="border-b border-slate-100">
                        <td className="py-2"><input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600" /></td>
                        <td className="py-2">{r.name} <span className="text-slate-500">{r.note}</span></td>
                        <td className="py-2"><input type="text" defaultValue={String(r.qty)} className="w-14 h-8 rounded border border-slate-200 px-2 text-sm" /></td>
                        <td className="py-2">{r.time}</td>
                        <td className="py-2">{r.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-6 text-sm font-medium text-slate-700">
                  <span>Services included: 16</span>
                  <span>Total Time per Client: 7 hrs 31 mins</span>
                  <span>Package Fee $3,290</span>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Other packages (collapsed) */}
      {[
        { name: "Accumulator", fee: "$1,430", time: "4 hrs 9 mins" },
        { name: "Voyager", fee: "$1,520", time: "3 hrs 34 mins" },
      ].map((pkg) => (
        <div key={pkg.name} className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
          <div>
            <span className="font-semibold text-slate-900">{pkg.name}</span>
            <span className="text-slate-600 ml-3">Package Fee {pkg.fee}</span>
            <span className="text-slate-500 ml-2">Time {pkg.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronDown className="h-4 w-4 text-slate-400" />
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
          </div>
        </div>
      ))}

      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
        <Plus className="h-4 w-4" /> Add Package
      </Button>
    </div>
  );
}
