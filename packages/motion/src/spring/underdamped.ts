export type Sample = { x: number; v: number };

/** Closed-form underdamped spring. ζ must be below 1. */
export function underdampedAt(
  t: number,
  x0: number,
  v0: number,
  target: number,
  omega0: number,
  zeta: number,
): Sample {
  const omegaD = omega0 * Math.sqrt(1 - zeta * zeta);
  const A = x0 - target;
  const B = (v0 + zeta * omega0 * A) / omegaD;
  const decay = Math.exp(-zeta * omega0 * t);
  const cos = Math.cos(omegaD * t);
  const sin = Math.sin(omegaD * t);
  const x = target + decay * (A * cos + B * sin);
  const v = -zeta * omega0 * decay * (A * cos + B * sin) + decay * omegaD * (-A * sin + B * cos);
  return { x, v };
}
