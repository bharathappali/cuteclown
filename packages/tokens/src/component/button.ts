import { pxToRem } from "../primitives/space.ts";

export const buttonToken = {
  paddingInline: pxToRem(16),
  paddingBlock: pxToRem(12),
  radius: pxToRem(12),
} as const;
