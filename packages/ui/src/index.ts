/**
 * Portable root barrel for shared modules.
 * For stable consumption across apps, prefer subpath imports
 * (for example `@audere/ui/primitives`, `@audere/ui/data`).
 */

export * from "./data/index";
export * from "./charts/index";
export * from "./theme/index";
export * from "./workflow/index";
export * from "./ai/index";

export * from "./primitives/index";
export * from "./surface/index";
export * from "./composition/index";

export * from "./layout/index";

/** Platform chrome (re-exported from app source for the monorepo + npm bundle). */
export { AppSwitcher } from "./platform/AppSwitcher";
export { WorkspaceSelector } from "./platform/WorkspaceSelector";
export { TopNavigation } from "./platform/TopNavigation";
export { SidebarNavigation } from "./platform/SidebarNavigation";
