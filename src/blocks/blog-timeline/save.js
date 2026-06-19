import { __ } from "@wordpress/i18n";
import { useBlockProps } from '@wordpress/block-editor';
import { renderToString } from '@wordpress/element';

import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

    const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-advanced-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Get attrs.
	const layout      = attributes.layout ?? 'layout1';
	const orientation = attributes.orientation ?? 'alternate';

    return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps } id={`block-${clientId}`}>
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
