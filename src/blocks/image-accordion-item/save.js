import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../common/utils.js';

export default function save({ attributes }) {
    
    const { ID } = attributes;

    // Only add ID attribute if it exists
    const blockProps = useBlockProps.save( {
        className: attributes.className,
        ...( ID ? { id: `block-${ ID }` } : {} ),
    } );

    const parentAttributes = attributes.parentAtts;

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
        resolvedIconShape = styleIcon === 'on' ? iconShape : '',
        titleHeadingLavel = ( ! wpmozo_is_empty( titleLavel ) && 'h4' !== titleLavel ) ? titleLavel : parentAttributes.titleLavel;

    let renderedIcon = null;
    if (itemIcon) {
        renderedIcon = (
            <span className={`wpmozo-bna-image-accordion-item-icon ${resolvedIconShape}`}>
                <div className="icon-wrapper">
                    <i className={itemIcon}></i>
                </div>
            </span>
        );
    }

   let btnIcon = '',
        buttonClass = '';

    if ( parentAttributes.useButtonIcon ) {
        btnIcon = '' === parentAttributes.buttonIcon ? '' : (
            <i className={ parentAttributes.buttonIcon }></i>
        );
    }

     buttonClass += 'wpmozo-bna-btn wp-block-button__link wp-element-button';
    if ( parentAttributes.buttonIcon ) {
        if( 'after' === parentAttributes.buttonIconPlacement ){
            buttonText = ( <>{itemButtonText}{btnIcon}</> );
        }else{
            buttonText = ( <>{btnIcon}{itemButtonText}</> );
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
