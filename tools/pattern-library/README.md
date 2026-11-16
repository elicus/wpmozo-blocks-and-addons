# Pattern Library authoring tools

Development tools for authoring Pattern Library patterns. They are not part of the plugin: release zips contain only `build/`, `includes/`, the main plugin file and the readme.

| Tool | What it does |
|---|---|
| `export.cjs` | Exports a designed page from a development site as pattern markup (blocks rebuilt, editor IDs removed) |
| `build-content.php` | Turns exported markup into `patterns/<slug>/content.php`, replacing site URLs and demo values with library tokens |
| `gate.cjs` | Runs the quality gate on a development site and captures the thumbnail and preview images |
| `render-art.cjs` | Renders an SVG illustration in `art/` to a WebP content image |
| `art/` | Sources of the original illustrations used in Lite patterns |
| `.env.example` | Template for the one local settings file, `.env` (Git-ignored): the Playground CLI, the test site URL and other machine-specific values for these tools and the suites |

The full procedure, file layout and replacement instructions are in [`docs/pattern-library/pattern-authoring.md`](../../docs/pattern-library/pattern-authoring.md). The step-by-step production workflow with exact commands (Lite and Pro) is in [`docs/pattern-library/production-pattern-authoring.md`](../../docs/pattern-library/production-pattern-authoring.md). Setting up a machine (test site, builds, `.env`, suites) is in [`docs/pattern-library/testing-environment-setup.md`](../../docs/pattern-library/testing-environment-setup.md).
