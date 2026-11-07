import type { CuteTheme } from "../theme.ts";
import { themeDeclarations } from "./css.ts";

export function emitThemeJson(theme: CuteTheme): string {
  const record = Object.fromEntries(themeDeclarations(theme));
  return `${JSON.stringify(record, null, 2)}\n`;
}
