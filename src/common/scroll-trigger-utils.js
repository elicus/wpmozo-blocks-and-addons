/**
 * Shared ScrollTrigger helpers for the WPMozo scroll blocks
 * (horizontal scrolling posts, wavy gallery, scroll stack cards, scrolling zoom gallery).
 * Bundled into each block's frontend/editor script.
 */
import $ from 'jquery';

// Get the blocks to (re)init: only the changed block when the event names one, else all.
export function wpmozoBnaGetBlocksFromEvent(event, selector) {
	const blockId = event?.detail?.clientId;
	if ( blockId ) {
		return $( `#block-${blockId}` ).filter( selector );
	}
	return $( selector );
}

/*
 * ScrollTriggers must be refreshed in page order, otherwise a pin created later
 * (e.g. after images load) is not counted for the pins below it. Shared and
 * debounced across all WPMozo scroll blocks.
 */
export function wpmozoBnaRefreshScrollTriggers() {
	clearTimeout( window.wpmozoBnaScrollTriggerRefreshTimer );
	window.wpmozoBnaScrollTriggerRefreshTimer = setTimeout( () => {
		if ( 'undefined' === typeof ScrollTrigger ) {
			return;
		}
		ScrollTrigger.sort();
		ScrollTrigger.refresh();
	}, 100 );
}

// Refresh once when the element enters the viewport (one observer per element).
export function wpmozoBnaObserveForRefresh(element) {
	if ( ! element ) {
		return;
	}
	const oldObserver = $( element ).data( 'wpmozoBnaRefreshObserver' );
	if ( oldObserver ) {
		oldObserver.disconnect();
	}
	let wasVisible = false;
	const observer = new IntersectionObserver( function(entries) {
		entries.forEach( function(entry) {
			if ( entry.isIntersecting && ! wasVisible ) {
				wpmozoBnaRefreshScrollTriggers();
			}
			wasVisible = entry.isIntersecting;
		} );
	} );
	observer.observe( element );
	$( element ).data( 'wpmozoBnaRefreshObserver', observer );
}
