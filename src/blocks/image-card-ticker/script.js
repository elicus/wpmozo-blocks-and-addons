import $ from 'jquery';

$(function () {
	const blockSelector = '.wp-block-wpmozo-image-card-ticker';
	const wrapperSelector = '.wpmozo_image_card_ticker_wrapper';
	const innerWrapSelector = '.wpmozo_image_card_ticker_inner';

	// Helper to extract data attributes and build config object
	function getDataObject($wrapper) {
		const attrs = ['layout', 'direction', 'image_gap', 'image_width', 'image_height', 'ticker_speed'];
		const data = {};
		attrs.forEach(attr => {
			data[attr] = $wrapper.attr(`data-${attr}`);
		});
		return data;
	}

	// Core init logic for a single block
	function initImageCardTicker($wrapper, isInitial = false) {
		const dataObject = getDataObject($wrapper);
		const $innerWrap = $wrapper.find(innerWrapSelector);

		// Store original HTML for restoration (only once)
		if (isInitial || !$wrapper.data('original-html')) {
			$wrapper.data('original-html', $innerWrap.html());
		}

		// Destroy existing animations and reset
		wpmozoDestroyImageCardTicker($wrapper);

		// Init layout after images loaded
		$wrapper.imagesLoaded(function () {
			switch (dataObject.layout) {
				case 'marquee':
					wpmozoInitImageCardTickerMarquee($wrapper, dataObject);
					break;
				case '3d_circular':
					wpmozoInitImageCardTicker3DCircle($wrapper, dataObject);
					break;
				case 'curve':
					wpmozoInitImageCardTickerCurve($wrapper, dataObject);
					break;
			}
		});
	}

	// Listen for custom event to re-init all blocks
	window.addEventListener('WPMozoImageTickerPropsChanged', () => {
		$(blockSelector).each(function () {
			const $wrapper = $(this).find(wrapperSelector);
			if ($wrapper.length) {
				initImageCardTicker($wrapper);
			}
		});
	});

	// Initial gallery setup
	$(blockSelector).each(function () {
		const $wrapper = $(this).find(wrapperSelector);
		if ($wrapper.length) {
			initImageCardTicker($wrapper, true);
		}
	});
});

// Init marquee effect.
function wpmozoInitImageCardTickerMarquee($wrapper, $wrappeerData) {
	gsap.registerPlugin(ScrollTrigger);

	const $innerWrap = $wrapper.find('.wpmozo_image_card_ticker_inner');
	const direction = $wrappeerData.direction || 'left';
	const imgWidth = +$wrappeerData.image_width || 200;
	const imgHeight = +$wrappeerData.image_height || 150;
	let imgGap = $wrappeerData.image_gap;
	const speed = +$wrappeerData.ticker_speed || 10;
	const pauseOnHover = $wrappeerData.pause_on_hover || 'on';
	const isVertical = ['top', 'bottom'].includes(direction);

	// Ensure imgGap is a valid number
	if ((!imgGap || imgGap === '') && parseInt(imgGap) !== 0) {
		imgGap = 30;
	} else {
		imgGap = +imgGap;
	}

	const $scWidth = isVertical ? $(window).height() : $(window).width();
	const $imgSize = isVertical ? imgHeight : imgWidth;
	const childrenCount = $innerWrap.children().length || 1;
	const distance = ((isVertical ? imgHeight : imgWidth) + imgGap) * childrenCount;

	let amount = Math.ceil($scWidth / $imgSize);
	amount = Math.ceil(amount / childrenCount);

	const html = $innerWrap.html();
	for (let i = 0; i < amount; i++) {
		const $clones = $(html).map(function () {
			return $(this).addClass('wpmozo-cloned-item')[0];
		});
		$innerWrap.append($clones);
	}

	const [startPos, endPos] = ['right', 'bottom'].includes(direction) ? [-distance, 0] : [0, -distance];
	const prop = isVertical ? 'y' : 'x';

	if (['right', 'bottom'].includes(direction)) {
		gsap.set($innerWrap, { [prop]: startPos });
	}

	$innerWrap.children().each((i, card) => {
		gsap.set(card, {
			width: imgWidth,
			height: imgHeight,
			marginRight: isVertical ? 0 : imgGap,
			marginBottom: isVertical ? imgGap : 0,
		});
	});

	const tween = gsap.to($innerWrap, {
		[prop]: endPos,
		duration: speed,
		ease: 'none',
		repeat: -1,
		onRepeat: () => gsap.set($innerWrap, { [prop]: startPos }),
	});

	$innerWrap.on('mouseenter', 'img', () => tween.pause());
	$innerWrap.on('mouseleave', 'img', () => tween.resume());

	$wrapper.addClass('marquee-inited');
}

