# Integration contract and pattern registry

Lite (`wpmozo-blocks-and-addons`) owns this contract. Add-ons, currently WPMozo Blocks and Addons Pro, use only what is documented here, never internal classes or globals that are not listed.

| Part | Status |
|---|---|
| 1. Integration contract (PHP) | **Implemented** (Stage A, LPL-1) |
| 2. Shared editor script (JS) | **Implemented** (Stage A, LPL-1) |
| 3. Pattern registry and sources | **Implemented** (Stage C, LPL-2); pattern data JSON and XML since 2026-11-26 (PL-D37) |
| 4. Other Lite surfaces add-ons use | **Frozen and machine-checked** (R4, 2026-11-06); not versioned by `supports()` |

## 1. Integration contract (PHP)

**Accessor:** `wpmozo_bna_integration()` returns the `Mozo_Bna_Integration` instance.

| Method | Returns |
|---|---|
| `version()` | Lite plugin version (`WPMOZO_BNA_VERSION`) |
| `contract_version()` | Contract revision (int); raised whenever a feature is added or extended |
| `features()` | `array( feature => version )` |
| `supports( $feature, $version = 1 )` | `true` when the feature exists at that version or higher |

**When it is available:**
- Lite initialises on `plugins_loaded` at priority 20.
- At the end of that it fires `do_action( 'wpmozo_bna_loaded', $integration )`.
- Code that runs later (Pro initialises at priority 99) checks `did_action( 'wpmozo_bna_loaded' )`.
- A Lite version without the contract has neither the function nor the action, so feature-detect, never assume.

```php
add_action( 'plugins_loaded', function () {
	if ( did_action( 'wpmozo_bna_loaded' ) && wpmozo_bna_integration()->supports( 'shared-js' ) ) {
		// Use the shared editor script.
	}
}, 99 );
```

**Features:**

| Feature | Version | Present when | Since |
|---|---|---|---|
| `integration` | 1 | Always (with the contract) | n.e.x.t |
| `shared-js` | 1 | `build/shared/index.asset.php` exists | n.e.x.t |
| `library` | 1 | Always (with the library code) | n.e.x.t |

`n.e.x.t` is replaced with the real Lite version at release.

**Rules:**
- **Additive only.** A feature's version rises only for backward-compatible additions. A breaking change gets a new feature name; the old one keeps working.
- **Deprecation** is announced with `_deprecated_function()` / `_deprecated_hook()` (PHP) or `wp.deprecated` (JS). Removal needs all of:
  - at least 2 Lite minor releases;
  - at least 6 months;
  - no supported Pro version still using it.
- **Version numbers** drive notices and support statements only. Behaviour is decided by `supports()`. Neither authorises premium content: that is always a server-side check.

## 2. Shared editor script (JS)

**Handle:** `wpmozo-blocks-and-addons-shared`, built from `src/shared/index.js` to `build/shared/index.js`.

**Loading:**
- Registered and enqueued on `enqueue_block_editor_assets` at priority 1, in the head, so it runs before block editor scripts.
- Loaded in every block editor whether or not Lite blocks are disabled in the settings.
- Never loaded on the front end.

**What it provides:**
- `window.WPMozoBNAComponents` and `window.WPMozoBNAUtils`, the same globals the block bundles have always set. They remain the supported names.
- `window.WPMozoBNA`:
  - `contractVersion`, `version`, `features`, printed by PHP;
  - `components` and `utils`, references to the two objects above.

**Add-ons:** when `supports( 'shared-js' )` is true, declare `wpmozo-blocks-and-addons-shared` as a dependency of editor scripts that read these globals. That is Pro task PPL-1.

**Build:**
- `webpack.config.js` extends the default `@wordpress/scripts` config with one extra entry (`shared/index`).
- Block entries are still discovered from `block.json`, and `--blocks-manifest` still writes `build/blocks-manifest.php`.
- No `package.json` change.
- Adding the entry left all 440 existing build files byte-identical (testing.md, LPL-1).
- Size: 52 KB (about 14 KB gzipped). Dependencies:
  - `react`, `react-jsx-runtime`;
  - `wp-block-editor`, `wp-components`, `wp-compose`, `wp-data`, `wp-element`;
  - `wp-i18n`, `wp-preferences`, `wp-primitives`.

