export function omegaFromResponse(responseSeconds: number): number {
  return (2 * Math.PI) / responseSeconds;
}

export function dampingFromBounce(bounce: number): number {
  const clamped = Math.min(0.99, Math.max(0, bounce));
  return 1 - clamped;
}

export function springFromDurationBounce(
  durationMs: number,
  bounce: number,
): {
  omega0: number;
  zeta: number;
} {
  return {
    omega0: omegaFromResponse(durationMs / 1000),
    zeta: dampingFromBounce(bounce),
  };
}
