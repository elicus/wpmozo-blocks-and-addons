import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-hover-list' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps } id={`block-${ID}`}>
			<div className="wpmozo-bna-hover-list-wrapper">
				<div className="wpmozo-bna-hover-list-cursor"></div>
				<div className="wpmozo-bna-hover-list-inner">
					{/* Renders all nested child blocks inside the parent block. */}
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	</> );
}

export default Save;
