jQuery( document ).ready( function( $ ) {

	// On change on props, update the slider again.
	window.addEventListener( 'WPMozoTeamSliderPropsChanged', () => {
		$( '.wp-block-wpmozo-team-slider' ).each( function() {
			initWPMozoTeamMemberSlider( $( this ) );
		} );
	} );

	// Init on load.
	$( '.wp-block-wpmozo-team-slider' ).each( function() {
		initWPMozoTeamMemberSlider( $( this ) );
	} );

	// Link click on team item.
	$( document ).on( 'click', '.wpmozo_bna_team_link', function(e) {
		if ( $(e.target).is( $(this).find( '.wpmozo_bna_team_member_social_icon' ) ) ) {
			return;
		}
		e.preventDefault();
		let link   = $(this).attr( 'data-link' ),
			target = $(this).attr( 'data-link_target' );
		window.open( link, target );
	} );

	$( document ).on( 'click', '.wpmozo_bna_team_popup', function(e) {
		if ( $(e.target).is( $(this).find('.wpmozo_bna_team_member_social_icon') ) ) {
			return;
		}
		e.preventDefault();

		let $wrapObj = $( this );
		if ( ! $wrapObj.hasClass( 'wpmozo_bna_team_member_card' ) ) {
			$wrapObj = $wrapObj.parents( '.wpmozo_bna_team_member_card' );
		}

		// Main wrap.
		let $mainWrap = $wrapObj.closest( '.wpmozo_swiper_wrapper' )
		let $props    = $.extend( {}, $wrapObj.data(), {
			show_designation     : $mainWrap.attr( 'data-show_designation' ),
			show_content         : $mainWrap.attr( 'data-show_content' ),
			show_skills_bars     : $mainWrap.attr( 'data-show_skills_bars' ),
			show_social_icons    : $mainWrap.attr( 'data-show_social_icons' ),
			show_image           : $mainWrap.attr( 'data-show_image' ),
			bar_layout           : $mainWrap.attr( 'data-bar_layout' ),
			use_stripes          : $mainWrap.attr( 'data-use_stripes' ),
			use_animated_stripes : $mainWrap.attr( 'data-use_animated_stripes' ),
			popup_name_level     : $mainWrap.attr( 'data-popup_name_level' ),
		} );
		
		let	$position            = $wrapObj.data( 'close_icon_position' );
		let $close_icon_position = 'inside' === $position ? true : false;

		$wrapObj.addClass( 'wpmozo_bna_team_lightbox_loader' );
		$.ajax( {
			type: 'POST',  
			url: WPMozoTeamSliderData.ajaxurl,
			data: {
				action: 'wpmozo_bna_get_team_detail',
				_ajax_nonce: WPMozoTeamSliderData.ajaxnonce,
				props: $props
			},
			success: function(response) {
				$wrapObj.removeClass( 'wpmozo_bna_team_lightbox_loader' );

				let $orderClass = 'block-' + $mainWrap.attr( 'data-clientid' ) + '_lightbox';

				$.magnificPopup.open( {
					preloader: true,
					closeOnContentClick: false,
					closeBtnInside: $close_icon_position,
					mainClass: 'wpmozo_bna_team_member_lightbox ' + $orderClass,
					items: {
						src: $( response.data.html ),
						type: 'inline'
					},
					callbacks: {
						open: function() {
							let $lightbox = $( '.wpmozo_bna_team_member_lightbox');
							// Check for bars layout one.
							if ( $lightbox.find( '.wpmozo_bna_filled_bar' ).length > 0 ) {
								$lightbox.find( '.wpmozo_bna_filled_bar' ).each( function() {
									let $this = $(this);
									$this.waypoint( {
										handler: function() {
											let width = $this.attr( 'data-skill' );
											$this.css( 'width', width );
										},
										context: $this
									} );
								} );
							}
							// Check for bars layout two.
							if ( $lightbox.find( '.wpmozo_bna_bar_counter_chunks' ).length > 0 ) {
								$lightbox.find( '.wpmozo_bna_bar_counter_filled_chunks' ).each( function() {
									let $this = $(this);
									$this.waypoint({
										handler: function() {
											$this.addClass( 'wpmozo_bna_animate_filled' );
										},
										context: $this
									} );
								} );
							} // Over bars animation.
						} // Over open callback.
					}
				} );
			},
			error: function(e) {
			} // Ajax error.
		} );
	} );

	// Init slider arrows.
	$( document ).find( '.wp-block-wpmozo-team-slider' ).each( function() {
		let $arrows = $(this).find('.wpmozo_swiper_navigation').data();
		if ( $arrows ) {
			let $winWidth = jQuery(window).width();
			if ( $winWidth > 980 && typeof( $arrows['arrows_desktop'] ) !== 'undefined' ) {
				wpmozo_remove_arrows_classes( $(this).find('.wpmozo_swiper_navigation') );
				$(this).find('.wpmozo_swiper_navigation').addClass( 'wpmozo_arrows_' + $arrows['arrows_desktop'] );
			}
		}
	} );

	function wpmozo_get_arrows_classes() {
		return [
			'wpmozo_arrows_top_left', 'wpmozo_arrows_top_center', 'wpmozo_arrows_top_right',
			'wpmozo_arrows_bottom_left', 'wpmozo_arrows_bottom_center', 'wpmozo_arrows_bottom_right',
			'wpmozo_arrows_outside', 'wpmozo_arrows_inside',
		];
	}

	function wpmozo_remove_arrows_classes( $element ) {
		let $arrowClasses = wpmozo_get_arrows_classes();
		$element.removeClass( $arrowClasses.join(' ') );
	}
} ); // Over document ready.

