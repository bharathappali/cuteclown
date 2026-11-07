import type { Scheduler } from "./scheduler.ts";
import type { Spring } from "./spring/Spring.ts";

export type AnimationClock = { now(): number };

export function animateSpring(
  spring: Spring,
  {
    scheduler,
    clock,
    onUpdate,
    onSettle,
  }: {
    scheduler: Scheduler;
    clock: AnimationClock;
    onUpdate: (value: number) => void;
    onSettle: () => void;
  },
): () => void {
  let stopped = false;
  let settled = false;
  let last = clock.now();

  const frame = () => {
    if (stopped || settled) {
      return;
    }
    const now = clock.now();
    const dt = Math.min(0.064, Math.max(0, (now - last) / 1000));
    last = now;
    if (dt > 0) {
      spring.step(dt);
    }
    onUpdate(spring.x);
    if (spring.settled) {
      settled = true;
      onSettle();
      return;
    }
    scheduler.write(frame);
  };

  scheduler.write(frame);
  return () => {
    stopped = true;
  };
}
