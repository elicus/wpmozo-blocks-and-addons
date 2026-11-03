# Pattern Library: architecture readiness review

| | |
|---|---|
| Status | **Historical record.** Review written 2026-10-31; decision closure (section 0) added 2026-11-03. The baseline (A1–A7 and the section 0.3 defaults) was **approved on 2026-11-03**. Current decisions: [decisions.md](decisions.md). Current status: [handoff.md](handoff.md). |
| Applies to | Pattern Library in Lite (`wpmozo-blocks-and-addons`) and Pro (`wpmozo-blocks-and-addons-pro`) |
| Authoritative input | [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) (approved requirement). This review does not change it; proposed amendments are listed as decisions. |
| Companion | Pro repository, `docs/pattern-library/architecture-readiness-review-pro.md`: licensing, entitlement, and Pro security and release items. This repository is public, so those details are kept out of it. |

**Labels.**
- **[Approved]**: decided by the product owner.
- **[Verified]**: checked in code, git, a recorded test run or an official page.
- **[Proposed]**: recommendation awaiting approval.
- **[Open]**: needs input or test evidence.
- **[New]**: found in this review.

After approval, the content moves into the separate documents listed in section K. This file then stays only as a historical record.

---

## 0. Decision closure (2026-11-03)

Each open decision is classified:
- **A:** must be approved before implementation, because guessing would cause rework or security problems.
- **B:** a reversible technical choice. I proceed with the documented default once the baseline is approved.
- **C:** blocks a release, not local-first development.

Sections A–K below keep the detailed reasoning. Where they differ, this section wins.

### 0.1 Already approved
- Branch routing and git rules (section 2).
- Lite owns the registry, resolver, UI and import workflow.
- Local-first: no CDN, remote catalog or external service.
- U1: Lite assets always ship locally.
- The CDN requirement doc is the source of truth.
- Premium content is protected server-side.
- Separate Lite/Pro documentation.
- The testing standards.
- **2026-11-03:**
  - Images placed in page content are locally bundled, project-owned files and never depend on a CDN (D7 option (a), U7).
  - Importing them into the Media Library is documented as a later, separate option.
  - The LPL-UX prototype stays a review checkpoint before the full UI.
  - The unavailable WPDS documentation server is not a blocker.

### 0.2 Decisions awaiting one overall approval (A)
| # | Decision | Recommended default |
|---|---|---|
| A1 | Architecture contract (D1, D4, D6, D8) | The baseline in 0.4 |
| A2 | Restricted HTML (D3) | Patterns that use blocks saving `<style>`/raw HTML are unavailable to users without `unfiltered_html`, with the reason shown, and the server refuses their content. The affected-block list is measured at the start of Stage C |
| A3 | Pro entitlement (D5) | Detailed in the Pro companion (private repository). Summary: Pro patterns follow the licence activation recorded on the site. The plugin cannot know validity, expiry or revocation locally until the licence server reports them. Inserted content is never changed |
| A4 | Initial catalog (D12) | A pilot of 2 free + 2 Pro patterns for design review, then up to 10 free + 14 Pro across 8 categories, each passing a quality gate. No filler to reach a number (0.6) |
| A5 | Roadmap changes | The G2 experiments run at the start of the stage that needs them, not as a separate gate. Docs are written by the stage that implements them. Two review checkpoints: UI prototype and pilot patterns |
| A6 | Pro-side prerequisites | The Pro companion lists one Pro task that must land before the dependent Pro stages |
| A7 | Tooling | Use only what is installed (0.7). Optional: PHPCompatibilityWP installed inside the harness folder for PHP 7.3 checks (a download from Packagist; nothing global changes) |

### 0.3 Defaults I proceed with after approval (B)
| Item | Default |
|---|---|
| D2 translation | Metadata and UI translatable; demo content in English |
| D8 entry points | More-menu item, pinned `PluginSidebar` header launcher, placeholder block; post editor only; no DOM injection |
| D9 | Library on/off switch in Lite settings (default on, inside the existing option); capability `edit_posts`, filterable |
| D10 | Static preview images; live preview later |
| D11 Lite-only promotion | See the next list |
| Validator limits | 256 KB / 400 blocks / depth 10 to start; CSS-value and URL rules finalised from the Stage C experiment and recorded in `security.md` |
| Central maps | `data/media.php`, `links.php`, `icons.php`, `demo-text.php`, `categories.php`, `tags.php`, token rules as in section E |
| `since` / `published` | Set during release preparation |
| Design system | `@wordpress/components` + `@wordpress/base-styles` + `--wpmozo-lib-*` tokens (section D). `@wordpress/ui` is not used in v1 |
| Performance | Budgets in A8; a generated catalog index only if the measurement needs it |
| U3 | Production CDN setting switches per source (future) |
| Lite `ID` reset behaviour | Unchanged; the importer copes; aligning it is a separate block task |

**D11, Lite-only promotion:**
- One card, placed **after** the free patterns in the results; never before or between them.
- No pop-up, no admin notice, nothing outside the library window.
- Dismissing it stores a per-user preference (core preferences, kept across sessions and devices), and it never comes back for that user.
- With Pro installed but inactive, it reads "Activate WPMozo Pro" for users who can activate plugins.
- When Pro is active it is replaced by the real Pro patterns.
- The target URL lives in `data/links.php`.

### 0.4 Consolidated implementation baseline
- **Ownership:**
  - Lite owns the catalog service, REST routes, validator, importer, UI, design tokens, central maps and the asset resolver.
  - Pro supplies a source registration (data) and one server-side entitlement callback through the documented contract (A5). Pro ships no library UI, routes or JS.
- **Contract:**
  - `wpmozo_bna_integration()->supports( 'library', 1 )`, `wpmozo_bna_loaded`, and the lazily fired `wpmozo_bna_library_register_sources`.
  - Additive only; feature detection decides behaviour; versions drive notices.
- **Server-side authorisation:** the content route re-checks capability, availability and entitlement on every request. The catalog never contains content or licence data.
- **Metadata and content:**
  - schema 1 (A3), with fields computed from the content and never trusted from the client;
  - one folder per pattern; PHP files only (no public static content files).
- **Import:**
  - server validation (limits, allowlist, kses, URL and CSS-value rules, tokens);
  - client checks;
  - every block rebuilt with `createBlock`, `ID` preset to the new `clientId`;
  - one insert action; nothing inserted on failure; Undo in the snackbar.
