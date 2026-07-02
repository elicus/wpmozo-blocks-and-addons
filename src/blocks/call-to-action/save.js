import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

    const clientId = attributes.ID;

	const { ID, className, isFirstChild } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: [
			className,
		].filter( Boolean ).join( ' ' ),
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText.Content
			className="wpmozo-bna-cta-title"
			tagName={ attributes?.titleLevel || 'h3' }
			value={ attributes.title }
		/>;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText.Content
			className="wpmozo-bna-cta-desc"
			tagName={ 'div' }
			value={ attributes.description }
		/>;
	}

	// Button.
	const showButton = attributes.showButton ?? false;
	const buttonUrl  = attributes.buttonUrl ?? '';

	let $button = '';
	if ( showButton && '' !== buttonUrl ) {
		let $buttonIcon = '';
		if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap wpmozo-bna-cta-button-wrap">
			<a href={ buttonUrl }
				target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
				className={ [
					'wpmozo-bna-button',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				<span className='wpmozo-bna-btn-text'>{ attributes.buttonText }</span>
				{ $buttonIcon }
			</a>
		</div>;
	}

    return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			<div className="wpmozo-bna-cta-wrap">
				<div className="wpmozo-bna-cta-inner">
					<div className="wpmozo-bna-cta-content-wrap">
						{ $title }
						{ $description }
					</div>
					{ $button }
				</div>
			</div>
		</div>
	</> );
}

export default Save;
