jQuery( document ).ready( function($) {

	// Image as switcher background.
	$( document ).on( {
		mouseenter: function(e) {
			e.preventDefault();
			
			$( this ).parent().find( '.wp-block-wpmozo-background-switcher-item' ).removeClass( 'wpmozo-bna-bg-switcher-hover' );
			$( this ).addClass( 'wpmozo-bna-bg-switcher-hover' );
			$( this ).find( '.wpmozo_bna_bg_switcher_hover_content' ).slideDown();
		},
		mouseleave: function(e) {
			e.preventDefault();
			$( this ).find( '.wpmozo_bna_bg_switcher_hover_content' ).slideUp( 'slow' );
		}
	}, '.wp-block-wpmozo-background-switcher-item' );

} ); // Over Document ready.
