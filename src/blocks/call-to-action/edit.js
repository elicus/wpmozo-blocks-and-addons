import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText
			className="wpmozo-bna-cta-title"
			tagName={ attributes?.titleLevel || 'h3' }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
		/>;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText
			className="wpmozo-bna-cta-desc"
			tagName={ 'div' }
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
		/>;
	}

	// Button.
	const showButton = attributes.showButton ?? true;
	const buttonUrl  = attributes.buttonUrl ?? '';

	let $button = '';
	if ( showButton && '' !== buttonUrl ) {
		let $buttonIcon = '';
		if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap wpmozo-bna-cta-button-wrap">
			<a href="javascript:void(0);"
				// target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
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

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
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
		</Fragment>
	);
};

export default Edit;
