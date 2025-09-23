jQuery( document ).ready( function($) {

    if ( $( '.wp-block-wpmozo-scroll-stack-cards' ).length > 0 ) {
        $( document ).find('.wp-block-wpmozo-scroll-stack-cards').each( function() {
            let thisObj = $( this );
            console.log( thisObj );
            let wrapObj = thisObj.find( '.wpmozo-bna-scroll-stack-cards-wrapper' );
            if ( 'horizontal' === wrapObj.data( 'layout' ) ) {
                if ( wpmozoBnaIsLargeScreen() ) {
                    wpmozoBnaInitHorizontalScrollStackCards( thisObj );
                } else {
                    wrapObj.find( '.wp-block-wpmozo-scroll-stack-cards-item' ).css( {
                        width    : '100%',
                        position : 'relative',
                        left     : 'auto'
                    } );
                }
            } else {
                if ( wpmozoBnaIsLargeScreen() ) {
                    wpmozoBnaInitVerticalScrollStackCards( thisObj );
                }
            }
        } );

        // On windows resize.
        $( window ).on( 'resize', () => {
            $( document ).find('.wp-block-wpmozo-scroll-stack-cards').each( function() {
                let thisObj = $( this );
                let wrapObj = thisObj.find( '.wpmozo-bna-scroll-stack-cards-wrapper' );
                if ( 'horizontal' === wrapObj.data( 'layout' ) ) {
                    if ( wpmozoBnaIsLargeScreen() ) {
                        wpmozoBnaInitHorizontalScrollStackCards( thisObj );
                    } else {
                        wrapObj.find( '.wp-block-wpmozo-scroll-stack-cards-item' ).css( {
                            width    : '100%',
                            position : 'relative',
                            left     : 'auto'
                        } );
                    }
                } else {
                    if ( wpmozoBnaIsLargeScreen() ) {
                        wpmozoBnaInitVerticalScrollStackCards( thisObj );
                    } else {
                        // Kill if already init.
                        ScrollTrigger.getAll().forEach( trigger => {
                            if ( trigger.trigger === wrapObj[0] ) {
                                trigger.kill();
                            }
                        } );
                        wrapObj.css( {
                            height: 'auto'
                        } );
                    }
                    ScrollTrigger.refresh();
                }
            } );
        } );

        // Refresh after a while.
        setTimeout( () => ScrollTrigger.refresh(), 300 );
    }
} ); // Document ready over.

// Init vertical scroll stack cards.
function wpmozoBnaInitVerticalScrollStackCards( thisObj ) {

    let viewportHeight = window.innerHeight;
    let $wrapper    = thisObj.find( '.wpmozo-bna-scroll-stack-cards-wrapper' )
    let items       = $wrapper.find( '.wp-block-wpmozo-scroll-stack-cards-item' );

    // Kill if already init.
    ScrollTrigger.getAll().forEach( trigger => {
        if ( trigger.trigger === $wrapper[0] ) {
            trigger.kill();
        }
    } );

    gsap.registerPlugin( ScrollTrigger );

    let fullHeights = items.map( (index, element ) => element.scrollHeight ).get();

    let collapsedHeights = fullHeights.map( ( h, i ) => i === items.length - 1 ? h : 60 );

    let collapsedTotal = collapsedHeights.reduce((acc, h) => acc + h, 0);
    let fullTotal = fullHeights.reduce((acc, h) => acc + h, 0);
    let totalScroll = fullTotal - collapsedTotal;
    if (totalScroll < viewportHeight * 1.5) {
        totalScroll = viewportHeight * 1.5;
    }

    let sectionHeight = collapsedTotal + totalScroll + 250;
        $wrapper.css( 'height', `${sectionHeight}px` );

    const startPosition    = $wrapper.data( 'animation_start_element_pos' ) || 'top';
    const viewportPosition = $wrapper.data( 'animation_start_viewport_pos' ) || 'top';

    let tl = gsap.timeline( {
        scrollTrigger: {
            trigger: $wrapper[0], // 🔧 Pass DOM element to GSAP
            start: `${startPosition} ${viewportPosition}`,
            end: `+=${totalScroll}`,
            scrub: 1.1,
            pin: $wrapper.find( '.wpmozo-bna-scroll-stack-cards-items' ),
            pinSpacing: true,
        }
    } );

    items.each( ( i, item ) => {
        if ( i !== items.length - 1 ) {
            let icon           = item.querySelector( '.wpmozo-bna-scroll-stack-cards-icon-wrapper' );
            let title          = item.querySelector( '.wpmozo-bna-scroll-stack-cards-title-wrap' );
            let contentWrapper = item.querySelector( '.wpmozo-bna-scroll-stack-cards-content-wrapper' );

            let targetHeight = 60;
            if ( title ) {
                let iconHeight        = ( icon ) ? icon.offsetHeight : 0;
                let titleHeight       = ( title ) ? title.offsetHeight : 0;
                let itemPaddingTop    = parseFloat( window.getComputedStyle( item ).paddingTop ) || 0;
                let contentPaddingTop = contentWrapper
                    ? parseFloat( window.getComputedStyle( contentWrapper ).paddingTop ) || 0
                : 0;

                targetHeight = iconHeight + titleHeight + itemPaddingTop + contentPaddingTop;
            }

            tl.fromTo( item,
                { height: fullHeights[i] },
                { height: targetHeight, duration: 1.1 }
            );
            // For smoothness in firefox.
            // tl.set( item, { height: fullHeights[i] } );
            // tl.to( item, {
            //  height: targetHeight,
            //  duration: 1.1,
            //  ease: 'none'
            // } );
        }
    } );
}

