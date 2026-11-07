# @cuteclown/motion

Closed-form springs, a shared frame scheduler, and gesture helpers. There are no runtime dependencies.

## Spring

`Spring` steps with an analytic solution. `response` is the period in seconds, and `ω0 = 2π / response`. `bounce` maps to the damping ratio with `ζ = 1 − clamp(bounce, 0, 0.99)`.

- `ζ < 1` is underdamped.
- `ζ = 1` is critical.
- `ζ > 1` is overdamped.

`setTarget` changes the target and keeps the current position and velocity. The spring is settled when both the distance and the velocity are under `0.001`.

## Scheduler

`createScheduler` queues reads and writes onto one animation frame. Every read in that frame runs before every write. `animateSpring` steps a spring from an injected clock and calls `onSettle` once.

## Reduced motion

`prefersReducedMotion` reads an injected `matchMedia`. `microPresets` each include a `reducedMotion` variant with `travel: 0`. FLIP uses `flipInvert(..., true)` to skip the travel and scale correction. A low-end override cuts the concurrent spring budget in half.
