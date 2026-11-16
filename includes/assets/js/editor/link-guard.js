/**
 * Stop links inside WPMozo blocks from navigating in the block editor.
 *
 * Post blocks (Blog Timeline, Pro Blog Slider, Team Grid, ServerSideRender previews, ...) print real
 * permalinks in the editor canvas, so a click would load that URL inside the editor iframe. Instead of
 * `pointer-events: none` (which also kills the hover previews), the click is cancelled on the block
 * wrapper. The click still bubbles, so the block is selected as usual. Links inside editable text
 * (RichText) are left alone. Covers every `wpmozo/*` block, lite and Pro.
 *
 * @since 1.9.1
 */
( function ( wp ) {
	if ( ! wp?.hooks || ! wp?.compose || ! wp?.element ) {
		return;
	}

	const { addFilter } = wp.hooks;
	const { createHigherOrderComponent } = wp.compose;
	const { createElement } = wp.element;

	const cancelLinkNavigation = ( event ) => {
		const link = event.target?.closest?.( 'a[href]' );
		if ( link && ! link.isContentEditable ) {
			event.preventDefault();
		}
	};

	const withLinkGuard = createHigherOrderComponent(
		( BlockListBlock ) => ( props ) => {
			if ( ! props.name?.startsWith( 'wpmozo/' ) ) {
				return createElement( BlockListBlock, props );
			}

			return createElement( BlockListBlock, {
				...props,
				wrapperProps: {
					...props.wrapperProps,
					onClickCapture: cancelLinkNavigation,
				},
			} );
		},
		'withWpmozoLinkGuard'
	);

	addFilter( 'editor.BlockListBlock', 'wpmozo-blocks-and-addons/editor-link-guard', withLinkGuard );
} )( window.wp );