## 3. Pattern registry and sources

**When sources are registered:** the registry is built lazily. Only a library REST request triggers it, never front-end or ordinary admin requests. Lite registers its own source (`lite`), then fires:

```php
do_action( 'wpmozo_bna_library_register_sources', $registry ); // Mozo_Bna_Library_Registry
```

**An add-on registers its source** (check `supports( 'library', 1 )` first):

```php
add_action( 'wpmozo_bna_library_register_sources', function ( $registry ) {
	$registry->register_source( 'pro', array(
		'contract'    => 1,                                   // source contract this code was written for
		'label'       => __( 'Pro', 'my-text-domain' ),
		'version'     => MY_PLUGIN_VERSION,                   // part of the analysis cache key
		'path'        => MY_PLUGIN_DIR . 'includes/library/', // folder with catalog.json, patterns/, data/, previews/, media/
		'url'         => MY_PLUGIN_URL . 'includes/library/', // the same folder's URL (development base)
		'access'      => 'pro',                               // 'free' or 'pro'
		'entitlement' => 'my_entitlement_callback',          // required for 'pro'
		'links'       => array( 'license' => admin_url( '…' ) ),
		'categories'  => array( 'woocommerce' => __( 'WooCommerce', 'my-text-domain' ) ),
	) );
} );
```

`register_source()` returns `true` or a `WP_Error`.

**Refusals:**

| Code | When |
|---|---|
| `invalid_id` | The id isn't lowercase letters, digits and hyphens (max 32) |
| `duplicate` | The id is already registered (including `lite`) |
| `contract_unsupported` | The contract is not 1 |
| `invalid_path` | The path is not an existing folder |
| `invalid_url` | No URL |
| `invalid_access` | Access is neither `free` nor `pro` |
| `entitlement_missing` | A `pro` source has no callable entitlement callback |

