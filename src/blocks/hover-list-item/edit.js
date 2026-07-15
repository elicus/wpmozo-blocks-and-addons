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
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props,
	// Check if this is the first child.
		isLastChild = useSelect( ( select ) => {
		const { getBlockRootClientId, getBlockOrder } = select( 'core/block-editor' );
		const parentId = getBlockRootClientId( clientId );
		const siblings = getBlockOrder( parentId );

		return siblings[ siblings.length - 1 ] === clientId;
		}, [ clientId ] ),
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-hover-list-item${ attributes?.wrapIsHover ? ' is_hover' : '' } ${isLastChild ? ' wpmozo-is-last-child' : ''}` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;
	
	

	useEffect( () => {
		if ( attributes.isLastChild !== isLastChild ) {
			setAttributes( { isLastChild } );
		}
	}, [ isLastChild ] );

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	// Re-init the js.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoHoverListPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

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
				<span className='wpmozo-bna-btn-text'>{ attributes.buttonText}</span>
				{ $buttonIcon }
			</a>
		</div>;
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, isEdit } ) }</style>

			<div { ...blockProps } id={`block-${clientId}`}>
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
