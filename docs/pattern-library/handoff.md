# Pattern Library handoff

**Updated:** 2026-11-03.
**Branches:**
- Lite `dev/sunil` → `origin/dev/sunil`;
- Pro `release/pattern-lib` → `origin/release/pattern-lib`.

Pro `dev/ayush` is off-limits.

## Status
| Step | State |
|---|---|
| Baseline decisions | Approved 2026-11-03 ([decisions.md](decisions.md)) |
| Stage A, LPL-1: integration contract + shared editor script | **Done** (tested; see [testing.md](testing.md)) |
| Stage C, LPL-2: registry, resolver, maps, validator, REST | **Done** (tested; see [testing.md](testing.md)). No patterns ship yet; Lite's `media` map is empty until the pilot |
| Pro preparatory task | In progress (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | Next on Pro, after its preparatory task |
| **LPL-UX: UI prototype** | **Next on Lite. Owner review checkpoint:** the real UI shell built with `@wordpress/components` against mock catalog data, in a harness copy, not committed until approved |
| Stage D, LPL-3: UI, importer, placeholder block, entry points, library on/off setting | After LPL-UX approval |
| Stage E, PPL-2: Pro source + entitlement | After PPL-1 |
| LPL-T + pilot (2 free + 2 Pro) | After Stages D and E. **Owner review checkpoint**; no catalog expansion before approval |
| Stage F, X-1, release | Not started |

## Next step: LPL-UX prototype

The prototype must show the whole primary flow:
- opening the library;
- searching, filtering by source and availability, choosing a category;
- previewing;
- a Pro-locked pattern;
- an unavailable pattern (with its reason);
- inserting (mock);
- loading, empty and error states.

It runs at 360, 768 and 1440 px, with keyboard and screen-reader checks. Design basis: readiness review section D and decision PL-D10. Present it for review before Stage D.

## Open questions (none blocks the prototype)
1. Destination page for the Lite-to-Pro card. Configured in `includes/library/data/links.php` (`pro-upgrade`, empty for now).
2. Who supplies the pilot pattern designs. Needed before LPL-T.

## Known limitations and observations
- `n.e.x.t` in `@since` tags is replaced with the real Lite version at release.
- **Catalog performance** in the WebAssembly harness: 500 patterns take about 0.2–0.35 s warm and 1 s cold (target 0.3 s; native PHP not measured). A generated metadata index is deferred until the real catalog grows.
- **Validator strictness:** a text attribute starting with "Data:" is rejected ([security.md](security.md)).
- **Lite blocks reset their `ID`** to the editor's client ID on every load, so opening a post marks it changed. Existing behaviour; aligning it with Pro's stable-ID approach is a separate block task.
- **Text-domain loader:** Lite registers it on `plugins_loaded` priority 10 from code that itself runs at priority 20. It probably never runs (not verified at runtime; WordPress 6.7+ loads translations just in time). A separate task.
- **Stale REST URL:** the editor receives a `wpmozo/v1/save-dynamic-style` URL for a route Lite doesn't register. The library doesn't use it.

## Release-only items (not implementation blockers)
- Lite requirement headers (real minimum WordPress 6.8);
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
