import $ from 'jquery';
jQuery( document ).ready( function($) {

	// On change on props, update the stem timeline.
	window.addEventListener( 'WPMozoBlogTimelinePropsChanged', (e) => {
		if ( '' !== e?.detail?.clientId && $( '#block-' + e.detail.clientId ).length > 0 ) {
			$(this).imagesLoaded(function () {
				wpmozo_bna_timeline_stem( $( '#block-' + e.detail.clientId ) );
			});

			// Set steam position and size.
			wpmozo_bna_stem_responsive_adjustment( $( '#block-' + e.detail.clientId ) );
		}
	} );

	// Initial execution of the timeline stem setup.
	$('body').find( '.wp-block-wpmozo-blog-timeline' ).each( function() {
		var $this = $(this);
		if ( $this.find( '.wpmozo_bna_blog_timeline_post' ).length > 0 ) {
			$this.imagesLoaded(function () {
				wpmozo_bna_timeline_stem( $this );
			});
		}

		// Set steam position and size.
		wpmozo_bna_stem_responsive_adjustment( $this );
	} );

	// On resize.
	$( window ).resize( function() {
		$('body').find('.wp-block-wpmozo-blog-timeline').each( function() {
			var $this = $(this);
			if ($this.find( '.wpmozo_bna_blog_timeline_post').length > 0 ) {
				wpmozo_bna_timeline_stem($this);
			}

			// Handle responsive content right and left timelines.
			if ( $(window).width() > 767 ) {
				// Content Alternate Timeline.
				if ( $this.find('.wpmozo_bna_blog_timeline_alternate').length > 0 ) {
					var outer_container = $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).outerWidth();
					var stem_width      = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position   = (outer_container + (stem_width / 2) + 10) + 'px';
					$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'left', "50%" );
				}
				// Content Right Timeline.
				if ( $this.find('.layout2.wpmozo_bna_blog_timeline_right').length > 0 ) {
					var outer_container = $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).outerWidth();
					var stem_width      = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position   = (outer_container + (stem_width / 2) + 10) + 'px';
					$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'left', stem_position );
				}

				// Content Left Timeline.
				if ( $this.find('.layout2.wpmozo_bna_blog_timeline_left').length > 0 ) {
					var outer_container = $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).outerWidth();
					var stem_width      = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position   = ( outer_container + (stem_width / 2) + 10 ) + 'px';
					$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'right', stem_position );
				}
			} else {
				// Content Alternate Timeline.
				if ( $this.find('.wpmozo_bna_blog_timeline_alternate').length > 0 ) {
					var outer_container = $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).outerWidth();
					var stem_width      = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position   = (stem_width / 2) + 'px';
					$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'left', stem_position );
				}
				// Content Right Timeline.
				if ( $this.find( '.layout2.wpmozo_bna_blog_timeline_right' ).length > 0 ) {
					var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position = (stem_width / 2) + 'px';
					$this.find('.wpmozo_bna_stem_wrapper').css( 'left', stem_position );
				}

				// Content Left Timeline.
				if ( $this.find('.layout2.wpmozo_bna_blog_timeline_left').length > 0 ) {
					var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
					var stem_position = (stem_width / 2) + 'px';
					$this.find('.wpmozo_bna_stem_wrapper').css( 'right', stem_position );
				}
			}
		} );
	} );

	// Init timeline stem.
	function wpmozo_bna_timeline_stem($this) {
		// Setting unfilled stem height and position.
		var first_icon_outer_height_half = $this.find( '.wpmozo_bna_blog_timeline_post' ).first().innerHeight() / 2;
		var last_icon_outer_height_half  = $this.find( '.wpmozo_bna_blog_timeline_post' ).last().innerHeight() / 2;

		var stem_padding  = ( first_icon_outer_height_half + last_icon_outer_height_half ) + 'px';
		var stem_height   = 'calc(100% - ' + stem_padding + ')';
		var stem_position = first_icon_outer_height_half + 'px';

		$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'height', stem_height );
		$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'top', stem_position );

		// Setting pre-filled stem.
		var $that                = $this.find( '.wpmozo_bna_blog_timeline_wrapper' );
		var first_icon_offset    = ($that.find( '.wpmozo_bna_blog_timeline_post .wpmozo_bna_blog_timeline_stem_center' ).length > 0) ? $that.find( '.wpmozo_bna_blog_timeline_post .wpmozo_bna_blog_timeline_stem_center' ).first().offset().top : 0;
		var last_icon_offset     = ($that.find( '.wpmozo_bna_blog_timeline_post .wpmozo_bna_blog_timeline_stem_center' ).length > 0 ) ? $that.find( '.wpmozo_bna_blog_timeline_post .wpmozo_bna_blog_timeline_stem_center' ).last().offset().top : 0;
		var screen_height_center = $(window).height() / 2;
		var timelineBarSize = parseFloat( $(this).find('.wpmozo_bna_stem_wrapper').outerWidth());
		var first_item_offset = ($this.find('.wpmozo_bna_blog_timeline_post').length > 0 ) ? $this.find('.wpmozo_bna_blog_timeline_post').first().offset().top : 0;

		if ( first_icon_offset < screen_height_center ) {
			var stem_height_px = $this.find( '.wpmozo_bna_stem_wrapper' ).innerHeight();
			var stem_fill_height     = ( (screen_height_center - last_icon_offset ) < (last_icon_offset - first_icon_offset - 10)) ? (screen_height_center - first_icon_offset)+"px" : ( last_icon_offset - first_icon_offset - 10) + "px";
			$this.find( '.wpmozo_bna_blog_stem' ).css( 'height', stem_fill_height );

			$this.find( '.wpmozo_bna_blog_timeline_stem_center' ).each( function() {
				var icon_offset = $(this).offset().top;
				if (icon_offset < screen_height_center) {
					$(this).find( '.wpmozo_bna_blog_timeline_post_icon' ).addClass( 'wpmozo_bna_icon_fill' );
				}
			} );

			// If the window height is greater than the document height, fill the stem completely.
			if ( $(window).height() >= $(document).height() ) {
				$this.find( '.wpmozo_bna_blog_stem' ).css( 'height', stem_height_px );
				$this.find( '.wpmozo_bna_blog_timeline_stem_center' ).each( function() {
					$(this).find( '.wpmozo_bna_blog_timeline_post_icon' ).addClass( 'wpmozo_bna_icon_fill' );
				} );
			}
		}

		// Setting scrolled stem.
		$( window ).on( 'scroll', function() {
			var stem_height_px = $this.find( '.wpmozo_bna_stem_wrapper' ).innerHeight();
			var scroll_amount  = $(window).scrollTop();
			var final_height   = ( scroll_amount + ( screen_height_center - first_icon_offset ) ) + "px";

			// Adjust stem height on scroll.
			if ( parseFloat( final_height ) < parseFloat( stem_height_px ) ) {
				$this.find( '.wpmozo_bna_blog_stem' ).css( 'height', final_height );
			}

			// Add or remove icon fill class based on scroll position.
			$this.find( '.wpmozo_bna_blog_timeline_post' ).each(function() {
				var $icon = $(this).find( '.wpmozo_bna_blog_timeline_stem_center' );
				if ( ($icon.offset().top - ($icon.outerWidth() / 2)) <= ( screen_height_center + scroll_amount ) ) {
					$icon.find( '.wpmozo_bna_blog_timeline_post_icon' ).addClass( 'wpmozo_bna_icon_fill' );
				} else {
					$icon.find( '.wpmozo_bna_blog_timeline_post_icon' ).removeClass( 'wpmozo_bna_icon_fill' );
				}
			} );

			// Ensure complete stem fill when the widget is scrolled past half the viewport.
			var widget_top         = ($this.length > 0) ? $this.offset().top : 0;
			var widget_height      = $this.outerHeight();
			var widget_bottom      = widget_top + widget_height;
			var half_window_height = $(window).height() / 2;

			if ( scroll_amount + half_window_height >= widget_bottom - ( $this.find('.wpmozo_bna_blog_timeline_wrapper').children().eq(-2).outerHeight()/2) ) {
				$this.find( '.wpmozo_bna_blog_stem' ).css( 'height', stem_height_px );
				$this.find( '.wpmozo_bna_blog_timeline_stem_center .wpmozo_bna_blog_timeline_post_icon' ).addClass( 'wpmozo_bna_icon_fill' );
			}
		} );
	}

	// Adjust responsive stem position.
	function wpmozo_bna_stem_responsive_adjustment( $this ) {

		// Remove both if not needed.
        $this.find( '.wpmozo_bna_stem_wrapper' ).css( { left: '', right: '' } );

		// Responsive adjustments for content left and right timelines.
		if ( $(window).width() > 767 ) {
			// Content Right Timeline.
			if ( $this.find('.layout2.wpmozo_bna_blog_timeline_right').length > 0 ) {
				var outer_container = Math.max.apply( null, $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).map( function() {
					return $(this).outerWidth();
				} ).get() );
				$this.find( '.wpmozo_bna_blog_timeline_outer_container' ).each( function() {
					$(this).css( 'min-width', outer_container + 'px' );
				} );
				var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
				var stem_position = (outer_container + (stem_width / 2) + 10) + 'px';
				$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'left', stem_position );
			}

			// Content Left Timeline.
			if ( $this.find('.layout2.wpmozo_bna_blog_timeline_left').length > 0 ) {
				var outer_container = Math.max.apply( null, $this.find( '.wpmozo_bna_blog_timeline_outer_container' ).map( function() {
					return $(this).outerWidth();
				} ).get() );
				$this.find( '.wpmozo_bna_blog_timeline_outer_container').each( function() {
					$(this).css( 'min-width', outer_container + 'px' );
				} );
				var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
				var stem_position = (outer_container + (stem_width / 2) + 10) + 'px';
				$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'right', stem_position );
			}
		} else {
			// Content Right Timeline.
			if ( $this.find('.layout2.wpmozo_bna_blog_timeline_right').length > 0 ) {
				var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
				var stem_position = (stem_width / 2) + 'px';
				$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'left', stem_position );
			}

			// Content Left Timeline.
			if ( $this.find('.layout2.wpmozo_bna_blog_timeline_left').length > 0 ) {
				var stem_width    = $this.find( '.wpmozo_bna_blog_timeline_stem_center' ).outerWidth();
				var stem_position = (stem_width / 2) + 'px';
				$this.find( '.wpmozo_bna_stem_wrapper' ).css( 'right', stem_position );
			}
		}
	}
} );
