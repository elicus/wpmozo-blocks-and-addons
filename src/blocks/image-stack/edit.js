import { useInnerBlocksProps } from '@wordpress/block-editor';
import {useBlockProps} from "@wordpress/block-editor";
import Inspector from './inspector';
import { useEffect } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';
const ALLOWED_BLOCKS = [ 'wpmozo/image-stack-child' ];

export default function Edit(props) {

	const { attributes, setAttributes, isSelected, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-image-stack${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS
	});
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoImageStackPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [JSON.stringify(attributes)] );

	return (
		<>
			{ isSelected && ( <Inspector attributes={attributes} setAttributes={setAttributes} /> ) }
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit: true } ) }</style>

			<div className="wpmozo-bna-image-stack" id={`block-${clientId}`}  data-client-id={clientId}  >
				<div className={`wpmozo-image-stack-wrap`}
					data-speech-bubble="yes"
					data-animation-type="away"
					data-animation-duration="400"
					data-animation-name="shift-away"
					data-tooltip-id="elementor-baca216"
					data-trigger="hover"
				>
					<div className={`wpmozo-image-stack-inner`}>
						{innerBlocksProps.children}
					</div>
				</div>
			</div>
		</>
	);
}
