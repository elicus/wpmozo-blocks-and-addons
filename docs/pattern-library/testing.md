# Testing

Results are recorded only for checks that were actually run. Anything not run is listed as not tested.

## Tools
| Check | Command / tool |
|---|---|
| PHP syntax | `php -l` with PHP 8.0, 8.1, 8.2 (Local's bundled binaries) and 8.4 (Homebrew) |
| PHP 7.3 compatibility (static) | PHPCompatibilityWP 2.1.8 (`testVersion 7.3-`), installed inside the test harness only |
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
