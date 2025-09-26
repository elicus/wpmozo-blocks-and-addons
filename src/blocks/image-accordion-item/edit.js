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
    
    // Ensure ID is set once (no render-time mutation).
    useEffect( () => {
        if ( attributes.ID !== clientId ) {
            setAttributes( { ID: clientId } );
        }
    }, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]);
    attributes.parentAtts = parentAttributes;

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
        useButtonIcon,
        buttonIconHover,
        contentAnimation
    } = attributes;

    let buttonText = itemButtonText || __( 'Read More', 'wpmozo-blocks-and-addons' ),
        urlNewWindow = itemButtonLinkTarget === 'external' ? '_blank' : '_self',
        resolvedIconShape = styleIcon ? iconShape : '',
        titleHeadingLavel = ( ! wpmozo_is_empty( titleLavel ) && 'h4' !== titleLavel ) ? titleLavel : parentAttributes.titleLavel,
        animationClass = ( 'off' !== contentAnimation ) ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimation}` : '';

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

    if ( parentAttributes.useButtonIcon ) {
        btnIcon = '' === parentAttributes.buttonIcon ? '' : (
            <i className={`wpmozo-bna-icon ${parentAttributes.buttonIcon}`}></i>
        );
    }

    if ( useButtonIcon ) {
        btnIcon = '' === buttonIcon ? '' : (
            <i className={`wpmozo-bna-icon ${buttonIcon}`}></i>
        );
    }

    if ( parentAttributes.buttonIcon ) {
        if( 'after' === parentAttributes.buttonIconPlacement ){
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

    if ( parentAttributes.useButtonIcon && parentAttributes.buttonIcon && parentAttributes.buttonIconHover ) {
        buttonIconHoverClass = 'wpmozo-icon-on-hover';
    }

    if ( useButtonIcon && buttonIcon && buttonIconHover ) {
        buttonIconHoverClass = 'wpmozo-icon-on-hover';
    }

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes }) }
            </style>
            <div {...useBlockProps()} id={`block-${attributes.ID}`}>
                <div className={`wpmozo-bna-image-accordion-item-content-wrapper ${animationClass}`}>
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
        </Fragment>
    );
}
