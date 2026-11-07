import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const budgetKeys = [
  "tokensAndBaseCssGzip",
  "motionGzip",
  "coreGzip",
  "componentJsGzip",
  "componentCssGzip",
  "adapterOverheadGzip",
];

/** @param {string} raw */
export function loadBudgets(raw) {
  const data = JSON.parse(raw);
  for (const key of budgetKeys) {
    if (typeof data[key] !== "number" || data[key] <= 0) {
      throw new Error(`size budget ${key} must be a positive number of gzip bytes`);
    }
  }
  return data;
}

export function findDistDirs(repoRoot = root) {
  /** @type {string[]} */
  const dirs = [];
  const rootDist = join(repoRoot, "dist");
  if (existsSync(rootDist)) {
    dirs.push(rootDist);
  }
  for (const group of ["packages", "apps"]) {
    const abs = join(repoRoot, group);
    if (!existsSync(abs)) {
      continue;
    }
    for (const name of readdirSync(abs)) {
      const dist = join(abs, name, "dist");
      if (existsSync(dist)) {
        dirs.push(dist);
      }
    }
  }
  return dirs;
}

function checkSizes() {
  loadBudgets(readFileSync(join(root, "scripts/size-budgets.json"), "utf8"));
  const dists = findDistDirs();
  if (dists.length === 0) {
    process.stdout.write("size check: no dist output, skipping\n");
    return;
  }
  process.stdout.write(
    `size check: dist present (${dists.length}), measurement lands with package builds\n`,
  );
}

const entry = process.argv[1];
if (entry && import.meta.url === pathToFileURL(entry).href) {
  checkSizes();
}
