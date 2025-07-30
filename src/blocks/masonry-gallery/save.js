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

	let clientId = attributes.ID;

	const className = classnames( 'masonry-grid');

	return (
		<>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div id={`block-${attributes.ID}`}>
				<figure {...useBlockProps.save({className})}>
					<InnerBlocks.Content/>
				</figure>
			</div>
		</>
	);
}
