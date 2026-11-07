import process from "node:process";
import { pathToFileURL } from "node:url";
import { validateThemeContrast } from "../src/contrast/validate.ts";
import { clownSoft } from "../src/themes/clownSoft.ts";

export function contrastGateErrors() {
  return [
    ...validateThemeContrast(clownSoft.light),
    ...validateThemeContrast(clownSoft.dark),
    ...validateThemeContrast(clownSoft.highContrast),
  ];
}

const entry = process.argv[1];
if (entry && import.meta.url === pathToFileURL(entry).href) {
  const errors = contrastGateErrors();
  if (errors.length > 0) {
    process.stderr.write(`${errors.map((error) => `${error.themeId} ${error.name}`).join("\n")}\n`);
    process.exit(1);
  }
  process.stdout.write("contrast: all theme pairs pass\n");
}
