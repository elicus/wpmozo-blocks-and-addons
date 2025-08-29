import $ from 'jquery';
document.querySelectorAll('.wp-block-wpmozo-mystery-image').forEach(function(block) {
	var images = block.querySelectorAll('.wp-block-image');

	if (images.length > 0) {
		// Hide all first
		images.forEach(function(img) {
			img.classList.remove('mystery-show');
		});

		// Pick one random image in this block
		var idx = Math.floor(Math.random() * images.length);
		var selectedImage = images[idx];
		selectedImage.classList.add('mystery-show');

		// Add anchor tag if not already present
		var imgTag = selectedImage.querySelector('img');
		var anchor = selectedImage.querySelector('a');

		if (imgTag && !anchor) {
			anchor = document.createElement('a');
			anchor.href = imgTag.src;
			anchor.className = 'wpmozo-mystery-image-anchor';
			imgTag.parentNode.insertBefore(anchor, imgTag);
			anchor.appendChild(imgTag);
		}

		// If overlay class present, add overlay span
		if (block.classList.contains('wpmozo-mystery-image-overlay') && anchor) {
			if (!anchor.querySelector('.wpmozo-overlay-icon')) {
				var overlay = document.createElement('span');
				overlay.className = 'wpmozo-overlay-icon';
				anchor.appendChild(overlay);

				var iTag = document.createElement('i');
				var iconClass = block.getAttribute('data-icon');
				iTag.className = iconClass || 'far fa-star';
				overlay.appendChild(iTag);
			}
		}
	}
});

$(document).ready(function(e) {
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
