import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { isLicenseAllowed, parseAllowlist } from "./check-licenses.mjs";

const allowlistPath = new URL("./license-allowlist.json", import.meta.url);

test("parses the SPDX allowlist", () => {
  const allowed = parseAllowlist(readFileSync(allowlistPath, "utf8"));
  expect(allowed).toEqual(
    expect.arrayContaining(["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC"]),
  );
});

test("accepts an allowlisted license and a dual OR expression", () => {
  const allowed = parseAllowlist(readFileSync(allowlistPath, "utf8"));
  expect(isLicenseAllowed("MIT", allowed)).toBe(true);
  expect(isLicenseAllowed("(MIT OR Apache-2.0)", allowed)).toBe(true);
  expect(isLicenseAllowed("GPL-3.0-only", allowed)).toBe(false);
  expect(isLicenseAllowed(undefined, allowed)).toBe(false);
});

test("rejects an allowlist without an allowed array", () => {
  expect(() => parseAllowlist("{}")).toThrow(/allowed/);
});
