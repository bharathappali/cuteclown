import type { CuteTheme } from "../theme.ts";

function field(hex: string, alpha: number, at: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `radial-gradient(60% 70% at ${at}, rgba(${r},${g},${b},${alpha}), transparent 70%)`;
}

export const semanticAmbianceLight: CuteTheme["ambiance"] = {
  periwinkle: field("#9FA1FF", 0.62, "0% 0%"),
  butter: field("#FFF0BE", 0.8, "100% 0%"),
  pink: field("#F9B2D7", 0.62, "100% 100%"),
  mint: field("#D9F9DF", 0.85, "0% 100%"),
};

export const semanticAmbianceDark: CuteTheme["ambiance"] = {
  periwinkle: field("#9FA1FF", 0.42, "0% 0%"),
  butter: field("#FFF0BE", 0.48, "100% 0%"),
  pink: field("#F9B2D7", 0.42, "100% 100%"),
  mint: field("#D9F9DF", 0.55, "0% 100%"),
};

export const semanticAmbianceHighContrast: CuteTheme["ambiance"] = {
  periwinkle: "none",
  butter: "none",
  pink: "none",
  mint: "none",
};
