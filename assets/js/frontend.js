jQuery(document).ready(function($){

    jQuery('.wpmozo-adfgu-before-after-image-wrapper').each(function( key, el ){

        let $this = jQuery(this),
        before_label = $this.data('before-label'),
        after_label = $this.data('after-label'),
        handle_offset = $this.data('handle-offset'),
        slider_orientation = $this.data('slider-orientation'),
        move_onhover = $this.data('move-onhover'),
        move_onclick = $this.data('move-onclick');

        $this.twentytwenty({
            default_offset_pct: handle_offset,
            orientation: slider_orientation,
            before_label: before_label,
            after_label: after_label,
            move_slider_on_hover: move_onhover,
            move_with_handle_only: true,
            click_to_move: move_onclick
        });

    });

    jQuery('.wpmozo-adfgu-toggle-field').change(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    jQuery('.wpmozo-adfgu-toggle-title-wrap > :header').click(function(e){

        let wrap = jQuery(this).closest('.wpmozo-adfgu-toggle-title-wrap'),
        selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( wrap.hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo_switch_trigger').click(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( jQuery(this).hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo-adfgu-toggle-field').each(function( keym, el ){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    function wpmozo_toggle_switch( input, main ){

        if( input.is(':checked') ){
            main.find('.wpmozo-adfgu-content-toggle-one').removeClass('wpmozo-adfgu-content-toggle-active');
            main.find('.wpmozo-adfgu-content-toggle-two').addClass('wpmozo-adfgu-content-toggle-active');
        }else{
            main.find('.wpmozo-adfgu-content-toggle-one').addClass('wpmozo-adfgu-content-toggle-active');
            main.find('.wpmozo-adfgu-content-toggle-two').removeClass('wpmozo-adfgu-content-toggle-active');
        }

    }

    jQuery('body').find('.wpmozo-adfgu-flip-box-wrap').each(function(){

        let $this = jQuery(this);
        var maxHeight = Math.max.apply( null, $this.find('.wpmozo-adfgu-flip-box-side').map( function(){
            return jQuery(this).outerHeight();
        }).get());

        jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function(){
            jQuery(this).css('height', maxHeight+'px');
        });

    });

})