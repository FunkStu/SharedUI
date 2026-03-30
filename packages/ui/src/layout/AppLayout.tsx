import type { ReactNode } from "react";

import { audereShell } from "./constants";
import { cn } from "../lib/utils";

export type AppLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
};

export function AppLayout({ sidebar, header, children }: AppLayoutProps) {
  return (
    <div className={audereShell.pageRootClass}>
      <aside className={audereShell.asideTrackClass}>{sidebar}</aside>

      <main className={cn("flex flex-1 flex-col", audereShell.mainGutterClass)}>
        <div className={audereShell.headerStripClass}>{header}</div>
        <div
          className={cn(
            "mx-auto flex flex-1",
            audereShell.contentMaxWidthClass,
            audereShell.contentPaddingClass,
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
