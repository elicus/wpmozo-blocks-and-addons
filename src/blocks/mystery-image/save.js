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

export default function saveWithInnerBlocks( { attributes } ) {

	let clientId = attributes.ID,
		images = attributes.images_data;

	const className = classnames( 'wpmozo-mystery-image');

	const hasLightbox = attributes.showLightbox === true,
		  hasOverlay = attributes.enableOverlay === true;

	return (
		<>
			<style>
				{generateDynamicStyle({ attributes, clientId })}
			</style>
			<div id={`block-${clientId}`}>
				<div
					{...useBlockProps.save({
						className: classnames(
							className,
							{ 'wpmozo-mystery-image-lightbox': hasLightbox, 'wpmozo-mystery-image-overlay': hasOverlay }
						)
					})}
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
