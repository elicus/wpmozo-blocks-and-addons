import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const deprecatedSave = ({ attributes }) => {
    const WPMozoEditorObj = wpmozo_bna_editor_object,
        ID = attributes.ID;

    let backImage = ( attributes.backImage ) ? attributes.backImage : WPMozoEditorObj.placeholderImg;

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-bna-interactive-image-card-main' })} id={`block-${ID}`}>
            <div className="wpmozo-bna-interactive-image-card-wrap">
                <figure className={`effect-${ attributes.layout }`}>
                    <img className="wpmozo-bna-interactive-image-card-image" src={ backImage } />
                    <figcaption>
                        <div className="wpmozo-bna-interactive-image-card-inner">
                            <RichText.Content
                                className="wpmozo-bna-interactive-image-card-title"
                                tagName={ attributes.titleLavel }
                                value={ attributes.title }
                            />
                            <RichText.Content
                                className="wpmozo-bna-interactive-image-card-content"
                                tagName="div"
                                value={ attributes.content }
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string", },
        title: { type: "string", default: __( 'Image Card Title', 'wpmozo-blocks-and-addons' ),  },
        content: { type: "string", default: __( 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons' ) },
        backImage: { type: "string", },
        layout: { type: "string", default: "lily", },
        imageOpacity: { type: "number", default: 0.7, },
        layoutborder: { type: "object", default: { color: "#000000", width: "1px", style: "solid", } },
        overlayColor: { type: "string", },
        titleLavel: { type: "string", default: "h2", },
        titleNormalColor: { type: "string", default: "#222222", },
        titleHoverColor: { type: "string", default: "#000000", },
        titleNormalFontSize: { type: "string", },
        titleNormalFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        titleNormalLetterSpacing: { type: "string", },
        titleNormalDecoration: { type: "string", },
        titleNormalLetterCase: { type: "string", },
        titleNormalLineHeight: { type: "string", },
        titleHoverFontSize: { type: "string", },
        titleHoverFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        titleHoverLetterSpacing: { type: "string", },
        titleHoverDecoration: { type: "string", },
        titleHoverLetterCase: { type: "string", },
        titleHoverLineHeight: { type: "string", },
        titleAlign: { type: "string", default: "center", },
        contentColor: { type: "string", default: "#222222", },
        contentFontSize: { type: "string", },
        contentFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        contentLetterSpacing: { type: "string", },
        contentDecoration: { type: "string", },
        contentLetterCase: { type: "string", },
        contentLineHeight: { type: "string", },
        contentAlign: { type: "string", default: "center", },
    },
    save: deprecatedSave,
};
