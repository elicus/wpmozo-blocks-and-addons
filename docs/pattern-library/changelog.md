# Pattern Library changelog

Newest first. "Unreleased" entries move into `readme.txt` when a Lite release is prepared.

## Unreleased

### Added
- Pilot patterns: Product launch hero and Three pricing plans (free), temporary designs for review. (LPL-T)
- Pattern authoring tools in `tools/pattern-library/` (not shipped): export, content builder, quality gate with preview capture, illustration renderer. (LPL-T)
- Pattern Library editor UI (LPL-UX, LPL-3), in the post editor for users who can edit posts:
  - entry points in the Options menu and a pinnable header launcher;
  - a window with categories, search, Free/Pro and availability filters, sort, previews, and locked or unavailable states with their reasons;
  - insertion as one undoable step with an Undo snackbar; blocks are rebuilt with fresh IDs.
- Pattern Library placeholder block (`wpmozo/pattern-library`): it opens the library and is replaced by the chosen pattern. It saves nothing and renders nothing on the site. Listed in the block on/off panel. (LPL-3)
- A Pattern Library switch on the settings page, default on. (LPL-3)
- Pattern Library server side (LPL-2):
  - a source registry with the `wpmozo_bna_library_register_sources` hook and the `library` contract feature;
  - an asset resolver;
  - central maps (categories, tags, media, links, icons, demo text) with content tokens;
  - a content validator;
  - per-user availability, including the restricted-HTML rule;
  - read-only REST routes `wpmozo/v1/library/catalog` and `wpmozo/v1/library/patterns/<source>/<slug>`.
- The library can be switched off with the `wpmozo_pattern_library` plugin option. (LPL-2; settings switch added in LPL-3)
- Integration contract for add-ons:
  - `wpmozo_bna_integration()` with `version()`, `contract_version()`, `features()` and `supports()`;
  - the `wpmozo_bna_loaded` action.

  (LPL-1)
- Shared editor script `wpmozo-blocks-and-addons-shared`. It sets the global components and utilities used by add-ons in every block editor, even when all Lite blocks are disabled, and exposes `window.WPMozoBNA`. (LPL-1)

### Changed
- Requires WordPress 6.8 and PHP 7.4, the versions the plugin actually needs and was tested on (WordPress below 6.8 registers none of its blocks; PHP 7.3 could not be tested). WordPress refuses to activate it on older versions. (R3)
- The preview note now says the preview uses a default theme and that fonts (not colours) follow the user's theme. (LPL-T)
- Build: `webpack.config.js` adds the shared script entry (LPL-1) and the library entry (LPL-UX). Existing block build output is unchanged.

### Fixed
- One broken pattern, content or map file (from Lite or an add-on) no longer takes the whole library down; only the affected patterns become unavailable, and administrators see the problem in the catalog's issues. (R1)
- The catalog no longer shows a stale state after a Lite or WordPress update, a change to the HTML allowed in posts, or a change to another source's maps. (R1)
- A pattern from another source that needs a Lite map key the installed Lite lacks now says it needs a newer WPMozo Blocks, instead of "can't be used right now". (R1)
- The catalog and the content route now always give the same answer: the content route analyses the pattern afresh and updates the catalog's cache. (R1)
- Patterns authored on WordPress 6.8 were refused on 7.1 because core blocks moved some attributes into deprecations. The importer now accepts attributes that a block's deprecations declare. (LPL-T)
- In the library window, patterns below the first rows couldn't be reached with the mouse wheel (the layout grew past the window), on WordPress 6.8 and 7.1. The grid now scrolls inside the window. (LPL-3)
- With every Lite block disabled, Pro blocks failed in the editor because the shared globals were missing. Fixed from the Lite side. (LPL-1)
