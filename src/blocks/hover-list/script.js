jQuery( document ).ready( function($) {

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoHoverListPropsChanged', () => {
		$( '.wp-block-wpmozo-hover-list' ).each( function() {
			wpmozo_bna_init_hover_list( $( this ) );
		} );
	} );

    $( '.wp-block-wpmozo-hover-list' ).each(function () {
		wpmozo_bna_init_hover_list( $( this ) )
	} );
} ); // Over Document ready.

// Init hover list.
function wpmozo_bna_init_hover_list( thisObj ) {
	let $cursor = thisObj.find( '.wpmozo-bna-hover-list-cursor' ).eq(0);

	// Set the background hover effect.
	thisObj.find( '.wp-block-wpmozo-hover-list-item' ).each( function() {
		let imageUrl = jQuery( this ).find( '.wpmozo-bna-hover-list-item-wrapper' ).attr( 'data-image' );
		jQuery( this ).hover( function () {
			$cursor.css( 'background-image', 'url(' + imageUrl + ')' );
		} );
	} );

	let $overlays = thisObj.find( '.wpmozo-bna-hover-list-item-overlay' );
	$overlays.on( 'mousemove', function (e) {
		TweenLite.to( $cursor, 0.3, { scale: 1, autoAlpha: 1 } );
		TweenLite.to( $cursor, 0.5, {
			css: {
				left: e.clientX,
				top: e.clientY
			},
			delay: 0.03
		} );
	} );

	// Adjust 768 to your breakpoint.
	if ( window.innerWidth <= 767 ) { 
		$overlays.on( 'mousemove', function(e) {
			TweenLite.to( $cursor, 0.5, {
				css: {
					left: "50%",
					top: "50%"
				},
				delay: 0.03
			} );
		} );
	}

	$overlays.on( 'mouseout', function () {
		TweenLite.to( $cursor, 0.3, { scale: 0.1, autoAlpha: 0 } );
	} );
}
