# Integration contract and pattern registry

Lite (`wpmozo-blocks-and-addons`) owns this contract. Add-ons, currently WPMozo Blocks and Addons Pro, use only what is documented here, never internal classes or globals that are not listed.

| Part | Status |
|---|---|
| 1. Integration contract (PHP) | **Implemented** (Stage A, LPL-1) |
| 2. Shared editor script (JS) | **Implemented** (Stage A, LPL-1) |
| 3. Pattern registry | Planned (Stage C, LPL-2) |

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
| `library` | 1 | Planned, Stage C | — |

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

## 3. Pattern registry (planned, Stage C)

Planned design, from the approved architecture (readiness review, sections A2–A5). Not implemented yet.

- **Sources:**
  - `do_action( 'wpmozo_bna_library_register_sources', $registry )` fires lazily, only when a library request needs it.
  - An add-on calls `$registry->register_source( $id, $args )`, passing:
    - `contract`;
    - `label`, `version`;
    - `path`, `url` (its own base);
    - `access`;
    - a server-side `entitlement` callback;
    - `links`;
    - optional `categories`.
- **Fail closed:** Lite refuses a source that claims premium access without a working entitlement callback.
- **Contents:** an add-on supplies data and one callback only; no UI, routes or JS for the library.
- **Advertising:** the `library` feature is advertised only once this exists.
