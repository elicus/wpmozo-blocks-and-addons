import $ from 'jquery';

$(document).ready(function () {

	window.addEventListener('WPMozoScrollZoomGalleryPropsChanged', () => {
		$('.wp-block-wpmozo-scrolling-zoom-gallery').each(function () {
			gsap.registerPlugin(ScrollTrigger);
			initScrollZoomGallery($(this));
		});
	});

	// Initial Scroll setup
	$('.wp-block-wpmozo-scrolling-zoom-gallery').each(function () {
		gsap.registerPlugin(ScrollTrigger);
		initScrollZoomGallery($(this));
	});

});


function initScrollZoomGallery($gallery) {
	let $scroller     = $gallery.find('.wpmozo_scroll_zoom_gallery_scroller'),
		$innerObj     = $gallery.find('.wpmozo_scroll_zoom_gallery_inner'),
		$images       = $gallery.find('.wpmozo_scroll_zoom_gallery_item'),
		startOpacity  = parseFloat($scroller.data('start_opacity')),
		imageCount    = $images.length;

	// Cleanup previous ScrollTriggers if any
	ScrollTrigger.getAll().forEach(function(t) {
		if (t.trigger === $scroller[0]) {
			t.kill();
		}
	});

	let tl = gsap.timeline({
		defaults: {
			duration: (imageCount * 2),
			ease: 'none'
		},
		scrollTrigger: {
			trigger: $scroller[0],
			start: "top top",
			end: "+=" + (imageCount * 150) + "%",
			scrub: 1,
			pin: true,
			anticipatePin: 1,
			onEnter: function() { $('html').addClass('wpmozo_hide_scrollbar'); },
			onLeave: function() { $('html').removeClass('wpmozo_hide_scrollbar'); },
			onEnterBack: function() { $('html').addClass('wpmozo_hide_scrollbar'); },
			onLeaveBack: function() { $('html').removeClass('wpmozo_hide_scrollbar'); }
		}
	});

	$images.each(function(i) {
		let translateZ = (i + 1) * 200 + 100,
			transZ     = '-' + (i + 1) * 200;

		tl.to($innerObj[0], { z: translateZ })
			.fromTo(this, { opacity: startOpacity, z: transZ }, { opacity: 1, z: transZ }, i);
	});

}