**Entitlement callback:**
- **Called with:** `array( 'user_id' => int )`.
- **Returns:** `array( 'state' => 'entitled'|'license_inactive'|'license_expired'|'license_revoked', 'manage' => bool )`. Any other key is ignored (an older add-on's `cutoff` included).
- **Called once per request.** Anything else, or an exception, locks the source (`entitlement_unavailable`).
- **Only `entitled` allows inserting** (PL-D34, since 2026-11-19). Every other state locks every pattern of the source, whatever its `published` date; previews stay available. Until 2026-11-18 an expired state with a `cutoff` kept older patterns available; that rule is removed.

**Source folder** (pattern data is JSON and XML, PL-D37, 2026-11-26; no PHP file holds pattern content or metadata):

| File | What |
|---|---|
| `patterns/<slug>/pattern.xml` | Metadata, the file authors edit (schema 1). Checked against `tools/pattern-library/schema/pattern.xsd` (Lite repository). Not read at runtime |
| `catalog.json` | Runtime index of the source's patterns, generated by `tools/pattern-library/compile.php` from every `pattern.xml`. Top level: `schema` (1), `source`, `textdomain`, `generator`, `patterns` (a list). Each entry: the `pattern.xml` fields plus `blocks` (sorted list of every block the content uses) and `content_sha256` |
| `patterns/<slug>/content.json` | Content of every pattern, free and premium (PL-D38): plain JSON, `{ "schema": 1, "id": "<source>/<slug>", "revision": <n>, "content": "<serialized block markup with library tokens>" }`. A web server serves it as a static file; it is as readable as the plugin that ships it |
| `data/media.json`, `links.json`, `icons.json`, `demo-text.json` | Central maps for tokens (same keys and values as before PL-D37) |
| Lite only: `data/categories.json`, `tags.json` | The categories and tags shared by every source |
| `data/strings.php` | Generated by `compile.php`: `__()` calls for every catalog string (titles, descriptions, keywords; in Lite also category and tag labels), so translation tools (`wp i18n make-pot`) find them. Never loaded |
| `previews/<slug>.<revision>.webp`, `previews/<slug>.<revision>-full.webp` | Card thumbnail and large preview |
| `media/<key>.<revision>.webp` | Images used inside content |

Lite's own folder is `includes/library/`. Sources can add categories but never override Lite's.

**Content files are plain JSON for every source (PL-D38, 2026-11-26).** The guarded `content.json.php` that PL-D37 required for premium sources is withdrawn: a leftover `content.json.php` is never read (the pattern then has no content) and `compile.php` refuses it. A bundled content file is as readable as the plugin that ships it (its zip and its folder; a web server serves it as a static file). For a premium source, what controls the patterns is the content route, which checks the user and the source's entitlement on every request; remote delivery of premium content (PL-D35) is planned to replace bundled premium files.

**Where the local source is defined (one place each):**
- the source's folder (`path`) and its URL (`url`): given once, when the source is registered;
- the file names: only in `Mozo_Bna_Library_Registry` (`CATALOG_FILE`, `content_path()`, `map_path()`);
- loading: the catalog in `Mozo_Bna_Library_Registry::load_source_patterns()`, content in `get_content()`, maps in `Mozo_Bna_Library_Resolver::get_map()`, image URLs in `Mozo_Bna_Library_Resolver::asset_url()`.

A later remote source replaces these loading points; the REST routes and responses, the importer and the editor UI stay as they are.

**How the files are read:** `Mozo_Bna_Library_Registry::read_json()` reads a file as text and decodes it; no data file is included or executed. Limits: 1 MB for the catalog and each content file, 256 KB for each map. On every content read the library checks:
- the wrapper's `schema`, `id` and `revision` match the catalog entry (`content_mismatch`);
- the content's SHA-256 matches `content_sha256` (`content_checksum`; for example the content changed without compiling again, or a partial deploy);
- on analysis, the declared `blocks` equal the blocks the content uses (`blocks_mismatch`).

Any of these makes the pattern unavailable (`invalid_content`; the content route answers 422).

**Isolation:** one broken file affects only itself.
- A broken catalog entry skips only that pattern (`missing_title`, `invalid_blocks`, `invalid_checksum`, `duplicate_slug`, …).
- A broken content file makes only its pattern unavailable (`content_invalid_json`, `content_too_large`, …; a missing content file is reported as `wpmozo_library_invalid_content`).
- A broken map fails closed for its tokens (`map_invalid_json`).
- A broken or missing `catalog.json` hides only its own source's patterns (`catalog_invalid_json`, `catalog_missing`, `catalog_mismatch`; reported as item `catalog:<source>`). Every other source keeps working.

All issues are reported in the catalog's `issues`, to administrators only.

**Metadata (`pattern.xml`, schema 1).** Elements, in this order (`?` optional, `*` any number); no DOCTYPE allowed:

| Element | Rule |
|---|---|
| `<pattern schema="1">` | Root element |
| `slug` | Equals the folder name |
| `revision` | Integer ≥ 1; the content wrapper carries the same number |
| `type`? | `section`, `page` or `template` |
| `title` | One line, at most 60 characters |
| `description`? | One line, at most 160 characters |
| `category` | An existing category id |
| `tags`? | One or more `<tag>` |
| `keywords`? | One or more `<keyword>`, each at most 40 characters |
| `access` | `free` or `pro`; must equal the source's |
| `layout`? | `full`, `wide` or `content` |
| `thumbnail` | Attributes `file`, `width`, `height` |
| `preview`? | The same attributes |
| `since` | `x.y` or `x.y.z` |
| `published`? | `YYYY-MM-DD`; information only, never used for access (PL-D34) |
| `order`? | Integer |
| `status`? | `active`, `deprecated` or `hidden` |
| `replaced-by`? | `source/slug` (`replaced_by` in the catalog) |
| `requires` | Contains `wordpress`? and `lite`? (version constraints such as `>=6.8`), `plugin`* (attribute `slug`, text = constraint; only `woocommerce` is recognized at runtime) and `blocks`, with one `<block>` per block the content uses |

- **`compile.php` checks**, besides the schema: the slug equals the folder; access matches the source; the category and tags exist in Lite's maps; the images exist; the content file has the right form for the source and matches the pattern's id and revision; the declared blocks equal the blocks in the content; no old `pattern.php`, `content.php` or PHP map remains. With `--check` it writes nothing and fails when `catalog.json` or `data/strings.php` is out of date.
- **Invalid catalog entries** skip the pattern and are reported in the catalog's `issues` (administrators only).
- **Newer schemas** are counted in `newer_schema` and hidden.
- **Translation:** titles, descriptions and keywords are translated at runtime with the catalog's `textdomain`; Lite's category and tag labels with Lite's domain.

**Tokens in content** (resolved on the server, fail closed):
- **Syntax:** `{{wpmozo:media|link|icon|text:<source>/<key>}}`.
- **Lookup:** each value comes from the source's map file (`data/<map>.json`).
- **Safe values:** a value must match its type's safe character set, so it is valid unchanged in block JSON and HTML.
- **Media URLs** come from the asset resolver: `Mozo_Bna_Library_Resolver::asset_url()` is the only place that builds library asset URLs. A future CDN setting also needs a purpose argument there (previews may move; content images stay local, PL-D03) and the provider seam ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) sections 11 and 12; noted 2026-11-23).

