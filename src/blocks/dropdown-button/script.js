jQuery( document ).ready( function($) {
	if ( $( '.wp-block-wpmozo-dropdown-button' ).length > 0 ) {
		// On change on props, update the slider again.
		window.addEventListener( 'WPMozoDropdownButtonPropsChanged', () => {
			$( '.wp-block-wpmozo-dropdown-button' ).each( function() {
				wpmozoInitDropdownButton( $( this ) );
			} );
		} );
		
		// On load.
		$( '.wp-block-wpmozo-dropdown-button' ).each( function () {
			wpmozoInitDropdownButton( $( this ) );
		} );
	}
} ); // Document ready.

// Init dropdown button.
function wpmozoInitDropdownButton( thisObj ) {
	var $wrap       = thisObj.find( '.wpmozo_dropdown_button_wrap' );
	var $inner      = $wrap.find( '.wpmozo_dropdown_button_inner' );
	var $button     = $wrap.find( '.wpmozo_dropdown_button' );
	var $menu       = $wrap.find( '.wpmozo_dropdown_menu_items' );
	var triggerType = $wrap.attr( 'data-trigger-type' ) || 'click';
	var ns          = '.wpmozo-' + $wrap.index(); // unique namespace for this instance.

	// Hide the menu initially
	$menu.hide();

	// --- CLEANUP OLD EVENTS ---.
	$button.off( ns ); // remove button events.
	$inner.off( ns ); // remove inner hover events.
	jQuery( document ).off( ns ); // remove document click listener.
	$wrap.find( 'a.wpmozo_dropdown_button' ).off( ns ); // remove link click blocker.

	if ( triggerType === 'hover' ) {
		$button.on( 'mouseenter' + ns, function() {
			$menu.stop( true, true ).slideDown( 200 );
		} );
		$inner.on( 'mouseleave' + ns, function() {
			$menu.stop( true, true ).slideUp( 200 );
		} );

		$wrap.find( 'a.wpmozo_dropdown_button' ).on( 'click' + ns, function(e) {
			e.preventDefault();
		} );
	} else {
		// Toggle on click.
		$button.on( 'click' + ns, function(e) {
			e.preventDefault();
			e.stopPropagation();
			$menu.stop( true, true ).slideToggle( 200 );
		} );

		// Close dropdown if clicked outside.
		jQuery( document ).on( 'click' + ns, function(e) {
			if ( ! $inner.is( e.target ) && $inner.has( e.target ).length === 0 ) {
				$menu.slideUp( 200 );
			}
		} );
	}
}
