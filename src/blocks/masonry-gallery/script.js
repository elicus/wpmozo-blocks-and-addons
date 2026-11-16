import $ from 'jquery';


$(document).ready(function(e) {

	window.addEventListener('WPMozoMasonryGalleryPropsChanged', (e) => {
		const blockId = e?.detail?.id;
		let $targets = blockId ? $('#block-' + blockId + '.wp-block-wpmozo-masonry-gallery') : $();
		if (!$targets.length) {
			$targets = $('.wp-block-wpmozo-masonry-gallery');
		}
		$targets.each(function() {
			initMasonryGallery($(this));
		});
	});

	// Initial gallery setup
	$('.wp-block-wpmozo-masonry-gallery').each(function() {
		initMasonryGallery($(this));
	});
});

function initMasonryGallery($galleryContainer) {
	let $this = $galleryContainer.find('.wpmozo_masonry_gallery_wrapper');
	let $gallery = $this.isotope({
		itemSelector: '.wpmozo_masonry_gallery_item',
		layoutMode: 'masonry',
		percentPosition: true,
		resize: true,
		masonry: {
			columnWidth: '.wpmozo_masonry_gallery_item',
			gutter: '.wpmozo_masonry_gallery_item_gutter'
		}
	});
	// Pick up items React may have added/replaced (reloadItems), re-filter + lay them out
	// (arrange; plain 'layout' skips newly added items), then relayout as images load.
	$gallery.isotope('reloadItems').isotope('arrange');
	$this.imagesLoaded()
		.progress(function () {
			$gallery.isotope('layout');
		})
		.always(function () {
			$gallery.isotope('layout');
		});

	// Remove previous magnificPopup to avoid duplicates
	if ($this.data('magnificPopup')) {
		$this.magnificPopup('destroy');
	}

	if (
		$this.find('.wpmozo_masonry_gallery_item').is('a') &&
		$galleryContainer.hasClass('wpmozo-masonry-image-lightbox')
	) {
		const clientId = $galleryContainer.attr('id') || '';
		const mainClass = clientId + '-lightbox';
		$this.magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile wpmozo_masonry_gallery_lightbox ' + mainClass,
			gallery: {
				enabled: true,
				tPrev: '',
				tNext: '',
				tCounter: ''
			},
			image: {
				markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<div class="mfp-img"></div>'+
					'<div class="mfp-bottom-bar">'+
					'<div class="mfp-title"></div>'+
					'</div>'+
					'</div>',
				titleSrc: function(item) {
					return item.el.find('.wpmozo_masonry_gallery_title_caption_wrapper').length > 0 ? item.el.find('.wpmozo_masonry_gallery_title_caption_wrapper').html() : '';
				},
				tError: '<a href="%url%">The image</a> could not be loaded.',
			},
			allowHTMLInTemplate: true
		});
	} else {
		// Prevent default link behavior for <a> tags inside the gallery
		$this.off('click.wpmozoMasonryGallery').on('click.wpmozoMasonryGallery', 'a', function(e) {
			e.preventDefault();
		});
	}

	// Remove previous resize handler to avoid stacking
	$(window).off('resize.wpmozoMasonryGallery-' + $galleryContainer.attr('id'));
	$(window).on('resize.wpmozoMasonryGallery-' + $galleryContainer.attr('id'), function(){
		$gallery.isotope('layout');
	});
}
