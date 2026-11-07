import type { Spring } from "../spring/Spring.ts";
import { createVelocityTracker } from "./velocity.ts";

type Tracker = ReturnType<typeof createVelocityTracker>;

export function createDrag({ spring, tracker }: { spring: Spring; tracker: Tracker }): {
  pointerDown(time: number, x: number): void;
  pointerMove(time: number, x: number): void;
  pointerUp(time: number, x: number): void;
} {
  let tracking = false;
  let originX = 0;
  let originPointer = 0;

  return {
    pointerDown(time, x) {
      tracking = true;
      originX = spring.x;
      originPointer = x;
      spring.v = 0;
      tracker.reset();
      tracker.add({ t: time, x, y: 0 });
    },
    pointerMove(time, x) {
      if (!tracking) {
        return;
      }
      spring.x = originX + (x - originPointer);
      spring.v = 0;
      tracker.add({ t: time, x, y: 0 });
    },
    pointerUp(time, x) {
      if (!tracking) {
        return;
      }
      tracking = false;
      tracker.add({ t: time, x, y: 0 });
      spring.x = originX + (x - originPointer);
      spring.v = tracker.velocity().x;
      spring.setTarget(spring.x);
    },
  };
}
