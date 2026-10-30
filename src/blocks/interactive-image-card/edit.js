import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-interactive-image-card-main${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
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

	const backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId, isEdit } ) }</style>

			<div id={`block-${attributes.ID}`} { ...blockProps} >
				<div className="wpmozo-bna-interactive-image-card-wrap wpmozo-editor">
					<figure className={`effect-${attributes.layout}`}>
						<img className="wpmozo-bna-interactive-image-card-image" src={backImage}/>
						<figcaption>
							<div className="wpmozo-bna-interactive-image-card-inner">
								<RichText
									className="wpmozo-bna-interactive-image-card-title"
									tagName={ attributes.titleLevel }
									value={ attributes.title }
									onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
									placeholder={ __( 'Image Card Title', 'wpmozo-blocks-and-addons' ) }
								/>
								<RichText
									tagName="div"
									className="wpmozo-bna-interactive-image-card-content"
									value={ attributes.content }
									onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
									placeholder={ __( 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons' ) }
								/>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</Fragment>
	);
}
