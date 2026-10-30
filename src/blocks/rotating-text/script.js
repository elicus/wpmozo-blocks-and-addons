import $ from 'jquery';

var wpmozo_init_rotating_text = function( $, element = null ) {
    element.each( function () {

        const $textEl = $(this).find( '.wpmozo-bna-rotating-text-inner' ),
            textWrap = $(this).find('.wpmozo-bna-rotating-text-wrap');
        let text    = $textEl.text().trim() + ' '; // Add space at end to show space.
        if ( parseInt( textWrap.attr( 'data-pause' ) ) ) {
            textWrap.mouseenter(function(){
                $textEl.css('animation-play-state', 'paused');
            });
            textWrap.mouseleave(function(){
                $textEl.css('animation-play-state', 'running');
            });
        } else{
            textWrap.off('mouseenter mouseleave');
        }

        if ( $(this).find('.wpmozo-bna-rotating-text-input').length > 0 ) {
            text = $(this).find('.wpmozo-bna-rotating-text-input').val().trim() + ' ';
        }

        $textEl.empty();
        if (!text.length) return;
        const total = text.length;
        const angleStep = 360 / total;

        [...text].forEach( ( char, i ) => {
            const $span = $( '<span></span>' ).text( char ).css( '--index', i ).css('--angle-step', angleStep );
            $textEl.append( $span );
        } );
    } );
}

$( document ).ready( function($) {
    window.addEventListener('WPMozoRotatingTextPropsChanged', () => {
        let element = $('.wpmozo-bna-rotating-text');
        wpmozo_init_rotating_text( $, element );
    });

    let element = $('.wpmozo-bna-rotating-text');
    wpmozo_init_rotating_text( $, element );

} );
