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
| Lite 1.8.0 + Pro HEAD (c07) | Pro block crashes in the editor; Plugins notice only (Pro roadmap R2) |
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

## Automated test plan (proposed, roadmap R5)

Today the suites live in the offline harness, outside both repositories, so only this machine can run them (R-13). Proposal: move the site-independent parts into `tools/pattern-library/tests/` (not shipped); each takes a site URL, and the harness keeps only booting and network isolation. No `package.json` change: they run with `node` and `python3` like the existing tools.

| Suite | What it proves | Runs against | Exists today as |
|---|---|---|---|
| Contract conformance | Lite exposes every documented contract item and every surface in [registry-and-contract.md](registry-and-contract.md) section 4 (functions, classes, methods, action, features, handles, globals) | Each Lite build | Planned (R4) |
| Add-on usage scan | Pro uses no Lite symbol outside that list | Pro source | One-off grep in this audit (R4) |
| Version combinations | Supported combinations pass; notice combinations show their notice and never a fatal | Lite × Pro × WordPress × PHP matrix | `combo.py` |
| Upgrade and state changes | Saved pages survive updates, licence changes, deactivation; cache follows changes; one bad file doesn't take the library down | One running site | `upgrade.py` |
| Licence and protection | Locked without an activated licence; no content in refusals; direct file requests empty | Lite + Pro | `test_roles.py`, `combo.py` HTTP checks |
| REST permissions | 401/403 per role; cookie without nonce; query-string route; JSONP | Any site | `test_lpl2.py`, `combo.py` |
| Import and editability | Every pattern inserts, edits inline and in the Inspector, saves, reloads and shows on the front end | Each WordPress version | `gate.cjs` (in the repository), `test_editability.cjs` |
| Save/reload of existing content | Pages saved by older versions stay valid after updating | Old → new copies | `upgrade.py` S1–S3, S10 |
| PHP floor | Every file parses on the oldest supported PHP | Both repositories | `lint-all-74.cjs` |
| Unit tests | Importer and search logic | Jest | `src/library/test/` (13 tests) |

**Rules for every suite:**
- Each check has a mutation proof: break the behaviour on purpose and confirm the check fails.
- A failing check is fixed in the product, never by changing the expectation, unless the expectation itself was wrong; that is then recorded here.
- Record the exact WordPress, PHP and plugin commits of each run.

**Not available offline:** newer WordPress or Gutenberg builds, multisite, the licence server, MySQL (the harness uses SQLite) and CI. Run those before release elsewhere (R-12 adds a native-PHP run with every block active).

