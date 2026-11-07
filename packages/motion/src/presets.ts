export type MotionPreset = {
  response: number;
  bounce: number;
  travel: number;
  reducedMotion: { response: number; bounce: number; travel: number };
};

function preset(response: number, bounce: number): MotionPreset {
  return {
    response,
    bounce,
    travel: 1,
    reducedMotion: { response: 0.01, bounce: 0, travel: 0 },
  };
}

/** Response times match the token spring presets. Bounce is 1 − damping ratio. */
export const microPresets = {
  hover: preset(0.18, 0.14),
  press: preset(0.12, 0),
  focus: preset(0.16, 0),
  toggle: preset(0.28, 0.08),
  appear: preset(0.32, 0.1),
  number: preset(0.42, 0),
} as const;
