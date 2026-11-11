# Testing

Results are recorded only for checks that were actually run. Anything not run is listed as not tested.

## Tools
| Check | Command / tool |
|---|---|
| PHP syntax | `php -l` with PHP 8.0, 8.1, 8.2 (Local's bundled binaries) and 8.4 (Homebrew) |
| PHP 7.3 compatibility (static) | PHPCompatibilityWP 2.1.8 (`testVersion 7.3-`), installed inside the test harness only. **Limit found 2026-11-05:** it is built on PHPCompatibility 9.3.5, which reports nothing on PHP 8.0 `match` or 7.4 arrow functions, so it only proves what it knows |
| PHP 7.4 parse (runtime) | Every PHP file of both plugins parsed on real PHP 7.4 (php-wasm, `token_get_all( …, TOKEN_PARSE )`), harness script `sessions/audit/lint-all-74.cjs` (added 2026-11-05) |
| Coding standards | PHPCS `WordPress` standard: whole file for new files, changed lines for existing files (existing files have older violations) |
| JS lint | `npx wp-scripts lint-js <files>` |
| Build | `npm run build` (`wp-scripts build --blocks-manifest`); compare SHA-256 of every file in `build/` before and after |
| Runtime | Offline WordPress Playground harness (outside this repository): WordPress 6.8.11 / PHP 7.4.33 and 7.1.3 / PHP 8.2.33. Plugin copies only; no outbound network (Node guard + `lsof` polling); loopback-only listeners |
| Browser | The editor driven in a browser against the harness. Playwright 1.58 (from `node_modules`) can drive the installed Google Chrome without downloading browsers; browser runs block non-loopback requests |

**Harness notes:**
- A blueprint file passed to the Playground CLI ignores `--wp`/`--login`, so the runner pins `preferredVersions.wp` to the local WordPress zip. Without that, the CLI tries an online version lookup; the guard blocked one such attempt, and its log is kept.
- WordPress loads admin avatars from Gravatar. The harness test plugin replaces them with a local image, so browser tests stay local.

## LPL-1 (integration contract and shared editor script), 2026-11-03

| Check | Result |
|---|---|
| `php -l` (8.0, 8.1, 8.2, 8.4) on the 4 changed/new PHP files | Passed |
| PHPCompatibilityWP 7.3+ on the same files | Passed (0 issues) |
| PHPCS WordPress: new files (whole), changed lines of existing files | Passed (0 issues) |
| ESLint on `src/shared/index.js`, `webpack.config.js` | Passed |
| `npm run build` | Passed (exit 0) |
| Existing build output unchanged | **Passed:** all 440 pre-existing files in `build/` byte-identical; 67 blocks in the manifest; only `build/shared/` added |
| Contract on PHP 7.4 and 8.2 | Passed: `wpmozo_bna_loaded` fired once; `features()` = `integration:1, shared-js:1`; `supports()` true/false as specified (incl. unknown feature, higher version, non-string) |
| PHP notices | None (`debug.log` empty in every run) |
| Front end | Shared script not loaded |
| All Lite blocks disabled + Pro `ef1909d`, **before** (Lite `b91a5ec`), WP 6.8.11 | Reproduced the old problem: Lite globals missing; Pro Alert Box `TypeError: s is not a function`; "This block has encountered an error" |
| Same, **after** (candidate), WP 6.8.11 | Passed: shared script in the head before Pro editor scripts; `window.WPMozoBNA` complete; Alert Box renders and its settings open |
| Lite + Pro `ef1909d`, all blocks enabled, WP 7.1.3 | Passed: Lite + Pro blocks inserted, saved, reloaded valid; front end renders both; `WPMozoBNA.components` is the same object as `WPMozoBNAComponents` |
| Lite + Pro 1.0.0 May build (`1d01924`), WP 6.8.11 | Passed: 12 Pro blocks (with inner blocks) saved and reloaded valid; no block warnings |
| Lite only, WP 7.1.3 | Passed: 3 Lite blocks (4 incl. inner) saved and reloaded valid; no console errors |
| Network | All runs: 0 external connections, 0 non-loopback listeners |

**Console errors seen, not caused by LPL-1:**
- Pro `ef1909d` `interactive-circle/script.js` MutationObserver error: also present before LPL-1 (Lite `b91a5ec`).
- Pro May build `timeline/script.js` "reading 'top'" when a Timeline block is inserted: identical with Lite `b91a5ec` (before LPL-1), so it predates LPL-1.

## LPL-2 (registry, resolver, maps, validator, REST), 2026-11-03

**Setup:**
- Harness-only test plugins provide:
  - a free fixture source with 19 patterns (good ones, plus deliberately broken metadata, content, tokens and requirements);
  - a premium fixture source with an entitlement callback driven by an option;
  - a 500-pattern source for performance;
  - bad source registrations.
- REST routes are called internally as each user: admin, editor, author, contributor, subscriber, anonymous.
- Suites: `sessions/lpl-1/test_lpl2.py` and `test_lpl2_env.py` in the harness.

| Check | Result |
|---|---|
| `php -l` 8.0/8.1/8.2/8.4, PHPCompatibilityWP 7.3+, PHPCS WordPress (new files whole; changed lines of existing files) | Passed |
| **Restricted-HTML experiment** (before coding): 108 WPMozo blocks with default attributes, through the Author save filter, then parsed in the editor | WordPress 7.1.3 and 6.8.11 identical: 44 changed, 43 invalid afterwards; Content Wrapper changed but valid; 64 unchanged all valid (2 child blocks can't be parsed standalone, unrelated). Detail in [security.md](security.md) |
| Detection method vs experiment (67 Lite blocks) | **Same 33 flagged**, none missed |
| Validator vs our own blocks | All 67 Lite blocks' default markup accepted |
| Validator vs attack probes | 13/13 rejected: `javascript:` plain/entity/tab, `void(0);alert`, `onclick`, `svg onload`, `data:` URL, `iframe`, http-equiv `meta`, `expression()` in style, attribute `javascript:`/brace/`onerror` markup. 5/6 harmless controls accepted; the 6th (text attribute starting "Data:") is the documented strictness |
| Full suite, WordPress 7.1.3 / PHP 8.2 | **81/81** (with performance) |
| Full suite, WordPress 6.8.11 / PHP 7.4 | **80/80** |
| `DISALLOW_UNFILTERED_HTML`, WordPress 7.1.3 | **8/8:** admin and editor are role-locked from restricted patterns (403 on content), core-only stays available |
| Lite + Pro `ef1909d` active, WordPress 7.1.3 | **6/6:** catalog works; Pro reported active and installed with no source yet (PPL-2 pending); 108 blocks registered; features `integration`, `shared-js`, `library` |
| Real block | Fancy Heading markup from the editor: Author and Contributor role-locked (403); Editor and Admin available; delivered content parses valid |
| PHP notices | None in any run |
| Network | All runs: 0 external connections, 0 non-loopback listeners |

**What the suite covers:**
- registration refusals (7 cases);
- metadata problems reported to administrators only;
- the newer-schema count;
- no content or markup in the catalog;
- thumbnail URL (empty when the file is missing);
- each availability reason;
- category added by a source;
- Pro context;
- cache headers and ETag → 304;
- 401/403 for anonymous and subscriber;
- tokens resolved in delivered content;
- `no-store`;
- 404/409/422 codes;
- deprecated (fetchable) and hidden (404) patterns;
- disabled block;
- seven entitlement states, including expiry with and without a cutoff, a throwing callback and a garbage answer;
- the library switch → 404.

**Performance** (WebAssembly PHP in the harness; usually much slower than native PHP, but native is not measured):

| Catalog | Server time |
|---|---|
| 19 fixture patterns | 44–92 ms cold, 16–20 ms warm |
| 517 patterns | 972–1008 ms cold, 186–350 ms warm; JSON 272 KB (synthetic, 6 KB gzipped) |

Target was ≤ 300 ms warm at 500 patterns. A generated metadata index stays deferred until a real catalog approaches that size; launch is 4–24 patterns.

**Not tested in LPL-2:**
- multisite (core grants `unfiltered_html` only to super admins there; verified in WordPress source, not at runtime);
- WooCommerce-dependent Pro blocks (WooCommerce not available offline);
- non-default attribute values.

**Not tested in LPL-1:**
- multisite;
- roles other than administrator;
- the Site Editor;
- PHP 7.3 at runtime (no runtime available);
- WordPress versions other than 6.8.11 and 7.1.3.

## LPL-UX (UI prototype, owner review checkpoint), 2026-11-03

**Setup:** a demo catalog of 12 free and 6 Pro wireframe patterns, registered by a harness-only test plugin, with entitlement states set through options. WordPress 7.1.3 / PHP 8.2, Chrome. Approved as is (PL-D17).

| Check | Result |
|---|---|
| Lint (JS, styles) and 7 Jest tests for search, filters and sort | Passed |
| Existing block build output | Byte-identical |
| Entry points; focus on search when opening; search, filters, category, sort; result announcements | Passed |
| Preview; Escape back to the grid; focus returns to the card | Passed |
| Insert: valid blocks, tokens resolved, one-step Undo/Redo, valid after save and reload | Passed |
| Lite block inserted twice: unique IDs; front end correct | Passed |
| Locked (expiry cutoff), unavailable (missing WooCommerce), empty, and error with retry | Passed |
| Lite-to-Pro card: placement and dismissal persist | Passed |
| 360, 768, 1440 px; keyboard order | Passed |

## LPL-3 (Stage D: UI enabled, placeholder block, library switch), 2026-11-03

**Setup:**
- Lite working tree copied into the harness;
- the demo catalog;
- WordPress 7.1.3 / PHP 8.2 and WordPress 6.8.11 / PHP 7.4, Chrome.
- Suite: `sessions/lpl-1/test_lpl3.cjs` in the harness (32 checks per site).

| Check | Result |
|---|---|
| Lint (JS, styles); `php -l` 8.0/8.1/8.2/8.4; PHPCompatibilityWP 7.3+; PHPCS WordPress on changed lines | Passed |
| Build: existing block output | Byte-identical. Changed only: the block manifest, the new block, the library bundle |
| Post editor: library loads; placeholder offered in the inserter; inserter search finds it | Passed on both |
| Placeholder: inserted after the selection; instructions and button shown; opens the library with itself as target | Passed on both |
| Pattern replaces the placeholder in place; snackbar Undo restores the placeholder in one step; Redo restores the pattern | Passed on both |
| Options menu: inserts after the selected block. Header launcher with nothing selected: inserts at the end | Passed on both |
| Same pattern twice: distinct `ID`s | Passed on both |
| Save and reload: all 16 blocks valid, none missing | Passed on both |
| Front end: both headings with distinct ids, the features section, no placeholder output | Passed on both |
| Unused placeholder: saves `<!-- wp:wpmozo/pattern-library /-->`, renders nothing | Passed on both |
| Library switch off: no script or store; placeholder hidden from the inserter; a saved placeholder explains itself without a button; no Options menu item | Passed on both |
| Settings page: switch on by default, labelled and described; placeholder block listed with an icon | Passed on both |
| Settings: Space toggles the switch; Save sends the block list and the switch together; the library REST then returns 404; the setting survives a reload; other block settings unchanged; clicking the label and saving turns it back on | Passed on both |
| Placeholder turned off in the block panel: block unregistered, library still loads | Passed on both |
| Site Editor: no library; placeholder hidden from the inserter | Passed on both |
| Validator rejects the placeholder inside pattern content | Passed on both |
| 360 px: placeholder button visible | Passed on both |

**Follow-up fix (`e4912df`): scrolling in the library window.**

*The bug.* Found while checking the empty catalog. With the 18-pattern demo catalog, the layout grew to 1809 px inside a 714 px window. The content area hides its overflow, so the mouse wheel couldn't reach patterns below the first rows. The cause: the modal wraps its children in an extra element (a classed container in 7.1, a plain `div` in 6.8) that had no height limit. The prototype review screenshots never scrolled, so they didn't show it.

*The fix,* checked with the harness suite `sessions/lpl-1/test_lpl3_scroll.cjs`: 10 checks per site, at 1440 and 360 px.

| Check | Result |
|---|---|
| The layout fits the window and the grid is the scroller | Passed on both |
| The mouse wheel scrolls the grid | Passed on both |
| The last card can be scrolled into view | Passed on both |
| Back from a preview restores the grid scroll position and focus | Passed on both |
| Empty catalog: "No patterns yet" shown, the category column fills the window | Passed on both |
| No page errors | Passed on both |
| The full LPL-3 suite after the fix | 32/32 on both |

**Console and network, not caused by LPL-3:**
- Core's block-directory search returns 500 offline when the inserter is searched: it calls api.wordpress.org, which the harness blocks.
- The settings page logo is loaded from wpmozoblocks.com; the harness blocks it.
- A `2x` 404 comes from the harness's local avatar replacement.
- Requests were aborted when the test navigated away.
- No JavaScript errors.

**Not tested in LPL-3:**
- a screen reader (keyboard and focus behaviour only);
- a user without the library capability (the capability check is the same function the REST routes use, tested in LPL-2);
- the widgets editor and Customizer (the harness theme is a block theme);
- multisite.

## LPL-T (authoring tools and pilot patterns), 2026-11-04

**Setup:**
- Offline harness sites on WordPress 6.8.11 / PHP 7.4 (authoring and previews) and 7.1.3 / PHP 8.2.
- Lite and Pro working-tree copies.
- Library on; a Pro licence activated (harness test value).
- Blocks the pilot doesn't use are switched off through the plugin's own block setting. With every Lite and Pro block active, the WebAssembly server can't serve the editor's ~1,300 asset requests before Chrome reports `ERR_INSUFFICIENT_RESOURCES`, and core scripts then fail to load. This is a harness limit, not a plugin error.
- Harness suites: `sessions/lpl-t/` (design runner, prep, role test). The gate and export are the repository tools in `tools/pattern-library/`.

| Check | Result |
|---|---|
| Lint (JS, tools); PHPCS WordPress on the new PHP; PHPCompatibilityWP 7.3+; `php -l` 8.0/8.1/8.2/8.4; 7 Jest tests | Passed |
| Content builder: every image, demo link, icon and the demo product name tokenized; round trip exact; no site URL left | Passed (4 patterns) |
| Quality gate, 4 pilot patterns × WordPress 6.8.11 and 7.1.3: catalog available with no issue; inserted through the library; valid; valid after save and reload; WPMozo blocks used; 1440/768/360 px without overflow; images load with alt text; no page errors | Passed on both (logs `lplt-gate-68-final-…`, `lplt-gate-71-final-…`) |
| Roles, licence activated: administrators and editors get every pilot pattern (content 200); subscribers and visitors never get content (401/403) | Passed |
| Authors and Contributors: the two free patterns are unavailable (`role_unfiltered_html`; their WPMozo blocks save `<style>`); the two Pro patterns are available. Catalog and content route agree | Passed (policy D3 as designed) |
| Pro licence not activated: Pro patterns locked, content 403 with no content; free patterns unaffected | Passed |
| Free patterns use no Pro block | Passed |
| Thumbnails 800 × 600, 16–23 KB; previews 1200 px wide, 25–34 KB; content images 32–38 KB | Within the 60 KB thumbnail budget |

**Found and fixed during the pilot:**
- The importer refused 6.8-authored markup on 7.1 (`core/heading.textAlign`, `core/button.width` moved into deprecations). It now accepts attributes that a block's deprecations declare (`1d66bf2`); both versions were retested.
- The export kept `wrapStyle`, a Lite attribute holding CSS with the editor ID (braces, which the validator rejects). The export now removes it and fails on any leftover client ID.

**Block issues found, not fixed (separate tasks; worked around in the pilot):**
- Advanced Button saves `href="javascript:void(0)"` and never outputs its URL, so its links don't work on the front end. The pilot uses core Buttons.
- Thirteen Lite block scripts use jQuery without declaring it, so they fail on pages where nothing else loads jQuery:
  - before-after-slider, facebook-comments, facebook-embedded-video, facebook-share;
  - hover-list, image-accordion, image-magnifier, scroll-image, scroll-stack-cards, scroll-text;
  - twitter-embedded-tweet, twitter-follow-button, twitter-tweet-button.
- Pricing Table:
  - its button can't drop the theme's link underline (no decoration attribute);
  - `price` is declared as a string with a numeric default;
  - price and period share one colour;
  - the divider is always black.
  The pilot puts each table in a card with a core button.
- Star Rating rounds to half stars (4.9 shows as 5).

**Not tested in LPL-T:** a screen reader, multisite, themes other than the default theme, and an expired or revoked licence (phase 2 data).

## LPL-T editability, roles and protection, 2026-11-04

**Setup:** WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2, as for LPL-T. Harness suites `sessions/lpl-t/test_editability.cjs` and `test_roles.py`; the repository gate `tools/pattern-library/gate.cjs`.

**Editing test** (136 checks per version; **136/136 on 6.8.11 and 7.1.3**). Each pattern is inserted through the library, then:
- the Inspector of every block type in it renders on all its tabs without page errors (core blocks, Fancy Heading, Star Rating, Pricing Table, Advanced Counter, Timeline and Timeline item);
- edits are made three ways:
  - **typed inline** in the canvas: paragraphs, headings, the Fancy Heading pre-text, the Pricing Table title, a Timeline item title;
  - **through Inspector controls** found by label: Fancy Heading "Main Heading", Star Rating "Description", Pricing Table "Price" and "Period", Advanced Counter "Counter Number" and "Title", Timeline item "Timeline Content" and "Enter Custom Time";
  - **through block attributes**, as the pickers do: links and button text, a replaced image with new alt text, colours (section and card backgrounds, Fancy Heading, Pricing Table title, counter number, Timeline line), a Timeline icon, a Pricing Table feature-list item (nested data), a star rating;
- after each edit: the block is valid and applied, and **no other block changed** (comparing every block's attributes, except the ID-derived `ID` and `wrapStyle`);
- after saving and reloading: every block valid, every edit kept, no other block changed, no page errors;
- on the front end at 1440 and 360 px: every edited text, link, image, colour and icon is shown; no overflow; no page errors.

**Repository gate with editability (PL-D22):** passed for all four patterns on both versions. It typed into 7, 10, 9 and 7 inline fields, and all were kept through save, reload and the front end.

**Roles, licence and protection** (49 checks per version; **49/49 on 6.8.11 and 7.1.3**):
- the role and licence matrix of the LPL-T section;
- each pattern's `content.php` and `pattern.php`, and the map files, requested directly over HTTP: empty response;
- the catalog for administrators, editors and authors contains no block markup or content;
- a refused Pro content request (no activated licence) carries no content.

**Importer unit tests:** `src/library/test/importer.test.js` (6 tests; 13 library tests in all). Covered:
- older attributes declared by a deprecation are accepted;
- unknown attributes are refused;
- core helper attributes are accepted;
- missing and invalid blocks are refused;
- the rebuild gives a fresh `ID` per block.

Checked against the bug: with the deprecation rule removed, the deprecation test fails.

**Findings:** no defect in the pilot patterns or the library. Problems were in the tests only:
- an icon renders as `<span>`, not `<i>`;
- 7.1 keeps hidden panels in the Inspector;
- a between-blocks popover can cover a field, so the gate focuses fields instead of clicking;
- `innerText` applies `text-transform`.

**Not tested:** a screen reader, multisite, other themes, image replacement through the Media Library dialog (the test sets the image attribute directly, as the dialog does), and expired or revoked licences (phase 2).

## Compatibility audit, 2026-11-05

**Setup:**
- Harness folder `sessions/audit/`:
  - `combo.py <spec> [--browser]` boots one combination and runs HTTP, REST-as-role and real-HTTP checks;
  - `editor_smoke.cjs` is the browser part: globals, a Lite and a Pro block mounted, the library window, insert, save, reload, front end;
  - `upgrade.py [--mutation]` replaces plugin folders while one site runs, then checks licence, deactivation, cache and malformed-file cases;
  - `make_post.cjs` saves a page with the installed versions' own block output;
  - `lint-all-74.cjs` is the PHP 7.4 parse;
  - plugin `plugins/audit/audit-driver` (loopback only) is the helper. It also writes fatal errors to the harness log folder, because a site that can't boot loses its debug log.
- Copies built from exact commits: Lite `1e8db93`, Pro `362daba`, plus the older copies listed in [compatibility.md](compatibility.md).
- Rebuilding Lite and Pro from those commits in a new folder gave the same files as the LPL-T copies except webpack module ids (8 characters per bundle). Those ids come from the build folder's path to the symlinked `node_modules`, so byte comparisons of builds must be made in the same folder.

**Results:** every combination, WordPress and PHP run, and the in-place update steps are in [compatibility.md](compatibility.md). Summary:

| Check | Result |
|---|---|
| Supported combinations (c01–c05, w68, p85) | Passed: catalog and content per role, licence lock, browser save/reload valid, front end, no PHP log entries |
| Notice combinations (c06, c09, c10) | Notice shown, no fatal |
| Lite 1.8.0 + Pro HEAD (c07) | Pro block crashes in the editor; Plugins notice only (Pro roadmap R2). **Corrected in R5:** the crash came from an incomplete 1.8.0 copy; see "R5 results" below |
| WordPress 6.5.13 / 6.7.10 with Pro | Critical error on activation (KI-04) |
| PHP 7.4 parse, both plugins | Lite 63/63 files parse. Pro: 4 Team Grid templates fail (`match`), and a Team Grid page returns 500 on PHP 7.4; renders on 8.0 |
| PHP 8.5.10 | No notices or deprecations from either plugin |
| Real HTTP (p74, p80 and later runs) | A logged-in cookie without a REST nonce → 401; `?rest_route=` → 401; JSONP → 401. Pro `content.php`, `pattern.php`, `data/media.php` and the patterns folder → empty body. Previews are public images (by design). With the editor's nonce → 200 and `Cache-Control` containing `no-store` |
| In-place updates (S1–S8) | Saved pages byte-identical through Lite update, Pro update, licence deactivation, Pro deactivation and reactivation; valid in the editor whenever their plugins are active |
| Cache across sources (S9) | **Fails:** stale catalog (KI-01) |
| Malformed add-on file (S11) | **Fails:** whole library down (KI-02) |
| Multisite (m01) | Not run: Playground's multisite step contacted `playground.wordpress.net`, the guard blocked it, and the site didn't boot |
| Network | 0 external connections in every run; the one attempt (multisite step) was blocked |

**The tests catch real regressions:**
- S10 changed one class in Fancy Heading's saved output (in the running copy) → the reopen check reported the block invalid with "Block contains unexpected or invalid content".
- S9 and S11 fail today because of KI-01 and KI-02. They are the acceptance checks for roadmap stage R1, and must not be changed to pass.

**Console output seen, not caused by the library:**
- `wpmozo-blocks-and-addons-editor-style-css was added to the iframe incorrectly` (KI-05).
- The same warning for core's `global-styles-css-custom-properties` (it also appears with no WPMozo plugin active).
- On 6.8.11: deprecation warnings for 36 px controls and bottom margins (R-11).

## R1: library robustness, 2026-11-05

**Code:** `includes/library/` (library service, registry, resolver, validator, REST), Lite `98d4013`. Suites: `56dbfcb`. Decisions PL-D23 to PL-D26 in [decisions.md](decisions.md).

**Suites:** `tools/pattern-library/tests/` (this repository; [README](../../tools/pattern-library/tests/README.md)). They replace the audit's harness scripts for these checks.

| Run | Result |
|---|---|
| `robustness` on Lite working tree (R1) + Pro `85390bb`, WordPress 7.1.3 / PHP 8.2 | **25/25 passed** |
| `robustness` on Lite `ec97921` (before R1) + Pro `85390bb`, same site set-up (**mutation proof**) | **10/25:** every R1 check fails as expected. Cache entries unchanged after WordPress, allowed-HTML and Lite version changes; the missing Lite key still "available" in the catalog while the content route answers 422; every broken-file case takes the catalog down (500, or corrupted JSON for printed output); the changed content is delivered to an author |
| `editor` (gate with editability, every available pattern), WordPress 7.1.3 / PHP 8.2 | **10/10 passed:** 4 patterns × 18 gate checks, no PHP log entries |
| `rest`, WordPress 7.1.3 / PHP 8.2 | **All passed** except the first version of the network check, which also counted WordPress's own blocked update checks; the check was split (below) |
| `robustness`, `rest`, `editor` on WordPress 6.8.11 / PHP 7.4 (the minimum) | **26/26, 17/17, 10/10 passed** (4 patterns × 18 gate checks; no PHP log entries) |

**What `robustness` checks:** a different WordPress version, allowed HTML and Lite version each get new cache entries; a Pro pattern without a Lite icon key is `unavailable: lite_outdated` at once and the content route answers 409 with that reason; a missing key in Lite's own pattern stays `invalid_content`; a parse error, an exception, printed output and broken content each affect only their own pattern and are reported; a broken Pro media map fails closed only for the patterns that use it; content changed behind the cache is refused to an author by the content route, and the catalog then agrees; without a licence every Pro pattern is locked and refused; visitor 401, subscriber 403; no markup in the catalog; no PHP log entries, fatal errors or network.

**Test problems found and fixed (not product defects):**
- The first fresh-analysis check looked for a nowdoc terminator named `HTML`; the pattern files use `WPMOZO_PATTERN`, so its edit never applied. The check now finds the terminator by pattern and fails if its edit doesn't apply.
- The network check counted WordPress's own update checks (`api.wordpress.org`) and Pro's updater (`cdn.wpmozo.com`), which the driver blocks. Now: anything that tries to leave the Playground process fails; a library request that makes an outbound call fails; other blocked calls are listed.
- One `editor` run stopped inside the gate while two other sites were running on the same machine; it passed when run alone. Run browser suites one at a time.
- Two runs started at the same time shared copy folders; copies are now per run.

## Automated suites (R5, 2026-11-05)

R1 added the framework with `robustness` and `editor` (`56dbfcb`); R5 adds the others. The reusable suites live in this repository, in `tools/pattern-library/tests/` (not shipped: `wp-scripts plugin-zip` packs only `build/`, `includes/`, the main file and readme files). Setup, options and commands: its [README](../../tools/pattern-library/tests/README.md). They run against copies of the real plugins built from a commit or from the working tree, on offline WordPress Playground sites; no mocks.

| Suite | What it proves | Replaces |
|---|---|---|
| `robustness` | R1: cache follows every input; broken files isolated; `lite_outdated`; catalog and content route agree; protection without a licence | Audit `upgrade.py` S9, S11 |
| `rest` | Roles × patterns, licence lock, links and issues only for the right users, no markup or licence value in the catalog, cache headers, ETag/304, library switch, real HTTP (no nonce, query-string route, JSONP, direct file requests, nonce path) | `test_lpl2.py`, `test_roles.py`, audit `combo.py` HTTP checks |
| `editor` | Every available pattern through the repository gate with editability | Manual gate runs |
| `matrix` | Lite/Pro combinations with expected outcomes: supported ones work (catalog, card text, blocks mount, save/reload, front end); unsupported ones show a notice, never a fatal error or a block crash | Audit `combo.py` c01–c10 |
| `upgrade` | In-place updates in both orders (Lite first, Pro first) on one running site; saved pages byte-identical and valid; Pro pattern inserted after updating; licence and plugin deactivation; Lite deactivated while Pro is active; `--mutation=1` proves the validity check catches a saved-output change | Audit `upgrade.py` S1–S8, S10 |
| `contract` | R4: Lite provides every shared surface (`lib/surface.cjs`) at runtime, in the editor, on its settings page and in its source, including the blocks add-ons insert and their saved markup, block on/off for add-on blocks and an add-on's dynamic-style file; Pro uses nothing else (static scan), registers no Lite handle and defines the names Lite reads | One-off greps in the audit |
| `php-parse` | R3: every PHP file of both plugins parses on the declared minimum PHP (php-wasm) | `lint-all-74.cjs` |
| `team-grid` | R3: Pro Team Grid renders every layout and click trigger on the minimum PHP and on 8.2, with markup identical to a baseline Pro commit. Written in R5; first run in R3 | Audit `combo.py` p74/p80 Team Grid pages |
| `wp-editor` | R6: Lite's editor stylesheet in the right documents with and without the canvas iframe, no "added to the iframe incorrectly" warning for WPMozo handles, experimental exports resolve. Written in R5; first run in R6 | Audit console checks (KI-05) |

**Rules for every suite:**
- Each check has a mutation proof: break the behaviour on purpose (or run the code before the fix) and confirm the check fails. The proofs are recorded with each stage below.
- A failing check is fixed in the product, never by changing the expectation, unless the expectation itself was wrong; that is then recorded here.
- Record the exact WordPress, PHP and plugin commits of each run.

**Not available offline:** newer WordPress or Gutenberg builds, multisite, the licence server, MySQL (the harness uses SQLite) and CI. Run those before release elsewhere (R-12 adds a native-PHP run with every block active).

### R5 results, 2026-11-05
**Suites:** `4ca209f`. Every run on WordPress 7.1.3 / PHP 8.2 with Lite `0f13330` (R1) and Pro `85390bb` (before R2 and R3). These are the baselines for the later stages: a failure marked "expected" is a defect that its stage fixes, and the check must not be changed to pass. `rest` results are under R1 above.

| Run | Result | Notes |
|---|---|---|
| `upgrade --mutation=1` (from Lite `b91a5ec`, Pro `ef1909d`) | **30/30** | Both orders. Mutation proof: a changed Fancy Heading save output is reported as an invalid block |
| `php-parse` | Lite **65/65** files parse on PHP 7.4. Pro **fails:** the 4 Team Grid templates (`layout1.php`–`layout4.php`, PHP 8.0 `match`); its other 94 files parse | Expected before R3 |
| `contract`, first run | **10/12** | Both failures were test or inventory problems (below) |
| `contract`, after the fixes | **12/12** | |
| `matrix`, the 8 cases of the first run (`current`, `lite-only`, `pro-installed-inactive`, `older-pro`, `lite-before-contract`, `lite-1.8.0`, `pro-lite-inactive`, `pro-lite-missing`) | **71/75** | `lite-before-contract`: no editor notice (expected before R2). `lite-1.8.0`: a Pro block crash, no editor notice, PHP notices; the crash and the notices came from the Lite 1.8.0 copy (below) |
| `matrix --only=lite-1.8.0,lite-without-helper,pro-renamed-inactive`, after the copy fix | **22/26** | `lite-1.8.0`: no editor notice (expected before R2); no crash, no PHP notices. `lite-without-helper` (Lite with one helper method Pro calls renamed): no Plugins-screen notice and the Pro source still registered (expected before R2). `pro-renamed-inactive` (Pro installed, inactive, in another folder): the card doesn't say "Activate WPMozo Pro" (expected before R2: Lite looks for the folder name, R-09) |
| `matrix --only=lite-1.8.0`, with the inserted blocks in the crash check's detail | **7/8** | Lite Fancy Heading and Pro Advanced Counter were both registered and inserted; no crash, no page error. Only failure: no editor notice (expected before R2) |

**Test problems found and fixed (not product defects):**
- `contract` looked for `wpmozo_bna_add_pro_blocks_to_panel` as an action. Lite applies it as a filter; the check accepts either, and section 4 of [registry-and-contract.md](registry-and-contract.md) now names it as a filter.
- Pro also uses the taxonomy `wpmozo-ae-testimonial-category`, which the inventory missed. It is now in `lib/surface.cjs` and section 4.
- **The Lite 1.8.0 copy was incomplete.** `release/1.8.0` tracks `build/` but not the generated `build/blocks-manifest.php`, which a release build writes. Lite 1.8.0 registers its blocks only from that manifest, so the copy registered no Lite block and logged "manifest file does not exist" notices. `lib/copies.cjs` now generates the manifest for such copies (copy format 2, so cached copies are rebuilt). The new copy differs from the old one only by that file.
- The crash check passes when a block isn't registered in the editor (nothing to crash), so its detail now lists the inserted blocks.

**Correction to the audit's c07 result** ([compatibility.md](compatibility.md)): the audit's Lite 1.8.0 copy had the same gap; its run results contain the same manifest notices. With no Lite block registered, no Lite script sets `WPMozoBNAComponents` and `WPMozoBNAUtils`, and Pro's Advanced Counter crashed (`TypeError: d is not a function`). With the manifest, Lite 1.8.0's block editor scripts set both globals (all 61 set `WPMozoBNAUtils`, 60 set `WPMozoBNAComponents`), and the Pro block mounts, as in c06 ("Pro blocks work while Lite blocks that set the globals are enabled"). What stays true for Lite 1.8.0: no editor notice, and Pro's editors depend on globals that a Lite without the contract sets only through its block scripts. Not tested: Lite 1.8.0 with those blocks switched off, other Pro blocks, WordPress 6.8, and the WordPress.org zip of 1.8.0 (no copy offline).

**Correction (R2, 2026-11-06):** the R5 copy above was still not the shipped 1.8.0. `release/1.8.0` tracks a `build/` last changed on 2026-04-27 (61 blocks; 229 built files differ from the release), and also tracks the shipped plugin as `wpmozo-blocks-and-addons.zip` (65 blocks, with its block manifest). That zip is code-identical to the 1.8.0 zip downloaded under WordPress.org's file name (only the readme's release date differs). In the shipped build, 64 of the 65 block editor scripts set `WPMozoBNAUtils` and 63 set `WPMozoBNAComponents`. Suites now use the zip (`zip:release/1.8.0`); the R2 results below use it.

## R2: Pro with a Lite that has no shared editor script, 2026-11-05 and 2026-11-06

**Question:** what Pro does with Lite 1.8.0 (and any Lite without the integration contract) when Lite's own blocks are switched off, and how Pro should protect the editor. Owner decisions (2026-11-06): gate Pro block editing on the editor globals actually available, not on the Lite version; keep editing that works; warning only when editing is switched off, information notice otherwise; Plugins-screen notice only on the Plugins screen; Lite keeps block on/off.

### Investigation (Pro `85390bb`, no R2 code)
Shipped Lite 1.8.0; every top-level Pro block that registers here (33 of 40; the 7 WooCommerce blocks need WooCommerce): inserted, selected, every Inspector tab clicked, saved, reloaded.

| Run | One Lite block on | Every Lite block off: page saved earlier | Every Lite block off: new blocks | Other edits |
|---|---|---|---|---|
| Lite 1.8.0, WordPress 7.1.3 / PHP 8.2 | 33/33 mount, every tab renders, valid after reload | 9 crash, 23 "invalid content", 1 clean | 33/33 crash; 30 of 33 insertions throw in a Pro `save()`; the saved page keeps only the 3 blocks inserted before the first throw | — |
| Lite 1.8.0, WordPress 6.8.11 / PHP 7.4 | Same | Same | Same | A paragraph added after a Pro block is **not saved**, without any message |
| Control: Lite with the contract (`0f13330`), every Lite block off | All pass | All valid | All mount, nothing throws | Saved |

**Why:** Pro's block editors read Lite's globals when they load. A Lite without the shared editor script sets them only from the editor scripts of its blocks that are switched on (a switched-off block is unregistered, so its script doesn't load). Lite 1.8.0's block panel has "Deselect All", and its internal content wrapper (always on, never listed) sets no globals. Lite 1.7.0 (release zip, checked statically) has no block on/off, so the globals are always set there.

Other findings: Pro's Advanced Tabs Item template inserts Lite's internal `wpmozo/content-wraper` block; Lite and Pro both register a Chart.js handle with the same name (known-issues R-14, R-15).

### Prototype verification (a separate test plugin; no change to either plugin)
The guard ran beside the shipped Lite 1.8.0 and Pro `85390bb`, on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2: **17/17 checks each.**
- **Working (one Lite block on):** post, site and widget editors: guard inactive, information notice only, Pro blocks registered and valid.
- **Switched off (every Lite block off):** in all three editors the guard ran while the document was still loading and before any block was parsed; Pro blocks showed as unsupported, none invalid or crashed, none in the inserter; warning notice only; edits and saves worked with no `save()` error.
- **Round trip:** the page saved while switched off opens with every Pro block valid once the globals are back; its front end is equivalent.
- **Markup:** Pro blocks without inner blocks stay byte-identical. Nested Pro blocks (Timeline, Advanced Tabs) re-saved while switched off keep their attributes and HTML, but newlines change: WordPress re-serializes every unsupported block with `serializeRawBlock()`, which joins inner content with newlines and collapses repeated ones. No approach that still lets users save avoids it; pages not re-saved are untouched.
- **Found by the prototype:** `headingLevelsList` is a list, not a function, so the guard checks presence only.

### Suite changes
- `lib/copies.cjs`: `zip:<commit>` copies the release zip a commit tracks; `matrix` uses `zip:release/1.8.0` by default.
- `driver`: `keep` never switches off `wpmozo/content-wraper`, which Lite's panel never lists.
- `matrix`: `lite-1.8.0` and `lite-before-contract` now expect Pro blocks to work with Lite blocks on (information notice), then switch every Lite block off on the same site and expect the Pro block unsupported (not crashed or invalid), no Pro block in the inserter, the warning, an edit saved with the stored blocks byte-identical, the front end, and no page errors. `current` expects no compatibility notice and no guard.
- `contract`: Pro's guard list must cover every Lite global its blocks use without a fallback, and name only globals Lite provides.

**Commits:** Lite suites `ee18c89`, `rest.php` `23d89d6`; Pro `b7cc761`.

### Results (Lite: plugin code of HEAD + R2 `rest.php`; Pro: `85390bb` + R2 files; R3 and R6 changes excluded)
| Run | WordPress 7.1.3 / PHP 8.2 | WordPress 6.8.11 / PHP 7.4 |
|---|---|---|
| `matrix`, all 10 cases | 107/109 on the first run: the switched-off phase then kept every Pro block on, and Interactive Circle's script threw its known page error (`MutationObserver`, seen in every configuration, also with current Lite). The phase now keeps the case's own blocks; re-run of the 2 cases: 34/34 | — |
| `matrix`: `current`, `lite-before-contract`, `lite-1.8.0` | 46/46 (final code) | 46/46, and 46/46 again on the final code |
| `upgrade --mutation=1` (from `b91a5ec` and Pro `ef1909d`) | 30/30 | 28/28 (without `--mutation`) |
| `upgrade --from-lite=zip:release/1.8.0` (shipped 1.8.0 updated in place) | 28/28 | — |
| `contract` (with the guard-list check) | 13/13 | 13/13 |
| `rest` | 17/17 | 17/17 |
| `robustness` | 26/26 | 26/26 |
| `editor` | 10/10 | 10/10 |
| `php-parse` (PHP 7.4) | Lite 65/65. Pro: every R2 file parses; the 4 Team Grid templates still don't (R3, not part of R2) | — |
| Production guard in the post, site and widget editors (one-off script outside the repository; shipped Lite 1.8.0) | 17/17 | 17/17 |
| Repeated saves (one-off script): three saves with Pro editing switched off, then one with it working | 10/10 | 10/10 |

**Repeated saves, in detail:** every saved version keeps the same Pro block tree (names, attributes, HTML ignoring whitespace); the first save while switched off changes only newlines in nested Pro blocks, later ones change nothing more; the front end is equivalent after every save; once Pro editing works again, the next save restores Pro's own markup byte for byte.

**Mutation proofs:**
- `matrix --only=lite-1.8.0` with Pro `85390bb` (no guard): **13/17.** The four R2 checks fail: no notice; with Lite blocks off the Pro block is still registered, "invalid content", and in the inserter; no warning; the added paragraph is not saved (`d is not a function`, stored page unchanged).
- `contract` with Pro's guard list missing `truncateContent`: **12/13**, the guard-list check fails with `unlisted: truncateContent`. With a name Lite doesn't provide added: **12/13**, it fails with `notProvided: WpmozoNotInLite`.

Also not covered by a committed suite: the site and widget editors and the repeated-save sequence (verified with the one-off scripts above); WooCommerce and Gravity Forms blocks; multisite; Lite 1.7.0 at runtime.

## R3: PHP floor and requirement headers, 2026-11-06

**Scope (approved 2026-11-05):** Pro's Team Grid without PHP 8.0 syntax; requirement headers `Requires at least: 6.8` and `Requires PHP: 7.4` for Lite (main file and `readme.txt`) and Pro. The R3 Team Grid runs also logged Pro's known Team Grid notices (attributes without a default), so those attributes now get defaults. At the owner's request (2026-11-06), R3 also hardens Team Grid's output escaping (details in the Pro repository).

**Commits:** Lite suite `28d184c`, headers `afc5e91`; Pro in its repository.

**Suite change:** `team-grid` had never run before R3. Its first run reported every case different from the baseline, on PHP 8.2 as well: the two sites have different ports, so every absolute URL differed. The suite now replaces the site address before comparing, reports where each difference starts, and adds a page with hostile attribute values (a value that would add an attribute if printed unescaped) that must render escaped.

### Results (Lite: plugin code of HEAD + R3 headers; Pro: `55ff81e` + R3 files)
| Run | Result |
|---|---|
| `php-parse` (PHP 7.4) | **Lite 65/65, Pro 98/98:** every file of both plugins parses (before R3, Pro's 4 Team Grid templates didn't) |
| `team-grid` (baseline Pro `85390bb` on PHP 8.2), WordPress 7.1.3: PHP 7.4 and 8.2 | **8/8:** every layout and click trigger renders both members; markup identical to the baseline in all 12 cases; hostile values printed escaped; no PHP notices |
| `team-grid`, WordPress 6.8.11: PHP 7.4 and 8.2 | **8/8** |
| `team-grid`, WordPress 7.1.3: PHP 8.5 and 8.2 | **8/8** |
| WordPress 6.7.10 and 6.5.13 (one-off script): activate Lite and Pro | **4/4 each:** WordPress refuses both (`plugin_wp_incompatible`); front end, Plugins screen and editor load without a fatal error; with both forced active anyway, still no fatal error |
| `matrix` (`current`, `lite-only`, `lite-before-contract`, `lite-1.8.0`, `pro-lite-inactive`, `pro-lite-missing`) | **70/70** on WordPress 6.8.11 / PHP 7.4 and **70/70** on 7.1.3 / PHP 8.2 (both plugins activate at the declared minimums) |
| `upgrade --mutation=1`, `contract`, WordPress 7.1.3 / PHP 8.2 | **30/30, 13/13** |
| `robustness`, `rest`, `editor`, WordPress 6.8.11 / PHP 7.4 | **26/26, 17/17, 10/10** |

`matrix`, `upgrade`, `robustness`, `rest` and `editor` ran on the R3 code just before the Team Grid escaping change; none of them renders a Team Grid. `php-parse`, `contract` and every `team-grid` run above used the final code.

**Mutation proofs:**
- `team-grid` against a copy whose layout1 swaps the popup and link classes: the comparison fails for the affected cases and shows the swapped class.
- The hostile-value check: its mutation proof is recorded in the Pro repository.
- The WordPress 6.5 and 6.7 checks: before R2 and R3, the same activation ended in a critical error (audit runs w65, w67).

**Not tested:** PHP 7.3 (no runtime here; nothing declares it any more); a WordPress.org update offered to a site below the new minimums (WordPress decides that from the headers).

## R4: contract surface freeze, 2026-11-06

**Scope (approved 2026-11-06):** freeze and machine-check every Lite surface add-ons use ([registry-and-contract.md](registry-and-contract.md) section 4, PL-D27), including the R2 findings R-14 and R-15. PKI-07 (Chart.js) decided as option B′: Lite is the only owner of the handle, and Pro drops its own registration (PL-D28). Owner rule given before R4: Pattern Library work changes no block code (PL-D29).

**Commits:** Lite tests `62a9bbf`; Pro `e79e4aa`. No Lite plugin code changed.

### Audit (Lite `eb9b289`, Pro `db225e4`)
Every surface in the 2026-11-05 inventory still exists in Lite and is still used by Pro. Missing from the inventory or the checks were R-14 and R-15, plus:
- Lite's editor object `wpmozo_bna_editor_object.placeholderImg`, which a Pro block reads in its editor and writes into its saved markup;
- the 18 team-member and testimonial post meta keys Pro reads;
- the helper classes must stay creatable with `new` (Pro does so in 26 places);
- the `<slug>_generate_dynamic_style()` function name behind the dynamic-style path;
- the Pro constants Lite reads (the other direction);
- the settings-panel markup Pro's tab relies on.

The old usage scan would also have missed helper calls through Pro's subclasses, editor objects, Lite block names and meta keys.

### Suite changes
- `lib/surface.cjs`: the Chart.js handle, post meta, the editor object and the file it points to, the blocks add-ons insert with their saved markup (the Lite 1.8.0 form and the current form), block on/off, the panel markup, the Pro constants Lite reads.
- `driver`: the `contract` endpoint also reports block registration, whether the helper classes can be created without arguments, a dynamic-style probe (errors are caught and reported) and the add-on constants.
- `contract`: 26 checks with Pro (13 before R4), 16 without. New runtime, editor, settings-page and source checks; a wider usage scan; Pro must not register a Lite handle; Pro's start-up helper list must cover Pro's calls; no add-on pattern may report `lite_outdated`. The Pro block kept on is the first with its own `dynamic-style.php` (Accordion Slider today); the switched-off one is the first that only Pro's panel filter adds to Lite's block panel (Text Hover Effect today), so the panel check proves the filter.
- **Made stricter during R4 (test problems, not product defects):** the first mutation run showed that several runtime checks passed when the driver returned nothing (its request had crashed); every runtime check now compares against the expected list. The first meta-key check passed on a key that survived only as a form field name; it now looks in Lite's meta-saving functions.

**Content wrapper, measured in the editor (WordPress 7.1.3):** the shipped Lite 1.8.0 saves `<div class="wp-block-wpmozo-content-wraper …">`; Lite HEAD saves the same with an added `wrapstyle` attribute (block issue B-R4-4, [known-issues.md](known-issues.md)). Lite HEAD accepts the 1.8.0 markup through its deprecation and re-saves its own markup byte for byte; an extra attribute is reported invalid (the check's negative control).

### Results (Lite plugin: HEAD; Pro: HEAD + the R4 change; suites from the working tree)
| Run | WordPress 7.1.3 / PHP 8.2 | WordPress 6.8.11 / PHP 7.4 |
|---|---|---|
| `contract` | **26/26** | **26/26** |
| `contract --pro=none` | **16/16** (Pro checks skipped with a note) | **16/16** |
| `php-parse` (PHP 7.4) | **2/2:** Lite 65 and Pro 98 files parse | — |
| `rest` | **17/17** | — |
| `robustness` | **26/26** | — |
| `editor` | **10/10** | — |
| `upgrade --mutation=1` | **30/30** | — |
| `matrix` (all 10 cases) | **109/109** | — |

### Mutation proofs (WordPress 7.1.3 / PHP 8.2; throwaway copies outside both repositories, no block folder edited)
| Copy | Breaks | Result |
|---|---|---|
| M1: Lite HEAD | `get_margin_style()` renamed | **20/26.** The helper-class check fails, naming `get_margin_style`. Pro then stays off (its start-up check), so the five checks that need Pro running fail too; no fatal error |
| M2: Lite HEAD | 11 breaks, all outside block folders: Chart.js handle renamed; content wrapper dropped from the block manifest; block on/off applied to Lite's own blocks only; editor object renamed; a meta key renamed in the save code; add-on dynamic-style path changed; settings-tab action renamed; panel filter renamed; `Mozo_Bna_Helpers` made abstract; a Lite icon key Pro patterns use removed; the panel no longer skips the content wrapper | **12/26:** every break fails its check (14 failing checks) |
| M3: Pro HEAD + the R4 change | 8 breaks in non-block files: a Lite helper method called through Pro's subclass, an unlisted meta key, a Lite-named handle registered, a Lite block name, an unlisted Lite editor object and an unlisted member, `truncate_content` dropped from Pro's start-up list, `truncateContent` dropped from the R2 guard list, a constant Lite reads renamed | **21/26:** the usage, Lite-handle, start-up list, guard list and constants checks fail, each naming its breaks |
| M4: Pro `db225e4` | The code before B′ | **25/26:** only "Pro registers no handle under a Lite name" fails (`wpmozo-blocks-and-addons-chartjs-script`) |

### PKI-07 option B′ (one-off script outside the repositories)
A page with Pro's Bar Chart and Pie Chart, in the editor and on the front end:

| Lite / Pro | Result |
|---|---|
| HEAD / HEAD + R4, WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 | Both charts drawn in the editor canvas and on the front end; Chart.js loaded from Lite's file; no page errors |
| Shipped 1.8.0 / HEAD + R4, 7.1.3 / 8.2 | Not drawn; "Chart is not defined" in the editor and on the front end; no request for a Pro Chart.js file |
| Shipped 1.8.0 / `db225e4` (before), 7.1.3 / 8.2 | The same errors, plus 404 requests for Pro's missing `includes/assets/js/chartjs.min.js` |

With Lite 1.8.0 or older, Pro's charts can't draw either way; the check that would avoid the error belongs to the chart blocks (Pro repository, a block task).

**Block code untouched:** checksums of `src/blocks`, `includes/templates` and `build/` in both checkouts were identical before and after every R4 run.

**Not covered:** the props of each shared component (only names are checked); WordPress 6.8.11 for the regression suites (run on 7.1.3 in R4, on both versions in R2 and R3); the site and widget editors and repeated saves (one-off scripts in R2).

## R6: WordPress-future hardening, 2026-11-06

**Scope (approved 2026-11-06), within the rule that Pattern Library work changes no block code (PL-D29):** KI-05 fixed by moving Lite's editor stylesheet to `enqueue_block_assets` (PL-D30). R-02 is covered by the `wp-editor` suite, not by a compatibility module; R-03 checked; R-11 recorded. The block follow-ups (Advanced Button link, undeclared jQuery) and the block issues found in R6 (B-R6-1, B-R6-2) are recorded for a separate developer ([known-issues.md](known-issues.md)).

**Commits:** Lite code `a54216c` (`includes/class-mozo-bna-blocks-and-addons-assets.php`, `includes/class-mozo-bna-blocks-and-addons.php`), tests `4e9f12d`. No Pro change.

### Suite change
`wp-editor` had never run. Its first runs showed that a classic meta box no longer turns the canvas iframe off: on WordPress 6.8.11 and 7.1.3 the meta box is active and the editor stays iframed, so the planned check without the iframe never ran. The suite now adds a third editor where the test driver registers a block on API version 2: WordPress 6.8.11 then loads the editor without the iframe; 7.1.3 kept the iframe anyway. Each case records whether it had the iframe and which meta-box locations were active.

### Results (Lite: HEAD + R6; Pro HEAD `7e05e3b`)
| Run | WordPress 7.1.3 / PHP 8.2 | WordPress 6.8.11 / PHP 7.4 |
|---|---|---|
| `wp-editor` | **14/17** | **14/17** |
| `contract` | **26/26** | **26/26** |
| `editor` | **10/10** (see the note below) | **10/10** |
| `matrix` | **109/109** (all 10 cases) | `current`: **12/12** |
| `upgrade --mutation=1` | **30/30** | — |
| `rest` | **17/17** | — |
| `robustness` | **26/26** | — |

**`wp-editor` in detail:** in all three editors on both versions, Lite's editor stylesheet is in the editor document once and in the canvas once (only once in the document when there is no iframe), with no "added to the iframe incorrectly" warning and no page errors; no PHP notices; the stylesheet is not loaded on the front end. In the default editor, a Lite and a Pro block mount, save and reload valid. **The 3 failures are one block issue:** the check "all 22 experimental WordPress exports Lite and Pro import still exist" fails in each editor because Call To Action imports `__experimentalStack`, which exists in neither version; it is never used (B-R6-2). The check stays strict; it passes once the block is fixed.

**Mutation proof (the code before R6, Lite `6668ac0`):** `wp-editor` **12/17** on 6.8.11 and **11/17** on 7.1.3. On top of the B-R6-2 failures, "no WPMozo stylesheet added to the iframe incorrectly" fails in every iframed editor (the default and meta-box editors on both versions, and the API version 2 editor on 7.1.3), with WordPress's warning for `wpmozo-blocks-and-addons-editor-style-css`.

**`editor` on 7.1.3, a timing flake (not a product issue):** the first run was 5/6: the gate's editability step waited 30 s (Playwright's default) for a pattern's insert button in the library window and timed out after every earlier check had passed. Two reruns with R6 and a control run without R6 all passed 10/10. The gate's main insert step waits 60 s; giving the editability step the same wait would remove the flake (a test-tool change, not made in R6).

**R-03 check:** the only component that sets `defaultProps` (`src/common/components/wpmozo-block-gallery/gallery.js`) is never imported (only `shared-helpers.js` from that folder is) and not in any build; Pro sets none. React's own runtime code does appear in two block builds, which led to B-R6-1.

**Block code untouched:** checksums of `src/blocks`, `includes/templates` and `build/` in both checkouts were identical before and after every R6 run.

**Not covered:** an editor without the canvas iframe on WordPress 7.1.3 (it kept the iframe in all three editors); the site and widget editors (the stylesheet change was verified in the post editor); Inspector rendering of every block type on the newest WordPress (the roadmap's broader R6 idea; the editability gate covers the blocks the patterns use).

## Final validation, 2026-11-11

**Code tested:** Lite `044cd2b` and Pro `9d4647b` (the final R1–R6 commits; both working trees clean), each copy built from its commit (`--lite=HEAD --pro=HEAD`). Every suite on both supported WordPress and PHP pairs, one suite at a time.

| Suite | WordPress 7.1.3 / PHP 8.2 | WordPress 6.8.11 / PHP 7.4 |
|---|---|---|
| `php-parse` (every file of both plugins on PHP 7.4) | **2/2** | **2/2** |
| `robustness` | **26/26** | **26/26** |
| `rest` | **17/17** | **17/17** |
| `contract` | **26/26** | **26/26** |
| `editor` (every available pattern through the gate, editability included) | **10/10** | **10/10** |
| `wp-editor` | **14/17** | **14/17** |
| `team-grid` (PHP 7.4.33 and 8.2.33; markup identical to `85390bb` in all 12 cases, hostile values escaped) | **8/8** | **8/8** |
| `matrix` (all 10 Lite/Pro combinations, the shipped Lite 1.8.0 included) | **109/109** | **109/109** |
| `upgrade --mutation=1` (both update orders; saved pages byte-identical) | **30/30** | **30/30** |
| **Total** | **245/248** | **245/248** |

**The 6 failures are one known block issue:** in each of `wp-editor`'s three editors, on both versions, the check "all 22 experimental WordPress exports Lite and Pro import still exist" fails because Call To Action imports `__experimentalStack`, which exists in neither WordPress version and which the block never uses (B-R6-2, [known-issues.md](known-issues.md)). The check stays strict; it passes once the block is fixed. No other failure, no PHP notices, no fatal errors, no outbound network attempt.

**Block code untouched:** no commit since R4 changed a block folder in either repository, and checksums of `src/blocks`, `includes/templates` and `build/` in both checkouts were identical before and after the run. (A Finder `.DS_Store` file in Pro's `src/blocks` changed between sessions; it is ignored by Git and not code, and the checksum script now skips such files.)

**Not covered (unchanged):** multisite; MySQL (the harness uses SQLite); the licence server; newer WordPress or Gutenberg builds; WordPress.org's own 1.8.0 download (the suites use the code-identical zip tracked on `release/1.8.0`); one editor with every Lite and Pro block switched on (R-12); the site and widget editors and repeated saves (one-off scripts in R2); WooCommerce and Gravity Forms blocks.
