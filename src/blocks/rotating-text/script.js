var wpmozo_init_rotating_text = function( $, element = null ) {

    if ( element.length > 0 ) {
        element.each( function () {
            
            const $textEl = element.find( '.wpmozo-bna-rotating-text-inner' );
            const text    = $textEl.text().trim() + ' '; // Add space at end to show space.

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

jQuery( document ).ready( function($) {

    let element = jQuery('.wpmozo-bna-rotating-text');
    wpmozo_init_rotating_text( $, element );

} );