import type { CuteTheme } from "../theme.ts";

function kebab(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function themeDeclarations(theme: CuteTheme): Map<string, string> {
  const declarations = new Map<string, string>();
  const walk = (value: unknown, prefix: string[]) => {
    if (typeof value === "string") {
      declarations.set(`--cc-${prefix.map(kebab).join("-")}`, value);
      return;
    }
    if (value && typeof value === "object") {
      for (const [key, child] of Object.entries(value)) {
        if (key === "id") {
          continue;
        }
        walk(child, [...prefix, key]);
      }
    }
  };
  walk(theme, []);
  return declarations;
}

export function emitThemeCss(theme: CuteTheme, selector = ":root"): string {
  const lines = [...themeDeclarations(theme).entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, value]) => `  ${name}: ${value};`);
  return `${selector} {\n${lines.join("\n")}\n}\n`;
}
