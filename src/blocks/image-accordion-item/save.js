import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
    let { ID, parentAtts, className } = attributes;
    let animationClass = ( 'off' !== attributes.contentAnimation ) ? ` wpmozo-item-animation-${attributes.contentAnimation}` : '';

    className = className += animationClass;

    // Only add ID attribute if it exists.
    const blockProps = useBlockProps.save( {
        className: className,
        ...( ID ? { id: `block-${ ID }` } : {} ),
    } );

    let parentAttsTitleLavel = ( ! wpmozo_is_empty( parentAtts ) ) ? parentAtts.titleLavel : 'h4';

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
        contentAnimation,
        normalBackgroundImage,
        activeBackgroundImage
    } = attributes;

    let buttonText = itemButtonText || __( 'Read More', 'wpmozo-blocks-and-addons' ),
        urlNewWindow = itemButtonLinkTarget === 'external' ? '_blank' : '_self',
        resolvedIconShape = styleIcon ? iconShape : '',
        titleHeadingLavel = ( ! wpmozo_is_empty( titleLavel ) && 'h4' !== titleLavel ) ? titleLavel : parentAttsTitleLavel;

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
                <span className={`wpmozo-bna-image-accordion-item-icon ${resolvedIconShape}`}>
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
                <div className={`wpmozo-bna-image-accordion-item-content-wrapper wpmozo-item-animation`}>
                    <div className={`wpmozo-bna-image-accordion-item-content-inner-wrap`}>
                        {renderedIcon}
                        <RichText.Content
                            tagName={titleHeadingLavel}
                            className="wpmozo-bna-image-accordion-item-title"
                            value={itemTitle}
                        />
                        <RichText.Content
                            tagName="div"
                            className="wpmozo-bna-image-accordion-item-desc"
                            value={itemDescription}
                        />
                        {itemButtonUrl && itemButtonUrl !== '' && showButton && (
                            <div className="wpmozo-bna-button-wrap wpmozo-bna-imsage-accordion-btn">
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
