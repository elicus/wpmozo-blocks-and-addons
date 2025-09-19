import { __ } from "@wordpress/i18n";
import { useBlockProps } from '@wordpress/block-editor';
import { renderToString } from '@wordpress/element';

import generateDynamicStyle from "./style";


const Save = ( { attributes } ) => {

    const { ID, className, postItemsDB } = attributes;

	// Get attrs.
	const layout      = attributes.layout ?? 'layout1';
	const orientation = attributes.orientation ?? 'alternate';


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
			<div className={`wpmozo_bna_blog_timeline_wrapper ${layout} wpmozo_bna_blog_timeline_${orientation}`}
				dangerouslySetInnerHTML={ {
					__html: ( attributes.postItemsDB || '' ) +
					renderToString( <div className={`wpmozo_bna_stem_wrapper wpmozo_bna_blog_timeline_${orientation}_stem`}>
						<div className="wpmozo_bna_blog_stem"></div>
					</div> )
				} }
			/>
		</div>
	</> );
}

export default Save;
