export const springPreset = {
  snappy: { response: 0.18, dampingRatio: 0.86 },
  smooth: { response: 0.28, dampingRatio: 0.92 },
  gentle: { response: 0.42, dampingRatio: 1 },
  bouncy: { response: 0.48, dampingRatio: 0.55 },
} as const;

export const durationMs = {
  fast: 150,
  medium: 240,
  slow: 320,
} as const;

export const easing = {
  standard: "cubic-bezier(.2,.8,.2,1)",
} as const;
