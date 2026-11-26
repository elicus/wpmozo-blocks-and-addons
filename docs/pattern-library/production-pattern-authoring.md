# Production pattern authoring guide (Lite and Pro)

How to create, replace and publish Pattern Library patterns, step by step, for both plugins.

**Status:** written on 2026-11-11 from a read-only audit of Lite `0805b47` (`dev/sunil`) and Pro `faf19a3` (`release/pattern-lib`).
- **Verified:** every rule about files, metadata, tokens, validation and URLs was checked by reading the code at those commits. Line numbers refer to those commits; if a line moved, search for the function name.
- **Tested in LPL-T and later suites:** the tools (`export.cjs`, `build-content.php`, `gate.cjs`, `render-art.cjs`) and the test suites, run on the offline test harness, which logs the browser in on its own ([testing.md](testing.md)). `compile.php` is tested by the `formats` suite ([testing.md](testing.md), "JSON/XML pattern data, 2026-11-26").
- **Updated 2026-11-26 for PL-D37:** pattern data is JSON and XML now (sections 0–10 and 12). Line numbers in the registry, the resolver, `class-mozo-bna-library.php` and `build-content.php` refer to the code of that date. The four pilots were converted; authoring a new pattern end to end in this format has not been run yet.
- **Not tested:** anything marked **[Untested]**, mainly the authoring-site setup for a person working in the editor (section 9.1). Try it once before relying on it.

**Markers used in this guide:**
- **[Untested]**: written from the code and the tool documentation, never run as written. Test it once before relying on it.
- **[Developer required]**: needs a PHP or JS change, a Lite release first, or a release decision. Not a content task.

**Related documents:**
- [pattern-authoring.md](pattern-authoring.md): the short reference (files, tokens, tools, quality gate, pilot design tokens and rules).
- [registry-and-contract.md](registry-and-contract.md): the contract (sources, metadata schema 1, tokens).
- [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md): asset URLs and the future CDN.

This guide is the production workflow built on them. If a document and the code disagree, the code wins; correct both documents.

Paths are relative to the `wp-content/plugins/` folder of the WordPress site that holds both checkouts. Setting up such a site, the checkouts and the one local settings file is described in [testing-environment-setup.md](testing-environment-setup.md):
- **Lite** = `wpmozo-blocks-and-addons/`
- **Pro** = `wpmozo-blocks-and-addons-pro/`

---

## 0. Short answer: can you add patterns without touching PHP or JS code?

**Yes, for the normal case.** The engine lists every pattern in the source's `catalog.json`, which `compile.php` builds from every folder in `patterns/`. Nothing hard-codes a pattern slug: no code, test or UI file names the pilot slugs or media keys (checked with `git grep`).

A new pattern is:
- one folder with two **data** files: `pattern.xml` (metadata, which you write) and the content file (generated);
- two preview images;
- optionally, content images plus an entry in the media map;
- a new run of `compile.php`, which updates `catalog.json` and `data/strings.php`.

You never edit the engine, the REST API, the UI or the tests.

Three things are still needed:

1. **Use the tools.** You can't simply drop in hand-made files.
   - The content file (`content.json`, or `content.json.php` for Pro) must be produced by `export.cjs` and then `build-content.php`. Copied editor markup keeps editor IDs and CSS with braces, which the validator rejects. It also keeps site URLs, which the build tool rejects.
   - `catalog.json` and `data/strings.php` must be produced by `compile.php`. The library reads only `catalog.json`, never `pattern.xml`, and refuses content whose checksum doesn't match the catalog.
   - Previews should be captured by `gate.cjs`, which gives exact sizes and names and runs the quality checks. Hand-made previews are accepted technically (section 4) but not recommended.
2. **Set up an authoring site once. [Untested]**
   - The tools need a WordPress **6.8** site (the minimum supported version) with both plugins, a logged-in browser state and, for Pro, an activated licence.
   - The owner's Local site runs **WordPress 7.1.4**. Markup designed there can include attributes that 6.8 doesn't know, so it can fail on 6.8 sites.
   - The pilot was built on an offline test harness that is outside both repositories and exists only on the owner's machine, using a scripted design runner. Until this guide, no document explained how a person sets up an authoring site. Section 9.1 gives the recommended setup; that setup itself isn't tested yet.
3. **A few cases are not "content only". [Developer required]** (section 6.6):
   - a new **category** that a **Pro** pattern needs;
   - a requirement on a plugin other than WooCommerce;
   - a block or block attribute that a released Lite doesn't have yet.

---

## 1. File formats and what each file does

Pattern data is **JSON and XML** (PL-D37, approved and implemented 2026-11-26). No PHP file holds pattern content or metadata. The library never includes or executes a data file: it reads each one as text with `Mozo_Bna_Library_Registry::read_json()`. The PHP format used until then (`pattern.php`, `content.php`, `data/*.php` maps) is gone, and `compile.php` refuses any such file that remains.

| File | Format | Purpose |
|---|---|---|
| `patterns/<slug>/pattern.xml` | XML, schema 1, checked against `tools/pattern-library/schema/pattern.xsd` | Metadata: the file you write and edit (fields in 6.1). Not read at runtime |
| `catalog.json` | JSON, generated by `compile.php` | The runtime index of the source's patterns: the `pattern.xml` fields plus each pattern's `blocks` (every block the content uses) and `content_sha256`. Never edit it by hand |
| `patterns/<slug>/content.json` | JSON wrapper, generated by `build-content.php` | **Lite (free):** `{ "schema": 1, "id": "lite/<slug>", "revision": <n>, "content": "…" }`. `content` is the block markup: normal serialized Gutenberg HTML with `<!-- wp:… -->` comments. Instead of URLs and repeated values, it holds **tokens** such as `{{wpmozo:media:lite/hero-dashboard}}`. Public by design: free content ships in the public zip. Never edit it by hand |
| `patterns/<slug>/content.json.php` | The guard line, then the same JSON wrapper | **Pro (premium):** the first line is exactly `<?php exit; __halt_compiler();`. Never edit it by hand |
| `data/media.json` | JSON object | Media map: key → `{ file, width, height, alt }` for images used inside content |
| Lite `data/links.json`, `icons.json`, `demo-text.json` | JSON objects | Shared values for links, icon classes and repeated demo text. Every source uses them |
| Lite `data/categories.json`, `tags.json` | JSON objects | The category and tag vocabulary (Lite only) |
| `data/strings.php` | PHP, generated by `compile.php` | `__()` calls for every catalog string (titles, descriptions, keywords; in Lite also category and tag labels), so translation tools (`wp i18n make-pot`) find them. Never loaded. Never edit it by hand |
| `previews/*.webp` | WebP images | The card thumbnail and the large preview |
| `media/*.webp` | WebP images | Images that patterns place into pages |

