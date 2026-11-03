# Pattern Library changelog

Newest first. "Unreleased" entries move into `readme.txt` when a Lite release is prepared.

## Unreleased

### Added
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
- Build: `webpack.config.js` adds the shared script entry (LPL-1) and the library entry (LPL-UX). Existing block build output is unchanged.

### Fixed
- With every Lite block disabled, Pro blocks failed in the editor because the shared globals were missing. Fixed from the Lite side. (LPL-1)
