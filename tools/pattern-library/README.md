# Pattern Library authoring tools

Development tools for authoring Pattern Library patterns. They are not part of the plugin: release zips contain only `build/`, `includes/`, the main plugin file and the readme.

| Tool | What it does |
|---|---|
| `export.cjs` | Exports a designed page from a development site as pattern markup (blocks rebuilt, editor IDs removed) |
| `build-content.php` | Turns exported markup into the pattern's content file, replacing site URLs and demo values with library tokens (from the `data/*.json` maps): `patterns/<slug>/content.json` for a free source, or `content.json.php` (behind the guard line) for a premium one. Takes the revision from the pattern's `pattern.xml` and prints the blocks to declare there |
| `compile.php` | Checks every `patterns/<slug>/pattern.xml` of a source (schema, folder, access, categories and tags, images, content file form, id and revision, declared blocks, no old PHP data files) and writes the source's `catalog.json` and `data/strings.php`. `--check` writes nothing and fails when they are out of date: run it before every commit and release |
| `schema/pattern.xsd` | The XML schema of `pattern.xml` (schema 1) |
| `lib/` | Shared rules for the tools: `library-files.php` (file names, the guard line, JSON reading and writing) and `compile-catalog.php` (the compiler) |
| `gate.cjs` | Runs the quality gate on a development site and captures the thumbnail and preview images |
| `render-art.cjs` | Renders an SVG illustration in `art/` to a WebP content image |
| `art/` | Sources of the original illustrations used in Lite patterns |
| `.env.example` | Template for the one local settings file, `.env` (Git-ignored): the Playground CLI, the test site URL and other machine-specific values for these tools and the suites |

Pattern data is JSON and XML (decision PL-D37, 2026-11-26): authors edit `pattern.xml`; the library reads only the compiled `catalog.json`, the content files and the JSON maps. `build-content.php` and `compile.php` need PHP CLI; `compile.php` also needs its DOM extension. The suites don't need PHP CLI.

The full procedure, file layout and replacement instructions are in [`docs/pattern-library/pattern-authoring.md`](../../docs/pattern-library/pattern-authoring.md). The step-by-step production workflow with exact commands (Lite and Pro) is in [`docs/pattern-library/production-pattern-authoring.md`](../../docs/pattern-library/production-pattern-authoring.md). Setting up a machine (test site, builds, `.env`, suites) is in [`docs/pattern-library/testing-environment-setup.md`](../../docs/pattern-library/testing-environment-setup.md).
