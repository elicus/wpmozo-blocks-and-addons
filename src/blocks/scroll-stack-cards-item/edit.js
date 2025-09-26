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

    let ID = clientId;
    
    // Ensure ID is set once (no render-time mutation).
    useEffect( () => {
        setAttributes( { ID: clientId } );
    }, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

    const blockProps = useBlockProps( {
        className: attributes.className,
        ...( ID ? { id: `block-${ ID }` } : {} ),
    } );

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]);
    attributes.parentAtts = parentAttributes;

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
        layout = ( ! wpmozo_is_empty( parentAttributes ) ) ? parentAttributes.layout : 'vertical',
        TitleTag = titleLavel;

    // Title
    const TitleEl = (
        <RichText
            tagName={TitleTag}
            className="wpmozo-bna-scroll-stack-cards-title"
            value={itemTitle}
            onChange={(value) => setAttributes({ itemTitle: value })}
            placeholder={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
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
        <RichText
            tagName="div"
            className="wpmozo-bna-scroll-stack-cards-content"
            value={itemDescription}
            onChange={(value) => setAttributes({ itemDescription: value })}
            placeholder={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
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
                <i className={ buttonIcon }></i>
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
           <div className="wpmozo-bna-button-wrap wpmozo-bna-imsage-accordion-btn">
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
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes }) }
            </style>
            <div { ...blockProps }>
                { 'vertical' === layout &&
                    LayoutVertical
                }
                { 'horizontal' === layout &&
                    LayoutHorizontal 
                }
            </div>
        </Fragment>
    );
}
