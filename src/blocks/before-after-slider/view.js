/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
jQuery('.wpmozo-bna-before-after-image-wrapper').each(function( key, el ){

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
/* eslint-enable no-console */
