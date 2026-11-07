import { createSnapshot, type MachineSnapshot } from "./snapshot.ts";

export type MachineEvent = { type: string };

export type Transition<T> =
  string | { target: string; guard?: (context: T, event: MachineEvent) => boolean };

export type MachineConfig<T> = {
  initial: string;
  context: T;
  states: Record<string, { on?: Record<string, Transition<T>> }>;
};

export function createMachine<T>(config: MachineConfig<T>) {
  let state = config.initial;
  const context = config.context;
  const listeners = new Set<(snapshot: MachineSnapshot<T>) => void>();

  function snapshot() {
    return createSnapshot(state, context);
  }

  function send(event: MachineEvent) {
    const transition = config.states[state]?.on?.[event.type];
    if (!transition) {
      return snapshot();
    }
    const target = typeof transition === "string" ? transition : transition.target;
    const guard = typeof transition === "string" ? undefined : transition.guard;
    if (guard && !guard(context, event)) {
      return snapshot();
    }
    state = target;
    const next = snapshot();
    for (const listener of listeners) {
      listener(next);
    }
    return next;
  }

  return {
    send,
    getSnapshot: snapshot,
    subscribe(listener: (snapshot: MachineSnapshot<T>) => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
