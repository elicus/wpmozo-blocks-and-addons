# Compatibility

Lite and Pro are released independently. This page records requirements and the combinations that have actually been tested. "Expected" means designed but not yet tested.

## Requirements
| | Header says | Real minimum (evidence) | Pattern Library |
|---|---|---|---|
| WordPress | 5.0 | 6.8: below it no Lite blocks register (Phase 0 run); built scripts need `react-jsx-runtime` (6.6+) | Follows the plugin; no separate requirement raised |
| PHP | 7.3 | Not verified below 7.4 (no 7.3 runtime available). Contract code passes PHPCompatibilityWP for 7.3+ | Library PHP kept 7.3-compatible |

The header correction is a release task (see [handoff.md](handoff.md)), not part of library work. Headers are never changed silently.

## Integration contract (LPL-1)
- Older Lite releases have no contract: no `wpmozo_bna_integration()` and no `wpmozo_bna_loaded`. Add-ons must feature-detect ([registry-and-contract.md](registry-and-contract.md)).
- The shared editor script makes the Lite JS globals available even when every Lite block is disabled, also for Pro versions that don't know about it (it prints before block editor scripts).

### Tested combinations (offline harness, 2026-11-03)
| # | Combination | Environment | Result |
|---|---|---|---|
| — | Lite `b91a5ec` (before LPL-1) + Pro `ef1909d`, all Lite blocks disabled | WP 6.8.11, PHP 7.4 | **Reproduces the old problem:** Lite globals missing in the editor; Pro Alert Box throws `TypeError` and shows "This block has encountered an error" |
| — | Lite candidate + Pro `ef1909d`, all Lite blocks disabled | WP 6.8.11, PHP 7.4 | **Fixed:** shared script in the head before Pro editor scripts; globals present; Alert Box renders and its settings open |
| 9 | Lite candidate + Pro `ef1909d` (Lite updated, Pro unchanged), all blocks enabled | WP 7.1.3, PHP 8.2 | **Passed:** Lite and Pro blocks insert, save, reload valid, render on the front end; no PHP log entries |
| 7 | Lite candidate + Pro 1.0.0 May build (`1d01924`) | WP 6.8.11, PHP 7.4 | **Passed:** Pro blocks insert, save, reload valid |
| 1 | Lite candidate only | WP 7.1.3, PHP 8.2 | **Passed** |

### Pattern Library server side (LPL-2, 2026-11-03)
| Combination | Environment | Result |
|---|---|---|
| Lite only (fixture sources) | WP 7.1.3 / PHP 8.2 and WP 6.8.11 / PHP 7.4 | Passed (81/81 and 80/80) |
| Lite only, `DISALLOW_UNFILTERED_HTML` | WP 7.1.3 / PHP 8.2 | Passed: restricted patterns locked for everyone, including administrators |
| Lite + Pro `ef1909d` active (Pro registers no source yet) | WP 7.1.3 / PHP 8.2 | Passed: library works; Pro shown as active without patterns |
| Older Lite (no library) + any Pro | — | Not applicable: no library routes exist; Pro must feature-detect `library` (PPL-2) |

Full plugin-combination matrix (Pro inactive, licence states, older Lite with newer Pro, …): readiness review section F; it is run in X-1.
