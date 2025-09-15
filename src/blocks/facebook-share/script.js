jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-facebook-share' ).each( function() {
		wpmozo_init_facebook_share( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoFacebookSharePropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_facebook_share( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init facebook share.
 */
function wpmozo_init_facebook_share( thisObj ) {
	
	const appId = thisObj.find( '.fb-share-button' ).attr( 'data-fb-app' );

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
