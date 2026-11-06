# Pattern Library: project context (Lite)

**Start here.** Every Pattern Library task, by a person or an AI session, begins by reading this file, then [handoff.md](handoff.md) (current state and the exact next step), then the topic files the task touches. Nothing here replaces a topic file: each section names the file that holds the detail.

**Updated:** 2026-11-06 (R2). **Pro side:** the private Pro repository keeps its own `docs/pattern-library/PROJECT_CONTEXT.md` (Pro architecture, entitlement, licence and Pro security). This public file never repeats private Pro details.

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

- Pro `dev/ayush` is off-limits: never inspect, edit, merge or push it.
- No force-push, destructive reset, branch switching or merging of other branches. Verify branch, working tree and staged files before every commit; code and docs go in separate, short commits.
- **Public repository:** describe protections, never unfixed security issues or private licensing details. Those live in the Pro repository.
- Record verified facts only, with how they were verified and on which versions. Mark anything planned as planned.
- Never silently rewrite a decision: a changed decision gets a new entry that names the one it replaces ([decisions.md](decisions.md)).
- Update [handoff.md](handoff.md) at every milestone, and this file when scope, architecture, requirements or status change.

## 3. Lite architecture (summary)
Detail: [architecture.md](architecture.md).

| Part | Where |
|---|---|
| Integration contract | `includes/class-mozo-bna-integration.php`, `includes/mozo-bna-integration-functions.php` |
| Shared editor script | `src/shared/` → `build/shared/` |
| Library service, registry, resolver, validator, REST | `includes/library/class-mozo-bna-library*.php` |
| Central maps (categories, tags, media, links, icons, demo text) | `includes/library/data/` |
| Free patterns, media, previews | `includes/library/patterns/`, `media/`, `previews/` |
| Editor UI, importer, store | `src/library/` → `build/library/` |
| Placeholder block | `src/blocks/pattern-library/` |
| Authoring tools (not shipped) | `tools/pattern-library/` |

Principles: Lite works alone; feature detection, never version numbers, decides behaviour; nothing loads on the front end; content is validated on the server and checked again in the editor; one place per replaceable value; local-first (no external requests).

## 4. The shared contract
Detail: [registry-and-contract.md](registry-and-contract.md).

- **PHP accessor** `wpmozo_bna_integration()`: `version()`, `contract_version()`, `features()`, `supports( $feature, $version )`. Features today: `integration` 1, `shared-js` 1, `library` 1.
- **Action** `wpmozo_bna_loaded`, fired at the end of Lite's start-up (`plugins_loaded` priority 20). Add-ons check `did_action()`.
- **Shared editor script** `wpmozo-blocks-and-addons-shared`, registered and printed in the head of every block editor (`enqueue_block_editor_assets` priority 1). It sets `window.WPMozoBNAComponents`, `window.WPMozoBNAUtils` and `window.WPMozoBNA`.
- **Sources:** `wpmozo_bna_library_register_sources` fires lazily (library REST requests only); add-ons call `$registry->register_source( $id, $args )` with `contract` 1.
- **Rules:** additive only; a breaking change gets a new feature name; deprecation needs 2 Lite minor releases, 6 months and no supported Pro still using it.
- **Other Lite surfaces add-ons use today** (PHP helper classes, JS component names, script and style handles, settings hooks, a post type) are listed in [registry-and-contract.md](registry-and-contract.md) section 4. They are not versioned yet; treat them as frozen until the contract covers them ([roadmap.md](roadmap.md)).

## 5. Flows
| Flow | Detail |
|---|---|
| Catalog: `GET wpmozo/v1/library/catalog`, metadata and per-user availability, never content | [rest-api.md](rest-api.md) |
| Content: `GET wpmozo/v1/library/patterns/<source>/<slug>`, every check repeated, content validated again, `no-store` | [rest-api.md](rest-api.md) |
| Validation: size, block allowlist, unsafe HTML, schemes, CSS, URL attributes, tokens; restricted-HTML detection by fingerprint | [security.md](security.md) |
| Import: parse, check blocks and attributes, rebuild with fresh IDs, insert as one undo step, nothing inserted on any problem | [import-workflow.md](import-workflow.md) |
| UI: Options menu, header launcher, placeholder block; library switch | [editor-ui.md](editor-ui.md) |

