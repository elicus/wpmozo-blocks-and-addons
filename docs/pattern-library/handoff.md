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
| Stage A, LPL-1: integration contract + shared editor script | **Done.** Tested ([testing.md](testing.md)); commit hashes in the git log |
| Pro preparatory task | In progress (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | Next on Pro, after its preparatory task |
| Stage C, LPL-2: registry, resolver, maps, validator, REST | **Next on Lite** |
| LPL-UX: UI prototype | After Stage C starts; **owner review checkpoint** |
| Stage D–F, LPL-T pilot, X-1, release | Not started. The LPL-T pilot (2 free + 2 Pro) is an **owner review checkpoint**; no catalog expansion before approval |

## Next step: Stage C (LPL-2)

Start with the experiment that finalises the restricted-HTML list (decision PL-D05):
- save and reload per block type for Author, Contributor, Editor and Admin;
- the same for a multisite site admin and under `DISALLOW_UNFILTERED_HTML`;
- on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 in the harness.

Then implement:
- the registry and asset resolver;
- the central maps;
- the validator;
- `GET /wpmozo/v1/library/catalog` and `GET /wpmozo/v1/library/patterns/<source>/<slug>`;
- advertising the `library` feature.

Design: readiness review sections A2–A8.

## Open questions (none blocks Stage C)
1. Destination page for the Lite-to-Pro card. Needed before Stage D; until then it is a configurable value.
2. Who supplies the pilot pattern designs. Needed before LPL-T.

## Known limitations and observations
- `n.e.x.t` in `@since` tags is replaced with the real Lite version at release.
- Lite blocks reset their `ID` to the editor's client ID on every load, so opening a post marks it as changed. This is existing behaviour, not caused by the library. Aligning it with Pro's stable-ID approach is a separate block task.
- Lite registers its text-domain loader on `plugins_loaded` priority 10 from code that itself runs at priority 20. It probably never runs (not verified at runtime; WordPress 6.7+ loads translations just in time anyway). A separate task.
- The editor receives a `wpmozo/v1/save-dynamic-style` REST URL for a route Lite doesn't register. The library doesn't use it.

## Release-only items (not implementation blockers)
- Lite requirement headers (real minimum WordPress 6.8);
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
