export type Rgb = { r: number; g: number; b: number; a: number };

function channel(value: number): number {
  const scaled = value / 255;
  return scaled <= 0.04045 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
}

export function parseColor(input: string): Rgb {
  const hex = input.trim();
  const short = /^#([0-9a-f]{3})$/i.exec(hex);
  if (short?.[1]) {
    const [r, g, b] = short[1].split("");
    return parseColor(`#${r}${r}${g}${g}${b}${b}`);
  }
  const full = /^#([0-9a-f]{6})$/i.exec(hex);
  if (full?.[1]) {
    return {
      r: Number.parseInt(full[1].slice(0, 2), 16),
      g: Number.parseInt(full[1].slice(2, 4), 16),
      b: Number.parseInt(full[1].slice(4, 6), 16),
      a: 1,
    };
  }
  const rgba = /^rgba?\(([^)]+)\)$/i.exec(hex);
  if (rgba?.[1]) {
    const parts = rgba[1].split(",").map((part) => Number.parseFloat(part));
    return { r: parts[0] ?? 0, g: parts[1] ?? 0, b: parts[2] ?? 0, a: parts[3] ?? 1 };
  }
  throw new Error(`unsupported color ${input}`);
}

export function composite(foreground: string, background: string): Rgb {
  const fg = parseColor(foreground);
  const bg = parseColor(background);
  const alpha = fg.a;
  return {
    r: Math.round(fg.r * alpha + bg.r * (1 - alpha)),
    g: Math.round(fg.g * alpha + bg.g * (1 - alpha)),
    b: Math.round(fg.b * alpha + bg.b * (1 - alpha)),
    a: 1,
  };
}

export function relativeLuminance(input: string | Rgb): number {
  const rgb = typeof input === "string" ? parseColor(input) : input;
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}

export function contrastRatio(foreground: string, background: string): number {
  const fg = composite(foreground, background);
  const lighter = Math.max(relativeLuminance(fg), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(fg), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}
