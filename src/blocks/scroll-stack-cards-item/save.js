import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
    const { ID, parentAtts } = attributes,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-scroll-stack-cards-item' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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
            <div { ...blockProps } id={`block-${ ID }`}>
                { 'vertical' === layout &&
                    LayoutVertical
                }
                { 'horizontal' === layout &&
                    LayoutHorizontal 
                }
            </div>
        </>
    );
}