// Init 3d circle.
function wpmozoInitImageCardTicker3DCircle($wrapper, $wrappeerData) {
	gsap.registerPlugin(ScrollTrigger);

	const $innerWrap = $wrapper.find('.wpmozo_image_card_ticker_inner');
	const imgWidth = +$wrappeerData.image_width || 200;
	const imgHeight = +$wrappeerData.image_height || 150;
	const imgGap = +$wrappeerData.image_gap || 30;
	const speed = +$wrappeerData.ticker_speed || 5;
	const pauseOnHover = $wrappeerData.pause_on_hover || 'on';
	const totalCards = $innerWrap.children().length || 1;
	const spacingFactor = 1; // keep it static

	const baseRadius = (imgWidth / 2) / Math.tan(Math.PI / totalCards);
	const radius = baseRadius * spacingFactor + (imgGap / 2);

	$wrapper.addClass('circle-carousel');

	$innerWrap.children().each((i, card) => {
		const angle = (360 / totalCards) * i;
		gsap.set(card, {
			rotationY: angle,
			width: imgWidth,
			height: imgHeight,
			z: radius,
			transformOrigin: `center center -${radius}px`
		});
	});

	const tween = gsap.to($innerWrap, {
		rotationY: 360,
		duration: speed,
		repeat: -1,
		ease: 'none',
		transformOrigin: 'center center',
		transformStyle: 'preserve-3d',
		overflow: 'visible',
		position: 'relative'
	});

	$innerWrap.on('mouseenter', 'img', () => tween.pause());
	$innerWrap.on('mouseleave', 'img', () => tween.resume());
}

// Init Curve.
function wpmozoInitImageCardTickerCurve($wrapper, $wrappeerData) {
	gsap.registerPlugin(ScrollTrigger);

	const $innerWrap = $wrapper.find('.wpmozo_image_card_ticker_inner');
	const imgWidth = +$wrappeerData.image_width || 200;
	const imgHeight = +$wrappeerData.image_height || 150;
	const imgGap = +$wrappeerData.image_gap || 30;
	const speed = +$wrappeerData.ticker_speed || 5;
	const pauseOnHover = $wrappeerData.pause_on_hover || 'on';
	const childrenCount = $innerWrap.children().length || 1;
	const totalItemWidth = (imgWidth + imgGap) * childrenCount;

	let amount = Math.ceil($(window).width() / imgWidth);
	amount = Math.ceil(amount / childrenCount);

	const html = $innerWrap.html();
	for (let i = 0; i < amount; i++) {
		const $clones = $(html).map(function () {
			return $(this).addClass('wpmozo-cloned-item')[0];
		});
		$innerWrap.append($clones);
	}

	$wrapper.addClass('curve-carousel');

	$innerWrap.children().each((i, card) => {
		gsap.set(card, {
			width: imgWidth,
			height: imgHeight,
			marginRight: imgGap
		});
	});
	gsap.set($innerWrap, { x: 0 });

	const tween = gsap.to($innerWrap, {
		x: `-${totalItemWidth}`,
		duration: speed,
		ease: "none",
		repeat: -1,
		onRepeat: () => gsap.set($innerWrap, { x: 0 })
	});

	$innerWrap.on('mouseenter', 'img', () => tween.pause());
	$innerWrap.on('mouseleave', 'img', () => tween.resume());
}

// Destroy and reset ticker
function wpmozoDestroyImageCardTicker($wrapper) {
	const $innerWrap = $wrapper.find('.wpmozo_image_card_ticker_inner');

	// Kill all GSAP animations on the wrapper and inner elements
	gsap.killTweensOf($wrapper);
	gsap.killTweensOf($innerWrap);
	gsap.killTweensOf($innerWrap.children());

	// Remove event listeners
	$innerWrap.off('mouseenter mouseleave');

	// Reset transforms and styles
	gsap.set($wrapper, { clearProps: 'all' });
	gsap.set($innerWrap, { clearProps: 'all' });
	gsap.set($innerWrap.children(), { clearProps: 'all' });

	// Remove cloned items
	$innerWrap.find('.wpmozo-cloned-item').remove();

	// Remove layout classes
	$wrapper.removeClass('marquee-inited circle-carousel curve-carousel');
}
