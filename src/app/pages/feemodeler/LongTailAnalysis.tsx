import { useState } from "react";
import { TrendingUp, BarChart3 } from "lucide-react";

export function LongTailAnalysis() {
  const [lowestFee, setLowestFee] = useState(1000);
  const [highestFee, setHighestFee] = useState(10000);
  const [medianFee, setMedianFee] = useState(3500);
  const [totalClients, setTotalClients] = useState(100);
  const [ongoingRevenue, setOngoingRevenue] = useState("");
  const [newMinFee, setNewMinFee] = useState(4000);
  const [liftPct, setLiftPct] = useState(80);

  const currentRevenue = 417249;
  const clientsBelowMin = 60;
  const clientsToLift = Math.round(clientsBelowMin * (liftPct / 100));
  const revenueUplift = 72000;
  const newTotalRevenue = currentRevenue + revenueUplift;
  const pctIncrease = ((revenueUplift / currentRevenue) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Long Tail / Fat Head Analysis (Ongoing Revenue)</h1>
        <p className="mt-1 text-slate-600">Analyze the potential ongoing revenue uplift by applying minimum fee thresholds to your client base.</p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-sm font-semibold text-slate-900">Analysis parameters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Lowest Fee Client ($)</label>
            <input
              type="number"
              value={lowestFee}
              onChange={(e) => setLowestFee(Number(e.target.value))}
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Highest Fee Client ($)</label>
            <input
              type="number"
              value={highestFee}
              onChange={(e) => setHighestFee(Number(e.target.value))}
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Median Fee Client ($)</label>
            <input
              type="number"
              value={medianFee}
              onChange={(e) => setMedianFee(Number(e.target.value))}
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Total Clients</label>
            <input
              type="number"
              value={totalClients}
              onChange={(e) => setTotalClients(Number(e.target.value))}
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Ongoing Revenue (optional)</label>
            <input
              type="text"
              value={ongoingRevenue}
              onChange={(e) => setOngoingRevenue(e.target.value)}
              placeholder="Leave blank to estimate"
              className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm placeholder:text-slate-400"
            />
            <p className="text-xs text-slate-500 mt-1">Estimated from distribution</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        <h2 className="text-sm font-semibold text-slate-900">Pricing Strategy</h2>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">New Minimum Fee ($)</label>
          <input
            type="number"
            value={newMinFee}
            onChange={(e) => setNewMinFee(Number(e.target.value))}
            className="w-40 h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
          <p className="text-xs text-slate-500 mt-1">The minimum fee you want to set for all clients.</p>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Lift Percentage: {liftPct}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={liftPct}
            onChange={(e) => setLiftPct(Number(e.target.value))}
            className="w-full h-2 rounded-full bg-slate-200 accent-indigo-600"
          />
          <p className="text-xs text-slate-500 mt-1">Percentage of below-minimum clients you expect to transition to the new fee.</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Analysis Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Current Revenue</p>
            <p className="text-2xl font-semibold text-indigo-600 mt-1">${currentRevenue.toLocaleString()}</p>
            <p className="text-xs text-slate-500 mt-1">Est. avg: $4,172</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clients Below Minimum</p>
            <p className="text-2xl font-semibold text-indigo-600 mt-1">{clientsBelowMin}</p>
            <p className="text-xs text-slate-500 mt-1">{clientsToLift} to be lifted</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 bg-emerald-50/80 border-emerald-200">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Revenue Uplift</p>
            <p className="text-2xl font-semibold text-emerald-600 mt-1 flex items-center gap-1">+${revenueUplift.toLocaleString()}</p>
            <p className="text-xs text-slate-500 mt-1">+{pctIncrease}% increase</p>
            <TrendingUp className="h-5 w-5 text-emerald-500 mt-2" />
          </div>
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/50">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">New Total Revenue</p>
            <p className="text-2xl font-semibold text-indigo-600 mt-1">${newTotalRevenue.toLocaleString()}</p>
            <p className="text-xs text-slate-500 mt-1">New avg: $4,892</p>
            <BarChart3 className="h-5 w-5 text-indigo-400 mt-2" />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Calculation Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <p className="flex justify-between"><span className="text-slate-600">Clients below ${newMinFee.toLocaleString()}:</span><span className="font-medium text-slate-900">{clientsBelowMin} clients</span></p>
            <p className="flex justify-between"><span className="text-slate-600">Clients to lift ({liftPct}%):</span><span className="font-medium text-slate-900">{clientsToLift} clients</span></p>
            <p className="flex justify-between"><span className="text-slate-600">Avg fee of clients being lifted:</span><span className="font-medium text-slate-900">$2,500</span></p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between"><span className="text-slate-600">Current revenue from lifted clients:</span><span className="font-medium text-slate-900">$120,000</span></p>
            <p className="flex justify-between"><span className="text-slate-600">New revenue from lifted clients:</span><span className="font-medium text-slate-900">$192,000</span></p>
            <p className="flex justify-between"><span className="text-slate-600">Incremental revenue:</span><span className="font-medium text-emerald-600">+$72,000</span></p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Metric</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Before</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">After</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-6 py-3 font-medium text-slate-900">Total Revenue</td>
              <td className="px-6 py-3 text-right text-slate-700">$417,249</td>
              <td className="px-6 py-3 text-right text-slate-700">$489,249</td>
              <td className="px-6 py-3 text-right font-medium text-emerald-600">+$72,000</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium text-slate-900">Average Fee</td>
              <td className="px-6 py-3 text-right text-slate-700">$4,172</td>
              <td className="px-6 py-3 text-right text-slate-700">$4,892</td>
              <td className="px-6 py-3 text-right font-medium text-emerald-600">+$720</td>
            </tr>
            <tr>
              <td className="px-6 py-3 font-medium text-slate-900">Revenue Uplift</td>
              <td className="px-6 py-3 text-right text-slate-400">—</td>
              <td className="px-6 py-3 text-right text-slate-400">—</td>
              <td className="px-6 py-3 text-right font-medium text-emerald-600">+17.3%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-xs text-slate-500">
        Note: This analysis provides estimates based on assumed fee distribution patterns. Actual results will depend on your specific client fee distribution.
      </p>
    </div>
  );
}
