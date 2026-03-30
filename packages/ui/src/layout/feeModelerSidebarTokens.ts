/**
 * Locked Fee Modeler app sidebar visual tokens (Shared UI).
 * Section titles are larger than nested links; nested uses muted slate-400 vs section slate-300.
 */
export const feeModelerSidebarTokens = {
  /** Outer aside: deep navy rail */
  /** z-40: stay above main content (cards, sticky toolbars) so nav clicks always register */
  shell: "fixed inset-y-0 z-40 flex w-64 shrink-0 flex-col bg-slate-800 text-white",
  /** Brand / top block above nav */
  brandRegion: "border-b border-slate-700 p-5",
  /** Scrollable nav region (everything above footer) */
  navScroll:
    "min-h-0 flex-1 space-y-0.5 overflow-y-auto p-3",
  /** flex column wrapper: scroll + footer */
  navRoot: "flex min-h-0 flex-1 flex-col",
  /** Optional “back” link row */
  backLink:
    "mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white",
  /** Home (primary rail, same size as settings footer link) */
  primaryRailLink:
    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
  primaryRailLinkInactive: "text-slate-300 hover:bg-slate-700 hover:text-white",
  primaryRailLinkActive: "bg-teal-600 text-white",
  /** Collapsible section header button */
  sectionTrigger:
    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-700/60",
  /** Nested item under a section */
  nestedLink:
    "flex items-center gap-2 rounded-md px-3 py-1.5 text-[14px] font-medium leading-snug transition-colors",
  nestedLinkInactive: "text-slate-400 hover:bg-slate-700 hover:text-white",
  nestedLinkActive: "bg-teal-600 text-white",
  nestedIcon: "h-3.5 w-3.5 shrink-0 opacity-90",
  primaryIcon: "h-4 w-4 shrink-0",
  sectionChevron: "h-3.5 w-3.5 shrink-0 transition-transform",
  /** Settings (and similar) pinned footer */
  footerRegion: "shrink-0 border-t border-slate-700 p-3 pt-2",
} as const;
