import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {Fragment, useEffect} from '@wordpress/element';
import Inspector from './inspector';
import generateDynamicStyle from "./style";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const {attributes, setAttributes, clientId} = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-split-image${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
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

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoSplitImagePropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props] );

	const number = attributes.rows * attributes.columns;
	const gridBoxes = Array.from({length: number}).map((_, i) => (
		<span key={i} className="wpmozo_split_image_portion"></span>
	));

	const url = attributes.blockLink ? attributes.blockLink : "";
	const target = attributes.blockLinkTarget || "";
	const linkTarget = target === 'external' ? '_blank' : '_self';

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes})}</style>

			<div
				{...blockProps} id={`block-${attributes.ID}`}
			>
				<div className={`wpmozo_split_image_wrapper`} data-rows={`${attributes.rows}`}
					 data-columns={`${attributes.columns}`}>
					{gridBoxes}
				</div>
			</div>
		</Fragment>
	);
}