**What the library computes** (never authored):
- id; the blocks used (compared with the declared `blocks`);
- whether the content is valid;
- whether it needs `unfiltered_html` (security.md);
- availability per user (rest-api.md).

The content analysis is cached in a transient per source. The cache key includes the source version and the modification times of each source's `catalog.json` and JSON maps. An entry is reused only while the pattern's revision and its content file's modification time are unchanged.

**Contract version:** the folder format changed under contract 1 (PL-D37). No released Lite has the library, so there is no older format to support. REST routes and responses, the importer, the editor UI, tokens and the maps' values, the validator, and the availability and entitlement rules did not change.

**Rules for sources, learned in the 2026-11-05 audit** ([known-issues.md](known-issues.md)):
- **Map keys are shared contract.** Another source may use Lite's map keys (Pro patterns use Lite icons). Released keys are never removed or renamed; a pattern that needs a key added in a newer Lite declares `requires.lite`.
- **Block attributes follow the same rule:** a pattern that uses a block attribute added in a newer Lite declares `requires.lite`, because the catalog can't see attributes (the importer refuses unknown ones at insert).
- **Contract and schema negotiation:** an add-on that needs a newer source contract or metadata schema checks `supports( 'library', N )` first and otherwise registers with what Lite supports. Pattern metadata is static data compiled into `catalog.json`, so a pattern can't choose its `schema` at runtime. Lite refuses a contract it doesn't know and hides patterns with a newer schema.
- **Entitlement states:** only the four documented states. Anything else locks the source on that Lite version.

## 4. Other Lite surfaces add-ons use (frozen, R4)

Measured in Pro on `release/pattern-lib` (first inventory 2026-11-05 on `362daba`; completed in R4 on 2026-11-06 on `db225e4`). These are **not** versioned by `supports()`, but Pro depends on them, often on the front end, so a change to any of them can break Pro. **Since R4 they are frozen and machine-checked** (PL-D27): no rename, removal or signature change without a deprecation that follows the rules in section 1.

