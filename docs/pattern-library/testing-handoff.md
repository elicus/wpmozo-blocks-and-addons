# Pattern Library testing handoff (Lite)

The starting point for a developer who continues the Pattern Library testing on their own machine, and for that developer's Claude session.
- **Who:** written for Ayush, who already uses Claude and has LocalWP with several existing sites.
- **What it gives:** the whole project context, the boundaries, the remaining test plan and the reporting format, so nothing has to be pieced together.
- **The Pro side:** the private Pro repository has its own `docs/pattern-library/testing-handoff.md` (Pro architecture, licence behaviour, Pro known issues). Private Pro details stay there.

**Updated:** 2026-11-26 (PL-D37, below); before that 2026-11-23, from Lite `dev/sunil` (`6d0a8c9`) and Pro `release/pattern-lib`. Since the final validation (Lite `044cd2b`, Pro `9d4647b`):
- two Lite editor changes: the header icon opens the library window directly, with no sidebar step (`485e5e7`, PL-D31), and the Options menu keeps one library item, "Pattern Library" (`5ca1e69`, PL-D32, 2026-11-17); test T4b and the `launcher` suite;
- the premium entitlement rule (PL-D34, Lite `b54b9de`, 2026-11-19): only `entitled` inserts premium patterns; new `entitlement` suite. Lite code then did not change until PL-D37 (next item); the rest was documentation and the `.env` template;
- **2026-11-26: pattern data is JSON and XML (PL-D37).** Lite code changed: `pattern.xml` metadata compiled into `catalog.json`, JSON content (premium content in guarded `content.json.php`), JSON maps; REST routes and responses, importer and UI unchanged. New `formats` suite; `rest` and `robustness` extended ([testing.md](testing.md), "JSON/XML pattern data, 2026-11-26"). The Pro pilots were converted in the Pro repository;
- **Pro code changed** on 2026-11-19 (its Phase 1) and 2026-11-23 (its Phase 2: its own licence-status check, implemented, tested, committed and pushed; its live backend integration is pending, so it is dormant). Lite has no status check. Details: the Pro handoff.

Machine setup details: [testing-environment-setup.md](testing-environment-setup.md).

**Scope of the rules in this file:** "never edit plugin code" and "never commit" apply to testing sessions. Implementation work follows the private Pro repository's `docs/pattern-library/AYUSH-PATTERN-LIBRARY-HANDOFF.md` and the owner's approval.

**Labels:**
- **[Verified]**: run or checked on the owner's Mac, or read in the code.
- **[Untested]**: never run as written; report how it went.
- **[Developer required]**: needs the owner (access, licence key, decision) or a code change.
- **[Optional]**.

---

## 0. What the developer does first (by hand)

These five steps are done by the developer, not by Claude. Every command runs on the developer's Mac in Terminal.

### Step 1: Pick an existing LocalWP site
It must meet [testing-environment-setup.md](testing-environment-setup.md) section 5.1:
- WordPress 6.8 or later, PHP 7.4 or later, single site;
- a development site that can take a few test pages and test users;
- no folder named `wpmozo-blocks-and-addons` or `wpmozo-blocks-and-addons-pro` in its `wp-content/plugins` yet. If there is one, don't touch it: pick another site, or see section 5.3 of the setup guide.
- Keep its current WordPress and PHP versions.
- Start the site in Local.

Its plugins folder is `<site folder>/app/public/wp-content/plugins`. With Local's default location that is `$HOME/Local Sites/<site-name>/app/public/wp-content/plugins` **[Verified]** (Local's layout). Use your own folder if you chose another location for the site.

### Step 2: Clone both repositories into that plugins folder
Full clones, exact folder names, these branches. **[Untested]** as written; both branches exist on GitHub **[Verified]**. Pro is private: you need read access from the owner **[Developer required]**.
```bash
cd "$HOME/Local Sites/<site-name>/app/public/wp-content/plugins"
```
```bash
git clone --branch dev/sunil https://github.com/elicus/wpmozo-blocks-and-addons.git wpmozo-blocks-and-addons
```
```bash
git clone --branch release/pattern-lib https://github.com/elicus/wpmozo-blocks-and-addons-pro.git wpmozo-blocks-and-addons-pro
```
**Expected:**
- two new folders;
- `git -C wpmozo-blocks-and-addons branch --show-current` prints `dev/sunil`;
- `git -C wpmozo-blocks-and-addons-pro branch --show-current` prints `release/pattern-lib`.

