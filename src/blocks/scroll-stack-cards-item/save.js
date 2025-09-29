import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
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
        TitleTag = titleLavel;

    // Title
    const TitleEl = (
        <RichText.Content
            tagName={TitleTag}
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
        buttonIconPlacementClass = '';

        if ( useButtonIcon ) {
            btnIcon = '' === buttonIcon ? '' : (
                <i className={`wpmozo-bna-icon ${buttonIcon}`}></i>
            );
        }

        if ( useButtonIcon && buttonIcon && ! wpmozo_is_empty( buttonIconPlacement ) ) {
            if( 'after' === buttonIconPlacement ){
                buttonIconPlacementClass = 'wpmozo-icon-at-after';
            }else{
                buttonIconPlacementClass = 'wpmozo-icon-at-before';
            }
        }

        ButtonEl = (
           <div className="wpmozo-bna-button-wrap wpmozo-bna-scroll-stack-cards-item-btn">
                <a
                    href={itemButtonUrl}
                    target={urlNewWindow}
                    className={ [
                        'wpmozo-bna-button',
                        ( useButtonIcon && buttonIconHover ) ? 'wpmozo-icon-on-hover' : '',
                        buttonIconPlacementClass
                    ].join(" ") }
                >
                    <span className='wpmozo-bna-btn-text'>{ buttonText }</span>
                    {btnIcon}
                </a>
            </div>
        );
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
}
