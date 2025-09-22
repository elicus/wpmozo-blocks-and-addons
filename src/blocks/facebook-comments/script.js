jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-facebook-comments' ).each( function() {
		wpmozo_init_facebook_comments( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoFacebookCommentsPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_facebook_comments( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init facebook embedded video.
 */
function wpmozo_init_facebook_comments( thisObj ) {

	const appId    = thisObj.find( '.fb-comments' ).attr( 'data-fb-app' );
	const videoURL = thisObj.find( '.fb-comments' ).attr( 'data-href' );

	if ( appId && videoURL ) {
		jQuery.getScript( 'https://connect.facebook.net/en_US/sdk.js', function() {  
			window.FB.init({
				appId: appId,
				xfbml: false,
				version: 'v8.0'
			} );
			window.FB.XFBML.parse( thisObj.find( '.wpmozo_fb_comments_wrapper' )[0] );
		} );
	}
}
