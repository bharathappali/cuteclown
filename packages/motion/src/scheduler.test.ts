import { expect, test } from "vitest";
import { createScheduler } from "./scheduler.ts";

test("one frame runs every read before every write", () => {
  const frames: Array<() => void> = [];
  const order: string[] = [];
  const scheduler = createScheduler(
    (flush) => {
      frames.push(flush);
      return frames.length;
    },
    () => undefined,
  );
  scheduler.write(() => order.push("write-a"));
  scheduler.read(() => order.push("read-a"));
  scheduler.read(() => order.push("read-b"));
  scheduler.write(() => order.push("write-b"));
  expect(frames).toHaveLength(1);
  frames[0]?.();
  expect(order).toEqual(["read-a", "read-b", "write-a", "write-b"]);
});