- **Central replacement:** media, links, icons, repeated demo text, categories, tags and UI tokens each have one source file (section E). Pattern files never contain host names.
- **Assets:**
  - library UI images resolve through the Lite resolver (each plugin's own URL now);
  - images in content are local, project-owned and permanent;
  - no CDN requests.
- **Independent releases:** matrix in section F; never fatal; older Lite or Pro degrade with a notice.
- **UI:** full flow and states in section D (loading, empty, error, locked, unavailable, thumbnail failure); keyboard and screen-reader support; responsive below 782 px.
- **Performance:**
  - nothing on the front end;
  - one small editor script;
  - catalog metadata only, searched client-side;
  - 24 cards per batch;
  - lazy thumbnails;
  - registry built only on library requests (A8 budgets).
- **Testing:** section I, with the per-stage acceptance in section G.

### 0.5 Questions that need your answer
1. **Teaser link (before Stage D):** which page should "More designs in WPMozo Pro" open?
2. **Pattern designs (before the pilot):** will a designer supply designs, or should I compose the pilot from WPMozo and core blocks with neutral demo content for your review?
3. **Release-baseline and licence-server questions** concern Pro and the demo site; they are in the Pro companion. None of them blocks implementation.

### 0.6 Catalog evaluation (D12)
Each pattern costs:
- design and authoring;
- export and validation;
- two images;
- a check on WordPress 6.8 and latest, with role coverage;
- maintenance whenever a block it uses changes.

Forty patterns for launch would mostly measure volume. Recommendation:
- **Pilot:** 2 free + 2 Pro patterns through the full pipeline, to prove authoring, thumbnails, import and testing. Review checkpoint.
- **Launch target:** up to 10 free + 14 Pro across 8 categories (hero, features, about/services, testimonials, team, pricing, call to action, contact; FAQ and a WooCommerce set if quality allows).
- **Quality gate**, per pattern:
  - uses WPMozo blocks meaningfully;
  - responsive at 360 / 768 / 1440 px;
  - passes the validator;
  - valid after save and reload;
  - no console errors;
  - accessible headings and alt text;
  - images within spec.
- A category with fewer than two patterns that pass the gate waits for a later release instead of being padded.

### 0.7 Tooling already available (checked 2026-11-03; no downloads)
- **PHP syntax:**
  - `php -l` with PHP 8.0, 8.1 and 8.2 (Local's bundled binaries) and 8.4 (Homebrew);
  - PHP 7.4 through the harness's PHP 7.4 WebAssembly build;
  - PHP 7.3 by static review only, unless the optional PHPCompatibilityWP install (A7) is approved.
- **Standards:** PHPCS with WordPress, WordPress-Extra, PHPCSUtils and Universal. PHPCompatibility is not installed.
- **JS:** ESLint, Stylelint, and Jest 29 through `@wordpress/scripts` 30.27 (unit tests with no new dependency).
- **Browser tests:** Playwright 1.58 and `@wordpress/e2e-test-utils-playwright` are installed. No Playwright browsers are downloaded; the plan is to drive the installed Google Chrome. Whether that works is checked in Stage A, with manual browser runs as the fallback.
- **Previews:** headless Chrome + `cwebp`.
- **Not available:** WP-CLI and the real licence server.

### 0.8 Release-only blockers (C)
- **Headers:** Lite's requirement headers (real minimum WordPress 6.8; PHP claim unproven).
- **Lite version:** the next Lite version number and its `readme.txt` entry (an entry dated "1.9.0 – 2026-10-07" already exists, and 1.9.0 is treated as development-only).
- **Baselines:** the release-baseline questions Q1 and Q2 (Pro companion).
- **Pro release items:** listed in the Pro companion.
- **WordPress.org:** a guideline review of the Lite release build.
- **Not v1 release blockers:** U2, U4 and U6 belong to a future CDN phase.

### 0.9 Non-blocking issues handled during implementation
- the affected-block list for D3;
- validator CSS and URL rules;
- undo steps added by individual blocks (listed; fixes are per-block tasks);
- the stale `save-dynamic-style` editor URL (not copied);
- whether Playwright can drive the system Chrome;
- a generated catalog index if performance needs it;
- the placeholder block's entry in Lite's block on/off panel;
- theme differences in previews (reference theme plus a note in the preview).

---

## 1. Repository state (checked 2026-10-31, 16:09 IST; unchanged on re-check 2026-11-03, 09:47 IST)

| | Lite | Pro |
|---|---|---|
| Branch | `dev/sunil` @ `b91a5ec` | `release/pattern-lib` @ `ef1909d` |
| Upstream | `origin/dev/sunil`, 0 ahead / 0 behind | `origin/release/pattern-lib`, 0 / 0 |
| Remote tip (`ls-remote`, target ref only) | `b91a5ec` | `ef1909d` |
| Worktrees | Main checkout only | Main checkout only |
| Working tree | Untracked `docs/pattern-library/` (this folder) | Modified `CLAUDE.md` (Pattern Library pointer); untracked `docs/pattern-library/` |
| Stash | `stash@{0}` `84df661`, kept | None |

- The CP2 baselines still hold.
- Pro `dev/ayush` was excluded from every listing and never queried.
- Other refs: local Lite `main` is 2 commits behind its remote-tracking ref.
- Lite `origin/release/lite-patterns` is the known 2025 prototype; it registers images from an external domain and changes a block's `save.js`. Do not build on it.
- Nothing found blocks work.

---

## 2. Decision status

### Approved
- **Git routing and rules:**
  - Lite work goes on `dev/sunil`, Pro work on `release/pattern-lib`; `dev/ayush` is off-limits.
  - Push only after an approved, verified unit; the owner confirms every commit message.
  - Code and docs go in separate commits, with no co-author trailer.
- **Ownership:** Lite owns the pattern registry, the asset-resolution contract and the future CDN setting. Pro registers through Lite ([CDN requirement](cdn-and-asset-requirements.md)).
- **Local-first:**
  - no CDN, remote catalog, remote media or external service in this implementation;
  - Lite JS, CSS and Lite assets stay bundled.
- **Premium content** is protected server-side. Hiding a card is not protection.
- **Stages and gates:**
  - Stage order A–H, behind gates G0–G4.
  - G0 (CP2 builds) and G1 (offline, loopback-only Playground harness) are complete.
  - G2 is not yet approved.
- **Documentation:** separate Git-tracked files in `docs/pattern-library/`, 14 for Lite and 13 for Pro (Post-CP2 roadmap, Part 4).
- **Quality rules:**
  - the testing standards in the Post-CP2 roadmap (Part 7);
  - no silent requirement or header changes;
  - existing saved content, hooks, globals and block names are preserved.
- **Not approved:** the earlier "8 Lite + 8 Pro" catalog scope.

### Verified facts this design relies on
| Fact | Evidence |
|---|---|
| Release zips contain only `build/`, `includes/`, the main PHP file and the readme, so library files must live under `includes/` | Release zips inspected; `wp-scripts plugin-zip` defaults |
| The working WordPress minimum is 6.8 (block registration paths). The headers say WordPress 5.0 / PHP 7.3 | Phase 0 run + code |
| Blocks that save a `<style>` element break after a save by users without `unfiltered_html`. That covers Authors, Contributors, multisite site admins, and everyone under `DISALLOW_UNFILTERED_HTML` | Phase 0 run E1 |
| The Pro editor fails when all Lite blocks are disabled, because Lite sets its shared JS globals only inside block bundles | Phase 0 run E2 + code |
| `PluginMoreMenuItem` and a self-replacing placeholder block both work on WordPress 6.8 and 7.1.3. There is no public header-toolbar slot (`PinnedItems` is internal) | Phase 0 run E5 + export list |
| Inserting blocks adds undo steps; presetting `ID` reduces them | Phase 0 run E8 |
| Every WPMozo block's `ID` attribute is a string with no default | `block.json` scan |
| **[New]** Lite's 66 blocks reset `ID` to the current `clientId` on **every editor load**. Pro's 48 blocks on `release/pattern-lib` keep `ID` stable and reset it only when it is missing or duplicated (`src/common/use-stable-block-id.js`) | Code, 2026-10-31 |
| **[New]** 12 Lite `save.js` files reference the site's placeholder image URL | Code, 2026-10-31 |
| `parse`, `createBlock`, `cloneBlock`, `validateBlock`, `insertBlocks`, `canInsertBlockType` and the editor plugin slots exist in the WordPress 7.1.3 bundles. `register_block_pattern` supports `filePath` (6.5+) | Earlier verification |
| Lite today has one REST route (`wpmozo/v1/image-sizes`) and one option (`wpmozo-blocks-and-addons-option`). It has no activation or uninstall routine and no multisite-specific code | Code, 2026-10-31 |
| The installed dependency-extraction plugin **bundles** `@wordpress/ui`, `@wordpress/dataviews` and `@wordpress/admin-ui` into a plugin's own script (core doesn't provide them). `@wordpress/components` is provided by core | `node_modules/@wordpress/dependency-extraction-webpack-plugin/lib/util.js` |
| **WordPress.org guidelines** (official page, updated 2026-03-11): | [Detailed Plugin Guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/) |
| ↳ G5: no functionality locked behind payment; upselling is allowed within G11 | |
| ↳ G11: upgrade prompts used sparingly, shown in context, dismissible | |
| ↳ G7 and G8: as summarised in the CDN requirement | |

### Unresolved (carried forward)
- **PL-1 to PL-5**, as defined in the Post-CP2 roadmap:
  - PL-1 registration and metadata;
  - PL-2 REST, permissions, validation and importer;
  - PL-3 Lite/Pro visibility and integration;
  - PL-4 shared editor handle and compatibility contract;
  - PL-5 catalog and initial scope.
- U1–U6 from the CDN requirement.
- Release-baseline questions Q1 (which Pro builds reached customers) and Q2 (whether any Lite 1.9.0 build was distributed): no answer is recorded.
- The process for Lite `dev/sunil` copy-commits by another developer (A6).
- G2 approval.

### New in this review
- **U7:** media placed inside inserted content must never resolve to the CDN (section C, decision D7).
- **PL numbering drift:**
  - The Phase 2 plan used PL-1 to PL-5 for narrower questions:
    - PL-1: format;
    - PL-2: restricted HTML;
    - PL-3: Pro teaser;
    - PL-4: shared JS fix;
    - PL-5: content.
  - The Post-CP2 roadmap broadened them under the same numbers, and the CDN requirement already uses the broad meaning. This review uses the broad meaning.
- **`ID` strategy:** Lite and Pro handle `ID` differently. The importer handles both; aligning Lite would be a separate block task.
- **WPDS:** the WordPress Design System documentation server isn't available in this session, so WPDS adoption stays an open item for the UI prototype (section D).
- **Pattern `type` field:** added now to avoid a schema change when page templates arrive.
- **More findings** are listed in section J.

---

## A. Architecture

### A1. Components and ownership [Proposed]

```
Lite (dev/sunil)                                          Pro (release/pattern-lib)
─────────────────────────────────────────────────          ─────────────────────────────────
Integration contract   wpmozo_bna_integration()      ◄──── feature detection
  supports( 'library', 1 ), version(), features()
Library service (PHP, loaded only on library REST requests)
  Source registry      ◄── wpmozo_bna_library_register_sources ── registers source 'pro'
  Asset resolver       source + relative path → URL                (base path + URL,
  Pattern loader       pattern.php / content.php                    entitlement callback,
  Validator            schema, limits, allowlist, kses, tokens      links, extra categories)
  Availability         blocks, plugins, role, entitlement    ◄──── entitlement callback (Pro-owned)
  REST controller      wpmozo/v1/library/*
Editor app (JS entry `library`, block editor only)
  data store wpmozo/library · UI components · importer · entry points
Content: free patterns, shared demo media, central maps          Content: Pro patterns + previews
```

Rules:
- Pro supplies **data and one server-side callback**. In v1 Pro adds no library UI, no REST routes and no library JS. That avoids duplicated UI and keeps Pro from depending on Lite's React internals.
- Lite reads Pro files only through the registered source path, with path checks, and never reads the licence key.
- **Nothing loads on the front end.**
  - In the editor, the library is one script entry.
  - The PHP service and the pattern files are loaded only when a library REST route runs. Other admin pages and the front end pay nothing.
- One importer path. Library patterns are **not** registered in core's pattern registry in v1. Reasons:
  - core exposes every registered pattern's content to every editor through `/wp/v2/block-patterns/patterns`, so entitlement can't be enforced;
  - core has no locked or unavailable states;
  - hundreds of patterns would crowd core's inserter;
  - it would bypass the validator and the role checks.
  - Mirroring a curated free subset into core later stays possible.

### A2. Storage and file format [Proposed: PL-1]

```
includes/library/                        (Lite; Pro mirrors the patterns/ and previews/ parts)
  class-*.php                            service classes
  data/categories.php                    category ids, labels, order
  data/tags.php                          controlled tag vocabulary
  data/media.php                         media key → file, revision, size, alt text
  data/links.php                         demo link key → URL ('#' by default)
  data/icons.php                         icon key → icon value (Font Awesome class today)
  data/demo-text.php                     repeated demo strings (company name, phone, …)
  patterns/<slug>/pattern.php            metadata (returns an array)
  patterns/<slug>/content.php            block markup (returns a nowdoc string)
  previews/<slug>.<revision>.webp        card thumbnail
  previews/<slug>.<revision>-full.webp   large preview (optional)
  media/<key>.<revision>.webp            shared demo media
```

- **One folder per pattern.** Adding or retiring a pattern touches only its own folder, so the core system never changes when the catalog grows.
- **Content is a PHP file returning a nowdoc string.** The file starts with `defined( 'ABSPATH' ) || exit;`. The reasons:
  - CDN requirement §4 forbids static `.json`/`.html` premium content in public folders;
  - Lite and Pro use one format;
  - there is no string interpolation;
  - a direct HTTP request outputs nothing;
  - Git diffs stay reviewable.
- If measurements show loading many `pattern.php` files is too slow, a build step can generate one index file per source (decided after the G2 performance test).

### A3. Metadata contract, schema 1 [Proposed: PL-1]

Authored in `pattern.php`:

| Field | Required | Rule |
|---|---|---|
| `schema` | yes | Integer, `1` |
| `slug` | yes | `^[a-z0-9]+(-[a-z0-9]+)*$`, max 64 characters, equal to the folder name, never reused |
| `revision` | yes | Integer ≥ 1. Raised on any content or image change; part of the image file names |
| `title` | yes | Translatable, max 60 characters |
| `category` | yes | An id from the category registry |
| `access` | yes | `free` (source `lite`) or `pro` (source `pro`). The validator cross-checks it against the blocks used |
| `thumbnail` | yes | `{ file, width, height }`, relative to the source's library folder |
| `since` | yes | Plugin version that first ships the pattern |
| `published` | for `pro` access | Date of first publication, set at release. Used by the licence-expiry rule (decision D5) |
| `type` | no | `section` (default). Reserved for later: `page`, `template` |
| `description` | no | Translatable, max 160 characters |
| `tags` | no | Ids from `data/tags.php` (filters, for example `light`, `dark`, `image-heavy`) |
| `keywords` | no | Translatable search terms |
| `preview` | no | `{ file, width, height }`; falls back to `thumbnail` |
| `requires` | no | Only what can't be derived: `plugins` (for example `woocommerce: ">=8.0"`), `lite`, `wp` |
| `layout` | no | `full`, `wide` or `content`: the alignment the design expects |
| `order` | no | Integer for the "Recommended" sort |
| `status` | no | `active` (default), `deprecated` (hidden from browsing), `hidden` |
| `replaced_by` | no | Id of the successor pattern |

Computed by the loader and validator, never authored:
- `id` = `<source>/<slug>`, and `source`;
- `blocks` (parsed from the content), `uses_pro_blocks`, `requires_unfiltered_html`;
- `block_count`, `depth`, `bytes`, `content_hash`;
- the list of tokens used.

The client never sends any of these. The server recomputes availability on every content request.

```php
<?php
defined( 'ABSPATH' ) || exit;

return array(
	'schema'    => 1,
	'slug'      => 'hero-split',
	'revision'  => 1,
	'title'     => __( 'Hero, split image', 'wpmozo-blocks-and-addons' ),
	'category'  => 'hero',
	'access'    => 'free',
	'thumbnail' => array( 'file' => 'previews/hero-split.1.webp', 'width' => 640, 'height' => 480 ),
	'since'     => '1.10.0',
	'tags'      => array( 'light' ),
);
```
(Version numbers in examples are illustrative.)

### A4. Identity, versions, dependencies and lifecycle [Proposed: PL-1]

- **Identity:** an `id` is permanent.
  - A design fix is a new `revision`.
  - A redesign with a different purpose gets a new slug; the old one becomes `deprecated` with `replaced_by`.
- **Retiring a pattern** never affects pages: inserted content is a copy. Only media referenced by inserted content must stay available (section E).
- **Classification is generated:**
  - any Pro block → source and access must be `pro`;
  - a Lite pattern containing a Pro block fails validation;
  - core-only patterns are allowed in both sources.
- **Dependencies:**
  - blocks are derived from the content;
  - plugin requirements are authored;
  - attributes newer than the installed plugin are detected at runtime (raw comment attributes compared with the registered schema) and shown as "update required".
- **Schema evolution:**
  - unknown fields are ignored;
  - fields are added without a schema bump;
  - `schema` changes only for breaking changes;
  - the loader accepts a range of schema versions and hides newer ones with an "update" message.
- **Maintaining existing patterns:**
  - when a block's saved output changes, bundled pattern markup can stop matching;
  - the importer rebuilds blocks from their attributes (A7), which tolerates outdated markup;
  - a release gate still parses every pattern on the minimum and latest WordPress (section I);
  - a re-export tool (roadmap task LPL-T) refreshes pattern markup when blocks change.

### A5. Lite/Pro integration contract [Proposed: PL-4]

PHP, owned and documented by Lite:
- `wpmozo_bna_integration()` returns an object with:
  - `version()`;
  - `contract_version()`;
  - `supports( $feature, $major = 1 )`;
  - `features()`.
- `do_action( 'wpmozo_bna_loaded', $integration )` fires once Lite has initialised. Pro feature-detects at this point; if it never fires (older Lite), Pro keeps today's start path.
- `do_action( 'wpmozo_bna_library_register_sources', $registry )` fires lazily, the first time the library needs its sources.
- `$registry->register_source( $id, $args )` takes:
  - `contract` (int);
  - `label`, `version`;
  - `path` and `url` (the source's own base; CDN requirement §1);
  - `access`;
  - `entitlement` (a callable; Pro-owned);
  - `links` (licence or upgrade pages);
  - optional extra `categories`.

  It returns `true` or a `WP_Error`. Lite refuses unknown sources that claim `pro` access and fails closed if the entitlement callback is missing, throws or returns an unknown value.

```php
add_action( 'wpmozo_bna_library_register_sources', function ( $registry ) {
	$registry->register_source( 'pro', array(
		'contract'    => 1,
		'label'       => __( 'Pro', 'wpmozo-blocks-and-addons-pro' ),
		'version'     => WPMOZO_BNA_PRO_VERSION,
		'path'        => WPMOZO_BNA_PRO_PLUGIN_DIR . 'includes/library/',
		'url'         => WPMOZO_BNA_PRO_PLUGIN_URL . 'includes/library/',
		'access'      => 'pro',
		'entitlement' => 'wpmozo_bna_pro_library_entitlement', // returns a state array, see Pro companion
	) );
} );
```

**Version checks vs feature detection** (unchanged from the earlier plan):
- Versions (`WPMOZO_BNA_PRO_MIN_LITE`, `WPMOZO_BNA_MIN_SUPPORTED_PRO`) drive notices and support statements.
- `supports()` decides what code runs.
- Neither authorises premium content.

**Change policy:**
- Contract changes are additive only (new optional arguments, new features).
- A deprecation needs a notice.
- A removal needs all three: at least 2 Lite minor releases, at least 6 months, and no supported Pro version still using it.

**JS: fix for the Pro editor failing when Lite blocks are disabled [Proposed: PL-4].**
- **Lite:**
  - registers a small handle `wpmozo-blocks-and-addons-shared`;
  - enqueues it in every block editor, whether or not blocks are disabled;
  - the handle sets `window.WPMozoBNA` and keeps `WPMozoBNAComponents` / `WPMozoBNAUtils` as aliases.
- **Pro:** adds the handle as a dependency of its editor script handles in PHP, only when `supports( 'shared-js' )` is true. **No `block.json` edits.**
- **Build:** Lite needs one build-configuration change (extra webpack entries while keeping `--blocks-manifest`). G2 must prove that the block build output is byte-identical.
- The library UI script does not depend on this handle.

### A6. REST API [Proposed: PL-2]

Namespace `wpmozo/v1` (existing). Read-only in v1.

| Route | Permission | Returns |
|---|---|---|
| `GET /wpmozo/v1/library/catalog` | `current_user_can( 'edit_posts' )`, filterable via `wpmozo_bna_library_capability` | Metadata, categories, sources, per-pattern `availability`, context (Lite/Pro/contract versions). **Never content** |
| `GET /wpmozo/v1/library/patterns/(?P<source>[a-z0-9-]+)/(?P<slug>[a-z0-9-]+)` | Same capability; then availability is re-checked server-side (entitlement, blocks, plugins, role) | Content with tokens resolved, plus `revision` and `blocks`. Re-validated before sending |

- **Authentication:** cookie authentication through `apiFetch` with `X-WP-Nonce`. Cookie requests without a valid nonce count as anonymous (401). Application passwords follow the same capability rules.
- **Errors** carry a code and a short message, never file paths:
  - 401 not logged in;
  - 403 for missing capability, a locked pattern or a role restriction;
  - 404 unknown pattern;
  - 409 not available here (missing or disabled block, missing plugin, schema too new);
  - 422 content failed validation.
- **Caching headers:**
  - catalog: `Cache-Control: private, no-cache` with an `ETag`;
  - content: `no-store`.

  Some hosts cache GET REST responses; these headers prevent shared caching.
- **Arguments:** every route declares `args` with validation patterns and a response schema.
- **Out of v1:**
  - a media-import route (decision D7);
  - a cache-clear route (no persistent cache in v1).

Availability is one state per pattern, with reason codes:
- **`available`**.
- **`locked`**: `license_inactive`, `license_expired`, `license_revoked`, `pro_inactive`.
- **`unavailable`**:
  - `block_missing:<name>`, `block_disabled:<name>`;
  - `plugin_missing:<slug>`;
  - `role_unfiltered_html`;
  - `lite_outdated`, `pro_outdated`;
  - `schema_unsupported`;
  - `invalid_content`.

### A7. Import engine [Proposed: PL-2]

**Native vs custom.**
- Use native APIs (`parse`, `createBlock`, `insertBlocks`, `replaceBlocks`, `canInsertBlockType`, `core/notices`) inside a thin Lite importer.
- Do not write a custom parser or serializer.
- Do not insert raw HTML.

**Server validator.** Runs in the content route and in the release gate. Content is never trusted because it is "ours".

1. **Limits:** content ≤ 256 KB, ≤ 400 blocks, nesting depth ≤ 10. Initial values, tuned in G2 against real patterns.
2. **`parse_blocks()` succeeds.** Content outside blocks (classic content) is rejected.
3. **Block allowlist:**
   - allowed: registered `wpmozo/*` blocks of the pattern's source and core blocks;
   - rejected: `core/html`, `core/freeform`, `core/shortcode`, `core/block` (synced pattern references), `core/pattern`, `core/template-part`, `core/navigation` with `ref`, `core/legacy-widget`, and embeds (they fetch third-party content). Embeds may be revisited later.
4. **Attributes and HTML:**
   - string attributes and inner HTML must come out of WordPress's block kses filtering unchanged;
   - URL attributes allow `http(s)`, `mailto`, `tel`, `#` and relative paths that `esc_url_raw` leaves unchanged; everything else is rejected;
   - values that end up inside generated CSS may not contain `{`, `}`, `<`, `>` or `;`.

   The exact per-attribute rules are set from the G2 kses experiments.
5. **Tokens:**
   - only known token types and keys;
   - resolved values must match a safe character set, so they are valid unchanged in both block JSON and HTML;
   - anything else fails closed.

**Client pipeline.**
1. Fetch the content (abortable, with a timeout).
2. `parse()`, then walk the tree. Every block must:
   - be registered;
   - not be `core/missing` or classic content;
   - be valid (after deprecations);
   - use only attributes the installed block knows.
3. Rebuild every block with `createBlock( name, attributes, innerBlocks )`.
   - This regenerates the saved HTML from attributes and gives new client IDs.
   - For blocks whose schema has `ID`, set `ID` to the new block's `clientId`. That gives unique IDs for Lite (which resets them on load) and Pro (which keeps a non-duplicate ID), so inserting the same pattern twice, or into two posts, never shares a CSS scope.
   - Copied parent attributes are dropped; child blocks re-sync them.
4. Choose the target:
   - the placeholder block it was opened from (`replaceBlocks`);
   - otherwise after the selected block;
   - otherwise the end of the post.

   Check `canInsertBlockType` for every top-level block there. Template locks and allowed-block rules give a clear message.
5. Insert in one `insertBlocks` / `replaceBlocks` call, select the result, and show a snackbar with **Undo**.
6. On any failure nothing is inserted and the user sees the specific reason.

| Case | Behaviour |
|---|---|
| Block not installed / disabled by an administrator | Card shows "unavailable" with the block's name; the server refuses content (409); the client re-checks |
| Third-party block | Not used in v1 patterns. Later: listed in `requires.plugins`; unavailable without it |
| Invalid or incomplete content | Release gate fails. At runtime the server returns 422 and the card shows "temporarily unavailable" (details logged when `WP_DEBUG` is on) |
| InnerBlocks / nesting | Recursive rebuild; `parent` and `allowedBlocks` respected through `canInsertBlockType` |
| Reusable / synced patterns | Never created; references rejected. Users can turn an inserted section into a synced pattern with core's UI |
| Duplicate insertion | Allowed; each insert gets new client IDs and `ID`s |
| Restricted HTML role | Policy D3; affected patterns are unavailable to that user and the server refuses content |
| Save and reload | Valid at insertion because rebuilt. Later validity depends on block deprecations, as for any content |
| Undo | One insert action. Extra undo steps come from blocks that change attributes on mount; G2 lists them, and fixes are per-block tasks |
| Editor recovery | Undo, or the snackbar's Undo, removes the inserted blocks. The library never changes existing blocks |

### A8. Performance and scale [Proposed; targets to be measured in G2]

| Area | Design | Target |
|---|---|---|
| Front end | Nothing loaded | 0 bytes |
| Editor load | One library script; no request until the library opens | ≤ 50 KB gzipped (estimate) |
| Catalog | One request, metadata only, cached in the JS store for the editor session, revalidated by `ETag` | ≤ 300 ms server time and ≤ 150 KB gzipped at 500 patterns |
| Search and filter | Client-side over in-memory metadata | Instant (< 50 ms) for 1,000 items |
| Rendering | 24 cards at a time, more on scroll, plus a "Load more" button for keyboard users | No long tasks > 200 ms |
| Thumbnails | `loading="lazy"`, `decoding="async"`, fixed width and height | ≤ 60 KB each |
| Content | Fetched per pattern on insert; validation result memoised per request | ≤ 300 ms server time |
| Server memory | Registry built only on library REST requests | No measurable change on other requests |

Server-side pagination can be added later as an additive query parameter if the catalog outgrows one response.

### A9. Existing users and upgrades [Proposed]

- **No new tables, no migrations, no new options.**
  - The library switch (D9) lives inside the existing `wpmozo-blocks-and-addons-option` array. Missing key = enabled.
  - Per-user UI state uses core's preferences store (`@wordpress/preferences`, kept by core in user meta).
- **No activation, deactivation or uninstall changes.** Nothing to clean up beyond core-managed preferences.
- **Existing blocks:**
  - no `block.json` or `save.js` changes for the library;
  - saved content is untouched.
  - One new block, the placeholder (`wpmozo/pattern-library`). It saves nothing and renders nothing on the front end, and must stay supported forever because users may save it unused.
- **New placeholder block:** it appears in Lite's block on/off panel, so administrators can disable it.
- **Multisite:** library data is per site; nothing network-wide is written.
- **Requirements:**
  - library PHP stays PHP 7.3-compatible, as the header claims;
  - the library feature-detects its WordPress APIs and stays silent where they are missing;
  - headers are not changed in library tasks. The real minimum (WordPress 6.8) is a separate release task.

---

## B. Roadmap validation

The existing plan (LPL-0…4, PPL-0…3, X-1, Stages A–H) covers the core flow. Changes and gaps:

| Task | Covers | Change proposed |
|---|---|---|
| G2 / Phase 1a | Role, kses, URL, importer experiments | **Expand:** build-pipeline spike, entry points on 6.8 and 7.1, Modal sizes and accessibility, performance with 500 synthetic patterns, the shared-handle scenario (section G) |
| LPL-0 / PPL-0 | Docs bootstrap | Unchanged; built from this review once approved |
| LPL-1 (Stage A) | Contract and shared handle | Adds the lazy `wpmozo_bna_library_register_sources` hook. Build-config change proven byte-identical first |
| PPL-1 (Stage B) | Pro adopts the contract | Adds shared-handle dependencies from PHP (no `block.json` edits); notice for older Lite |
| LPL-2 (Stage C) | Registry, validator, REST | Adds the asset resolver, central maps, availability codes, and a validator command usable in the release gate |
| **New: LPL-UX** | — | Clickable UI prototype and design tokens, approved **before** Stage D. Can run in parallel with Stages A–C |
| LPL-3 (Stage D) | UI and importer | Adds the placeholder block, preferences, snackbar Undo, accessibility checks |
| PPL-2 (Stage E) | Pro source and entitlement | Moves **before** content (Stage F) as planned; entitlement per D5 |
| **New: LPL-T** | — | Authoring and asset pipeline: export helper (strips `ID`s, inserts tokens), thumbnail capture in the harness with `cwebp`, validity gate. Before Stage F |
| LPL-4 / PPL-3 (Stage F) | Patterns | Needs PL-5 scope approval and LPL-T |
| X-1 (Stage G) | Cross-plugin acceptance | Uses the matrix in section F |
| Stage H | Release, docs | Adds readme/changelog wording for the library and the release prerequisites in section H |

**Release prerequisites outside the library** (they don't block implementation; they block releasing):
- the Lite header requirements;
- the Pro release line (see the Pro companion);
- the Q1/Q2 baselines;
- moving the Pro version off "1.0.0".

---

## C. Decision register

Grouped so that each group needs one approval. "Approval" says what is needed from the owner.

### Group 1: Architecture baseline

**D1 — PL-1 Registration and metadata.**
- **Options:**
  - (a) one folder per pattern with `pattern.php` + `content.php` (A2–A4);
  - (b) one catalog file per source plus content files;
  - (c) JSON files;
  - (d) core `register_block_pattern` with `filePath`;
  - (e) a catalog stored in a custom post type or the database.
- **Recommendation:** (a).
- **Why:**
  - adding patterns never touches the core system;
  - matches CDN requirement §4;
  - per-pattern Git diffs;
  - no database.
- **Rejected:**
  - (c) public static files;
  - (d) A1 reasons;
  - (e) migrations and environment drift.
- **Compatibility:** additive schema; unknown fields ignored.
- **Maintenance:** many small files. An optional generated index is used only if G2 shows it is needed.
- **Approval:** yes.

**D2 — Content translation.**
- **Options:**
  - (a) metadata and UI translatable; demo content in English;
  - (b) `__()` around content strings too.
- **Recommendation:** (a) for v1.
- **Why:**
  - with hundreds of patterns, content translation is a large burden;
  - translated strings injected into block markup are third-party input that can break markup;
  - users replace demo text anyway.

  Adding (b) later changes no other part.
- **Approval:** yes.

**D4 — PL-4 Contract and shared handle (A5).**
- **Options for the shared JS fix:**
  - (a) Lite shared handle plus PHP-added dependencies in Pro;
  - (b) add the handle to every Pro `block.json`;
  - (c) leave it unfixed.
- **Recommendation:** (a).
- **Why:**
  - no edits to dozens of `block.json` files;
  - existing globals stay;
  - Pro versions that don't know the handle keep working.
- **Compatibility:** additive. The globals become available even when every Lite block is disabled.
- **Maintenance:** Lite carries the aliases while any supported Pro uses them.
- **Approval:** yes, including the build-configuration change (verified in G2 first).

**D8 — Entry points and editor scope.**
- **Options:**
  - (a) "Pattern Library" in the editor's More menu, plus a placeholder block that opens the library and replaces itself;
  - (b) (a) plus a pinned `PluginSidebar` launcher in the header (public API);
  - (c) a header toolbar button injected into the editor's DOM.
- **Recommendation:** (b), post editor only in v1.
- **Why:**
  - (c) relies on internal class names that change between WordPress versions; another plugin on the Local site already shows that failure mode;
  - (b) gives a visible header icon through a public API.
- **Later:** Site Editor support. Option (c) only behind a flag, after a spike across supported versions.
- **Approval:** yes.

**D9 — Library switch and capability.**
- **Recommendation:**
  - a Pattern Library on/off switch in Lite's settings, default on, stored in the existing option array;
  - the capability filter defaults to `edit_posts`.
- **Approval:** yes.

**D10 — Previews.**
- **Options:**
  - (a) static images for every pattern;
  - (b) live block previews.
- **Recommendation:** (a) in v1.
- **Why:**
  - deterministic;
  - works for locked patterns without fetching their content;
  - no slider or script initialisation problems inside preview iframes.
- **Later:** live preview as an option for available patterns.
- **Approval:** yes.

### Group 2: Import and security (approval now, final values after G2)

**D3 — Restricted-HTML policy** (users without `unfiltered_html`).
- **Options:**
  - (a) mark patterns that use blocks saving `<style>`/raw HTML as unavailable for those users, with the reason, and refuse their content server-side;
  - (b) allow them with a warning;
  - (c) redesign how static blocks deliver CSS (render-time CSS), a separate large project with deprecations.
- **Recommendation:** (a) now, and evaluate (c) as its own project.
- **Why:** (b) produces broken pages on save. This affects multisite site admins and every user on hosts with `DISALLOW_UNFILTERED_HTML`. Core-only and dynamic-only patterns remain available to everyone.
- **G2** confirms which blocks are affected per role.
- **Approval:** yes, and accept that G2 finalises the list.

**D6 — PL-2 REST and importer (A6, A7).**
- **Recommendation:** read-only REST; the server validator in A7; client rebuild with `ID` presets; one insert action; nothing inserted on any failure.
- **External links:** allowed as stated in A7 (`http(s)`, `mailto`, `tel`, `#`, relative). Demo links come from the link map, default `#`.
- **Approval:** yes. Validator thresholds and per-attribute rules are finalised from G2 evidence.

### Group 3: Lite/Pro visibility and entitlement (needs business input)

**D11 — PL-3 Visibility.**
- **Lite only:**
  - free patterns;
  - plus **one** dismissible "More designs in WPMozo Pro" card, with no Pro images or content shipped in Lite.
- **Pro installed but inactive:** the card says "Activate WPMozo Pro" (only for users who can activate plugins).
- **Pro active:** its patterns appear as available, locked or unavailable, with reasons.
- **Options:**
  - (a) as above;
  - (b) no teaser at all;
  - (c) locked Pro cards in Lite-only sites using images shipped in Lite.
- **Recommendation:** (a).
- **Why:**
  - (c) ships Pro marketing material in the WordPress.org plugin and ties Lite releases to the Pro catalog;
  - (a) keeps upselling contextual and dismissible (G5, G11).
- **Approval:** yes. Also confirm the card's wording and link.

**D5 — Entitlement policy.**
- Detailed in the Pro companion: licence validity, expiry, revocation, unavailable licence server, and the "new patterns after expiry" rule.
- **Summary recommendation:**
  - Pro patterns are available while Pro is active, compatible and its licence is activated on the site;
  - after expiry, patterns the site already has stay usable, and later patterns are not available;
  - revocation locks Pro patterns;
  - inserted content is never touched.
- **Approval:** yes, plus licence-server information (Pro companion).

### Group 4: Content and assets

**D7 — Media inside inserted content (U7, new).**
- **Background:** CDN requirement §6 says saved content must never depend on the CDN. Images placed into a page by a pattern are saved content, so they must never resolve to the CDN.
- **Options:**
  - (a) a small shared demo-media set in Lite, referenced by plugin URL, kept for the life of the plugin (never renamed or removed), used by Lite and Pro patterns;
  - (b) copy the images into the site's Media Library on insert (deduplicated; needs `upload_files`, otherwise falls back to (a));
  - (c) CDN-resolved content media (conflicts with §6).
- **Recommendation:** (a) for v1, (b) as v1.1. Tokens make (b) a drop-in change.
- **Why (a) in v1:** no database writes and no write route.
- **Limits of (a):**
  - images break if Lite is deleted;
  - replacing an image in Lite affects future insertions only.

  So the set stays small, under about 30 files and 3 MB total.
- **Also proposed:** amend the CDN requirement to state that thumbnails and previews may use the CDN in future, but content media never does.
- **Status (2026-11-03): approved** as (a): local, project-owned images, never a CDN. (b) is documented as a later, separate option. The CDN-requirement wording amendment is made in the first docs commit.

**D12 — PL-5 Catalog scope.**
- **Proposed starting point**, for discussion:
  - 10 shared categories: hero, features, about, services, testimonials, team, pricing, call to action, FAQ, contact; plus WooCommerce for Pro.
  - At least 2 patterns per category per tier at launch; for example about 16 free and 24 Pro.
- **Thumbnail spec:**
  - captured at a 1440 px viewport on a reference theme;
  - card image 640 px wide WebP ≤ 60 KB;
  - large preview 1440 px wide ≤ 250 KB.
- **Approval:** your input on counts, designs and copy.
- **Updated 2026-11-03:** replaced by the evaluation in 0.6: a pilot, then up to 10 free + 14 Pro behind a quality gate.

### Group 5: CDN items (none block local-first work)

| ID | Recommendation | Approval |
|---|---|---|
| U1 | Keep "no": Lite's own assets always ship locally in the WordPress.org build. Adopt as a rule | Yes (confirm) |
| U2 | Keep unresolved; no code. Before any CDN phase, review again and, if still unclear, ask the WordPress.org plugin review team | No (deferred) |
| U3 | Per-source switch. Required anyway, because `lite` stays local under U1 | Yes |
| U4 | Decide with the CDN provider in the CDN phase | No (deferred) |
| U5 | v1: Lite REST route plus Pro-owned entitlement callback (A6, D5). A future remote route is designed in the CDN phase | Yes (v1 part) |
| U6 | Keep a published path for as long as any supported version references it; proposed minimum 24 months after the last release that references it | Later |
| U7 | Content media never resolves to the CDN (D7) | Yes |

### Group 6: Tooling and process

**D13 — Test tooling.**
- Unit tests for pure library modules use the Jest that `@wordpress/scripts` already ships (`npx wp-scripts test-unit-js`), with no new dependency.
- PHP 7.3 syntax compatibility is checked with the PHPCompatibilityWP ruleset for PHPCS. That is a new local dev tool and needs a download.
- Integration tests run in the offline harness.
- No CI service exists; adding one is a later decision.
- **Approval:** yes, for the PHPCompatibilityWP install.
- **Updated 2026-11-03:** the tooling inventory is in 0.7. Everything except PHPCompatibilityWP is already installed. If approved, it goes into the harness folder only, with no global change.

**D14 — Release prerequisites** (section B list).
- Not implementation blockers.
- Each one is a separate task with its own approval.

---

## D. UI/UX specification [Proposed; prototype in LPL-UX]

### Structure

```
┌ Pattern Library ───────────────────────────────── [ Search patterns… ] [All|Free|Pro] [×] ┐
│ Categories        │ 48 patterns · Sort: Recommended ▾ · ☐ Available only                    │
│ All          48   │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                              │
│ Hero          6   │ │ thumb  │ │ thumb  │ │ thumb  │ │ thumb  │   card: image, title,          │
│ Features      5   │ │        │ │   PRO  │ │ 🔒 PRO │ │        │   category, badges, state;     │
│ …                 │ └────────┘ └────────┘ └────────┘ └────────┘   hover/focus: Preview, Insert │
│ (select on small  │ … 24 per batch, more on scroll, "Load more" button                         │
│  screens)         │ [ More designs in WPMozo Pro ]  (D11, dismissible)                          │
└───────────────────┴────────────────────────────────────────────────────────────────────────────┘
Preview view (same modal): ← Back · title · description · large image · category, blocks,
requirements · primary action: Insert / Activate licence / Activate Pro / reason · ‹ prev  next ›
```

### Flows
1. **Open:**
   - from the More menu, the header launcher or the placeholder block;
   - focus goes to the search field;
   - the catalog loads with 8 skeleton cards.
2. **Find:** search across title, keywords, tags and category; filter by source and availability; sort by Recommended, Newest or A–Z. The result count is announced to screen readers.
3. **Preview:** opens a view inside the modal. Escape or Back returns to the grid with focus on the same card.
4. **Insert:**
   - the button shows a spinner;
   - on success the modal closes and a snackbar says "Pattern inserted" with an Undo action;
   - on failure an inline error appears with the reason, and nothing is inserted.
5. **Locked:**
   - the card and the preview show a lock and the Pro badge;
   - the action is "Activate licence" (users who can manage it) or "Ask your administrator".
6. **Unavailable:** muted card with the reason in text (never colour alone), for example "Needs WooCommerce" or "Block disabled by an administrator", with a settings link for administrators.

### States
- **Loading:** skeleton cards; spinner on actions.
- **Empty:** "No patterns match", with "Clear filters".
- **Error:** "Couldn't load the library", with Retry. Offline is detected.
- **Thumbnail failed:** neutral placeholder graphic plus the title.
- **No patterns at all** (library disabled): the entry points are hidden.

### Accessibility and interaction
- `Modal` from `@wordpress/components` provides the focus trap, Escape to close and focus return.
- One Escape inside the preview goes back to the grid first.
- **Grid:** every card is an `article` with a heading; buttons are labelled with the pattern name ("Insert Hero, split image").
- **Announcements:** result counts and errors are announced through `@wordpress/a11y` `speak()`.
- **Keyboard:** everything is reachable in logical order; no keyboard trap; visible focus rings (admin theme colour).
- **Other:** `prefers-reduced-motion` respected; logical CSS properties for RTL; every string translatable.
- **Small screens:** below 782 px (the WordPress admin breakpoint) the modal fills the screen, the categories become a select, and the grid drops to 1–2 columns.

### Components (Lite, `src/library/`)
- **Layout and controls:**
  - `LibraryModal`, `LibraryHeader`;
  - `SearchField`, `SourceFilter`, `CategoryNav`, `ResultsToolbar`.
- **Grid:** `PatternGrid`, `PatternCard`, `PatternThumbnail`, `Badge`.
- **Pattern states:** `AccessState`, `PatternPreview`.
- **Page states:** `EmptyState`, `ErrorState`, `SkeletonCard`, `UpsellCard`.
- **Hooks:** `useCatalog`, `usePatternContent`, `useInsertPattern`, `useLibraryPreferences`.
- **Data store:** `wpmozo/library`.
- **Editor integration:**
  - the More menu item;
  - the header launcher;
  - the placeholder block.
- Pro ships **no** UI components: it supplies labels, states and links as data.
- Later extension points (for example extra badges) will be `@wordpress/hooks` filters, added only when needed.

### Design system
- **Components:** `@wordpress/components` (provided by core on 6.8–7.1, so it isn't bundled) and `@wordpress/icons` (bundled and tree-shaken).
- **Styles:** SCSS with `@wordpress/base-styles` variables and breakpoints.
- **Tokens:** CSS custom properties `--wpmozo-lib-*` defined once in `src/library/styles/_tokens.scss`:
  - colour: primary = `var(--wp-admin-theme-color)`, a Pro accent, neutrals, success/warning/error;
  - spacing on the 4 px WordPress grid;
  - radius (2 / 4 / 8 px), elevation (2 levels), typography (admin font stack, 13 / 14 / 16 / 20 / 24 px);
  - card width (min 260 px);
  - modal: full screen below 782 px, otherwise up to 1440 × 90 vh.
- **Branding:** the WPMozo logo and empty-state illustrations are original inline SVG components exported from one module.
- **[Open] WPDS:** `@wordpress/ui` would be bundled into our script, and its stability on WordPress 6.8 is unverified here. Evaluate it during the prototype with the WPDS documentation; v1 starts on `@wordpress/components`.

---

## E. Asset and content management [Proposed]

One place for each kind of content. Components and pattern files never contain host names.

| Item | Single source of truth | How it is replaced |
|---|---|---|
| Asset base URL (library UI images) | Lite resolver: each source's own plugin URL now, one central setting later (CDN requirement §1) | Change the source registration or the central setting |
| Demo media in content | Lite `data/media.php` (key → file, revision, size, alt) + `media/` | Add `<key>.<revision+1>.webp` and update one map line. Every pattern using the key changes for future insertions |
| Thumbnails and previews | `thumbnail` / `preview` in `pattern.php` | New file with the next revision, update the pattern's `revision` |
| Links | `data/links.php` (default `#`) | Edit the map |
| Icons in content | `data/icons.php` (semantic key → Font Awesome class today) | Edit the map; switching icon sets later needs no pattern edits |
| Repeated demo text | `data/demo-text.php` (company name, address, phone, email) | Edit the map |
| Titles, descriptions, categories, tags | `pattern.php`, `data/categories.php`, `data/tags.php` | Edit one file each |
| UI tokens | `src/library/styles/_tokens.scss` | Edit tokens |
| UI icons and illustrations | One `src/library/assets` module | Replace the export |

**Tokens in content files**, resolved on the server in the content route:
- `{{wpmozo:media:<source>/<key>}}`;
- `{{wpmozo:link:<key>}}`;
- `{{wpmozo:icon:<key>}}`;
- `{{wpmozo:text:<key>}}`.

**Rules:**
- Resolved values must match a safe character set (no quotes, `<`, `>`, `&`, or braces), so the same value is valid inside block JSON and HTML. Anything else fails closed.
- Media and link values are URLs from the resolver or the map, never typed into patterns.
- Inserted content keeps the resolved values; the library never rewrites existing pages.
- Content-media files are therefore permanent (D7).
- Each image needs explicit attributes in pattern content. No block may fall back to the site's default placeholder URL (12 Lite blocks reference it).

---

## F. Compatibility and access matrix [Proposed expectations; verified in X-1]

### Plugin combinations
| # | Combination | Library behaviour | Blocks |
|---|---|---|---|
| 1 | Lite only | Free patterns; teaser card (D11) | Unchanged |
| 2 | Lite + Pro installed, inactive | As 1; teaser says "Activate WPMozo Pro" for users who can activate plugins | Unchanged |
| 3 | Lite + Pro active, licence active | Pro patterns available (subject to blocks, plugins, role) | Unchanged |
| 4 | Pro active, licence expired | Per D5: already-shipped patterns stay usable; patterns released after expiry are locked ("Renew") once the expiry can be known (see Pro companion) | Unchanged |
| 5 | Pro active, licence missing or invalid | Pro cards locked ("Activate licence"); the content route returns 403 | Unchanged |
| 6 | Older Lite (no library) + newer Pro | No library (Lite lacks it). Pro shows "Update WPMozo Blocks to use the Pattern Library" to administrators | Pro blocks keep registering |
| 7 | Newer Lite + older Pro (no source registration) | Free patterns; teaser says "Update WPMozo Pro to get Pro patterns" (Pro detected by its version constant) | Unchanged |
| 8 | Pro updated, Lite unchanged | If Lite's contract supports what Pro needs: full. If not: Pro registers what is supported, hides the rest, and shows a notice. Never fatal | Unchanged |
| 9 | Lite updated, Pro unchanged | The contract is additive, so the older Pro source keeps working; deprecated arguments are still accepted | Unchanged |
| — | Pro active, WooCommerce inactive | WooCommerce patterns unavailable ("Needs WooCommerce") | Woo blocks unregistered (existing) |
| — | Block disabled in Lite settings | Patterns using it unavailable ("Block disabled by an administrator") | Existing behaviour |
| — | Lite inactive, Pro active | Pro does nothing (existing) | Existing behaviour |

### Users and roles (content route)
| User | Catalog | Content |
|---|---|---|
| Not logged in | 401 | 401 |
| Subscriber | 403 | 403 |
| Contributor, Author | Yes | Yes, except patterns with `requires_unfiltered_html` (D3) |
| Editor, Administrator (single site) | Yes | Yes |
| Multisite site administrator | Yes | As Author (no `unfiltered_html`) |
| Multisite super admin | Yes | Yes |
| Any user with `DISALLOW_UNFILTERED_HTML` | Yes | Restricted patterns unavailable to everyone |
| Pro patterns, any role | Listed with state | Only when the server-side entitlement check passes |

Not trusted for access: anything the browser sends (ids, `access`, timestamps, revisions). The server decides from its own data on each request. Licence keys and licence details never reach JS or REST responses; the catalog shows only a state.

---

## G. Final implementation sequence (updated 2026-11-03)

Once the section 0.2 baseline is approved, the stages run in order without further planning approvals. Every stage ends with:
- the verification below;
- that stage's docs;
- a report;
- commit messages you confirm;
- a push to the target branch, followed by a remote check.

**Two review checkpoints remain:** the UI prototype (step 4) and the pilot patterns (step 7).

**The former G2 experiments** run at the start of the stage that needs them, on harness copies, with unique log names.

| Step | Work | Repo | Needs | Starts with | Acceptance | Tests |
|---|---|---|---|---|---|---|
| 1 | **Stage A, LPL-1:** integration contract, shared editor handle, build entries; first docs commit | Lite | Approval | Build spike in a harness copy (extra entries, block build byte-identical); Playwright with the system Chrome; all-Lite-blocks-disabled scenario | `supports()`, `wpmozo_bna_loaded`, lazy sources hook; globals present with every Lite block disabled; Lite block build output byte-identical; current Pro runs unchanged | Build, lint, `php -l` (7.4 harness, 8.0–8.4), PHPCS; harness matrix rows 1, 7, 9 |
| 1P | **Pro prerequisites** (Pro companion) | Pro | Approval | — | As listed in the Pro companion | As listed there |
| 2 | **Stage B, PPL-1:** Pro adopts the contract | Pro | 1, 1P | — | Notice on older Lite; never fatal; Pro editor works with all Lite blocks disabled; no Pro saved-output change | Matrix rows 6–9 |
| 3 | **Stage C, LPL-2:** registry, resolver, central maps, validator, REST | Lite | 1 | Role save/reload per block type (6.8/PHP 7.4, 7.1/PHP 8.2, multisite site admin, `DISALLOW_UNFILTERED_HTML`); kses, URL and CSS-value payloads; 500 synthetic patterns | Role table in F passes; payloads and oversize content rejected; zero outbound HTTP; catalog within the A8 budget; D3 block list recorded | REST role script, validator unit tests, payload suite, performance run |
| 4 | **LPL-UX prototype (checkpoint):** the real UI shell built with `@wordpress/components` against mock data, in a harness copy of Lite (not committed until approved) | Lite | 1 | — | The full primary flow works: open, search, filter, categories, preview, Pro-locked state, insert (mock), loading, empty and error states; tokens and components documented; **your approval** | Keyboard and screen-reader walkthrough; 360 / 768 / 1440 px |
| 5 | **Stage D, LPL-3:** UI, importer, placeholder block, entry points | Lite | 3, 4 | Importer spike (rebuild, `ID` preset, undo per block, duplicates); entry points and Modal on 6.8 and 7.1 | Insert at selection, end and placeholder on 6.8 and 7.1; unique IDs on repeat; valid after save and reload; front end renders; Undo works; no console errors; accessibility and responsive checks pass | Browser runs in the harness (Playwright or manual), editor and front end |
| 6 | **Stage E, PPL-2:** Pro source and entitlement | Pro | 2, 3 | — | Content route follows A3 for each simulated licence state; no licence data in JS or REST; no remote call during library requests | Licence states set through options in the harness |
| 7 | **LPL-T + pilot (checkpoint):** authoring and thumbnail pipeline; 2 free + 2 Pro patterns end to end | Both | 5, 6 | — | Export helper, thumbnail capture and validity gate documented and run; pilot passes the 0.6 gate; **your design review** | Gate log, browser checks |
| 8 | **Stage F:** remaining patterns | Both | 7 approved | — | Every pattern passes the 0.6 gate; zip size change reported | Gate + spot checks |
| 9 | **Stage G, X-1:** cross-plugin acceptance | Both | 8 | — | Matrix F fully run and reported | Full matrix |
| 10 | **Stage H:** release preparation | Both | 9 + the 0.8 items | — | Versions, readme/changelog, tags, docs and memory current | Release checklist |

---

## H. Remaining blockers (updated 2026-11-03)

- **Before Stage A:** the one overall approval of section 0.2 (A1–A7).
- **Before Stage B:** the Pro prerequisites task (Pro companion).
- **Before Stage D:**
  - the prototype approved;
  - the teaser link (0.5, question 1).
- **Before Stage E:** nothing extra for phase 1. The licence-server answers only enable the stricter phase 2 (Pro companion).
- **Before Stage F:**
  - the pilot approved;
  - the design source (0.5, question 2).
- **Before release:** section 0.8.
- **Process:** copy-commits to Lite `dev/sunil` by another developer. Every push is preceded by a remote check; if the remote moved, the push stops.

---

## I. Testing strategy

**Every commit (code):**
- `php -l` on changed PHP files (PHP 8.4 locally);
- PHPCS (WordPress standard) and PHPCompatibilityWP (`testVersion 7.3-`) on changed files;
- `npm run lint:js` / `lint:css` on changed files;
- unit tests for changed library modules;
- `npm run build` exit 0, plus a check that untouched blocks' build output is unchanged;
- staged-file review (no zip, `build/`, `node_modules`).

**Every push:**
- harness smoke on WordPress 6.8.11/PHP 7.4 and 7.1.3/PHP 8.2 with the changed plugin copies:
  - activation without PHP notices;
  - the REST role script;
  - the pattern validity gate;
  - zero outbound HTTP;
- an editor and front-end run in the browser for every changed flow (insert, save, reload, view), with console and PHP logs checked;
- results written to `testing.md`.

**Every stage:**
- the relevant rows of matrix F;
- licence states that can be simulated;
- regression of existing blocks: the Lite 1.8.0 / Pro fixture sets stay valid;
- for Lite tasks, the shared-handle and disabled-blocks scenarios.

**Release:**
- the full matrix (plugin combinations × WordPress 6.8 / latest × PHP 7.4 / 8.2 × roles × multisite × `DISALLOW_UNFILTERED_HTML`);
- zip contents check;
- `make-pot` check;
- size report;
- WordPress.org guideline review for Lite.

**Not available locally:**
- the real licence server;
- PHP 7.3 binaries (static checks only);
- MySQL inside the harness (it uses SQLite);
- CI.

These limits are reported, never assumed to pass.

---

## J. Gap analysis and additional risks

| Question | Answer in this design |
|---|---|
| Independent releases break something? | Feature detection plus an additive contract; matrix F rows 6–9; contract tests |
| Existing customer updates? | No migrations, options or block output changes. One new block (placeholder) that must stay supported |
| Pro deactivated? | Pro patterns vanish from the catalog. Inserted Pro blocks behave as today without Pro (the library adds nothing) |
| Licence expires? | D5; inserted content never touched |
| Pattern uses an unavailable block? | `unavailable` with the block name; server 409; client re-check |
| Image or preview missing? | Placeholder graphic at runtime; the release gate fails on missing files |
| Invalid pattern content? | Release gate; runtime 422 → "temporarily unavailable"; nothing inserted |
| Catalog grows a lot? | Lazy registry, client search, incremental rendering, optional generated index, additive pagination |
| Complete UI redesign? | UI isolated in `src/library` behind the store and REST contract; tokens central |
| Placeholder assets replaced? | Central maps; future insertions only; content media permanent (D7) |
| New categories or pattern types? | Category registry plus Pro extra categories; `type` field reserved |
| WordPress or Gutenberg API changes? | Public APIs only; one small compatibility module wraps anything that moved between versions (for example the More-menu slot); G2 and release runs on 6.8 and latest |
| New Lite and Pro versions independently? | Same as the first row; minimum versions declared |

**Additional risks found:**
1. **Content media vs CDN (U7).** Without D7, a future CDN switch would make saved pages depend on the CDN.
2. **Different `ID` strategies.** Lite resets every block `ID` on each editor load, which marks posts as changed and adds undo steps. Pro keeps IDs stable. The importer copes; aligning Lite is a separate task.
3. **Pattern validity drift.** Blocks whose saved output changed without deprecations make bundled markup outdated. Covered by rebuilding plus the release gate and the re-export tool.
4. **Themes.** Patterns look different across themes (wide/full alignment support, spacing, fonts), and Lite already filters theme.json data.
   - Previews are captured on one reference theme.
   - The preview says designs adapt to the active theme.
   - `layout` metadata flags full-width designs.
5. **Restricted-HTML sites.** On hosts with `DISALLOW_UNFILTERED_HTML`, patterns using static WPMozo blocks are unavailable to everyone (D3). This mirrors an existing block limitation and needs product attention beyond the library.
6. **Editor bundle size** affects every editor load, even for users who never open the library. Hence the budget.
7. **Contexts.** The library guards against loading in the Site Editor, widgets and Customizer until supported.
8. **Other library plugins.** Another library plugin on the Local site injects its own header button. The supported entry points (D8) avoid collisions; all handles, store names and CSS classes are prefixed.
9. **Aggressive host caching of REST GET responses.** Mitigated with the cache headers in A6.
10. **Stale reference.** The editor receives a `wpmozo/v1/save-dynamic-style` URL for a route that doesn't exist in Lite. The library must not copy this; cleaning it up is a separate task.
11. **Concurrent pushes.** Copy-commits on Lite `dev/sunil` by another developer can overwrite library work silently (A6).

---

## K. Documentation and memory plan

After approval, the 14 Lite and 13 Pro files are written **by the stage that implements their content**, not as empty skeletons first (updated 2026-11-03). This review is split into them.

**Lite, by stage:**
- **Stage A:** `README`, `architecture`, `registry-and-contract`, `decisions` (approved items only), `compatibility`, `testing`, `handoff`, `changelog`. The same docs commit adds `cdn-and-asset-requirements.md` (with the D7 wording) and this review as a historical record.
- **Stage C:** `rest-api`, `security`.
- **Stage D:** `editor-ui`, `import-workflow`.
- **LPL-T:** `pattern-authoring`.
- **Stage H:** `release-and-upgrade`.

**Pro:** the Pro companion lists its order.

| Review section | Lite file | Pro file |
|---|---|---|
| A1, A5 | `architecture.md`, `registry-and-contract.md` | `architecture.md`, `pro-integration.md` |
| A2–A4, E | `pattern-authoring.md`, `registry-and-contract.md` | `pattern-source.md`, `pattern-authoring.md` |
| A6 | `rest-api.md` | — |
| A7, validator | `import-workflow.md`, `security.md` | `security.md` |
| D | `editor-ui.md` | — |
| F, A9 | `compatibility.md`, `release-and-upgrade.md` | `compatibility.md`, `release-and-upgrade.md` |
| C | `decisions.md` (approved only) | `decisions.md` |
| G, H | `handoff.md` | `handoff.md` |
| I | `testing.md` | `testing.md` |
| Entitlement | — | `license-and-entitlements.md` |

- **Lite repository is public:** `security.md` describes protections, never unfixed issues.
- **Memory:** one status file for the Pattern Library with the current gate and pointers to these docs, plus the existing workflow note. Details stay in the docs.
