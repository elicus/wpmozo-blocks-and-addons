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

**Not tested in LPL-1:**
- multisite;
- roles other than administrator;
- the Site Editor;
- PHP 7.3 at runtime (no runtime available);
- WordPress versions other than 6.8.11 and 7.1.3.
