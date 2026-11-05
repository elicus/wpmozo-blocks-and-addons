# Pattern Library handoff

**Updated:** 2026-11-05 (compatibility audit). Read [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) first.
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
| Compatibility and future-proofing audit | **Done 2026-11-05** (docs `ec97921`). Findings: [known-issues.md](known-issues.md); results: [compatibility.md](compatibility.md), [testing.md](testing.md); stages R1–R6: [roadmap.md](roadmap.md). **Approved 2026-11-05** |
| R1: library robustness | **Done 2026-11-05:** code `98d4013`, suites `56dbfcb`. Passed on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 ([testing.md](testing.md)) |
| R5, R2, R3, R4, R6 | In progress, in that order |
| Stage F, X-1, release | Not started |

## Next steps
1. **Continue the approved stages** in the order R5, R2, R3, R4, R6 ([roadmap.md](roadmap.md)).
2. **Owner: review the pilot designs** (below). Stage F waits for it.

## Audit summary (2026-11-05)
- **Holds:** Lite alone, Lite + Pro, Pro inactive or older, Pro without Lite (notice), licence lock, role rules, real-HTTP protections, and saved pages through in-place Lite and Pro updates, licence and plugin deactivation. WordPress 6.8.11 and 7.1.3; PHP 7.4, 8.0, 8.2 and 8.5.
- **Confirmed library issues:** the catalog cache misses changes outside a source (KI-01); one malformed add-on file takes the library down (KI-02); a missing cross-source map key gives a generic message (KI-03).
- **Confirmed compatibility issues:** wrong requirement headers, and WordPress 6.5/6.7 with Pro fails on activation (KI-04); Lite's editor stylesheet uses a path newer WordPress may drop (KI-05); Pro with Lite 1.8.0 crashes Pro blocks in the editor; Pro Team Grid needs PHP 8.0 (details in the Pro repository).
- **Main risk:** Pro depends on Lite surfaces the contract doesn't version yet ([registry-and-contract.md](registry-and-contract.md) section 4).

## Pilot review (LPL-T checkpoint)
The owner asked on 2026-11-04 for temporary pilot designs made here instead of supplied ones (PL-D20).

**What exists:**
- Lite: `hero-product-launch` (hero: Fancy Heading, Star Rating) and `pricing-three-plans` (pricing: Pricing Table cards).
- The Pro repository has two Pro pilot patterns.
- Original local illustrations, 800 × 600 thumbnails and full previews.
- Authoring tools in `tools/pattern-library/`.

**Verified (2026-11-04) on WordPress 6.8.11 and 7.1.3** ([testing.md](testing.md)):
- the quality gate passes for all four, including editability;
- a full editing test passes 136/136 on each version: inline text, Inspector controls, links, images, colours, icons and nested data, kept through save and reload with no other block changed, and shown on the front end;
- roles, licence states and premium-content protection: 49/49 on each version.

**For the review:** design quality, choice of sections, copy. The patterns are temporary; the owner will replace or refine them later.

**After approval:** Stage F (remaining patterns, up to 10 free + 14 Pro, each through the gate). If the owner wants changes, revise the pilot first.

**Block issues found in the pilot** (separate tasks, not started): Advanced Button links, block scripts that use jQuery without declaring it, Pricing Table details. See [testing.md](testing.md).

## Open questions
1. Destination page for the Lite-to-Pro card. Until it is confirmed, `includes/library/data/links.php` (`pro-upgrade`) points to a clearly marked placeholder on `example.com` (PL-D21). **Release blocker.**

**Answered by the owner on 2026-11-05** (roadmap approval; recorded in [roadmap.md](roadmap.md)):
- Lite PHP requirement: keep 7.3 only if it can be verified at runtime; otherwise declare what the code really needs. Never declare an untested version.
- Pro Team Grid: rewrite for PHP 7.4 rather than raising Pro's minimum.
- Older Lite: Pro detects the contract, never crashes the editor, shows an actionable notice, and disables only what depends on the missing contract.
- Reusable suites: in `tools/pattern-library/tests/`, not shipped.
- Upgrade URL: one central, clearly marked release-blocking setting; no invented URL or licence-server behaviour.

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
