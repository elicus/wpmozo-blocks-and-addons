# Pattern Library handoff

**Updated:** 2026-11-11 (final validation). Read [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) first.
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
| R5: reusable test suites | **Done 2026-11-05:** suites `4ca209f`. Baselines before R2 and R3 recorded in [testing.md](testing.md) (R5 results) |
| R2: Pro with an older Lite | **Done 2026-11-06:** suites `ee18c89`, `rest.php` (R-09) `23d89d6`; Pro editor guard `b7cc761` (Pro repository). Passed on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 ([testing.md](testing.md) R2) |
| R3: PHP floor and requirement headers | **Done 2026-11-06:** suite `28d184c`, headers `afc5e91` (`Requires at least: 6.8`, `Requires PHP: 7.4`); Pro Team Grid without `match` (Pro repository). Passed on WordPress 6.5–7.1.3 and PHP 7.4, 8.2 and 8.5 ([testing.md](testing.md) R3) |
| R4: contract surface freeze | **Done 2026-11-06:** tests `62a9bbf`; Pro stops registering Chart.js `e79e4aa` (Pro repository). `contract` 26/26 on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2, every new check with a mutation proof ([testing.md](testing.md) R4) |
| R6: WordPress-future hardening | **Done 2026-11-06:** editor stylesheet on `enqueue_block_assets` `a54216c` (KI-05, PL-D30), tests `4e9f12d`. `wp-editor` 14/17 on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2: every R6 check passes; the 3 failures are one block issue (B-R6-2) ([testing.md](testing.md) R6) |
| Final validation | **Done 2026-11-11:** every suite on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 with Lite `044cd2b` and Pro `9d4647b`: 245 of 248 checks on each; the 3 failures are block issue B-R6-2 ([testing.md](testing.md)) |
| Stage F, X-1, release | Not started |

## Session handover (2026-11-11, final validation done; R1–R6 complete)
- **Committed and pushed:** R1 (`98d4013`, suites `56dbfcb`, docs `0f13330`); R5 (suites `4ca209f`, docs `c562ec4`); R2 (suites `ee18c89`, `rest.php` `23d89d6`, docs `758f242`; Pro `b7cc761`); R3 (suite `28d184c`, headers `afc5e91`, docs `eb9b289`); R4 (tests `62a9bbf`, docs `6668ac0`; Pro `e79e4aa`); R6 (code `a54216c`, tests `4e9f12d`, docs `044cd2b`); final validation (docs, the commit after `044cd2b`). Pro commits and docs are in its repository.
- **Final validation (2026-11-11, Lite `044cd2b` + Pro `9d4647b`):** every suite on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4: 245 of 248 checks pass on each; the 3 failures are block issue B-R6-2 ([testing.md](testing.md), final validation).
- **Uncommitted work:** none in either repository.
- **Limits to know:** R2's newline-only re-serialization of nested Pro blocks on saves while Pro editing is switched off; the site and widget editors and repeated saves were checked by one-off scripts, not committed suites; with Lite 1.8.0 or older Pro's charts can't draw; the `contract` suite checks names and the listed behaviours, not the props of each shared component.

## Release readiness (2026-11-11)
The R1–R6 stages are complete. Before a Lite release:

| Item | State | Owner |
|---|---|---|
| Lite-to-Pro card link | `includes/library/data/links.php` `pro-upgrade` still points to the `example.com` placeholder (PL-D21) | Owner: the destination page. **Release blocker** |
| Release version | The main file and `readme.txt` already say **1.9.0**, while the free pilot patterns' `since` and Pro's stated minimum Lite say **1.10.0** (both provisional). Decide which Lite release first ships the contract and align all three | Owner, at release |
| `n.e.x.t` | 20 placeholders in 9 Lite files (the integration contract, the library classes, the asset and main classes), replaced with that version | Release task |
| Readme | Changelog entry for the release; requirement headers are already set (`Requires at least: 6.8`, `Requires PHP: 7.4`) | Release task |
| WordPress.org review | A guideline review of the release build (the test tools in `tools/` are not shipped: `plugin-zip` packs only `build/`, `includes/`, the main file and the readme) | Release task |
| Pilot designs | Waiting for the owner's review; Stage F (more patterns) waits for it | Owner |
| Pro release items | Tracked in the Pro repository | Pro |
| Not tested here | Multisite; MySQL; a native-PHP editor with every block on (R-12); newer WordPress or Gutenberg builds | Before release, on another environment |
| Block issues | B-R4-3, B-R4-4 (fix before the next Lite release: the stray attribute is not released yet), B-R6-1, B-R6-2 and the earlier block list in [known-issues.md](known-issues.md) | Separate developer (PL-D29) |

## Next steps
1. **Owner:** the release decisions above (card link, release version).
2. **Owner: review the pilot designs** (below). Stage F waits for it.
3. The block issues in [known-issues.md](known-issues.md) go to a separate developer (PL-D29); B-R4-4 is best fixed before the next Lite release.
4. **Owner, test tools (optional):** keep `wp-editor`'s experimental-export check strict (it fails until B-R6-2 is fixed) or narrow it to exports the code uses; give the gate's editability step the same 60 s wait as its insert step (one 30 s timeout seen in R6, [testing.md](testing.md)).

## Audit summary (2026-11-05)
- **Holds:** Lite alone, Lite + Pro, Pro inactive or older, Pro without Lite (notice), licence lock, role rules, real-HTTP protections, and saved pages through in-place Lite and Pro updates, licence and plugin deactivation. WordPress 6.8.11 and 7.1.3; PHP 7.4, 8.0, 8.2 and 8.5.
- **Confirmed library issues:** the catalog cache misses changes outside a source (KI-01); one malformed add-on file takes the library down (KI-02); a missing cross-source map key gives a generic message (KI-03).
- **Confirmed compatibility issues:** wrong requirement headers, and WordPress 6.5/6.7 with Pro fails on activation (KI-04; fixed in R2 and R3); Lite's editor stylesheet uses a path newer WordPress may drop (KI-05; fixed in R6); Pro with Lite 1.8.0 crashes Pro blocks in the editor (corrected in R5 and R2: with the shipped 1.8.0 Pro works while Lite blocks are on; with every Lite block off it crashed and lost edits until R2); Pro Team Grid needs PHP 8.0 (details in the Pro repository).
- **Main risk:** Pro depends on Lite surfaces the contract doesn't version yet ([registry-and-contract.md](registry-and-contract.md) section 4). Since R4 they are frozen and machine-checked.

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
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
