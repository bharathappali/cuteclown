import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { emitThemeCss } from "../src/emit/css.ts";
import { emitThemeJson } from "../src/emit/json.ts";
import { clownSoft } from "../src/themes/clownSoft.ts";
import type { CuteTheme } from "../src/theme.ts";

const themes: Array<{ name: string; theme: CuteTheme; selector: string }> = [
  { name: "clown-soft.light", theme: clownSoft.light, selector: ":root" },
  { name: "clown-soft.dark", theme: clownSoft.dark, selector: '[data-cc-theme="dark"]' },
  {
    name: "clown-soft.high-contrast",
    theme: clownSoft.highContrast,
    selector: '[data-cc-contrast="more"]',
  },
];

export function writeTokenArtifacts(outDir: string) {
  mkdirSync(outDir, { recursive: true });
  for (const { name, theme, selector } of themes) {
    writeFileSync(join(outDir, `${name}.css`), emitThemeCss(theme, selector));
    writeFileSync(join(outDir, `${name}.json`), emitThemeJson(theme));
  }
}

const entry = process.argv[1];
if (entry && import.meta.url === pathToFileURL(entry).href) {
  const outDir = process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), "../dist/themes");
  writeTokenArtifacts(outDir);
}
