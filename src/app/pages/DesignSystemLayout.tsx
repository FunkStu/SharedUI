import { Outlet } from "react-router";
import { AppLayout, TopNavigation } from "@audere-apps/ui";
import { DocsSidebar } from "../components/docs/DocsSidebar";
import { DocsRouteSwitcher } from "../components/docs/DocsRouteSwitcher";

export function DesignSystemLayout() {
  return (
    <AppLayout
      sidebar={<DocsSidebar />}
      header={
        <div className="flex flex-col gap-1">
          <TopNavigation />
          <DocsRouteSwitcher />
        </div>
      }
    >
      <Outlet />
    </AppLayout>
  );
}
