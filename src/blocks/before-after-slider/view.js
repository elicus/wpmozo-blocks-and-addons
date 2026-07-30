jQuery('.wpmozo-bna-before-after-image-wrapper').each( function( key, el ) {
    let $this         = jQuery( this ),
        before_label  = $this.data('before-label'),
        after_label   = $this.data('after-label'),
        handle_offset = $this.data('handle-offset'),
        orientation   = $this.data('slider-orientation'),
        move_onhover  = $this.data('move-onhover'),
        move_onclick  = $this.data('move-onclick'),
        no_overlay    = $this.data('no-overlay');

    $this.twentytwenty( {
        default_offset_pct: handle_offset,
        orientation: orientation,
        before_label: before_label,
        after_label: after_label,
        no_overlay: no_overlay,
        move_slider_on_hover: move_onhover,
        move_with_handle_only: true,
        click_to_move: move_onclick
    } );
} );