Clone straight into the plugins folder. A copy without its `.git` folder can't be checked or updated.

### Step 3: Build both plugins
Node.js 22 and npm are needed (tested with 22.17.0 and 11.4.2).
```bash
cd wpmozo-blocks-and-addons && npm ci && npm run build && cd ..
```
```bash
cd wpmozo-blocks-and-addons-pro && npm ci && npm run build && cd ..
```
- `npm run build` is **[Verified]**. `npm ci` on a fresh clone is **[Untested]**; both lockfiles match their `package.json`. Use `npm ci`, never `npm install`, which can rewrite the tracked lockfile.
- **Expected:** `build/blocks-manifest.php` exists in both folders, and `git status --short` prints nothing in either: `build/` and `node_modules/` are ignored.

### Step 4: Activate Lite first, then Pro
In the site's wp-admin, go to **Plugins** and activate **WPMozo Blocks and Addons**, then **WPMozo Blocks and Addons Pro**. **[Verified]** order: Pro requires Lite.

**Expected:**
- both are active;
- no notice from Pro about Lite;
- a **Blocks and Addons** menu.

**[Optional]** Pro licence:
- Enter the development key the owner gives you in the licence section of **Blocks and Addons** **[Developer required]**.
- Without it, Pro patterns show as **Locked**, which is also tested.
- Type the key yourself; never give it to Claude.

### Step 5: Open your Claude session and paste the prompt
Use your existing Claude session. Opening it in the site's `wp-content/plugins` folder lets it read both clones without extra permission prompts. Paste the prompt from section 1.

---

## 1. The prompt for Claude (copy and paste)

```text
I've cloned WPMozo Lite (branch dev/sunil) and WPMozo Pro (branch release/pattern-lib) into the wp-content/plugins folder of one of my existing LocalWP sites, built both, and activated Lite, then Pro. First ask me for that plugins folder path; don't search my disk. Then:
1. Read docs/pattern-library/testing-handoff.md in both clones (wpmozo-blocks-and-addons and wpmozo-blocks-and-addons-pro) and every document in their reading order, plus any project memory you already have for this work.
2. Summarize for me in a few lines the project's history, architecture, completed work, restrictions and pending testing tasks.
3. Inspect my real environment read-only, as the Lite handoff's section 2.2 describes: Local site, WordPress and PHP versions, plugin folders, versions, branches, builds. Confirm that both plugins run from these clones and branches. Assume nothing; show me what you found.
4. Continue the remaining testing step by step with me, following the Lite handoff's test plan (section 7) and the Pro handoff. Ask me before any change, download or install, and tell me exactly what to do in the browser at each manual step.
5. Report results, failures and evidence in the handoff's report format.
Never edit plugin code, block folders, patterns or tests, never fix on-hold issues, never change, pull, commit or push Git branches, never change my site's WordPress or PHP version, and never handle passwords or licence keys. Stop and ask when anything is unclear.
```

---

## 2. Instructions for Claude

### 2.1 Reading order
Read these files in order. Paths are relative to each clone.

| # | Lite (`wpmozo-blocks-and-addons/`) | Why |
|---|---|---|
| 1 | `docs/pattern-library/testing-handoff.md` (this file) | Context, boundaries, test plan, report |
| 2 | `docs/pattern-library/PROJECT_CONTEXT.md` | Architecture, contract, rules. Read it as background: its branch and commit rules are for the owner's development sessions; this testing never commits |
| 3 | `docs/pattern-library/handoff.md` | Current state, release readiness, on-hold block issues |
| 4 | `docs/pattern-library/testing-environment-setup.md` | Site requirements and inspection (section 5), URL check (8.2), suites (10), manual checks (11), cleanup (12), report (13) |
| 5 | `docs/pattern-library/known-issues.md` | Known issues; see also section 6 below for their current status |
| 6 | `docs/pattern-library/testing.md`, sections "Final validation, 2026-11-11", "Phase 1" and "Rerun with the add-on's Phase 2, and LocalWP browser check, 2026-11-23" | The recorded results to compare with |
| 7 | As needed: `editor-ui.md`, `import-workflow.md`, `rest-api.md`, `security.md`, `compatibility.md`, `decisions.md` | Detail on a failing area |

