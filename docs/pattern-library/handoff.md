# Pattern Library handoff

**Updated:** 2026-11-27 (docs only): owner requirement PL-D39, all Pattern Library data and assets of every source (Lite's included, and the images used inside patterns) to come from the CDN later; not implemented; Status row below. 2026-11-26, later: pattern content is plain `content.json` for every source (PL-D38); Status row and "Release readiness" below. 2026-11-26: pattern data is JSON and XML (PL-D37, approved and implemented; new `formats` suite); Status row, "Session handover" and "Release readiness" below. 2026-11-23: the add-on's Phase 2 (its own licence-status check, private add-on repository) is implemented, tested, committed and pushed, and its live backend integration is pending (dormant until then; no Lite change, Lite has no status check); Lite suites rerun with it; LocalWP browser check passed (below); open owner decisions added to "Release readiness". 2026-11-20, later: Ayush owns the remaining remote-delivery work and the final completion (PL-D36); Phase 2 has no Lite code change (plan approved 2026-11-20). 2026-11-20 (docs only: remote-delivery audit of the owner's proposal, [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 12; approved the same day as PL-D35, not implemented). 2026-11-19 (Phase 1: PL-D34 implemented, `entitlement` suite). 2026-11-18: CDN deferred with a clean migration path, PL-D33; all-or-nothing premium entitlement, PL-D34. 2026-11-17: one Pattern Library item in the Options menu, PL-D32. 2026-11-16: header icon opens the library directly, PL-D31. 2026-11-11: final validation. Read [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) first.
**Branches:**
- Lite `dev/sunil` → `origin/dev/sunil`;
- Pro `release/pattern-lib` → `origin/release/pattern-lib`.

Pro `dev/ayush` is off-limits for the current developer's sessions. Ayush's branch and pull-request workflow is an open decision (owner; "Release readiness").

## Status
| Step | State |
|---|---|
| Baseline decisions | Approved 2026-11-03 ([decisions.md](decisions.md)) |
| Stage A, LPL-1: integration contract + shared editor script | **Done** (tested; see [testing.md](testing.md)) |
| Stage C, LPL-2: registry, resolver, maps, validator, REST | **Done** (tested; see [testing.md](testing.md)) |
| Pro preparatory task | Done (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | **Done** (tracked in the Pro repository) |
| LPL-UX: UI prototype | **Approved as is** 2026-11-03 (PL-D17) |
| Stage D, LPL-3: UI, importer, placeholder block, entry points, library switch | **Done** (tested on WordPress 6.8.11 and 7.1.3; see [testing.md](testing.md)). Docs: [editor-ui.md](editor-ui.md), [import-workflow.md](import-workflow.md) |
| Stage E, PPL-2: Pro source + entitlement | **Done** (tracked in the Pro repository) |
| LPL-T + pilot (2 free + 2 Pro) | **Built and gated; waiting for the owner's design review.** No catalog expansion before approval. Tools and procedure: [pattern-authoring.md](pattern-authoring.md); production workflow: [production-pattern-authoring.md](production-pattern-authoring.md) (2026-11-11) |
| Compatibility and future-proofing audit | **Done 2026-11-05** (docs `ec97921`). Findings: [known-issues.md](known-issues.md); results: [compatibility.md](compatibility.md), [testing.md](testing.md); stages R1–R6: [roadmap.md](roadmap.md). **Approved 2026-11-05** |
| R1: library robustness | **Done 2026-11-05:** code `98d4013`, suites `56dbfcb`. Passed on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 ([testing.md](testing.md)) |
| R5: reusable test suites | **Done 2026-11-05:** suites `4ca209f`. Baselines before R2 and R3 recorded in [testing.md](testing.md) (R5 results) |
| R2: Pro with an older Lite | **Done 2026-11-06:** suites `ee18c89`, `rest.php` (R-09) `23d89d6`; Pro editor guard `b7cc761` (Pro repository). Passed on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 ([testing.md](testing.md) R2) |
| R3: PHP floor and requirement headers | **Done 2026-11-06:** suite `28d184c`, headers `afc5e91` (`Requires at least: 6.8`, `Requires PHP: 7.4`); Pro Team Grid without `match` (Pro repository). Passed on WordPress 6.5–7.1.3 and PHP 7.4, 8.2 and 8.5 ([testing.md](testing.md) R3) |
| R4: contract surface freeze | **Done 2026-11-06:** tests `62a9bbf`; Pro stops registering Chart.js `e79e4aa` (Pro repository). `contract` 26/26 on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2, every new check with a mutation proof ([testing.md](testing.md) R4) |
| R6: WordPress-future hardening | **Done 2026-11-06:** editor stylesheet on `enqueue_block_assets` `a54216c` (KI-05, PL-D30), tests `4e9f12d`. `wp-editor` 14/17 on WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2: every R6 check passes; the 3 failures are one block issue (B-R6-2) ([testing.md](testing.md) R6) |
| Final validation | **Done 2026-11-11:** every suite on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 with Lite `044cd2b` and Pro `9d4647b`: 245 of 248 checks on each; the 3 failures are block issue B-R6-2 ([testing.md](testing.md)) |
| Header icon opens the library directly (PL-D31) | **Done 2026-11-16:** code `485e5e7`, `launcher` suite `21ae47c`. Owner request: no launcher sidebar step. `launcher` 21/21 on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4; `editor`, `matrix`, `wp-editor` (14/17, B-R6-2), `contract` and `upgrade` as at final validation ([testing.md](testing.md)) |
| One library item in the Options menu (PL-D32) | **Done 2026-11-17:** code `5ca1e69`, suite `80f8a12`. "Open Pattern Library" removed after the owner's LocalWP test; "Pattern Library" (the icon's item) remains. `launcher` 23/23 on both versions, with a mutation proof (the old code fails exactly the two new checks); `editor`, `matrix`, `wp-editor` (14/17, B-R6-2), `contract` and `upgrade` as before ([testing.md](testing.md)) |
| Premium entitlement rule and future CDN path (PL-D33, PL-D34) | Recorded 2026-11-18. CDN integration is deferred to a later stage ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 11). Licence policy details and phases: Pro repository |
| Phase 1: PL-D34 implemented | **Done 2026-11-19:** code `b54b9de`, suites `0286e2c`. Only `entitled` inserts a premium pattern; `published` is optional; there is a new expired-licence message. The new `entitlement` suite passes 58/58, and every suite passes on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 apart from B-R6-2, with mutation proofs ([testing.md](testing.md), Phase 1). Phase 2: see the rows below |
| Remote-delivery audit (owner proposal: premium content downloaded on Insert, licence status when the library opens, JSON content, XML metadata) | **Done 2026-11-20, docs only (`bc1591f`); revised the same day with the owner's clarifications:**<br>• a fresh status check on every window open, with nothing cached;<br>• only a verified active licence inserts; errors and timeouts mean Preview only;<br>• every download checked remotely;<br>• XML and JSON source files with a compiled JSON catalog;<br>• premium content out of the add-on zip (target state; it stays bundled until then, PL-D36); Lite's bundled;<br>• the UI and compatibility checks unchanged.<br>**Approved by the owner 2026-11-20 (PL-D35)**, with machine-readable error codes, catalog and previews in every licence state, licence checks separate from update checks, and image validation at build and release. **Implementation waits for the owner's go-ahead** after the backend and team answers. Engine findings, recommendations and tasks: [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 12 (Lite stays network-free, provider in contract 1, declared metadata, XML edited and compiled to a JSON index, the 503 state). Licence protocol, backend contract and owner decisions: the Pro repository's `docs/pattern-library/remote-delivery-audit.md`. **No implementation before the owner's approval and the backend's answers** |
| Remote delivery and completion assigned to Ayush (PL-D36) | **Recorded 2026-11-20.** Ayush owns the remaining remote-delivery work (CDN, remote catalog and data, premium content delivery, previews and images, migration, deploy) and the final integration, testing and completion. The engine parts of PL-D35 are on hold for him, except the JSON/XML formats (done 2026-11-26 under PL-D37). Premium patterns keep their bundled content. His handoff: the private Pro repository's `docs/pattern-library/AYUSH-PATTERN-LIBRARY-HANDOFF.md`. **Phase 2 (add-on licence handling only, no Lite code change) was approved by the owner the same day** |
| Phase 2: the add-on's own licence handling | **Implemented, tested, committed and pushed 2026-11-23** in the private add-on repository (code `7ac00e3`, tests `cb4800f`, docs `7d0b2f8`): its own licence-status check. **Live backend integration: pending** (Ayush, after the backend confirms and the owner approves); until then the check is dormant and the add-on keeps its earlier entitlement rule. **No Lite change:** Lite has no status check; it only applies the state the add-on's entitlement callback returns (PL-D34). Lite suites rerun with that add-on code: every suite passes on both supported pairs apart from B-R6-2 ([testing.md](testing.md), 2026-11-23) |
| LocalWP browser check | **Passed 2026-11-23** (Lite `6d0a8c9` + the add-on, WordPress 7.1.5 / PHP 8.2; section below) |
| JSON/XML pattern data (PL-D37) | **Implemented 2026-11-26** (owner decision). Metadata `patterns/<slug>/pattern.xml`, compiled by `tools/pattern-library/compile.php` into `catalog.json` and `data/strings.php`; content as plain JSON (`content.json`, every source since PL-D38; premium content was briefly a guarded `content.json.php`); maps `data/*.json`; read with `read_json()`, never included. The four pilots were converted: content byte-identical, maps identical, REST output identical before and after on WordPress 7.1.3 / PHP 8.2 apart from the test site's port. REST routes and responses, importer, UI and contract 1 unchanged. New `formats` suite (23 checks); `robustness` and `rest` extended; on WordPress 7.1.3 / PHP 8.2 every suite passes apart from B-R6-2; on 6.8.11 / PHP 7.4: every suite passes apart from the same known B-R6-2 checks (`wp-editor` 14/17); LocalWP browser check (WordPress 7.1.5) passed, locked premium states included; browser checks on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4 (temporary offline Playground sites) passed, the locked state included ([testing.md](testing.md), "JSON/XML pattern data, 2026-11-26"). Commits: code `7f140f8`, tools `e9256d0`, tests `3f57576`. The formats, readers and build tools are no longer part of Ayush's work (PL-D36) |
| Plain JSON content for every source (PL-D38) | **Implemented 2026-11-26** (owner decision): the two premium pilots moved from the guarded `content.json.php` to plain `content.json` (content byte-identical); no PHP file holds pattern content; the guard rule is removed from the runtime, the tools and the suites; the local file names and loading points are defined in the registry only. REST output byte-identical before and after. Bundled premium content is as readable as the plugin until remote delivery; the entitlement still decides insertion. Results: [testing.md](testing.md), "Plain JSON content for every source (PL-D38), 2026-11-26". Commits: code `bd76d67`, tools `13238a6`, tests `ee20c3f` |
| All library data and assets from the CDN (PL-D39) | **Recorded 2026-11-27, docs only** (owner requirement). Target: the catalog, metadata and maps, the content JSON, thumbnails and previews, and the images and media used inside patterns come from the CDN later, for Lite's free patterns as well as premium ones; Lite's JavaScript and CSS stay in the plugin. Replaces PL-D03; changes PL-D02, PL-D33 and PL-D35. **Not implemented:** no code or behaviour change; everything stays local. Ayush's work (PL-D36). To settle in the CDN stage: saved pages, WordPress.org rules, CDN failures ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 13) |
| Stage F, X-1, release | Not started |

## Session handover (2026-11-26; earlier: 2026-11-23; 2026-11-11, final validation, R1–R6 complete)
- **2026-11-26 (Lite):** PL-D37 implemented: the library runtime (`includes/library/`: registry, resolver, library service), the pattern data (`catalog.json`, `pattern.xml`, `content.json`, `data/*.json`, `data/strings.php`; the old PHP data files removed), the tools (`compile.php`, `lib/`, `schema/pattern.xsd`, `build-content.php`) and the suites (`formats`, `robustness`, `rest`). The add-on's pilots were converted in its repository. Results: [testing.md](testing.md), "JSON/XML pattern data, 2026-11-26".
- **Since 2026-11-11 (Lite, committed and pushed):** PL-D31 (`485e5e7`, suite `21ae47c`), PL-D32 (`5ca1e69`, suite `80f8a12`), PL-D34 (`b54b9de`, suites `0286e2c`, docs `3aa0cfa`), then documentation only (`bdbce36`, `bc1591f`, `72f01a0`, `7103f8a`, `6d0a8c9`). Lite code did not change from PL-D34 until PL-D37 (2026-11-26); `build/library/index.js` is current (PL-D37 changed no editor code).
- **The add-on:** its Phase 2 (its own licence-status check) was implemented, tested, committed and pushed in the private add-on repository on 2026-11-23 (`7ac00e3`, `cb4800f`, `7d0b2f8`); its live backend integration is pending.
- **Committed and pushed (2026-11-11):** R1 (`98d4013`, suites `56dbfcb`, docs `0f13330`); R5 (suites `4ca209f`, docs `c562ec4`); R2 (suites `ee18c89`, `rest.php` `23d89d6`, docs `758f242`; Pro `b7cc761`); R3 (suite `28d184c`, headers `afc5e91`, docs `eb9b289`); R4 (tests `62a9bbf`, docs `6668ac0`; Pro `e79e4aa`); R6 (code `a54216c`, tests `4e9f12d`, docs `044cd2b`); final validation (docs, the commit after `044cd2b`). Pro commits and docs are in its repository.
- **Final validation (2026-11-11, Lite `044cd2b` + Pro `9d4647b`):** every suite on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4: 245 of 248 checks pass on each; the 3 failures are block issue B-R6-2 ([testing.md](testing.md), final validation).
- **Uncommitted work (Lite, 2026-11-23, before that documentation update):** none.
- **Limits to know:** R2's newline-only re-serialization of nested Pro blocks on saves while Pro editing is switched off; the site and widget editors and repeated saves were checked by one-off scripts, not committed suites; with Lite 1.8.0 or older Pro's charts can't draw; the `contract` suite checks names and the listed behaviours, not the props of each shared component.

## LocalWP browser check (2026-11-23)
**Set-up:** WordPress 7.1.5, PHP 8.2.23, MySQL 8.0.35; Lite 1.9.0 at `6d0a8c9` with the add-on; administrator; Chromium.

**Passed:**
- The header icon opens the library directly; the Options menu has one library item; × and Escape close the window, with focus back on the icon.
- Catalog (2 free, 2 premium), Free/Pro filters, categories, search, A–Z sort, and the empty state with "Clear filters".
- Layouts at 1440×900, 1024×600 and phone width.
- 4 previews with Previous/Next; Preview never inserts; Back and Escape keep the filter and focus.
- 1 free and 2 premium patterns inserted (62 blocks, none invalid), saved and reloaded: identical; images load; the front end is correct. An existing published post and page were unchanged.
- No library JavaScript errors, no failed library requests, no PHP errors from the library.

**Observations (not library defects):**
- Category counts don't follow the Free/Pro filter. Whether they should is an unconfirmed UX question for the owner.
- WordPress 7.1.5 updates the image markup of inserted core Image blocks on the next load ("Block successfully updated"). Expected (PL-D18: newer WordPress migrates older markup); the blocks stay valid.
- The known block issue where Lite blocks reset their `ID` on load ([known-issues.md](known-issues.md)) makes a post look changed when opened, and draft autosave then rewrites a draft by the same author. **Testing hazard:** don't open existing drafts in the editor during tests; use new test posts.

**Not tested:** locked and expired states (the licence was not changed), non-administrator roles, multisite, other browsers.

## Release readiness (updated 2026-11-26)
The R1–R6 stages are complete. Before a Lite release:

| Item | State | Owner |
|---|---|---|
| Lite-to-Pro card link | `includes/library/data/links.json` `pro-upgrade` still points to the `example.com` placeholder (PL-D21) | Owner: the destination page. **Release blocker** |
| Release version | The `dev/sunil` main file and `readme.txt` say **1.9.0**, but **Lite 1.9.0 is already released** from `main` ("1.9.0 LIVE", `e053d8e`, 2026-10-30) **without** the Pattern Library (no `includes/library/`). The first Lite release with the library therefore needs a different version number. The free pilot patterns' `since` and Pro's stated minimum Lite say **1.10.0** (both provisional). **Open decision:** the version; then align the main file, `readme.txt`, the patterns' `since` and Pro's minimum | Owner |
| Merge into `main` and `dev/base` | `dev/sunil` holds the library: 681 commits ahead of `main` and 132 ahead of `dev/base`, and behind both (5 and 51 commits on 2026-11-23). **Open decision:** who merges it into `main` and `dev/base`, and when | Owner |
| Provider seam before the first library release | PL-D35's provider seam is meant to join **contract 1** before Lite's first release with the library ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 12). If Lite were released with the library before the seam exists, it would need a later contract version. **Open decision:** whether Lite may be released first | Owner |
| Ayush's workflow | Ayush's branch and pull-request workflow, and its reviewer, are not set. The Lite process rule in [decisions.md](decisions.md) (Lite work on `dev/sunil`, approved work committed and pushed automatically) was set for the current developer. **Open decision** | Owner |
| Release checklist owner | Who runs the release tasks below (`n.e.x.t`, readme, WordPress.org review) is not set. **Open decision** | Owner |
| Release zip contents (PL-D37) | Whether the WordPress.org zip should leave out the `pattern.xml` files (`plugin-zip` packs all of `includes/**`, so they ship today; harmless, the metadata is public), and whether WordPress.org's translation import reads the generated `data/strings.php` (expected: it scans PHP files). **Open decision** | Owner |
| Bundled premium content (PL-D38) | Until remote delivery replaces the local source, a premium add-on's `content.json` files ship in its zip and are served as static files: readable by anyone with the zip or the plugin folder's URL. Inserting still needs the entitlement. Remote delivery is Ayush's (PL-D36) | Owner (accepted as temporary, 2026-11-26) |
| Compiled pattern data | `php tools/pattern-library/compile.php --source=lite --library=includes/library/ --check` must pass before every commit and release (and the same for the add-on); the `formats` suite checks both | Release task |
| `n.e.x.t` | 20 placeholders in 9 Lite files (the integration contract, the library classes, the asset and main classes), replaced with that version | Release task |
| Readme | Changelog entry for the release; requirement headers are already set (`Requires at least: 6.8`, `Requires PHP: 7.4`) | Release task |
| WordPress.org review | A guideline review of the release build (the test tools in `tools/` are not shipped: `plugin-zip` packs only `build/`, `includes/`, the main file and the readme) | Release task |
| Pilot designs | Waiting for the owner's review; Stage F (more patterns) waits for it | Owner |
| Pro release items | Tracked in the Pro repository | Pro |
| Not tested here | Multisite; MySQL; a native-PHP editor with every block on (R-12); newer WordPress or Gutenberg builds | Before release, on another environment |
| Block issues | **ON HOLD (owner, 2026-11-11).** B-R4-3, B-R4-4 (the stray attribute is not released yet, so it is best fixed before the next Lite release), B-R6-1, B-R6-2 and the earlier block list in [known-issues.md](known-issues.md). None is fixed or changed (PL-D29). **Before the final Lite release: remind the owner of this list and get the owner's approval before separate-developer work starts** | Owner approval, then a separate developer |

