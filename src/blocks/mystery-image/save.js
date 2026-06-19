/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function saveWithInnerBlocks( { attributes } ) {

	let clientId = attributes.ID;
	const className = classnames( 'wpmozo-mystery-image' );
	
	
	const hasLightbox = attributes.showLightbox === true,
		hasOverlay = attributes.enableOverlay === true;
	
	const wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: [
				className,
				attributes.showLightbox && 'wpmozo-mystery-image-lightbox',
				attributes.enableOverlay && 'wpmozo-mystery-image-overlay'
			].filter(Boolean).join(' '),
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
	return (
		<>
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={ `block-${clientId}`} >
				<div
					{ ...blockProps}
					data-lightbox_effect="none"
					data-lightbox_transition_duration="300"
					data-icon={attributes.overlayIcon}
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
