import { AppSwitcher, WorkspaceSelector, TopNavigation, SidebarNavigation } from "@audere-apps/ui";
import { NotificationPanel } from "../components/platform/NotificationPanel";
import { PlatformSidebarMode } from "../components/platform/PlatformSidebarMode";
import { AppSidebarMode } from "../components/platform/AppSidebarMode";

export function NavigationHub() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Platform & Navigation</h1>
        <p className="mt-2 text-lg text-slate-600">
          Cross-app platform components, workspace switchers, and command palettes.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Platform Layer Components</h2>
          <p className="mt-2 text-sm text-slate-500">Essential components for a multi-app system like Audere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* App Switcher */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-start">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">App Switcher</h3>
            <AppSwitcher />
          </div>

          <div className="space-y-8">
            {/* Workspace Selector */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Workspace Selector</h3>
              <WorkspaceSelector />
            </div>

            {/* Cross-app Notifications */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Cross-app Notifications</h3>
              <NotificationPanel />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Sidebar Modes</h2>
          <p className="mt-2 text-sm text-slate-500">Supporting both Platform-level and App-specific navigation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SidebarNavigation />
          <AppSidebarMode />
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Top Navigation</h2>
        </div>
        <TopNavigation />
      </section>
    </div>
  );
}
