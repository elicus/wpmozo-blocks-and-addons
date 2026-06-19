# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

WordPress plugin (`WPMozo Blocks and Addons`) that registers ~65 custom Gutenberg blocks under the `wpmozo/*` namespace. Plugin entry: `wpmozo-blocks-and-addons.php`. Lives inside a Local by Flywheel WP install at `wp-content/plugins/wpmozo-blocks-and-addons/`. A separate Pro plugin (detected via `WPMOZO_BNA_PRO_VERSION` / `WPMOZO_BNA_PRO_PLUGIN_DIR`) can layer additional blocks and override dynamic-style templates from this lite plugin.

## Common commands

Toolchain is `@wordpress/scripts`. All commands run from the plugin root.

- `npm run start` — dev build with `--blocks-manifest`, watches `src/` and writes `build/`.
- `npm run build` — production build (also writes `build/blocks-manifest.php`).
- `npm run lint:js` / `npm run lint:css` — wp-scripts linters.
- `npm run format` — wp-scripts formatter.
- `npm run plugin-zip` — build + produce the distributable zip (the committed `wpmozo-blocks-and-addons.zip` is the release artifact).
- `./add-block.sh <block-slug>` — scaffolds a new block under `src/blocks/<block-slug>/` with `block.json`, `edit/save/index/inspector/icon/style/view`. Slug becomes `wpmozo/<block-slug>`. After scaffolding, run `npm run build` (or `start`) so the block is registered.

No test runner is configured.

## Architecture

### Bootstrapping (PHP)

`wpmozo-blocks-and-addons.php` defines `WPMOZO_BNA_*` constants and registers two `init` actions:
1. `create_block_wpmozo_blocks_and_addons_block_init` — iterates `build/blocks-manifest.php` and calls `register_block_type` on every directory under `build/blocks/`.
2. `unregister_block_wpmozo_blocks_and_addons_block_init` (priority 50) — unregisters blocks listed in the plugin option (`WPMOZO_BNA_OPTION` → `wpmozo_inactive_blocks`), the admin panel's per-block enable/disable toggle.

The block category `wpmozo` is added via `block_categories_all`.

`Mozo_Bna_Blocks_And_Addons` (singleton, `includes/class-mozo-bna-blocks-and-addons.php`) is the runtime hub. `run()` loads dependencies, wires hooks, and conditionally loads admin-only classes. Notable static helpers: `get_plugin_options()` (cached `get_option`) and `get_deactivate_blocks()`.

### Asset pipeline

`Mozo_Bna_Blocks_And_Addons_Assets` (`includes/class-mozo-bna-blocks-and-addons-assets.php`) pre-registers shared vendor handles that block.json files reference by handle (not file path) — e.g. `wpmozo-blocks-and-addons-swiper-script`, `-tippy-script`, `-gsap-script`, `-scroll-trigger-script`, `-twentytwenty-script`, `-lottie-script`, `-isotope-script`, `-magnificPopup-script`, `-imagesloaded-script`, `-fontawesome-style`. To use a vendor lib in a new block, list the registered handle in the block's `block.json` `script`/`style` arrays before the `file:./...` entry. `enqueue_block_script_in_footer` rewrites every `wpmozo-*` block script to load in the footer.

`enqueue_block_editor_assets` localizes `wpmozo_bna_editor_object` (placeholder image URL, the FontAwesome icon list from `includes/assets/fonts/fontawesome/fonts.json`, REST URL `wpmozo/v1/save-dynamic-style`, asset URL, theme name, word-count type) onto the editor script — read these via `window.wpmozo_bna_editor_object` on the JS side.

### Block source layout (`src/blocks/<name>/`)

Standard files per block: `block.json`, `index.js` (registers), `edit.js`, `save.js`, `inspector.js`, `icon.js`, `style.js` (editor-side dynamic CSS generator), `editor.scss`, `style.scss`, optional `view.js` (frontend script via `viewScript`), optional `settings/` directory holding inspector subpanels (e.g. `designPanel.js`, `generalPanel.js`).

