import $ from 'jquery';
import { wpmozo_is_empty } from "../../common/utils";
let swiperInstances = {};
$(window).load(function() {
	window.addEventListener('propsChanged', () => {
        $('.wpmozo-bna-logo-slider-wrap').trigger('change');
    });
});

$(document).on('change', '.wpmozo-bna-logo-slider-wrap', function(e) {
    let newAttributes = JSON.parse($(this).attr('data-attr'));
    const clientId = newAttributes.clientId;
    if ( swiperInstances[clientId] && !wpmozo_is_empty( swiperInstances[clientId] ) ) {

		swiperInstances[clientId].destroy(true, true);
		swiperInstances[clientId] = initSwiper( $(this), newAttributes );
	
	} else {

	    swiperInstances[clientId] = initSwiper( $(this), newAttributes );
	
	}
	$(this).find('.wp-block-wpmozo-logo-slider-item').on('click', function () {

		// Trigger block selection in the editor (only works in editor context)
		if ( window.wp && wp.data && wp.data.dispatch ) {
			wp.data.dispatch('core/block-editor').selectBlock(clientId);
		}
	});
});

$(document).ready(function(e) {
	$('.wpmozo-bna-logo-slider-wrap').each(function(){
	    let newAttributes = JSON.parse($(this).attr('data-attr'));
	    const clientId = newAttributes.clientId;
	    if ( swiperInstances[clientId] && !wpmozo_is_empty( swiperInstances[clientId] ) ) {
			swiperInstances[clientId].destroy(true, true);
			swiperInstances[clientId] = initSwiper( $(this), newAttributes );
		}else {
		    swiperInstances[clientId] = initSwiper( $(this), newAttributes );
		}
		$(this).find('.wp-block-wpmozo-logo-slider-item').on('click', function () {

			// Trigger block selection in the editor (only works in editor context)
			if ( window.wp && wp.data && wp.data.dispatch ) {
				wp.data.dispatch('core/block-editor').selectBlock(clientId);
			}
		});
		
	});
});

function initSwiper(el,attributes){
	let block = el;
	let productsPerSlide = parseInt( attributes.logoPerSlide ),
		spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
		slidesPerGroup = parseInt( attributes.slidesPerGroup ),
		tabletLogoPerSlide = parseInt( attributes.tabletLogoPerSlide ),
		tabletSlidesPerGroup = parseInt( attributes.tabletSlidesPerGroup ),
		tabletSpaceBetweenSlides = parseInt( attributes.tabletSpaceBetweenSlides ),
		mobileLogoPerSlide = parseInt( attributes.mobileLogoPerSlide ),
		mobileSpaceBetweenSlides = parseInt( attributes.mobileSpaceBetweenSlides ),
		mobileSlidesPerGroup = parseInt( attributes.mobileSlidesPerGroup ),
		buttonNextClass = ( ! wpmozo_is_empty( attributes.nextSlideArrow ) )
			? '.custom-swiper-button-next'
			: '.swiper-button-next',
		buttonPrevClass = ( ! wpmozo_is_empty( attributes.previousSlideArrow ) )
			? '.custom-swiper-button-prev'
			: '.swiper-button-prev',
		slidesPerGroupSkip;

	let loop =  attributes.sliderLoop,
		speed = attributes.transitionDuration,
		arrows = false,
		dots = false,
		autoplaySlides = false;

	if ( productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
		slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
	}

	if ( attributes.showArrow ) {
		arrows = {
			nextEl: '#block-'+attributes.clientId+' '+buttonNextClass,
			prevEl: '#block-'+attributes.clientId+' '+buttonPrevClass
		};
	}

	if ( attributes.showControlDot ) {
		dots = {
			el: '#block-'+attributes.clientId+' .swiper-pagination',
			dynamicBullets: attributes.enableDynamicDots,
			clickable: true,
		};
	}

	if ( attributes.autoplay ) {
		if ( attributes.pauseOnHover ) {
			autoplaySlides = {
				delay: attributes.autoplaySpeed,
				disableOnInteraction: true,
				pauseOnMouseEnter: true,
			}
		}else{
			autoplaySlides = {
				delay: attributes.autoplaySpeed,
				disableOnInteraction: false,
				pauseOnMouseEnter: false
			}
		}
	}

	let options = {
		slidesPerView: productsPerSlide,
		spaceBetween: spaceBetweenSlides,
		slidesPerGroup: slidesPerGroup,
		loop: loop,
		speed: speed,
		pagination: dots,
		navigation: arrows,
		grabCursor: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			981: {
				slidesPerView: productsPerSlide,
				spaceBetween: spaceBetweenSlides,
				slidesPerGroup: slidesPerGroup,
			},
			768: {
				slidesPerView: tabletLogoPerSlide,
				spaceBetween: tabletSpaceBetweenSlides,
				slidesPerGroup: tabletSlidesPerGroup,
			},
			0: {
				slidesPerView: mobileLogoPerSlide,
				spaceBetween: mobileSpaceBetweenSlides,
				slidesPerGroup: mobileSlidesPerGroup
			}
		},
	};
	if( 'true' === attributes.autoplay){
		options.autoplay = autoplaySlides;
	}
	return new Swiper( block.find(`.swiper-container[data-client-id="${attributes.clientId}"`).get(0), options);
}