import {__} from "@wordpress/i18n";
import {useBlockProps} from '@wordpress/block-editor';
import {Fragment, useEffect} from "@wordpress/element";
import Inspector from './inspector';
import generateDynamicStyle from "./style";
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {
	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,
		altText = !wpmozo_is_empty( attributes.altText )
			? attributes.altText
			: 'alt',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-logo-slider-item swiper-slide ${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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
	const selectBlock = () => {
	    if ( wp && wp.data && wp.data.dispatch ) {
			wp.data.dispatch('core/block-editor').selectBlock(clientId);
		}
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${clientId}`}  data-client-id={clientId} onClick={selectBlock}>
				<div className="logo-wrap">
					<img className="logo-img" src={attributes.logo.url} alt={altText}/>
				</div>
			</div>
		</Fragment>
	);
}
