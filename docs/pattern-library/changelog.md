# Pattern Library changelog

Newest first. "Unreleased" entries move into `readme.txt` when a Lite release is prepared.

## Unreleased

### Added
- Integration contract for add-ons:
  - `wpmozo_bna_integration()` with `version()`, `contract_version()`, `features()` and `supports()`;
  - the `wpmozo_bna_loaded` action.

  (LPL-1)
- Shared editor script `wpmozo-blocks-and-addons-shared`. It sets the global components and utilities used by add-ons in every block editor, even when all Lite blocks are disabled, and exposes `window.WPMozoBNA`. (LPL-1)

### Changed
- Build: `webpack.config.js` adds the shared script entry. Block build output is unchanged. (LPL-1)

### Fixed
- With every Lite block disabled, Pro blocks failed in the editor because the shared globals were missing. Fixed from the Lite side. (LPL-1)
