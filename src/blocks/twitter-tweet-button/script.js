jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-twitter-tweet-button' ).each( function() {
		wpmozo_init_twitter_tweet_button( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoTwitterShareButtonPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_twitter_tweet_button( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init twitter follow button.
 */
function wpmozo_init_twitter_tweet_button( thisObj ) {

	
}
