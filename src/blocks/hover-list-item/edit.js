import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";

const Edit = ( props ) => {

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
			className="wpmozo_bna_hover_list_title"
			tagName={ attributes?.titleLevel || 'h4' }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
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
		$description = <RichText
			className="wpmozo_bna_hover_list_description"
			tagName={ 'div' }
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
		/>;
	}

	// Get the subtitle.
	let $subtitle = '';
	if ( attributes.subtitle ) {
		$subtitle = <RichText
			className="wpmozo_bna_hover_list_subtitle"
			tagName={ 'div' }
			value={ attributes.subtitle }
			onChange={ ( newValue ) => setAttributes( { subtitle: newValue } ) }
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
			<a href="javascript:void(0);"
				// target={ ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : false }
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

	// Check if this is the first child.
	const isFirstChild = useSelect( ( select ) => {
		const { getBlockIndex, getBlockRootClientId } = select( 'core/block-editor' );

		const rootId = getBlockRootClientId( clientId ); // null if top-level.
		const index  = getBlockIndex( clientId, rootId );  // index within parent.

		return index === 0; // true if first block in parent.
	}, [ clientId ] );

	useEffect( () => {
		if ( attributes.isFirstChild !== isFirstChild ) {
			setAttributes( { isFirstChild } );
		}
	}, [ isFirstChild ] );

	const blockProps = useBlockProps( {
		id: `block-${attributes.ID}`,
		className: isFirstChild ? 'wpmozo-is-first-child' : ''
	} );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

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
		</Fragment>
	);
}

export default Edit;