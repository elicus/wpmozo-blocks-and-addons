jQuery(document).ready(function($){

    const wpmozoCoreFun = window.wpmozo;

    let wpmozoIsMobile = function(){
        return jQuery( window ).width() < 767;
    };

    let wpmozoInitTilt = function( element ){

        let $this = element,
            disableMobile = $this.data('disable-mobile');

        if ( ! disableMobile || ( disableMobile && ! wpmozoIsMobile() ) ) {

            let maxTilt = parseInt( $this.data('max-tilt') ),
            perspective = parseInt( $this.data('perspective') ),
            scale = parseFloat( $this.data('scale') ),
            speed = parseInt( $this.data('speed') ),
            axis = $this.data('disable-axis'),
            glare = $this.data('glare'),
            maxGlare = parseFloat( $this.data('max-alare') );

            $this.find('.wpmozo-adfgu-tilt-image-inner-wrapper').tilt({
                maxTilt:        maxTilt,
                perspective:    perspective,
                scale:          scale,
                speed:          speed,
                disableAxis:    axis,
                reset:          true,
                glare:          glare,
                maxGlare:       maxGlare 
            });

        }

    };

    let initSwiper = ( swiperEl, innerWrap, attributes ) => {

        let productsPerSlide = parseInt( attributes.perSlide ),
            spaceBetweenSlides = parseInt( attributes.spaceBetweenSlides ),
            slidesPerGroup = parseInt( attributes.slidesPerGroup ),
            tabletPerSlide = parseInt( attributes.tabletPerSlide ),
            tabletSlidesPerGroup = parseInt( attributes.tabletSlidesPerGroup ),
            tabletSpaceBetweenSlides = parseInt( attributes.tabletSpaceBetweenSlides ),
            mobilePerSlide = parseInt( attributes.mobilePerSlide ),
            mobileSpaceBetweenSlides = parseInt( attributes.mobileSpaceBetweenSlides ),
            mobileSlidesPerGroup = parseInt( attributes.mobileSlidesPerGroup ),
            buttonNextClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.nextSlideArrow ) ) 
                ? '.custom-swiper-button-next'
                : '.swiper-button-next',
            buttonPrevClass = ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.previousSlideArrow ) ) 
                ? '.custom-swiper-button-prev'
                : '.swiper-button-prev',
            paginationEl = '',
            buttonNext = '',
            buttonPrev = '';

        let loop =  attributes.sliderLoop,
            speed = attributes.transitionDuration,
            slideEffect = attributes.slideEffect,
            arrows = false,
            dots = false,
            autoplaySlides = false,
            slidesPerGroupSkip = 0,
            $cubeEffect = false,
            $coverflowEffect = false,
            $fadeEffect = false, 
            autoHeight = attributes.autoHeightSlider,
            enableDynamicDots = attributes.enableDynamicDots;

        if ( productsPerSlide > slidesPerGroup && 1 !== slidesPerGroup ) {
            slidesPerGroupSkip = productsPerSlide - slidesPerGroup;
        }

        if ( 'cube' === slideEffect ) {
            $cubeEffect = {
                shadow: false,
                slideShadows: false,
            };
        }

        if ( 'coverflow' === slideEffect ) {
            $coverflowEffect = {
                rotate: attributes.coverflowRotate,
                stretch: 0,
                depth: attributes.coverflowDepth,
                modifier: 1,
                slideShadows : attributes.enableCoverflowShadow,
            };
        }

        if ( 'fade' === slideEffect ) {
            $fadeEffect = { crossFade: true };
        }

        if ( attributes.showArrow ) {
            buttonNext = innerWrap.find(buttonNextClass)[0];
            buttonPrev = innerWrap.find(buttonPrevClass)[0];
            arrows = {
                nextEl: buttonNext,
                prevEl: buttonPrev
            };
        }

        if ( attributes.showControlDot ) {
            paginationEl = innerWrap.find('.swiper-pagination')[0];
            dots = {
                el: paginationEl,
                dynamicBullets: enableDynamicDots,
                clickable: true
            };
        }

        if ( attributes.autoplay ) {
            if ( attributes.pauseOnHover ) {
                autoplaySlides = {
                    delay: attributes.autoplaySpeed,
                    disableOnInteraction: true,
                }
            }else{
                autoplaySlides = {
                    delay: attributes.autoplaySpeed,
                    disableOnInteraction: false,
                }
            }
        }

        let options = {
            slidesPerView: productsPerSlide,
            spaceBetween: slidesPerGroup,
            slidesPerGroup: slidesPerGroup,
            autoplay: autoplaySlides,
            loop: loop,
            speed: speed,
            effect: slideEffect,
            cubeEffect: $cubeEffect,
            coverflowEffect: $coverflowEffect,
            fadeEffect: $fadeEffect,
            pagination: dots,
            navigation: arrows,
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoHeight: autoHeight,
            breakpoints: {
                981: {
                    slidesPerView: productsPerSlide,
                    spaceBetween: spaceBetweenSlides,
                    slidesPerGroup: slidesPerGroup,
                },
                768: {
                    slidesPerView: tabletPerSlide,
                    spaceBetween: tabletSpaceBetweenSlides,
                    slidesPerGroup: tabletSlidesPerGroup,
                },
                0: {
                    slidesPerView: mobilePerSlide,
                    spaceBetween: mobileSpaceBetweenSlides,
                    slidesPerGroup: mobileSlidesPerGroup
                }
            },
        };

        const swiper = new Swiper( swiperEl, options );

        return swiper;
    }

    jQuery('.wpmozo-adfgu-before-after-image-wrapper').each(function( key, el ){

        let $this = jQuery(this),
        before_label = $this.data('before-label'),
        after_label = $this.data('after-label'),
        handle_offset = $this.data('handle-offset'),
        slider_orientation = $this.data('slider-orientation'),
        move_onhover = $this.data('move-onhover'),
        move_onclick = $this.data('move-onclick');

        $this.twentytwenty({
            default_offset_pct: handle_offset,
            orientation: slider_orientation,
            before_label: before_label,
            after_label: after_label,
            move_slider_on_hover: move_onhover,
            move_with_handle_only: true,
            click_to_move: move_onclick
        });

    });

    jQuery('.wpmozo-adfgu-toggle-field').change(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    jQuery('.wpmozo-adfgu-toggle-title-wrap > :header').click(function(e){

        let wrap = jQuery(this).closest('.wpmozo-adfgu-toggle-title-wrap'),
        selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( wrap.hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo_switch_trigger').click(function(e){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main'),
        input = selector.find('.wpmozo-adfgu-toggle-field');

        if ( jQuery(this).hasClass('wpmozo-adfgu-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo-adfgu-toggle-field').each(function( keym, el ){

        let selector = jQuery(this).closest('.wpmozo-adfgu-content-toggle-main');
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    function wpmozo_toggle_switch( input, main ){

        if( input.is(':checked') ){
            main.find('.wpmozo-adfgu-content-toggle-one').removeClass('wpmozo-adfgu-content-toggle-active');
            main.find('.wpmozo-adfgu-content-toggle-two').addClass('wpmozo-adfgu-content-toggle-active');
        }else{
            main.find('.wpmozo-adfgu-content-toggle-one').addClass('wpmozo-adfgu-content-toggle-active');
            main.find('.wpmozo-adfgu-content-toggle-two').removeClass('wpmozo-adfgu-content-toggle-active');
        }

    }

    jQuery('body').find('.wpmozo-adfgu-flip-box-wrap').each(function(){

        let $this = jQuery(this);
        var maxHeight = Math.max.apply( null, $this.find('.wpmozo-adfgu-flip-box-side').map( function(){
            return jQuery(this).outerHeight();
        }).get());

        jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function(){
            jQuery(this).css('height', maxHeight+'px');
        });

    });

    jQuery("body").find(".wpmozo-adfgu-tilt-image").each(function() {
        wpmozoInitTilt( $(this) );
    });

    jQuery( window ).resize(
        function(){

            jQuery("body").find(".wpmozo-adfgu-tilt-image").each(function() {
                wpmozoInitTilt( $(this) );
            });

        }
    );

    jQuery("body").find(".wpmozo-adfgu-logo-slider-wrap").each(function() {

        let swiperEl = jQuery(this).find('.swiper-container')[0],
        attributes = jQuery(this).data('attr'),
        innerWrap = jQuery(swiperEl).closest('.wpmozo-adfgu-logo-slider-inner-wrap');

        initSwiper( swiperEl, innerWrap, attributes );

        jQuery(swiperEl).on("mouseenter", function(e) {

            let swiperContainer = jQuery(this)[0],
            swiperInstance = ( swiperContainer.hasOwnProperty( 'swiper' ) ) ? swiperContainer.swiper : null;

            if ( swiperInstance.params.autoplay.disableOnInteraction && typeof swiperInstance.autoplay.stop === "function" ) {
                swiperInstance.autoplay.stop();
            }

        });

        jQuery(swiperEl).on("mouseleave", jQuery(swiperEl), function(e) {

            let swiperContainer = jQuery(this)[0],
            swiperInstance = ( swiperContainer.hasOwnProperty( 'swiper' ) ) ? swiperContainer.swiper : null;

            if ( swiperInstance.params.autoplay.disableOnInteraction && typeof swiperInstance.autoplay.start === "function" ) {
                swiperInstance.autoplay.start();
            }
          
        });

    });

    jQuery(document).find(".wpmozo-adfgu-team-slider-wrap").each(function( key, el ) {

        let $this = jQuery(this),
            attributes = $this.data('attr'),
            swiperEl = $this.find('.swiper-container')[0],
            innerWrap = jQuery(swiperEl).closest('.wpmozo-adfgu-swiper-inner-wrap');

        initSwiper( swiperEl, innerWrap, attributes );

    });  

})