import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** @param {string} raw */
export function parseAllowlist(raw) {
  const data = JSON.parse(raw);
  if (!data || !Array.isArray(data.allowed) || data.allowed.some((id) => typeof id !== "string")) {
    throw new Error("license allowlist must contain an allowed string array");
  }
  return data.allowed;
}

/**
 * @param {string | null | undefined} license
 * @param {readonly string[]} allowed
 */
export function isLicenseAllowed(license, allowed) {
  if (typeof license !== "string" || license.trim() === "") {
    return false;
  }
  const set = new Set(allowed);
  const orParts = license.split(/\s+OR\s+/i);
  return orParts.some((orPart) => {
    const andParts = orPart.split(/\s+AND\s+/i).map((part) => part.trim().replace(/[()]/g, ""));
    return andParts.length > 0 && andParts.every((part) => set.has(part));
  });
}

function workspacePackageJsons() {
  const files = [join(root, "package.json")];
  for (const dir of ["packages", "apps"]) {
    const abs = join(root, dir);
    if (!existsSync(abs)) {
      continue;
    }
    for (const name of readdirSync(abs)) {
      const pkgJson = join(abs, name, "package.json");
      if (existsSync(pkgJson)) {
        files.push(pkgJson);
      }
    }
  }
  return files;
}

/**
 * pnpm links direct dependencies inside the consuming package, not only at the repo root.
 * @param {string} packageJsonPath
 * @param {string} depName
 */
export function licenseManifestCandidates(packageJsonPath, depName) {
  const segments = depName.split("/");
  return [
    join(dirname(packageJsonPath), "node_modules", ...segments, "package.json"),
    join(root, "node_modules", ...segments, "package.json"),
  ];
}

/** @param {string} packageJsonPath @param {string} pkgName */
function readDirectLicense(packageJsonPath, pkgName) {
  const pkgJson = licenseManifestCandidates(packageJsonPath, pkgName).find((candidate) =>
    existsSync(candidate),
  );
  if (!pkgJson) {
    return null;
  }
  const data = JSON.parse(readFileSync(pkgJson, "utf8"));
  if (typeof data.license === "string") {
    return data.license;
  }
  if (data.license && typeof data.license.type === "string") {
    return data.license.type;
  }
  return null;
}

function checkDirectLicenses() {
  const allowed = parseAllowlist(
    readFileSync(join(root, "scripts/license-allowlist.json"), "utf8"),
  );
  /** @type {string[]} */
  const failures = [];
  for (const file of workspacePackageJsons()) {
    const pkg = JSON.parse(readFileSync(file, "utf8"));
    const names = [
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.devDependencies ?? {}),
      ...Object.keys(pkg.optionalDependencies ?? {}),
    ];
    for (const name of names) {
      const license = readDirectLicense(file, name);
      if (!isLicenseAllowed(license, allowed)) {
        failures.push(`${name} (${license ?? "unknown"}) required by ${file}`);
      }
    }
  }
  if (failures.length > 0) {
    process.stderr.write(`${failures.join("\n")}\n`);
    process.exitCode = 1;
    return;
  }
  process.stdout.write("license check: direct dependencies are on the allowlist\n");
}

const entry = process.argv[1];
if (entry && import.meta.url === pathToFileURL(entry).href) {
  checkDirectLicenses();
}
