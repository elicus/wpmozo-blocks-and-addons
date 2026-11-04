# Pattern Library documentation (Lite)

The Pattern Library lets editors browse ready-made sections and insert them into the block editor. Lite (`wpmozo-blocks-and-addons`) owns the library: catalog, REST routes, validation, import and UI. The Pro plugin adds its patterns through a documented contract.

**Status:** in development. Implemented:
- the integration contract (Stage A);
- the server side (Stage C: registry, validator, REST);
- the editor UI, importer, placeholder block and library switch (Stage D).

- authoring tools and the pilot patterns (LPL-T), waiting for the owner's design review.

See [handoff.md](handoff.md).

## Documents

| File | Contents |
|---|---|
| [handoff.md](handoff.md) | Current status, last verified state and the exact next step. Start here |
| [architecture.md](architecture.md) | Components, ownership, data flow |
| [registry-and-contract.md](registry-and-contract.md) | The Lite–add-on integration contract (implemented) and the pattern registry contract (planned) |
| [editor-ui.md](editor-ui.md) | Where the library loads, entry points, the placeholder block, the library switch, the window |
| [import-workflow.md](import-workflow.md) | How a pattern is checked, rebuilt and inserted |
| [pattern-authoring.md](pattern-authoring.md) | Pattern files, tokens, the authoring workflow and tools, replacing a pattern |
| [decisions.md](decisions.md) | Approved decisions, with their reasons |
| [rest-api.md](rest-api.md) | REST routes, responses, status codes, availability reasons |
| [security.md](security.md) | Access rules, validation rules, restricted-HTML handling |
| [compatibility.md](compatibility.md) | WordPress, PHP and Lite/Pro version combinations |
| [testing.md](testing.md) | Test procedure, harness, and recorded results |
| [changelog.md](changelog.md) | Pattern Library changes, newest first |
| [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) | Approved requirement: asset URLs, thumbnails, future CDN |
| [architecture-readiness-review.md](architecture-readiness-review.md) | Historical record of the pre-implementation review (2026-10-31 / 2026-11-03) |

Created by the stage that implements their content:
- Release preparation: `release-and-upgrade.md`.

## Rules for these docs
- This repository is public. Describe protections, never unfixed security issues or private Pro licensing details; those live in the private Pro repository.
- Record facts that were verified, and say how. Mark anything planned as planned.
- Keep one authoritative place per topic and link to it rather than repeating it.
