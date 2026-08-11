import $ from 'jquery';
jQuery( document ).ready( function($) {
	
	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoImageStackPropsChanged', (e) => {
		$( '.wpmozo-bna-image-stack' ).each( function() {
			wpmozoInitImageStack( $( this ) );
		} );
	} );

	// On load.
	$( '.wpmozo-bna-image-stack' ).each( function () {
		wpmozoInitImageStack( $( this ) );
	} );
} ); // Document ready.

// Init dropdown button.
function wpmozoInitImageStack( thisObj ) {
	
	const $container  = thisObj;
	const containerId = $container.attr('id');

	// Get DOM elements from jQuery selections.
	const $images = $container.find( '.wpmozo-stack-item-img' );
	const $icons = $container.find( 'i' );

	// Merge both into a single array of DOM elements.
	const tooltipTargets = [ ...$images.toArray(), ...$icons.toArray() ];

	tippy( tooltipTargets, {
		trigger: 'mouseenter',
		theme: 'wpmozo-tippy-' + containerId,
		interactive: true,
		animation: 'fade',
		duration: 350,
		appendTo: () => document.body,
		arrow: false,
		content(reference) {
			return reference.getAttribute('title') || ''; // prevent null content
		},
		maxWidth: 200,
	} );
}

