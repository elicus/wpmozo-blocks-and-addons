import $ from 'jquery';
jQuery( document ).ready( function($) {
	
	window.addEventListener( 'WPMozoImageStackPropsChanged', (e) => {
		$( '.wpmozo-bna-image-stack' ).each( function() {
			const instances = wpmozoInitImageStack( $( this ) );
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
	const showTooltip = $container.attr('data-tooltip-enable');
	const showArrow   = $container.attr('data-show-arrow');
	const trigger     = $container.attr('data-trigger');

	// Get DOM elements from jQuery selections.
	const $images = $container.find( '.wpmozo-stack-item-img' );
	const $icons = $container.find( 'i' );

	// Merge both into a single array of DOM elements.
	const tooltipTargets = [ ...$images.toArray(), ...$icons.toArray() ];

	// Check if tippy instance already exists on this trigger element
	if(tooltipTargets.length){
		$(tooltipTargets).each(function(i,el){
			if (tooltipTargets[i]._tippy) {
				tooltipTargets[i]._tippy.destroy();
			}
		});
	}
	
	if('true' === showTooltip){
		const instance = tippy( tooltipTargets, {
			trigger: trigger,
			theme: 'wpmozo-tippy-' + containerId,
			interactive: true,
			animation: 'fade',
			duration: 350,
			appendTo: () => document.body,
			arrow: 'true' === showArrow,
			content(reference) {
				return reference.getAttribute('title') || ''; // prevent null content
			},
			maxWidth: 200,
		} );
	}
}

