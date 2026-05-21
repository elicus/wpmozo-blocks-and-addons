import $ from 'jquery';
jQuery(document).ready(function ($) {

	// On change on props, update the slider again.
	window.addEventListener('WPMozoSplitImagePropsChanged', () => {
		$( '.wp-block-wpmozo-split-image' ).each( function() {
			const row = $(this).find('.wpmozo_split_image_wrapper').attr('data-rows');
			const columns = $(this).find('.wpmozo_split_image_wrapper').attr('data-columns');
			wpmozo_init_split_image( $( this ), row, columns );
		} );
	});

	$( '.wp-block-wpmozo-split-image' ).each( function() {
		const row = $(this).find('.wpmozo_split_image_wrapper').attr('data-rows');
		const columns = $(this).find('.wpmozo_split_image_wrapper').attr('data-columns');
		wpmozo_init_split_image( $( this ), row, columns );
	} );
});

// Init split image.
function wpmozo_init_split_image( thisObj, row, columns ) {
	const $w = thisObj.find( '.wpmozo_split_image_wrapper' ),
		cols = parseInt( columns ) || 3,
		rows = parseInt( row ) || 3;

	$w.css( {
		'display':'grid',
		'grid-template-columns': `repeat(${cols},1fr)`,
		'grid-template-rows': `repeat(${rows},1fr)`
	} );

	const bgSize = `${cols * 100}% ${rows * 100}%`;

	$w.find( '.wpmozo_split_image_portion' ).css( {
		'background-size': bgSize,
		'background-repeat': 'no-repeat'
	} ).each( function(index) {
		const x = index % cols,
			y = Math.floor(index / cols),
			posX = cols > 1 ? (x / (cols - 1) * 100) : 50,
			posY = rows > 1 ? (y / (rows - 1) * 100) : 50;

		jQuery(this).css( 'background-position', `${posX}% ${posY}%` );
	} );
}
