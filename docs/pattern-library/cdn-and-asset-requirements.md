# Requirement: asset URLs, thumbnails and the future CDN switch

| | |
|---|---|
| Status | Approved requirement, 2026-10-31; revised the same day after review. **Not implemented.** Planning constraint for the Pattern Library. |
| Applies to | Pattern Library in Lite (`wpmozo-blocks-and-addons`) and Pro (`wpmozo-blocks-and-addons-pro`) |
| Ownership | Lite owns the asset-resolution contract, the production CDN setting and the pattern registry. Pro registers its patterns and assets through Lite. |

This file is the authoritative record of this requirement. Other notes (developer memory, task files, the Pro repository) only point here.

## Goal

Once the Pattern Library and the production infrastructure exist, moving from local development assets to the production CDN should need only a change to one central setting in Lite, not a code rewrite. Where that is not possible or not permitted, the exception is listed in this file (see [WordPress.org and privacy](#8-wordpressorg-and-privacy-rules) and [Unresolved decisions](#10-unresolved-decisions)).

## 1. Asset-resolution contract (owned by Lite)

Every Pattern Library asset URL is produced by one resolver in Lite from two inputs: a **source** (`lite` or `pro`) and a **relative path** (for example `previews/hero-split.3.webp`). No other code builds asset URLs.

- **Development:** each source resolves from its own plugin's URL. Lite assets resolve from the Lite plugin URL; Pro assets resolve from the Pro plugin URL. Each plugin supplies its own base when it registers its source. One shared local base is not assumed (the two plugins live in different folders).
- **Production:** one central setting in Lite holds the CDN base URL. When it is active for a source, URLs take the form `<CDN base>/<source>/<relative path>`. Which sources it may apply to is limited by section 8.
- **Pro:** supplies only its source identifier and relative paths. Pro never hard-codes CDN hostnames or absolute asset URLs and never builds asset URLs itself.
- **Compatibility across independent releases:**
  - A Lite version without the Pattern Library has no resolver. Pro detects that, registers nothing, and its blocks keep working.
  - A Lite version with the resolver but without an active production setting resolves every source to its local plugin URL.
  - A missing, empty or unreachable production setting never makes Lite or Pro fail; URLs fall back to the local plugin URLs.
  - The contract only grows by adding optional parameters; existing calls keep their meaning.

## 2. Pattern metadata

Each pattern definition holds its metadata apart from the code that renders the library or imports patterns: title, category, Lite/Pro availability, thumbnail path (relative), and a reference to its content (source and pattern id). Changing a thumbnail changes only the thumbnail path in the definition, never the pattern content.

## 3. Thumbnails and pattern content are separate resources

- A thumbnail is a public preview image only.
- Pattern content (block markup) is a separate resource. It is never embedded in a thumbnail or any other public asset.
- A thumbnail URL never exposes, embeds or leads to pattern content, premium or free.
- Thumbnails are project-owned, original files. No third-party or temporary external image URLs.

## 4. Premium pattern content protection

- Pro pattern content is delivered only after server-side authorisation and entitlement checks (for example a REST endpoint that checks the user's capability and the Pro entitlement before returning content).
- Premium content is never stored as a directly downloadable static file (for example `.json` or `.html`) inside a publicly reachable plugin folder. Pattern definitions use a protected delivery architecture, for example PHP files that output nothing when requested directly, read only by the server.
- What this protects: delivery through the site's endpoints and any future remote route, so a user without entitlement cannot fetch premium content by calling them directly.
- What it does not protect: Pro is GPL software. Files already installed on a customer's server can be read by whoever controls that server. No DRM or source-code secrecy is promised.

## 5. Versioning, immutability, caching and rollback

- Every published asset path is immutable. A path is never reused for different content.
- A changed asset gets a new versioned path (for example a higher revision in the file name).
- A published path stays available for as long as any supported Lite or Pro version references it.
- All production CDN delivery uses HTTPS.
- Cache lifetime: versioned assets are cached long-term (for example `Cache-Control: public, max-age=31536000, immutable`). Anything without a version in its path, if ever needed, gets a short lifetime. Exact values are set with the CDN provider.
- Purge: used only to remove an asset that must stop being public (for example a legal or security problem), never to replace a file in place; a fix is published under a new path.
- Rollback: switching the central setting back restores local URLs. This only works while the plugins keep shipping the corresponding local assets, so local copies stay in the plugins until a separate decision removes them.

## 6. Failure behaviour and local fallback

- **Thumbnail fails to load:** show a placeholder image; the Pattern Library interface keeps working.
- **Pattern content fails to load or validate:** show a clear error message and insert nothing; never insert incomplete or invalid content.
- **Local fallback:** where a source's assets ship locally, the local copies remain the fallback.
- **Unaffected by CDN outages:** existing blocks, saved content and front-end rendering never depend on the CDN or the Pattern Library.
- **Images inside inserted content never come from the CDN** (approved 2026-11-03, decision PL-D03 / U7). Library thumbnails and previews may move to the CDN in future. Images that a pattern places into a page are local, project-owned files, because they become saved content. Importing them into the Media Library is a later, separate option.

## 7. Local-first now

The current implementation makes no CDN requests and uses no remote catalog or remote media. Adding any of these needs a separate approval.

## 8. WordPress.org and privacy rules

Checked on 2026-10-31 against the official [Detailed Plugin Guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/) (page last updated 2026-03-11) and [Common issues](https://developer.wordpress.org/plugins/wordpress-org/common-issues/) (last updated 2026-03-20). Lite is distributed on WordPress.org; Pro is not.

What the official pages say, summarised:

- **Guideline 6 (Software as a Service):** an external service is allowed only if it provides functionality of substance and is clearly documented in the readme. A service that only validates licences, or code moved out of the plugin so that it appears to be a service, is not allowed.
- **Guideline 7 (no tracking without consent):** a plugin may not contact external servers without explicit and authorised consent (usually an opt-in by registering with the service or a checkbox in the plugin settings). Its examples of prohibited tracking include offloading assets, images included, that are unrelated to a service. Services are the exception: consent is given by installing, activating, registering and configuring a plugin that uses them.
- **Guideline 8 (no executable code via third parties):** JavaScript and CSS that are not part of a service must be included locally; third-party CDNs are only allowed for fonts.
- **Common issues, "Calling files remotely":** images from the plugin author's own domain should be included in the plugin; exceptions are allowed only when the plugin performs a service, judged case by case, and the readme must explain the service, the servers called and whether an account is needed.
- **Common issues, "Undocumented 3rd party":** any external service must be disclosed in plain language in the readme, with when it is used, a link to the service and links to its terms and privacy policy, even when the author runs the service.

Requirements that follow:

1. **Lite JavaScript and CSS always ship in the plugin.** Never from a CDN.
2. **Lite's own assets (the `lite` source) ship locally in the WordPress.org plugin.** A readme disclosure alone does not make loading them from a CDN acceptable. In our reading of the pages above, a default-off opt-in checkbox on its own does not either, because the exception depends on the plugin performing a service.
3. **Any future external pattern service in Lite** must provide real functionality (Guideline 6), contact external servers only after explicit, informed, default-off consent (Guideline 7), and be documented in the readme as described above. Acceptance is decided by the WordPress.org review team case by case, so it is an open question until confirmed (see section 10).
4. **Pro** is not bound by the WordPress.org guidelines, but any external contact it causes (including CDN thumbnails) is disclosed to customers: what is sent (for example the visitor's IP address and browser details), to which service, and why.

## 9. Production prerequisites

Changing a URL alone does not make production ready. Before any switch, all of these are in place and verified:

- The CDN holds the matching files at the same relative paths and revisions, over HTTPS.
- Published paths stay available, unchanged, for every supported Lite and Pro version that references them.
- Cache headers and the purge procedure from section 5 are configured.
- CORS is configured for any asset that scripts read (plain `<img>` thumbnails do not need it).
- Premium content has an authenticated delivery route with server-side entitlement checks; no public URL serves Pro content.
- The content schema version served is supported by the installed Lite and Pro versions.
- The supported Lite/Pro version combinations for the new configuration are documented and tested.
- The failure behaviour in section 6 is tested with the CDN unreachable.
- The WordPress.org and privacy requirements in section 8 are met, including the readme and privacy disclosures.

Until these are verified, production readiness must not be claimed.

## 10. Unresolved decisions

| # | Question | Current assumption |
|---|---|---|
| U1 | May Lite's own assets ever be served from the CDN in the WordPress.org build? | No; they ship locally |
| U2 | May Lite (a WordPress.org plugin) output CDN URLs for Pro-registered assets when Pro is active, and under which consent and disclosure model? | Unresolved; needs a guideline review, possibly a question to the WordPress.org plugin review team |
| U3 | Does the production setting switch all eligible sources at once, or each source separately? | Undecided |
| U4 | Exact cache lifetimes and purge tooling | Depends on the CDN provider (TBD) |
| U5 | Design of the authenticated route for premium content | Part of decisions PL-2 and PL-3 |
| U6 | How long old asset revisions stay online | Tied to the supported-version policy (TBD) |
| U7 | Can images inside inserted content come from the CDN? | **Resolved 2026-11-03: no** (section 6) |

## Out of scope now

CDN deployment, remote catalog, remote media, the production switch itself, and CDN hostnames.

## Related

Pattern Library decisions PL-1 to PL-5 (registration, REST and permissions, Lite/Pro visibility, shared contract, catalog) are still open. This requirement constrains them.
