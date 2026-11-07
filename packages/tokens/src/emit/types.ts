import type { CuteTheme } from "../theme.ts";

export type Theme = CuteTheme;

export type TokenPath =
  | "color.textPrimary"
  | "color.surface"
  | "focus.color"
  | "gradient.solidFallback"
  | "component.cardRadius";
