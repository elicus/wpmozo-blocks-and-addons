import { __ } from '@wordpress/i18n';
import { Fragment, useEffect, useRef } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';
import $ from 'jquery';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-breadcrumb-main${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;

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
	}, [ clientId, JSON.stringify( attributes ) ] );

	const backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	// Props change event.
	const blockRef = useRef( null );

	useEffect( () => {
		if ( ! attributes.ID ) return;

		const event = new CustomEvent( 'WPMozoBreadcrumbPropsChanged', {
			detail: { clientId: attributes.ID }
		} );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		const targetDoc = iframe?.contentWindow?.document ?? document;

		const observer = new MutationObserver( () => {
			if ( targetDoc.querySelector( '.breadcrumb-item.wpmozo-bna-home-page' ) ) {
				observer.disconnect();
				window.dispatchEvent( event );
				iframe?.contentWindow?.dispatchEvent( event );
			}
		} );

		observer.observe( targetDoc.body ?? targetDoc.documentElement, { childList: true, subtree: true } );

		return () => observer.disconnect();
	}, [ attributes.ID, JSON.stringify( attributes ) ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit } ) }</style>

			<div id={`block-${attributes.ID}`} { ...blockProps} >
				<ServerSideRender
					block="wpmozo/breadcrumb"
					attributes={attributes}
				/> 
			</div>
		</Fragment>
	);
}
