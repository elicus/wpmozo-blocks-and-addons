import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Fragment } from "@wordpress/element";
import generateDynamicStyle from './style';
import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {


    const WPMozoEditorObj = wpmozo_bna_editor_object;

    const attributes = props.attributes,

    setAttributes = props.setAttributes,

    clientId = props.clientId,

    content = attributes.text;

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]);
    attributes.parentAtts = parentAttributes;
    
    attributes.ID = clientId;

    function layoutWraper() {

        let NameLevel = attributes.nameHeadingLavel,
            $thumbnail = attributes.itemThumbnail,
            $item_currency = attributes.itemCurrency,
            $item_price = attributes.itemPrice,
            $item_thumbnail_option = attributes.itemThumbnailOption,
            $icon_shape = attributes.iconShape;

        const $icon = '' === attributes.icon ? '' : (
            <div className="icon-wrapper">
                <i className={`${ attributes.icon }`}></i>
            </div>
        );

        let $title = <NameLevel className="wpmozo-bna-price-list-item-name">{$item_name}</NameLevel>;

        if ( '' !== $item_thumbnail && 'use_image' === $item_thumbnail_option ) {
            $thumbnail = <img src={$item_thumbnail} alt={$item_thumbnail_alt} />;
        }

        if ( '' !== $icon && 'use_icon' === $item_thumbnail_option ) {
            $thumbnail = <span className={"wpmozo-bna-price-list-icon"+ $icon_shape}>{$icon}</span>;
        }

        if ( '' !== $item_price ) {
            $price = <span className="wpmozo-bna-price-list-item-price">{$item_price}</span>;
        }

        if ( '' !== $item_currency ) {
            $currency = <span className="wpmozo-bna-price-list-item-currency">{$item_currency}</span>;
        }

        if ( '' !== attributes.content ) {
            $description = <div className="wpmozo-bna-price-list-item-description">{attributes.content}</div>;
        }

    }

    function layout1() {

    let $no_thumbnail       = false,
            $item_price_wrap    = [],
            $inner_wrap         = [],
            $item_name_wrap     = [];

        if ( '' === $thumbnail ) {
            $no_thumbnail = true;
        }

        if ( '' !== $thumbnail && 'use_image' === $item_thumbnail_option ) {
            $inner_wrap.push(<div className="wpmozo-bna-price-list-item-thumbnail" key={$address+"_layout1_thumb"}>{$thumbnail}</div>);
        }

        if ( '' !== $thumbnail && 'use_icon' === $item_thumbnail_option ) {
            if ( 'wpmozo-bna-icon-shape-hexagon' === $icon_shape ) {
                $thumbnail = <div className="wpmozo-bna-icon-hexagon-wrapper">
                            <div className="wpmozo-bna-icon-hexagon-inner-wrap">
                                <div className="wpmozo-bna-icon-hexagon">{$thumbnail}</div>
                            </div>
                        </div>;
            }
            $inner_wrap.push(<div className="wpmozo-bna-price-list-item-icon" key={$address+"_layout1_thumb"}>{$thumbnail}</div>);
        }

        if ( '' !== $price ) {
            $item_price_wrap.push(<div className="wpmozo-bna-price-list-item-price-divider" key={$address+"_layout1_price_divider"}></div>);
            $item_price_wrap.push(<div className="wpmozo-bna-price-list-item-price-wrap" key={$address+"_layout1_price_wrapper"}>{$currency}{$price}</div>);
            if ( $price_period && '' !== $price_period ) {
                $item_price_wrap.push(<div className="wpmozo-bna-price-list-item-price-period" key={$address+"_layout1_price_period"}><span class="wpmozo-bna-price-period-divider">/</span>{$price_period}</div>);
            }
        }

        $item_name_wrap.push(<div className="wpmozo-bna-price-list-item-name-wrap" key={$address+"_layout1_name_wrap"}>{$title}{$item_price_wrap}</div>);

        $inner_wrap.push(<div className="wpmozo-bna-price-list-item-details" key={$address+"_layout1_desc"}>{$item_name_wrap}{$description}</div>);
        
        let $wrapper_classes = {
            'wpmozo-bna-price-list-layout'   : true,
            'wpmozo-bna-price-list-layout1'  : true,
            'no_thumbnail'             : $no_thumbnail,
        };

        let layout = <div className={$wrapper_classes} key={$address+"_layout1_item"}><div className="wpmozo-bna-price-list-item-wrap">{$inner_wrap}</div></div>;

        return layout;
    }

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId, parentAttributes }) }
            </style>
            <div { ...useBlockProps({ className: 'wpmozo-bna-list-item' }) }>
                <div className="list-item-wrap" >
                    {"icon" === attributes.markerType && true !== attributes.styleIcon && (
                        <div className="wpmozo-bna-list-icon use-icon">
                            <i className={ attributes.markerIcon }></i>
                        </div>

                    )}
                    {"icon" === attributes.markerType && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                        <div className={"wpmozo-bna-list-icon use-icon use-"+attributes.iconShape}>
                            <i className={ attributes.markerIcon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
                        </div>
                    )}
                    {"icon" === attributes.markerType && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                        <div className={"wpmozo-bna-list-icon use-icon shape-hexagon use-"+attributes.iconShape}>
                            <div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
                                <i className={ attributes.markerIcon }></i>
                            </div>
                        </div>
                    )}
                    {"image" === attributes.markerType && (
                        <img className="wpmozo-bna-marker-image" src={( attributes.markerImage ) ? attributes.markerImage : WPMozoEditorObj.placeholderImg }/>
                    )}
                    <div className="wpmozo-bna-list-item-text">
                        <RichText
                            identifier="text"
                            tagName="p"
                            value={ attributes.text }
                            onChange={ ( newContent ) =>
                                setAttributes( { text: newContent } )
                            }
                            key="editable"
                            placeholder={__("Enter list item…", "wpmozo-blocks-and-addons")}
                        />
                    </div>
                    <div className="wpmozo-bna-list-divider">
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
