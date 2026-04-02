# `@audere/ui` — agent rules (`packages/ui`)

- Import from **`@audere/ui`** (main barrel) or documented subpaths (`@audere/ui/primitives`, `@audere/ui/layout`, `@audere/ui/data`, …). Do not duplicate shadcn-style primitives in app code when this package already exports them.
- **Classic horizontal header** (e.g. Role Audit `/classic/*`): use **`audereShell.pageRootClass`**, **`Surface`**, **`Button`**, **`buttonVariants`** from **`@audere/ui`** for the shell canvas and chrome; keep nav semantics in the app. See **[`docs/HUB_SIDEBAR_AND_NAV.md`](../../docs/HUB_SIDEBAR_AND_NAV.md)** § Classic horizontal shell.
- **Hub / preview shell sidebar:** use **`FeeModelerAppSidebar`** + **`feeModelerSidebarTokens`** from **`@audere/ui`**. See **[`docs/HUB_SIDEBAR_AND_NAV.md`](../../docs/HUB_SIDEBAR_AND_NAV.md)** for defaults:
  - **No `home` rail by default** — put primary items inside accordion groups (e.g. Capture → Audit, Track).
  - **`home` / `settings`** are **optional**; use only when the product needs them.
- **Tailwind in apps:** `@audere/ui` ships utility **strings inside `dist/*.js`**. Consumer **`tailwind.config` `content`** must include `./node_modules/@audere/ui/dist/**/*.js` (or scan `packages/ui/src` in a monorepo), or hub chrome classes will not generate.
- **Surface** is the default elevated panel (tables, metrics, charts, grouped content). Prefer **`Surface`** over hand-rolled card classes.
- Before custom page scaffolding: use **`PageHeader`**, **`Section`**, and **`Toolbar`** from **`@audere/ui`**.
- Shells: use **`AppLayout`** or **`audereShell`** from **`@audere/ui/layout`** so sidebar width, gutters, and content well stay aligned.
- **No product-specific routes or nav labels** baked into primitives — nav **data** (`groups`, `home`, etc.) is always passed from the app. Shared **structure** lives in `FeeModelerAppSidebar`.
- If a requirement cannot be met with existing exports — **stop** and propose a **system extension** in this package; do not ship one-off copies in apps without updating this doc set.
