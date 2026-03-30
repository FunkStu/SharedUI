import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

function ColorSwatch({ name, hex, className, textColor = "text-white" }: { name: string; hex: string; className: string; textColor?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-24 w-full rounded-lg shadow-sm ${className} flex items-end p-3 border border-slate-200/50`}>
        <span className={`text-xs font-medium ${textColor}`}>{hex}</span>
      </div>
      <div className="text-sm font-medium text-slate-900">{name}</div>
    </div>
  );
}

export function Foundations() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Foundations</h1>
        <p className="mt-2 text-lg text-slate-600">
          Core visual language including colours, typography, and spacing.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Colour System</h2>
          <p className="mt-2 text-sm text-slate-500">Professional SaaS palette prioritising readability and analytical focus.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Primary: Deep Blue</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorSwatch
              name="Blue 950"
              hex="#001A38"
              className="bg-[#001A38]"
            />
            <ColorSwatch
              name="Blue 900"
              hex="#002A5A"
              className="bg-[#002A5A]"
            />
            <ColorSwatch
              name="Blue 800"
              hex="#003878"
              className="bg-[#003878]"
            />
            <ColorSwatch
              name="Blue 700"
              hex="#1F5A9A"
              className="bg-[#1F5A9A]"
            />
            <ColorSwatch
              name="Blue 600"
              hex="#3F78B6"
              className="bg-[#3F78B6]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accent: AI & Actions (Teal)</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorSwatch name="Teal 600" hex="#0d9488" className="bg-teal-600" />
            <ColorSwatch name="Teal 500" hex="#14b8a6" className="bg-teal-500" />
            <ColorSwatch name="Teal 400" hex="#2dd4bf" className="bg-teal-400" />
            <ColorSwatch name="Teal 100" hex="#ccfbf1" className="bg-teal-100" textColor="text-teal-900" />
            <ColorSwatch name="Teal 50" hex="#f0fdfa" className="bg-teal-50" textColor="text-teal-900" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Neutrals & Backgrounds (Slate)</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorSwatch name="Slate 500" hex="#64748b" className="bg-slate-500" />
            <ColorSwatch name="Slate 300" hex="#cbd5e1" className="bg-slate-300" textColor="text-slate-900" />
            <ColorSwatch name="Slate 200" hex="#e2e8f0" className="bg-slate-200" textColor="text-slate-900" />
            <ColorSwatch name="Slate 100" hex="#f1f5f9" className="bg-slate-100" textColor="text-slate-900" />
            <ColorSwatch name="Slate 50" hex="#f8fafc" className="bg-slate-50" textColor="text-slate-900" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Semantic (Success, Warning, Danger)</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ColorSwatch name="Success (Emerald 600)" hex="#059669" className="bg-emerald-600" />
            <ColorSwatch name="Warning (Amber 500)" hex="#f59e0b" className="bg-amber-500" textColor="text-amber-950" />
            <ColorSwatch name="Danger (Red 600)" hex="#dc2626" className="bg-red-600" />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Typography</h2>
          <p className="mt-2 text-sm text-slate-500">System sans-serif with a crisp, minimal hierarchy.</p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-8">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Page Title (text-3xl font-bold tracking-tight)</span>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Strategic Performance Overview</h1>
            </div>

            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Section Header (text-xl font-semibold)</span>
              <h2 className="text-xl font-semibold text-slate-900">Revenue Growth by Quarter</h2>
            </div>

            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dashboard Metric (text-4xl font-semibold tracking-tight)</span>
              <div className="text-4xl font-semibold tracking-tight text-slate-900">$2.4M</div>
            </div>

            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Body Text (text-sm text-slate-600)</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                The platform connects multiple AI-powered tools including CoachAI for strategy, RoleAudit for capacity analysis, and FeeModeler for pricing. The goal is to create a unified ecosystem.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Data Label & Table Text (text-xs font-medium text-slate-500 uppercase tracking-wider)</span>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Client AUM Growth</div>
              <div className="text-sm font-medium text-slate-900 mt-1">Acme Corp Ltd.</div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
