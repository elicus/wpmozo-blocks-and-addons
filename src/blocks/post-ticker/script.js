import $ from 'jquery';
import { wpmozo_is_empty } from "../../common/utils";

$(document).ready(function (e) {

	window.addEventListener('WPMozoPostTickerPropsChanged', () => {
		$('.wp-block-wpmozo-post-ticker').each(function () {
			let wrapObj = $(this).find(".wpmozo_post_ticker_wrap");
			let newAttributes = JSON.parse($(this).find(".wpmozo_post_ticker_wrap").attr('data-attr'));
			initPostTicker($(this), newAttributes);
		});
	});

	// Initial post ticker setup
	$('.wp-block-wpmozo-post-ticker').each(function () {
		let wrapObj = $(this).find(".wpmozo_post_ticker_wrap");
		let newAttributes = JSON.parse($(this).find(".wpmozo_post_ticker_wrap").attr('data-attr'));
		initPostTicker($(this), newAttributes);
	});
});

let wpmozoPostTickerSwipers = {};

function initPostTicker($galleryContainer, attributes) {
	const thisObj = $($galleryContainer),
		wrapObj = thisObj.find(".wpmozo_post_ticker_wrap"),
		$orderId = thisObj.attr('id'),
		clientId = wrapObj.attr( 'data-clientid' ) || $orderId;
	// Destroy if already exists.
	const oldSwiper = wpmozoPostTickerSwipers[clientId];
	if ( oldSwiper && ! wpmozo_is_empty( oldSwiper ) ) {
		// An instance without el/slidesEl was never mounted; destroying it with loop on throws inside Swiper.
		if ( ! oldSwiper.destroyed && oldSwiper.el && oldSwiper.slidesEl ) {
			try {
				oldSwiper.destroy( true, true );
			} catch ( e ) {}
		}
	}
	delete wpmozoPostTickerSwipers[clientId];

	const tickerEffect = attributes.ticker_effect;
	// Scroll effect.
	if ("scroll" === tickerEffect) {
		wpmozo_post_ticker_set_scroll_speed(wrapObj);
	}

	// Fade effect, init swipper slider.
	if ("fade" === tickerEffect || "slide" === tickerEffect) {
		// Nothing to init while the editor shows the loading/empty notice.
		const containerEl = wrapObj.find( '.swiper-container' )[0];
		if ( ! containerEl || 0 === $( containerEl ).find( '.swiper-slide' ).length ) {
			return;
		}

		let slideAlign = attributes.slide_align;
		let autoplaySpeed = attributes.fade_effect_delay;
		let transitionDuration = attributes.fade_effect_transition;
		let showArrow = attributes.show_arrow;

		let arrows = false;
		if (true === showArrow) {
			arrows = {
				nextEl: '#' + $orderId + " .swiper-button-next",
				prevEl: '#' + $orderId + " .swiper-button-prev",
			};
		}

		let fadeEffect = false;
		if ("fade" === tickerEffect) {
			fadeEffect = { crossFade: true };
		}

		var swipperSlider = new Swiper( containerEl, {
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


		if(window.self !== window.top){
			wrapObj.find('.swiper-container').on( 'mouseenter', function(e) {
				if ( typeof swipperSlider?.autoplay?.stop === "function" ) {
					swipperSlider.autoplay.stop();
				}
			} );
			wrapObj.find('.swiper-container').on( 'mouseleave', function(e) {
				if ( typeof swipperSlider?.autoplay?.start === "function" ) {
					swipperSlider.autoplay.start();
				}
			} );
		}

		wpmozoPostTickerSwipers[clientId] = swipperSlider;
	}
}

/**
 * Set speed of ticker.
 */
function wpmozo_post_ticker_set_scroll_speed(wrapObj) {
	let tickerListSize = wrapObj.find(".wpmozo_post_ticker_items").width(),
		tickerBarSize = wrapObj.find(".wpmozo_post_ticker_bar").width();

	let dataAttr = {};
	try { dataAttr = JSON.parse(wrapObj.attr('data-attr')); } catch {}
	let tickerSpeed = dataAttr.scroll_effect_delay || 70;

	let calcSpeed = (
		(tickerListSize + tickerBarSize) /
		tickerSpeed
	).toFixed(2);

	wrapObj
		.find(".wpmozo_post_ticker_bar")
		.css("animation-duration", calcSpeed + "s");
}