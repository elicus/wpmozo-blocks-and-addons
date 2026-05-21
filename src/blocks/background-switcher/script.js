import $ from 'jquery';
jQuery( document ).ready( function($) {

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoFacebookCommentsPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozoResetBackgroundSwitcher( $( '#block-' + e.detail.clientId ) );
		}
	} );
	$( document ).on( 'click', '.block-editor-block-list__block.wp-block-wpmozo-background-switcher', function() {
		wpmozoResetBackgroundSwitcher( $( this ) );
	} );

	// Reset the background switcher.
	function wpmozoResetBackgroundSwitcher( wrapperObj ) {
		if ( wrapperObj.find( '.is-selected.wp-block-wpmozo-background-switcher-item' ).length ) {
			// Remove all hover class first.
			wrapperObj.find( '.wp-block-wpmozo-background-switcher-item' ).removeClass( 'wpmozo-bna-bg-switcher-hover' );
			wrapperObj.find( '.is-selected.wp-block-wpmozo-background-switcher-item' ).first().addClass( 'wpmozo-bna-bg-switcher-hover' );
		} else {
			// Remove all hover class first.
			wrapperObj.find( '.wp-block-wpmozo-background-switcher-item' ).removeClass( 'wpmozo-bna-bg-switcher-hover' );
			wrapperObj.find( '.wp-block-wpmozo-background-switcher-item' ).first().addClass( 'wpmozo-bna-bg-switcher-hover' );
		}
	}

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
