# Pattern Library REST API

Namespace `wpmozo/v1`. Both routes are read-only, implemented in `includes/library/class-mozo-bna-library-rest.php` (Stage C, LPL-2).

## Authentication and permission (both routes)
| Request | Result |
|---|---|
| Not logged in (cookie requests without a valid `X-WP-Nonce` count as not logged in) | `401 rest_forbidden` |
| Logged in without the library capability (default `edit_posts`, filter `wpmozo_bna_library_capability`) | `403 rest_forbidden` |
| Library switched off by an administrator (option `wpmozo_pattern_library` = `off` in the plugin options) | `404 wpmozo_library_disabled` |

The editor calls these routes through `apiFetch`, which sends the REST nonce.

## GET `/wpmozo/v1/library/catalog`

Metadata for every active pattern, with availability for the **current user**. Never contains pattern content or licence data.

```json
{
  "schema": 1,
  "context": {
    "lite": "1.9.0", "contract": 1, "newer_schema": 0, "can_unfiltered_html": true,
    "pro": { "active": false, "version": null, "source": false, "installed": false },
    "links": { "pro_upgrade": "" }
  },
  "sources": [ { "id": "lite", "label": "Free", "access": "free" },
               { "id": "pro", "label": "Pro", "access": "pro", "state": "entitled", "links": {} } ],
  "categories": [ { "id": "hero", "label": "Hero", "count": 3 } ],
  "tags": [ { "id": "light", "label": "Light" } ],
  "patterns": [ {
    "id": "lite/hero-split", "source": "lite", "slug": "hero-split", "type": "section",
    "title": "…", "description": "…", "category": "hero", "tags": [], "keywords": [],
    "access": "free", "revision": 1, "since": "1.10.0", "layout": "", "order": 10,
    "thumbnail": { "url": "…/previews/hero-split.1.webp", "width": 640, "height": 480 },
    "preview": null,
    "blocks": [ "core/group", "wpmozo/fancy-heading" ],
    "availability": { "state": "available", "reasons": [] }
  } ],
  "issues": [ { "item": "lite/broken-one", "code": "missing_title" } ]
}
```

**Fields worth knowing:**
- **`context.pro`** is for messages only and never decides access.
  - `installed` is reported only to users who can activate plugins; otherwise it is `null`.
- **`sources[].state`** is the premium source's entitlement state.
  - `links` (for example the licence page) are included only for users the source says can manage it.
- **`thumbnail.url`** is empty when the file is missing; the UI then shows a placeholder.
- **`issues`** is present only for users with `manage_options`. It lists metadata problems and content that failed validation.
- **`context.newer_schema`** counts patterns hidden because they need a newer plugin version.

**Caching:** `Cache-Control: private, no-cache` plus an `ETag`. A request with a matching `If-None-Match` gets `304` and no body.

**Availability:**

| State | Meaning | Reason codes |
|---|---|---|
| `available` | Can be inserted by this user | — |
| `locked` | Premium source not entitled | `license_inactive`, `license_expired`, `license_revoked`, `entitlement_unavailable` |
| `unavailable` | Can't be used here | `invalid_content`, `block_missing:<name>`, `block_disabled:<name>`, `plugin_missing:<key>`, `lite_outdated`, `wp_outdated`, `role_unfiltered_html` |

A pattern can carry several reasons; `locked` wins over `unavailable`.

## GET `/wpmozo/v1/library/patterns/<source>/<slug>`

`<source>` and `<slug>` are lowercase letters, digits and hyphens. Every check from the catalog is repeated on the server. The content that is sent is validated again, not taken from cache.

| Outcome | Status | Code |
|---|---|---|
| Unknown pattern, or `hidden` | 404 | `wpmozo_library_not_found` |
| Premium source not entitled | 403 | `wpmozo_library_locked` (with `reasons`) |
| User lacks `unfiltered_html` and the pattern needs it | 403 | `wpmozo_library_role` |
| Content failed validation | 422 | `wpmozo_library_invalid` |
| Any other availability reason | 409 | `wpmozo_library_unavailable` (with `reasons`) |
| Success | 200 | — |

Success body: `{ "id", "revision", "blocks": [ … ], "content": "<!-- wp:… -->" }`. Tokens are already resolved. Header: `Cache-Control: no-store`.

`deprecated` patterns are not listed in the catalog but can still be fetched by id.
