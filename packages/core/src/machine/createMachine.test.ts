import { expect, test } from "vitest";
import { createMachine } from "./createMachine.ts";

test("events transition and guards can refuse them", () => {
  const seen: string[] = [];
  const machine = createMachine({
    initial: "idle",
    context: { enabled: false },
    states: {
      idle: {
        on: {
          START: { target: "running", guard: (context) => context.enabled },
          ENABLE: "ready",
        },
      },
      ready: { on: { START: "running" } },
      running: {},
    },
  });
  machine.subscribe((snapshot) => seen.push(snapshot.state));
  expect(machine.send({ type: "START" }).state).toBe("idle");
  expect(machine.send({ type: "ENABLE" }).matches("ready")).toBe(true);
  expect(machine.send({ type: "START" }).state).toBe("running");
  expect(seen).toEqual(["ready", "running"]);
});
