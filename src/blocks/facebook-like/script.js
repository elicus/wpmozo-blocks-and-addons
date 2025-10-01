import $ from 'jquery';
jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-facebook-like' ).each( function() {
		wpmozo_init_facebook_like( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoFacebookLikePropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_facebook_like( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init facebook share.
 */
function wpmozo_init_facebook_like( thisObj ) {

	const appId = thisObj.find( '.fb-like' ).attr( 'data-fb-app' );

	if ( appId ) {
		jQuery.getScript( 'https://connect.facebook.net/en_US/sdk.js', function() {
			window.FB.init( {
				appId: appId,
				xfbml: true,
				version: 'v8.0'
			} );
			window.FB.XFBML.parse( thisObj[0] );
		} );
	}
}
