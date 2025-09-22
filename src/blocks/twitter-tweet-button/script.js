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

	const container = thisObj.find( '.wpmozo_twitter_embedded_tweet_button' );
	const buttonObj = thisObj.find( '.wpmozo_twitter_embed_tweet_button' );
	const customURL = buttonObj.attr( 'data-url' );

	jQuery.getScript( 'https://platform.twitter.com/widgets.js', function() {
		thisObj.find( '.twitter-share-button-rendered' ).remove();
		thisObj.find( '.wpmozo_twitter_embed_tweet_button' ).toggle( true );
		window.twttr.widgets.createShareButton(
			customURL,
			container[0],
			{
				text:     buttonObj.attr( 'data-text' ),
				hashtags: buttonObj.attr( 'data-hashtags' ),
				via:      buttonObj.attr( 'data-via' ),
				related:  buttonObj.attr( 'data-related' ),
				size:     buttonObj.attr( 'data-size' ),
				dnt:      buttonObj.attr( 'data-dnt' )
			}
		).then( function( el ) {
			thisObj.find( '.wpmozo_twitter_embed_tweet_button' ).toggle( false );
		} );
	} );
}
