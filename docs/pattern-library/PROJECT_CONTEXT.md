# Pattern Library: project context (Lite)

**Start here.** Every Pattern Library task, by a person or an AI session, begins by reading this file, then [handoff.md](handoff.md) (current state and the exact next step), then the topic files the task touches. Nothing here replaces a topic file: each section names the file that holds the detail.

**Updated:** 2026-11-27 (docs only): owner requirement PL-D39: all Pattern Library data and assets of every source, Lite's included, and the images used inside patterns are to come from the CDN later (Ayush's work, PL-D36); it replaces PL-D03; the implementation stays local (section 6). 2026-11-26, later: pattern content is plain JSON for every source (PL-D38): the two premium pilots moved from the guarded `content.json.php` to `content.json`; a premium add-on's bundled content is as readable as the plugin that ships it until remote delivery, and the entitlement still decides insertion; the local file names and loading points are defined in one place (section 6). 2026-11-26: pattern data is JSON and XML (PL-D37, approved and implemented): `pattern.xml` metadata compiled into each source's `catalog.json`, JSON content and JSON maps; no PHP file holds pattern content or metadata. REST routes, importer, UI and contract 1 are unchanged. New `formats` suite ([testing.md](testing.md), "JSON/XML pattern data, 2026-11-26"). 2026-11-23: the add-on's Phase 2 (its own licence-status check, in the private add-on repository) is implemented, tested, committed and pushed; its live backend integration is pending, so the check stays dormant and the add-on keeps its earlier entitlement rule. **Lite has no status check and made no change:** it only applies the state the add-on's entitlement callback returns (PL-D34) and makes no external requests (PL-D02). A LocalWP browser check of Lite `6d0a8c9` with the add-on passed ([handoff.md](handoff.md)). Open owner decisions are listed in section 9. 2026-11-20, later: Ayush owns the remaining remote-delivery work and the final completion (PL-D36; handoff in the private Pro repository's `docs/pattern-library/AYUSH-PATTERN-LIBRARY-HANDOFF.md`); Phase 2 changes no Lite code. 2026-11-20 (docs only: remote-delivery audit, [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 12; approved the same day as PL-D35, not implemented). 2026-11-18 (docs only: future CDN migration path, PL-D33; all-or-nothing premium entitlement, PL-D34). 2026-11-11: final validation. **Pro side:** the private Pro repository keeps its own `docs/pattern-library/PROJECT_CONTEXT.md` (Pro architecture, entitlement, licence and Pro security). This public file never repeats private Pro details.

## 1. Objective and scope
The Pattern Library lets editors browse ready-made sections in the block editor and insert them as normal, fully editable blocks.

- **Lite** (`wpmozo-blocks-and-addons`, this repository, public) owns the library: catalog, REST routes, validation, import, editor UI, central maps, the asset resolver and the free patterns.
- **Pro** (`wpmozo-blocks-and-addons-pro`, private) adds a premium pattern source through a documented contract and answers one server-side entitlement question.
- **In scope:** the library, its contract with add-ons, its patterns and their compatibility across Lite, Pro, WordPress and PHP versions.
- **Out of scope here:** general block development. Block bugs found by library work are recorded and handed to separate tasks ([known-issues.md](known-issues.md)).

## 2. Repositories, branches and documentation rules
| | Lite | Pro |
|---|---|---|
| Visibility | Public | Private |
| Pattern Library branch | `dev/sunil` → `origin/dev/sunil` | `release/pattern-lib` → `origin/release/pattern-lib` |
| Docs | `docs/pattern-library/` | `docs/pattern-library/` |

- Pro `dev/ayush` is off-limits for the current developer's sessions: never inspect, edit, merge or push it. Ayush's own branch and pull-request workflow, and its reviewer, are an **open decision (owner)**.
- No force-push, destructive reset, branch switching or merging of other branches. Verify branch, working tree and staged files before every commit; code and docs go in separate, short commits.
- **Public repository:** describe protections, never unfixed security issues or private licensing details. Those live in the Pro repository.
- Record verified facts only, with how they were verified and on which versions. Mark anything planned as planned.
- Never silently rewrite a decision: a changed decision gets a new entry that names the one it replaces ([decisions.md](decisions.md)).
- **Block code is out of bounds for Pattern Library work** (PL-D29): never modify `src/blocks/` or any block folder in Lite or Pro; record block issues in [known-issues.md](known-issues.md) (block, issue, cause, impact, recommended fix) for a separate developer.
- Update [handoff.md](handoff.md) at every milestone, and this file when scope, architecture, requirements or status change.

## 3. Lite architecture (summary)
Detail: [architecture.md](architecture.md).

| Part | Where |
|---|---|
| Integration contract | `includes/class-mozo-bna-integration.php`, `includes/mozo-bna-integration-functions.php` |
| Shared editor script | `src/shared/` → `build/shared/` |
| Library service, registry, resolver, validator, REST | `includes/library/class-mozo-bna-library*.php` |
| Central maps (categories, tags, media, links, icons, demo text) | `includes/library/data/*.json` |
| Free patterns, media, previews | `includes/library/catalog.json`, `patterns/`, `media/`, `previews/` |
| Editor UI, importer, store | `src/library/` → `build/library/` |
| Placeholder block | `src/blocks/pattern-library/` |
| Authoring tools (not shipped) | `tools/pattern-library/` |

Principles: Lite works alone; feature detection, never version numbers, decides behaviour; nothing loads on the front end; content is validated on the server and checked again in the editor; one place per replaceable value; local-first (no external requests; the CDN target of PL-D39 is not implemented).

## 4. The shared contract
Detail: [registry-and-contract.md](registry-and-contract.md).

- **PHP accessor** `wpmozo_bna_integration()`: `version()`, `contract_version()`, `features()`, `supports( $feature, $version )`. Features today: `integration` 1, `shared-js` 1, `library` 1.
- **Action** `wpmozo_bna_loaded`, fired at the end of Lite's start-up (`plugins_loaded` priority 20). Add-ons check `did_action()`.
- **Shared editor script** `wpmozo-blocks-and-addons-shared`, registered and printed in the head of every block editor (`enqueue_block_editor_assets` priority 1). It sets `window.WPMozoBNAComponents`, `window.WPMozoBNAUtils` and `window.WPMozoBNA`.
- **Sources:** `wpmozo_bna_library_register_sources` fires lazily (library REST requests only); add-ons call `$registry->register_source( $id, $args )` with `contract` 1.
- **Rules:** additive only; a breaking change gets a new feature name; deprecation needs 2 Lite minor releases, 6 months and no supported Pro still using it.
- **Other Lite surfaces add-ons use** (PHP helper classes, JS component and utility names, the editor object, script and style handles, settings hooks and panel markup, block on/off, the internal content wrapper, post types, taxonomies and post meta, and the Pro constants Lite reads) are listed and classified in [registry-and-contract.md](registry-and-contract.md) section 4. **Since R4 they are frozen and checked by the `contract` suite** (PL-D27); they are still not versioned by `supports()`. Lite is the only owner of the shared script and style handles (PL-D28).

## 5. Flows
| Flow | Detail |
|---|---|
| Catalog: `GET wpmozo/v1/library/catalog`, metadata and per-user availability, never content | [rest-api.md](rest-api.md) |
| Content: `GET wpmozo/v1/library/patterns/<source>/<slug>`, every check repeated, content validated again, `no-store` | [rest-api.md](rest-api.md) |
| Validation: size, block allowlist, unsafe HTML, schemes, CSS, URL attributes, tokens; restricted-HTML detection by fingerprint | [security.md](security.md) |
| Import: parse, check blocks and attributes, rebuild with fresh IDs, insert as one undo step, nothing inserted on any problem | [import-workflow.md](import-workflow.md) |
| UI: header icon and its Options menu item, placeholder block; library switch | [editor-ui.md](editor-ui.md) |

## 6. Pattern registration and assets
Detail: [pattern-authoring.md](pattern-authoring.md), [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md). Production workflow for new and replaced patterns: [production-pattern-authoring.md](production-pattern-authoring.md).

- One folder per pattern: `patterns/<slug>/pattern.xml` (metadata schema 1, the file authors edit) and `content.json` (a plain JSON wrapper holding the block markup with tokens, for every source, PL-D38). `tools/pattern-library/compile.php` compiles every `pattern.xml` into the source's `catalog.json`, the runtime index, and `data/strings.php` for translation tools. No PHP file holds pattern content or metadata (PL-D37, 2026-11-26).
- **The local data source is defined in one place:** each source's folder and URL are given once at registration; the file names (`catalog.json`, `patterns/<slug>/content.json`, `data/<map>.json`) only in `Mozo_Bna_Library_Registry`; the catalog is loaded in `load_source_patterns()`, content in `get_content()`, maps in the resolver's `get_map()`, image URLs in `asset_url()`. A later remote source replaces these loading points without changing the REST routes, the importer or the UI ([registry-and-contract.md](registry-and-contract.md) section 3).
- Tokens `{{wpmozo:media|link|icon|text:<source>/<key>}}` are resolved on the server from each source's maps. A source may use another source's map keys (Pro patterns use Lite icons), so **released map keys are part of the contract: never remove or rename one**.
- `Mozo_Bna_Library_Resolver::asset_url()` is the only place that builds asset URLs. It builds both preview URLs and content-image URLs, so before a future CDN switch it must know which one it is building (written for PL-D03; since PL-D39 content images are to come from the CDN too, and how saved pages keep them is settled in the CDN stage). CDN integration is deferred; until then the code keeps a clean migration path (PL-D33, [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 11).
- Images placed into page content are local plugin files and permanent once released: never rename or delete a released `media/` file, because saved pages use it.
- **Target (PL-D39, 2026-11-27; not implemented):** all library data and assets of every source come from the CDN later: the catalog, metadata and maps, the content JSON, thumbnails and previews, and the images and media used inside patterns. Application code (PHP, JavaScript, CSS) stays in the plugins. Saved pages, WordPress.org rules, CDN failures, locations and translations are settled in the CDN stage ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 13).
- Patterns are authored and exported on the minimum supported WordPress (6.8, PL-D18).

## 7. WordPress and PHP requirements
Detail and evidence: [compatibility.md](compatibility.md).

| | Header | Real (evidence) | Status |
|---|---|---|---|
| WordPress | 6.8 (R3) | 6.8: below it no blocks register; built scripts need 6.6+ handles | Declared 2026-11-06; older WordPress refuses activation |
| PHP | 7.4 (R3) | Every Lite and Pro PHP file parses on 7.4 (runtime check); 7.3 can't be run here; WordPress 7.x itself needs 7.4 | Declared 2026-11-06 (Pro too) |
| Tested | — | WordPress 6.8.11 / PHP 7.4.33 and 8.0, WordPress 7.1.3 / PHP 8.2.33 and 8.5 (see compatibility.md) | — |

## 8. Compatibility requirements
Detail and the tested matrix: [compatibility.md](compatibility.md).

1. Lite works without Pro, and Pro never breaks Lite: a failing add-on source must not take the library down.
2. Lite and Pro release independently. Behaviour is decided by `supports()`; versions only drive notices and support statements.
3. Unsupported combinations show a safe notice and never a fatal error.
4. Saved content never depends on licence state, plugin state or a CDN, and plugin updates never change it. (PL-D39: how this holds once images inside patterns come from the CDN is settled in the CDN stage.)
5. Every contract change is additive and documented here and in registry-and-contract.md.

## 9. Current status (2026-11-27)
Detail: [handoff.md](handoff.md).

- **Done:** contract (LPL-1), server side (LPL-2), UI and importer (LPL-3); in Pro: security port, contract adoption, Pro source and entitlement.
- **Pilot (LPL-T):** 2 free + 2 Pro patterns, built and verified on WordPress 6.8.11 and 7.1.3. **Waiting for the owner's design review. Add no patterns before approval.**
- **Compatibility audit (2026-11-05):** findings in [known-issues.md](known-issues.md); stages R1–R6 in [roadmap.md](roadmap.md), **approved 2026-11-05**. R1 (library robustness) and R5 (reusable test suites) are done; R2 (Pro with an older Lite) is done (Lite `ee18c89`, `23d89d6`; Pro `b7cc761`); R3 (PHP floor and requirement headers) is done (Lite `28d184c`, `afc5e91`); R4 (contract surface freeze) is done (Lite tests `62a9bbf`; Pro `e79e4aa`); R6 (WordPress-future hardening: editor stylesheet, editor without the canvas iframe) is done (Lite `a54216c`, tests `4e9f12d`). Final validation is done (2026-11-11): every suite passes on both supported WordPress and PHP pairs except three checks that fail on one unused block import (B-R6-2). Release readiness: [handoff.md](handoff.md).
- **2026-11-16:** the header icon opens the library window directly, with no sidebar step (PL-D31, Lite `485e5e7`; `launcher` suite).
- **2026-11-17:** the Options menu has one library item, "Pattern Library"; "Open Pattern Library" was removed (PL-D32, Lite `5ca1e69`).
- **2026-11-18 (docs only):** CDN integration is deferred to a later stage, and the code must keep a clean migration path (PL-D33). Premium entitlement is all-or-nothing per source, with no release-date exceptions (PL-D34).
- **2026-11-19, Phase 1:**
  - PL-D34 is implemented (`b54b9de`): only `entitled` inserts, `published` is optional, and there is a new expired-licence message.
  - New `entitlement` suite (`0286e2c`). Every suite passes on both supported WordPress and PHP pairs, apart from the known B-R6-2 checks ([testing.md](testing.md)).
  - The add-on's licence hardening is recorded in the Pro repository.
  - Phase 2 (the add-on's own licence handling, no Lite change) was approved on 2026-11-20 and implemented on 2026-11-23 (below); its live backend integration is pending.
- **2026-11-20 (docs only; approved the same day, below):** audit of the owner's proposal to download premium content on Insert, with a licence-status check by the add-on when the library opens, JSON content and XML metadata. The flow fits the existing catalog and content requests; Lite stays network-free. Recommendations: a source provider in contract 1, declared metadata with a checksum, XML edited and compiled to a JSON index, a new 503 "unreachable" state ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 12). The same day, the owner's clarifications were added:
  - a fresh licence check on every window open, so the window refetches the catalog each time;
  - only a verified active licence inserts;
  - every download is checked remotely;
  - XML and JSON source files in both repositories;
  - Lite content stays bundled (changed 2026-11-27 by PL-D39: from the CDN later);
  - the UI and compatibility checks stay unchanged.

  **Approved by the owner on 2026-11-20 (PL-D35)**, with four more points: machine-readable error codes, catalog and previews in every licence state, licence checks separate from update checks, and image validation at build and release. Not implemented; implementation waits for the owner's go-ahead.
- **2026-11-23:**
  - The add-on's Phase 2 (private add-on repository, code `7ac00e3`, tests `cb4800f`, docs `7d0b2f8`): its own licence-status check is **implemented, tested, committed and pushed**. Its **live backend integration is pending**, so the check stays dormant and the add-on keeps its earlier entitlement rule. **No Lite change, and Lite has no status check:** Lite code is as at PL-D34; Lite only applies the state the add-on's entitlement callback returns.
  - Lite suites rerun with that add-on code on both supported pairs: every suite passes apart from the known B-R6-2 checks ([testing.md](testing.md), 2026-11-23).
  - LocalWP browser check of Lite `6d0a8c9` with the add-on (WordPress 7.1.5, PHP 8.2): passed ([handoff.md](handoff.md)).
- **2026-11-26 (PL-D37, approved and implemented):** pattern data is JSON and XML. Metadata is `patterns/<slug>/pattern.xml`, checked against `tools/pattern-library/schema/pattern.xsd` and compiled by `tools/pattern-library/compile.php` into `catalog.json` (with each pattern's `blocks` and `content_sha256`) and `data/strings.php`. Content is a JSON wrapper: `content.json` for free sources, `content.json.php` behind a guard line for premium ones. Maps are `data/*.json`. The library reads them with `read_json()` and never includes a data file (`safe_include()` is gone).
  - The four pilots were converted: every content string byte-identical, every map identical, and the library's REST output identical before and after on WordPress 7.1.3 / PHP 8.2 apart from the test site's port.
  - REST routes and responses, importer, editor UI, tokens, validator, availability and entitlement are unchanged; contract 1 is kept (no released Lite has the library).
  - New `formats` suite (23 checks); `robustness` and `rest` cover the new files. On WordPress 7.1.3 / PHP 8.2 every suite passes apart from the known B-R6-2 checks; on 6.8.11 / PHP 7.4: every suite passes apart from the same known B-R6-2 checks (`wp-editor` 14/17). A LocalWP browser check (WordPress 7.1.5) passed, locked premium states included; browser checks on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 (temporary offline Playground sites) passed, the locked state included ([testing.md](testing.md), "JSON/XML pattern data, 2026-11-26").
  - The JSON/XML formats, readers and build tools of PL-D35 are done and no longer Ayush's; the rest of the remote-delivery work stays with him (PL-D36).
- **2026-11-26, later (PL-D38, owner decision, implemented):** pattern content is plain `content.json` for every source; the two premium pilots moved from the guarded `content.json.php` (content byte-identical). No PHP file holds pattern content; a leftover `content.json.php` is never read and the compiler refuses it. A premium add-on's bundled content is as readable as the plugin that ships it until remote delivery; the entitlement still decides insertion. The local file names and loading points are defined in the registry only (section 6). The library's REST output is byte-identical before and after. Results: [testing.md](testing.md), "Plain JSON content for every source (PL-D38), 2026-11-26".
- **2026-11-27 (docs only; PL-D39, owner requirement):** all Pattern Library data and assets will eventually come from the CDN, for Lite's free patterns as well as premium ones: the catalog, metadata and maps, the content JSON, thumbnails and previews, and the images and media used inside patterns. It replaces PL-D03 (content images never from a CDN) and changes PL-D02, PL-D33 and PL-D35 (local-first and Lite bundled now describe the state until the CDN stage). Ayush's work (PL-D36); not implemented; no code or behaviour change ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 13).
- **Open decisions (owner):** the version of the first Lite release with the library (1.9.0 is already released from `main` without it); who merges `dev/sunil` into `main` and `dev/base`, and when; whether Lite may be released before PL-D35's provider seam joins contract 1; Ayush's branch and pull-request workflow; who owns the release checklist; whether the WordPress.org zip leaves out the `pattern.xml` files (they ship today; harmless) and whether WordPress.org's translation import reads `data/strings.php`; who authors the Stage F patterns (now written directly in the new format). Detail: [handoff.md](handoff.md), "Release readiness".
- **Regression suites:** `tools/pattern-library/tests/` (not shipped): pattern data formats, library robustness, REST, premium entitlement, editor gate, editor entry points, Lite/Pro combinations, in-place updates, contract surfaces, PHP parse; run them for every library change ([testing.md](testing.md)). Testing on another machine: start with [testing-handoff.md](testing-handoff.md); setup reference [testing-environment-setup.md](testing-environment-setup.md).
- **Release blockers:** the `example.com` placeholder for the Lite-to-Pro card link; the release version (open decision, above); provisional pattern `since` values; `n.e.x.t` tags; Pro's minimum-Lite handling (Pro repository).

## 10. Key decisions (with reasons)
Full list and reasons: [decisions.md](decisions.md) (PL-D01 to PL-D39).

| ID | Decision | Why |
|---|---|---|
| PL-D01, PL-D04 | Lite owns registry, REST, validator, importer, UI, maps and the resolver; Pro supplies data and one entitlement callback | One owner for shared infrastructure; one validated import path |
| PL-D02, PL-D03 | Local-first; content images are local and never from a CDN (**changed 2026-11-27 by PL-D39**) | WordPress.org rules; saved pages must survive any CDN change |
| PL-D05, PL-D12 | Patterns that need `unfiltered_html` are unavailable to users without it, detected by a structural fingerprint | They would break when such users save |
| PL-D06 | Premium content is authorised on the server for every request; inserted content is never changed by licence state | Hiding cards is not protection |
| PL-D11 | The contract shape (accessor, action, shared handle) | Smallest change that fixes the disabled-blocks problem |
| PL-D15 | The placeholder block is always registered and saves nothing | Saved placeholders must never break |
| PL-D18, PL-D19 | Author on WordPress 6.8; export strips editor-ID attributes | Newer WordPress migrates older markup, not the reverse |
| PL-D22 | Editability is part of the quality gate | Patterns must stay fully editable, not just insertable |
| PL-D27, PL-D28 | Add-on surfaces frozen and machine-checked without a new layer; Lite is the only owner of shared handles | Released Pro already relies on them; one owner per handle (R4) |
| PL-D29 | Pattern Library work never changes block code; block issues are recorded for a separate developer | Owner rule: no unrelated block changes |
| PL-D31 | The header icon opens the library window directly; the launcher sidebar never shows and the editor's sidebar stays as it was | Owner request: one click instead of two, with public APIs only |
| PL-D32 | The Options menu has one library item, "Pattern Library" (the icon's); "Open Pattern Library" was removed | Owner request: both opened the same window |
| PL-D33 | CDN integration is deferred; asset URLs, source configuration and pattern loading stay centralised so a later move to a CDN or remote source changes configuration, not the library UI or insert flow; Lite makes no external requests; premium content is never public | Owner requirement: easy later migration without premature infrastructure |
| PL-D39 | Target: all Pattern Library data and assets of every source, Lite's included, come from the CDN later: catalog, metadata, maps, content JSON, previews and the images used inside patterns; application code (PHP, JS, CSS) stays in the plugins; replaces PL-D03, changes PL-D02, PL-D33 and PL-D35; not implemented, everything stays local now (2026-11-27) | Owner requirement: one delivery path for all library data and assets; Ayush's work (PL-D36) |
| PL-D38 | Pattern content is plain JSON (`content.json`) for every source; the guarded `content.json.php` is withdrawn; bundled premium content is not private until remote delivery; the local source is defined in one place (implemented 2026-11-26) | Owner decision: standard JSON content files now; access control for premium content comes with remote delivery |
| PL-D37 | Pattern data is JSON and XML: `pattern.xml` compiled into `catalog.json`, JSON content (premium content briefly guarded; plain since PL-D38), JSON maps; no PHP file holds pattern content or metadata; supersedes PL-D04's "PHP files only" and PL-D24's `safe_include()` (approved and implemented 2026-11-26) | Owner decision: content and metadata kept apart from PHP code, in formats a later remote catalog and remote content can reuse (the guarded premium file was withdrawn the same day by PL-D38) |
| PL-D36 | Ayush owns the remaining remote-delivery work (CDN, remote catalog and data, premium content delivery, previews and images, migration, deploy) and the final completion; the engine parts of PL-D35 are on hold for him, except the JSON/XML formats (done under PL-D37); premium patterns keep their bundled content | Owner decision, 2026-11-20 |
| PL-D35 | Premium content may be fetched on Insert by its add-on: a fresh entitlement check on every window open, only a verified active licence inserts, catalog and previews always available, JSON content and XML metadata sources, Lite still makes no requests (approved 2026-11-20; the file formats implemented 2026-11-26 under PL-D37, remote delivery not) | Owner decision after the remote-delivery audit |
| PL-D34 | Premium entitlement is all-or-nothing per source: only `entitled` allows inserting; no release-date exceptions; previews always available (implemented 2026-11-19, Phase 1) | Owner's final licensing policy (details in the Pro repository) |

## 11. Known issues and pending work
- Known issues (library and blocks): [known-issues.md](known-issues.md).
- Roadmap (completed, pending, deferred; with dependencies and acceptance criteria): [roadmap.md](roadmap.md).
- Tests: [testing.md](testing.md) (procedure, results and the automated-test plan).

## 12. Document index
| File | Contents |
|---|---|
| [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | This overview and the start rule |
| [handoff.md](handoff.md) | Current state, last verified state, the exact next step |
| [README.md](README.md) | Folder index and documentation rules |
| [architecture.md](architecture.md) | Components, ownership, data flow |
| [registry-and-contract.md](registry-and-contract.md) | Integration contract, sources, metadata, tokens, other add-on surfaces |
| [rest-api.md](rest-api.md) | Routes, responses, status codes, availability reasons |
| [security.md](security.md) | Access rules, validation rules, restricted HTML |
| [import-workflow.md](import-workflow.md) | How a pattern is checked, rebuilt and inserted |
| [editor-ui.md](editor-ui.md) | Where the library loads, entry points, placeholder block, switch |
| [pattern-authoring.md](pattern-authoring.md) | Pattern files, tokens, tools, replacing a pattern |
| [production-pattern-authoring.md](production-pattern-authoring.md) | Step-by-step production guide (Lite and Pro), authoring-site setup, commands; untested steps marked |
| [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) | Approved asset and future-CDN requirement |
| [compatibility.md](compatibility.md) | Requirements, support policy, tested combinations |
| [testing.md](testing.md) | Test procedure, harness, results, automated-test plan |
| [testing-handoff.md](testing-handoff.md) | Testing handoff for another developer: manual setup steps, Claude prompt, context, boundaries, test plan, reporting |
| [testing-environment-setup.md](testing-environment-setup.md) | Test setup on another machine: Playground suites, manual checks on an existing LocalWP site, `.env`, cleanup; prompt for a developer's Claude session |
| [decisions.md](decisions.md) | Approved decisions with reasons |
| [roadmap.md](roadmap.md) | Completed, pending and deferred work |
| [known-issues.md](known-issues.md) | Confirmed issues and potential risks, with owners |
| [changelog.md](changelog.md) | Product changes for the next release's readme |
| [architecture-readiness-review.md](architecture-readiness-review.md) | Historical pre-implementation review (2026-10-31 / 2026-11-03) |
