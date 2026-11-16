import $ from 'jquery';
import { wpmozoBnaGetBlocksFromEvent, wpmozoBnaRefreshScrollTriggers, wpmozoBnaObserveForRefresh } from '../../common/scroll-trigger-utils';

$(document).ready(function () {

	// Editor: re-init only the block whose props changed.
	window.addEventListener('WPMozoWavyGalleryPropsChanged', (event) => {
		wpmozoBnaGetBlocksFromEvent(event, '.wp-block-wpmozo-wavy-gallery').each(function () {
			initWavyGallery($(this));
		});
	});

	// Initial Scroll setup
	$('.wp-block-wpmozo-wavy-gallery').each(function () {
		initWavyGallery($(this));
	});

});


// Init wavy gallery.
function initWavyGallery( thisObj ) {
	const blockId = thisObj.attr('data-block');
	gsap.registerPlugin( ScrollTrigger );
	if(window.self !== window.top){
		ScrollTrigger.getById(`stwg-${blockId}`) ? ScrollTrigger.getById(`stwg-${blockId}`).kill(true) : '';
	}
	// Enable once; calling it again on every init creates extra scroll normalizers.
	if ( ! ScrollTrigger.normalizeScroll() ) {
		ScrollTrigger.normalizeScroll( true );
	}

	const orderClass = thisObj.attr('id');

	// Unique event namespace per gallery, kept across re-inits.
	if ( ! thisObj.data( 'wpmozoBnaWavyNs' ) ) {
		window.wpmozoBnaWavyCount = ( window.wpmozoBnaWavyCount || 0 ) + 1;
		thisObj.data( 'wpmozoBnaWavyNs', `.wpmozoBnaWavy${ window.wpmozoBnaWavyCount }` );
	}
	const eventNs = thisObj.data( 'wpmozoBnaWavyNs' );

	// Clean up a previous init of this block (editor re-init): animation loop, overlay and events.
	const prevAnimationId = thisObj.data( 'wpmozoBnaWavyAnimationId' );
	if ( prevAnimationId ) {
		cancelAnimationFrame( prevAnimationId );
	}
	const $prevOverlay = thisObj.data( 'wpmozoBnaWavyOverlay' );
	if ( $prevOverlay ) {
		$prevOverlay.remove();
	}
	jQuery( window ).off( eventNs );

	let $section         = thisObj.find( '.wpmozo_wavy_gallery_wrapper' ),
		$wrapper         = $section.find( '.wpmozo_wavy_gallery_items' ),
		$images          = $wrapper.find( '.wpmozo_wavy_gallery_item' ),
		showOverlayTitle = $section.attr( 'data-show_overlay_title' );

	// $overlayContent  = $overlay.find( '.wpmozo_wavy_gallery_overlay_items' ),
	// $overlayTitle    = $overlay.find( '.wpmozo_wavy_gallery_overlay_item_title' );
	// $overlay         = $section.find( '.wpmozo_wavy_gallery_overlay' ),

	let wrapperEl = $wrapper[0],
		sectionEl = $section[0],
		scrollDistance = wrapperEl.scrollWidth - sectionEl.offsetWidth;

	let lastScrollX = 0,
		lastTime    = performance.now(),
		scrollSpeed = 0,
		isScrolling = false,
		imageData   = new Map(),
		scrollTimeout;

	gsap.to( wrapperEl, {
		x: () => `-${scrollDistance}`,
		ease: "none",
		scrollTrigger: {
			id:`stwg-${blockId}`,
			trigger: sectionEl,
			start: "top top",
			end: () => `+=${scrollDistance}`,
			scrub: true,
			pin: true,
			onEnter: () => jQuery('html').addClass( "wpmozo_hide_scrollbar" ),
			onLeave: () => jQuery('html').removeClass( "wpmozo_hide_scrollbar" ),
			onEnterBack: () => jQuery('html').addClass( "wpmozo_hide_scrollbar" ),
			onLeaveBack: () => jQuery('html').removeClass( "wpmozo_hide_scrollbar" ),
			onUpdate: (self) => {
				isScrolling = true;

				let currentScrollX = self.scroll(),
					currentTime    = performance.now(),
					deltaTime      = currentTime - lastTime || 1;

				scrollSpeed = Math.abs( currentScrollX - lastScrollX ) / deltaTime * 100;
				lastScrollX = currentScrollX;
				lastTime    = currentTime;

				clearTimeout( scrollTimeout );
				scrollTimeout = setTimeout( () => {
					isScrolling = false;
				}, 200 );
			}
		}
	} );

	$section.off( 'wheel' + eventNs ).on( 'wheel' + eventNs, function(e) {
		if ( Math.abs( e.originalEvent.deltaX) > 0 || ( e.shiftKey && e.originalEvent.deltaY !== 0 ) ) {
			e.preventDefault();
			window.scrollBy( { top: e.originalEvent.deltaX, behavior: 'auto' } );
		}
	} );

	// Add overlay/lightbox.
	const $overlay = jQuery( '<div>', { class: 'wpmozo_wavy_gallery_overlay ' + orderClass } )
		.append( jQuery( '<div>', { class: 'wpmozo_wavy_gallery_overlay_items' } ) )
		.append( jQuery( '<div>', { class: 'wpmozo_wavy_gallery_overlay_item_title' } ) );

	jQuery('body').append( $overlay );
	thisObj.data( 'wpmozoBnaWavyOverlay', $overlay );

	let $overlayContent = $overlay.find( '.wpmozo_wavy_gallery_overlay_items' );
	let $overlayTitle   = $overlay.find( '.wpmozo_wavy_gallery_overlay_item_title' );

	// Animate gallery.
	function wpmozo_wavy_gallery_animate() {
		let centerX         = jQuery( window ).width() / 2,
			zoneWidth       = jQuery( window ).width() * 0.5,
			zoneStart       = centerX - zoneWidth / 2,
			zoneEnd         = centerX + zoneWidth / 2,
			closestImage    = null,
			closestDistance = Infinity;

		$images.each( function() {
			let $img      = jQuery( this ),
				rect      = this.getBoundingClientRect(),
				imgCenter = rect.left + rect.width / 2,
				inZone    = imgCenter >= zoneStart && imgCenter <= zoneEnd;

			if ( !imageData.has(this) ) imageData.set( this, { scale: 1 } );

			let data = imageData.get( this );

			if ( inZone && isScrolling ) {
				let distance    = Math.abs( centerX - imgCenter ),
					maxDistance = zoneWidth / 2,
					proximity   = Math.max( 0, 0.5 - distance / maxDistance ),
					speedFactor = Math.min( Math.max(scrollSpeed / 50, 1), 10 ),
					targetScale = 1 + proximity * 0.5 * speedFactor;

				data.scale = wpmozo_lerp( data.scale, targetScale, 0.1 );

				let rotateY = imgCenter > centerX ? 20 : -20;
				$img.css( 'transform', `perspective(1000px) rotateY(${rotateY}deg) scale(${data.scale})` );

				if ( distance < closestDistance ) {
					closestDistance = distance;
					closestImage = $img;
				}
			} else {
				data.scale = wpmozo_lerp( data.scale, 1, 0.1 );
				$img.css( 'transform', `scale(${data.scale})` );
			}
			$img.removeClass( 'active' );
		} );

		if ( closestImage ) {
			closestImage.addClass( 'active' );
		}
		thisObj.data( 'wpmozoBnaWavyAnimationId', requestAnimationFrame( wpmozo_wavy_gallery_animate ) );
	}
	wpmozo_wavy_gallery_animate();

	// Update overlay title on click.
	function updateOverlayTitle() {
		if ( 'false' === showOverlayTitle ) {
			$overlayTitle.hide();
			return;
		}

		let overlayRect     = $overlayContent[0].getBoundingClientRect(),
			centerX         = overlayRect.left + overlayRect.width / 2,
			closestImg      = null,
			closestDistance = Infinity;

		$overlayContent.find( '.wpmozo_wavy_gallery_item' ).each( function() {
			let rect      = this.getBoundingClientRect(),
				imgCenter = rect.left + rect.width / 2,
				distance  = Math.abs( centerX - imgCenter ),
				$imgEl    = jQuery( this ).find( 'img' );

			$imgEl.css( 'filter', 'grayscale(1)' );
			if ( distance < closestDistance ) {
				closestDistance = distance;
				closestImg = jQuery( this );
			}
		} );
		if ( closestImg ) {
			let $imgEl = closestImg.find( 'img' );
			$imgEl.css( 'filter', 'grayscale(0)' );
			$overlayTitle.text( $imgEl.attr( 'title' ) || '' );
		}
	}
	$overlayContent.on( 'scroll', updateOverlayTitle );
	jQuery( window ).on( 'resize' + eventNs, updateOverlayTitle );

	function openOverlayWithImage($originalImage) {
		$overlayContent.empty();
		$overlayTitle.text('');

		jQuery('body').css( 'overflow', 'hidden' );

		let clickedIndex = $images.index($originalImage),
			overlayImageElements = [];

		$images.each( function( index ) {
			let $clone = jQuery(this).clone(true);

			$clone.find('img').css( 'filter', 'grayscale(1)' );
			$overlayContent.append( $clone );
			overlayImageElements.push( $clone );
		} );

		$overlay.addClass( 'active' );

		requestAnimationFrame( () => {
			setTimeout( () => {
				let $target   = overlayImageElements[clickedIndex],
					targetPos = $target[0].offsetLeft - ( $overlayContent[0].offsetWidth / 2 ) + ( $target[0].offsetWidth / 2 );

				$overlayContent[0].scrollLeft = targetPos;
				updateOverlayTitle();
			}, 0 );
		} );

		centerOverlayImageOnClick();
	}

	function centerOverlayImageOnClick() {
		$overlayContent.find( '.wpmozo_wavy_gallery_item' ).off( 'click' ).on( 'click', function() {
			gsap.to( $overlayContent[0], {
				duration: 1,
				scrollLeft: this.offsetLeft - ( $overlayContent[0].offsetWidth / 2 ) + ( this.offsetWidth / 2 ),
				scrollTo: {
					x: this.offsetLeft - ( $overlayContent[0].offsetWidth / 2 ) + ( this.offsetWidth / 2 )
				},
				ease: "sine.out",
				onUpdate: updateOverlayTitle
			} );
		} );
	}

	function closeOverlay() {
		$overlay.removeClass( 'active' );
		$overlayContent.empty();
		$overlayTitle.text('');

		jQuery( 'body' ).css( 'overflow', '' );
	}

	$images.off( 'click' + eventNs ).on( 'click' + eventNs, function() {
		openOverlayWithImage( jQuery(this) );
	} );

	let overlayScrollTriggered = false;
	function handleManualScrollClose() {
		if ( ! overlayScrollTriggered ) {
			overlayScrollTriggered = true;
			closeOverlay();
			setTimeout( () => {
				overlayScrollTriggered = false;
			}, 0 );
		}
	}
	$overlayContent.on( 'wheel touchmove', handleManualScrollClose );
	jQuery( window ).on( `wheel${eventNs} touchmove${eventNs}`, handleManualScrollClose );

	jQuery( window ).on( 'keydown' + eventNs, function(e) {
		if ( e.key === 'Escape' || e.key === 'Esc' ) {
			if ( $overlay.css('display') === 'flex' ) {
				closeOverlay();
			}
		}
	} );
	wpmozoBnaObserveForRefresh( $wrapper[0] );
	wpmozoBnaRefreshScrollTriggers();
}

function wpmozo_lerp( start, end, amt ) {
	return ( 1 - amt ) * start + amt * end;
}
