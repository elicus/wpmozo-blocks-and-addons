import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

    const clientId = attributes.ID

	const { ID, className, isFirstChild } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: className ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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

		<div { ...blockProps } id={`block-${clientId}`}>
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
