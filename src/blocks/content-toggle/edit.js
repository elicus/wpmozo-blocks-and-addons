import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Fragment, useEffect } from "@wordpress/element";

import Inspector from './inspector';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId, anchor } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-content-toggle-main${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;

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

	const toggleSwitchTypeClass = ' wpmozo_' + attributes.toggleSwitchType;
	const titleWrapClass        = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

	useEffect( () => {
		const event  = new CustomEvent('toggleAdded');
		const iframe = document.querySelector('iframe[name="editor-canvas"]');
		window.dispatchEvent(event);
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent(event);
		}
	}, [props] );

	const wrapperTemplate = [
		[ 'wpmozo/content-wraper', {
			className: 'wpmozo-bna-content-toggle-one wpmozo-bna-content-toggle-active',
			lock: { remove: true }
		} ],
		[ 'wpmozo/content-wraper', {
			className: 'wpmozo-bna-content-toggle-two',
			lock: { remove: true }
		} ],
	];

	const iconOne = '' === attributes.toggleOneIcon ? '' : (
		<div className="icon-wrapper">
			<i className={`${ attributes.toggleOneIcon }`}></i>
		</div>
	);
	const iconTwo = '' === attributes.toggleTwoIcon ? '' : (
		<div className="icon-wrapper">
			<i className={`${ attributes.toggleTwoIcon }`}></i>
		</div>
	);

	const titleOne = (
	   <div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-one${titleWrapClass}`}>
			{ 'before' === attributes.toggleOneIconPostion && iconOne }
			<h5>{ attributes.toggleOneTitle }</h5>
			{ 'after' === attributes.toggleOneIconPostion && iconOne }
		</div>
	);
	const titleTwo = (
		<div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-two${titleWrapClass}`}>
			{ 'before' === attributes.toggleTwoIconPostion && iconTwo }
			<h5>{ attributes.toggleTwoTitle }</h5>
			{ 'after' === attributes.toggleTwoIconPostion && iconTwo }
		</div>
	);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit } ) }</style>

			<div { ...blockProps} id={anchor || `block-${clientId}`}>
				<div className={`wpmozo-bna-toggle-button-wrap${toggleSwitchTypeClass}`}>
					{ 'toggle' === attributes.toggleSwitchType && ( <>
						<input className="wpmozo-bna-toggle-field" type="checkbox" value="" />
						<label className={`wpmozo-bna-toggle-switch`}>
							{ titleOne }
							{ titleTwo }
						</label>
					</> ) }
					{ 'toggle' !== attributes.toggleSwitchType && ( <>
						{ titleOne }
						<div className={`wpmozo-bna-toggle-button${toggleSwitchTypeClass}`}>
							<label className="wpmozo-bna-toggle-button-inner">
								<input className="wpmozo-bna-toggle-field" type="checkbox" value="" />
								<div className={`wpmozo-bna-toggle-switch${toggleSwitchTypeClass}`}></div>
							</label>
						</div>
						{ titleTwo }
					</> ) }
				</div>
				<div className="wpmozo-bna-content-toggle-content-wrap">
					<InnerBlocks template={ wrapperTemplate } allowedBlocks={false} />
				</div>
			</div>
		</Fragment>
	);
}
