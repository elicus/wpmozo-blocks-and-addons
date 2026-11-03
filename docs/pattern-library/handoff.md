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
| Pro preparatory task | Done (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | In progress on Pro |
| LPL-UX: UI prototype | **Approved as is** 2026-11-03 (PL-D17) |
| Stage D, LPL-3: UI, importer, placeholder block, entry points, library switch | **Done** (tested on WordPress 6.8.11 and 7.1.3; see [testing.md](testing.md)). Docs: [editor-ui.md](editor-ui.md), [import-workflow.md](import-workflow.md) |
| Stage E, PPL-2: Pro source + entitlement | After PPL-1 |
| LPL-T + pilot (2 free + 2 Pro) | After Stage E. **Owner review checkpoint**; no catalog expansion before approval |
| Stage F, X-1, release | Not started |

## Next step: LPL-T + pilot
Lite has nothing left before LPL-T. LPL-T needs:
- Stage E (PPL-2) for its Pro half (in progress on Pro);
- the pilot designs, which **the owner will supply** (answered 2026-11-03).

**Scope:**
- the authoring and thumbnail pipeline: export helper, thumbnail capture, validity gate;
- `pattern-authoring.md`;
- 2 free and 2 Pro patterns end to end.

**Then stop for the owner's design review.** Readiness review section G, row 7.

**With no patterns** (Lite's own catalog is empty until the pilot):
- the window shows "No patterns yet" and a zero count, with no errors;
- the Lite-to-Pro card appears only after free patterns, so it is not shown.

Checked on 2026-11-03 on WordPress 6.8.11 and 7.1.3.

## Open questions
1. Destination page for the Lite-to-Pro card. Configured in `includes/library/data/links.php` (`pro-upgrade`, empty for now). Until it is set, the card shows no link.
2. ~~Who supplies the pilot pattern designs.~~ **Answered 2026-11-03: the owner supplies them.** LPL-T starts when they arrive and PPL-2 is done.

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
