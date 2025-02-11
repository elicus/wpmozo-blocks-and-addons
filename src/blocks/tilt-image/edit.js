
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-tilt-image-main' });

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg;

    attributes.clientId = clientId;

    useEffect(() => {
        jQuery(document).ready(function(e) {
            e("body").find(".wpmozo-adfgu-tilt-image").length > 0 && e("body").find(".wpmozo-adfgu-tilt-image").each(function() {
                e(this).on("mouseenter mouseleave", function(t) {
                    "mouseenter" === t.type && e(this).find(".dipl_tilt_content_wrapper").addClass("et-animated"), "mouseleave" === t.type && e(this).find(".dipl_tilt_content_wrapper").removeClass("et-animated")
                })
            })
        });
    });

	return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <div className="wpmozo-adfgu-tilt-image-wrap wpmozo-editor">
                    <figure>
                        <img className="wpmozo-adfgu-tilt-image-image" src={ image } />
                        <figcaption>
                            <div className="wpmozo-adfgu-tilt-image-inner">
                                <RichText
                                    className="wpmozo-adfgu-tilt-image-title"
                                    tagName={ attributes.titleLavel }
                                    value={ attributes.title }
                                    onChange={ ( newValue ) => setAttributes( { title: newValue } ) } 
                                    placeholder={ __('Image Card Title', 'wpmozo-addons-lite-for-gutenberg') }
                                />
                                <RichText
                                    className="wpmozo-adfgu-tilt-image-content"
                                    tagName="div"
                                    value={ attributes.content }
                                    onChange={ ( newValue ) => setAttributes( { content: newValue } ) } 
                                    placeholder={ __('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg') }
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