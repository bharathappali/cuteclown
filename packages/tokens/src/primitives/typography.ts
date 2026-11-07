import { pxToRem } from "./space.ts";

/** Body copy stays at or above 12.5px. 11px is not a body size. */
export const typeScalePx = {
  eyebrow: 12.5,
  label: 12.5,
  body: 14,
  bodyLg: 16,
  title: 20,
  display: 26,
} as const;

export const bodyMinPx = 14;

export const fontStack = {
  body: "ui-rounded, system-ui, sans-serif",
  heading: "ui-rounded, system-ui, sans-serif",
  label: "system-ui, sans-serif",
  mono: "ui-monospace, monospace",
} as const;

export const fontFeature = {
  tabularNums: "tabular-nums",
} as const;

export const lineHeight = {
  body: 1.45,
} as const;

export const typeScaleRem = Object.fromEntries(
  Object.entries(typeScalePx).map(([name, px]) => [name, pxToRem(px)]),
) as { [K in keyof typeof typeScalePx]: string };
