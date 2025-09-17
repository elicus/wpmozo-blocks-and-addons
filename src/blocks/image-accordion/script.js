var wpmozo_init_image_accor = function( $, element = null ) {

    element.each(function(){
        let $this       = $(this),
            $default    = parseInt( $this.find('.wpmozo-bna-image-accordion-wrapper').data('default-active') ),
            $items      = $this.find('.wpmozo-bna-image-accordion-item');

        if ( $default > 0 ) {
            $this.find('.wpmozo-bna-image-accordion-item').removeClass('wpmozo-bna-active-image-accordion-item');
            $this.find('.wpmozo-bna-image-accordion-item:nth-child('+ $default +')').addClass('wpmozo-bna-active-image-accordion-item');
        }

        $items.off('click mouseenter mouseleave');

        if ( 'click' === $this.find('.wpmozo-bna-image-accordion-wrapper').attr('data-trigger') ) {
            $items.on('click', function() {
                $(this).closest('.wpmozo-bna-image-accordion-wrapper').find('.wpmozo-bna-image-accordion-item').not($(this)).removeClass('wpmozo-bna-active-image-accordion-item');
                $(this).addClass('wpmozo-bna-active-image-accordion-item')
            });
        } else {
            $items.on('mouseenter mouseleave', function(e) {
                if ( e.type === 'mouseenter' ) {
                    $(this).closest('.wpmozo-bna-image-accordion-wrapper').find('.wpmozo-bna-image-accordion-item').not($(this)).removeClass('wpmozo-bna-active-image-accordion-item');
                    $(this).addClass('wpmozo-bna-active-image-accordion-item')
                }
                if ( e.type === 'mouseleave' ) {
                    $(this).closest('.wpmozo-bna-image-accordion-wrapper').find('.wpmozo-bna-image-accordion-item').removeClass('wpmozo-bna-active-image-accordion-item');
                }
            });
        }
    });

}

jQuery(document).ready(function(e) {

    window.addEventListener('WPMozoImageAccorPropsChanged', () => {
        let element = jQuery('.wpmozo-bna-image-accordion');
        wpmozo_init_image_accor( jQuery, element );
    });

});

jQuery( document ).ready( function($) {

    let element = jQuery('.wpmozo-bna-image-accordion');
    wpmozo_init_image_accor( $, element );

} );