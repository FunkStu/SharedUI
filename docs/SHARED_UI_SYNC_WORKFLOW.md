# Shared UI Sync Workflow

Use this workflow when each product repo is deployed independently (for example via Lovable) and cannot depend on sibling repos at runtime.

## Why this exists

- `SharedUI` is the source of truth for shared components.
- Each product repo still needs local copies of shared files to avoid cross-repo runtime failures.
- This script syncs canonical files into product repos in a repeatable way.

## Command

From the `SharedUI` repo root:

```bash
node tools/sync-shared-ui.mjs --target Fee-Modeler
```

Dry-run validation mode (fails if drift exists):

```bash
node tools/sync-shared-ui.mjs --target Fee-Modeler --check
```

Validate all configured targets at once:

```bash
node tools/sync-shared-ui.mjs --all --check
```

## Current target coverage

Configured in `tools/shared-ui-sync.config.json`. **No active targets** — Fee-Modeler (Jun 2026) now imports all shared chrome from **`@audere/ui`** via its vendored tarball; Role Audit uses public npm. Add a target here only when a product repo intentionally duplicates specific sources instead of consuming the package.

## Add a new product repo

1. Add a new entry under `targets` in `tools/shared-ui-sync.config.json`.
2. Set:
   - `repoPath` (relative path from `SharedUI` root)
   - `mappings` (source and destination files)
   - `replacements` for import path differences (for example `../lib/utils` -> `@/lib/utils`)
3. Run sync command and then build/test that product repo.

Note: only map components that exist in both the source package and target app architecture. For example, do not map Fee Modeler sidebars into Role Audit unless a canonical Role Audit sidebar exists in `SharedUI`.

## Recommended release checklist

1. Update shared files in `SharedUI/packages/ui/src/...`.
2. Run `node tools/sync-shared-ui.mjs --target <RepoName>` (or `--all`).
3. Run drift check (`--check`) before merge.
4. Build/lint target repo(s).
5. Commit changes in both repos.

Hub sidebar behaviour and defaults (optional `home` rail, tokens, Tailwind): [`HUB_SIDEBAR_AND_NAV.md`](./HUB_SIDEBAR_AND_NAV.md).

## Lovable / isolated deploys (Fee-Modeler)

Lovable (and any clone without a sibling `SharedUI` folder) cannot use `file:../SharedUI/...` or a Vite alias to that path.

### A. Vendored tarball (Fee-Modeler default)

Fee-Modeler can pin **`@audere/ui`** to **`file:./vendor/audere-ui-<version>.tgz`** so `npm install` / `npm ci` work **without** registry auth when the tarball is committed.

1. In `SharedUI/packages/ui`: bump `version`, run **`npm run build`**, then **`npm pack`** (creates `audere-ui-<version>.tgz` for the `@audere/ui` package).
2. Copy the tarball into **`Fee-Modeler/vendor/`**, update **`Fee-Modeler/package.json`** to the new `file:./vendor/...` path, run **`npm install`** in Fee-Modeler, commit `vendor/*.tgz` + `package-lock.json`.

### B. Public npm (default for most apps)

1. **Publish** `@audere/ui` per [`LINKING_APPS_TO_AUDERE_UI.md`](./LINKING_APPS_TO_AUDERE_UI.md).
2. In Fee-Modeler, set **`"@audere/ui": "^0.3.5"`** (or current line), remove the vendor tarball if you no longer need offline installs, then **`npm install`** and commit the lockfile.

### Shared for both paths

- **Charts** (`@audere/ui/charts`, etc.) come from the package **`dist/`** — always **`npm run build`** in `packages/ui` before pack or publish.
- **Tailwind** in Fee-Modeler should content-scan `node_modules/@audere/ui/dist/**/*`.
- **Package imports** use `@audere/ui/...` subpaths (layout, composition, surface, etc.) — no local `preview-shell` copies after phase 2 (Jun 2026).
