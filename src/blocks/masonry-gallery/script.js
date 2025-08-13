jQuery(function($) {
	// Cache selectors
	var $gallery = $('.wp-block-wpmozo-masonry-gallery.wpmozo_masonry_gallery');
	var $wrapper = $('.wpmozo_masonry_gallery_wrapper');


	$('.wp-block-wpmozo-masonry-gallery').each(function() {

		let $galleryContainer = $(this);
		let $this = $galleryContainer.find('.wpmozo_masonry_gallery_wrapper');
		let $gallery = $this.isotope({
			// options
			itemSelector: '.wpmozo_masonry_gallery_item',
			layoutMode: 'masonry',
			percentPosition: true,
			resize: true,
			masonry: {
				columnWidth: '.wpmozo_masonry_gallery_item',
				gutter: '.wpmozo_masonry_gallery_item_gutter'
			}
		});
		$gallery.imagesLoaded(function () {
			console.log('here 85');

			setTimeout(() => {
				$gallery.isotope('layout');
				$gallery.isotope('reloadItems');
			}, 200);

		});

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
			$this.on('click', 'a', function(e) {
				e.preventDefault();
			});
		}

		$(window).resize(function(){
			$gallery.isotope('layout');
		});
	});
});
