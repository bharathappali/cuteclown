import { expect, test } from "vitest";
import { createMachine } from "./createMachine.ts";

test("snapshots match the current state", () => {
  const machine = createMachine({
    initial: "closed",
    context: { id: 1 },
    states: { closed: { on: { OPEN: "open" } }, open: {} },
  });
  expect(machine.getSnapshot().matches("closed")).toBe(true);
  expect(machine.getSnapshot().context.id).toBe(1);
  machine.send({ type: "OPEN" });
  expect(machine.getSnapshot().matches("open")).toBe(true);
  expect(machine.getSnapshot().matches("closed")).toBe(false);
});
