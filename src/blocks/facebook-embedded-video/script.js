jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-facebook-embedded-video' ).each( function() {
		wpmozo_init_facebook_embedded_video( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoFacebookEmbeddedVideoPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_facebook_embedded_video( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init facebook embedded video.
 */
function wpmozo_init_facebook_embedded_video( thisObj ) {

	const appId = thisObj.find( '.fb-video' ).attr( 'data-fb-app' );

	if ( appId ) {
		jQuery.getScript( 'https://connect.facebook.net/en_US/sdk.js', function() {  
			window.FB.init( {
				appId: appId,
				xfbml: false,
				version: 'v8.0'
			} );
			window.FB.XFBML.parse( thisObj[0] );
		} );
	}
}