| # | Pro (`wpmozo-blocks-and-addons-pro/`) | Why |
|---|---|---|
| 8 | `docs/pattern-library/testing-handoff.md` | Pro context, licence behaviour, Pro tests and known issues |
| 9 | `docs/pattern-library/PROJECT_CONTEXT.md`, `handoff.md`, `known-issues.md` | Pro detail |
| 10 | `CLAUDE.md` (repository root) | Pro plugin overview. Its site name is the owner's; ignore it |

- Lite's own `CLAUDE.md` is not in the repository (it is Git-ignored).
- The owner's Claude memory is not shared. These documents replace it.
- If you have project memory for this work from earlier sessions on this machine, read it too. Where it disagrees with these documents, these documents win.

### 2.2 Inspect before anything else (read-only)
Ask the developer for the plugins folder path; call it `<plugins>`. Run only read-only commands and show the results as a table.

1. **The site:**
   - Run the inspection command in [testing-environment-setup.md](testing-environment-setup.md) section 5.2. It lists Local's sites with their state, WordPress and PHP versions, single site or multisite, URL and folder.
   - Find the site whose folder contains `<plugins>`. If Local's files can't be read, ask the developer for the same facts.
2. **Each clone** (`<plugins>/wpmozo-blocks-and-addons` and `<plugins>/wpmozo-blocks-and-addons-pro`):
   ```bash
   git -C "<plugins>/wpmozo-blocks-and-addons" --no-optional-locks status --short --branch
   ```
   ```bash
   git -C "<plugins>/wpmozo-blocks-and-addons" log -1 --format='%h %ad %s' --date=short
   ```
   ```bash
   git -C "<plugins>/wpmozo-blocks-and-addons" remote get-url origin
   ```
   ```bash
   git -C "<plugins>/wpmozo-blocks-and-addons" ls-remote --heads origin dev/sunil
   ```
   Do the same for Pro with branch `release/pattern-lib`.

   **Expected:**
   - the first line is `## dev/sunil...origin/dev/sunil` (Pro: `## release/pattern-lib...origin/release/pattern-lib`), with no further lines;
   - the origin is the GitHub URL in section 4;
   - the `ls-remote` hash equals the local commit.

   If the remote is newer, report it; the developer decides whether to update. Never pull yourself.
3. **Builds:**
   ```bash
   ls "<plugins>/wpmozo-blocks-and-addons/build/blocks-manifest.php" "<plugins>/wpmozo-blocks-and-addons/build/library/index.js" "<plugins>/wpmozo-blocks-and-addons-pro/build/blocks-manifest.php"
   ```
   **Expected:** all three exist. **[Verified]** on the owner's site.
4. **Versions in the plugin headers:**
   ```bash
   grep -m1 "Version:" "<plugins>/wpmozo-blocks-and-addons/wpmozo-blocks-and-addons.php" "<plugins>/wpmozo-blocks-and-addons-pro/wpmozo-blocks-and-addons-pro.php"
   ```
   **Expected:** Lite `1.9.0`, Pro `1.0.0` (both provisional; release decisions pending: Lite 1.9.0 is already released from `main` without the library, so the release version is an open owner decision).
5. **Only one copy of each plugin is installed:**
   ```bash
   grep -lE "^[[:space:]]*\*[[:space:]]*Plugin Name:[[:space:]]*WPMozo Blocks and Addons( Pro)?[[:space:]]*$" "<plugins>"/*/*.php
   ```
   **Expected:** exactly `wpmozo-blocks-and-addons/wpmozo-blocks-and-addons.php` and `wpmozo-blocks-and-addons-pro/wpmozo-blocks-and-addons-pro.php`. **[Verified]** on the owner's site. Any other folder means a second copy: report it and don't touch it.
