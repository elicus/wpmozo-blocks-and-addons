jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-twitter-follow-button' ).each( function() {
		wpmozo_init_twitter_follow_button( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoTwitterFollowButtonPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_twitter_follow_button( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init twitter follow button.
 */
function wpmozo_init_twitter_follow_button( thisObj ) {

	const buttonObj = thisObj.find( '.wpmozo_twitter_embed_follow_button' );

	const twitterUsername = buttonObj.attr( 'data-name' );
	if ( ! twitterUsername ) {
		return;
	}

	const container = thisObj.find( '.wpmozo_twitter_embedded_follow_button' );

	jQuery.getScript( 'https://platform.twitter.com/widgets.js', function() {
		thisObj.find( '.twitter-follow-button-rendered' ).remove();
		thisObj.find( '.wpmozo_twitter_embed_follow_button' ).toggle( true );
		window.twttr.widgets.createFollowButton(
			twitterUsername,
			container[0],
			{
				showScreenName: buttonObj.attr( 'data-show-screen-name' ),
				size:           buttonObj.attr( 'data-size' ),
				dnt:            buttonObj.attr( 'data-dnt' ),
			}
		).then( function( el ) {
			thisObj.find( '.wpmozo_twitter_embed_follow_button' ).toggle( false );
		} );
	} );
}
