jQuery( document ).ready( function($) {

	window.addEventListener('WPMozoPromotionPropsChanged', () => {
		$('.wp-block-wpmozo-promotion-bar').each(function() {
			// Clear if there is interval id.
			let interval_id = $(this).attr( 'data-interval-id' );
			if ( '' !== interval_id ) {
				clearInterval( interval_id );
				$(this).attr( 'data-interval-id', '' );
			}

			const timestamp = $(this).find('.wpmozo-promotion-bar-wrap').attr('data-timestamp');
			wpmozoInitPromotionBarClock($(this), timestamp);
		});
	});

	if ( $( '.wp-block-wpmozo-promotion-bar' ).length > 0 ) {
		$( '.wp-block-wpmozo-promotion-bar' ).each( function() {
			const timestamp = $(this).find('.wpmozo-promotion-bar-wrap').attr('data-timestamp');
			wpmozoInitPromotionBarClock( $( this ), timestamp );
		} );
	}
} ); // Document ready.

// Init promotion bar clock.
function wpmozoInitPromotionBarClock( thisObj, dateStr ) {
	const wrapObj = thisObj.find( '.wpmozo-promotion-bar-wrap' );
	if(dateStr === ''){
		dateStr = wrapObj.data( 'timestamp' );
	}
	if ( dateStr ) {

		thisObj.find( '.wpmozo-promotion-bar-timer' ).removeClass( 'wpmozo-timer-expired' );

		// Update the count down every 1 second.
		let timerIntervalId = setInterval( function() {

			// Find the distance between now and the count down date.
			let distance = parseInt( dateStr ) - ( new Date ).getTime() / 1e3;

			// Check if days is visible.
			if ( thisObj.find( '.wpmozo-pb-days .wpmozo-pb-number' ).length > 0 ) {
				let days     = parseInt( distance / 86400 );
					days     = ( days && days > 0 ) ? days : 0;
					distance %= 86400;
					days    = ( days.toString().length < 2 ) ? "00" . concat( days ).slice( -2 ) : days;

				thisObj.find( '.wpmozo-pb-days .wpmozo-pb-number' ).html( days );
				if ( parseInt( days ) < 1 ) {
					thisObj.find( '.wpmozo-pb-days' ).addClass( 'wpmozo-has-zero-number' );
				} else if ( thisObj.find( '.wpmozo-pb-days' ).hasClass( 'wpmozo-has-zero-number' ) ) {
					thisObj.find( '.wpmozo-pb-days' ).removeClass( 'wpmozo-has-zero-number' );
				}
			}

			let hours    = parseInt( distance / 3600 );
				hours    = ( hours && hours > 0 ) ? hours : 0;
				distance %= 3600;
			let minutes  = parseInt( distance / 60 );
				minutes	 = ( minutes && minutes > 0 ) ? minutes : 0;
			let seconds  = parseInt( distance % 60 );
				seconds  = ( seconds && seconds > 0 ) ? seconds : 0;

			// add leading zero if number length in single digit.
			hours   = ( hours.toString().length < 2 ) ? "00" . concat( hours ).slice( -2 ) : hours;
			minutes = ( minutes.toString().length < 2 ) ? "00" . concat( minutes ).slice( -2 ) : minutes;
			seconds = ( seconds.toString().length < 2 ) ? "00" . concat( seconds ).slice( -2 ) : seconds;

			thisObj.find( '.wpmozo-pb-hours .wpmozo-pb-number' ).html( hours );
			if ( parseInt( hours ) < 1 ) {
				thisObj.find( '.wpmozo-pb-hours' ).addClass( 'wpmozo-has-zero-number' );
			} else if ( thisObj.find( '.wpmozo-pb-hours' ).hasClass( 'wpmozo-has-zero-number' ) ) {
				thisObj.find( '.wpmozo-pb-hours' ).removeClass( 'wpmozo-has-zero-number' );
			}

			thisObj.find( '.wpmozo-pb-minutes .wpmozo-pb-number' ).html( minutes );
			if ( parseInt( minutes ) < 1 ) {
				thisObj.find( '.wpmozo-pb-minutes' ).addClass( 'wpmozo-has-zero-number' );
			} else if ( thisObj.find( '.wpmozo-pb-minutes' ).hasClass( 'wpmozo-has-zero-number' ) ) {
				thisObj.find( '.wpmozo-pb-minutes' ).removeClass( 'wpmozo-has-zero-number' );
			}

			thisObj.find( '.wpmozo-pb-seconds .wpmozo-pb-number' ).html( seconds );
			if ( parseInt( seconds ) < 1 ) {
				thisObj.find( '.wpmozo-pb-seconds' ).addClass( 'wpmozo-has-zero-number' );
			} else if ( thisObj.find( '.wpmozo-pb-seconds' ).hasClass( 'wpmozo-has-zero-number' ) ) {
				thisObj.find( '.wpmozo-pb-seconds' ).removeClass( 'wpmozo-has-zero-number' );
			}

			if ( distance < 0 ) {
				thisObj.find( '.wpmozo-promotion-bar-timer' ).addClass( 'wpmozo-timer-expired' );
				clearInterval( timerIntervalId );
			}
		}, 1000 );

		// Set interval id.
		thisObj.attr( 'data-interval-id', timerIntervalId );
	}
}
