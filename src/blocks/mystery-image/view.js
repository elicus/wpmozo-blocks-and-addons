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
var images = document.querySelectorAll('.wp-block-wpmozo-mystery-image .wp-block-image');
if (images.length > 0) {
    var idx = Math.floor(Math.random() * images.length);
    var selectedImage = images[idx];
    selectedImage.classList.add('mystery-show');

    // Add anchor tag if not already present and add overlay span
    var imgTag = selectedImage.querySelector('img');
    if (imgTag && !selectedImage.querySelector('a')) {
        var anchor = document.createElement('a');
        anchor.href = imgTag.src;
        anchor.className = 'wpmozo-mystery-image-anchor';
        // Move the img inside the anchor
        imgTag.parentNode.insertBefore(anchor, imgTag);
        anchor.appendChild(imgTag);
    }
	// If the parent .wp-block-wpmozo-mystery-image has the overlay class, add the overlay span
	var parentBlock = selectedImage.closest('.wp-block-wpmozo-mystery-image');
	if (parentBlock && parentBlock.classList.contains('wpmozo-mystery-image-overlay')) {
		// Add overlay span if not already present
		if (!anchor.querySelector('.wpmozo-overlay-icon')) {
			var overlay = document.createElement('span');
			overlay.className = 'wpmozo-overlay-icon';
			anchor.appendChild(overlay);
			var iTag = document.createElement('i');
			// Fetch the icon class from data-icon attribute of the parent .wp-block-wpmozo-mystery-image
			var iconClass = parentBlock ? parentBlock.getAttribute('data-icon') : '';
			iTag.className = iconClass || 'far fa-star';
			overlay.appendChild(iTag);
		}
	}

	// {
	// 	// Add overlay span
    //     var overlay = document.createElement('span');
    //     overlay.className = 'wpmozo-overlay-icon';
    //     anchor.appendChild(overlay);
	// }

}

jQuery(document).ready(function($) {

	// Updated JS code to initialize magnificPopup for the .mystery-show image inside .wpmozo-mystery-image-lightbox
	$('.wpmozo-mystery-image-lightbox').each(function() {
		const $container = $(this);
		const clientId = $container.parent().attr('id') || '';
		const effect = $container.data('lightbox_effect') || 'none';
		const duration = effect !== 'none' ? parseInt($container.data('lightbox_transition_duration')) || 0 : 0;
		const zoomEnabled = effect === 'zoom';
		const mainClass = 'block-' + clientId + '_lightbox';

		// Only initialize if there is a .mystery-show image
		const $mysteryShowImg = $container.find('.mystery-show img');
		if ($mysteryShowImg.length > 0) {
			$container.magnificPopup({
				delegate: 'a.wpmozo-mystery-image-anchor',
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: mainClass,
				removalDelay: duration,
				zoom: {
					enabled: zoomEnabled,
					duration: duration,
					easing: 'ease-in-out',
				},
				gallery: { enabled: false },
				image: {
					markup: '<div class="mfp-figure">' +
						'<div class="mfp-close"></div>' +
						'<div class="mfp-img"></div>' +
						'</div>',
					tError: '<a href="%url%">The image</a> could not be loaded.',
				},
			});
		}
	});

});

/* eslint-enable no-console */
