# Pattern Library architecture

Approved design: [decisions.md](decisions.md) (PL-D04). Full reasoning: [architecture-readiness-review.md](architecture-readiness-review.md), sections A and D–F. This page shows the structure and what is implemented so far.

## Components

| Component | Owner | Where | Status |
|---|---|---|---|
| Integration contract (`wpmozo_bna_integration()`, `wpmozo_bna_loaded`) | Lite | `includes/class-mozo-bna-integration.php`, `includes/mozo-bna-integration-functions.php` | **Implemented** (LPL-1) |
| Shared editor script (`wpmozo-blocks-and-addons-shared`) | Lite | `src/shared/index.js` → `build/shared/` | **Implemented** (LPL-1) |
| Source registry, asset resolver, central maps | Lite | `includes/library/` | Planned (LPL-2) |
| Validator and REST routes (`wpmozo/v1/library/*`) | Lite | `includes/library/` | Planned (LPL-2) |
| Library UI, importer, entry points, placeholder block | Lite | `src/library/`, `src/blocks/pattern-library/` | Planned (LPL-UX, LPL-3) |
| Free patterns, shared demo media | Lite | `includes/library/patterns/`, `media/` | Planned (LPL-T, LPL-4) |
| Pro source registration and entitlement callback | Pro | Pro repository | Planned (PPL-2) |
| Pro patterns | Pro | Pro repository | Planned (PPL-3) |

Everything shipped lives under `build/` or `includes/`; release zips contain only those, the main PHP file and the readme.

## Data flow (planned)

```
Editor (Lite UI) ──GET /wpmozo/v1/library/catalog──▶ Lite REST ──▶ registry (sources: lite, pro…)
                                                                   metadata only, availability per user
Editor ──GET /wpmozo/v1/library/patterns/<source>/<slug>──▶ Lite REST
          capability + availability + source's entitlement callback (server-side, every request)
          ──▶ validated content with tokens resolved ──▶ client rebuilds blocks ──▶ one insert action
```

## Principles
- **Lite works alone.** Pro adds a source; nothing in Lite depends on Pro files or classes.
- **Feature detection over version numbers** ([registry-and-contract.md](registry-and-contract.md)).
- **Nothing on the front end.** The library loads only in the block editor and on library REST requests.
- **Content is never trusted because it is ours:** it is validated on the server and checked again in the editor before insertion.
- **Replaceable values live in one place each:** URLs, media, icons, demo text, categories and design tokens (review section E).
- **Local-first:** no external requests ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md)).
