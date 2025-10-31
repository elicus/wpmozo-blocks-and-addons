import $ from 'jquery';

$(document).ready(function (e) {

	window.addEventListener('WPMozoPostTickerPropsChanged', () => {
		$('.wp-block-wpmozo-post-ticker').each(function () {
			let wrapObj = $(this).find(".wpmozo_post_ticker_wrap");
			let newAttributes = JSON.parse(wrapObj.attr('data-attr'));
			initPostTicker($(this), newAttributes);
		});
	});

	// Initial post ticker setup
	$('.wp-block-wpmozo-post-ticker').each(function () {
		let wrapObj = $(this).find(".wpmozo_post_ticker_wrap");
		let newAttributes = JSON.parse(wrapObj.attr('data-attr'));
		initPostTicker($(this), newAttributes);
	});
});

function initPostTicker($galleryContainer, attributes) {
	let thisObj = $($galleryContainer),
		wrapObj = thisObj.find(".wpmozo_post_ticker_wrap");

	const $orderClass = thisObj
		.prop("class")
		.match('wpmozo_post_ticker');

	const tickerEffect = attributes.ticker_effect;
	// Scroll effect.
	if ("scroll" === tickerEffect) {
		wpmozo_post_ticker_set_scroll_speed(wrapObj);
	}

	// Fade effect, init swipper slider.
	if ("fade" === tickerEffect || "slide" === tickerEffect) {
		let slideAlign = attributes.slide_align;
		let autoplaySpeed = attributes.fade_effect_delay;
		let transitionDuration = attributes.fade_effect_transition;
		let showArrow = attributes.show_arrow;


		let arrows = false;
		if ("on" === showArrow) {
			arrows = {
				nextEl: "." + $orderClass + " .swiper-button-next",
				prevEl: "." + $orderClass + " .swiper-button-prev",
			};
		}

		let fadeEffect = false;
		if ("fade" === tickerEffect) {
			fadeEffect = { crossFade: true };
		}

		console.log($orderClass);

		var swipperSlider = new Swiper(
			".swiper-container",
			{
				direction: "slide" === tickerEffect ? slideAlign : "horizontal",
				slidesPerView: 1,
				slidesPerGroup: 1,
				slidesPerGroupSkip: 1,
				freeMode: true,
				autoHeight: true,
				autoplay: {
					delay: autoplaySpeed ? autoplaySpeed : 2500,
					disableOnInteraction: true,
				},
				spaceBetween: 0,
				effect: tickerEffect,
				fadeEffect: fadeEffect,
				speed: transitionDuration ? transitionDuration : 700,
				loop: true,
				navigation: arrows,
				grabCursor: true,
				observer: true,
				observeParents: true,
			}
		);
		jQuery("." + $orderClass + " .swiper-container").on(
			"mouseleave",
			function (e) {
				if (typeof swipperSlider.autoplay.start === "function") {
					swipperSlider.autoplay.start();
				}
			}
		);
		jQuery("." + $orderClass + " .swiper-container").on(
			"mouseenter",
			function (e) {
				if (typeof swipperSlider.autoplay.stop === "function") {
					swipperSlider.autoplay.stop();
				}
			}
		);
	}
}

/**
 * Set speed of ticker.
 */
function wpmozo_post_ticker_set_scroll_speed(wrapObj) {
	let tickerListSize = wrapObj.find(".wpmozo_post_ticker_items").width(),
		tickerBarSize = wrapObj.find(".wpmozo_post_ticker_bar").width(),
		tickerSpeed = wrapObj.data("scroll_effect_delay");

	let calcSpeed = (
		(tickerListSize + tickerBarSize) /
		tickerSpeed
	).toFixed(2);
	wrapObj
		.find(".wpmozo_post_ticker_bar")
		.css("animation-duration", calcSpeed + "s");
}
