import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Fragment, useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import { useSelect } from '@wordpress/data';
import { wpmozo_is_empty } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

    const { attributes, setAttributes, clientId } = props;

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]);
    attributes.parentAtts = parentAttributes;
    
    // Ensure ID is set once (no render-time mutation).
    useEffect( () => {
        setAttributes( { ID: clientId } );
    }, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

    attributes.ID = clientId;

    let {
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

    let buttonText = itemButtonText,
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
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId, parentAttributes }) }
            </style>
            <div { ...useBlockProps({ className: 'wpmozo-bna-image-accordion-item', id:`block-${clientId}` }) }>
                <div className="wpmozo-bna-image-accordion-item-content-wrapper">
                    <div className={`wpmozo-bna-image-accordion-item-content-inner-wrap`}>
                        {renderedIcon}
                        <RichText
                            tagName={titleHeadingLavel}
                            className="wpmozo-bna-image-accordion-item-title"
                            value={itemTitle}
                            onChange={(value) => setAttributes({ itemTitle: value })}
                            placeholder={ __( 'Item Title', 'wpmozo-blocks-and-addons' ) }
                        />
                        <RichText
                            tagName="div"
                            className="wpmozo-bna-image-accordion-item-desc"
                            value={itemDescription}
                            onChange={(value) => setAttributes({ itemDescription: value })}
                            placeholder={ __( 'Add content...', 'wpmozo-blocks-and-addons' ) }
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
        </Fragment>
    );
}
