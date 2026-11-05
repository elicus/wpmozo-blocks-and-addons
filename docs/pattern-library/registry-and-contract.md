# Integration contract and pattern registry

Lite (`wpmozo-blocks-and-addons`) owns this contract. Add-ons, currently WPMozo Blocks and Addons Pro, use only what is documented here, never internal classes or globals that are not listed.

| Part | Status |
|---|---|
| 1. Integration contract (PHP) | **Implemented** (Stage A, LPL-1) |
| 2. Shared editor script (JS) | **Implemented** (Stage A, LPL-1) |
| 3. Pattern registry and sources | **Implemented** (Stage C, LPL-2) |
| 4. Other Lite surfaces add-ons use | **Inventory** (2026-11-05); not yet versioned |

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
		'path'        => MY_PLUGIN_DIR . 'includes/library/', // folder with patterns/, data/, previews/, media/
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
- **Returns:** `array( 'state' => 'entitled'|'license_inactive'|'license_expired'|'license_revoked', 'cutoff' => 'YYYY-MM-DD'|null, 'manage' => bool )`.
- **Called once per request.** Anything else, or an exception, locks the source (`entitlement_unavailable`).
- **Expired licences:** with `license_expired` and a `cutoff`, patterns whose `published` date is on or before the cutoff stay available.

**Source folder:**

```
patterns/<slug>/pattern.php    metadata (schema 1), returns an array
patterns/<slug>/content.php    block markup, returns a string (use a nowdoc); file starts with an ABSPATH guard
previews/<slug>.<revision>.webp
media/<key>.<revision>.webp
data/media.php, links.php, icons.php, demo-text.php   central maps for tokens
```

Lite's own folder is `includes/library/`. Its central maps also hold the categories and tags shared by every source (`data/categories.php`, `data/tags.php`). Sources can add categories but never override them.

**Metadata, schema 1:**
- **Required:** `schema`, `slug` (equals the folder name), `revision`, `title`, `category`, `access` (must equal the source's), `thumbnail { file, width, height }`, `since`. `published` is also required for `pro`.
- **Optional:** `description`, `tags`, `keywords`, `preview`, `requires { plugins, lite, wp }`, `layout`, `order`, `status` (`active`/`deprecated`/`hidden`), `replaced_by`, `type`.
- **Invalid metadata** skips the pattern and is reported in the catalog's `issues` (administrators only).
- **Newer schemas** are counted in `newer_schema` and hidden.

**Tokens in content** (resolved on the server, fail closed):
- **Syntax:** `{{wpmozo:media|link|icon|text:<source>/<key>}}`.
- **Lookup:** each value comes from the source's map file.
- **Safe values:** a value must match its type's safe character set, so it is valid unchanged in block JSON and HTML.
- **Media URLs** come from the asset resolver: `Mozo_Bna_Library_Resolver::asset_url()` is the only place that builds library asset URLs, and the future CDN setting changes only that method.

**What the library computes** (never authored):
- id, blocks used;
- whether the content is valid;
- whether it needs `unfiltered_html` (security.md);
- availability per user (rest-api.md).

The content analysis is cached in a transient per source. The cache key includes the source version and the modification times of the central maps. An entry is reused only while the pattern's revision and its `content.php` modification time are unchanged.

**Rules for sources, learned in the 2026-11-05 audit** ([known-issues.md](known-issues.md)):
- **Map keys are shared contract.** Another source may use Lite's map keys (Pro patterns use Lite icons). Released keys are never removed or renamed; a pattern that needs a key added in a newer Lite declares `requires.lite`.
- **Block attributes follow the same rule:** a pattern that uses a block attribute added in a newer Lite declares `requires.lite`, because the catalog can't see attributes (the importer refuses unknown ones at insert).
- **Contract and schema negotiation:** an add-on that needs a newer source contract or metadata schema checks `supports( 'library', N )` first and otherwise registers with what Lite supports. `pattern.php` is PHP, so it can choose its `schema` the same way. Lite refuses a contract it doesn't know and hides patterns with a newer schema.
- **Entitlement states:** only the four documented states. Anything else locks the source on that Lite version.

## 4. Other Lite surfaces add-ons use (inventory, 2026-11-05)

Measured in Pro on `release/pattern-lib` (`362daba`). These are **not** versioned by `supports()` yet, but Pro depends on them, often on the front end, so a change to any of them can break Pro. Until the contract covers them (roadmap stage R4), treat them as frozen: no rename, removal or signature change without a deprecation that follows the rules in section 1.

| Surface | Where in Lite | Used by add-ons for |
|---|---|---|
| PHP classes `WPMOZO\BNA\Helpers\Mozo_Bna_Helpers` and `Mozo_Bna_Block_Helpers` (not `final`) | `includes/helpers/` | Add-on helper classes extend them; templates create them |
| Static methods `esc_previously()`, `truncate_content()`, `get_block_dynamic_style()`, `get_font_style()`, `get_border_style()`, `get_padding_style()`, `get_margin_style()` | Same | Render callbacks and templates (hundreds of calls) |
| `get_block_dynamic_style()` loading the add-on's `includes/templates/block-<slug>/dynamic-style.php` when `WPMOZO_BNA_PRO_PLUGIN_DIR` is defined | `class-mozo-bna-block-helpers.php` | Pro block styles on the front end (Lite knows the Pro layout) |
| JS components on `window.WPMozoBNAComponents`: `WpmozoTypography`, `WpmozoColorPicker`, `WpmozoDimensions`, `WpmozoSize`, `WpmozoBorder`, `WpmozoMediaUploader`, `WpmozoIconpicker`, `WpmozoAlignment`, `WpmozoColorCombo`, `WpmozoRangeSize`, `WpmozoVideoUploader`, `MozoStates` | `src/common/components/` | Every add-on block's Inspector |
| JS utilities on `window.WPMozoBNAUtils`: `headingLevelsList`, `inspectorPanelTabs`, `convertInlineStyleStr`, `truncateContent`, `getWrapperProps`, `mergeWrapperProps` | `src/common/utils.js` | Add-on block editors |
| Script and style handles for Swiper, Isotope, imagesLoaded, Magnific Popup, twbs-pagination and Font Awesome | `includes/class-mozo-bna-blocks-and-addons-assets.php` | Add-on `block.json` asset references |
| Settings hooks `wpmozo_bna_settings_tabs`, `wpmozo_bna_settings_tab_content`, `wpmozo_bna_add_pro_blocks_to_panel`; option name `WPMOZO_BNA_OPTION` | `includes/admin/panel/` | Add-on settings tabs and block list |
| Post type `wpmozoae-team-member` | `includes/class-mozo-bna-post-types.php` | Add-on team blocks |

Several of these are built on WordPress `__experimental*` components; see [known-issues.md](known-issues.md) R-02.

