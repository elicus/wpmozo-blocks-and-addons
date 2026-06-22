// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const V1 = {
	attributes: {
		parentAtts: { type: "object" },

        ID: { type: "string" },
		className: { type: "string" },

        cardBackground: { type: "string" },
        cardBackgroundGradient: {
            type: "string",
            default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
        },
        cardpadding: { type: "object" },

        itemTitle: { type: "string", default: "Title" },
        itemDescription: { type: "string", default: "Description" },
        showIcon: { type: "boolean", default: false },
        itemIcon: { type: "string" },
        showButton: { type: "boolean", default: false },
        itemButtonText: { type: "string" },
        itemButtonUrl: { type: "string" },
        itemButtonLinkTarget: { type: "string", default: "external" },
        image: { type: "string" },
        imageAlt: { type: "string" },

       	iconAlign: {type:"string",default: "left"},
        iconColor: { type: "string" },
        iconFontSize: { type: "string" },
        iconpadding: { type: "object" },
        iconmargin: { type: "object" },

        titleColor: { type: "string" },
        titleAlign: { type: "string" },
        titleLavel: { type: "string" },
        titleFontSize: { type: "string" },
        titleFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        titleLetterSpacing: { type: "string" },
        titleDecoration: { type: "string" },
        titleLetterCase: { type: "string" },
        titleLineHeight: { type: "string" },
        titlepadding: { type: "object" },
        titlemargin: { type: "object" },

        descriptionColor: { type: "string" },
        descriptionAlign: { type: "string" },
        descriptionFontSize: { type: "string" },
        descriptionFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        descriptionLetterSpacing: { type: "string" },
        descriptionDecoration: { type: "string" },
        descriptionLetterCase: { type: "string" },
        descriptionLineHeight: { type: "string" },
        descriptionpadding: { type: "object" },
        descriptionmargin: { type: "object" },

        buttonTextColor: { type: "string" },
        buttonBackgroundColor: { type: "string" },
        buttonAlignment: { type: "string" },
        buttonFontSize: { type: "string" },
        buttonFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        buttonLetterSpacing: { type: "string" },
        buttonDecoration: { type: "string" },
        buttonLetterCase: { type: "string" },
        buttonLineHeight: { type: "string" },
        useButtonIcon: { type: "boolean", default: false },
        buttonIconColor: { type: "string" },
        buttonIcon: { type: "string" },
        buttonIconPlacement: { type: "string", default: "after" },
        buttonIconHover: { type: "boolean", default: false },
        buttonborder: { type: "object" },
        buttonborderRadius: { type: "string" },
        buttonpadding: { type: "object" },
        buttonmargin: { type: "object" }
	},
	save( { attributes } ) {
		const { ID, parentAtts } = attributes;

        // Only add ID attribute if it exists
        const blockProps = useBlockProps.save( {
            className: attributes.className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        const {
            itemButtonText,
            itemButtonUrl,
            itemButtonLinkTarget,
            buttonIcon,
            showButton,
            styleIcon,
            itemIcon,
            itemTitle,
            titleLavel,
            itemDescription,
            buttonIconPlacement,
            useButtonIcon,
            buttonIconHover,
            image,
            imageAlt
        } = attributes;

        let buttonText = itemButtonText || __( 'Read More', 'wpmozo-blocks-and-addons' ),
            urlNewWindow = itemButtonLinkTarget === 'external' ? '_blank' : '_self',
            layout = ( ! wpmozo_is_empty( parentAtts ) ) ? parentAtts.layout : 'vertical',
            titleHeadingLavel = titleLavel;

        if ( ! wpmozo_is_empty( parentAtts ) && wpmozo_is_empty( titleLavel )  ) {
            titleHeadingLavel = parentAtts.titleLavel;
        }

        // Title
        const TitleEl = (
            <RichText.Content
                tagName={titleHeadingLavel}
                className="wpmozo-bna-scroll-stack-cards-title"
                value={itemTitle}
            />
        );

        // Icon
        const IconEl = itemIcon ? (
            <div
                className="wpmozo-bna-scroll-stack-cards-icon-wrapper"
            >
                <div className="icon-wrapper">
                    <i className={`${itemIcon}`}></i>
                </div>
            </div>
        ) : null;

        // Content
        const ContentEl = (
            <RichText.Content
                tagName="div"
                className="wpmozo-bna-scroll-stack-cards-content"
                value={itemDescription}
            />
        );

        // Image
        const imageEl = image ? (
            <div className="wpmozo-bna-scroll-stack-cards-image-wrapper">
                <img src={ image } alt={ imageAlt } className="wpmozo-bna-scroll-stack-cards-image" />
            </div>
        ) : null;

        // Button
        let ButtonEl = null;
        if ( showButton && itemButtonUrl ) {
            
            let btnIcon = '',
                buttonIconPlacementClass = '',
                buttonIconHoverClass = '';

            if ( parentAtts.useButtonIcon ) {
                btnIcon = '' === parentAtts.buttonIcon ? '' : (
                    <i className={`wpmozo-bna-icon ${parentAtts.buttonIcon}`}></i>
                );
            }

            if ( useButtonIcon ) {
                btnIcon = '' === buttonIcon ? '' : (
                    <i className={`wpmozo-bna-icon ${buttonIcon}`}></i>
                );
            }

            if ( parentAtts.buttonIcon ) {
                if( 'after' === parentAtts.buttonIconPlacement ){
                    buttonIconPlacementClass = 'wpmozo-icon-at-after';
                }else{
                    buttonIconPlacementClass = 'wpmozo-icon-at-before';
                }
            }

            if ( useButtonIcon && buttonIcon && ! wpmozo_is_empty( buttonIconPlacement ) ) {
                if( 'after' === buttonIconPlacement ){
                    buttonIconPlacementClass = 'wpmozo-icon-at-after';
                }else{
                    buttonIconPlacementClass = 'wpmozo-icon-at-before';
                }
            }

            if ( parentAtts.useButtonIcon && parentAtts.buttonIcon && parentAtts.buttonIconHover ) {
                buttonIconHoverClass = 'wpmozo-icon-on-hover';
            }

            if ( useButtonIcon && buttonIcon && buttonIconHover ) {
                buttonIconHoverClass = 'wpmozo-icon-on-hover';
            }

            if( itemButtonUrl && itemButtonUrl !== '' && showButton ){
                ButtonEl = (
                    <div className="wpmozo-bna-button-wrap wpmozo-bna-scroll-stack-cards-item-btn">
                        <a
                            href={itemButtonUrl}
                            target={urlNewWindow}
                            className={ [
                                'wpmozo-bna-button',
                                buttonIconHoverClass,
                                buttonIconPlacementClass
                            ].join(" ") }
                        >
                            <span className='wpmozo-bna-btn-text'>{ buttonText }</span>
                            {btnIcon}
                        </a>
                    </div>
                )
            }
        }

        // Layouts
        const LayoutVertical = (
            <div className="wpmozo-bna-scroll-stack-cards-item-inner wpmozo-bna-scroll-stack-cards-item-vertical">
                <div className="wpmozo-bna-scroll-stack-cards-content-wrapper">
                    { IconEl }
                    <div className="wpmozo-bna-scroll-stack-cards-title-wrap">
                        { TitleEl }
                    </div>
                    { ContentEl }
                    { ButtonEl }
                </div>
                { imageEl }
            </div>
        );

        const LayoutHorizontal = (
            <div className="wpmozo-bna-scroll-stack-cards-item-inner wpmozo-bna-scroll-stack-cards-item-horizontal">
                { imageEl }
                <div className="wpmozo-bna-scroll-stack-cards-content-wrapper">
                    { IconEl }
                    { TitleEl }
                    { ContentEl }
                    { ButtonEl }
                </div>
            </div>
        );
    
        return (
            <>
                {/* Only output <style> if ID exists. */}
                { ( ID && '' !== ID ) && (
                    <style>{ generateDynamicStyle( { attributes } ) }</style>
                ) }
                <div { ...blockProps }>
                    { 'vertical' === layout &&
                        LayoutVertical
                    }
                    { 'horizontal' === layout &&
                        LayoutHorizontal 
                    }
                </div>
            </>
        );
	},
};

export default V1;