6. **The site URL, and that Lite is running.** Use the site URL from step 1 or from the developer.
   - Run the URL checks in setup guide section 8.2: `/wp-login.php` gives `200`, and `/wp-admin/` redirects to the same host.
   - Then:
   ```bash
   curl -s "<site-url>/wp-json/" | grep -o '"wpmozo\\/v1"' | head -1
   ```
   ```bash
   curl -s -o /dev/null -w '%{http_code}\n' "<site-url>/wp-json/wpmozo/v1/library/catalog"
   ```
   **Expected:** `"wpmozo\/v1"` (Lite's REST routes are registered, so Lite is active), and `401` (the catalog refuses visitors). **[Verified]** on the owner's site.
   - Pro's activation can't be seen from outside: ask the developer to confirm both plugins are active on the **Plugins** screen, with no notices.
7. **Facts to ask the developer for:**
   - the active theme (or read it with the third URL check in section 8.2);
   - other active plugins;
   - whether a Pro licence is activated;
   - whether they want the automated suites (test T10; they need extra downloads).

Then summarize the environment, flag anything unexpected, and wait for the developer before the test plan.

### 2.3 How to run the tests
- Work through section 7 in order, one test at a time. For manual steps, tell the developer exactly what to click and what to look for. Record what they report.
- Name test content so it can be cleaned up: pages `WPMozo PL test - …`, users `wpmozo-test-…`. Keep a list of IDs.
- **Collect evidence for every failure:**
  - the exact message;
  - steps to reproduce;
  - a screenshot from the developer;
  - browser console errors;
  - failing network requests (URL and status only);
  - new lines in `wp-content/debug.log`, if the developer turned it on.
- On a failure, stop that test and check section 6: a known issue is noted as "known", not as a new finding. Ask the developer whether to continue.
- At the end, offer the cleanup (setup guide section 12) and write the report (section 8).

---

## 3. Project overview

### 3.1 What it is
The Pattern Library lets editors browse ready-made page sections in the block editor and insert them as normal, fully editable blocks.
- **Lite** (`wpmozo-blocks-and-addons`, public) owns the whole library: catalog, REST routes, validation, import, editor UI, central maps, the asset resolver and the free patterns.
- **Pro** (`wpmozo-blocks-and-addons-pro`, private) adds a premium pattern source through a documented contract and answers one server-side question: is this site entitled to Pro patterns.

### 3.2 Architecture (Lite)

| Part | Where | What it does |
|---|---|---|
| Integration contract | `includes/class-mozo-bna-integration.php`, `includes/mozo-bna-integration-functions.php` | `wpmozo_bna_integration()->supports( $feature, $version )`; features `integration`, `shared-js`, `library` (version 1); action `wpmozo_bna_loaded` |
| Shared editor script | `src/shared/` → `build/shared/` | Exposes Lite's editor components and utilities to add-ons (`window.WPMozoBNAComponents`, `WPMozoBNAUtils`, `WPMozoBNA`) |
| Library service, registry, resolver, validator, REST | `includes/library/class-mozo-bna-library*.php` | Reads each source's `catalog.json` and content files (JSON, never executed), validates them, resolves tokens, decides availability per user, serves the catalog and content |
| Central maps | `includes/library/data/*.json` | Categories, tags, media, links, icons, demo text |
| Free patterns and their images | `includes/library/catalog.json`, `patterns/`, `previews/`, `media/` | Two pilot patterns today |
| Editor UI, importer, store | `src/library/` → `build/library/` | The library window, search and filters, preview, insertion |
| Placeholder block | `src/blocks/pattern-library/` | The "Pattern Library" block (a block folder: never edit it) |
| Authoring tools and test suites (not shipped) | `tools/pattern-library/` | Export, content build, catalog compiler, quality gate, regression suites |

**Flows:**
- **Catalog:** `GET wpmozo/v1/library/catalog` returns metadata and per-user availability, never content.
- **Content:** `GET wpmozo/v1/library/patterns/<source>/<slug>` repeats every check, validates again and sends `no-store`.
- **Import:** the editor parses the content, checks blocks and attributes, and rebuilds them with fresh IDs. It inserts everything as one undo step, or nothing if there is any problem.

**Patterns:**
- Each pattern is `patterns/<slug>/pattern.xml` (metadata, compiled into the source's `catalog.json`) plus `content.json` (a JSON wrapper holding the block markup with tokens `{{wpmozo:media|link|icon|text:<source>/<key>}}`). A premium source keeps its content in `content.json.php`, behind a guard line, so a direct web request answers empty (PL-D37, 2026-11-26).
- Tokens are resolved on the server.
- `Mozo_Bna_Library_Resolver::asset_url()` builds every image URL from the plugin's own URL. A future CDN setting also needs a purpose argument in that method (previews may move; content images stay local, PL-D03) and the provider seam ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) sections 11 and 12).

**Access rules:**
- **Who sees the library:** users with `edit_posts`.
- **`<style>` patterns:** patterns whose blocks save `<style>` need `unfiltered_html`, so Authors and Contributors see them as unavailable (policy D3).
- **Pro patterns:** locked without an activated Pro licence.
- **Library switch:** Blocks and Addons → General, on by default.

**Principles:**
- Lite works alone.
- Feature detection, never version numbers, decides behaviour.
- Nothing loads on the front end.
- Content is validated on the server and checked again in the editor.
- Local first: no external requests.

Detail: [architecture.md](architecture.md), [registry-and-contract.md](registry-and-contract.md), [editor-ui.md](editor-ui.md), [import-workflow.md](import-workflow.md), [rest-api.md](rest-api.md), [security.md](security.md).

### 3.3 The patterns today (pilots)

| Source | Slug | Title | Category |
|---|---|---|---|
| Lite | `hero-product-launch` | Product launch hero | Hero |
| Lite | `pricing-three-plans` | Three pricing plans | Pricing |
| Pro | `about-process-timeline` | Four-step process | About |
| Pro | `features-cards-results` | Feature cards with results | Features |

They are temporary designs awaiting the owner's design review. No new patterns are added before approval.

---

## 4. History, status, branches and files

### 4.1 Completed work

| Stage | What | Status |
|---|---|---|
| Baseline decisions | Architecture and policies (PL-D01…) | Approved 2026-11-03 |
| LPL-1 | Integration contract and shared editor script | Done 2026-11-03 |
| LPL-2 | Registry, resolver, maps, validator, REST | Done 2026-11-03 |
| LPL-UX, LPL-3 | UI prototype (approved), then UI, importer, placeholder block, entry points, library switch | Done 2026-11-03 |
| PPL-S, PPL-1, PPL-2 (Pro) | Security port, contract adoption, Pro source and entitlement | Done |
| LPL-T | Authoring tools and the four pilot patterns | Built and gated 2026-11-04; **design review pending** |
| Compatibility audit | Findings and stages R1–R6 | Done and approved 2026-11-05 |
| R1 | Library robustness (cache, broken files isolated, `lite_outdated`) | Done 2026-11-05 (`98d4013`) |
| R5 | Reusable test suites in `tools/pattern-library/tests/` | Done 2026-11-05 |
| R2 | Pro with an older Lite (editor guard, notices) | Done 2026-11-06 |
| R3 | PHP 7.4 / WordPress 6.8 floor and headers | Done 2026-11-06 |
| R4 | Lite surfaces Pro uses frozen and checked by the `contract` suite | Done 2026-11-06 |
| R6 | Editor stylesheet and editor without the canvas iframe | Done 2026-11-06 |
| Final validation | Every suite, WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4: 245 of 248 checks each; the 3 failures are block issue B-R6-2 | Done 2026-11-11 |
| Guides | Production authoring guide, testing environment setup, this handoff | 2026-11-13 to 2026-11-16 |
| PL-D31 | The header icon opens the library window directly (no sidebar step); `launcher` suite | Done 2026-11-16 (`485e5e7`, suite `21ae47c`) |
| PL-D32 | One library item in the Options menu, "Pattern Library" ("Open Pattern Library" removed) | Done 2026-11-17 (`5ca1e69`, suite `80f8a12`) |
| Phase 1, PL-D34 | Only `entitled` inserts premium patterns; `published` optional; expired-licence message; `entitlement` suite (58/58) | Done 2026-11-19 (`b54b9de`, suites `0286e2c`) |
| Pro Phase 2 | Pro's own licence-status check (not in Lite): implemented and tested; live backend integration pending, so dormant; no Lite change; Lite suites rerun | Implemented 2026-11-23 (Pro repository); live integration pending |
| LocalWP browser check | Lite `6d0a8c9` with Pro, WordPress 7.1.5 / PHP 8.2, administrator | Passed 2026-11-23 ([handoff.md](handoff.md)) |
| PL-D37 | Pattern data is JSON and XML (`pattern.xml` → `catalog.json`, JSON content, JSON maps); pilots converted with identical content and REST output; `formats` suite (23/23) | Done 2026-11-26 ([testing.md](testing.md)) |

**Not started:** Stage F (more patterns, after the design review), X-1, the release.

**Waiting on the owner:**
- the pilot design review;
- the release version (headers say 1.9.0, which is already released from `main` without the library; provisional pattern values say 1.10.0);
- the Lite-to-Pro card link (`example.com` placeholder, a release blocker);
- the other open decisions in [handoff.md](handoff.md), "Release readiness" (merge, provider seam timing, Ayush's workflow, release checklist owner, release zip contents).

### 4.2 Repositories and branches

| | Lite | Pro |
|---|---|---|
| Repository | `https://github.com/elicus/wpmozo-blocks-and-addons.git` (public) | `https://github.com/elicus/wpmozo-blocks-and-addons-pro.git` (private) |
| Branch to test | `dev/sunil` | `release/pattern-lib` |
| Folder name (exact) | `wpmozo-blocks-and-addons` | `wpmozo-blocks-and-addons-pro` |
| Plugin version (header) | 1.9.0 | 1.0.0 |
| Docs | `docs/pattern-library/` | `docs/pattern-library/` |

### 4.3 Important files (Lite)
- **Library engine:** `includes/library/class-mozo-bna-library.php`, `-registry.php`, `-resolver.php`, `-validator.php`, `-rest.php`.
- **Maps:** `includes/library/data/*.json`.
- **Patterns:** `includes/library/catalog.json` (generated) and `includes/library/patterns/<slug>/` (`pattern.xml`, `content.json`).
- **Library switch:** `includes/admin/panel/partials/general.php`, `includes/admin/assets/js/panel-library.js`.
- **Editor UI:** `src/library/` (built to `build/library/`).
- **Suites:** `tools/pattern-library/tests/run.cjs`, `suites/*.cjs`, [README](../../tools/pattern-library/tests/README.md).
- **Local settings template:** `tools/pattern-library/.env.example`.

---

## 5. Boundaries (for the developer and Claude)

1. **No implementation changes.**
   - No edits to PHP, JS, CSS, patterns, maps, previews, media, tools or tests in either plugin.
   - No edits to `package.json`, `package-lock.json` or `.gitignore`.
   - Testing finds and reports; it never fixes.
2. **Block folders are off-limits** (PL-D29): Lite and Pro `src/blocks/**`, Pro `includes/templates/block-<slug>/`, and either plugin's `build/blocks/**`.
3. **Block issues are ON HOLD** (owner decision, 2026-11-11). Don't fix them or work around them; they are for a separate developer after the owner's approval. Report them only if they behave differently from section 6.
4. **Git:** no commits, pushes, branch switches, pulls, fetches, merges, rebases, resets, stashes or history rewrites.
   - The developer updates a clone only when the owner asks, with `git pull --ff-only` on a clean clone.
   - The developer's own branches and other checkouts are never touched.
5. **The site:**
   - No WordPress or PHP version changes.
   - No changes to the theme or other plugins without the developer's approval.
   - Test content is named for cleanup, and nothing is deleted before the developer confirms the list.
6. **Secrets:** no passwords, licence keys, cookies or tokens in files, commands, screenshots or reports.
   - Claude never types them.
   - The `.env` file holds paths and the site URL only.
7. **Public Lite repository:** private Pro details (licence internals, Pro security findings) never go into Lite files, issues or public messages.
8. **No new patterns** before the owner's design review.
9. **Commands never to run in a checkout:**
   - `npm install` (use `npm ci`);
   - `npm run plugin-zip` (Lite tracks its release zip);
   - `npm run format`, `npm run packages-update`;
   - `wp-scripts lint-js --fix`.

---

## 6. Known issues and their status

| ID | What | Status | Effect on testing |
|---|---|---|---|
| KI-01 | Catalog cache missed changes outside a source | **Fixed in R1** (`98d4013`; `robustness` checks it) | Not expected |
| KI-02 | One broken add-on file took the library down | **Fixed in R1** (same); since PL-D37 (2026-11-26) data files are JSON, read and never included, with the same isolation | Not expected |
| KI-03 | Missing cross-source map key gave a generic message | **Fixed in R1**: now `lite_outdated` | Not expected |
| KI-04 | Wrong requirement headers | **Fixed in R3** | — |
| KI-05 | Editor stylesheet warning in the canvas iframe | **Fixed in R6** | — |
| B-R6-2 | Call To Action imports `__experimentalStack`, which WordPress doesn't have | **ON HOLD** | `wp-editor` suite 14/17 (3 checks fail, one per editor) |
| B-R6-1 | Before After Slider and Wavy Gallery bundle React's server renderer | **ON HOLD** | Larger editor scripts only |
| B-R4-3, B-R4-4 | Content Wrapper hidden by an impossible parent; stray `wrapstyle` attribute in its saved markup | **ON HOLD** (B-R4-4 is best fixed before the next Lite release) | Visible in saved markup of blocks that use it |
| Pilot block notes | Advanced Button's link not output; 13 Lite block scripts use jQuery without declaring it; Pricing Table details; Star Rating half stars; Lite blocks reset their `ID` on load, so a post always shows as changed after opening | **ON HOLD** (recorded 2026-11-04) | "Unsaved changes" after only opening a post is expected. **Hazard:** draft autosave then rewrites a draft by the same author, so never open an existing draft in the editor during tests; use new test posts |
| Other block notes | Text-domain loader registered from code that runs after it; stale `wpmozo/v1/save-dynamic-style` URL sent to the editor | **ON HOLD** | None for this testing |
| R-11 | WordPress 7.0+ control sizes and margins; opting in is block work (PL-D29) | **ON HOLD** (recorded in R6) | Size and margin deprecation warnings on 6.8 are expected |
| R-12 | The editor with every Lite and Pro block active was never tested (the Playground harness can't load it) | Open; **a LocalWP site can test it** (T3) | Record what happens |
| R-04, R-05, R-06, R-08, R-10 | Risks recorded for later releases | Open (see `known-issues.md`) | None for this testing |
| Pro issues | PKI-01…PKI-10, PR-01…PR-09 | See the Pro `testing-handoff.md` | — |

The block issues above are the complete Lite on-hold list in [known-issues.md](known-issues.md) (owner, 2026-11-11). They are for a separate developer after the owner approves that work, never during testing or Pattern Library work (PL-D29).

**Observations from the owner's LocalWP browser check (2026-11-23; not library defects; [handoff.md](handoff.md)):**
- Category counts don't follow the Free/Pro filter: an unconfirmed UX question for the owner. Note it; it is not a failure.
- On WordPress 7.1.5, inserted core Image blocks show "Block successfully updated" on the next load: WordPress updates their image markup (expected, PL-D18). The blocks stay valid.
- The `ID` reset hazard above.

---

## 7. Remaining test plan

The automated suites already passed on the owner's Mac (section 4.1). This plan covers what they can't: a real LocalWP site with MySQL, native PHP, every block active and a real licence activation. It ends with the suites on the developer's machine, if wanted.

Details for every manual step are in [testing-environment-setup.md](testing-environment-setup.md) section 11.

| # | Test | Steps | Expected | Basis |
|---|---|---|---|---|
| T1 | Environment | Section 2.2 | Both clones on their branch, clean, built, matching GitHub; WordPress ≥ 6.8, PHP ≥ 7.4, single site; both plugins active, no notice | **[Verified]** commands on the owner's site |
| T2 | Asset URLs and file protection | Setup guide 11.1 (three `curl` commands; the third requests a premium `content.json.php`) | `200`, `200`, `0` | **[Verified]** on the owner's Local site (the third on 2026-11-26) |
| T3 | Editor with every block active (R-12) | Open **Pages → Add New** (title `WPMozo PL test - editor`). Note console errors and how long the editor takes to load | No recorded expectation: this is the first test of this state. Report what happens | New |
| T4 | Catalog, preview, insertion (administrator) | Setup guide 11.2 | Four pilot cards; thumbnails from each plugin's own folder on the site's host; free pattern inserts with no invalid-block warning, stays valid after publish and reload; front end shows it, console clean | **[Verified]** behaviour in the suites (gate) |
| T4b | Header icon and Options menu | With the settings sidebar open, click the **Pattern Library** icon in the header; close the window with Escape; close the settings sidebar and click the icon again; close with **×**; click the icon a third time and insert a free pattern. Then open the Options menu (⋮) and click **Pattern Library** | Each click opens the library window at once, with no sidebar in between; the settings sidebar stays as it was (open, then closed); focus returns to the icon; the pattern inserts. The Options menu has exactly one library item, **Pattern Library** (no **Open Pattern Library**), and it opens the same window | **[Verified]** in the `launcher` suite (PL-D31, PL-D32); the icon also on the owner's LocalWP site |
| T5 | Placeholder block and undo | Insert the **Pattern Library** block, click **Open Pattern Library**, insert a free pattern; then undo once | The pattern replaces the placeholder; one undo restores the placeholder | [editor-ui.md](editor-ui.md) |
| T6 | Pro licence states | Setup guide 11.3, then (Pro handoff) deactivate the licence and reload the library | Locked without a licence (**Manage licence**, no **Insert**); available with one; locked again after deactivation. The first real licence-server activation in testing | Suites with a test value; real server untested |
| T7 | Roles | Setup guide 11.4 | Administrator and Editor: all patterns. Author and Contributor: free pilots **Unavailable** ("Your user role can’t save this pattern’s styling…"), Pro pilots available with the licence. Subscriber: no editor | **[Verified]** in the suites |
| T8 | Library switch | Setup guide 11.5 | Off: no entry points, saved placeholder says the library isn't available, content unchanged. Then restore | **[Verified]** in the suites |
| T9 | Other editors | Open **Appearance → Editor** (Site Editor) and, if the theme has it, **Appearance → Widgets** | No "Pattern Library" item in the Options menu, no Pattern Library header icon, no Pattern Library block in the inserter: the library loads only in the post editor | [editor-ui.md](editor-ui.md); one-off checks only before |
| T10 | Automated suites **[Optional]** | Setup guide sections 8.1, 9, 10 (needs the Playground CLI and WordPress zips: about 640 MB of downloads, with the developer's approval) | `php-parse` 2/2, `formats` 23/23, `rest` and `robustness` all checks (extended 2026-11-26; counts in [testing.md](testing.md), "JSON/XML pattern data, 2026-11-26"), `entitlement` 58/58, `contract` 26/26, `editor` 10/10, `launcher` 23/23, `wp-editor` 14/17 (B-R6-2), `team-grid` 8/8, `matrix` 109/109 (with `--oldest-lite=zip:origin/release/1.8.0`), `upgrade --mutation=1` 30/30 | **[Verified]** on the owner's Mac |
| T11 | Cleanup | Setup guide section 12 | Test pages and users removed after confirmation; switch and settings as before | **[Untested]** procedure |

Not in scope unless the owner asks:
- multisite;
- WooCommerce and Gravity Forms blocks;
- newer Gutenberg plugin builds;
- authoring new patterns ([production-pattern-authoring.md](production-pattern-authoring.md)).

---

## 8. Reporting and continuing safely

- **Report format:** [testing-environment-setup.md](testing-environment-setup.md) section 13. Add one line per test from section 7: ID, pass, fail or known issue, and the evidence.
- **Where it goes:** to the owner. Don't commit reports or edit `testing.md`, `known-issues.md` or other documents; the owner records accepted results.
- **On a failure:** stop the test, collect the evidence (section 2.3), check section 6 and the Pro handoff, and ask the developer before continuing. Never retry by changing code, settings outside the test, or versions.
- **When the session ends early:** note the last finished test ID and what was created on the site, so the next session continues from there. Start again with section 2.2: the environment may have changed.
- **Updating the clones later:** only when the owner asks. The developer runs `git -C <clone> pull --ff-only` on a clean clone, then `npm ci && npm run build` in it, then repeats T1.
