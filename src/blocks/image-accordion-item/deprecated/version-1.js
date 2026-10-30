// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const V1 = {
    attributes: {
        parentAtts: { type: "object" },

        ID: { type: "string" },
		className: { type: "string" },

        itemTitle: { type: "string", default: "Title" },
        itemDescription: { type: "string", default: "Description" },
        itemIcon: { type: "string" },
        showButton: { type: "boolean", default: false },
        itemButtonText: { type: "string" },
        itemButtonUrl: { type: "string" },
        itemButtonLinkTarget: { type: "string", default: "external" },

        contentAnimation: { type: "string", default: "off" },
        contentWrapperpadding: { type: "object" },
        contentWrappermargin: { type: "object" },
		Containerborder: { type: "object" },
		ContainerborderRadius: { type: "string" },
        normalUseBackgroundImage: { type: "boolean", default: false },
        normalAccordionBackground: { type: "string" },
        normalBackgroundImage: { type: "string" },
        normalAccordionBackgroundGradient: {
            type: "string",
            default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
        },
        normalItemBGImageSize: { type: "string", default: "cover" },
        normalItemBGImagePosition: { type: "string", default: "center" },
        normalItemBGImageRepeat: { type: "string", default: "no-repeat" },
        normalItemBGImageBlend: { type: "string", default: "normal" },
        activeAccordionBackground: { type: "string" },
        activeAccordionBackgroundGradient: {
            type: "string",
            default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
        },
        activeItemBGImageSize: { type: "string", default: "cover" },
        activeItemBGImagePosition: { type: "string", default: "center" },
        activeItemBGImageRepeat: { type: "string", default: "no-repeat" },
        activeItemBGImageBlend: { type: "string", default: "normal" },
        activeBackgroundImage: { type: "string" },
        activeUseBackgroundImage: { type: "boolean", default: false },

        iconColor: { type: "string" },
        iconShapBackground: { type: "string", default: "#9E9E9E" },
        styleIcon: { type: "boolean", default: false },
        iconShape: { type: "string", default: "square" },
        iconFontSize: { type: "string" },
        iconpadding: { type: "object" },
        iconmargin: { type: "object" },

        textColor: { type: "string", default: "global" },
        textAlignment: { type: "string" },

        titleColor: { type: "string" },
        titleAlign: { type: "string" },
        titleLavel: { type: "string", default: "h4" },
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
        let { ID, parentAtts, className } = attributes;
        let animationClass = ( 'off' !== attributes.contentAnimation ) ? ` wpmozo-item-animation-${attributes.contentAnimation}` : '';

        className = className += animationClass;

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        let parentAttsTitleLavel = ( ! wpmozo_is_empty( parentAtts ) ) ? parentAtts.titleLavel : 'h4',
            inactiveState = ( ! wpmozo_is_empty( parentAtts ) ) ? parentAtts.inactiveState : '';

        const {
            itemButtonText,
            itemButtonUrl,
            itemButtonLinkTarget,
            buttonIcon,
            showButton,
            styleIcon,
            iconShape,
            itemIcon,
            itemTitle,
            titleLavel,
            itemDescription,
            buttonIconPlacement,
            useButtonIcon,
            buttonIconHover,
            normalBackgroundImage,
            activeBackgroundImage,
            contentAnimation
        } = attributes;

        let buttonText = itemButtonText || __( 'Read More', 'wpmozo-blocks-and-addons' ),
            urlNewWindow = itemButtonLinkTarget === 'external' ? '_blank' : '_self',
            resolvedIconShape = styleIcon ? iconShape : '',
            titleHeadingLavel = ( ! wpmozo_is_empty( titleLavel ) && 'h4' !== titleLavel ) ? titleLavel : parentAttsTitleLavel,
            isEnabledAnimation = ( 'off' !== contentAnimation ) ? ' wpmozo-item-animation' : '',
            titleExClass = ( ! wpmozo_is_empty( inactiveState ) && ! inactiveState.includes( 'title' ) && 'off' !== contentAnimation ) ? ' wpmozo-item-animation' : '',
            iconExClass = ( ! wpmozo_is_empty( inactiveState ) && ! inactiveState.includes( 'icon' ) && 'off' !== contentAnimation ) ? ' wpmozo-item-animation' : '',
            descExClass = ( ! wpmozo_is_empty( inactiveState ) && 'off' !== contentAnimation ) ? ' wpmozo-item-animation' : '',
            btnExClass = ( ! wpmozo_is_empty( inactiveState ) && 'off' !== contentAnimation ) ? 'wpmozo-item-animation' : '';

        let renderedIcon = null;
        if (itemIcon) {
            if ( 'hexagon' === resolvedIconShape ) {
                renderedIcon = ( 
                    <div className="wpmozo-bna-icon-hexagon-wrapper">
                        <div className="wpmozo-bna-icon-hexagon-inner-wrap">
                            <div className="wpmozo-bna-icon-hexagon">
                                <i className={`${itemIcon}`}></i>
                            </div>
                        </div>
                    </div>
                );
            }else{
                renderedIcon = (
                    <span className={`wpmozo-bna-image-accordion-item-icon ${resolvedIconShape}${iconExClass}`}>
                        <div className="icon-wrapper">
                            <i className={`${itemIcon} wpmozo-bna-icon-shape-${resolvedIconShape}`}></i>
                        </div>
                    </span>
                );
            }
        }

        let btnIcon = '',
            buttonIconPlacementClass = '',
            buttonIconHoverClass = '';

        if ( ! wpmozo_is_empty( parentAtts ) ) {
            if ( parentAtts.useButtonIcon ) {
                btnIcon = '' === parentAtts.buttonIcon ? '' : (
                    <i className={`wpmozo-bna-icon ${parentAtts.buttonIcon}`}></i>
                );
            }
        }
        
        if ( useButtonIcon ) {
            btnIcon = '' === buttonIcon ? '' : (
                <i className={`wpmozo-bna-icon ${buttonIcon}`}></i>
            );
        }

        if ( ! wpmozo_is_empty( parentAtts ) ) {
            if ( parentAtts.buttonIcon ) {
                if( 'after' === parentAtts.buttonIconPlacement ){
                    buttonIconPlacementClass = 'wpmozo-icon-at-after';
                }else{
                    buttonIconPlacementClass = 'wpmozo-icon-at-before';
                }
            }
        }

        if ( useButtonIcon && buttonIcon && ! wpmozo_is_empty( buttonIconPlacement ) ) {
            if( 'after' === buttonIconPlacement ){
                buttonIconPlacementClass = 'wpmozo-icon-at-after';
            }else{
                buttonIconPlacementClass = 'wpmozo-icon-at-before';
            }
        }

        if ( ! wpmozo_is_empty( parentAtts ) ) {
            if ( parentAtts.useButtonIcon && parentAtts.buttonIcon && parentAtts.buttonIconHover ) {
                buttonIconHoverClass = 'wpmozo-icon-on-hover';
            }
        }

        if ( useButtonIcon && buttonIcon && buttonIconHover ) {
            buttonIconHoverClass = 'wpmozo-icon-on-hover';
        }

        return (
            <>
                {/* Only output <style> if ID exists. */}
                { ( ID && '' !== ID ) && (
                    <style>{ generateDynamicStyle( { attributes } ) }</style>
                ) }
                <div { ...blockProps }>
                    <div className={`wpmozo-bna-image-accordion-item-content-wrapper${isEnabledAnimation}`}>
                        <div className={`wpmozo-bna-image-accordion-item-content-inner-wrap`}>
                            {renderedIcon}
                            <RichText.Content
                                tagName={titleHeadingLavel}
                                className={`wpmozo-bna-image-accordion-item-title${titleExClass}`}
                                value={itemTitle}
                            />
                            <RichText.Content
                                tagName="div"
                                className={`wpmozo-bna-image-accordion-item-desc${descExClass}`}
                                value={itemDescription}
                            />
                            {itemButtonUrl && itemButtonUrl !== '' && showButton && (
                                <div className="wpmozo-bna-button-wrap wpmozo-bna-image-accordion-btn">
                                    <a
                                        href={itemButtonUrl}
                                        target={urlNewWindow}
                                        className={ [
                                            'wpmozo-bna-button',
                                            buttonIconHoverClass,
                                            buttonIconPlacementClass,
                                            btnExClass
                                        ].join(" ") }
                                    >
                                        <span className='wpmozo-bna-btn-text'>{ buttonText }</span>
                                        {btnIcon}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;