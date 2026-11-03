# Import workflow

How a pattern gets from the library into the post. Client: `src/library/importer.js` and `components/library-modal.js`. Server: the content route in [rest-api.md](rest-api.md). Design basis: readiness review section A7.

## Steps

### 1. Fetch
`GET /wpmozo/v1/library/patterns/<source>/<slug>`, sent when the user clicks **Insert**.

On every request, the server:
- re-checks the capability, the pattern's availability and, for premium sources, the source's entitlement callback;
- validates the content;
- resolves the tokens.

The response is sent with `Cache-Control: no-store`. A refused request returns its reason, and the UI shows it ([rest-api.md](rest-api.md)).

### 2. Parse
- The client parses the markup with `parse()` from `@wordpress/blocks`.
- It also checks the raw attributes: an attribute that the installed block doesn't know means the pattern needs a newer block plugin.
- `lock`, `metadata`, `className`, `style`, `align` and `anchor` are accepted on every block.

### 3. Check every block (recursively)
| Problem | Code |
|---|---|
| Missing block name, `core/missing` or classic content | `unsupported:<name>` |
| Block not registered (for example disabled by an administrator) | `missing:<name>` |
| Block invalid after deprecations | `invalid:<name>` |
| Attribute unknown to the installed block | `unknown_attribute:<name>.<attribute>` |
| No blocks at all | `empty` |

Any problem stops the import before anything changes.

### 4. Rebuild
- Every block is rebuilt with `createBlock( name, attributes, innerBlocks )`. This regenerates the saved HTML from the attributes and gives new client IDs.
- For blocks whose schema has an `ID` attribute (the WPMozo CSS scope), `ID` is set to the new block's client ID. Inserting the same pattern twice, or into two posts, never shares an ID.

### 5. Choose the target (`resolveTarget()`)
1. The placeholder block the library was opened from: it is replaced.
2. Otherwise, after the selected block, in the same parent.
3. Otherwise, the end of the post.

`canInsertBlockType()` is checked for every top-level block at the target, so template locks and allowed-block rules are respected (`not_allowed:<name>`).

### 6. Insert
- One `replaceBlocks()` (placeholder) or `insertBlocks()` call: one undo step.
- The library closes.
- A snackbar confirms the insertion and offers **Undo**, which calls the editor's undo.

### 7. On failure
Nothing is inserted, and the library shows a specific message:

| Cause | Message |
|---|---|
| `missing` / `unsupported` | Nothing was inserted: the “<block>” block isn’t available in this editor. |
| `not_allowed` | Nothing was inserted: this pattern can’t be placed here. Select another spot and try again. |
| `unknown_attribute` | Nothing was inserted: this pattern needs a newer version of a block plugin. |
| Other check failures | Nothing was inserted: the pattern didn’t pass the editor’s checks. |
| Server refusal (locked, role, unavailable…) | The reason text for that code, as on the card |
| Network or other error | Nothing was inserted: the pattern couldn’t be loaded. |

## Guarantees
- The library never changes or removes existing blocks. The only exception is the placeholder it was opened from, which it replaces.
- Content is validated on the server and checked again in the editor before insertion.
- A licence change never touches content that is already inserted.
- Block plugins may add extra undo steps when they change attributes on mount. Fixing that is a per-block task.

## Verified (2026-11-03, WordPress 6.8.11 and 7.1.3, see [testing.md](testing.md))
- Insertion at all three targets: the placeholder, after the selection, and the end.
- One Undo restores the placeholder; Redo restores the pattern.
- The same pattern inserted twice gets two distinct `ID`s.
- Every block is valid after save and reload.
- The front end shows the inserted sections, with distinct CSS scopes.
