import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save( { attributes } ) {

	const { ID, className } = attributes;

	// Only add ID attribute if it exists
	const blockProps = useBlockProps.save( {
		className: 'wpmozo-bna-fancy-text-wrap ' + ( className || '' ),
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		{/* Final block output. */}
		<div { ...blockProps }>
			<div className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}>
				<RichText.Content
					tagName=''
					value={ attributes.fancyText }
				/>
			</div>
		</div>
	</> );
}
