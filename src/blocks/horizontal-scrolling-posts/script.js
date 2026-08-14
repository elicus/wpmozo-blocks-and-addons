import $ from 'jquery';

$(document).ready(function () {

	window.addEventListener('WPMozoScrollPostsPropsChanged', () => {
		$('.wp-block-wpmozo-horizontal-scrolling-posts').each(function () {
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
		ScrollTrigger.getAll().forEach(trigger => {
			if ( trigger.trigger === $scroller[0] ) {
				trigger.refresh();
			}
		});
	});
}




