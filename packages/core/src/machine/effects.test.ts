import { expect, test } from "vitest";
import { createMachine } from "./createMachine.ts";
import { bindStateEffects } from "./effects.ts";

test("leaving a state clears its timer before it can fire", () => {
  const machine = createMachine({
    initial: "idle",
    context: {},
    states: {
      idle: { on: { WAIT: "wait" } },
      wait: { on: { LEAVE: "done" } },
      done: {},
    },
  });
  const fired: string[] = [];
  const pending: Array<() => void> = [];
  bindStateEffects(
    () => machine.getSnapshot().state,
    (listener) => machine.subscribe(() => listener()),
    {
      wait: { timeoutMs: 1000, onTimeout: () => fired.push("timeout") },
    },
    (fire) => {
      pending.push(fire);
      return pending.length;
    },
    () => {
      pending.length = 0;
    },
  );
  machine.send({ type: "WAIT" });
  expect(pending).toHaveLength(1);
  machine.send({ type: "LEAVE" });
  pending[0]?.();
  expect(fired).toEqual([]);
  expect(machine.getSnapshot().state).toBe("done");
});
