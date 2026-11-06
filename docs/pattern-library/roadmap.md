# Pattern Library roadmap

Completed, pending and deferred work, kept apart. Pending stages from the 2026-11-05 compatibility audit are **proposals: nothing in them starts before the owner approves this roadmap.** Pro-only tasks are detailed in the private Pro repository (`docs/pattern-library/roadmap.md`); this file names them so the dependencies are visible.

Issue IDs (KI-…, R-…) refer to [known-issues.md](known-issues.md).

## Completed
| Stage | What | Where recorded |
|---|---|---|
| LPL-1 (Stage A) | Integration contract, shared editor script | [testing.md](testing.md), [registry-and-contract.md](registry-and-contract.md) |
| PPL-S, PPL-1 (Stage B) | Pro security port; Pro adopts the contract | Pro repository |
| LPL-2 (Stage C) | Registry, resolver, maps, validator, REST | [rest-api.md](rest-api.md), [security.md](security.md) |
| LPL-UX | UI prototype, approved as is (PL-D17) | [editor-ui.md](editor-ui.md) |
| LPL-3 (Stage D) | UI, importer, placeholder block, library switch | [editor-ui.md](editor-ui.md), [import-workflow.md](import-workflow.md) |
| PPL-2 (Stage E) | Pro source and phase-1 entitlement | Pro repository |
| LPL-T | Authoring tools; pilot 2 free + 2 Pro patterns; editability gate | [pattern-authoring.md](pattern-authoring.md) |
| Audit (2026-11-05) | Compatibility and future-proofing audit; project context and topic files | [compatibility.md](compatibility.md), [testing.md](testing.md), [known-issues.md](known-issues.md), this file |
| R1 (2026-11-05) | Library robustness: cache key, isolation of broken files, `lite_outdated` for missing Lite keys, fresh analysis on the content route (Lite `98d4013`) | [testing.md](testing.md) R1, decisions PL-D23–PL-D26 |
| R5 (2026-11-05) | Reusable test suites in `tools/pattern-library/tests/` (not shipped): REST, combinations, in-place updates, contract surfaces, PHP parse, plus `team-grid` (R3) and `wp-editor` (R6), first run in their stages (Lite `4ca209f`) | [testing.md](testing.md) R5 results |
| R2 (2026-11-06) | With a Lite without the contract, Pro checks Lite's editor globals in the editor and switches its block editing off only when they are missing; Lite finds Pro by file name or text domain (R-09); suites use the shipped Lite 1.8.0 zip (Lite tests `ee18c89`, code `23d89d6`; Pro `b7cc761`) | [testing.md](testing.md) R2 |
| R3 (2026-11-06) | PHP floor: Pro's Team Grid without PHP 8.0 syntax (every file of both plugins parses on 7.4); `Requires at least: 6.8` and `Requires PHP: 7.4` for Lite and Pro; Team Grid attribute defaults and output escaping (Lite suite `28d184c`, headers `afc5e91`; Pro in its repository) | [testing.md](testing.md) R3 |
| R4 (2026-11-06) | Contract surface freeze: every Lite surface add-ons use is inventoried, classified and machine-checked by the `contract` suite, including the R2 findings (the internal content wrapper, block on/off for add-on blocks, the Chart.js handle) and the editor object, post meta and names Lite reads from Pro found in R4. Lite is the only owner of the shared handles; Pro no longer registers Chart.js. No Lite plugin code changed (Lite tests `62a9bbf`; Pro `e79e4aa`) | [registry-and-contract.md](registry-and-contract.md) section 4, [testing.md](testing.md) R4, decisions PL-D27–PL-D29 |

## Waiting for the owner
1. **Pilot design review** (LPL-T checkpoint). Blocks Stage F only.

**Stages R1 to R6 were approved on 2026-11-05**, in the order R1, R5, R2, R3, R4, R6, with five decisions: Lite PHP floor only as verified by runtime tests; Team Grid rewritten for PHP 7.4 rather than raising Pro's minimum; Pro must never crash with an older Lite and disables only what depends on the missing contract; the reusable suites move into `tools/pattern-library/tests/`; the upgrade URL stays one central, clearly marked release-blocking setting, and no licence-server behaviour is invented.

## Approved stages (2026-11-05)
Implemented in the order R1, R5, R2, R3, R4, R6. None of them changes saved block output.