## Next steps
**Gate (2026-11-23):** Phase 1 is done (Lite: PL-D34). Phase 2 (the add-on's own licence-status check, approved 2026-11-20) is implemented, tested, committed and pushed in the private add-on repository, with no Lite code change; its live backend integration is pending. The remaining remote-delivery work and the final completion belong to Ayush (PL-D36); his handoff is the private Pro repository's `docs/pattern-library/AYUSH-PATTERN-LIBRARY-HANDOFF.md`. Each part starts only on the owner's approval. The remote-delivery proposal (section 12 of [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md)) is approved (PL-D35); only its file formats are implemented (PL-D37, 2026-11-26): build nothing else from it before the owner's go-ahead. Ayush's remaining engine tasks: the provider seam, a fresh catalog on every window open, the 503 unreachable state, the runtime media guard, the `asset_url()` purpose argument, `requires.pro`, image validation at release, and listing a pattern without local content. The CDN target design is in [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) section 11 and is not built now. Licence details and the full plan: the Pro repository's `docs/pattern-library/licensing-architecture.md`.

1. **Owner:** the open decisions in "Release readiness" (card link, release version, merge, provider seam timing, Ayush's workflow, release checklist owner, release zip contents), and the category-count question from the browser check.
2. **Owner: review the pilot designs** (below). Stage F waits for it. Production patterns follow [production-pattern-authoring.md](production-pattern-authoring.md) (written 2026-11-11 from a read-only audit; updated 2026-11-26 for the JSON/XML format). Who authors them is an open decision (owner); they are written directly in the new format, so no conversion follows. Its section 12 lists the gaps, including how a new pattern gets its first compile before its previews exist (open decision, owner). Before the first production pattern, a developer sets up its WordPress 6.8 authoring site once (section 9.1, still **[Untested]**) and records the result in [testing.md](testing.md). Section 6.6 lists the changes that need a developer.
3. **Block issues: ON HOLD** (owner, 2026-11-11). Don't fix or change any of them. Before the final Lite release, remind the owner of the list in [known-issues.md](known-issues.md) (B-R4-4 is best fixed before that release) and ask for approval before a separate developer starts (PL-D29).
4. **Testing on another machine (Ayush):** start from [testing-handoff.md](testing-handoff.md) (updated 2026-11-23) and the Pro repository's `docs/pattern-library/testing-handoff.md`.
   - Ayush clones, builds and activates both plugins himself (handoff section 0), then pastes the prompt in its section 1 into his Claude session.
   - Section 7 is the remaining test plan (T1–T11; Pro adds P1–P6).
   - Setup reference: [testing-environment-setup.md](testing-environment-setup.md) (updated 2026-11-23). Its section 2.2 is an alternative prompt for a Claude-driven setup.
   - **Track A:** automated Playground suites.
   - **Track B:** manual checks on one of his existing LocalWP sites. Claude inspects the sites read-only and recommends one; a new site only if none qualifies. No WordPress or PHP version changes.
   - Machine-specific values go in one Git-ignored file, `tools/pattern-library/.env`, made from the tracked `.env.example`. That includes the site URL, checked with section 8.2.
   - Test pages and users are named for cleanup (section 12).
   - Most setup steps are still **[Untested]** on another machine. Results come back as the report in section 13.
   - Section 14.3 lists optional **[Developer required]** tool changes; none is needed to test.
   - **Owner first:** give Ayush read access to the Pro repository and a development licence key for the Pro patterns.
5. **Owner, test tools (optional):** keep `wp-editor`'s experimental-export check strict (it fails until B-R6-2 is fixed) or narrow it to exports the code uses; give the gate's editability step the same 60 s wait as its insert step (one 30 s timeout seen in R6, [testing.md](testing.md)).

## Audit summary (2026-11-05)
- **Holds:** Lite alone, Lite + Pro, Pro inactive or older, Pro without Lite (notice), licence lock, role rules, real-HTTP protections, and saved pages through in-place Lite and Pro updates, licence and plugin deactivation. WordPress 6.8.11 and 7.1.3; PHP 7.4, 8.0, 8.2 and 8.5.
- **Confirmed library issues:** the catalog cache misses changes outside a source (KI-01); one malformed add-on file takes the library down (KI-02); a missing cross-source map key gives a generic message (KI-03). All three are fixed in R1 (`98d4013`; [known-issues.md](known-issues.md)).
- **Confirmed compatibility issues:** wrong requirement headers, and WordPress 6.5/6.7 with Pro fails on activation (KI-04; fixed in R2 and R3); Lite's editor stylesheet uses a path newer WordPress may drop (KI-05; fixed in R6); Pro with Lite 1.8.0 crashes Pro blocks in the editor (corrected in R5 and R2: with the shipped 1.8.0 Pro works while Lite blocks are on; with every Lite block off it crashed and lost edits until R2); Pro Team Grid needs PHP 8.0 (details in the Pro repository).
- **Main risk:** Pro depends on Lite surfaces the contract doesn't version yet ([registry-and-contract.md](registry-and-contract.md) section 4). Since R4 they are frozen and machine-checked.

## Pilot review (LPL-T checkpoint)
The owner asked on 2026-11-04 for temporary pilot designs made here instead of supplied ones (PL-D20).

**What exists:**
- Lite: `hero-product-launch` (hero: Fancy Heading, Star Rating) and `pricing-three-plans` (pricing: Pricing Table cards).
- The Pro repository has two Pro pilot patterns.
- Original local illustrations, 800 × 600 thumbnails and full previews.
- Authoring tools in `tools/pattern-library/`.

**Verified (2026-11-04) on WordPress 6.8.11 and 7.1.3** ([testing.md](testing.md)):
- the quality gate passes for all four, including editability;
- a full editing test passes 136/136 on each version: inline text, Inspector controls, links, images, colours, icons and nested data, kept through save and reload with no other block changed, and shown on the front end;
- roles, licence states and premium-content protection: 49/49 on each version.

**For the review:** design quality, choice of sections, copy. The patterns are temporary; the owner will replace or refine them later.

**After approval:** Stage F (remaining patterns, up to 10 free + 14 Pro, each through the gate). If the owner wants changes, revise the pilot first.

**Block issues found in the pilot** (separate tasks, not started): Advanced Button links, block scripts that use jQuery without declaring it, Pricing Table details. See [testing.md](testing.md).

## Open questions
1. Destination page for the Lite-to-Pro card. Until it is confirmed, `includes/library/data/links.json` (`pro-upgrade`) points to a clearly marked placeholder on `example.com` (PL-D21). **Release blocker.**

**Answered by the owner on 2026-11-05** (roadmap approval; recorded in [roadmap.md](roadmap.md)):
- Lite PHP requirement: keep 7.3 only if it can be verified at runtime; otherwise declare what the code really needs. Never declare an untested version.
- Pro Team Grid: rewrite for PHP 7.4 rather than raising Pro's minimum.
- Older Lite: Pro detects the contract, never crashes the editor, shows an actionable notice, and disables only what depends on the missing contract.
- Reusable suites: in `tools/pattern-library/tests/`, not shipped.
- Upgrade URL: one central, clearly marked release-blocking setting; no invented URL or licence-server behaviour.

## Known limitations and observations
- `n.e.x.t` in `@since` tags is replaced with the real Lite version at release.
- **Catalog performance** in the WebAssembly harness: 500 patterns take about 0.2–0.35 s warm and 1 s cold (target 0.3 s; native PHP not measured). A generated metadata index was deferred until the real catalog grows; `catalog.json` (PL-D37, 2026-11-26) is now such an index, and this measurement predates it.
- **Validator strictness:** a text attribute starting with "Data:" is rejected ([security.md](security.md)).
- **Lite blocks reset their `ID`** to the editor's client ID on every load, so opening a post marks it changed. Existing behaviour; aligning it with Pro's stable-ID approach is a separate block task.
- **Text-domain loader:** Lite registers it on `plugins_loaded` priority 10 from code that itself runs at priority 20. It probably never runs (not verified at runtime; WordPress 6.7+ loads translations just in time). A separate task.
- **Stale REST URL:** the editor receives a `wpmozo/v1/save-dynamic-style` URL for a route Lite doesn't register. The library doesn't use it.

## Release-only items (not implementation blockers)
- the final Lite-to-Pro card link (replace the `example.com` placeholder);
- pattern `since` values (provisional `1.10.0` in the pilot) and, for Pro, `published` dates;
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
