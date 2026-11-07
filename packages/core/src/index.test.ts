import { expect, test } from "vitest";
import * as core from "./index.ts";

test("core exports the machine, focus, live region, and layer stack", () => {
  expect(Object.keys(core).sort()).toEqual(
    [
      "bindChild",
      "bindStateEffects",
      "createAnnouncer",
      "createFocusScope",
      "createId",
      "createLayerStack",
      "createMachine",
      "createRovingTabIndex",
      "createSnapshot",
      "mergeProps",
      "resetIds",
      "startTimer",
    ].sort(),
  );
});
