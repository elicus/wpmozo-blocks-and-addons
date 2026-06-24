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

	// Image / Icon display logic
	let $imageIcon = '';
	if ( attributes.useImage ) {
		if ( attributes.image ) {
			$imageIcon = (
				<div className="wpmozo-bna-alert-box-image-wrap wpmozo-bna-used-image">
					<img src={ attributes.image } alt={ attributes.imageAlt || '' } />
				</div>
			);
		} else {
			$imageIcon = (
				<div className="wpmozo-bna-alert-box-image-wrap wpmozo-bna-used-image wpmozo-image-placeholder">
					<i className="wpmozo-bna-icon fas fa-image"></i>
				</div>
			);
		}
	} else if ( attributes.icon ) {
		$imageIcon = (
			<div className="wpmozo-bna-alert-box-image-wrap">
				<i className={ `wpmozo-bna-icon ${ attributes.icon }` }></i>
			</div>
		);
	}

	// Title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText
			className="wpmozo-bna-alert-box-title"
			tagName={ attributes?.titleLevel || 'h3' }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			placeholder={ __( 'Alert Title', 'wpmozo-blocks-and-addons' ) }
		/>;
	}

	// Description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText
			className="wpmozo-bna-alert-box-desc"
			tagName={ 'div' }
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
			placeholder={ __( 'Alert Description', 'wpmozo-blocks-and-addons' ) }
		/>;
	}

	// Button.
	let $button = '';
	if ( attributes.showButton ) {
		let $buttonIcon = '';
		if ( attributes.buttonUseIcon && attributes.buttonIcon ) {
			$buttonIcon = <i className={ 'wpmozo-bna-icon ' + attributes.buttonIcon }></i>;
		}
		$button = <div className="wpmozo-bna-button-wrap wpmozo-bna-alert-box-button-wrap">
			<a href="javascript:void(0);"
				className={ [
					'wpmozo-bna-button',
					( attributes.buttonUseIcon && attributes.buttonIconOnHover ) ? 'wpmozo-icon-on-hover' : '',
					( attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after'
				].join(" ") }
			>
				{ attributes.buttonUseIcon && 'before' === attributes.buttonIconPosition && $buttonIcon }
				<span className='wpmozo-bna-btn-text'>{ attributes.buttonText }</span>
				{ attributes.buttonUseIcon && 'after' === attributes.buttonIconPosition && $buttonIcon }
			</a>
		</div>;
	}

	// Close Icon
	let $closeButton = '';
	if ( attributes.showCloseButton ) {
		$closeButton = (
			<a href="#" className="wpmozo-bna-alert-box-close-btn" onClick={ ( e ) => e.preventDefault() }>
				<i className="wpmozo-bna-icon fas fa-xmark"></i>
			</a>
		);
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className={ `wpmozo-bna-alert-box-wrap ${ attributes.layout }` }>
					<div className="wpmozo-bna-alert-box-inner">
						{ $imageIcon }
						<div className="wpmozo-bna-alert-box-content">
							{ $title }
							{ $description }
						</div>
						{ $button }
						{ $closeButton }
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
