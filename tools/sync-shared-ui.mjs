#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

function parseArgs(argv) {
  const args = { target: "", all: false, check: false };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--target") {
      args.target = argv[i + 1] ?? "";
      i += 1;
      continue;
    }
    if (token === "--all") {
      args.all = true;
      continue;
    }
    if (token === "--check") {
      args.check = true;
    }
  }
  return args;
}

function fail(message) {
  console.error(`\n[shared-ui-sync] ${message}`);
  process.exit(1);
}

function ensureExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    fail(`${label} not found: ${filePath}`);
  }
}

function run() {
  const args = parseArgs(process.argv);
  if (!args.target && !args.all) {
    fail("Missing --target or --all. Example: node tools/sync-shared-ui.mjs --target Fee-Modeler");
  }

  const sharedUiRoot = process.cwd();
  const configPath = path.join(sharedUiRoot, "tools", "shared-ui-sync.config.json");
  ensureExists(configPath, "Config file");

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const knownTargets = Object.keys(config.targets ?? {});
  if (knownTargets.length === 0) {
    fail("No targets configured in shared-ui-sync.config.json");
  }

  const targetNames = args.all ? knownTargets : [args.target];
  if (!args.all && !config.targets?.[args.target]) {
    fail(`Unknown target "${args.target}". Known targets: ${knownTargets.join(", ")}`);
  }

  let totalChanged = 0;
  for (const targetName of targetNames) {
    const target = config.targets[targetName];
    const targetRepoRoot = path.resolve(sharedUiRoot, target.repoPath);
    ensureExists(targetRepoRoot, `Target repo (${targetName})`);

    const replacements = Array.isArray(target.replacements) ? target.replacements : [];
    const mappings = Array.isArray(target.mappings) ? target.mappings : [];
    if (mappings.length === 0) {
      fail(`No mappings configured for target "${targetName}"`);
    }

    let changedCount = 0;
    for (const mapping of mappings) {
      const sourcePath = path.join(sharedUiRoot, mapping.source);
      const destinationPath = path.join(targetRepoRoot, mapping.destination);

      ensureExists(sourcePath, `Source file (${targetName})`);

      const sourceRaw = fs.readFileSync(sourcePath, "utf8");
      const transformed = replacements.reduce((acc, rule) => {
        return acc.split(rule.find).join(rule.replace);
      }, sourceRaw);

      const destinationDir = path.dirname(destinationPath);
      fs.mkdirSync(destinationDir, { recursive: true });

      const current = fs.existsSync(destinationPath)
        ? fs.readFileSync(destinationPath, "utf8")
        : "";

      if (current === transformed) {
        console.log(`[shared-ui-sync] up-to-date [${targetName}] ${mapping.destination}`);
        continue;
      }

      changedCount += 1;
      if (args.check) {
        console.log(`[shared-ui-sync] drift detected [${targetName}] ${mapping.destination}`);
        continue;
      }

      fs.writeFileSync(destinationPath, transformed, "utf8");
      console.log(`[shared-ui-sync] synced [${targetName}] ${mapping.destination}`);
    }

    totalChanged += changedCount;
    if (args.check && changedCount > 0) {
      console.log(`[shared-ui-sync] ${changedCount} file(s) out of sync for "${targetName}"`);
    } else if (args.check) {
      console.log(`[shared-ui-sync] check passed for "${targetName}"`);
    } else {
      console.log(`[shared-ui-sync] sync complete for "${targetName}"`);
    }
  }

  if (args.check && totalChanged > 0) {
    fail(`${totalChanged} file(s) out of sync across ${targetNames.length} target(s)`);
  }
}

run();
