# Pattern Library security

Protections built into the library. Content is never trusted because it ships with a plugin: every pattern is validated before it is offered and again before it is delivered (`includes/library/class-mozo-bna-library-validator.php`).

## Access
- **Both REST routes** need a logged-in user with the library capability ([rest-api.md](rest-api.md)).
- **Availability is decided on the server for every request.** The browser's copy of the catalog (ids, access, revisions, dates) is never trusted.
- **Premium patterns:**
  - each premium source supplies a server-side entitlement callback;
  - Lite calls it per request and **fails closed**: a missing callback, an exception or an unknown answer locks the source;
  - a premium source can't be registered without a callback.
- **The catalog** never contains pattern content, licence keys or licence details.
- **Content responses** are `Cache-Control: no-store`.
- **Limits of what server-side checks protect:** plugin files installed on a server can be read by whoever controls that server. These checks protect delivery through the site's endpoints.

## Validation rules (every pattern, every user)
| Rule | Rejects |
|---|---|
| Size | Content over 256 KB, over 400 blocks, or nested deeper than 10 |
| Structure | Content outside blocks (classic content); no blocks at all |
| Block allowlist | Anything outside `core/*` and `wpmozo/*`. Also these core blocks: `html`, `freeform`, `shortcode`, `block` (synced pattern references), `pattern`, `template-part`, `legacy-widget`, `widget-group`, `embed` (and `core-embed/*`), `post-content`, and `navigation` with a `ref`. The library's own placeholder block, `wpmozo/pattern-library`, is also rejected |
| HTML elements | `script`, `iframe`, `frame(set)`, `object`, `embed`, `applet`, `link`, `base`, `form`, `noscript`; `meta` with `http-equiv` (microdata `meta itemprop` is allowed) |
| HTML attributes | Any `on*` event handler. Any attribute value whose scheme is `javascript:`, `vbscript:` or `data:`, checked **after decoding entities and removing whitespace and control characters**, so `jav&#x61;script:` and `java⇥script:` are caught. Exception: the exact no-op `javascript:void(0)` that WPMozo buttons save |
| `<style>` content | `expression(`, `@import`, `javascript:`, `behavior:`, `-moz-binding` |
| Block comment attributes | Braces or `<style>`/`</style>` (could close the block's generated CSS rule); CSS execution tricks; unsafe schemes as above; markup inside a value that fails the HTML rules |
| URL attributes (names ending in `url`, `href`, `link`, `src`) | Anything other than `#…`, a site-relative path, or an `http(s)`, `mailto` or `tel` URL that `esc_url_raw()` leaves unchanged |
| Tokens | Unknown tokens; values outside each token type's safe character set (no quotes, ampersands, angle brackets or braces) |

**Known strictness:** a text attribute that begins with `Data:` (or `javascript:` / `vbscript:`) is rejected, because a URL can't be told apart from text there. Rephrase such text; authors see this at the validity gate, never at insert time.

## Restricted HTML (decision PL-D05)

WordPress filters what users without `unfiltered_html` save:
- **who lacks it:** Authors, Contributors, every multisite user except super admins, and everyone under `DISALLOW_UNFILTERED_HTML`;
- **what it strips:** WPMozo blocks that save a `<style>` element, `<input>` or `<canvas>`, or a non-standard attribute.

Those blocks become invalid after such a save.

**How the library handles it:**
- For each pattern it runs `wp_kses( $content, 'post' )`, the same filter WordPress applies on save.
- It then compares a **structural fingerprint** (blocks and comment attributes, then every tag with its attribute names and decoded values) of the content before and after the filter. Bytes aren't compared: the filter also rewrites harmless formatting such as `/>` to ` />`, which block validation accepts.
- If the fingerprint differs, the pattern is unavailable to users without `unfiltered_html` (reason `role_unfiltered_html`), and the content route refuses it with 403.

**Verified against the real blocks** (testing.md, Stage C):
- The method flags the same 33 of 67 Lite blocks (with default attributes) as saving through the Author filter and reloading.
- One flagged block, Content Wrapper, still validates after the filter (conservative).
- No block that breaks is missed.