## 6. Pattern registration and assets
Detail: [pattern-authoring.md](pattern-authoring.md), [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md).

- One folder per pattern: `patterns/<slug>/pattern.php` (metadata schema 1) and `content.php` (block markup with tokens).
- Tokens `{{wpmozo:media|link|icon|text:<source>/<key>}}` are resolved on the server from each source's maps. A source may use another source's map keys (Pro patterns use Lite icons), so **released map keys are part of the contract: never remove or rename one**.
- `Mozo_Bna_Library_Resolver::asset_url()` is the only place that builds asset URLs; a future CDN setting changes only that method.
- Images placed into page content are local plugin files and permanent once released (PL-D03): never rename or delete a released `media/` file.
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
4. Saved content never depends on licence state, plugin state or a CDN, and plugin updates never change it.
5. Every contract change is additive and documented here and in registry-and-contract.md.

## 9. Current status (2026-11-05)
Detail: [handoff.md](handoff.md).

- **Done:** contract (LPL-1), server side (LPL-2), UI and importer (LPL-3); in Pro: security port, contract adoption, Pro source and entitlement.
- **Pilot (LPL-T):** 2 free + 2 Pro patterns, built and verified on WordPress 6.8.11 and 7.1.3. **Waiting for the owner's design review. Add no patterns before approval.**
- **Compatibility audit (2026-11-05):** findings in [known-issues.md](known-issues.md); stages R1–R6 in [roadmap.md](roadmap.md), **approved 2026-11-05**. R1 (library robustness) and R5 (reusable test suites) are done; R2 (Pro with an older Lite) is done (Lite `ee18c89`, `23d89d6`; Pro `b7cc761`); R3 (PHP floor and requirement headers) is done (Lite `28d184c`, `afc5e91`); R4 and R6 follow in that order, each after the owner's go-ahead.
- **Regression suites:** `tools/pattern-library/tests/` (not shipped): library robustness, REST, editor gate, Lite/Pro combinations, in-place updates, contract surfaces, PHP parse; run them for every library change ([testing.md](testing.md)).
- **Release blockers:** the `example.com` placeholder for the Lite-to-Pro card link; provisional pattern `since` values; `n.e.x.t` tags; Pro's minimum-Lite handling (Pro repository).

## 10. Key decisions (with reasons)
Full list and reasons: [decisions.md](decisions.md) (PL-D01 to PL-D22).

| ID | Decision | Why |
|---|---|---|
| PL-D01, PL-D04 | Lite owns registry, REST, validator, importer, UI, maps and the resolver; Pro supplies data and one entitlement callback | One owner for shared infrastructure; one validated import path |
| PL-D02, PL-D03 | Local-first; content images are local and never from a CDN | WordPress.org rules; saved pages must survive any CDN change |
| PL-D05, PL-D12 | Patterns that need `unfiltered_html` are unavailable to users without it, detected by a structural fingerprint | They would break when such users save |
| PL-D06 | Premium content is authorised on the server for every request; inserted content is never changed by licence state | Hiding cards is not protection |
| PL-D11 | The contract shape (accessor, action, shared handle) | Smallest change that fixes the disabled-blocks problem |
| PL-D15 | The placeholder block is always registered and saves nothing | Saved placeholders must never break |
| PL-D18, PL-D19 | Author on WordPress 6.8; export strips editor-ID attributes | Newer WordPress migrates older markup, not the reverse |
| PL-D22 | Editability is part of the quality gate | Patterns must stay fully editable, not just insertable |

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
| [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) | Approved asset and future-CDN requirement |
| [compatibility.md](compatibility.md) | Requirements, support policy, tested combinations |
| [testing.md](testing.md) | Test procedure, harness, results, automated-test plan |
| [decisions.md](decisions.md) | Approved decisions with reasons |
| [roadmap.md](roadmap.md) | Completed, pending and deferred work |
| [known-issues.md](known-issues.md) | Confirmed issues and potential risks, with owners |
| [changelog.md](changelog.md) | Product changes for the next release's readme |
| [architecture-readiness-review.md](architecture-readiness-review.md) | Historical pre-implementation review (2026-10-31 / 2026-11-03) |
