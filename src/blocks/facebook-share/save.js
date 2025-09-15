import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	// Get attributes.
	const fbAppId      = attributes.fbAppId ?? '';
	const buttonLayout = attributes.buttonLayout ?? '';
	const pageURL      = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const lazyLoading  = attributes.lazyLoading ?? '';
	const buttonSize   = attributes.buttonSize ?? 'small';
	
	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
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
