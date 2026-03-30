import { useState } from "react";
import { FinsightBanner } from "../../components/finsight/FinsightBanner";
import { cn } from "../../utils/cn";

const REFERRER_ROWS = [
  { id: "1", name: "Philip B (Estate Planning Lawyer)", nextAction: "Review his presentation, dry run > educational seminar (Apr 1, 2026)", lastAction: "No completed actions", referralsYtd: 4 },
  { id: "2", name: "CIO of Listed Income Fund", nextAction: "No pending actions", lastAction: "No completed actions", referralsYtd: 2 },
  { id: "3", name: "SF (Existing Client)", nextAction: "Share integen paper (Mar 5, 2026)", lastAction: "No completed actions", referralsYtd: 1 },
  { id: "4", name: "PM (Accountant)", nextAction: "How to help your kids' paper (Mar 5, 2026)", lastAction: "No completed actions", referralsYtd: 3 },
  { id: "5", name: "JM (Solicitor)", nextAction: "Catch up (Mar 5, 2026)", lastAction: "No completed actions", referralsYtd: 0 },
  { id: "6", name: "TK (Referrer)", nextAction: "Follow up (Feb 26, 2026)", lastAction: "No completed actions", referralsYtd: 2 },
];

const OVERDUE_PATTERN = /Mar 5|Feb 26/;

export function Referrers() {
  const [viewAs, setViewAs] = useState<"Default" | "AM" | "Member">("AM");
  const [sortBy, setSortBy] = useState("Referrals (YTD)");

  return (
    <div className="space-y-8">
      <FinsightBanner viewAs={viewAs} onViewAsChange={setViewAs} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Referrer Contact Tracking</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option>Referrals (YTD)</option>
            <option>Name</option>
            <option>Next Action</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Next Action</th>
              <th className="px-6 py-3 font-semibold">Last Action</th>
              <th className="px-6 py-3 font-semibold">Referrals (YTD)</th>
            </tr>
          </thead>
          <tbody>
            {REFERRER_ROWS.map((row) => (
              <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                <td className="px-6 py-4">
                  <span className={cn(OVERDUE_PATTERN.test(row.nextAction) && "text-red-600")}>
                    {row.nextAction}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">{row.lastAction}</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-teal-600 hover:text-teal-700" aria-label="View referrals">
                    <svg className="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                    <span className="ml-1">{row.referralsYtd}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-8 right-8">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
          aria-label="Add referrer"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
    </div>
  );
}
