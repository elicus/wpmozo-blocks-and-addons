# Compatibility

Lite and Pro are released independently. This page records requirements, the support policy and the combinations that were actually tested, with the versions they ran on. "Expected" means designed but not tested. Issue IDs refer to [known-issues.md](known-issues.md).

## Requirements
| | Header says | Real minimum (evidence) | Proposed |
|---|---|---|---|
| WordPress | 5.0 | **6.8.** On 6.5.13 and 6.7.10 Lite activates but registers no blocks (its pre-6.8 fallback passes paths that don't exist; 41 "Block type names must contain a namespace prefix" notices); the library then marks every pattern `block_missing` (runs w65, w67, 2026-11-05). Built scripts also need the `react-jsx-runtime` handle (6.6+) | `Requires at least: 6.8` at release |
| PHP | 7.3 | **7.4 tested, 7.3 untestable.** Every Lite PHP file parses on PHP 7.4 (php-wasm, 2026-11-05). PHP 7.3 can't be run in the harness. WordPress 7.1.3 itself requires PHP 7.4 (`$required_php_version`); 6.8.11 requires 7.2.24 | `Requires PHP: 7.4` (open decision) |
| Highest tested | — | WordPress 7.1.3; PHP 8.5.10 (no notices or deprecations from either plugin) | — |

Header changes are release tasks ([roadmap.md](roadmap.md), stage H) and are never made silently. Pro's own requirements (it declares none, and its Team Grid needs PHP 8.0) are recorded in the Pro repository.

## Support policy (proposed with the 2026-11-05 audit)
| Combination | Status | What the user sees |
|---|---|---|
| Lite with the library + Pro from the Pattern Library branch, both current | **Supported** | Free and Pro patterns |
| Lite with the library, alone | **Supported** | Free patterns and one Lite-to-Pro card |
| Lite with the library + Pro installed but inactive | **Supported** | Free patterns; the card says "Activate WPMozo Pro" |
| Lite with the library + an older Pro without a pattern source | **Supported** | Free patterns; the card says "Update WPMozo Pro"; Pro blocks unchanged |
| Lite with the library + Pro, licence not activated | **Supported** | Pro patterns locked; their content is refused |
| An older Lite without the contract + current Pro | **Notice only (unsupported)** | No library. A Plugins-screen notice asks to update Lite. With Lite 1.8.0 Pro blocks crash in the editor; an editor notice and a stated floor are proposed (roadmap R2) |
| Pro active, Lite inactive or missing | **Notice only** | "requires … to be activated / installed"; Pro does nothing; no fatal |
| WordPress below 6.8 | **Unsupported** | Lite: no blocks, library shows every pattern unavailable. Lite + Pro: critical error on WordPress 6.5 and 6.7 (Pro start-up calls `is_plugin_active()`, which core loads on the front end only from 6.8). The headers are the fix |
| PHP 7.4 with Pro Team Grid | **Unsupported today** | A page with a Team Grid block and at least one member returns HTTP 500 (PHP 8.0 syntax in Pro templates); open decision in roadmap R3 |

Principles: Lite works without Pro; Pro must never break Lite; behaviour follows `supports()`, versions only drive notices; unsupported combinations show a notice, never a fatal error; saved content never changes because of plugin or licence state.

## Tested combinations: compatibility audit (2026-11-05)
Offline harness, `sessions/audit/combo.py` and `upgrade.py`. Plugin copies built from exact commits: Lite `1e8db93` ("HEAD") and Pro `362daba` ("Pro HEAD"); older copies `b91a5ec` (Lite 1.9.0 development, before the contract), Lite 1.8.0 (`git archive release/1.8.0`, not byte-compared with the WordPress.org zip), an LPL-2-stage Lite (library server, older maps), Pro `ef1909d` (before the contract) and the Pro May build `1d01924`. Blocks the pilot doesn't use were switched off (harness limit). Every run: 0 external connections.

Checks per run: front end, Plugins screen notices, post editor (handles printed), settings page, catalog and content routes as administrator, editor, author, contributor, subscriber and visitor, content without a licence, real HTTP requests (no nonce, query-string route, JSONP, direct pattern files, nonce path), PHP debug log; with the browser: globals, a Lite and a Pro block mounted, library window, save, reload, front end.

| Run | Combination | WordPress / PHP | Result |
|---|---|---|---|
| c01 | Lite HEAD + Pro HEAD | 7.1.3 / 8.2 | **Passed.** 4 patterns available to administrators and editors; authors and contributors get the 2 Pro patterns (free ones need `unfiltered_html`, as designed); subscriber 403, visitor 401; Pro content 403 without a licence; no markup in the catalog |
| c02 | Lite HEAD only | 7.1.3 / 8.2 | **Passed.** 2 free patterns; Pro ids 404 |
| c03 | Lite HEAD + Pro HEAD installed, inactive | 7.1.3 / 8.2 | **Passed.** Card: "Activate WPMozo Pro … Go to Plugins" |
| c04 | Lite HEAD + Pro `ef1909d` (older Pro) | 7.1.3 / 8.2 | **Passed.** Card: "Update WPMozo Pro"; Pro blocks mount, save, reload valid |
| c05 | Lite HEAD + Pro May build | 6.8.11 / 7.4 | **Passed.** As c04 |
| c06 | Lite `b91a5ec` (no contract) + Pro HEAD | 7.1.3 / 8.2 | **Notice.** Plugins screen: "Update WPMozo Blocks and Addons …"; no library routes (404); Pro blocks work while Lite blocks that set the globals are enabled |
| c07 | Lite 1.8.0 + Pro HEAD | 7.1.3 / 8.2 | **Fails in the editor.** Pro Advanced Counter: "This block has encountered an error" (`TypeError: d is not a function`); only the Plugins-screen notice explains it. Front end fine |
| c08 | LPL-2-stage Lite + Pro HEAD | 7.1.3 / 8.2 | **Partly.** `pro/about-process-timeline` is `invalid_content` because that Lite's icon map lacks the keys it uses (KI-03); the other Pro pattern is available |
| c09 | Pro HEAD active, Lite inactive | 7.1.3 / 8.2 | **Notice.** "requires … to be activated"; no fatal; no WPMozo scripts |
| c10 | Pro HEAD active, Lite folder missing | 7.1.3 / 8.2 | **Notice.** "requires … to be installed"; no fatal |
| w65 / w67 | Lite HEAD + Pro HEAD | 6.5.13, 6.7.10 / 8.2 | **Critical error** on activation on both. Cause captured on 6.7.10: `Call to undefined function is_plugin_active()` in Pro's main class (KI-04); 6.5.13 fails at the same step |
| w65 / w67 Lite only | Lite HEAD | 6.5.13, 6.7.10 / 8.2 | Activates; no Lite blocks register; library degrades (`block_missing`, content 409) |
| w68 | Lite HEAD + Pro HEAD | 6.8.11 / 7.4 | **Passed** (as c01) |
| p74 | As w68 with a Team Grid page and one member | 6.8.11 / 7.4 | **HTTP 500** on that page: `syntax error, unexpected '=>'` in Pro `block-team-grid/layout1.php:135`. Library unaffected |
| p80 | As p74 | 6.8.11 / 8.0 | **Passed.** The Team Grid page renders (200). Two PHP warnings from Pro's `team-grid/render.php` for a block saved without attributes (`defaultMemberImage`, `ID`); Pro block issue, recorded in the Pro repository |
| p85 | Lite HEAD + Pro HEAD | 7.1.3 / 8.5 | **Passed.** Debug log empty across front end, admin, editor and REST |
| m01 | Multisite | 7.1.3 / 8.2 | **Not tested.** Playground's multisite step needs the network; the guard blocked it |

**In-place updates on one running site** (`upgrade.py`, WordPress 7.1.3 / PHP 8.2; plugin folders replaced while WordPress runs, as an update does):

| Step | Result |
|---|---|
| S1 Lite `b91a5ec` + Pro `ef1909d`: a page saved by those editors (Fancy Heading, Star Rating, Pricing Table, Advanced Counter, Timeline with two items) | Saved; front end recorded |
| S2 Lite updated to HEAD, Pro unchanged | Contract and library appear; the page's content and front-end markup are byte-identical; all 7 blocks valid on reopening; card says "Update WPMozo Pro" |
| S3 Pro updated to HEAD | Pro patterns appear (entitled); the page still byte-identical and valid |
| S4 Pro pattern inserted from the library (39 blocks) | Valid after save and reload; front end correct |
| S5 Licence deactivated | Pro patterns locked, content 403; the saved page's content and front-end markup unchanged; still valid in the editor |
| S6 Pro deactivated | Pro patterns leave the catalog; saved markup unchanged on the front end (Pro styles and scripts no longer load); the editor shows Pro blocks as unsupported, as WordPress does for any missing block |
| S7 Pro reactivated | Everything valid again; front end byte-identical to S4 |
| S8 Lite inactive, Pro active | No fatal; Pro notice; saved pages still serve their markup |
| S9 A Lite icon key removed (simulates a Lite update without it) | **KI-01:** the catalog still lists the Pro pattern as available, the content route answers 422; correct only after the cache is flushed. **Fixed in R1:** now `lite_outdated` at once (`robustness` suite) |
| S11 A malformed Pro `pattern.php` | **KI-02:** the catalog and the free patterns' content route fail with a critical error. **Fixed in R1:** only that pattern is skipped and reported (`robustness` suite) |
| S10 Mutation proof: one class added to Fancy Heading's saved output | The reopen check reports the block invalid, so this test catches saved-output regressions |

## Earlier runs (kept as recorded)

### Integration contract (LPL-1, 2026-11-03)
- Older Lite releases have no contract: no `wpmozo_bna_integration()` and no `wpmozo_bna_loaded`. Add-ons must feature-detect ([registry-and-contract.md](registry-and-contract.md)).
- The shared editor script makes the Lite JS globals available even when every Lite block is disabled, also for Pro versions that don't know about it (it prints before block editor scripts).

| # | Combination | Environment | Result |
|---|---|---|---|
| — | Lite `b91a5ec` (before LPL-1) + Pro `ef1909d`, all Lite blocks disabled | WP 6.8.11, PHP 7.4 | **Reproduces the old problem:** Lite globals missing in the editor; Pro Alert Box throws `TypeError` and shows "This block has encountered an error" |
| — | Lite candidate + Pro `ef1909d`, all Lite blocks disabled | WP 6.8.11, PHP 7.4 | **Fixed:** shared script in the head before Pro editor scripts; globals present; Alert Box renders and its settings open |
| 9 | Lite candidate + Pro `ef1909d` (Lite updated, Pro unchanged), all blocks enabled | WP 7.1.3, PHP 8.2 | **Passed:** Lite and Pro blocks insert, save, reload valid, render on the front end; no PHP log entries |
| 7 | Lite candidate + Pro 1.0.0 May build (`1d01924`) | WP 6.8.11, PHP 7.4 | **Passed:** Pro blocks insert, save, reload valid |
| 1 | Lite candidate only | WP 7.1.3, PHP 8.2 | **Passed** |

### Pattern Library server side (LPL-2, 2026-11-03)
| Combination | Environment | Result |
|---|---|---|
| Lite only (fixture sources) | WP 7.1.3 / PHP 8.2 and WP 6.8.11 / PHP 7.4 | Passed (81/81 and 80/80) |
| Lite only, `DISALLOW_UNFILTERED_HTML` | WP 7.1.3 / PHP 8.2 | Passed: restricted patterns locked for everyone, including administrators |
| Lite + Pro `ef1909d` active (Pro registers no source yet) | WP 7.1.3 / PHP 8.2 | Passed: library works; Pro shown as active without patterns |
| Older Lite (no library) + any Pro | — | Not applicable: no library routes exist; Pro must feature-detect `library` (PPL-2) |

The pilot runs (LPL-T, 2026-11-04, WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2) are in [testing.md](testing.md).

## Not tested yet
- Multisite at runtime (blocked offline; core gives `unfiltered_html` only to super admins there, checked in WordPress source).
- WooCommerce-dependent patterns (none exist yet).
- An expired or revoked licence (needs licence-server data; Pro repository).
- The editor with every Lite and Pro block active (harness limit, R-12).
- WordPress versions newer than 7.1.3 and Gutenberg plugin releases (no offline copies).
- Lite 1.8.0 as distributed on WordPress.org (the harness copy is a `git archive`).
