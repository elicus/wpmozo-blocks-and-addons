# Pattern Library editor UI

Implemented in Stage D (LPL-3) from the prototype approved on 2026-11-03 (LPL-UX, [decisions.md](decisions.md) PL-D17). Code: `src/library/` (built to `build/library/`) and the placeholder block in `src/blocks/pattern-library/`. Inserting is described in [import-workflow.md](import-workflow.md).

## Where it loads
`Mozo_Bna_Blocks_And_Addons_Assets::enqueue_library_editor_script()` loads the library only when all of these hold:
- the screen is the post editor (`get_current_screen()->base === 'post'`);
- the user has the library capability (`edit_posts` by default; filter `wpmozo_bna_library_capability`);
- the library switch is on.

So the library does not load:
- in the Site Editor, the widgets editor or the Customizer (support there is a later decision, D8);
- on the front end.

The library adds one script and one stylesheet with an RTL copy (measured in the 2026-11-03 build):

| File | Size | Gzipped |
|---|---|---|
| `build/library/index.js` | 27.8 KB | 8.5 KB |
| `build/library/style-index.css` | 10.2 KB | 2.2 KB |

Nothing is requested from the server until the library opens.

## Entry points
All three open the same window through the `wpmozo/library` data store (`open( target )`).

| Entry point | What the user sees | API |
|---|---|---|
| Options menu | "Open Pattern Library" | `PluginMoreMenuItem` |
| Header launcher | A pinned "Pattern Library" icon. It opens a sidebar with an "Open Pattern Library" button. WordPress also lists that sidebar in the Options menu as "Pattern Library" (kept, PL-D17) | `PluginSidebar` |
| Placeholder block | A "Pattern Library" block in the inserter. Its button opens the library, and the chosen pattern replaces the block | Block `wpmozo/pattern-library` |

No markup is injected into the editor's DOM. Every entry point is a public API.

## Placeholder block (`wpmozo/pattern-library`)
Decision PL-D15.

**Saved content.** It saves `<!-- wp:wpmozo/pattern-library /-->` and renders nothing on the front end. Users can save it unused, so it must stay supported in every future version.

**Registration.** It is always registered, so a saved placeholder never shows as an unsupported block. It is hidden from the inserter in `block.json`. The library script shows it there:
- it adds a `blocks.registerBlockType` filter that sets `supports.inserter` to true;
- it calls `reapplyBlockTypeFilters()`.

So the block appears only where the library loads. If the editor lacks `reapplyBlockTypeFilters()` and the block registered first, it stays hidden. It fails safe.

**What it shows:**
- where the library loads: "Choose a ready-made section. It replaces this block." and an **Open Pattern Library** button;
- elsewhere (switch off, no permission, other editors): "The Pattern Library isn’t available here. This block shows nothing on your site, so you can remove it." There is no button.

**Opening.** Inserting the block doesn't open the library by itself; the user clicks the button. A pattern inserted from there replaces the placeholder in one undoable step.

**On/off.** It is listed in the settings page's block on/off panel as "Pattern Library". Turning it off unregisters the block. The library stays available from the Options menu and the header launcher.

**Inside patterns.** Pattern content may not contain it: the validator rejects it ([security.md](security.md)).

## Library switch
- **Where:** Settings page (Blocks and Addons → General), a **Pattern Library** switch above the block list. Default on.
- **Stored:** as `wpmozo_pattern_library` (`on` or `off`) in the existing plugin option. A missing key means on. Nothing else is stored.
- **When off:**
  - the editor script doesn't load;
  - the placeholder is hidden from the inserter, and saved placeholders explain themselves;
  - the library REST routes return 404 `wpmozo_library_disabled`;
  - content already inserted is never changed.
- **Saving:** the panel's Save button saves it. The panel script (`panel.min.js`) has no source in this repository, so `includes/admin/assets/js/panel-library.js` adds the switch to the panel's existing save request with `jQuery.ajaxPrefilter` (PL-D16). `Mozo_Bna_Panel::save_options()` is unchanged.
- **Accessibility:** a real checkbox, visually hidden but focusable, with a visible focus ring on the switch. Its label and description are linked (`aria-describedby`). Space toggles it.

## The library window
- **Window:** a `Modal` (`size="fill"`); full screen below 782 px.
- **Navigation:** categories with counts on the left; a select on small screens.
- **Toolbar:** search, a Free/Pro filter, "Available only", and sort (Recommended, Newest, A–Z). Search runs on the client over the catalog metadata (`src/library/search.js`).
- **Grid:** 24 cards at a time, more on scroll, plus a "Load more" button for keyboard users.
- **Card:**
  - thumbnail, title, category and a Pro badge;
  - for locked or unavailable patterns, the state and its reason, as text and an icon;
  - **Preview**, plus **Insert** when available.
- **Preview:**
  - large image, description, category, blocks used;
  - an availability box;
  - **Insert**, or **Manage licence** for locked Pro patterns;
  - a note that colours and fonts follow the theme;
  - previous and next.
- **States:** a skeleton while loading, an empty state with a reset, and an error with a retry.
- **Lite-to-Pro card:**
  - shown once, after the free patterns, only when no premium source is registered;
  - dismissible; the dismissal is stored in core preferences (`wpmozo/library` → `upsellDismissed`);
  - its link is the `pro-upgrade` entry in `includes/library/data/links.php`. It is empty for now, so the card has no link (open question in [handoff.md](handoff.md)).
  - If Pro is installed but inactive, or active without a library source, the card says so instead.
- **Licence wording:** patterns are locked or available. The UI never says a licence is "valid".

## Accessibility (verified in the harness with Chrome; not tested with a screen reader)
- Focus:
  - opening the library puts focus in the search field;
  - closing returns focus to the control that opened it;
  - Escape in the preview returns to the grid and to the card.
- One tab stop per card action. The thumbnail is a mouse shortcut, hidden from assistive technology.
- Result counts and changes are announced with `speak()`.
- State is shown with text and an icon, never with colour alone.
- The skeleton animation stops under `prefers-reduced-motion`.

## Responsive
Checked at 360, 768 and 1440 px: the grid, the preview and the placeholder block.

## Styling
`@wordpress/components`, plus project tokens (`--wpmozo-lib-*`) defined on `.wpmozo-library` and `.wpmozo-library-launcher` in `src/library/style.scss`. The Pro accent is purple; actions use the WordPress admin blue (PL-D17).

## Strings
- All strings use the `wpmozo-blocks-and-addons` text domain.
- Script translations are registered with `wp_set_script_translations()`; the placeholder block's come from its `block.json` text domain.
- Demo pattern text is English (PL-D10).

## Files
| File | Role |
|---|---|
| `src/library/index.js` | Plugin registration: Options menu item, header launcher, window, placeholder inserter filter |
| `src/library/store.js` | `wpmozo/library` store: open/close and the insertion target |
| `src/library/api.js` | Catalog (cached for the editor session) and content requests |
| `src/library/search.js` | Search, filters and sort (unit-tested) |
| `src/library/importer.js` | Checks, rebuild and insertion ([import-workflow.md](import-workflow.md)) |
| `src/library/messages.js` | Reason and error messages |
| `src/library/components/` | Window, grid, card, preview, navigation, toolbar, states, Lite-to-Pro card |
| `src/blocks/pattern-library/` | Placeholder block |
| `includes/admin/panel/partials/general.php`, `includes/admin/assets/{js,css}/panel-library.*` | Library switch on the settings page |
