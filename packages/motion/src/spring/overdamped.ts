import type { Sample } from "./underdamped.ts";

/** Closed-form overdamped spring. ζ must be above 1. */
export function overdampedAt(
  t: number,
  x0: number,
  v0: number,
  target: number,
  omega0: number,
  zeta: number,
): Sample {
  const alpha = omega0 * Math.sqrt(zeta * zeta - 1);
  const A = x0 - target;
  const B = (v0 + zeta * omega0 * A) / alpha;
  const decay = Math.exp(-zeta * omega0 * t);
  const cosh = Math.cosh(alpha * t);
  const sinh = Math.sinh(alpha * t);
  const x = target + decay * (A * cosh + B * sinh);
  const v = -zeta * omega0 * decay * (A * cosh + B * sinh) + decay * alpha * (A * sinh + B * cosh);
  return { x, v };
}
