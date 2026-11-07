# @cuteclown/css

Base styles for CuteClown. Component classes use the `cc-` prefix inside the `cc.components` cascade layer.

## Glass

`.cc-glass` uses `backdrop-filter`. Keep that to a few large surfaces (page fields and primary cards). Do not stack blurs on every chip, row, or tooltip. `prefers-reduced-transparency` and `forced-colors` drop the blur and paint a solid fill.

## Themes

`themes/light.css` is the default. `themes/dark.css` applies under `[data-cc-theme="dark"]`. `themes/high-contrast.css` applies under `[data-cc-contrast="more"]` and also strengthens the border when `prefers-contrast: more`.

## Build

`pnpm --filter @cuteclown/css build` bundles `src/index.css` with Lightning CSS into `dist/index.css` plus a source map.
