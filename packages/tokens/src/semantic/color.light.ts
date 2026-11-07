import { primitiveColor } from "../primitives/color.ts";
import type { CuteTheme } from "../theme.ts";

/** Tertiary and status text are darker than the raw fills so they clear 4.5:1 on the page surface. */
export const semanticColorLight: CuteTheme["color"] = {
  surface: primitiveColor.background.light,
  textPrimary: primitiveColor.ink.light.primary,
  textSecondary: primitiveColor.ink.light.secondary,
  textTertiary: "#3E4078",
  accent: primitiveColor.accent.periwinkle,
  border: primitiveColor.ink.light.tertiary,
  statusOkFill: primitiveColor.status.light.ok,
  statusOkText: "#146C36",
  statusWarnFill: primitiveColor.status.light.warn,
  statusWarnText: "#7A4B00",
  statusCritFill: primitiveColor.status.light.error,
  statusCritText: "#B11B22",
  statusStaleFill: primitiveColor.status.light.stale,
  statusStaleText: primitiveColor.ink.light.secondary,
  statusInfoFill: primitiveColor.accent.periwinkle,
  statusInfoText: "#2E3196",
  statusUnknownFill: primitiveColor.ink.light.tertiary,
  statusUnknownText: "#3E4078",
};
