import { Card, CardContent } from "../components/ui/Card";

export function Layouts() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Layout Templates</h1>
        <p className="mt-2 text-lg text-slate-600">
          Standardized screen structures using Auto Layout principles for consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Dashboard Layout</h2>
          </div>
          <Card className="bg-slate-100 p-2 border-slate-200">
            <div className="flex gap-2 h-[300px]">
              <div className="w-16 rounded-md bg-slate-900/10 border border-slate-900/10"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center justify-between px-3">
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                  <div className="h-6 w-6 bg-slate-200 rounded-full"></div>
                </div>
                <div className="flex gap-2 h-20">
                  <div className="flex-1 rounded-md bg-white border border-slate-200 shadow-sm p-3 flex flex-col gap-2"><div className="h-2 w-12 bg-slate-200 rounded"></div><div className="h-6 w-16 bg-slate-800 rounded"></div></div>
                  <div className="flex-1 rounded-md bg-white border border-slate-200 shadow-sm p-3 flex flex-col gap-2"><div className="h-2 w-12 bg-slate-200 rounded"></div><div className="h-6 w-16 bg-slate-800 rounded"></div></div>
                  <div className="flex-1 rounded-md bg-white border border-slate-200 shadow-sm p-3 flex flex-col gap-2"><div className="h-2 w-12 bg-slate-200 rounded"></div><div className="h-6 w-16 bg-slate-800 rounded"></div></div>
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="flex-[2] rounded-md bg-white border border-slate-200 shadow-sm"></div>
                  <div className="flex-1 rounded-md bg-white border border-slate-200 shadow-sm"></div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">AI Assistant Panel Layout</h2>
          </div>
          <Card className="bg-slate-100 p-2 border-slate-200">
            <div className="flex gap-2 h-[300px]">
              <div className="w-16 rounded-md bg-slate-900/10 border border-slate-900/10"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center px-3">
                  <div className="h-4 w-32 bg-slate-200 rounded"></div>
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="flex-[2] rounded-md bg-white border border-slate-200 shadow-sm"></div>
                  <div className="w-48 rounded-md bg-white border border-teal-200 shadow-sm flex flex-col">
                    <div className="h-8 border-b border-slate-100 bg-teal-50/50 rounded-t-md px-2 flex items-center"><div className="h-2 w-20 bg-teal-600 rounded"></div></div>
                    <div className="flex-1 p-2 flex flex-col gap-2">
                      <div className="h-10 bg-slate-100 rounded-md"></div>
                      <div className="h-10 bg-slate-100 rounded-md ml-4"></div>
                    </div>
                    <div className="h-8 border-t border-slate-100 p-1"><div className="h-full w-full bg-slate-100 rounded"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Data Table Page</h2>
          </div>
          <Card className="bg-slate-100 p-2 border-slate-200">
            <div className="flex gap-2 h-[300px]">
              <div className="w-16 rounded-md bg-slate-900/10 border border-slate-900/10"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center justify-between px-3">
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                </div>
                <div className="flex-1 rounded-md bg-white border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                  <div className="h-10 border-b border-slate-200 p-2 flex gap-2">
                    <div className="h-full w-32 bg-slate-100 rounded"></div>
                    <div className="h-full w-16 bg-slate-100 rounded ml-auto"></div>
                  </div>
                  <div className="h-6 bg-slate-50 border-b border-slate-200 flex items-center px-2 gap-2">
                    <div className="h-2 w-12 bg-slate-300 rounded"></div>
                    <div className="h-2 w-12 bg-slate-300 rounded ml-auto"></div>
                    <div className="h-2 w-12 bg-slate-300 rounded ml-auto"></div>
                  </div>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-10 border-b border-slate-100 flex items-center px-2 gap-2">
                      <div className="h-3 w-20 bg-slate-800 rounded"></div>
                      <div className="h-3 w-16 bg-slate-400 rounded ml-auto"></div>
                      <div className="h-4 w-12 bg-emerald-100 rounded ml-auto"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
        
        <section className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Workflow Analytics</h2>
          </div>
          <Card className="bg-slate-100 p-2 border-slate-200">
            <div className="flex gap-2 h-[300px]">
              <div className="w-16 rounded-md bg-slate-900/10 border border-slate-900/10"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-10 rounded-md bg-white border border-slate-200 shadow-sm flex items-center px-3">
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                </div>
                <div className="flex-1 rounded-md border border-dashed border-slate-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-3/4 h-24 bg-white border border-slate-200 rounded-md shadow-sm"></div>
                  <div className="w-0.5 h-6 bg-slate-300"></div>
                  <div className="flex gap-4 w-full justify-center">
                    <div className="w-1/3 h-24 bg-white border border-slate-200 rounded-md shadow-sm"></div>
                    <div className="w-1/3 h-24 bg-white border border-slate-200 rounded-md shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