| Surface | Where in Lite | Used by add-ons for |
|---|---|---|
| PHP classes `WPMOZO\BNA\Helpers\Mozo_Bna_Helpers` and `Mozo_Bna_Block_Helpers`: not `final`, not abstract, created with `new` without arguments | `includes/helpers/` | Add-on helper classes extend them; render callbacks and templates create them |
| Static methods `esc_previously()`, `truncate_content()`, `get_block_dynamic_style()`, `get_font_style()`, `get_border_style()`, `get_padding_style()`, `get_margin_style()` | Same | Render callbacks and templates (hundreds of calls) |
| `get_block_dynamic_style( $slug, $attributes )` loading the add-on's `includes/templates/block-<slug>/dynamic-style.php` when `WPMOZO_BNA_PRO_PLUGIN_DIR` is defined, then calling `<slug with underscores>_generate_dynamic_style( $attributes )` | `class-mozo-bna-block-helpers.php` | Pro block styles on the front end (Lite knows the Pro layout) |
| JS components on `window.WPMozoBNAComponents`: `WpmozoTypography`, `WpmozoColorPicker`, `WpmozoDimensions`, `WpmozoSize`, `WpmozoBorder`, `WpmozoMediaUploader`, `WpmozoIconpicker`, `WpmozoAlignment`, `WpmozoColorCombo`, `WpmozoRangeSize`, `WpmozoVideoUploader`, `MozoStates` | `src/common/components/` | Every add-on block's Inspector |
| JS utilities on `window.WPMozoBNAUtils`: `headingLevelsList`, `inspectorPanelTabs`, `convertInlineStyleStr`, `truncateContent`, `getWrapperProps`, `mergeWrapperProps` | `src/common/utils.js` | Add-on block editors |
| Editor object `wpmozo_bna_editor_object` (printed for Lite's editor script), member `placeholderImg`: the URL of `includes/assets/images/placeholder.webp` | `includes/class-mozo-bna-blocks-and-addons-assets.php` | An add-on block's editor and its **saved markup**, which can contain that URL; so the file is permanent, like released media (PL-D03) |
| Script and style handles for Swiper, Isotope, imagesLoaded, Magnific Popup, twbs-pagination, Font Awesome, GSAP, ScrollTrigger, Tippy and Chart.js, and Lite's blocks stylesheet (exact handles in `lib/surface.cjs`). Lite registers them on `init` and is their only owner: add-ons reference them and never register them (PL-D28). The major version of the library behind a handle is part of the freeze: add-on scripts call its API (Pro's charts are written for Chart.js 4) | `includes/class-mozo-bna-blocks-and-addons-assets.php` | Add-on `block.json` asset references |
| Settings actions `wpmozo_bna_settings_tabs`, `wpmozo_bna_settings_tab_content`, and the panel markup an add-on tab uses (`li.wpmozo_bna_panel_menu_item` with `data-href="#<section id>"`, `div.wpmozo_bna_panel_section`, switched by Lite's panel script); filter `wpmozo_bna_add_pro_blocks_to_panel` (the add-on's blocks for the block panel, `slug => label`); option name `WPMOZO_BNA_OPTION` | `includes/admin/panel/` | Add-on settings tabs and block list |
| Block on/off list `WPMOZO_BNA_OPTION['wpmozo_inactive_blocks']` (block slugs, comma-separated). On `init` at priority 50 Lite unregisters every listed `wpmozo/<slug>` block, add-on blocks included, so add-ons register their blocks before that (default priority 10) and have no on/off setting of their own | `wpmozo-blocks-and-addons.php`, `includes/admin/panel/` | Switching add-on blocks on and off (owner decision, 2026-11-06: block on/off stays Lite's) |
| Block `wpmozo/content-wraper` (internal: not in the inserter and never listed in the block panel, so always registered) and its saved markup | `src/blocks/content-wraper/` | Pro's Advanced Tabs Item template inserts it, so saved pages contain it |
| Post types `wpmozoae-team-member`, `wpmozoae-testimonial`; taxonomies `wpmozo-ae-team-member-category`, `wpmozo-ae-testimonial-category`; the post meta Lite's meta boxes write for them (12 team-member and 6 testimonial keys, listed in `lib/surface.cjs`) | `includes/class-mozo-bna-post-types.php`, `includes/admin/` | Add-on team and testimonial blocks |
| **The other direction**, names Lite reads from an add-on: `WPMOZO_BNA_PRO_VERSION` (Lite's settings page then enables the add-on's block switches and shows its tabs), `WPMOZO_BNA_PRO_PLUGIN_DIR` (dynamic-style path), `WPMOZO_BNA_PRO_BASENAME` (Plugins-screen links). Lite also ships its own list of Pro block names for the block panel (`includes/data/pro-blocks.php`); the filter above replaces it | `includes/admin/`, `includes/helpers/` | Lite's settings page and front-end styles of add-on blocks |

**The list is machine-checked:** `tools/pattern-library/tests/lib/surface.cjs` holds the same items, and the `contract` suite ([testing.md](testing.md), R4) fails when:
- Lite stops providing one: at runtime (classes, methods, constants, post types, taxonomies, handles, blocks, block on/off for an add-on block, an add-on's dynamic-style file), in the editor (globals, the editor object, saved markup of `wpmozo/content-wraper`), on the settings page (add-on block switches and tab) or in its source (settings hooks, post meta keys);
- Pro starts using a Lite surface that isn't listed, registers a handle under a Lite name, or stops defining a name Lite reads;
- Pro's editor guard (R2) or start-up helper check (Pro repository) misses a Lite global or helper method Pro uses.

Several of these are built on WordPress `__experimental*` components; see [known-issues.md](known-issues.md) R-02.

### Which surfaces are intended (R4, 2026-11-06)
| Surface | Kind | How it stays stable |
|---|---|---|
| Accessor, `wpmozo_bna_loaded`, features, the source registry, released map keys | **Contract** (designed for add-ons) | Versioned features; additive rules in section 1; the `contract` suite also checks that no add-on pattern misses a Lite map key |
| Shared editor script and the `WPMozoBNAComponents` / `WPMozoBNAUtils` globals | **Intended** (Lite's shared UI layer, exposed as globals from the start) | Listed names frozen; checked in the editor |
| Settings hooks, the block-panel filter and the panel markup of add-on tabs | **Intended** extension points | Frozen; checked in Lite's source and on its settings page |
| Block on/off list for add-on blocks | **Intended:** Lite owns block on/off for every WPMozo block | Frozen (option key, `init` priority 50); checked at runtime and on the settings page |
| Vendor script and style handles, Chart.js included | **Intended** sharing of bundled libraries; Lite is their only owner (PL-D28) | Frozen; checked at runtime; the usage scan fails if Pro registers one |
| Team and testimonial post types, taxonomies and post meta | **Shared data model** of Lite and Pro blocks | Frozen; types and taxonomies checked at runtime, meta keys in the source |
| Helper classes `Mozo_Bna_Helpers`, `Mozo_Bna_Block_Helpers` and their static methods | **Accidental:** internal utilities Pro extends, creates and calls | Frozen and checked (exists, not `final`, can be created without arguments, public static). Pro also checks them at start-up and stays off with a notice if one is missing, instead of failing on every request |
| Lite loading an add-on's `dynamic-style.php` by path and calling its `_generate_dynamic_style()` function | **Accidental:** Lite knows Pro's folder layout | Kept for existing Pro versions; checked in the source and at runtime |
| Editor object `wpmozo_bna_editor_object` (`placeholderImg`) and the placeholder image | **Accidental:** Lite's editor settings, read by an add-on block that also saves the URL | Frozen with the file; checked in the editor (member present, file loads) |
| `wpmozo/content-wraper` | **Accidental:** a Lite-internal block an add-on inserts | Frozen name; can't be switched off; every saved form stays valid and the newest is the current save output (checked in the editor) |
| Names Lite reads from an add-on (`WPMOZO_BNA_PRO_*` constants) | **Accidental** (the other direction) | Pro keeps defining them; checked at runtime |

**Not done, on purpose:** no new interface layer or rename for the accidental surfaces. Their behaviour is already relied on by released Pro versions, so moving them would need the deprecation rules anyway; freezing and testing them protects both plugins without a rewrite. A future version can add a documented replacement (for example a filter for add-on style templates, or a `helpers` feature) and keep the old path working. R4 changed no Lite plugin code.

**Recorded, not changed** (Pattern Library work leaves block issues to a separate developer, PL-D29; [known-issues.md](known-issues.md)): `wpmozo/content-wraper` is kept out of the inserter by naming a parent block that doesn't exist, and since Lite `52a8293` (after 1.8.0, not released yet) its saved markup carries a stray `wrapstyle` attribute. Both saved forms are frozen as they are.
