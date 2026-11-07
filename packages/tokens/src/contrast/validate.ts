import type { CuteTheme } from "../theme.ts";
import { contrastRatio } from "./math.ts";
import { contrastPairs } from "./pairs.ts";

export type ContrastError = { themeId: string; name: string; ratio: number; minimum: number };

function readPath(theme: CuteTheme, path: string): string {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, theme);
  if (typeof value !== "string") {
    throw new Error(`missing color path ${path}`);
  }
  return value;
}

export function validateThemeContrast(theme: CuteTheme): ContrastError[] {
  const errors: ContrastError[] = [];
  for (const pair of contrastPairs) {
    const ratio = contrastRatio(readPath(theme, pair.foreground), readPath(theme, pair.background));
    if (ratio + 0.01 < pair.minimum) {
      errors.push({ themeId: theme.id, name: pair.name, ratio, minimum: pair.minimum });
    }
  }
  return errors;
}