**Attribute composition pattern.** `index.js` typically merges `metadata.attributes` (from `block.json`) with `advancedAttributes` from `src/common/components/advanced-panel/advancedAttributes.js` (the shared wrapper styling — `wrapBackground`, `wrapPaddingTop`, `wrapBorderRadius`, etc.). When adding wrapper-level styling, extend that shared file rather than redeclaring per block.

**Parent/child blocks.** Composite blocks (e.g. `advanced-button` + `advanced-button-child`, `image-stack` + `image-stack-child`, list/item, slider/item) use `InnerBlocks` with a `TEMPLATE` array in the parent's `edit.js`. Custom appender buttons (see `advanced-button/edit.js`) replace the default block inserter.

**Identifier convention.** Each block stores its Gutenberg `clientId` as an `ID` attribute on first mount (`useEffect`) so dynamic styles can target `#block-${ID}` selectors consistently between editor and frontend.

### Dynamic styles (two systems)

- **Editor-time**: `src/blocks/<name>/style.js` exports a function that returns a CSS string from `attributes`. Used inside the React `edit.js` (often via a `<style>` tag).
- **Frontend (server-rendered blocks only)**: `block.json` declares `"render": "file:./render.php"` and a matching PHP file lives at `includes/templates/block-<name>/dynamic-style.php`, defining `<name with underscores>_generate_dynamic_style($attrs)`. `Mozo_Bna_Block_Helpers::get_block_dynamic_style($module, $attributes)` in `includes/helpers/class-mozo-bna-block-helpers.php` resolves and calls it, **checking the Pro plugin's template path first**, so Pro can override a lite block's frontend CSS. Shared CSS builders on that class: `get_font_style`, `get_padding_style`, `get_margin_style`, `get_border_style` — use them instead of hand-concatenating.

### Common JS utilities

`src/common/utils.js` provides the CSS string builders (`convertInlineStyleStr`, `convertVarStyle`, `wpmozo_parse_style`, `wpmozo_is_empty`, `wpmozo_get_styleAtts`, `mergeWrapperProps`, `getIdByClientid`). Reusable Inspector components live under `src/common/components/` (`wpmozo-typography`, `wpmozo-colorpicker`, `wpmozo-colorcombo`, `wpmozo-border`, `wpmozo-dimensions`, `wpmozo-range-size`, `wpmozo-iconpicker`, `wpmozo-media-uploader`, `wpmozo-video-uploader`, `wpmozo-block-gallery`, `wpmozo-alignment`, `mozo-states`, `advanced-panel`). Prefer these over re-implementing standard Gutenberg controls so attributes follow the existing naming patterns the dynamic-style PHP expects (e.g. `<prefix>FontSize`, `<prefix>border`, `<prefix>padding`).

### Custom post types and admin

`Mozo_Bna_Post_Types` registers `wpmozoae-testimonial` and `wpmozoae-team-member` (block editor disabled for both — they use classic metaboxes from `includes/admin/metaboxes/`). Their REST endpoints are augmented (`rest_prepare_*` filters) so the testimonial/team blocks can fetch enriched data. Team Slider details are loaded via the AJAX action `wpmozo_bna_get_team_detail` (`includes/class-mozo-bna-public.php`), with nonce `wpmozo-team-slider-nonce` localized as `WPMozoTeamSliderData`.

`includes/admin/panel/` powers the top-level admin page (`Mozo_Bna_Panel`) where users toggle blocks on/off. Settings persist to `WPMOZO_BNA_OPTION` via the `wpmozo_bna_panel_save_settings` AJAX action.

### Build output

`build/` is gitignored upstream but committed here. The runtime registers blocks from `build/blocks/<name>/` using `build/blocks-manifest.php`. After source changes, regenerate via `npm run build` — editing files under `build/` directly is overwritten by the next build.

## Coding conventions

- WordPress Coding Standards. `.editorconfig` enforces tabs, LF, UTF-8, trim trailing whitespace.
- Text domain everywhere user-facing: `wpmozo-blocks-and-addons`.
- All new blocks must namespace as `wpmozo/<slug>` and set `"category": "wpmozo"`.
- PHP files guard with `if ( ! defined( 'WPINC' ) ) { die; }` (or `ABSPATH` for the plugin bootstrap).
