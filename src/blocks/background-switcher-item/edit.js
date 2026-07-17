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
		isFirstChild = useSelect( ( select ) => {
			const { getBlockIndex, getBlockRootClientId } = select( 'core/block-editor' );

			const rootId = getBlockRootClientId( clientId ); // null if top-level
			const index  = getBlockIndex( clientId, rootId );  // index within parent

			return index === 0; // true if first block in parent
		}, [ clientId ] ),
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-background-swticher-item${ attributes?.wrapIsHover ? ' is_hover' : '' } ${isFirstChild ? 'wpmozo-bna-bg-switcher-hover' : ''}` ,
			id: `block-${attributes.ID}`,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	useEffect( () => {
		if ( attributes.isFirstChild !== isFirstChild ) {
			setAttributes( { isFirstChild } );
		}
	}, [ isFirstChild ] );

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}const updates = {};
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

	// Get the title.
	let $title = '';
	if ( attributes.title ) {
		$title = <RichText
			className="wpmozo-bna-bg-switcher-title"
			tagName={ attributes?.titleLevel || 'h2' }
			value={ attributes.title }
			onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
		/>;
	}

	// Get the description.
	let $description = '';
	if ( attributes.description ) {
		$description = <RichText
			className="wpmozo-bna-bg-switcher-desc"
			tagName={ 'div' }
			value={ attributes.description }
			onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
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

	let $hoverContent = '';
	if ( $description || $button ) {
		$hoverContent = (
			<div className="wpmozo_bna_bg_switcher_hover_content">
				{ $description }
				{ $button }
			</div>
		);
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

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
		</Fragment>
	);
}

export default Edit;
