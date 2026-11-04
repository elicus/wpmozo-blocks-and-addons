# Pattern Library handoff

**Updated:** 2026-11-04.
**Branches:**
- Lite `dev/sunil` → `origin/dev/sunil`;
- Pro `release/pattern-lib` → `origin/release/pattern-lib`.

Pro `dev/ayush` is off-limits.

## Status
| Step | State |
|---|---|
| Baseline decisions | Approved 2026-11-03 ([decisions.md](decisions.md)) |
| Stage A, LPL-1: integration contract + shared editor script | **Done** (tested; see [testing.md](testing.md)) |
| Stage C, LPL-2: registry, resolver, maps, validator, REST | **Done** (tested; see [testing.md](testing.md)) |
| Pro preparatory task | Done (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | **Done** (tracked in the Pro repository) |
| LPL-UX: UI prototype | **Approved as is** 2026-11-03 (PL-D17) |
| Stage D, LPL-3: UI, importer, placeholder block, entry points, library switch | **Done** (tested on WordPress 6.8.11 and 7.1.3; see [testing.md](testing.md)). Docs: [editor-ui.md](editor-ui.md), [import-workflow.md](import-workflow.md) |
| Stage E, PPL-2: Pro source + entitlement | **Done** (tracked in the Pro repository) |
| LPL-T + pilot (2 free + 2 Pro) | **Built and gated; waiting for the owner's design review.** No catalog expansion before approval. Tools and procedure: [pattern-authoring.md](pattern-authoring.md) |
| Stage F, X-1, release | Not started |

## Next step: owner review of the pilot (LPL-T checkpoint)
The owner asked on 2026-11-04 for temporary pilot designs made here instead of supplied ones (PL-D20).

**What exists:**
- Lite: `hero-product-launch` (hero: Fancy Heading, Star Rating) and `pricing-three-plans` (pricing: Pricing Table cards).
- The Pro repository has two Pro pilot patterns.
- Original local illustrations, 800 × 600 thumbnails and full previews.
- Authoring tools in `tools/pattern-library/`.

**Verified:** the quality gate passes for all four on WordPress 6.8.11 and 7.1.3; roles and licence states were checked ([testing.md](testing.md)).

**For the review:** design quality, choice of sections, copy. The patterns are temporary; the owner will replace or refine them later.

**After approval:** Stage F (remaining patterns, up to 10 free + 14 Pro, each through the gate). If the owner wants changes, revise the pilot first.

**Block issues found in the pilot** (separate tasks, not started): Advanced Button links, block scripts that use jQuery without declaring it, Pricing Table details. See [testing.md](testing.md).

## Open questions
1. Destination page for the Lite-to-Pro card. Until it is confirmed, `includes/library/data/links.php` (`pro-upgrade`) points to a clearly marked placeholder on `example.com` (PL-D21). **Release blocker.**

## Known limitations and observations
- `n.e.x.t` in `@since` tags is replaced with the real Lite version at release.
- **Catalog performance** in the WebAssembly harness: 500 patterns take about 0.2–0.35 s warm and 1 s cold (target 0.3 s; native PHP not measured). A generated metadata index is deferred until the real catalog grows.
- **Validator strictness:** a text attribute starting with "Data:" is rejected ([security.md](security.md)).
- **Lite blocks reset their `ID`** to the editor's client ID on every load, so opening a post marks it changed. Existing behaviour; aligning it with Pro's stable-ID approach is a separate block task.
- **Text-domain loader:** Lite registers it on `plugins_loaded` priority 10 from code that itself runs at priority 20. It probably never runs (not verified at runtime; WordPress 6.7+ loads translations just in time). A separate task.
- **Stale REST URL:** the editor receives a `wpmozo/v1/save-dynamic-style` URL for a route Lite doesn't register. The library doesn't use it.

## Release-only items (not implementation blockers)
- the final Lite-to-Pro card link (replace the `example.com` placeholder);
- pattern `since` values (provisional `1.10.0` in the pilot) and, for Pro, `published` dates;
- Lite requirement headers (real minimum WordPress 6.8);
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
