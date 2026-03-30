import type { ReactNode } from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Surface } from "../surface/Surface";

export type TablePageLayoutProps = {
  title: string;
  description?: string;
  toolbar?: ReactNode;
  children: ReactNode;
};

export function TablePageLayout({
  title,
  description,
  toolbar,
  children,
}: TablePageLayoutProps) {
  return (
    <DashboardLayout title={title} description={description}>
      <div className="space-y-4">
        {toolbar ? (
          <Surface padding="sm">
            {toolbar}
          </Surface>
        ) : null}
        {children}
      </div>
    </DashboardLayout>
  );
}
