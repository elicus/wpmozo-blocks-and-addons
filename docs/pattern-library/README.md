# Pattern Library documentation (Lite)

The Pattern Library lets editors browse ready-made sections and insert them into the block editor. Lite (`wpmozo-blocks-and-addons`) owns the library: catalog, REST routes, validation, import and UI. The Pro plugin adds its patterns through a documented contract.

**Start every task with [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)**, then [handoff.md](handoff.md).

**Status:** in development. Implemented:
- the integration contract (Stage A);
- the server side (Stage C: registry, validator, REST);
- the editor UI, importer, placeholder block and library switch (Stage D).

- authoring tools and the pilot patterns (LPL-T), waiting for the owner's design review;
- a compatibility audit (2026-11-05) with a proposed roadmap, waiting for the owner's approval.

See [handoff.md](handoff.md).

## Documents

| File | Contents |
|---|---|
| [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | Overview of the whole project and the start rule. Read first |
| [handoff.md](handoff.md) | Current status, last verified state and the exact next step |
| [architecture.md](architecture.md) | Components, ownership, data flow |
| [registry-and-contract.md](registry-and-contract.md) | The Lite–add-on integration contract (implemented) and the pattern registry contract (planned) |
| [editor-ui.md](editor-ui.md) | Where the library loads, entry points, the placeholder block, the library switch, the window |
| [import-workflow.md](import-workflow.md) | How a pattern is checked, rebuilt and inserted |
| [pattern-authoring.md](pattern-authoring.md) | Pattern files, tokens, the authoring workflow and tools, replacing a pattern |
| [decisions.md](decisions.md) | Approved decisions, with their reasons |
| [rest-api.md](rest-api.md) | REST routes, responses, status codes, availability reasons |
| [security.md](security.md) | Access rules, validation rules, restricted-HTML handling |
| [compatibility.md](compatibility.md) | WordPress, PHP and Lite/Pro version combinations |
| [testing.md](testing.md) | Test procedure, harness, recorded results and the automated-test plan |
| [roadmap.md](roadmap.md) | Completed, pending and deferred work, with dependencies and acceptance criteria |
| [known-issues.md](known-issues.md) | Confirmed issues and potential risks |
| [changelog.md](changelog.md) | Pattern Library changes, newest first |
| [cdn-and-asset-requirements.md](cdn-and-asset-requirements.md) | Approved requirement: asset URLs, thumbnails, future CDN |
| [architecture-readiness-review.md](architecture-readiness-review.md) | Historical record of the pre-implementation review (2026-10-31 / 2026-11-03) |

Created by the stage that implements their content:
- Release preparation: `release-and-upgrade.md`.

## Rules for these docs
- This repository is public. Describe protections, never unfixed security issues or private Pro licensing details; those live in the private Pro repository.
- Record facts that were verified, and say how. Mark anything planned as planned.
- Keep one authoritative place per topic and link to it rather than repeating it.
- Never silently overwrite a decision: a changed decision gets a new entry naming the one it replaces.
- Record the versions a result was measured on, never assumed ones.
- Update handoff.md at every milestone, and PROJECT_CONTEXT.md when scope, architecture, requirements or status change.
