var wpmozo_init_image_accor = function( $, element = null ) {

    element.each(function(){
        let $this       = $(this),
            $default    = parseInt( $this.find('.wpmozo-bna-scroll-stack-cards-wrapper').data('default-active') ),
            $items      = $this.find('.wp-block-wpmozo-scroll-stack-cards-item');

        if ( $default > 0 ) {
            $this.find('.wp-block-wpmozo-scroll-stack-cards-item').removeClass('wpmozo-bna-active-scroll-stack-cards-item');
            $this.find('.wp-block-wpmozo-scroll-stack-cards-item:nth-of-type('+ $default +')').addClass('wpmozo-bna-active-scroll-stack-cards-item');
        }

        $items.off('click mouseenter mouseleave');

        if ( 'click' === $this.find('.wpmozo-bna-scroll-stack-cards-wrapper').attr('data-trigger') ) {
            $items.on('click', function() {
                $(this).closest('.wpmozo-bna-scroll-stack-cards-wrapper').find('.wp-block-wpmozo-scroll-stack-cards-item').not($(this)).removeClass('wpmozo-bna-active-scroll-stack-cards-item');
                $(this).addClass('wpmozo-bna-active-scroll-stack-cards-item')
            });
        } else {
            $items.on('mouseenter mouseleave', function(e) {
                if ( e.type === 'mouseenter' ) {
                    $(this).closest('.wpmozo-bna-scroll-stack-cards-wrapper').find('.wp-block-wpmozo-scroll-stack-cards-item').not($(this)).removeClass('wpmozo-bna-active-scroll-stack-cards-item');
                    $(this).addClass('wpmozo-bna-active-scroll-stack-cards-item')
                }
                if ( e.type === 'mouseleave' ) {
                    $(this).closest('.wpmozo-bna-scroll-stack-cards-wrapper').find('.wp-block-wpmozo-scroll-stack-cards-item').removeClass('wpmozo-bna-active-scroll-stack-cards-item');
                }
            });
        }
    });

}

jQuery(document).ready(function(e) {

    window.addEventListener('WPMozoImageAccorPropsChanged', () => {
        let element = jQuery('.wp-block-wpmozo-scroll-stack-cards');
        wpmozo_init_image_accor( jQuery, element );
    });

});

jQuery( document ).ready( function($) {

    let element = jQuery('.wp-block-wpmozo-scroll-stack-cards');
    wpmozo_init_image_accor( $, element );

} );