Why this format:
- **Premium content stays protected while it is bundled.** A direct web request to `content.json.php` runs PHP, which stops at the guard line, so the answer is empty; the library reads the file as text and never runs it. A plain `.json` file is served as-is by web servers (verified 2026-11-26 on nginx 1.26.1 in LocalWP, PHP's built-in server and WordPress Playground). So Lite refuses premium content stored as plain `content.json` (issue `content_unprotected`) or without the guard line (`content_unguarded`).
- **One broken file affects only itself.** A broken catalog entry skips its pattern; a broken content file makes its pattern unavailable; a broken map fails closed for its tokens; a broken or missing `catalog.json` hides only its own source's patterns. Each is reported to administrators in the catalog's `issues` ([registry-and-contract.md](registry-and-contract.md) section 3).
- **Catalog and content are checked against each other.** Every content read compares the wrapper's `schema`, `id` and `revision` with the catalog entry (`content_mismatch`) and the content's SHA-256 with `content_sha256` (`content_checksum`). Content changed without compiling again makes the pattern unavailable.
- **Translation:** titles, descriptions and keywords are plain English in `pattern.xml` and translated at runtime with the catalog's `textdomain`. Whether WordPress.org's translation import reads `data/strings.php` is an open decision (owner); expected: it scans PHP files.

Real example, `pattern.xml` of Lite `hero-product-launch` (shortened):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<pattern schema="1">
	<slug>hero-product-launch</slug>
	<revision>1</revision>
	<title>Product launch hero</title>
	<description>Two-column launch hero with a stacked headline, two buttons, a star rating and a product illustration.</description>
	<category>hero</category>
	<tags>
		<tag>light</tag>
		<tag>image-heavy</tag>
	</tags>
	<keywords>
		<keyword>hero</keyword>
		<keyword>launch</keyword>
	</keywords>
	<access>free</access>
	<layout>full</layout>
	<thumbnail file="previews/hero-product-launch.1.webp" width="800" height="600"/>
	<preview file="previews/hero-product-launch.1-full.webp" width="1200" height="677"/>
	<since>1.10.0</since>
	<order>10</order>
	<requires>
		<blocks>
			<block>core/button</block>
			<block>core/buttons</block>
			<!-- … every block the content uses … -->
			<block>wpmozo/star-rating</block>
		</blocks>
	</requires>
</pattern>
```

Real example, `content.json` of the same pattern (shortened):

```json
{
    "schema": 1,
    "id": "lite/hero-product-launch",
    "revision": 1,
    "content": "<!-- wp:group {\"align\":\"full\", …} -->\n<div class=\"wp-block-group alignfull has-background\" …>…<img src=\"{{wpmozo:media:lite/hero-dashboard}}\" alt=\"Analytics dashboard with revenue, …\"/>…\n<!-- /wp:group -->"
}
```

A Pro content file is the same JSON after the line `<?php exit; __halt_compiler();`.

---

## 2. Files to create or update for a new pattern

### Lite (free) pattern, in `wpmozo-blocks-and-addons/includes/library/`

| Action | Path |
|---|---|
| Create | `patterns/<slug>/pattern.xml` |
| Generate (`build-content.php`) | `patterns/<slug>/content.json` |
| Generate (`gate.cjs --previews`) | `previews/<slug>.<revision>.webp` and `previews/<slug>.<revision>-full.webp` |
| Generate (`compile.php`) | `catalog.json` and `data/strings.php` |
| If the pattern has its own images | Add `media/<key>.<revision>.webp`, plus an entry in `data/media.json` |
| Only if needed | A new key in `data/links.json`, `icons.json` or `demo-text.json`; a new category in `data/categories.json`; a new tag in `data/tags.json` |
| Optional, not shipped | The illustration source in `wpmozo-blocks-and-addons/tools/pattern-library/art/<key>.svg` |
| At release | `readme.txt` changelog, `docs/pattern-library/changelog.md`, gate logs in `docs/pattern-library/testing.md` |

### Pro (premium) pattern, in `wpmozo-blocks-and-addons-pro/includes/library/`

| Action | Path |
|---|---|
| Create | `patterns/<slug>/pattern.xml` |
| Generate | `patterns/<slug>/content.json.php` (with the tool from the Lite repository) |
| Generate | `previews/<slug>.<revision>.webp` and `previews/<slug>.<revision>-full.webp` |
| Generate | `catalog.json` and `data/strings.php` (`compile.php` from the Lite repository) |
| If the pattern has its own images | Add `media/<key>.<revision>.webp`, plus an entry in Pro `data/media.json` |
| Shared values | Links, icons and demo text come from **Lite's** maps. A new key there is a Lite change (section 6.6). |
| Optional, not shipped | `wpmozo-blocks-and-addons-pro/tools/pattern-library/art/<key>.svg` |
| Housekeeping | The "Current patterns" line in Pro `includes/library/README.md` |
| At release | Pro `changelog.txt`, Pro `docs/pattern-library/changelog.md` |

You don't need to register anything. Lite's and Pro's PHP classes, the REST routes, the JS UI and the tests stay untouched.

---

## 3. Where each file goes

Both plugins use the same layout inside their library folder:

```
<plugin>/includes/library/
├── catalog.json                 generated index of every pattern (compile.php)
├── patterns/
│   └── <slug>/
│       ├── pattern.xml          metadata (you edit this)
│       └── content.json         block markup with tokens (Pro: content.json.php)
├── previews/
│   ├── <slug>.<revision>.webp        card thumbnail, 800 × 600
│   └── <slug>.<revision>-full.webp   large preview, 1200 px wide
├── media/
│   └── <key>.<revision>.webp    images used inside patterns (permanent once released)
└── data/
    ├── media.json               media map (Lite also has links, icons, demo-text, categories, tags)
    └── strings.php              generated translation strings (compile.php); never loaded
```

Real files today:

| | Lite | Pro |
|---|---|---|
| Patterns | `patterns/hero-product-launch/`, `patterns/pricing-three-plans/` | `patterns/about-process-timeline/`, `patterns/features-cards-results/` |
| Thumbnails | `previews/hero-product-launch.1.webp` (17.6 KB) | `previews/features-cards-results.1.webp` (22.9 KB) |
| Full previews | `previews/hero-product-launch.1-full.webp` (25.5 KB) | `previews/about-process-timeline.1-full.webp` (27.8 KB) |
| Content images | `media/hero-dashboard.1.webp` (1200 × 1000) | `media/tour-plan.1.webp`, `tour-collaborate.1.webp`, `tour-analyze.1.webp` (1200 × 900) |
| Silent `index.php` files | none | in `includes/library/` and in `data/`, `media/`, `patterns/`, `previews/` |

Keep thumbnails and content images apart. A thumbnail is only a picture of the pattern; it never contains pattern content or leads to it (CDN requirement §3).

---

## 4. Image formats, sizes and names

### What the code enforces

| Rule | Where |
|---|---|
| Paths in `pattern.xml` and `data/media.json` are relative to the library folder and must match `^[a-z0-9][a-z0-9_-]*(/[a-z0-9][a-z0-9_.-]*)*\.(webp\|png\|jpe?g\|svg)$`: lowercase only, no spaces, no `..` | `FILE_PATTERN`, `class-mozo-bna-library-registry.php:57`; the `file` type in `schema/pattern.xsd` |
| `thumbnail` is required, with `file`, `width ≥ 1` and `height ≥ 1`; otherwise the pattern is skipped (`invalid_thumbnail`) | `image()`, `class-mozo-bna-library-registry.php:645` |
| `compile.php` refuses a pattern whose `thumbnail` or `preview` file is missing | `tools/pattern-library/lib/compile-catalog.php` |
| `preview` is optional. Without it, the preview window shows the thumbnail | `src/library/components/preview.js:65` |
| At runtime, a missing image file doesn't skip the pattern: the catalog sends an empty URL and the card shows a neutral placeholder drawing | `class-mozo-bna-library-rest.php:279`, `src/library/components/thumbnail.js:26` |
| **Pixel sizes are not checked.** `width` and `height` are taken as written | `image()` |
| A content image URL must be plain characters, no quotes or `&` (`SAFE_VALUE['media']`) | `class-mozo-bna-library-resolver.php:60` |

### What the authoring rules require (use these)

| Image | Format | Size | Name | Budget |
|---|---|---|---|---|
| Card thumbnail | WebP | **800 × 600** (4:3) | `previews/<slug>.<revision>.webp` | ≤ 60 KB (pilot: 16–23 KB) |
| Large preview | WebP | **1200 px wide**, height as captured | `previews/<slug>.<revision>-full.webp` | ≤ 250 KB in the review's plan (pilot: 25–34 KB) |
| Content image | WebP | No documented size. The pilot uses 1200 px wide (1200 × 900, 1200 × 1000) | `media/<key>.<revision>.webp` | No documented budget (pilot: 32–38 KB) |

How `gate.cjs` makes previews (`tools/pattern-library/gate.cjs:420` and `:626–660`):
- It captures the section at 1440 px in the site's active theme.
- **Thumbnail:** the top 4:3 of a tall section, or a short section fitted whole and filled with its own edge colours. Encoded with `cwebp -q 80`.
- **Full preview:** the whole section scaled to 1200 px wide, `cwebp -q 78`.
- The gate prints the full preview's height. Copy it into the `height` attribute of `<preview>` in `pattern.xml`, then compile again.

Naming:
- **Slug:** lowercase letters, digits and single hyphens, at most 64 characters (`ID_PATTERN`, registry line 50 and line 472; the `id` type in `pattern.xsd`). It must equal the folder name and `<slug>` in `pattern.xml`.
- **Media key:** same characters as a slug, because tokens only accept `[a-z0-9]+(-[a-z0-9]+)*` (`TOKEN_PATTERN`, `class-mozo-bna-library-resolver.php:32`).
- **`<revision>`** in a file name is the pattern's (or the image's) revision number. A new picture always gets a new file name, so browsers and a future CDN never show a stale image.

**[Untested]** If you make a thumbnail by hand, for example from a design tool: use a WebP of exactly 800 × 600 named `<slug>.<revision>.webp`, and make sure it shows the real pattern in the default theme. The code accepts it (checked by reading `image()`), but no hand-made thumbnail has been tried. The gate's capture is the reference.

---

## 5. Replacing the pilot (demo) patterns with production designs

### Now, before the first release

None of the four pilots has been released: their `since` values are provisional, and the released Lite 1.8.0 has no library. So no user site can contain them, and you have **no compatibility constraints yet**. Do this:

1. Build the production patterns as new patterns (section 9). New, descriptive slugs are recommended. Reusing a pilot slug at `revision` 1 is technically fine before release, but a new slug avoids confusion with old previews and logs.
2. Delete the pilot files you no longer need. This is allowed only because they were never released.

   | | Lite | Pro |
   |---|---|---|
   | Pattern folders | `includes/library/patterns/hero-product-launch/`, `patterns/pricing-three-plans/` | `includes/library/patterns/about-process-timeline/`, `patterns/features-cards-results/` |
   | Previews | `previews/hero-product-launch.1*.webp`, `previews/pricing-three-plans.1*.webp` | `previews/about-process-timeline.1*.webp`, `previews/features-cards-results.1*.webp` |
   | Media and map entries (only if no production pattern uses them) | `media/hero-dashboard.1.webp` and its `data/media.json` entry | `media/tour-*.1.webp` and their `data/media.json` entries |
   | Art sources (optional) | `tools/pattern-library/art/hero-dashboard.svg` | `tools/pattern-library/art/tour-*.svg` |
   | Docs | "Pilot status" in `docs/pattern-library/pattern-authoring.md` | "Current patterns" in `includes/library/README.md` |

   Check one map entry before deleting it: `demo-primary`, `demo-secondary`, `check`, `compass`, `rocket` and other keys in Lite's links, icons and demo-text maps may be used by your new patterns. **Keep every key that is in use.**

   Then run `compile.php` for each source you changed, so `catalog.json` and `data/strings.php` no longer list the deleted patterns.
3. Keep at least one Lite pattern and one Pro pattern that use map tokens:
   - a Lite pattern with a link, icon or text token;
   - a Pro pattern with a Lite icon, link or text token;
   - a Pro pattern with a Pro media image.

   Some `robustness` checks only run when such patterns exist (`tests/suites/robustness.cjs`, which looks for them with `patternsUsingTokens()`).

### After a pattern has been released (permanent rules)

| Change | What to do | Why (code) |
|---|---|---|
| Copy or layout | **Raise `revision` in `pattern.xml` first**, then re-export, rebuild the content file, compile, recapture previews, point `pattern.xml` at them and compile again (9.3) | New preview file names. `build-content.php` copies the revision into the content file, and a content file whose revision differs from `pattern.xml` is refused. The analysis cache also refreshes when the content file changes (`class-mozo-bna-library.php:195`) |
| A content image | Add `media/<key>.<n+1>.webp` and point the map entry at it. **Never delete or rename a released media file** | Saved pages keep the old URL, which points into the plugin folder |
| A link, icon or demo text | Change the value in Lite's map. Every pattern follows, for future insertions only | `class-mozo-bna-library-resolver.php:174` |
| Thumbnail only | Raise `revision` in `pattern.xml`, rebuild the content file from the same export (it carries the revision), compile, run the gate with `--previews`, point `pattern.xml` at the new files, compile again | The file name carries the revision |
| Retire | `<status>deprecated</status>` (optionally `<replaced-by>pro/<new-slug></replaced-by>`) in `pattern.xml`, then compile. **Never reuse the slug** | Deprecated and hidden patterns leave the catalog (`class-mozo-bna-library-rest.php:117`). `hidden` also makes the content route return 404 (line 204). `replaced_by` is stored but not shown anywhere yet |
| Old previews | Unused once `pattern.xml` points at the new revision. Before any CDN exists they can be removed (a recommendation, not a recorded decision). Once a CDN is used, the retention rule is still open (CDN doc U6) | Nothing in saved pages uses previews |
| `since`, `published` | Never change them after release. `published` is information only: access never depends on it (PL-D34) | `normalise()`, `class-mozo-bna-library-registry.php` |

---

## 6. Metadata, revisions, categories, links and media

### 6.1 `pattern.xml` elements (schema 1)

Checked by `schema/pattern.xsd` and `compile.php` when you compile, and again by `normalise()` (`class-mozo-bna-library-registry.php:512`) when the library reads `catalog.json`. Elements must appear in this order. No DOCTYPE is allowed.

| Element | Required | Rule (at runtime, a broken rule skips the pattern with the code in brackets) |
|---|---|---|
| `<pattern schema="1">` | yes | The root. `schema` is `1` (`invalid_schema`; a higher number is hidden as "needs a newer plugin") |
| `slug` | yes | Same as the folder name (`slug_mismatch`) |
| `revision` | yes | Integer ≥ 1 (`invalid_revision`). The content file carries the same number |
| `type` | no | `section` (default), `page`, `template`. Informational |
| `title` | yes | One line, at most 60 characters (`missing_title`) |
| `description` | no | One line, at most 160 characters. Shown on the card and in the preview |
| `category` | yes | An existing category id (`unknown_category`); `compile.php` checks it against Lite's `data/categories.json` |
| `tags` | no | `<tag>` elements: ids from Lite `data/tags.json`. `compile.php` refuses an unknown tag; at runtime an unknown tag is **dropped silently** |
| `keywords` | no | `<keyword>` elements, search words, each at most 40 characters |
| `access` | yes | `free` in Lite, `pro` in Pro (`access_mismatch`) |
| `layout` | no | `full`, `wide` or `content`. Informational: the UI doesn't use it yet (all pilots use `full`) |
| `thumbnail` | yes | Attributes `file`, `width`, `height` (`invalid_thumbnail`) |
| `preview` | no | The same attributes |
| `since` | yes | `x.y` or `x.y.z`: the first plugin release that ships the pattern (`invalid_since`) |
| `published` | no | `YYYY-MM-DD`: the date of first release; information only, never used for access (PL-D34) |
| `order` | no | Integer; the catalog sorts ascending across Lite and Pro, then by id. Default 1000 (`class-mozo-bna-library-rest.php:136`). Pilots use 10, 20, 30, 40 |
| `status` | no | `active` (default), `deprecated`, `hidden` |
| `replaced-by` | no | `source/slug`; stored only (`replaced_by` in the catalog) |
| `requires` | yes | In this order: `wordpress` (optional, a constraint such as `>=6.8`), `lite` (optional, for example `>=1.10.0`), any number of `<plugin slug="…">constraint</plugin>` (only `woocommerce` is recognized; any other name always counts as missing), then `blocks` (`class-mozo-bna-library.php:291–299`, 376) |
| `requires/blocks` | yes | One `<block>` per block the content uses; `build-content.php` prints the list. It must equal the blocks in the content: `compile.php` refuses a difference, and at runtime it makes the pattern unavailable (`blocks_mismatch`; `invalid_blocks` when the list is empty or malformed) |

Text domains: Lite `wpmozo-blocks-and-addons`; Pro `wpmozo-blocks-and-addons-pro`. `compile.php` writes the source's domain into `catalog.json` (`textdomain`). Write titles, descriptions and keywords in plain English, without `__()`: the library translates them at runtime, and `data/strings.php` lists them for translation tools. Demo content stays English (PL-D10).

### 6.2 Revisions

- **Pattern `revision`** (in `pattern.xml`): start at 1. Raise it whenever what users see changes after release: content, layout or thumbnail. The gate writes previews with the revision in the file name. `build-content.php` copies the revision from `pattern.xml` into the content file, and both `compile.php` and the library refuse a content file whose revision differs, so raise it in `pattern.xml` first and build the content again. The catalog reuses its cached analysis only while both the revision and the content file's modification time are unchanged (`class-mozo-bna-library.php:195`); the cache key also includes each source's `catalog.json` and JSON map modification times. While designing before release, you don't need to raise it for every change: rebuilding the content file and compiling already refreshes the analysis.
- **Media revision** (in the file name only): `media/<key>.<n>.webp`. A changed image gets `n+1`, and the map entry points to it. Released files stay.

### 6.3 Categories

The 9 existing ids are in Lite `includes/library/data/categories.json`:

| Id | Order | Id | Order |
|---|---|---|---|
| `hero` | 10 | `pricing` | 60 |
| `features` | 20 | `call-to-action` | 70 |
| `about` | 30 | `faq` | 80 |
| `testimonials` | 40 | `contact` | 90 |
| `team` | 50 | | |

Labels are translated. Existing categories can never be overridden. A new category for **Lite** patterns is a data edit in that file; then compile Lite again (its `data/strings.php` lists the labels). For a new category that **Pro** patterns need, see 6.6.

### 6.4 Tags

`light`, `dark`, `image-heavy` (Lite `data/tags.json`). A new tag is a data edit there; then compile Lite again.

### 6.5 Tokens and maps (`build-content.php` does the replacing)

| In the design on the authoring site | Becomes in the content | Value from |
|---|---|---|
| An image inserted **by URL** from `…/wp-content/plugins/wpmozo-blocks-and-addons/includes/library/media/<file>` (or `…-pro/…`) | `{{wpmozo:media:lite/<key>}}` / `{{wpmozo:media:pro/<key>}}` | That plugin's `data/media.json` + `asset_url()` |
| A link set to `#wpmozo-link-<key>` | `{{wpmozo:link:lite/<key>}}` | Lite `data/links.json`: `demo-primary` `#`, `demo-secondary` `#`, `demo-contact` `#contact` (`pro-upgrade` is the upsell card's link) |
| An icon whose class is exactly a value in Lite `data/icons.json` | `{{wpmozo:icon:lite/<key>}}` | `check`, `star`, `arrow-right`, `phone`, `email`, `location`, `compass`, `pen-ruler`, `code`, `rocket` |
| The text "Northwind Studio", "Northwind", "hello@example.com", "+1 (555) 010-0100", "123 Example Street, Springfield" | `{{wpmozo:text:lite/<key>}}` | Lite `data/demo-text.json` |

Important:
- **Never upload pattern images to the Media Library.** An image under `/wp-content/uploads/` stops the build ("Site-specific … value left in the content", `build-content.php:163`).
- Before you design with an image, put it in the right `media/` folder and add its map entry. The build matches images by file path (`build-content.php:96`).
- A Lite pattern can't use Pro images: the build only reads Pro's map for `--source=pro`.
- An icon that isn't in the map stays as a literal class. It's allowed, but can't be changed centrally.
- Any other site URL fails the build: `localhost`, `127.0.0.1`, `*.local`, `*.test` or any `/wp-content/` path. After replacing, the build puts the original values back and checks the result equals the export exactly (`build-content.php:167`).

Media map entry format (Pro `data/media.json`):

```json
"tour-plan": {
    "file": "media/tour-plan.1.webp",
    "width": 1200,
    "height": 900,
    "alt": "Project board with to-do, in-progress and done columns and a sprint progress card"
}
```

`alt` here is reference text. The real alt text is the one you type in the Image block, which ends up in the content; the gate fails any image without alt text.

### 6.6 What is NOT a pure content task [Developer required]

Every row below needs a developer, a Lite release first, or a release decision.

| Need | Why | What it takes |
|---|---|---|
| A new category for a **Pro** pattern | Categories come from Lite `data/categories.json`, or from a source's `categories` argument (`register_source()`, registry line 173). A Pro pattern whose category exists only in a newer Lite is skipped as `unknown_category` on sites with an older Lite, and `requires.lite` can't help because the check comes first. `compile.php` checks categories against Lite's `data/categories.json` only | Either release the category in Lite first and set Pro's minimum Lite to that release, or add `'categories'` to Pro's `register_source()` call (a Pro code change in the private repository, plus a `compile.php` change, so a developer task) |
| A new link, icon or text key used by a **Pro** pattern | Lite's maps ship with Lite. On an older Lite the token is unknown and the pattern shows "Lite outdated" | Add the key to Lite's map, release Lite, and give the Pro pattern `<lite>>=<that version></lite>` inside `<requires>` (a release decision) |
| A Lite block attribute or block newer than the released Lite, in a Pro pattern | The importer refuses unknown attributes | `requires.lite`, as above ([registry-and-contract.md](registry-and-contract.md) §3) |
| A required plugin other than WooCommerce | `plugin_available()` only knows `woocommerce` (`class-mozo-bna-library.php:377`) | Lite code change |
| Third-party blocks | Only `core/*` and `wpmozo/*` blocks are allowed (`class-mozo-bna-library-validator.php:297`) | Not supported |
| Fixing a block bug that shows in a design | Block issues are ON HOLD and block folders are off-limits ([decisions.md](decisions.md) PL-D29) | Work around it in the design (the pilot used core Buttons instead of Advanced Button) and record the issue in [known-issues.md](known-issues.md). Block work goes to a separate developer only with the owner's approval |

---

## 7. Engine files: discovery, registration, previews, URLs

| Job | File | Key code |
|---|---|---|
| Load the engine | Lite `includes/class-mozo-bna-blocks-and-addons.php` | `require_once` the 5 library classes (lines 192–196); `Mozo_Bna_Library::instance()->init_hooks()` (line 248) |
| Lite source registration | Lite `includes/library/class-mozo-bna-library.php` | `register_lite_source()` (line 406): path `includes/library/`, URL from `WPMOZO_BNA_INC_DIR_URL`, access `free`; loads categories and tags from `data/categories.json` and `data/tags.json` |
| Add-on hook | same file | `do_action( 'wpmozo_bna_library_register_sources', $registry )` (line 153), only on library REST requests |
| Pro source registration | The private Pro repository | Pro calls `register_source( 'pro', … )` with path and URL `includes/library/`, access `pro` and an entitlement callback. File names and details: Pro `docs/pattern-library/PROJECT_CONTEXT.md` section 3 |
| Pattern discovery | Lite `includes/library/class-mozo-bna-library-registry.php` | `load_source_patterns()` (line 447): reads each source's `catalog.json` with `read_json()` (line 691), then `normalise()` (line 512) and `image()` (line 645) |
| Content read | same file | `get_content()` (line 350): reads `content.json`, or the guarded `content.json.php` for a premium source, and checks the wrapper and `content_sha256` |
| Content validation | Lite `includes/library/class-mozo-bna-library-validator.php` | Limits of 256 KB, 400 blocks and depth 10; denied blocks; no scripts, iframes, forms or event handlers; no `{` `}` in attributes; safe URLs only |
| Analysis cache | `class-mozo-bna-library.php` | `analyse()` (line 190; also compares the declared blocks with the content), `environment()` (line 466): a transient per source, keyed by versions and the times of each source's `catalog.json` and maps |
| Availability and licence lock | `class-mozo-bna-library.php` | `availability()` (line 260), `entitlement()` (line 330) |
| URL building (thumbnails, previews, content images) | Lite `includes/library/class-mozo-bna-library-resolver.php` | `asset_url()` (line 100) = the source's URL + relative path; the only URL builder |
| Token resolution | same file | `resolve_tokens()` (line 143), `token_value()` (line 174); reads the `data/*.json` maps; fails closed on unknown or unsafe values |
| Catalog and content REST | Lite `includes/library/class-mozo-bna-library-rest.php` | `get_catalog()` (line 109), `get_pattern()`, `catalog_item()` (line 279) |
| Editor UI | Lite `src/library/` (built to `build/library/`) | `components/thumbnail.js`, `preview.js`, `pattern-card.js`, `importer.js` |
| Authoring tools (not shipped) | Lite `tools/pattern-library/` | `export.cjs`, `build-content.php`, `compile.php` (with `lib/` and `schema/pattern.xsd`), `gate.cjs`, `render-art.cjs` |

---

## 8. Files you must NEVER change during normal pattern work

| Never touch | Why |
|---|---|
| Lite `includes/library/class-mozo-bna-library*.php` (5 files) | The engine. A change here is a code change with its own review, tests and commit |
| Lite `includes/class-mozo-bna-blocks-and-addons.php` and the admin panel files | Plugin start-up and the library switch |
| Lite `src/library/**` and `build/**` | The editor UI and its build |
| Pro's source registration and its Lite/Pro contract files (listed in Pro `docs/pattern-library/PROJECT_CONTEXT.md` section 3) | Pro's access check and the Lite/Pro contract (security-sensitive) |
| **Any block code:** Lite and Pro `src/blocks/**`, Pro `includes/templates/block-*/`, and either plugin's `build/blocks/**` | Owner rule PL-D29; block issues are ON HOLD |
| Lite `tools/pattern-library/*.cjs`, `build-content.php`, `compile.php`, `lib/**`, `schema/**`, `tests/**` | Shared tools and suites. A failing check is never "fixed" by changing the tool or the test |
| A content file (`content.json`, `content.json.php`), `catalog.json` or `data/strings.php` by hand | Always regenerate them: export and build for content, `compile.php` for the catalog and strings. A hand edit breaks the checksum (`content_checksum`) or is overwritten by the next compile |
| Released `media/*` files and released map keys | Saved pages and other patterns depend on them |
| `package.json`, `.gitignore` | Not without approval |

**Safe to edit as content:**
- `patterns/<slug>/pattern.xml` and new pattern folders (then compile);
- `previews/`;
- new `media/` files;
- Pro `data/media.json` and Lite `data/media.json`;
- Lite `data/links.json`, `icons.json`, `demo-text.json`, `categories.json`, `tags.json`. These add values but never remove or rename released keys. Changing the `pro-upgrade` link is a release decision.

---

## 9. Step-by-step workflow with commands

### 9.1 One-time setup [Untested] (developer help recommended)

Steps 2 and 3 have never been run as written. The pilot used the offline harness instead, which needs neither. Run them once with a developer and record the result in [testing.md](testing.md); then remove the **[Untested]** markers.

1. **Tools on the owner's Mac** (all present on 2026-11-11):
   - Node 22.17;
   - PHP 8.4 CLI, with the DOM extension that `compile.php` needs (present, checked 2026-11-26);
   - `cwebp` (`brew install webp`);
   - Google Chrome;
   - Lite `node_modules`, which has Playwright 1.58.
2. **[Untested] An authoring site on WordPress 6.8.x.** Keep it separate from the 7.1.4 Local site, for example a second Local site.
   - Install the latest 6.8 release (the suites use 6.8.11). In that site's shell, for example:
     ```bash
     wp core update --version=6.8.11 --force
     ```
   - Use the default theme (Twenty Twenty-Five), because thumbnails show the active theme.
   - Install Lite and Pro **under their real folder names** (`wpmozo-blocks-and-addons`, `wpmozo-blocks-and-addons-pro`). The build recognizes content images by those names. Use the repository working trees, through symlinks or a sync, so new `media/` files appear on the site at once.
   - Pattern Library switched on (WPMozo settings). Pro licence activated, for Pro patterns.
3. **[Untested] A logged-in browser state for the tools.** `export.cjs` and `gate.cjs` accept `--storage-state=<file>`, but they have only run on the harness, which logs in on its own. Store the file outside both repositories, because it holds session cookies.
   ```bash
   mkdir -p ~/.wpmozo-authoring
   ```
   From the Lite checkout:
   ```bash
   npx playwright codegen --channel=chrome --save-storage="$HOME/.wpmozo-authoring/auth.json" http://<authoring-site>/wp-admin/
   ```
   Log in in the window that opens, then close it. Redo this when the login expires.
4. **Shortcuts for the commands below** (zsh or bash).
   - Machine-specific values live in one Git-ignored file, `tools/pattern-library/.env`, created from the tracked `.env.example` ([testing-environment-setup.md](testing-environment-setup.md) section 8).
   - Set `WPMOZO_SITE_URL` to the authoring site and `WPMOZO_AUTH_STATE` to the file from step 3. `WPMOZO_PLAYGROUND_CLI` for the suites in 9.2 step 9 comes from the same file.

   In each new terminal, from the Lite checkout:
   ```bash
   set -a; . tools/pattern-library/.env; set +a
   export LITE="$PWD"
   export PRO="${WPMOZO_PRO_REPO:-$(dirname "$PWD")/wpmozo-blocks-and-addons-pro}"
   export SITE="$WPMOZO_SITE_URL"
   export AUTH="$WPMOZO_AUTH_STATE"
   ```

### 9.2 Add a new pattern

Example: a Pro pattern `pro/team-cards-hover`. For Lite, use `--source=lite`, `$LITE/includes/library` and `<access>free</access>`.

1. **Get approval** for the design: the pilot design review (LPL-T) is still open.
2. **Content images, if any.**
   - Save each image as WebP: `$PRO/includes/library/media/team-portrait-1.1.webp`. For an SVG illustration:
     ```bash
     cd "$LITE" && node tools/pattern-library/render-art.cjs "$PRO/tools/pattern-library/art/team-portrait-1.svg" "$PRO/includes/library/media/team-portrait-1.1.webp"
     ```
   - Add an entry to `$PRO/includes/library/data/media.json` with file, width, height and alt.
3. **Design on the authoring site.** Use a new page with **one top-level block**, normally a full-width Group: the gate captures the first block of the page.
   - Insert images **by URL**, for example `http://<authoring-site>/wp-content/plugins/wpmozo-blocks-and-addons-pro/includes/library/media/team-portrait-1.1.webp`, and type alt text.
   - Set links to `#wpmozo-link-demo-primary`, `#wpmozo-link-demo-secondary` or `#wpmozo-link-demo-contact`.
   - Choose icons from the icon map and demo names from the demo-text map.
   - Use core Buttons for calls to action (see the pilot rules in `docs/pattern-library/pattern-authoring.md`).
   - Save, wait about 5 seconds, then save again. Some blocks write attributes when they load.
   - Note the page's post id.
4. **Export.** The tool is tested; using it with `--storage-state` on an authoring site is **[Untested]**:
   ```bash
   cd "$LITE" && node tools/pattern-library/export.cjs "$SITE" <post-id> /tmp/team-cards-hover.html --storage-state="$AUTH"
   ```
5. **Build the content file** (creates the pattern folder and, for Pro, `content.json.php`; for Lite, `content.json`):
   ```bash
   cd "$LITE" && php tools/pattern-library/build-content.php --source=pro --library="$PRO/includes/library" --lite-library="$LITE/includes/library" --slug=team-cards-hover --in=/tmp/team-cards-hover.html
   ```
   It prints the file, the revision, its size, the tokens used and the blocks to declare. On any unmapped image, URL or link key it stops and writes nothing. Without a `pattern.xml` yet, the revision is 1.
6. **Write `pattern.xml`:** copy `$PRO/includes/library/patterns/about-process-timeline/pattern.xml`, then change:
   - `slug`, `title`, `description`, `category`, `tags`, `keywords` and `order`;
   - `revision` to `1`;
   - the thumbnail and preview file names: `previews/team-cards-hover.1.webp`, `previews/team-cards-hover.1-full.webp`;
   - `since` and `published` (provisional until the release);
   - `<requires><blocks>`: the block list that step 5 printed.

   Leave the preview `height` for step 8.
7. **Compile the catalog:**
   ```bash
   cd "$LITE" && php tools/pattern-library/compile.php --source=pro --library="$PRO/includes/library" --lite-library="$LITE/includes/library"
   ```
   It checks every `pattern.xml` of the source and writes `catalog.json` and `data/strings.php`; on any problem it lists them and writes nothing. It refuses a missing thumbnail or preview file, and the gate (step 8) reads the pattern from the compiled catalog. How a **new** pattern gets its first compile before the gate has made its previews is not settled yet: open decision (owner).
8. **Quality gate and previews** (WordPress 6.8 site). The gate is tested; using it with `--storage-state` on an authoring site is **[Untested]**:
   ```bash
   cd "$LITE" && node tools/pattern-library/gate.cjs "$SITE" pro/team-cards-hover --log=/tmp/gate-team-cards-hover-68.json "--previews=lite:$LITE/includes/library/,pro:$PRO/includes/library/" --storage-state="$AUTH"
   ```
   - It writes both previews into `$PRO/includes/library/previews/`.
   - Copy the printed full-preview `height` into `pattern.xml`, then compile again (step 7).
   - Exit code 0 means every check passed; read the log for any failure.
   - Look at both images and the front end yourself: the gate can't judge design quality.
9. **Validate.** First check that the compiled files are up to date, for every source you changed (it writes nothing):
   ```bash
   cd "$LITE" && php tools/pattern-library/compile.php --source=pro --library="$PRO/includes/library" --lite-library="$LITE/includes/library" --check
   ```
   Then the offline suites. They use your working trees, need no login and leave the repositories unchanged.
   ```bash
   cd "$LITE" && node tools/pattern-library/tests/run.cjs formats
   ```
   ```bash
   cd "$LITE" && node tools/pattern-library/tests/run.cjs robustness rest editor --wp=6.8.11 --php=7.4
   ```
   ```bash
   cd "$LITE" && node tools/pattern-library/tests/run.cjs robustness rest editor --wp=7.1.3 --php=8.2
   ```
   - `formats` checks the file forms and that `compile.php --check` passes for Lite and Pro (no site).
   - `editor` runs the gate on every available pattern, on both versions.
   - `robustness` and `rest` check the catalog, roles, the licence lock and the absence of network requests.
   - Run them one at a time. Expect about 20 minutes per WordPress version.
10. **Review the diff**, then commit through the normal process. `catalog.json` and `data/strings.php` are committed with the pattern. Keep pattern files and docs in separate commits, and never commit a block folder:
   ```bash
   git -C "$PRO" status --short
   ```

### 9.3 Replace an existing pattern after release

```bash
# 1. In pattern.xml: raise revision (1 → 2); keep the old preview file names for now
# 2. Edit the design page on the authoring site; export again:
cd "$LITE" && node tools/pattern-library/export.cjs "$SITE" <post-id> /tmp/<slug>.html --storage-state="$AUTH"
# 3. Rebuild the content file (overwrites it; takes revision 2 from pattern.xml):
cd "$LITE" && php tools/pattern-library/build-content.php --source=<lite|pro> --library="<that plugin>/includes/library" --lite-library="$LITE/includes/library" --slug=<slug> --in=/tmp/<slug>.html
# 4. Compile (update <requires><blocks> first if step 3 printed a different list):
cd "$LITE" && php tools/pattern-library/compile.php --source=<lite|pro> --library="<that plugin>/includes/library" --lite-library="$LITE/includes/library"
# 5. Gate with --previews (writes <slug>.2.webp and <slug>.2-full.webp)
# 6. In pattern.xml: change both preview file names to .2 and copy the new height; compile again
# 7. compile.php --check, then the suites as in 9.2 step 9
```

This order follows from the checks (the content file carries the revision, and `compile.php` needs the preview files to exist); it has not been run as written yet.

For an image change: add `media/<key>.2.webp`, change the map entry's `file` in `data/media.json`, keep `media/<key>.1.webp`, then export, build, compile and gate.

---

## 10. Lite (free) and Pro (premium) differences

| | Lite (free) | Pro (premium) |
|---|---|---|
| Folder | `wpmozo-blocks-and-addons/includes/library/` | `wpmozo-blocks-and-addons-pro/includes/library/` |
| `access` | `free` | `pro` |
| Content file | `content.json` (public by design) | `content.json.php`, behind the guard line; a plain `content.json` is refused (`content_unprotected`) |
| `published` | Optional (information only) | Optional (information only), `YYYY-MM-DD`, first release date; never changed |
| `since` | Lite version (pilot: `1.10.0`, provisional) | Pro version (pilot: `1.1.0`, provisional) |
| Text domain | `wpmozo-blocks-and-addons` | `wpmozo-blocks-and-addons-pro` |
| Blocks allowed | Core and **Lite** blocks only; a Pro block would be `block_missing` on free sites | Core, Lite and Pro blocks |
| Content images | Lite `media/` + Lite `data/media.json` | Pro `media/` + Pro `data/media.json` (Lite images also allowed) |
| Links, icons, demo text | Lite maps | Lite maps; a new key needs a Lite release + `requires.lite` |
| New category | Data edit in Lite `data/categories.json` | **[Developer required]** Needs Lite first, or a Pro code change (6.6) |
| Build and compile commands | `--source=lite --library="$LITE/includes/library"` | `--source=pro --library="$PRO/includes/library" --lite-library="$LITE/includes/library"` |
| Authoring site | Lite active (Pro optional) | Lite and Pro active, **licence activated** |
| Who can insert | Users with `edit_posts`. A pattern whose blocks save `<style>` is unavailable to Authors and Contributors, who lack `unfiltered_html`; this is by design (policy D3) and the catalog shows why. Both free pilots are affected ([testing.md](testing.md) LPL-T) | The same rule, plus a licence check on every content request. Without an activated licence, the card shows "locked" and the content request returns 403 with no content. The two Pro pilots save no `<style>`, so Authors can use them |
| Where it ships | WordPress.org (free patterns only, all assets local) | Pro zip (GPL: anyone who has the Pro files has the patterns) |
| Release notes | Lite `readme.txt` + `docs/pattern-library/changelog.md` | Pro `changelog.txt` + `docs/pattern-library/changelog.md` |

---

## 11. Content rules the validator enforces

From `class-mozo-bna-library-validator.php`; breaking one makes the pattern "unavailable".

- **Only `core/*` and `wpmozo/*` blocks.** Never Custom HTML, Classic, Shortcode, reusable blocks or patterns, template parts, legacy widgets, embeds, Post Content, or the library's own placeholder block.
- **No unsafe HTML:** no `<script>`, `<iframe>`, `<form>`, `<object>`, `<embed>`, `<link>`, `<base>` or `<noscript>`, no `on…` event attributes, and no `javascript:`, `data:` or `vbscript:` links. The one exception is `javascript:void(0)`, which WPMozo buttons save.
- **No `{` or `}` in any block attribute** (some blocks print attributes into CSS).
- **URL attributes:** `#…`, `/path`, `http(s)`, `mailto:` and `tel:` only.
- **Size:** at most 256 KB, 400 blocks and 10 levels of nesting.
- **Design rules learned from the pilot** (`pattern-authoring.md`):
  - core Buttons for calls to action;
  - meaningful alt text;
  - check the section on a coloured background, because some decorations sit at `z-index: -1`;
  - test pages without jQuery (the gate does).

---

## 12. Gaps to know before production authoring

1. **No tested authoring site. [Untested]** The pilot used the off-repository harness and a scripted design runner. Section 9.1 is the recommended setup, but nobody has used it in the editor yet. Once it has been run and recorded in [testing.md](testing.md), the process is repeatable for designers.
2. **The Local site is WordPress 7.1.4**, which is not suitable for designing. Use it only for a visual check on the latest version.
3. **Thumbnail pixel sizes are not validated.** A wrong `width` or `height` in `pattern.xml` changes the card's aspect ratio silently. Copy the numbers from the gate's output.
4. **Unknown tags are dropped silently at runtime.** `compile.php` refuses a tag missing from the Lite it compiles against, but a site with an older Lite still drops a newer tag silently.
5. **`replaced_by` and `layout` are not used by the UI yet.**
6. **Pro categories and new Lite map keys** are not pure content work (6.6). **[Developer required]**
7. **The release-diff check (R-05)**, which protects released media and map keys from deletion, is not built. Until it is, check each release diff by hand for deleted `media/` files or removed map keys.
8. **Block issues stay ON HOLD.** If a design hits one, work around it and record it; never fix a block.
9. **First compile of a new pattern.** `compile.php` refuses a missing thumbnail or preview file, while the gate makes the previews and reads the pattern from the compiled catalog (9.2 step 7). How a new pattern gets past this is an open decision (owner).
10. **Release zip contents:** whether the WordPress.org zip should leave out the `pattern.xml` files (they ship today, because the zip packs all of `includes/`; harmless, the metadata is public), and whether WordPress.org's translation import reads `data/strings.php`. Both are open decisions (owner).
11. **Who authors the Stage F production patterns** is still an open decision (owner). They are written in this format, so no conversion step follows.
