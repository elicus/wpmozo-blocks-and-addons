# Pattern Library regression suites

Development tool, **not shipped**: release zips contain only `build/`, `includes/`, the main plugin file and the readme (`wp-scripts plugin-zip` defaults; there is no `files` field in `package.json`). The suites run against real plugin code on offline WordPress Playground sites: copies of Lite and Pro built from a commit or from the working tree, never the repositories themselves.

Results and the reasoning behind each suite: `docs/pattern-library/testing.md`.

## Prerequisites
| What | Notes |
|---|---|
| Node.js 22 | Tested with 22.17.0 |
| This repository's `node_modules` | `npm ci` once (never `npm install`, which can rewrite `package-lock.json`). Used for the build and for Playwright |
| The Pro repository (optional) | Sibling folder `../wpmozo-blocks-and-addons-pro`, or set `WPMOZO_PRO_REPO`. Its `node_modules` too, to build Pro copies |
| `@wp-playground/cli` | Installed anywhere, for example `npm install @wp-playground/cli@3.1.58` in a folder outside this repository. Set `WPMOZO_PLAYGROUND_CLI` to its `node_modules/.bin/wp-playground-cli` |
| WordPress release zips | `<version>.zip` files (for example `7.1.3.zip`, `6.8.11.zip`) in `~/.wordpress-playground/`, or set `WPMOZO_WP_ZIPS` |
| Google Chrome | For browser suites; Playwright drives the installed Chrome (`channel: 'chrome'`), nothing is downloaded |

Optional: `WPMOZO_TEST_CACHE` (default `~/.cache/wpmozo-pattern-library-tests`; no spaces in the path) holds plugin copies, Playground's home folder, run logs and result files.

To keep these settings in one file, copy `tools/pattern-library/.env.example` to `tools/pattern-library/.env`. The copy is ignored by Git. Load it in each terminal with `set -a; . tools/pattern-library/.env; set +a`. Full machine setup: [`docs/pattern-library/testing-environment-setup.md`](../../../docs/pattern-library/testing-environment-setup.md).

## Run
From the Lite repository root:

```bash
export WPMOZO_PLAYGROUND_CLI=/path/to/node_modules/.bin/wp-playground-cli
node tools/pattern-library/tests/run.cjs robustness
```

Options (all suites):
| Option | Default | Meaning |
|---|---|---|
| `--lite=<spec>` | `worktree` | Lite copy: `worktree` (tracked and untracked files, built), a commit, branch or tag, `zip:<commit, branch or tag>` (the release zip that commit tracks, unpacked as shipped), an absolute plugin folder, or `none` |
| `--pro=<spec>` | `worktree` | The same for Pro |
| `--wp=<version>` | `7.1.3` | WordPress version (a zip must exist) |
| `--php=<version>` | `8.2` | PHP version (7.4 to 8.5) |

Exit code 0 when every check passed, 1 when any failed. Each run writes a JSON result to `$WPMOZO_TEST_CACHE/results/` and keeps the site's logs (Playground output, blocked network attempts, fatal errors) in `$WPMOZO_TEST_CACHE/runs/`.

