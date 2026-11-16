import $ from 'jquery';
import { wpmozoBnaGetBlocksFromEvent, wpmozoBnaRefreshScrollTriggers, wpmozoBnaObserveForRefresh } from '../../common/scroll-trigger-utils';

$(document).ready(function () {

	// Editor: re-init only the block whose props changed.
	window.addEventListener('WPMozoScrollPostsPropsChanged', (event) => {
		wpmozoBnaGetBlocksFromEvent(event, '.wp-block-wpmozo-horizontal-scrolling-posts').each(function () {
			initHorizontalScrollPost($(this));
		});
	});

	// Initial Scroll setup
	$('.wp-block-wpmozo-horizontal-scrolling-posts').each(function () {
		initHorizontalScrollPost($(this));
	});
});

function initHorizontalScrollPost($section){
	gsap.registerPlugin(ScrollTrigger);
	let $container       = $section.find('.wpmozo-sticky-posts-wrapper'),
		$scroller        = $section.find( '.wpmozo-sticky-posts-scroller' ),
		scrollableWidth  = $container[0].scrollWidth,
		visibleWidth     = $container.outerWidth(),
		totalScroll      = scrollableWidth - visibleWidth;
	


	let triggerPosition  = $container.attr( 'data-animation_start_element_pos' ) || 'center',
		viewPortPosition = $container.attr( 'data-animation_start_viewport_pos' ) || 'center',
		animationSpeed   = parseFloat( $container.attr( 'data-animation_speed' ) ) || 1;

	$scroller.imagesLoaded(function () {
		ScrollTrigger.getAll().forEach( trigger => {
			if ( trigger.trigger === $scroller[0] ) {
				trigger.kill();
			}
		} );
		gsap.to( $container, {
			x: -totalScroll,
			ease: "none",
			duration: animationSpeed,
			scrollTrigger: {
				trigger: $scroller,
				pin: true,
				start: `${triggerPosition} ${viewPortPosition}`,
				scrub: true,
				end: () => `+=${totalScroll}`
			}
		} );
		// Created after images load, so re-sort to keep page order for the pins below.
		wpmozoBnaRefreshScrollTriggers();
	});
	wpmozoBnaObserveForRefresh($container[0]);
}