// Init horizontal scroll stack cards.
function wpmozoBnaInitHorizontalScrollStackCards( thisObj ) {
    let $wrapper        = thisObj.find( '.wpmozo-bna-scroll-stack-cards-wrapper' ),
        $cardsContainer = $wrapper.find( '.wpmozo-bna-scroll-stack-cards-items' ),
        $panels         = $cardsContainer.find( '.wp-block-wpmozo-scroll-stack-cards-item' ),
        totalPanels     = $panels.length,
        initialVisible  = 3,
        wrapperWidth    = $wrapper.outerWidth(),
        fullPanelWidth  = wrapperWidth / initialVisible;

    // Kill if already init.
    ScrollTrigger.getAll().forEach( trigger => {
        if ( trigger.trigger === $wrapper[0] ) {
            trigger.kill();
        }
    } );

    gsap.registerPlugin( ScrollTrigger );

    $cardsContainer.css( {
        display  : "flex",
        position : "relative",
        width    : "max-content"
    } );

    $panels.each( ( i, el ) => {
        gsap.set( el, {
            width: fullPanelWidth,
            flexShrink: 0
        } );
    } );    
    
    const scrollLength     = ( totalPanels - initialVisible + 1 ) * fullPanelWidth;
    const startPosition    = $wrapper.data( 'animation_start_element_pos' ) || 'top';
    const viewportPosition = $wrapper.data( 'animation_start_viewport_pos' ) || 'top';
    const collapsedWidth   = parseInt( $wrapper.data( 'collapsed_width' ), 10 ) || 200;

    const tl = gsap.timeline( {
        ease: "none",
        scrollTrigger: {
            trigger: $wrapper[0],
            start: `${startPosition} ${viewportPosition}`,
            end: `+=${scrollLength}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
            markers: false
        }
    } );

    for ( let step = 1; step <= totalPanels - initialVisible; step++ ) {
        tl.addLabel( `step${step}` );
        $panels.each((index, el) => {
            let newWidth;
            if ( index < step ) {
                newWidth = collapsedWidth;
            } else if ( index >= step && index < step + initialVisible ) {
                newWidth = fullPanelWidth;
            } else {
                newWidth = collapsedWidth;
            }

            tl.to( el, { width: newWidth, ease: "none" }, `step${step}` );
        } );
    }

    tl.addLabel("finalExpand");
    $panels.each( (index, el) => {
        let newWidth;
        if ( index === totalPanels - 1 ) {
            const collapsedTotal = ( totalPanels - 1 ) * collapsedWidth;
            newWidth = wrapperWidth - collapsedTotal;
            if ( newWidth < collapsedWidth ) newWidth = collapsedWidth;
        } else {
            newWidth = collapsedWidth;
        }

        tl.to( el, {
            width: newWidth,
            duration: 0.8,
            ease: "power2.out"
        }, "finalExpand" );
    } );
}

// Check is large screen.
function wpmozoBnaIsLargeScreen() {
    return window.innerWidth > 980;
}