## Suites
| Suite | What it checks | Time |
|---|---|---|
| `formats` | Pattern data formats (PL-D37), no site: every Lite and Pro pattern has the right files (`pattern.xml` plus `content.json`, or the guarded `content.json.php` for Pro) and no old PHP data file remains; the runtime and the tools use the same guard line; `compile.php --check` passes for Lite and Pro on PHP 7.4 and 8.2 (php-wasm from the Playground CLI's `node_modules`); the compiler refuses a schema error, a DOCTYPE or external entity, an unknown element, declared blocks that differ from the content, a revision mismatch, an old PHP data file and premium content stored as plain JSON, and `--check` reports a stale catalog (23 checks) | — |
| `robustness` | Library robustness (roadmap R1): the catalog cache follows Lite, WordPress, allowed-HTML and other sources' map changes; a missing Lite map key reports `lite_outdated`; broken catalog entries, content JSON, a content checksum or declared-blocks mismatch, unprotected and unguarded premium content, a broken `catalog.json` and a broken JSON map are isolated and reported; catalog and content route agree for every pattern and role; protection without a licence; no PHP notices; no network | ~5 min |
| `editor` | Every available pattern through the repository's quality gate (`tools/pattern-library/gate.cjs`): insert through the library, valid after save and reload, front end at three widths, editability (PL-D22) | ~10 min |
| `rest` | REST permissions per role, licence lock, links and issues only for the right users, no markup or licence value in the catalog, cache headers and ETag, the library switch, real HTTP (no nonce, query-string route, JSONP, direct requests to every library PHP file, the premium `content.json.php` files and `data/strings.php` included, give an empty answer; every add-on pattern's content is a guarded `content.json.php` and no plain premium `content.json` exists; a free `content.json` is served, as designed; the editor's nonce) | ~4 min |
| `entitlement` | Premium entitlement (PL-D34) through the driver's test-only premium source `testpro` (one pattern with a `published` date, one without): only `entitled` allows inserting; expired (with and without an old `cutoff`), revoked, not activated, an unknown state, a throwing callback and a non-array answer lock both patterns for every role, with no content in the refusal; `published` is optional; thumbnails and previews are listed and served in every state; the catalog has no markup and no cutoff; free patterns are unchanged for every role; a page made of a premium and a free pattern stays unchanged, is shown, stays editable by an editor and publishes again; no PHP notices; no network. Runs with or without Pro | ~3 min |
| `matrix` | Lite/Pro combinations, one site each, with expected outcomes. With a Lite that has no shared editor script (`lite-before-contract`, `lite-1.8.0`): Pro blocks work while Lite's blocks are on, then the same site with every Lite block off must show Pro blocks as unsupported, warn, and save edits without changing them (`--only=<name,…>`; `--older-lite=`, `--oldest-lite=`, `--older-pro=` choose the old copies, defaults `b91a5ec`, `zip:release/1.8.0`, `ef1909d`) | ~20 min |
| `upgrade` | In-place updates in both orders on one running site, licence and plugin deactivation, Lite deactivated under Pro (`--from-lite=`, `--from-pro=`; `--mutation=1` adds the saved-output mutation proof; `--only=lite-first` or `pro-first`) | ~15 min |
| `contract` | Roadmap R4: every shared surface in `lib/surface.cjs` exists and behaves (runtime, editor, settings page, source), including blocks add-ons insert and their saved markup, block on/off for add-on blocks and an add-on's `dynamic-style.php`; Pro uses no other Lite surface, registers no handle under a Lite name and defines the constants Lite reads; Pro's editor guard and start-up check cover every Lite global and helper method Pro uses. Checks that need Pro are skipped with `--pro=none` | ~4 min |
| `launcher` | Editor entry points (PL-D31, PL-D32): the header icon opens the library window directly with the settings sidebar open and closed, the launcher sidebar is never painted (checked at every animation frame) and the sidebar is left as it was; Escape and the Close button, focus back on the icon, reopening, one window only, inserting a pattern; the Options menu has exactly one Pattern Library item, which opens the window directly with the icon pinned and unpinned; the placeholder block opens the same window and is replaced; a 600 px editor; valid after save and reload | ~2 min |
| `php-parse` | Every PHP file of both plugins parses on the minimum PHP (`--floor=7.4`), with php-wasm from the Playground CLI's `node_modules`; no site | ~1 min |
| `team-grid` | Pro Team Grid (roadmap R3): every layout with every click trigger renders on the minimum PHP and on PHP 8.2, with markup identical to a baseline Pro commit (`--baseline-pro=`, default `85390bb`; `--baseline-php=`, default `8.2`; `--floor=`, default `7.4`) | First run in R3 |
| `wp-editor` | Editor compatibility (roadmap R6) in three post editors: default, with a classic meta box, and with a test block on API version 2 (which turns the canvas iframe off on WordPress 6.8; 7.1 keeps it): no WPMozo stylesheet "added to the iframe incorrectly"; Lite's editor stylesheet once in the editor document and once in the canvas, never on the front end; every `__experimental` / `__unstable` export Lite and Pro import still resolves; a Lite and a Pro block mount, save and reload | ~1 min |

Run browser suites (`editor`, `launcher`, `matrix`, `upgrade`, `contract`, `wp-editor`) one at a time: several Playground sites and Chrome on one machine can slow the editor enough to stop the gate.

Typical runs:

```bash
# Everything for a change in Lite, against the current Pro:
node tools/pattern-library/tests/run.cjs php-parse formats robustness rest entitlement contract editor launcher
# Version combinations and updates (slow):
node tools/pattern-library/tests/run.cjs matrix upgrade
# The minimum supported WordPress and PHP:
node tools/pattern-library/tests/run.cjs robustness rest editor --wp=6.8.11 --php=7.4
# A mutation proof: the same suite against code from before a fix must fail:
node tools/pattern-library/tests/run.cjs robustness --lite=<commit before the fix>
```

## How the sites are isolated
- WordPress comes from the local zip, served on 127.0.0.1.
- `lib/net-guard.cjs` is preloaded into the Playground process: every non-loopback connection or DNS lookup is blocked and logged (`net.log`).
- `driver/wpmozo-test-driver.php` is mounted as a must-use plugin. It works only when the runner defines `WPMOZO_TEST_DRIVER` and the request comes from the loopback address. It blocks outbound WordPress HTTP, records fatal errors on the host (a site that can't boot loses its debug log), and gives the suites test endpoints: REST as a role, options, a licence test value, plugin activation, posts, cache keys.
- `formats` and `php-parse` start no site: they run PHP through php-wasm from the Playground CLI's `node_modules`.
- Licence states use a test value in the site option that a real activation writes. No real licence key is ever used.
- Other entitlement states use a test-only premium source, `testpro`, that the driver registers only while a suite has stored its answer (`set&entitlement=<JSON>`; `''` removes it). Its pattern files (a `catalog.json` and guarded `content.json.php` files, PL-D37) are written into the site's `wp-content/wpmozo-test-source/`.

## Writing a suite
- A suite is `suites/<name>.cjs` exporting `{ description, run( { cli, report } ) }`.
- Start sites with `lib/setup.cjs` `standardSite()`; use `mutable: true` when the suite changes plugin files.
- Find patterns and tokens from the plugin files (`patternsUsingTokens()`), not from fixed slugs: the pilot patterns will be replaced.
- **Every check needs a mutation proof:** run it against code without the fix (an older commit with `--lite=<commit>`), or break the behaviour on purpose, and confirm it fails. Record the proof in `docs/pattern-library/testing.md`.
- Never change an expectation to make a failing check pass unless the expectation was wrong; record that too.
