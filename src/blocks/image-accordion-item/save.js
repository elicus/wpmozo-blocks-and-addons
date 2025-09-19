import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';

export default function save({ attributes }) {
    
    const { ID, parentAtts } = attributes;

    // Only add ID attribute if it exists
    const blockProps = useBlockProps.save( {
        className: attributes.className,
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
        useButtonIcon
    } = attributes;

    let buttonText = itemButtonText || 'Learn More',
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
        buttonClass = '';

    if ( ! wpmozo_is_empty( parentAtts ) ) {

        if ( parentAtts.useButtonIcon ) {
            btnIcon = '' === parentAtts.buttonIcon ? '' : (
                <i className={ parentAtts.buttonIcon }></i>
            );
        }

         buttonClass += 'wpmozo-bna-btn wp-block-button__link wp-element-button';
        if ( parentAtts.buttonIcon ) {
            if( 'after' === parentAtts.buttonIconPlacement ){
                buttonText = ( <>{itemButtonText}{btnIcon}</> );
            }else{
                buttonText = ( <>{btnIcon}{itemButtonText}</> );
            }
        }
        
    }

    if ( useButtonIcon ) {
        btnIcon = '' === buttonIcon ? '' : (
            <i className={ buttonIcon }></i>
        );
    }

    if ( useButtonIcon && buttonIcon && ! wpmozo_is_empty( buttonIconPlacement ) ) {
        if( 'after' === buttonIconPlacement ){
            buttonText = ( <>{itemButtonText}{btnIcon}</> );
        }else{
            buttonText = ( <>{btnIcon}{itemButtonText}</> );
        }
    }

    return (
        <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes, ID } ) }</style>
            ) }
            <div { ...blockProps }>
                <div className="wpmozo-bna-image-accordion-item-content-wrapper">
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
                            <div className="wpmozo-bna-image-accordion-item-btn-wrapper">
                                <a
                                    href={itemButtonUrl}
                                    target={urlNewWindow}
                                    className={buttonClass}
                                >
                                    {buttonText}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
