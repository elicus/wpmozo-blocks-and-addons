import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    
    const { ID } = attributes;

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
        iconShape,
        itemIcon,
        itemTitle,
        titleLavel,
        itemDescription,
        buttonIconPlacement,
        useButtonIcon
    } = attributes;

    const buttonText = itemButtonText || 'Learn More';
    const urlNewWindow = itemButtonLinkTarget === 'external' ? '_blank' : '_self';
    const resolvedIconShape = styleIcon === 'on' ? iconShape : '';

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

    if ( useButtonIcon ) {
        btnIcon = '' === buttonIcon ? '' : (
            <i className={ buttonIcon }></i>
        );
    }

    buttonClass += 'wpmozo-bna-btn';
    if ( buttonIcon ) {
        buttonClass += ( useButtonIcon && 'after' === buttonIconPlacement ) ? ' wpmozo-bna-icon-right' : ' wpmozo-bna-icon-left';
    }

    return (
        <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }
            <div { ...blockProps }>
                <div className="wpmozo-bna-image-accordion-item-content-wrapper">
                    <div className={`wpmozo-bna-image-accordion-item-content-inner-wrap`}>
                        {renderedIcon}
                        <RichText.Content
                            tagName={titleLavel}
                            className="wpmozo-bna-image-accordion-item-title"
                            value={itemTitle}
                        />
                        <RichText.Content
                            tagName="div"
                            className="wpmozo-bna-image-accordion-item-desc"
                            value={itemDescription}
                        />
                        {itemButtonUrl && itemButtonUrl !== '' && showButton && (
                            <div>
                                <a
                                    href={itemButtonUrl}
                                    target={urlNewWindow}
                                    className={buttonClass}
                                >
                                    {buttonText}
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
