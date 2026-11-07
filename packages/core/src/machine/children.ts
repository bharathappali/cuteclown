import type { MachineEvent } from "./createMachine.ts";
import type { MachineSnapshot } from "./snapshot.ts";

export type ChildActor = {
  start: () => void;
  stop: () => void;
  send: (event: MachineEvent) => void;
};

export function bindChild<T>(
  parent: {
    getSnapshot: () => MachineSnapshot<T>;
    subscribe: (listener: (snapshot: MachineSnapshot<T>) => void) => () => void;
  },
  child: ChildActor,
  { activeState }: { activeState: string },
): { forward: (event: MachineEvent) => void; stop: () => void } {
  let running = false;

  function sync() {
    const active = parent.getSnapshot().matches(activeState);
    if (active && !running) {
      running = true;
      child.start();
    } else if (!active && running) {
      running = false;
      child.stop();
    }
  }

  sync();
  const unsubscribe = parent.subscribe(sync);
  return {
    forward(event) {
      if (running) {
        child.send(event);
      }
    },
    stop() {
      if (running) {
        running = false;
        child.stop();
      }
      unsubscribe();
    },
  };
}