let wpmozoTeamMemberSwipers = {};

// init team member slider.
function initWPMozoTeamMemberSlider( blockObj ) {

	// skill bar animation.
	blockObj.find( '.wpmozo_bna_team_member_card' ).each( function() {
		blockObj.find( '.wpmozo_bna_filled_bar' ).each( function() {
			jQuery( this ).animate( { width: jQuery( this ).attr( 'data-skill' ) }, 1000,'linear' );
		} );
	} );

	const wrapObj  = blockObj.find( '.wpmozo_swiper_wrapper' );
	const clientId = wrapObj.attr( 'data-clientId' );

	// Destroy if already exists.
	if ( wpmozoTeamMemberSwipers[clientId] ) {
		wpmozoTeamMemberSwipers[clientId].destroy( true, true );
	}

	// Get the settings.
	const settings  = {
		'slide_effect'                : wrapObj.attr( 'data-slide_effect' ),
		'show_arrow'                  : wrapObj.attr( 'data-show_arrows' ),
		'show_control_dot'            : wrapObj.attr( 'data-show_control_dot' ),
		'enable_loop'                 : wrapObj.attr( 'data-enable_loop' ),
		'auto_height'                 : wrapObj.attr( 'data-auto_height' ),
		'autoplay'                    : wrapObj.attr( 'data-autoplay' ),
		'autoplay_delay'              : wrapObj.attr( 'data-autoplay_delay' ),
		'trans_duration'              : wrapObj.attr( 'data-trans_duration' ),
		'pause_on_hover'              : wrapObj.attr( 'data-pause_on_hover' ),
		'enable_coverflow_shadow'     : wrapObj.attr( 'data-enable_coverflow_shadow' ),
		'coverflow_rotate'            : wrapObj.attr( 'data-coverflow_rotate' ),
		'coverflow_depth'             : wrapObj.attr( 'data-coverflow_depth' ),
		'enable_dynamic_dots'         : wrapObj.attr( 'data-enable_dynamic_dots' ),
		'per_view'                    : wrapObj.attr( 'data-slides_per_view' ),
		'per_view_tablet'             : wrapObj.attr( 'data-slides_per_view_tablet' ),
		'per_view_mobile'             : wrapObj.attr( 'data-slides_per_view_mobile' ),
		'per_group'                   : wrapObj.attr( 'data-slides_per_group' ),
		'per_group_tablet'            : wrapObj.attr( 'data-slides_per_group_tablet' ),
		'per_group_mobile'            : wrapObj.attr( 'data-slides_per_group_mobile' ),
		'space_between_slides'        : wrapObj.attr( 'data-space_between_slides' ),
		'space_between_slides_tablet' : wrapObj.attr( 'data-space_between_slides_tablet' ),
		'space_between_slides_mobile' : wrapObj.attr( 'data-space_between_slides_mobile' ),
	};

	let $orderId   = 'block-' + clientId,

		$slidesPerGroup              = 1,
		$slidesPerGroupIpad          = 1,
		$slidesPerGroupMobile	     = 1,
		$slidesPerGroupSkip		     = 0,
		$slidesPerGroupSkipIpad		 = 0,
		$slidesPerGroupSkipMobile	 = 0,
		$slides_per_view             = 1,
		$slides_per_view_ipad        = 1,
		$slides_per_view_mobile      = 1,
		$space_between_slides        = 0,
		$space_between_slides_ipad	 = 0,
		$space_between_slides_mobile = 0;

	let slideEffect = ( settings.slide_effect ) ?? 'slide';
	if ( 'slide' === slideEffect || 'coverflow' === slideEffect ) {
		$slides_per_view             = ( settings?.per_view ) ? settings.per_view : '1';
		$slides_per_view_ipad        = ( settings?.per_view_tablet ) ? settings.per_view_tablet : $slides_per_view;
		$slides_per_view_mobile      = ( settings?.per_view_mobile ) ? settings.per_view_mobile : $slides_per_view_ipad;

		$space_between_slides        = ( settings?.space_between_slides ) ? settings.space_between_slides : '20px';
		$space_between_slides_ipad   = ( settings?.space_between_slides_tablet ) ? settings.space_between_slides_tablet : $space_between_slides;
		$space_between_slides_mobile = ( settings?.space_between_slides_mobile ) ? settings.space_between_slides_mobile : $space_between_slides_ipad;

		$slidesPerGroup 		      = ( settings?.per_group ) ? settings.per_group : '1';
		$slidesPerGroupIpad			  = ( settings?.per_group_tablet ) ? settings.per_group_tablet : $slidesPerGroup;
		$slidesPerGroupMobile		  = ( settings?.per_group_phone ) ? settings.per_group_phone : $slidesPerGroupIpad;

		if ( $slides_per_view > $slidesPerGroup && 1 !== $slidesPerGroup ) {
			$slidesPerGroupSkip = parseInt( $slides_per_view ) - parseInt( $slidesPerGroup );
		}
		if ( $slides_per_view_ipad > $slidesPerGroupIpad && 1 !== $slidesPerGroupIpad ) {
			$slidesPerGroupSkipIpad = parseInt( $slides_per_view_ipad ) - parseInt( $slidesPerGroupIpad );
		}
		if ( $slides_per_view_mobile > $slidesPerGroupMobile && 1 !== $slidesPerGroupMobile ) {
			$slidesPerGroupSkipMobile = parseInt( $slides_per_view_mobile ) - parseInt( $slidesPerGroupMobile );
		}
	}

	let autoplay_speed      = ( settings?.autoplay_delay ) ?? 3000,
		pause_on_hover      = ( settings?.pause_on_hover ) ?? 'true',
		transition_duration = ( settings?.trans_duration ) ?? 1000,
		loop_param          = ( 'true' === settings?.enable_loop ) ? true : false,
		dynamic_bullets     = ( 'true' === settings?.enable_dynamic_dots ) ? true : false;

	let $arrow_params = 'false';
	if ( 'true' === settings?.show_arrow ) {
		$arrow_params = {
			nextEl: '#' + $orderId + ' .swiper-button-next',
			prevEl: '#' + $orderId + ' .swiper-button-prev',
		};
	}
	let $control_dot_params = false;
	if ( 'true' === settings?.show_control_dot ) {
		$control_dot_params = {
			el: '#' + $orderId + ' .swiper-pagination',
			dynamicBullets: dynamic_bullets,
			clickable: true,
		}
	}

	let $autoplay_param = 0;
	if ( 'true' === settings?.autoplay ) {
		$autoplay_param = {
			delay: parseInt( autoplay_speed ),
			disableOnInteraction: ( 'on' === pause_on_hover ) ? true : false,
		};
	}
	let $slide_setting_cube = false;
	if ( 'cube' === slideEffect ) {
		$slide_setting_cube = {
			shadow: false,
			slideShadows: false,
		};
	}

	let $slide_setting_coverflow = false;
	if ( 'coverflow' === slideEffect ) {
		$slide_setting_coverflow = {
			rotate: ( settings?.coverflow_rotate ) ?? 40,
			stretch: 0,
			depth: ( settings?.coverflow_depth ) ?? 100,
			modifier: 1,
			slideShadows : ( settings?.enable_coverflow_shadow ) ?? false,
		};
		loop_param = true;
	}

	let $fade = false;
	if ( 'fade' === slideEffect ) {
		$fade = { crossFade: true };
	}

	var swipperSlider = new Swiper( '#' + $orderId + ' .swiper-container', {
		slidesPerView: parseInt( $slides_per_view ),
		autoplay: $autoplay_param,
		spaceBetween: parseInt( $space_between_slides ),
		slidesPerGroup: parseInt( $slidesPerGroup ),
		slidesPerGroupSkip: parseInt( $slidesPerGroupSkip ),
		effect: slideEffect,
		cubeEffect: $slide_setting_cube,
		coverflowEffect: $slide_setting_coverflow,
		fadeEffect: $fade,
		autoHeight: ( 'true' === settings?.auto_height ) ? true : false,
		speed: parseInt( transition_duration ),
		loop: loop_param,
		pagination: $control_dot_params,
		navigation: $arrow_params,
		grabCursor: true,
		observer: true,
		observeParents: true,
		breakpoints: {
			1080: {
				slidesPerView: parseInt( $slides_per_view ),
				spaceBetween: parseInt( $space_between_slides ),
				slidesPerGroup: parseInt( $slidesPerGroup ),
				slidesPerGroupSkip: parseInt( $slidesPerGroupSkip ),
			},
			767: {
				slidesPerView: parseInt( $slides_per_view_ipad ),
				spaceBetween: parseInt( $space_between_slides_ipad ),
				slidesPerGroup: parseInt( $slidesPerGroupIpad ),
				slidesPerGroupSkip: parseInt( $slidesPerGroupSkipIpad ),
			},
			0: {
				slidesPerView: parseInt( $slides_per_view_mobile ),
				spaceBetween: parseInt( $space_between_slides_mobile ),
				slidesPerGroup: parseInt( $slidesPerGroupMobile ),
				slidesPerGroupSkip: parseInt( $slidesPerGroupSkipMobile ),
			}
		}
	} );

	wrapObj.addClass( 'wpmozo-slider-initialized' );
	if ( 'true' === pause_on_hover && 'true' === settings?.autoplay ) {
		jQuery( '#' + $orderId + ' .swiper-container' ).on( 'mouseleave', function(e) {
			if ( typeof swipperSlider?.autoplay?.stop === "function" ) {
				swipperSlider.autoplay.stop();
			}
		} );
		jQuery( '#' + $orderId + ' .swiper-container' ).on( 'mouseenter', function(e) {
			if ( typeof swipperSlider?.autoplay?.start === "function" ) {
				swipperSlider.autoplay.start();
			}
		} );
	}
	if ( 'true' !== settings?.enable_loop ) {
		swipperSlider.on( 'reachEnd', function() {
			swipperSlider.autoplay = false;
		} );
	}

	// Add the swipers object to global vars.
	wpmozoTeamMemberSwipers[clientId] = swipperSlider;
}
