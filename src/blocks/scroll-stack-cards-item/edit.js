import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Fragment, useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import { useSelect } from '@wordpress/data';
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

    const { attributes, setAttributes, clientId } = props,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-scroll-stack-cards-item${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
    // Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

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
        titleHeadingLavel = ( ! wpmozo_is_empty( titleLavel ) && 'h4' !== titleLavel ) ? titleLavel : parentAttributes.titleLavel;

    // Title
    const TitleEl = (
        <RichText
            tagName={titleHeadingLavel}
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
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes }) }
            </style>
            <div { ...blockProps } id={`block-${ clientId }`}>
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
