export type ContrastKind = "text" | "boundary";

export type ContrastPair = {
  name: string;
  foreground: string;
  background: string;
  minimum: number;
  kind: ContrastKind;
};

/** Paths are read from a CuteTheme. Gradient card ink is checked against its solid fallback. */
export const contrastPairs: ContrastPair[] = [
  {
    name: "text-primary",
    foreground: "color.textPrimary",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "text-secondary",
    foreground: "color.textSecondary",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "text-tertiary",
    foreground: "color.textTertiary",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "status-ok-text",
    foreground: "color.statusOkText",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "status-warn-text",
    foreground: "color.statusWarnText",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "status-crit-text",
    foreground: "color.statusCritText",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "status-stale-text",
    foreground: "color.statusStaleText",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "status-info-text",
    foreground: "color.statusInfoText",
    background: "color.surface",
    minimum: 4.5,
    kind: "text",
  },
  {
    name: "border",
    foreground: "color.border",
    background: "color.surface",
    minimum: 3,
    kind: "boundary",
  },
  {
    name: "focus",
    foreground: "focus.color",
    background: "color.surface",
    minimum: 3,
    kind: "boundary",
  },
  {
    name: "gradient-card",
    foreground: "gradient.ink",
    background: "gradient.solidFallback",
    minimum: 4.5,
    kind: "text",
  },
];
