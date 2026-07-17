import $ from 'jquery';

$(document).ready(function () {

	window.addEventListener('WPMozoScrollPostsPropsChanged', () => {
		$('.wp-block-wpmozo-horizontal-scrolling-posts').each(function () {
			gsap.registerPlugin(ScrollTrigger);
			initHorizontalScrollPost($(this));
		});
	});

	// Initial Scroll setup
	$('.wp-block-wpmozo-horizontal-scrolling-posts').each(function () {
		gsap.registerPlugin(ScrollTrigger);
		initHorizontalScrollPost($(this));
	});

});

function initHorizontalScrollPost($section){
	let $container       = $section.find('.wpmozo-sticky-posts-wrapper'),
		$scroller        = $section.find( '.wpmozo-sticky-posts-scroller' ),
		scrollableWidth  = $container[0].scrollWidth,
		visibleWidth     = $container.outerWidth(),
		totalScroll      = scrollableWidth - visibleWidth;

	let triggerPosition  = $container.data( 'animation_start_element_pos' ) || 'center',
		viewPortPosition = $container.data( 'animation_start_viewport_pos' ) || 'center',
		animationSpeed   = parseFloat( $container.data( 'animation_speed' ) ) || 1;


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
}




