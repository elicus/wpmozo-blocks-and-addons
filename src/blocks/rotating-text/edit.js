import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
import { getMainEl, mergeWrapperProps } from '../../common/utils';

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-rotating-text${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,	
		useImage = attributes.useImage,
		text = attributes.rotatingText,
		iconImage = null;

	if ( useImage ) {
		iconImage = (
		  	<img
				src={image}
				alt=""
				className="wpmozo-bna-rotating-text-img-img_icon"
		  	/>
		);
	} else if ( attributes.icon ) {
		iconImage = (
			<div className="icon-wrapper">
				<i className={attributes.icon}></i>
		    </div>
		);
	}

	useEffect(() => {
		const event = new CustomEvent('WPMozoRotatingTextPropsChanged');
		window.dispatchEvent(event);

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div id={`block-${attributes.ID}`} { ...blockProps}>
				<div className="wpmozo-bna-rotating-text-wrap">
		            <div className="wpmozo-bna-rotating-text-inner">
		                <p>{text}</p>
		            </div>
		            {iconImage && (
		                <div className="wpmozo-bna-rotating-text-icon-wrapper">
		                    {iconImage}
		                </div>
		            )}
		        </div>
		        <input className="wpmozo-bna-rotating-text-input" type="hidden" value={text} />
			</div>
		</Fragment>
	);
}
