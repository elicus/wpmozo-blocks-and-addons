import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;

	// Get attributes.
	const fbAppId      = attributes.fbAppId ?? '';
	const buttonLayout = attributes.buttonLayout ?? '';
	const pageURL      = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const lazyLoading  = attributes.lazyLoading ?? '';
	const buttonSize   = attributes.buttonSize ?? 'small';

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );
	
	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes, ID } ) }</style>
		) }

		<div { ...blockProps }>
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
