import { primitiveColor } from "../primitives/color.ts";
import type { CuteTheme } from "../theme.ts";

export const semanticColorDark: CuteTheme["color"] = {
  surface: primitiveColor.background.dark,
  textPrimary: primitiveColor.ink.dark.primary,
  textSecondary: primitiveColor.ink.dark.secondary,
  textTertiary: primitiveColor.ink.dark.tertiary,
  accent: "#B4B6FF",
  border: "#8E90C8",
  statusOkFill: primitiveColor.status.dark.ok,
  statusOkText: primitiveColor.status.dark.ok,
  statusWarnFill: primitiveColor.status.dark.warn,
  statusWarnText: primitiveColor.status.dark.warn,
  statusCritFill: primitiveColor.status.dark.error,
  statusCritText: primitiveColor.status.dark.error,
  statusStaleFill: primitiveColor.status.dark.stale,
  statusStaleText: primitiveColor.ink.dark.tertiary,
  statusInfoFill: "#B4B6FF",
  statusInfoText: primitiveColor.ink.dark.secondary,
  statusUnknownFill: primitiveColor.status.dark.stale,
  statusUnknownText: primitiveColor.ink.dark.tertiary,
};
