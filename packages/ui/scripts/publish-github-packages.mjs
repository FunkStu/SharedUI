#!/usr/bin/env node
/**
 * Publish packages/ui to GitHub Packages without mutating the source package.json.
 * Default package name: @audere-apps/ui (override with GITHUB_UI_PACKAGE_NAME).
 *
 * Prerequisites:
 * - npm login to npm.pkg.github.com, or NODE_AUTH_TOKEN in CI (see .github/workflows).
 * - Version in package.json bumped before publish (npm version patch, etc.).
 *
 * Usage:
 *   node scripts/publish-github-packages.mjs
 *   node scripts/publish-github-packages.mjs --dry-run
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  cpSync,
  rmSync,
  existsSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync, execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const uiRoot = join(__dirname, "..");
const pkgPath = join(uiRoot, "package.json");
const staging = join(uiRoot, ".gpr-publish-staging");

const dryRun =
  process.argv.includes("--dry-run") ||
  process.env.DRY_RUN === "1" ||
  process.env.DRY_RUN === "true";

const packageName =
  process.env.GITHUB_UI_PACKAGE_NAME?.trim() || "@audere-apps/ui";

function main() {
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));

  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });

  try {
    console.log("[publish-github-packages] Building…");
    execSync("npm run build", { cwd: uiRoot, stdio: "inherit" });

    const outPkg = {
      ...pkg,
      name: packageName,
      publishConfig: {
        registry: "https://npm.pkg.github.com",
      },
    };
    // published tarball should only ship dist (already in files)
    delete outPkg.private;
    // avoid prepublishOnly running in staging (no devDependencies / tsup there)
    delete outPkg.scripts;

    cpSync(join(uiRoot, "dist"), join(staging, "dist"), { recursive: true });
    writeFileSync(
      join(staging, "package.json"),
      JSON.stringify(outPkg, null, 2) + "\n",
    );

    for (const f of ["README.md", "LICENSE", "LICENSE.md"]) {
      const src = join(uiRoot, f);
      if (existsSync(src)) {
        cpSync(src, join(staging, f));
      }
    }

    const publishArgs = dryRun ? ["publish", "--dry-run"] : ["publish"];
    console.log(
      `[publish-github-packages] Publishing ${packageName}@${outPkg.version}${dryRun ? " (dry-run)" : ""}…`,
    );
    execFileSync("npm", publishArgs, {
      cwd: staging,
      stdio: "inherit",
      env: process.env,
    });

    console.log("[publish-github-packages] Done.");
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
}

main();
