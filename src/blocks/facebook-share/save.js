import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: className ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Get attributes.
	const fbAppId      = attributes.fbAppId ?? '';
	const buttonLayout = attributes.buttonLayout ?? '';
	const pageURL      = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const lazyLoading  = attributes.lazyLoading ?? '';
	const buttonSize   = attributes.buttonSize ?? 'small';
	
	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps } id={`block-${ID}`}>
			{ ( fbAppId && '' !== fbAppId ) && (
				<div className="fb-share-button"
					data-fb-app={ fbAppId }
					data-href={ pageURL }
					data-layout={ buttonLayout }
					data-size={ buttonSize }
					data-lazy={ lazyLoading }
				></div>
			) }
		</div>
	</> );
}

export default Save;
