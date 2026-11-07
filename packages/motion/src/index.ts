export { MockClock, systemClock } from "./clock.ts";
export type { Clock } from "./clock.ts";
export { Spring } from "./spring/Spring.ts";
export { criticalAt } from "./spring/critical.ts";
export { overdampedAt } from "./spring/overdamped.ts";
export { dampingFromBounce, omegaFromResponse, springFromDurationBounce } from "./spring/params.ts";
export { underdampedAt } from "./spring/underdamped.ts";
export type { Sample } from "./spring/underdamped.ts";
