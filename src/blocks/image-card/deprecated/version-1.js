import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {wpmozo_is_empty} from "../../../common/utils";

const deprecatedSave = ({ attributes }) => {
    const WPMozoEditorObj = wpmozo_bna_editor_object,
    ID = attributes.ID;

    let backImage = (attributes.backImage) ? attributes.backImage : WPMozoEditorObj.placeholderImg,
        linkTarget = ('external' === attributes.buttonLinkTarget) ? '_blank' : '_self',
        showIconOnHover = ( attributes.showIconOnHover ) ? ' show-on-hover' : '',
        buttonIconPosition = ( attributes.buttonIconPosition ) ? attributes.buttonIconPosition : ' icon-after';

    const icon = (
        <span className="wpmozo-bna-image-icon">
            <i className={`${ attributes.icon }`}></i>
        </span>
    );

    const button = (
        <div className="wpmozo-bna-image-card-button-wrapper">
            <a href={attributes.buttonUrl}
               className={"wpmozo-bna-image-card-button wp-element-button " + buttonIconPosition + showIconOnHover}
               target={linkTarget}>
                <span className="button_text">
                    <RichText.Content
                        value={attributes.buttonText}
                        onChange={(newValue) => setAttributes({buttonText: newValue})}
                    />
                </span>
                { 'none' !== attributes.buttonIconType && (
                    <div className={ 'icon' === attributes.buttonIconType ? "wpmozo-bna-image-card-button-icon-wrap" : "wpmozo-bna-image-card-button-image-wrap"}>
                        { 'icon' === attributes.buttonIconType && (
                            <>
                                <i className={ attributes.buttonIcon }></i>
                            </>
                        )}
                        { 'image' === attributes.buttonIconType && (
                            <img src={ attributes.buttonIconImage } />
                        )}
                    </div>
                )}
            </a>
        </div>
);

return (
    <div {...useBlockProps.save({className: 'wpmozo-bna-image-card-main'})} id={`block-${ID}`}>
        <div className="wpmozo-bna-image-card-wrapper wpmozo-editor">
            <div className="wpmozo-bna-image-card-wrapper-inner">
                <img className="wpmozo-bna-image-card-image" src={backImage}/>
            </div>
            <div className="wpmozo-bna-image-card-content-wrapper">
                    { 'none' !== attributes.iconType && (
                        <div className={ 'icon' === attributes.iconType ? "wpmozo-bna-image-card-icon-wrap" : "wpmozo-bna-image-card-image-wrap"}>
                            { 'icon' === attributes.iconType && (
                                <>
                                    <i className={ attributes.icon }></i>
                                </>
                            )}
                            { 'image' === attributes.iconType && (
                                <img src={ attributes.iconImage } />
                            )}
                        </div>
                    )}
                    <div className="wpmozo-bna-image-card-inner-content-wrapper">
                        <RichText.Content
                            className="wpmozo-bna-image-card-title"
                            tagName={attributes.titleLavel}
                            value={attributes.title}
                        />
                        <RichText.Content
                            className="wpmozo-bna-image-card-content"
                            tagName="div"
                            value={attributes.description}
                        />
                        {attributes.showButton && !wpmozo_is_empty(attributes.buttonText) &&
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
        ID: { type: "string", },
        title: { type: "string", default: __('Image Card Title', 'wpmozo-blocks-and-addons'), },
        description: { type: "string", default: __('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons') },
        iconType: { type: "string", default: 'icon', },
        icon: { type: "string", default: "fas fa-star", },
        iconImage: { type: "string", },
        showButton: { type: "boolean", default: false, },
        buttonText: { type: "string", default: __('Read More', 'wpmozo-blocks-and-addons') },
        buttonUrl: { type: "string", },
        buttonLinkTarget: { type: "string", default: "same" },
        buttonIconType: { type: "string", default: 'icon', },
        buttonIcon: { type: "string", default: "", },
        buttonIconImage: { type: "string", },
        buttonIconPosition: { type: "string", default: "icon-after" },
        showIconOnHover: { type: "boolean", default: false, },
        titleLavel: { type: "string", default: "h2" },
        titleAlign: { type: "string", default: "left" },
        titleColor: { type: "string" },
        titleFontSize: { type: "string" },
        titleFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        titleLetterSpacing: { type: "string" },
        titleDecoration: { type: "string" },
        titleLetterCase: { type: "string" },
        titleLineHeight: { type: "string" },
        contentFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        useIconFontSize: { type: "boolean", default: false, },
        iconFontSize: { type: "string" },
        buttonTextFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
        buttonTextColor: { type: "string" },
        buttonBackgroundColor: { type: "string" },
        contentBackgroundColor: { type: "string" },
        imageWidth: { type: "number", default: 200 },
        imageHeight: { type: "number", default: 200 },
    },
    save: deprecatedSave,
};
