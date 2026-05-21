import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;


	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			<div className="wpmozo_bna_background_switcher_wrap">
				<div className="wpmozo_bna_background_switcher_inner">
					{/* Renders all nested child blocks inside the parent block. */}
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	</> );
}

export default Save;
