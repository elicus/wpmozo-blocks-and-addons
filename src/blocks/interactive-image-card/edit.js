import {__} from '@wordpress/i18n';
import {Fragment} from "@wordpress/element";
import {useBlockProps, RichText} from '@wordpress/block-editor';
import Inspector from "./inspector";
import generateDynamicStyle from "./style";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		blockProps = useBlockProps({className: 'wpmozo-bna-interactive-image-card-main'}),
		backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	attributes.ID = clientId;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div className="wpmozo-bna-interactive-image-card-wrap wpmozo-editor">
					<figure className={`effect-${attributes.layout}`}>
						<img className="wpmozo-bna-interactive-image-card-image" src={backImage}/>
						<figcaption>
							<div className="wpmozo-bna-interactive-image-card-inner">
								<RichText
									className="wpmozo-bna-interactive-image-card-title"
									tagName={attributes.titleLavel}
									value={attributes.title}
									onChange={(newValue) => setAttributes({title: newValue})}
									placeholder={__('Image Card Title', 'wpmozo-blocks-and-addons')}
								/>
								<RichText
									className="wpmozo-bna-interactive-image-card-content"
									tagName="div"
									value={attributes.content}
									onChange={(newValue) => setAttributes({content: newValue})}
									placeholder={__('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons')}
								/>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</Fragment>
	);
}
