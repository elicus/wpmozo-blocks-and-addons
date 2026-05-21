var wpmozo_init_scroll_image = function( $, element = null ) {

    var $el = ( null !== element ) ? element : $('body').find('.wpmozo-bna-scroll-image');

    if ( $el.length > 0 ) {
        $el.each(function(){
            let $this           = $(this).find('.wpmozo-bna-scroll-image-wrapper'),
                $img            = $this.find('.wpmozo-bna-scroll-image-inner-wrap').find('img'),
                direction       = $this.find('.wpmozo-bna-scroll-image-inner-wrap').attr('data-direction'),
                imgHeight       = $img.height(),
                imgWidth        = $img.width(),
                wrapperHeight   = $this.height(),
                wrapperWidth    = $this.width(),
                translateY      = parseFloat(imgHeight) - parseFloat(wrapperHeight),
                translateX      = parseFloat(imgWidth) - parseFloat(wrapperWidth);

            if ( 'bottom' === direction ) {
                if ( imgHeight > wrapperHeight ) {
                    $img.css('transform', 'translateY(-' + translateY + 'px)');
                }
            }

            if ( 'right' === direction ) {
                if ( imgWidth > wrapperWidth ) {
                    $img.css('transform', 'translateX(-' + translateX + 'px)');
                }
            }

            $this.on('mouseenter mouseleave', function(e) {
                let $this           = $(this),
                    $img            = $this.find('.wpmozo-bna-scroll-image-inner-wrap').find('img'),
                    direction       = $this.find('.wpmozo-bna-scroll-image-inner-wrap').attr('data-direction'),
                    imgHeight       = $img.height(),
                    imgWidth        = $img.width(),
                    wrapperHeight   = $this.height(),
                    wrapperWidth    = $this.width(),
                    translateY      = parseFloat(imgHeight) - parseFloat(wrapperHeight),
                    translateX      = parseFloat(imgWidth) - parseFloat(wrapperWidth);

                switch(direction) {
                    case 'top':
                        // If mouse enter
                        if ( e.type === 'mouseenter' ) {
                            if ( imgHeight > wrapperHeight ) {
                                $img.css('transform', 'translateY(-' + translateY + 'px)');
                            }
                        }

                        // If mouse leave
                        if ( e.type === 'mouseleave' ) {
                            $img.css('transform', 'translateY(0)');
                        }
                        break;

                    case 'bottom':
                        // If mouse enter
                        if ( e.type === 'mouseenter' ) {
                            $img.css('transform', 'translateY(0)');
                        }

                        // If mouse leave
                        if ( e.type === 'mouseleave' ) {
                            if ( imgHeight > wrapperHeight ) {
                                $img.css('transform', 'translateY(-' + translateY + 'px)');
                            }
                        }
                        break;

                    case 'left':
                        // If mouse enter
                        if ( e.type === 'mouseenter' ) {
                            if ( imgWidth > wrapperWidth ) {
                                $img.css('transform', 'translateX(-' + translateX + 'px)');
                            }
                        }

                        // If mouse leave
                        if ( e.type === 'mouseleave' ) {
                            $img.css('transform', 'translateX(0)');
                        }
                        break;

                    case 'right':
                        // If mouse enter
                        if ( e.type === 'mouseenter' ) {
                            $img.css('transform', 'translateX(0)');
                        }

                        // If mouse leave
                        if ( e.type === 'mouseleave' ) {
                            if ( imgWidth > wrapperWidth ) {
                                $img.css('transform', 'translateX(-' + translateX + 'px)');
                            }
                        }
                        break;

                    default:
                }
            });
        });
    }
}

jQuery(document).ready(function($) {
    jQuery.fn.wpmozo_init_scroll_image = wpmozo_init_scroll_image;
    jQuery.fn.wpmozo_init_scroll_image($);
} );
