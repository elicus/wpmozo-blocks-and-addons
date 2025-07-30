import { useBlockProps, RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from "../../../common/utils";
import { __ } from '@wordpress/i18n';

const deprecatedSave = ({ attributes }) => {
const WPMozoEditorObj = wpmozo_bna_editor_object;
    const ID = attributes.ID;

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg,
        contentAlignment = attributes.contentAlignment,
        linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
        animationDirection = attributes.contentAnimationDirection,
        animationClass = ( attributes.contentOnHover && 'off' !== animationDirection ) ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '',
        axis = ( attributes.useDisableAxis ) ? attributes.tiltDisableAxis : null,
        glare = ( attributes.useGlare ) ? attributes.tiltMaxGlare : false;

    const icon = (
        <span className="wpmozo-bna-tilt-icon">
            <i className={`${ attributes.icon }`}></i>
        </span>
    );

    const button = (
        <div className="wpmozo-bna-tilt-image-button-wrapper">
            <a href={ attributes.buttonUrl } className="wpmozo-bna-tilt-image-button wp-block-button__link wp-element-button" target={ linkTarget }>{ attributes.buttonText }</a>
        </div>
    );

    return (
        <div 
            {...useBlockProps.save({ className: 'wpmozo-bna-tilt-image' })} 
            id={`block-${ID}`}
            data-max-tilt={ attributes.tiltMax }
            data-perspective={ attributes.tiltPerspective }
            data-scale={ attributes.tiltScale }
            data-speed={ attributes.tiltSpeed }
            data-disable-axis={ axis }
            data-glare={ attributes.useGlare }
            data-max-alare={ attributes.tiltMaxGlare }
            data-disable-mobile={ attributes.tiltMobile }
        >
            <div className={ `wpmozo-bna-tilt-image-wrapper wpmozo-editor wpmozo-bna-tilt-align-${contentAlignment}` }>
                <div className="wpmozo-bna-tilt-image-inner-wrapper">
                    <img className="wpmozo-bna-tilt-image-image" src={ image } />
                    <div className={ `wpmozo-bna-tilt-content-wrapper${animationClass}`}>
                        { attributes.useIcon &&
                            icon
                        }
                        <RichText.Content
                            className="wpmozo-bna-tilt-title"
                            tagName={ attributes.titleLavel }
                            value={ attributes.title }
                        />
                        <RichText.Content
                            className="wpmozo-bna-tilt-desc"
                            tagName="div"
                            value={ attributes.content }
                        />
                        { attributes.showButton && !wpmozo_is_empty( attributes.buttonText ) &&
                            button
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string" },
        image: { type: "string" },
        title: { type: "string" },
        content: { type: "string" },
        overlayColor: { type: "string" },
        titleLavel: { type: "string", default: "h2" },
        titleColor: { type: "string" },
        titleFontSize: { type: "string" },
        titleFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        titleLetterSpacing: { type: "string" },
        titleDecoration: { type: "string" },
        titleLetterCase: { type: "string" },
        titleLineHeight: { type: "string" },
        titleAlign: { type: "string", default: "left" },
        descriptionColor: { type: "String" },
        descriptionFontSize: { type: "string" },
        descriptionFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        descriptionLetterSpacing: { type: "string" },
        descriptionDecoration: { type: "string" },
        descriptionLetterCase: { type: "string" },
        descriptionLineHeight: { type: "string" },
        descriptionAlign: { type: "string", default: "left" },
        useIcon: { type: "boolean", default: false, },
        icon: { type: "string", },
        showButton: { type: "boolean", default: false, },
        buttonText: { type: "string", default: __( 'Read More', 'wpmozo-blocks-and-addons' ) },
        buttonUrl: { type: "string", },
        buttonLinkTarget: { type: "string", default: "same" },
        tiltMax: { type: "number", default: 20 },
        tiltPerspective: { type: "number", default: 1000 },
        tiltScale: { type: "number", default: 1 },
        tiltSpeed: { type: "number", default: 300 },
        tiltMobile: { type: "boolean", default: false, },
        useGlare: { type: "boolean", default: false, },
        tiltMaxGlare: { type: "number", default: 1 },
        use3dEffect: { type: "boolean", default: false, },
        tilt3dValue: { type: "number", default: 1 },
        useDisableAxis: { type: "boolean", default: false, },
        tiltDisableAxis: { type: "string" },
        useOverlay: { type: "boolean", default: false, },
        iconColor: { type: "string" },
        iconAlign: { type: "string", default: "center" },
        useIconFontSize: { type: "boolean", default: false, },
        iconFontSize: { type: "string" },
        contentOnHover: { type: "boolean", default: false, },
        contentAlignment: { type: "string", default: "center" },
        contentAnimationDirection: { type: "string", default: "off" },
        contentpadding: { type: "object" },
        buttonTextColor: { type: "string" },
        buttonBackgroundColor: { type: "string" },
        buttonFontSize: { type: "string" },
        buttonFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        buttonLetterSpacing: { type: "string" },
        buttonDecoration: { type: "string" },
        buttonLetterCase: { type: "string" },
        buttonLineHeight: { type: "string" },
        buttonborder: { type: "object" },
        buttonborderRadius: { type: "string" },
        buttonpadding: { type: "object" },
        buttonmargin: { type: "object" }
    },
    save: deprecatedSave,
};
