# Pattern Library changelog

Newest first. "Unreleased" entries move into `readme.txt` when a Lite release is prepared.

## Unreleased

### Added
- Pattern Library server side (LPL-2):
  - a source registry with the `wpmozo_bna_library_register_sources` hook and the `library` contract feature;
  - an asset resolver;
  - central maps (categories, tags, media, links, icons, demo text) with content tokens;
  - a content validator;
  - per-user availability, including the restricted-HTML rule;
  - read-only REST routes `wpmozo/v1/library/catalog` and `wpmozo/v1/library/patterns/<source>/<slug>`.
- The library can be switched off with the `wpmozo_pattern_library` plugin option (settings UI follows in Stage D). (LPL-2)
- Integration contract for add-ons:
  - `wpmozo_bna_integration()` with `version()`, `contract_version()`, `features()` and `supports()`;
  - the `wpmozo_bna_loaded` action.

  (LPL-1)
- Shared editor script `wpmozo-blocks-and-addons-shared`. It sets the global components and utilities used by add-ons in every block editor, even when all Lite blocks are disabled, and exposes `window.WPMozoBNA`. (LPL-1)

### Changed
- Build: `webpack.config.js` adds the shared script entry. Block build output is unchanged. (LPL-1)

### Fixed
- With every Lite block disabled, Pro blocks failed in the editor because the shared globals were missing. Fixed from the Lite side. (LPL-1)
