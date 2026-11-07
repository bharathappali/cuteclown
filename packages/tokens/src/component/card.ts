import { pxToRem } from "../primitives/space.ts";

export const cardToken = {
  radius: pxToRem(24),
  padding: pxToRem(24),
  borderWidth: "1px",
} as const;
