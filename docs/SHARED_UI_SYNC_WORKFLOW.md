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

Configured in `tools/shared-ui-sync.config.json`:

- `Fee-Modeler`
  - `packages/ui/src/layout/FeeModelerAppSidebar.tsx` -> `src/components/preview-shell/FeeModelerAppSidebar.tsx`
  - `packages/ui/src/layout/feeModelerSidebarTokens.ts` -> `src/components/preview-shell/feeModelerSidebarTokens.ts`
  - `packages/ui/src/surface/Surface.tsx` -> `src/components/preview-shell/Surface.tsx`
  - `packages/ui/src/composition/Section.tsx` -> `src/components/preview-shell/Section.tsx`
  - `packages/ui/src/composition/PageHeader.tsx` -> `src/components/preview-shell/PageHeader.tsx`
  - `packages/ui/src/composition/Toolbar.tsx` -> `src/components/preview-shell/Toolbar.tsx`
  - `packages/ui/src/data/MetricTile.tsx` -> `src/components/preview-shell/MetricTile.tsx`

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
