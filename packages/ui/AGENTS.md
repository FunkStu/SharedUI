# @audere-apps/ui — agent rules

- Import from `@audere-apps/ui/primitives`, `@audere-apps/ui/surface`, `@audere-apps/ui/composition`, `@audere-apps/ui/layout` (or documented subpaths like `@audere-apps/ui/data`). Do not duplicate shadcn-style primitives in app code.
- Style with **semantic Tailwind only** (`bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-muted-foreground`, `bg-primary`, `bg-sidebar`, …). No raw hex, `bg-white`, or ad hoc `slate-*` for app chrome.
- **Surface** is the default elevated panel (tables, metrics, charts, grouped content). Do not hand-roll matching card classes.
- Before custom page scaffolding: use **PageHeader**, **Section**, and **Toolbar**. Do not invent one-off title rows or filter bars unless the design system lacks a pattern.
- Shells: use **AppLayout** or **`audereShell`** from `@audere-apps/ui/layout` so sidebar width, gutters, and content well stay aligned.
- **No product-specific navigation, routes, or app lists** in this package — those live in each app or Hub.
- If a UI requirement cannot be met with existing **primitives**, **Surface**, **composition**, or **layout** — **stop** and propose a **system extension**; do not ship ad hoc UI to fill the gap.
