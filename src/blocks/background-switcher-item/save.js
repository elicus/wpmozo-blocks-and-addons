import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className, isFirstChild } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: [
			className,
			isFirstChild ? 'wpmozo-bna-bg-switcher-hover' : '' // first child active background.
		].filter( Boolean ).join( ' ' ),
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

	// Button.
	const showButton = attributes.showButton ?? false;
	const buttonUrl  = attributes.buttonUrl ?? '';

	let $button = '';
	if ( showButton && '' !== buttonUrl ) {
		let $buttonIcon = '';
		if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap wpmozo-bna-bg-switcher-btn-wrap">
			<a href={ buttonUrl }
				target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
				className={ [
					'wpmozo-bna-button',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				<span className='wpmozo-bna-btn-text'>{ attributes.buttonText && __( 'Read more', 'wpmozo-blocks-and-addons' ) }</span>
				{ $buttonIcon }
			</a>
		</div>;
	}

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
		<div className="wpmozo_bna_background_switcher_image">
			<div className="wpmozo_bna_switcher_item_background"></div>
		</div>
	</> );
}

export default Save;
