import { expect, test } from "vitest";
import { bindChild } from "./children.ts";
import { createMachine } from "./createMachine.ts";

test("a child starts with the parent state and stops when that state exits", () => {
  const parent = createMachine({
    initial: "closed",
    context: {},
    states: {
      closed: { on: { OPEN: "open" } },
      open: { on: { CLOSE: "closed" } },
    },
  });
  const events: string[] = [];
  const child = {
    start() {
      events.push("start");
    },
    stop() {
      events.push("stop");
    },
    send(event: { type: string }) {
      events.push(event.type);
    },
  };
  const binding = bindChild(parent, child, { activeState: "open" });
  parent.send({ type: "OPEN" });
  binding.forward({ type: "PING" });
  parent.send({ type: "CLOSE" });
  binding.forward({ type: "PING" });
  expect(events).toEqual(["start", "PING", "stop"]);
});
