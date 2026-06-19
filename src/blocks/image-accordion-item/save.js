import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
    let { ID, parentAtts, className } = attributes;
    let animationClass = ( 'off' !== attributes.contentAnimation ) ? ` wpmozo-item-animation-${attributes.contentAnimation}` : '';
    const wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-image-accordion-item ${animationClass}` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    className = className += animationClass;

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
            <div { ...blockProps } id={`block-${ID}`}>
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
}
