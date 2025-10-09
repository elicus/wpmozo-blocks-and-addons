import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
export default function Edit(props) {

	const { attributes, setAttributes, clientId } = props;

	attributes.ID = clientId;

	const backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div id={`block-${attributes.ID}`} { ...useBlockProps( { className: 'wpmozo-bna-breadcrumb-main' } ) } >
				<div className="wpmozo-bna-breadcrumb-wrap wpmozo-editor">
					<figure className={`effect-${attributes.layout}`}>
						<img className="wpmozo-bna-breadcrumb-image" src={backImage}/>
						<figcaption>
							<div className="wpmozo-bna-breadcrumb-inner">
								<RichText
									className="wpmozo-bna-breadcrumb-title"
									tagName={ attributes.titleLevel }
									value={ attributes.title }
									onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
									placeholder={ __( 'Image Card Title', 'wpmozo-blocks-and-addons' ) }
								/>
								<RichText
									tagName="div"
									className="wpmozo-bna-breadcrumb-content"
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
