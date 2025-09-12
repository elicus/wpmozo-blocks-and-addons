jQuery( document ).ready( function($) {
	// Each elements loop.
	$( '.wp-block-wpmozo-twitter-embedded-tweet' ).each( function() {
		wpmozo_init_twitter_embedded_tweet( $( this ) );
	} );

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoTwitterEmbeddedTweetPropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			wpmozo_init_twitter_embedded_tweet( $( '#block-' + e.detail.clientId ) );
		}
	} );
} ); // Document ready.

/**
 * Init twitter embedded tweet.
 */
function wpmozo_init_twitter_embedded_tweet( thisObj ) {

	let blockquoteObj = thisObj.find( 'blockquote' );

	const tweetId = blockquoteObj.attr( 'data-id' );
	if ( ! tweetId ) {
		return;
	}

	const container = thisObj.find( '.wpmozo_twitter_embedded_tweet_wrapper' );

	jQuery.getScript( 'https://platform.twitter.com/widgets.js', function() {
		thisObj.find( '.twitter-tweet-rendered' ).remove();
		thisObj.find( '.wpmozo_tweet').toggle( true );
		window.twttr.ready(
			function ( twttr ) {
				twttr.widgets.createTweet(
					tweetId,
					container[0],
					{
						theme :        blockquoteObj.attr( 'data-theme' ) || 'light',
						width :        blockquoteObj.attr( 'data-width' ) || '350',
						cards :        blockquoteObj.attr( 'data-cards' ) || 'visible',
						conversation : blockquoteObj.attr( 'data-conversation' ) || 'all',
						dnt :          blockquoteObj.attr( 'data-dnt' ) || 1,
					}
				).then( function( el ) {
					thisObj.find( '.wpmozo_tweet' ).toggle( false );
				} );
			}
		);
	} );
}
