# Requirement: asset URLs, thumbnails and the future CDN switch

| | |
|---|---|
| Status | Approved requirement, 2026-10-31; revised the same day after review. Future-migration addendum approved 2026-11-18 ([section 11](#11-future-cdn-migration-owner-requirement-2026-11-18), PL-D33). The local resolver exists (LPL-2); **the CDN switch, a remote catalog and remote content are not implemented** and are not part of the current implementation phases (PL-D35 brings remote premium content forward to the next stage; section 12). Planning constraint for the Pattern Library. **2026-11-20:** an owner proposal to fetch premium content on Insert has been audited ([section 12](#12-owner-proposal-2026-11-20-premium-content-fetched-on-insert-approved-not-implemented)); approved 2026-11-20 (PL-D35), not implemented. **PL-D36 (2026-11-20):** the remaining remote-delivery work, including the engine parts in section 12, belongs to Ayush and starts only on the owner's approval. Premium patterns keep their bundled content until then. |
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
| U5 | Design of the authenticated route for premium content | Settled for local delivery by PL-D04 and PL-D06 (2026-11-03): the content route authorises every request on the server. Remote delivery: PL-D35 (section 12). PL-2 and PL-3 were the pre-implementation names of those decisions ([architecture-readiness-review.md](architecture-readiness-review.md)) |
| U6 | How long old asset revisions stay online | Tied to the supported-version policy (TBD) |
| U7 | Can images inside inserted content come from the CDN? | **Resolved 2026-11-03: no** (section 6) |
| U8 | Where are the endpoints of an add-on's remote catalog and remote content configured (Lite makes no requests, so most likely in the add-on), and does the central setting in section 1 still cover that source's previews? | Undecided; settled in the CDN stage (added 2026-11-18). Proposed answer (2026-11-20, section 12): in the add-on, which fetches on the server |

## 11. Future CDN migration (owner requirement, 2026-11-18)

**Status:** requirement only (PL-D33). CDN integration comes later, in its own approved stage, **not in the current implementation phases.** PL-D35 (2026-11-20) brings the premium content part forward (section 12): approved, not implemented. Nothing in this section adds code, settings or infrastructure now. It sets the rules that keep the later migration small: ideally a change of CDN base URLs, paths and configuration only.

**Intended experience after the migration**
- Library previews and thumbnails load from the CDN instead of a plugin folder (which sources may do so: U1, U2).
- The pattern catalog (metadata) can come from the CDN.
- Pattern content can be fetched remotely.
- **The editor experience stays the same:** the same Pattern Library window, cards, Preview and Insert, the same REST routes for the editor, the same import path and checks.

**Rules for code written before the migration**
1. **One URL builder.** Library asset URLs come only from `Mozo_Bna_Library_Resolver::asset_url()`. The editor uses the URLs in REST responses and builds none itself. No hard-coded hostnames, absolute URLs or plugin paths in patterns, maps, PHP or JavaScript.
2. **One place per source.** Each source gives its base URL, folder and relative paths once, at registration. Moving to the CDN should change only that configuration (and the central setting in section 1), not library code.
3. **One loading seam.** Pattern metadata and content are read only through the registry's per-source loading (`load_source_patterns()` and `get_content()`). An additive change to the source contract can then let a source supply a remote provider instead of a folder, while the REST routes, availability checks, validator, importer and UI stay as they are. Per PL-D35 the provider joins **contract 1** before Lite's first release with the library (section 12, recommendation 3). A later contract version would be needed only if Lite is released with the library before the seam exists (open decision, owner).
4. **Lite makes no external requests** (PL-D02). A remote catalog and remote content are fetched on the server by the add-on that owns the remote source. Lite only resolves, checks, validates and imports what it receives. Lite's own patterns, JavaScript and CSS stay in the plugin (section 8).
5. **Protected content stays protected.** Premium content is never put on a public CDN path or in any shared cache. Remote delivery of premium content is authenticated, server to server, decided on the server for every request, and sent with `Cache-Control: private, no-store`. Hosting on a CDN never makes premium content public. Previews and public metadata may be public and cacheable (sections 3–5).
6. **Remote failures are their own state.** An unreachable or failing remote source shows a "temporarily unavailable" message, never "locked", and inserts nothing (section 6).

**Known gaps to close in the CDN stage** (verified in code 2026-11-18; not changed now):
- `asset_url()` builds both preview URLs (catalog) and content-image URLs (`media` tokens). A CDN base applied there alone would also move content images, which PL-D03 forbids, so the method first needs to know the purpose (preview or content image).
- Sources are local folders today: `register_source()` requires an existing `path`, and the registry reads each pattern's `pattern.php` and `content.php`. A remote source needs an additive contract change (section 1, compatibility rules): in contract 1 before Lite's first release with the library (PL-D35, section 12), or a later contract version if Lite is released first (open decision, owner).
- The catalog analyses each pattern's content to find its blocks and its restricted-HTML need. For a remote source the content isn't available when the catalog is built, so its metadata has to declare both, and delivery keeps validating the received content as it does today.

**Target design** (Phase 0, 2026-11-18; planned for the CDN stage, **not built now**):

| Part | Today | CDN stage |
|---|---|---|
| URL building | `asset_url( $source, $relative )` for previews and content images | `asset_url( $source, $relative, $purpose )`: `preview` may use a CDN base; `media` (content images) stays local or goes into the Media Library (PL-D03) |
| Source location | A local `path` is required | Additive, in contract 1 before Lite's first library release (PL-D35; a contract 2 only if Lite is released first): a local `path`, or provider callbacks supplied by the add-on (`catalog()`, `content( $slug, $revision )`) plus a preview base URL |
| Catalog analysis | Reads each pattern's content | Remote metadata declares the blocks used and the restricted-HTML need; delivery validates the received content |
| Editor and REST | Two routes; Preview and Insert | Unchanged; one new error, 503 `wpmozo_library_unreachable` ("can't be loaded right now") |
| Network | None | None in Lite; the add-on's provider fetches on the server |
| Lite's own patterns | Bundled | Bundled (U1) |

After this one-time engine change, moving hosts or paths is configuration only. The seams are not built before the CDN stage, because unused interfaces now would be premature infrastructure.

## 12. Owner proposal, 2026-11-20: premium content fetched on Insert (approved; not implemented)

**Ownership (PL-D36, 2026-11-20):**
- **Ayush owns everything in this section,** including the engine parts. That covers the provider, declared metadata, the unreachable state, the media guard, a fresh catalog on every open, the build tools, the `asset_url()` purpose argument, migration and deploy, and the final integration. It starts only on the owner's approval.
- **Until then:** premium patterns keep their bundled content and current behaviour.
- **His handoff:** the private Pro repository's `docs/pattern-library/AYUSH-PATTERN-LIBRARY-HANDOFF.md`.

**Status:** audited, then revised and **approved by the owner on 2026-11-20** (PL-D35). Nothing in Lite is implemented (the add-on's own licence-status check, its Phase 2, is implemented but not live; 2026-11-23); implementation waits for the owner's go-ahead after the open questions are answered. With that approval (PL-D35), the content part of section 11 moves forward from "later" to the next stage, and PL-D33's timing changes; it is not implemented yet. The add-on's licence protocol, the backend contract and the owner decisions are private (Pro repository, `docs/pattern-library/remote-delivery-audit.md`).

**The proposal, in engine terms** (target design; the licence-status check below is the add-on's, not Lite's):
- **Every time the library window opens**, the premium add-on checks its licence status on the server. Nothing is cached or stored between opens.
- **Only a verified active licence allows inserting premium patterns.** An unverified or unknown answer, an error or a timeout means Preview only.
- **On Insert, the add-on downloads the pattern's content on the server.** The remote service checks the licence again for every download.
- **The catalog and previews stay available without an active licence.** The UI, Preview, Insert and the compatibility checks stay as they are.
- **Catalog, cards and previews are available in every licence state.** Protected premium content is delivered only after the remote service verifies the licence.
- **Licence refusals and service errors are told apart by machine-readable codes.** Only a licence refusal shows "locked"; any error, timeout or unreadable reply means "can't be checked or loaded right now".
- **The licence check is separate from plugin update checks.**
- **Image availability is validated at build and release time**, not only by version requirements.
- **Target state:** premium content no longer ships inside the add-on. Until remote delivery works end to end and the owner approves the migration, premium content stays bundled (PL-D36).
- Pattern content is stored as JSON, metadata as XML. Both are kept in the Lite and Pro repositories and deployed unchanged to the CDN.
- PHP holds no pattern content.

**Verified today** (Lite `3aa0cfa`; Lite code unchanged at `6d0a8c9`, 2026-11-23):
- **The editor makes two requests:**
  - **The catalog:** when the window first opens, once per editor load (`src/library/api.js` caches it).
  - **The content of one pattern:** on Insert. The content route checks access again, resolves tokens, validates the exact content and sends it with `no-store`. The browser importer then checks blocks and attributes before inserting.

  The proposal attaches its two server calls to these requests. The window, Preview, Insert, the REST routes and the importer can stay as they are.
- **The editor reuses the first catalog for the whole editor load.** `components/library-modal.js` loads it with `load( false )`, and `api.js` caches the request. A check on every open therefore needs the window to fetch the catalog again each time it opens.
- **A content image is never checked for existence.** The resolver turns a `media` token into a URL if its key is in the map, without checking that the file exists. Thumbnails and previews are checked: a missing file gives a placeholder. The authoring gate (`tools/pattern-library/gate.cjs`) checks that images load, but only on a development site, never on the release zip.
- **Lite asks a source's entitlement callback at most once per request** (`Mozo_Bna_Library::entitlement()`). It fails closed: any unknown answer, exception or missing callback becomes `entitlement_unavailable`, shown as "Pro patterns can't be checked right now." (`src/library/messages.js`).
- **Previews are images** (`previews/<slug>.<rev>.webp`). Previewing never loads content, so users without an entitlement see every catalog card and preview, locked.
- **Pattern files are PHP:** metadata in `pattern.php`, with `__()` titles that `make-pot` extracts; content in `content.php`, a nowdoc behind an `ABSPATH` guard, generated by `tools/pattern-library/build-content.php`; maps in `data/*.php`.
- **A pattern can require only** WooCommerce, a Lite version or a WordPress version. It has no field for the add-on's own version.
- **The catalog learns from the content itself** which blocks a pattern uses and whether it needs `unfiltered_html`.
- **Packaging:** `wp-scripts plugin-zip` packs `includes/**` but not other top-level folders, when `package.json` has no `files` field. This repository has none.

**Recommendations for the engine** (they keep section 11's rules):
1. **Lite makes no external requests** (PL-D02, rule 4). The add-on fetches on the server; Lite resolves, checks, validates and imports what it receives. Lite's free patterns stay bundled (section 8, U1).
2. **The window fetches the catalog on every open,** so the entitlement is decided freshly each time. The existing loading state covers the wait. For a remote source, a failed licence-status check (made by the add-on, never by Lite) gives `entitlement_unavailable`: the catalog still loads, and premium cards stay Preview only.
3. **A source can supply a provider instead of a folder:**
   - `catalog()` returns metadata;
   - `content( slug, revision )` returns the markup or an error: locked, unreachable, not found or invalid.

   No released Lite contains the library, so this can join contract 1 before its first release, instead of a contract 2. For a remote source, the content route runs the compatibility checks and then the provider. It doesn't ask the entitlement callback again, because the remote service checks the licence on every download, and the provider's refusal is the lock.
4. **Provider metadata declares** the blocks used, the restricted-HTML need, the content's media keys, a SHA-256 of the content and a minimum version of the source's own plugin (for the Pro source, the field `requires.pro`). The build generates these fields; nobody types them. After the download, the server checks again that:
   - the id, revision and checksum match;
   - the blocks found are among the declared ones;
   - the kses check passes with the site's own rules.

   The importer keeps its checks too.
5. **File formats (owner direction):**
   - **Content** is a JSON envelope (`schema`, `id`, `revision`, `content`) holding WordPress's serialized block markup, not a block tree.
   - **XML metadata is the source file in the repository** (the owner's direction: content JSON and metadata XML in both repositories). The build checks it against a schema and generates a JSON `catalog.json` plus a strings file for translation. Sites never parse XML at runtime. Reasons:
     - `make-pot` doesn't read XML;
     - PHP's XML extensions may not be on every host;
     - parsing remote XML invites entity-expansion and XXE attacks;
     - the REST API and the editor work in JSON.
   - **Maps, categories and tags** are JSON.
6. **Lite's folder** (everything ships):

   ```
   includes/library/
     catalog.json                    generated index (runtime)
     patterns/<slug>/pattern.xml     metadata (edited)
     patterns/<slug>/content.json    content (generated)
     previews/<slug>.<rev>.webp, <slug>.<rev>-full.webp
     media/<key>.<rev>.webp
     data/categories.json, tags.json, media.json, links.json, icons.json, demo-text.json
     data/strings.php                generated __() calls for make-pot only; never loaded
   ```

   A premium add-on ships only its public parts (index, previews, content media) and keeps its content files outside the release zip.
7. **Failure states:**
   - an unreachable source gives a new 503 `wpmozo_library_unreachable` ("can't be loaded right now"), never "locked";
   - a refused download gives "locked";
   - a missing pattern gives 404;
   - a malformed reply, a checksum mismatch or a validation failure gives 422.

   Nothing partial is inserted.
8. **Caching:** premium content and entitlement answers are never cached (no files, transients or edge caches). Catalog and previews keep today's rules (section 5; ETag and `private, no-cache` on the catalog route).
9. **Content images stay local** (PL-D03). Remote content may use only media that the installed plugins ship; the minimum-version field makes sure of it. Media Library import remains a later option. `asset_url()` still needs its purpose argument (section 11, known gaps).
10. **Image validation at build and release** (blocking; it runs on the built zip and the deploy set):
   - every thumbnail and preview exists;
   - every `media` token in every pattern's content, including content that is not in the zip, has a map key whose file is in the zip;
   - the `requires` versions name releases that contain those images;
   - no released image is removed, renamed or changed in place;
   - formats and sizes follow the agreed rules;
   - a deploy refuses content whose images aren't released.

   Plus a runtime guard: the resolver refuses a `media` token whose file is missing, so the card shows unavailable instead of inserting a broken image.
11. **A pattern that needs a newer plugin** shows as **unavailable** ("update the plugin"), not locked. Locked stays reserved for entitlement.

**Engine tasks** (status 2026-11-23). Every task in this list is **approved (PL-D35), not implemented, and Ayush's (PL-D36); each starts only after the owner approves it:**
1. The provider seam (recommendation 3), in contract 1 before Lite's first release with the library.
2. A fresh catalog on every window open (recommendation 2).
3. Declared metadata (recommendation 4): blocks used, restricted-HTML need, the content's media keys, SHA-256, and the minimum version of the source's own plugin (`requires.pro` for the Pro source).
4. The failure states, including the 503 unreachable state (recommendation 7).
5. The `asset_url()` purpose argument (section 11, known gaps; recommendation 9).
6. JSON content, XML metadata, the compiled JSON catalog and the strings file (recommendations 5 and 6).
7. Image validation at build and release, and the runtime media guard (recommendation 10).
8. "Update the plugin" for a pattern that needs a newer plugin (recommendation 11).

**Open decision (owner), not part of PL-D35:** should Lite accept `entitlement_unavailable` from a source's entitlement callback and keep that callback's `manage` flag, so administrators keep the licence link when the add-on can't check? Today `Mozo_Bna_Library::entitlement()` accepts only `entitled`, `license_inactive`, `license_expired` and `license_revoked`. Any other answer, `entitlement_unavailable` included, becomes `entitlement_unavailable` with `manage` false, so the catalog sends no licence link for that source. A change would be tested in the `entitlement` suite.

**Waiting for:**
- the owner's go-ahead for implementation (the decision table is approved; Pro repository);
- the add-on vendor's backend answers;
- answers on build and release. For Lite:
  - how the WordPress.org zip is built;
  - whether `pattern.xml` ships in it;
  - whether WordPress.org's translation import reads the generated `data/strings.php` **[Assumption: it scans every PHP file]**;
  - whether Lite's public build tools also build the add-on's files;
  - where the image validation runs and whether it blocks a release;
  - the image rules (formats, sizes, alt text).

U8 has a proposed answer: the remote endpoints are configured in the add-on.

## Out of scope now

CDN deployment, remote catalog, remote media, the production switch itself, and CDN hostnames. Section 12 is approved (PL-D35) but not implemented; nothing is built before the owner's go-ahead.

## Related

Pattern Library decisions PL-1 to PL-5 (registration, REST and permissions, Lite/Pro visibility, shared contract, catalog) were the pre-implementation names in [architecture-readiness-review.md](architecture-readiness-review.md) and were **settled in the baseline approved on 2026-11-03** ([decisions.md](decisions.md)): PL-D04 (registration, REST, importer), PL-D06 (premium access), PL-D07 (catalog), PL-D10 (Lite-only promotion), PL-D11 (shared contract). This requirement constrains them.
