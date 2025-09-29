import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className, isLastChild } = attributes;

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText.Content
			className="wpmozo_bna_hover_list_title"
			tagName={ attributes?.titleLevel || 'h4' }
			value={ attributes.title }
		/>;
	}

	// Get the icon.
	let $icon = '';
	if ( attributes.showIcon && attributes.listIcon ) {
		$icon = <span class={ "wpmozo_bna_hover_list_icon " + attributes.listIcon } />;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText.Content
			className="wpmozo_bna_hover_list_description"
			tagName={ 'div' }
			value={ attributes.description }
		/>;
	}

	// Get the subtitle.
	let $subtitle = '';
	if ( attributes.subtitle ) {
		$subtitle = <RichText.Content
			className="wpmozo_bna_hover_list_subtitle"
			tagName={ 'div' }
			value={ attributes.subtitle }
		/>;
	} else {
		$subtitle = <div className="wpmozo_bna_hover_list_subtitle"></div>;
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
		$button = <div className="wpmozo-bna-button-wrap">
			<a href={ attributes.buttonUrl }
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

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: [
			className,
			isLastChild ? 'wpmozo-is-last-child' : '' // last child.
		].filter( Boolean ).join( ' ' ),
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			<div className="wpmozo-bna-hover-list-item-wrapper"
				data-image={ attributes.hoverImage || wpmozo_bna_editor_object.placeholderImg }
			>
				<div className="wpmozo-bna-hover-list-item-inner">
					<div className="wpmozo_bna_hover_list_title_wrapper">
						{ $icon }{ $title }
					</div>
					{ $description }{ $subtitle }{ $button }
				</div>
				<div className="wpmozo-bna-hover-list-item-overlay"></div>
				<div className="wpmozo-bna-hover-list-item-divider"></div>
			</div>
		</div>
	</> );
}

export default Save;
