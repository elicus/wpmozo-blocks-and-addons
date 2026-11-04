# Pattern Library authoring tools

Development tools for authoring Pattern Library patterns. They are not part of the plugin: release zips contain only `build/`, `includes/`, the main plugin file and the readme.

| Tool | What it does |
|---|---|
| `export.cjs` | Exports a designed page from a development site as pattern markup (blocks rebuilt, editor IDs removed) |
| `build-content.php` | Turns exported markup into `patterns/<slug>/content.php`, replacing site URLs and demo values with library tokens |
| `gate.cjs` | Runs the quality gate on a development site and captures the thumbnail and preview images |
| `render-art.cjs` | Renders an SVG illustration in `art/` to a WebP content image |
| `art/` | Sources of the original illustrations used in Lite patterns |

The full procedure, file layout and replacement instructions are in [`docs/pattern-library/pattern-authoring.md`](../../docs/pattern-library/pattern-authoring.md).
