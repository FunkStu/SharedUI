# Hub sidebar & navigation (`FeeModelerAppSidebar`)

Canonical design rules for the **shared hub rail** used by Audere apps (Role Audit new UI, Fee Modeler preview, future products).  
**Implementation:** `packages/ui/src/layout/FeeModelerAppSidebar.tsx` + `feeModelerSidebarTokens.ts` — published as **`@audere/ui`**.

This file is the **living reference** for nav/shell decisions. Extend it whenever we change behaviour or add apps.

---

## Default: **no home rail**

- The optional **`home`** prop is **off by default** for new apps.
- **Primary entry routes** (e.g. Audit, Track) belong in **accordion groups** (e.g. **Capture** → Audit, Track), not as a lone link above every section.
- Use **`home`** only when a product **explicitly** needs a persistent top-level link separate from all groups (Fee Modeler preview uses **Home** + grouped PRE-BUILD / … — that is intentional for that shell).

## Footer **`settings`** rail

- **Optional.** Omit when there is no single “Settings / Admin” destination, or when footer is unused.
- Role Audit: **Admin** appears here **only for admins**; non-admins get no footer link unless **`belowSettings`** is used.

## Groups

- **`FeeModelerNavGroup`**: `id`, `label`, `items[]`, optional **`dividerBefore`** (e.g. separator before **Team** / org-level nav).
- Accordion children use **`nestedList`** token (left rail + indent) for hierarchy.

## Visual tokens (`feeModelerSidebarTokens`)

- **Hub chrome** uses **fixed slate palette** (`bg-slate-800`, teal active states) so the rail reads as **Audere hub**, not shadcn `sidebar` semantic tokens.
- **`previewSidebarSubmenuStack`** is an alias of **`nestedList`** for app code that only needs the class string.

## Tailwind in consuming apps

- Utilities live in **published `dist/*.js`** strings. Apps **must** include `./node_modules/@audere/ui/dist/**/*.js` in **`tailwind.config` `content`** (see [`LINKING_APPS_TO_AUDERE_UI.md`](./LINKING_APPS_TO_AUDERE_UI.md) §3b), or point `content` at **`packages/ui/src`** in a monorepo.

## Routing

- Component is **router-agnostic**: pass **`Link`**, **`navigate`**, and **`pathname`** from the app (`react-router-dom` or equivalent).

## Related

- [`LINKING_APPS_TO_AUDERE_UI.md`](./LINKING_APPS_TO_AUDERE_UI.md) — install, Vite, Tailwind, checklist.
- [`SHARED_UI_SYNC_WORKFLOW.md`](./SHARED_UI_SYNC_WORKFLOW.md) — copying `FeeModelerAppSidebar.tsx` / tokens into repos that do not yet consume npm.
