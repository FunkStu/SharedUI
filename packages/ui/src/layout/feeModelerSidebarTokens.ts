/**
 * Visual tokens for **`FeeModelerAppSidebar`** (Audere hub rail — Role Audit, Fee Modeler, etc.).
 * Slate/chrome palette is intentional; not shadcn `sidebar` semantic colors.
 *
 * @see `docs/HUB_SIDEBAR_AND_NAV.md` in the Shared UI repo.
 */
export const feeModelerSidebarTokens = {
  shell: "fixed inset-y-0 z-40 flex w-64 shrink-0 flex-col bg-slate-800 text-white",
  brandRegion: "border-b border-slate-700 p-5",
  navScroll: "min-h-0 flex-1 space-y-0.5 overflow-y-auto p-3",
  navRoot: "flex min-h-0 flex-1 flex-col",
  backLink:
    "mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-slate-700/80 hover:text-white",
  primaryRailLink:
    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
  primaryRailLinkInactive: "text-slate-300 hover:bg-slate-700 hover:text-white",
  primaryRailLinkActive: "bg-teal-600 text-white",
  sectionLabel:
    "px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400",
  sectionTrigger:
    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:bg-slate-700/70 hover:text-slate-200",
  nestedLink:
    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium leading-snug transition-colors",
  nestedLinkInactive: "text-slate-300/90 hover:bg-slate-700 hover:text-white",
  nestedLinkActive: "bg-teal-600 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
  /**
   * Submenu stack under a section header: left hierarchy rail + indent (hub sidebars).
   */
  nestedList: "mt-0.5 space-y-0.5 border-l border-slate-600/55 ml-3 pl-3",
  nestedIcon: "h-4 w-4 shrink-0 opacity-90",
  primaryIcon: "h-4 w-4 shrink-0",
  sectionChevron: "h-3.5 w-3.5 shrink-0 transition-transform",
  footerRegion: "shrink-0 border-t border-slate-700 p-3 pt-2",
  groupDivider: "mx-3 my-2 border-t border-slate-600/70",
} as const;

/** Alias for accordion submenu stack classes (hub preview sidebars). */
export const previewSidebarSubmenuStack = feeModelerSidebarTokens.nestedList;
