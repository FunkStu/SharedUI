export function CostedSchedule() {
  const strategyCosts = [
    { name: "Cashflow Modeling", primary: "$297", secondary: "$178" },
    { name: "Retirement Modeling", primary: "$217", secondary: "$130" },
    { name: "Debt management/restructuring", primary: "$241", secondary: "$145" },
    { name: "Super splitting", primary: "$848", secondary: "$509" },
    { name: "Life & TPD", primary: "$361", secondary: "$217" },
    { name: "Income Protection", primary: "$423", secondary: "$254" },
    { name: "Insurance Review (existing)", primary: "$341", secondary: "$205" },
    { name: "Superannuation Review", primary: "$683", secondary: "$410" },
  ];

  const packages = [
    { name: "Private Wealth", primary: "$3,290", secondary: "$1,974" },
    { name: "Accumulator", primary: "$1,430", secondary: "$858" },
    { name: "Voyager", primary: "$1,520", secondary: "$912" },
  ];

  const advice = [
    { name: "High-touch client", primary: "$385", secondary: "$231" },
    { name: "Additional modelling", primary: "$446", secondary: "$268" },
    { name: "Cashflow Coaching", primary: "$320", secondary: "$192" },
    { name: "Complex investments", primary: "$393", secondary: "$236" },
    { name: "SMSF administration", primary: "$438", secondary: "$263" },
    { name: "Retirement income streams", primary: "$267", secondary: "$160" },
    { name: "Extra-ordinary administration", primary: "$193", secondary: "$116" },
    { name: "Life and TPD insurance", primary: "$193", secondary: "$116" },
    { name: "Income protection", primary: "$97", secondary: "$58" },
    { name: "Review of Centrelink schedules", primary: "$182", secondary: "$109" },
    { name: "Travel (per 10kms)", primary: "$171", secondary: "$103" },
    { name: "Additional research", primary: "$364", secondary: "$218" },
    { name: "Portfolio Rebalancing", primary: "$267", secondary: "$160" },
    { name: "Professional Liaison", primary: "$438", secondary: "$263" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Costed Fee Schedule (incl. 40% profit margin)</h1>
        <p className="mt-1 text-slate-600">Primary values include margin; values in parentheses are cost base.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">NEW CLIENT ENGAGEMENT</h2>
            <div className="flex items-baseline justify-between">
              <span className="font-medium text-slate-900">Min. New Client Engagement Fee</span>
              <span>
                <span className="text-indigo-600 font-semibold">$5,432</span>
                <span className="text-red-600 text-sm ml-1">($3,259)</span>
              </span>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">STRATEGY COSTS</h2>
            <ul className="space-y-2">
              {strategyCosts.map((row) => (
                <li key={row.name} className="flex items-baseline justify-between py-1 border-b border-slate-50 last:border-0">
                  <span className="text-slate-800">{row.name}</span>
                  <span>
                    <span className="text-indigo-600 font-medium">{row.primary}</span>
                    <span className="text-red-600 text-sm ml-1">({row.secondary})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">PACKAGES</h2>
            <ul className="space-y-2">
              {packages.map((row) => (
                <li key={row.name} className="flex items-baseline justify-between py-1 border-b border-slate-50 last:border-0">
                  <span className="text-slate-800">{row.name}</span>
                  <span>
                    <span className="text-indigo-600 font-medium">{row.primary}</span>
                    <span className="text-red-600 text-sm ml-1">({row.secondary})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">ADVICE</h2>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {advice.map((row) => (
                <li key={row.name} className="flex items-baseline justify-between py-1 border-b border-slate-50 last:border-0">
                  <span className="text-slate-800">{row.name}</span>
                  <span>
                    <span className="text-indigo-600 font-medium">{row.primary}</span>
                    <span className="text-red-600 text-sm ml-1">({row.secondary})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
