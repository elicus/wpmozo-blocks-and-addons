# Pattern Library regression suites

Development tool, **not shipped**: release zips contain only `build/`, `includes/`, the main plugin file and the readme (`wp-scripts plugin-zip` defaults; there is no `files` field in `package.json`). The suites run against real plugin code on offline WordPress Playground sites: copies of Lite and Pro built from a commit or from the working tree, never the repositories themselves.

Results and the reasoning behind each suite: `docs/pattern-library/testing.md`.

## Prerequisites
| What | Notes |
|---|---|
| Node.js 22 | Tested with 22.17.0 |
| This repository's `node_modules` | `npm install` once. Used for the build and for Playwright |
| The Pro repository (optional) | Sibling folder `../wpmozo-blocks-and-addons-pro`, or set `WPMOZO_PRO_REPO`. Its `node_modules` too, to build Pro copies |
| `@wp-playground/cli` | Installed anywhere, for example `npm install @wp-playground/cli@3.1.58` in a folder outside this repository. Set `WPMOZO_PLAYGROUND_CLI` to its `node_modules/.bin/wp-playground-cli` |
| WordPress release zips | `<version>.zip` files (for example `7.1.3.zip`, `6.8.11.zip`) in `~/.wordpress-playground/`, or set `WPMOZO_WP_ZIPS` |
| Google Chrome | For browser suites; Playwright drives the installed Chrome (`channel: 'chrome'`), nothing is downloaded |

Optional: `WPMOZO_TEST_CACHE` (default `~/.cache/wpmozo-pattern-library-tests`; no spaces in the path) holds plugin copies, Playground's home folder, run logs and result files.

## Run
From the Lite repository root:

```bash
export WPMOZO_PLAYGROUND_CLI=/path/to/node_modules/.bin/wp-playground-cli
node tools/pattern-library/tests/run.cjs robustness
```

Options (all suites):
| Option | Default | Meaning |
|---|---|---|
| `--lite=<spec>` | `worktree` | Lite copy: `worktree` (tracked and untracked files, built), a commit, branch or tag, an absolute plugin folder, or `none` |
| `--pro=<spec>` | `worktree` | The same for Pro |
| `--wp=<version>` | `7.1.3` | WordPress version (a zip must exist) |
| `--php=<version>` | `8.2` | PHP version (7.4 to 8.5) |

Exit code 0 when every check passed, 1 when any failed. Each run writes a JSON result to `$WPMOZO_TEST_CACHE/results/` and keeps the site's logs (Playground output, blocked network attempts, fatal errors) in `$WPMOZO_TEST_CACHE/runs/`.

## Suites
| Suite | What it checks | Time |
|---|---|---|
| `robustness` | Library robustness (roadmap R1): the catalog cache follows Lite, WordPress, allowed-HTML and other sources' map changes; a missing Lite map key reports `lite_outdated`; broken pattern, content and map files are isolated and reported; catalog and content route agree for every pattern and role; protection without a licence; no PHP notices; no network | ~5 min |
| `editor` | Every available pattern through the repository's quality gate (`tools/pattern-library/gate.cjs`): insert through the library, valid after save and reload, front end at three widths, editability (PL-D22) | ~10 min |

Run browser suites (`editor`) one at a time: several Playground sites and Chrome on one machine can slow the editor enough to stop the gate.

A mutation proof: the same suite against code from before a fix must fail:

```bash
node tools/pattern-library/tests/run.cjs robustness --lite=<commit before the fix>
```

## How the sites are isolated
- WordPress comes from the local zip, served on 127.0.0.1.
- `lib/net-guard.cjs` is preloaded into the Playground process: every non-loopback connection or DNS lookup is blocked and logged (`net.log`).
- `driver/wpmozo-test-driver.php` is mounted as a must-use plugin. It works only when the runner defines `WPMOZO_TEST_DRIVER` and the request comes from the loopback address. It blocks outbound WordPress HTTP, records fatal errors on the host (a site that can't boot loses its debug log), and gives the suites test endpoints: REST as a role, options, a licence test value, plugin activation, posts, cache keys.
- Licence states use a test value in the site option that a real activation writes. No real licence key is ever used.

## Writing a suite
- A suite is `suites/<name>.cjs` exporting `{ description, run( { cli, report } ) }`.
- Start sites with `lib/setup.cjs` `standardSite()`; use `mutable: true` when the suite changes plugin files.
- Find patterns and tokens from the plugin files (`patternsUsingTokens()`), not from fixed slugs: the pilot patterns will be replaced.
- **Every check needs a mutation proof:** run it against code without the fix (an older commit with `--lite=<commit>`), or break the behaviour on purpose, and confirm it fails. Record the proof in `docs/pattern-library/testing.md`.
- Never change an expectation to make a failing check pass unless the expectation was wrong; record that too.
