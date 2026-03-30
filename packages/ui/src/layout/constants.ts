/**
 * Audere app shell constraints — use these strings in custom layouts so spacing
 * stays aligned with {@link AppLayout}.
 */
export const audereShell = {
  /** Sidebar column width (Tailwind `w-64`). */
  sidebarWidthClass: "w-64",
  /** Offset for main column beside fixed sidebar. */
  mainGutterClass: "pl-64",
  /** Max width of primary content well inside the shell. */
  contentMaxWidthClass: "max-w-6xl",
  /** Default padding around the content well. */
  contentPaddingClass: "p-8 lg:p-12",
  /** Full outer shell: page canvas + typography base. */
  pageRootClass:
    "flex min-h-screen bg-muted/30 font-sans text-foreground antialiased",
  /** Fixed sidebar track (border + background use sidebar tokens). */
  asideTrackClass:
    "fixed inset-y-0 z-10 flex w-64 flex-shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
  /** Sticky-style header strip above content. */
  headerStripClass: "border-b border-border bg-card/80 backdrop-blur",
} as const;
