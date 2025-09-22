import $ from 'jquery';

var wpmozo_init_rotating_text = function( $, element = null ) {

    if ( element.length > 0 ) {
        element.each( function () {

            const $textEl = $(this).find( '.wpmozo-bna-rotating-text-inner' );
            let text    = $textEl.text().trim() + ' '; // Add space at end to show space.

            if ( $(this).find('.wpmozo-bna-rotating-text-input').length > 0 ) {
                text = $(this).find('.wpmozo-bna-rotating-text-input').val().trim() + ' ';
            }

            $textEl.empty();
            const total = text.length;
            const angleStep = 360 / total;

            [...text].forEach( ( char, i ) => {
                const $span = $( '<span></span>' ).text( char ).css( '--index', i ).css('--angle-step', angleStep );
                $textEl.append( $span );
            } );
        } );
    }

}

jQuery(document).ready(function(e) {

    window.addEventListener('WPMozoRotatingTextPropsChanged', () => {
        let element = jQuery('.wpmozo-bna-rotating-text');
        wpmozo_init_rotating_text( jQuery, element );
    });

});

jQuery( document ).ready( function($) {

    let element = jQuery('.wpmozo-bna-rotating-text');
    wpmozo_init_rotating_text( $, element );

} );
