import $ from 'jquery';

function getLottieContainer($paramElem) {
	// The .wp-block-wpmozo-lottie is the parent block for this param element
	return $paramElem.closest('.wp-block-wpmozo-lottie');
}

function getLottieUniqueID($container, $paramElem) {
	return (
		$paramElem.attr('id') ||
		$container.attr('id') ||
		$container.data('id') ||
		''
	);
}

// Listen for custom event to re-trigger change on all lottie params
window.addEventListener('WPMozoLottiePropsChanged', () => {
	$('.wpmozo-bna-lottie-params').trigger('change');
});

// On change of any lottie param, only re-init that instance
$(document).on('change', '.wpmozo-bna-lottie-params', function (e) {
	const $paramElem = $(this);
	const $container = getLottieContainer($paramElem);
	if ($container.length) {
		let newAttributes = JSON.parse($paramElem.attr('data-attr'));
		initLottie($container, $paramElem, newAttributes);
	}
});

// On document ready, initialize all lottie instances
$(document).ready(function () {
	$('.wpmozo-bna-lottie-params').each(function () {
		const $paramElem = $(this);
		const $container = getLottieContainer($paramElem);
		if ($container.length) {
			let newAttributes = JSON.parse($paramElem.attr('data-attr'));
			initLottie($container, $paramElem, newAttributes);
		}
	});
});

// Main function: initialize a single lottie instance in its own container
function initLottie($container, $paramElem, attributes) {
	const uniqueID = getLottieUniqueID($container, $paramElem);

	let trigger = attributes.animationTrigger,
		direction = attributes.direction,
		loop = attributes.loop,
		speed = attributes.animationSpeed,
		filePath = attributes.filePath;

	// Find or create the animation wrapper inside this container
	let $animWrapper = $container.find('.wpmozo-bna-lottie-anim');
	if ($animWrapper.length === 0) {
		$animWrapper = $('<div class="wpmozo-bna-lottie-anim"></div>');
		$paramElem.before($animWrapper);
	}

	// If filePath is missing, destroy Lottie if available or return
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
		// Destroy previous Lottie instance if exists
		if ($animWrapper[0] && $animWrapper[0].__lottie) {
			try {
				$animWrapper[0].__lottie.destroy();
			} catch (e) {}
			$animWrapper[0].__lottie = null;
		}
		$animWrapper.empty();

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

		// Remove previous event handlers for this instance
		$animWrapper.off('.wpmozoLottie');

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
