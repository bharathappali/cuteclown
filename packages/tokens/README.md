# @cuteclown/tokens

Design tokens for CuteClown. The source of truth is TypeScript. A build writes CSS custom properties and JSON.

## Tiers

1. Primitive values: palette, type, space, motion.
2. Semantic roles: surface, text, status, focus.
3. Component tokens: card radius, button padding, and similar.

## Names

CSS variables use `--cc-` plus a kebab-case path, for example `--cc-color-text-primary`.

## Themes

`clownSoft` ships light, dark, and high-contrast variants. `createTheme({ extends, overrides })` deep-merges a new theme and freezes it.

## Contrast

`validate:contrast` fails when a text pair is under 4.5:1 or a boundary pair is under 3:1. Status fills that are too light to be text have separate, darker text colors.
