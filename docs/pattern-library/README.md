# Pattern Library documentation (Lite)

The Pattern Library lets editors browse ready-made sections and insert them into the block editor. Lite (`wpmozo-blocks-and-addons`) owns the library: catalog, REST routes, validation, import and UI. The Pro plugin adds its patterns through a documented contract.

**Status:** in development. Stage A (integration contract) is implemented; the library itself isn't yet. See [handoff.md](handoff.md).

## Documents

| File | Contents |
|---|---|
| [handoff.md](handoff.md) | Current status, last verified state and the exact next step. Start here |
| [architecture.md](architecture.md) | Components, ownership, data flow |
| [registry-and-contract.md](registry-and-contract.md) | The Lite–add-on integration contract (implemented) and the pattern registry contract (planned) |
| [decisions.md](decisions.md) | Approved decisions, with their reasons |
| [compatibility.md](compatibility.md) | WordPress, PHP and Lite/Pro version combinations |
| [testing.md](testing.md) | Test procedure, harness, and recorded results |
| [changelog.md](changelog.md) | Pattern Library changes, newest first |
| [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) | Approved requirement: asset URLs, thumbnails, future CDN |
| [architecture-readiness-review.md](architecture-readiness-review.md) | Historical record of the pre-implementation review (2026-10-31 / 2026-11-03) |

Created by the stage that implements their content:
- Stage C: `rest-api.md`, `security.md`.
- Stage D: `editor-ui.md`, `import-workflow.md`.
- LPL-T: `pattern-authoring.md`.
- Release preparation: `release-and-upgrade.md`.

## Rules for these docs
- This repository is public. Describe protections, never unfixed security issues or private Pro licensing details; those live in the private Pro repository.
- Record facts that were verified, and say how. Mark anything planned as planned.
- Keep one authoritative place per topic and link to it rather than repeating it.
