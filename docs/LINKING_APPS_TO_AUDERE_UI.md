# Linking apps to Shared UI (`@audere/ui`)

This is the **repeatable playbook** for connecting a product app (Vite/React, Lovable, etc.) to the design-system package published from this repo. Use it for **Role Audit**, **Fee Modeler**, and future migrations.

## How it fits together

| Mechanism | Use when |
|-----------|----------|
| **`@audere/ui` on npm** | Normal installs, CI, Lovable, production. **This is the default.** |
| **`npm link` / `file:`** | Short-lived local iteration against Shared UI without publishing. |
| **`tools/sync-shared-ui.mjs`** | Selective **file copies** into a repo (see [`SHARED_UI_SYNC_WORKFLOW.md`](./SHARED_UI_SYNC_WORKFLOW.md)) when you intentionally duplicate specific sources instead of consuming the package. |

Most apps should **depend on the npm package** and only use sync or `link` when you have a concrete reason.

---

## Part A — Maintainers: publish `@audere/ui`

**Source:** `packages/ui` in this monorepo. **Package name:** `@audere/ui` (public scope on [npm](https://www.npmjs.com/package/@audere/ui)).

### 1. Prerequisites

- An **npm organisation or account** that **owns the `@audere` scope** (first publish creates the scoped package; collaborators need publish rights).
- **2FA** and `npm login` as a user who can publish `@audere/*`.
- Repo path note: the folder may be named **`Shared UI`** (space). Always quote paths, e.g.  
  `cd "/path/to/Shared UI"`.

### 2. Version and build

```bash
cd "/path/to/Shared UI/packages/ui"
# Bump "version" in package.json (or: npm version patch|minor|major)
npm install
npm run build
```

Confirm `dist/` is populated (tsup output + `.d.ts`).

### 3. Publish from monorepo root

From **`Shared UI` root** (not the private root app):

```bash
cd "/path/to/Shared UI"
npm run publish:audere-ui
```

That runs `npm publish ./packages/ui --access public --registry=https://registry.npmjs.org/`, so you publish **`@audere/ui`**, not the private `shared-ui` playground app.

`prepublishOnly` in `packages/ui` runs **build + typecheck** again before upload.

### 4. Hygiene

- Do **not** commit npm pack outputs under `packages/ui`. The package includes a **`.gitignore` with `*.tgz`**.
- After changing peers or exports, run **`npm run build`** at repo root if your CI expects the workspace to build.

### 5. Release cadence (summary)

1. Implement changes in `packages/ui/src/…`.
2. Bump `packages/ui/package.json` **version** (semver).
3. `npm run publish:audere-ui` from monorepo root (with auth; browser OTP if prompted).
4. In each consuming app, bump **`"@audere/ui"`** and reinstall (see Part B).

---

## Part B — Apps: add or upgrade `@audere/ui`

### 1. Install from the public registry

In the app’s `package.json`:

```json
"@audere/ui": "^0.3.3"
```

Use the **lowest version that includes the APIs you need**; caret `^` is typical.

Then:

```bash
npm install
# If the app also commits bun.lock:
bun install
```

**No `NODE_AUTH_TOKEN`** is required for `@audere/ui` — it is **public** on `registry.npmjs.org`. (Private GitHub Packages are unrelated.)

### 2. Peer dependencies

Align with **`packages/ui/package.json` `peerDependencies`** (React 18, `react-router-dom` for current releases, Radix, `tailwind-merge`, `class-variance-authority`, `clsx`, `lucide-react`, etc.). Missing peers cause runtime or type issues, not “missing package” from npm.

**React Router:** **`@audere/ui@0.3.3+`** uses **`react-router-dom`**. React Router 6 SPAs should **not** need a Vite alias/shim for `react-router` anymore.

### 3. Vite (typical SPA)

Patterns that work well:

- **`resolve.dedupe`:** `["react", "react-dom"]` so the app and `@audere/ui` share one React (avoids invalid hook calls).
- **Optional explicit aliases** for `react` / `react-dom` to `node_modules/...` if your monorepo or tooling duplicates them.

Remove any **legacy** “redirect `react-router` → `react-router-dom` only for `@audere/ui`” plugin once you are on **`@audere/ui@0.3.3+`**.

### 4. Imports

Prefer the **main barrel** when possible:

```ts
import { Section, Surface, Toolbar, PageHeader } from "@audere/ui";
```

Use **documented subpaths** (e.g. `@audere/ui/primitives`) only when needed; check **`package.json` `exports`** in `packages/ui`.

Keep **app-only** UI (custom table shells, product-specific layouts) in the app repo — not in the library unless you promote them into `packages/ui`.

### 5. Verify before merge / deploy

```bash
npx tsc --noEmit
npm run build
```

Fix any **TypeScript** errors (e.g. missing `ReactNode` imports, or RPC/types drift for Supabase — app-specific).

---

## Part C — Local development without publishing

### Option 1: `npm link`

```bash
cd "/path/to/Shared UI/packages/ui"
npm link

cd "/path/to/YourApp"
npm link @audere/ui
```

When finished:

```bash
cd "/path/to/YourApp"
npm unlink @audere/ui
npm install
```

### Option 2: `file:` dependency

In the app (temporary):

```json
"@audere/ui": "file:../Shared UI/packages/ui"
```

**Revert** to a registry semver range before committing for production/Lovable.

---

## Part D — Checklist for “migrate another app to Shared UI”

- [ ] Add or bump **`@audere/ui`**; install and refresh lockfiles.
- [ ] Satisfy **peer dependencies**; use **`react-router-dom`** with current library versions.
- [ ] Adjust **Vite** (dedupe React; remove obsolete router shims).
- [ ] Replace duplicated layout/shell imports with **`@audere/ui`** where the API exists.
- [ ] Leave **product-only** components local; document them in the app’s README if needed.
- [ ] Run **`tsc`** and **`npm run build`**; fix types and missing imports.
- [ ] If the app uses **Lovable** or remote CI, push and confirm **remote build** (no private registry for `@audere/ui`).

---

## Related docs

- [`SHARED_UI_SYNC_WORKFLOW.md`](./SHARED_UI_SYNC_WORKFLOW.md) — file-based sync into specific repos.
- Role Audit — [`PUBLISHING_AUDERE_UI.md`](https://github.com/FunkStu/Role-Audit/blob/main/docs/PUBLISHING_AUDERE_UI.md) (app-centric notes; points here for the full method).
