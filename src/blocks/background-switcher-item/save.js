import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText.Content
			className="wpmozo-bna-bg-switcher-title"
			tagName={ attributes?.titleLevel || 'h2' }
			value={ attributes.title }
		/>;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText.Content
			className="wpmozo-bna-bg-switcher-desc"
			tagName={ 'div' }
			value={ attributes.description }
		/>;
	}

	let $button = '';

	let $hoverContent = '';
	if ( $description || $button ) {
		$hoverContent = (
			<div className="wpmozo_bna_bg_switcher_hover_content">
				{ $description }
				{ $button }
			</div>
		);
	}

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			<div className="wpmozo_bna_bg_switcher_item_wrap">
				<div className="wpmozo_bna_bg_switcher_content">
					{ $title }
					{ $hoverContent }
				</div>
			</div>
		</div>
	</> );
}

export default Save;
