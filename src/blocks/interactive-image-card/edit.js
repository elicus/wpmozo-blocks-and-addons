
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_bna_editor_object;

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-bna-interactive-image-card-main' });

    let backImage = ( attributes.backImage ) ? attributes.backImage : WPMozoEditorObj.placeholderImg;

    attributes.ID = ID;

	return (
        <Fragment>
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
                <div className="wpmozo-bna-interactive-image-card-wrap wpmozo-editor">
                    <figure className={`effect-${ attributes.layout }`}>
                        <img className="wpmozo-bna-interactive-image-card-image" src={ backImage } />
                        <figcaption>
                            <div className="wpmozo-bna-interactive-image-card-inner">
                                <RichText
                                    className="wpmozo-bna-interactive-image-card-title"
                                    tagName={ attributes.titleLavel }
                                    value={ attributes.title }
                                    onChange={ ( newValue ) => setAttributes( { title: newValue } ) } 
                                    placeholder={ __('Image Card Title', 'wpmozo-blocks-and-addons') }
                                />
                                <RichText
                                    className="wpmozo-bna-interactive-image-card-content"
                                    tagName="div"
                                    value={ attributes.content }
                                    onChange={ ( newValue ) => setAttributes( { content: newValue } ) } 
                                    placeholder={ __('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons') }
                                />
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;