| Stage | Repo | Work | Needs | Acceptance criteria | Regression tests |
|---|---|---|---|---|---|
| **R1. Library robustness** | Lite | KI-01: cache key adds the Lite version, a validator rules version, the WordPress version and Lite's map times for every source. KI-02: each pattern and map file included inside `try`/`catch ( Throwable )`, skipped and reported. KI-03: an unknown token from another source reports `lite_outdated`. R-07: the content route uses the fresh `requires_unfiltered_html` | Approval | Upgrade run S9: pattern unavailable right after the Lite map change, without a flush. S11: catalog 200, broken pattern in `issues`, every other pattern still available and deliverable. c08: `lite_outdated`. Existing suites (LPL-2, LPL-3, LPL-T editability and roles) still pass on 6.8.11 and 7.1.3 | `upgrade.py` S9/S11 turned into pass/fail checks; new PHP-level checks in the LPL-2 suite; mutation proof: reverting each fix makes its check fail |
| **R2. Pro support floor for Lite** | Pro | Behaviour stays feature-detected. Add a support floor (the first public Lite with the contract) for messages; show a notice in the block editor as well as on the Plugins screen when the contract is missing; keep Pro blocks registered so saved content still renders. Detect Lite by its contract or constant instead of a hard-coded folder name, and guard `is_plugin_active()`. **Revised 2026-11-06 (owner):** with a Lite without the contract, Pro checks Lite's editor globals in the editor and switches its block editing off only when they are missing | Approval; the floor version is known at release (until then, "a Lite with the integration contract") | Lite 1.8.0 (shipped zip): Pro blocks work while Lite blocks are on (information notice); with every Lite block off, Pro blocks unsupported, a warning, edits saved, no crash or "invalid content". Current Lite: no notice. No fatal anywhere | `matrix` (`current`, `lite-1.8.0`, `lite-before-contract`), `upgrade`, `contract` |
| **R3. PHP floor** | Pro (and Lite headers at release) | Rewrite the four Team Grid templates without PHP 8.0 `match` (and keep 7.4 syntax), or declare `Requires PHP: 8.0` for Pro (open decision). Lite: `Requires PHP: 7.4` at release (open decision) | Decision | Every PHP file in both plugins parses on PHP 7.4; a Team Grid page renders on PHP 7.4 and 8.0 | `lint-all-74.cjs` over both repositories; `combo.py` p74 and p80 Team Grid pages |
| **R4. Contract surface freeze** | Lite (docs and test), Pro (usage list) | Document every Lite surface add-ons use (helpers, JS names, handles, hooks, post type, and the R2 findings R-14 and R-15) as frozen; a conformance script checks they exist in a Lite build; a usage scan checks Pro uses nothing else. Later, optionally, a versioned `helpers` feature | Approval | Conformance passes on HEAD; a deliberately renamed helper method makes it fail | Contract conformance suite and Pro usage scan ([testing.md](testing.md), planned) |
| **R5. Reusable test suites** | Lite (`tools/pattern-library/tests/`, not shipped) | Move the site-independent suites (combination checks, upgrade, roles, editability) into the repository with a small harness adapter; the offline boot scripts stay in the harness | Approval (adds files to the public repository; no `package.json` change) | Each suite runs from the repository against a harness site and reproduces today's results; documented in testing.md | The suites themselves; each keeps a mutation proof |
| **R6. WordPress-future hardening** | Lite (blocks and shared layer; separate from the library) | KI-05: editor stylesheet through `enqueue_block_assets`. R-02: one compatibility module for `__experimental*` components. R-03: no `defaultProps` on function components. R-11: opt-in props. Plus the existing block follow-ups (Advanced Button URL, undeclared jQuery) | Approval; separate block tasks | No "added to the iframe incorrectly" warning for WPMozo handles; Inspector of every block renders on the newest WordPress; saved output of every block unchanged | Browser smoke; editability gate; saved-output comparison per block |

**Suggested order:** R1 and R5 first (small, they make the later stages testable), then R2 and R3 (Pro release blockers), R4, and R6 as block work outside the library. Stage F can run in parallel once the pilot is approved, but every new Pro pattern should go through R1's checks.

## Planned (already approved, waiting for a dependency)
| Stage | Work | Needs |
|---|---|---|
| Stage F | Remaining patterns, up to 10 free + 14 Pro, each through the gate | Pilot approved |
| Stage G, X-1 | Full cross-plugin matrix ([compatibility.md](compatibility.md)), now automated by R5 | Stage F |
| Stage H, release | Versions, readme, `n.e.x.t`, headers, final Lite-to-Pro link, pattern `since`/`published`, WordPress.org guideline review, Pro release items | X-1 and the release blockers in [handoff.md](handoff.md) |

## Deferred (decided later, not scheduled)
- Licence phase 2 (expiry and revocation states): needs licence-server data (Pro repository).
- A generated metadata index for large catalogs: only when the catalog approaches 500 patterns ([testing.md](testing.md), performance).
- Importing content images into the Media Library (removes R-08).
- The library in the Site Editor, widgets editor and Customizer (decision D8).
- Future CDN for thumbnails and previews ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md), U1–U6).
- Multisite runtime test: Playground's multisite step needs the network, which the offline harness blocks; run it on another environment before release.
- Block issues found by Pattern Library work ([known-issues.md](known-issues.md), blocks; Pro block issues in the Pro repository): left to a separate developer after the Pattern Library is complete (PL-D29).
