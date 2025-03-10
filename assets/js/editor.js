const { dispatch, select } = window.wp.data;

jQuery(document).ready(function(){

	let selectedClass = 'block-editor-block-list__block wp-block is-selected';

	jQuery(document).on("click", "body", function(e) {

		let target = jQuery( e.target );

		if ( target.closest('.swiper-slide').length > 0 ) {

			jQuery(".swiper-slide.block-editor-block-list__block").removeClass(selectedClass);

			const slide = target.closest('.swiper-slide'),
			swiperContainer = jQuery(slide).closest('.swiper-container'),
			clientId = jQuery(swiperContainer).data('client-id');
	        jQuery(slide).addClass(selectedClass);
        	dispatch( 'core/block-editor' ).selectBlock( clientId );

		}else{

			jQuery(".swiper-slide.block-editor-block-list__block").closest('.wpmozo-adfgu-logo-slider-main').removeClass('has-child-selected');
			jQuery(".swiper-slide.block-editor-block-list__block").removeClass(selectedClass);

			if ( target.closest('.wpmozo-adfgu-logo-slider-main').length > 0 ) {

				let slider = target.closest('.wpmozo-adfgu-logo-slider-main'),
				clientId = jQuery(slider).data('block');

	        	dispatch( 'core/block-editor' ).selectBlock( clientId );

			}

	    }

    });

});