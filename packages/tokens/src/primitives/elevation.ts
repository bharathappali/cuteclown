const ink = "rgba(70,72,150,";

export const elevation = {
  light: {
    shadow1: `0 1px 2px ${ink}0.08), 0 6px 18px ${ink}0.10)`,
    shadow2: `0 2px 6px ${ink}0.10), 0 18px 48px ${ink}0.18)`,
  },
  dark: {
    shadow1: "0 1px 2px rgba(0,0,0,0.30), 0 6px 18px rgba(0,0,0,0.35)",
    shadow2: "0 2px 6px rgba(0,0,0,0.35), 0 18px 48px rgba(0,0,0,0.45)",
  },
} as const;
