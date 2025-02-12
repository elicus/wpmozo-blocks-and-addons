
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-tilt-image' });

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg,
        contentAlignment = attributes.contentAlignment;

    attributes.ID = ID;

    let wpmozo_init_tilt_img = ( element, attributes ) => {

        let axis = ( attributes.useDisableAxis ) ? attributes.tiltDisableAxis : null;

        element.find('.wpmozo-adfgu-tilt-image-inner-wrapper').tilt({
            maxTilt:        attributes.tiltMax,
            perspective:    attributes.tiltPerspective,
            scale:          attributes.tiltScale,
            speed:          attributes.tiltSpeed,
            disableAxis:    axis,
            reset:          true,
            glare:          attributes.useGlare,
            maxGlare:       attributes.tiltMaxGlare 
        });

    }

    useEffect(() => {
        jQuery(document).ready(function(e) {
            e("body").find(".wpmozo-adfgu-tilt-image").length > 0 && e("body").find(".wpmozo-adfgu-tilt-image").each(function() {

                let $this = jQuery(this);
                wpmozo_init_tilt_img( $this, attributes );

            })
        });
    });

    useEffect(() => {
        jQuery(document).ready(function(e) {
            e("body").find(".wpmozo-adfgu-tilt-image").length > 0 && e("body").find(".wpmozo-adfgu-tilt-image").each(function() {

                let $this = jQuery(this);
                wpmozo_init_tilt_img( $this, attributes );

            })
        });
    }, [
        attributes.tiltMax,
        attributes.tiltPerspective,
        attributes.tiltScale,
        attributes.tiltSpeed,
        attributes.useDisableAxis,
        attributes.useGlare,
        attributes.tiltMaxGlare
    ]);

    const icon = (
        <span className="wpmozo-adfgu-tilt-icon">
            <i className={`${ attributes.icon }`}></i>
        </span>
    );

    const button = (
        <div class="wpmozo-adfgu-tilt-image-button-wrapper">
            <a class="wpmozo-adfgu-tilt-image-button" target=""></a>
        </div>
    );

	return (
        <Fragment>
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
                <div className={ `wpmozo-adfgu-tilt-image-wrapper wpmozo-editor wpmozo-adfgu-tilt-align-${contentAlignment}` }>
                    <div className="wpmozo-adfgu-tilt-image-inner-wrapper">
                        <img className="wpmozo-adfgu-tilt-image-image" src={ image } />
                        <div className="wpmozo-adfgu-tilt-content-wrapper">
                            { attributes.useIcon &&
                                icon
                            }
                            <RichText
                                className="wpmozo-adfgu-tilt-title"
                                tagName={ attributes.titleLavel }
                                value={ attributes.title }
                                onChange={ ( newValue ) => setAttributes( { title: newValue } ) } 
                                placeholder={ __('Image Card Title', 'wpmozo-addons-lite-for-gutenberg') }
                            />
                            <RichText
                                className="wpmozo-adfgu-tilt-desc"
                                tagName="div"
                                value={ attributes.content }
                                onChange={ ( newValue ) => setAttributes( { content: newValue } ) } 
                                placeholder={ __('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-addons-lite-for-gutenberg') }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;