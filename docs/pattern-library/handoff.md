# Pattern Library handoff

**Updated:** 2026-11-03.
**Branches:**
- Lite `dev/sunil` → `origin/dev/sunil`;
- Pro `release/pattern-lib` → `origin/release/pattern-lib`.

Pro `dev/ayush` is off-limits.

## Status
| Step | State |
|---|---|
| Baseline decisions | Approved 2026-11-03 ([decisions.md](decisions.md)) |
| Stage A, LPL-1: integration contract + shared editor script | **Done** (tested; see [testing.md](testing.md)) |
| Stage C, LPL-2: registry, resolver, maps, validator, REST | **Done** (tested; see [testing.md](testing.md)). No patterns ship yet; Lite's `media` map is empty until the pilot |
| Pro preparatory task | Done (tracked in the Pro repository) |
| Stage B, PPL-1: Pro adopts the contract | Next on Pro |
| **LPL-UX: UI prototype** | **Built and tested; waiting for owner review.** Code is in the working tree only, not committed (see below) |
| Stage D, LPL-3: UI, importer, placeholder block, entry points, library on/off setting | After LPL-UX approval |
| Stage E, PPL-2: Pro source + entitlement | After PPL-1 |
| LPL-T + pilot (2 free + 2 Pro) | After Stages D and E. **Owner review checkpoint**; no catalog expansion before approval |
| Stage F, X-1, release | Not started |

## Next step: owner review of the LPL-UX prototype

**What was built.** The editor UI as real code in `src/library/` (built to `build/library/`):
- a full-screen `@wordpress/components` modal with category navigation, search, a Free/Pro filter, "Available only", sort, a card grid with "Load more", and a preview pane;
- entry points: a pinned header launcher (`PluginSidebar`) and an "Open Pattern Library" item in the editor's Options menu;
- an importer that parses the pattern, rebuilds each block with `createBlock()` (fresh `ID` for blocks that have one), and inserts everything in one undoable step, with an Undo snackbar;
- loading (skeleton), empty and error states; locked and unavailable patterns with their reason;
- the dismissible Lite-to-Pro card (only when no premium source is registered);
- one stylesheet with `--wpmozo-lib-*` tokens and an RTL copy.

**Differs from the plan.** The plan said "mock catalog data". The prototype uses the real LPL-2 REST routes against a demo catalog (12 free and 6 Pro wireframe patterns) registered by a harness-only test plugin. Insertion is real.

**Not committed.** The enqueue runs only when the `WPMOZO_BNA_LIBRARY_PROTOTYPE` constant is defined, and the code stays uncommitted until the review approves it. Uncommitted files:
- `src/library/`;
- the `library/index` entry in `webpack.config.js`;
- `enqueue_library_editor_script()` in `includes/class-mozo-bna-blocks-and-addons-assets.php`;
- its hook in `includes/class-mozo-bna-blocks-and-addons.php`.

**Checked in the harness** (WordPress 7.1.3 / PHP 8.2, Chrome):
- both entry points open the library, and focus starts on search;
- search, filters, category and sort work; results are announced;
- preview works; Escape returns to the grid; focus goes back to the card;
- insert: valid blocks, tokens resolved, one-step undo/redo, valid after save and reload;
- a Lite block inserted twice gets two unique IDs and renders correctly on the front end;
- states: locked (expired cutoff), unavailable (missing WooCommerce), empty, error with retry;
- the Lite-to-Pro card's placement and dismissal persist;
- layouts at 360, 768 and 1440 px; keyboard order with one tab stop per card action;
- lint clean; 7 Jest tests for search and sort;
- existing block build output byte-identical.

**Questions for the review:**
1. **Entry points.** The header launcher opens a sidebar with one button (two clicks). WordPress adds that sidebar to the Options menu, so the menu lists "Open Pattern Library" and "Pattern Library". Keep both, or another arrangement?
2. **Pro accent colour.** Purple badge and notice; WordPress admin blue for actions.
3. **Thumbnails.** The demo patterns use wireframe placeholder art; real thumbnails arrive with the pilot.
4. **Lite-to-Pro card destination.** Still empty ("Open questions" 1 below).

**After approval:** Stage D (LPL-3) turns the prototype into the shipped UI:
- remove the constant gate;
- add the library on/off setting;
- add the placeholder block;
- write `editor-ui.md` and `import-workflow.md`.

## Open questions (none blocks the prototype)
1. Destination page for the Lite-to-Pro card. Configured in `includes/library/data/links.php` (`pro-upgrade`, empty for now).
2. Who supplies the pilot pattern designs. Needed before LPL-T.

## Known limitations and observations
- `n.e.x.t` in `@since` tags is replaced with the real Lite version at release.
- **Catalog performance** in the WebAssembly harness: 500 patterns take about 0.2–0.35 s warm and 1 s cold (target 0.3 s; native PHP not measured). A generated metadata index is deferred until the real catalog grows.
- **Validator strictness:** a text attribute starting with "Data:" is rejected ([security.md](security.md)).
- **Lite blocks reset their `ID`** to the editor's client ID on every load, so opening a post marks it changed. Existing behaviour; aligning it with Pro's stable-ID approach is a separate block task.
- **Text-domain loader:** Lite registers it on `plugins_loaded` priority 10 from code that itself runs at priority 20. It probably never runs (not verified at runtime; WordPress 6.7+ loads translations just in time). A separate task.
- **Stale REST URL:** the editor receives a `wpmozo/v1/save-dynamic-style` URL for a route Lite doesn't register. The library doesn't use it.

## Release-only items (not implementation blockers)
- Lite requirement headers (real minimum WordPress 6.8);
- the next Lite version and its readme entry;
- replacing `n.e.x.t`;
- a WordPress.org guideline review of the release build;
- Pro release items, tracked in the Pro repository.
