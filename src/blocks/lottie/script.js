import $ from 'jquery';

window.addEventListener('WPMozoLottiePropsChanged', () => {
	$('.wpmozo-bna-lottie-params').trigger('change');
});

$(document).on('change', '.wpmozo-bna-lottie-params', function(e) {
	// Initial gallery setup
	let newAttributes = JSON.parse($(this).attr('data-attr'));
	initLottie($(this), newAttributes );
});

$(document).ready(function(e) {

	// Initial gallery setup
	$('.wpmozo-bna-lottie-params').each(function() {
		let newAttributes = JSON.parse($(this).attr('data-attr'));
		initLottie($(this), newAttributes );
	});
});

function initLottie($container, attributes){

	var $container = $('.wp-block-wpmozo-lottie'),
		$params = $container.find('.wpmozo-bna-lottie-params'),
		uniqueID = $params.attr('id') || $container.attr('id') || $container.data('id') || '';

	let trigger = attributes.animationTrigger,
		direction = attributes.direction,
		loop = attributes.loop,
		speed = attributes.animationSpeed,
		filePath = attributes.filePath;

	// If filePath is missing, destroy Lottie if available or return
	var $animWrapper = $container.find('.wpmozo-bna-lottie-anim');
	if (!filePath) {
		if ($animWrapper.length && $animWrapper[0] && $animWrapper[0].__lottie) {
			try {
				$animWrapper[0].__lottie.destroy();
			} catch (e) {}
			$animWrapper[0].__lottie = null;
		}
		$animWrapper.empty();
		return;
	}

	// Convert loop to boolean if it's a string
	if (typeof loop === 'string') loop = loop === 'true';

	// Fetch the Lottie JSON and initialize the animation
	$.getJSON(filePath, function (lottieJson) {

		// Create or empty the animation wrapper
		var $animWrapper = $container.find('.wpmozo-bna-lottie-anim');
		if ($animWrapper.length === 0) {
			$animWrapper = $('<div class="wpmozo-bna-lottie-anim"></div>');
			$params.before($animWrapper);
		} else {
			// Destroy previous Lottie instance if exists
			if ($animWrapper[0] && $animWrapper[0].__lottie) {
				try {
					$animWrapper[0].__lottie.destroy();
				} catch (e) {}
				$animWrapper[0].__lottie = null;
			}
			$animWrapper.empty();
		}

		var lottieAnimation = lottie.loadAnimation({
			container: $animWrapper[0],
			animationData: lottieJson,
			renderer: 'svg',
			loop: loop,
			autoplay: trigger === 'autoplay',
			name: 'wpmozo_lottie_' + uniqueID
		});

		// Store reference for later destruction
		$animWrapper[0].__lottie = lottieAnimation;

		lottieAnimation.setDirection(direction);
		lottieAnimation.setSpeed(speed);

		$container.off('.wpmozoLottie');

		// Use the animation wrapper for mouse/click events
		if (trigger === 'hover') {
			$animWrapper
				.on('mouseenter.wpmozoLottie', function () {
					lottieAnimation.play();
				})
				.on('mouseleave.wpmozoLottie', function () {
					loop ? lottieAnimation.pause() : lottieAnimation.stop();
				});
		} else if (trigger === 'click') {
			$animWrapper.on('click.wpmozoLottie', function () {
				// Use isPaused() method if available, else fallback to property
				var paused = typeof lottieAnimation.isPaused === 'function'
					? lottieAnimation.isPaused()
					: !!lottieAnimation.isPaused;
				paused ? lottieAnimation.play() : lottieAnimation.pause();
			});
		}
	}).fail(function (_, textStatus, errorThrown) {
		console.error('Failed to load Lottie JSON:', textStatus, errorThrown);
	});
}
