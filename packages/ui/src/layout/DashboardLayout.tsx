import type { ReactNode } from "react";
import { AppLayout } from "./AppLayout";
import { TopNavigation } from "../platform/TopNavigation";
import { SidebarNavigation } from "../platform/SidebarNavigation";

export type DashboardLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** Uses the design-system demo sidebar + top bar; not for cross-app use without swapping chrome. */
export function DashboardLayout({
  title,
  description,
  children,
}: DashboardLayoutProps) {
  return (
    <AppLayout sidebar={<SidebarNavigation />} header={<TopNavigation />}>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description ? (
            <p className="text-lg text-muted-foreground">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </AppLayout>
  );
}
