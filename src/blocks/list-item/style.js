import { useSelect } from '@wordpress/data';
const Style = ({attributes, ID, clientId}) => {

    const wpmozoCoreFun = window.wpmozo,
        parent = '#block-'+clientId,
        toConvertStyles = [
        'textNormal',
        'textHover',
        'item'
        ],
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]); // Re-run when clientId changes

    let css = '';
    
    let allInline = [
        {
            selector: `.wpmozo-adfgu-list-item:has(#block-${clientId})`,
            additional: convertedStyle.item,
        },
        {
            selector: `#block-${clientId} .wpmozo-adfgu-list-item-text p`,
            style: {
                'color': attributes.textNormalColor,
            },
            additional: convertedStyle.textNormal,
        },
        {
            selector: `#block-${clientId} .wpmozo-adfgu-list-item-text p:hover`,
            style: {
                'color': attributes.textHoverColor,
            },
            additional: convertedStyle.textHover,
        },
    ];
    if ( 'icon' === attributes.markerType ) {
        allInline.push(
            {
                selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                style: {
                    'color': attributes.iconColor,
                }
            },
        );
        if ( true === attributes.styleIcon ) { 
            if ( 'hexagon' === attributes.iconShape ) { 
                if( true === attributes.enableShapeBorder ){ 
                    allInline.push(
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex`,
                            style: {
                                'box-shadow': `2px 0px 0px 0px inset ${attributes.shapeBorderColor}, -2px 0px 0px 0px inset ${attributes.shapeBorderColor}`,
                            }
                        },
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex:after`,
                            style: {
                                'border-right': `2px solid ${attributes.shapeBorderColor}`,
                                'border-bottom': `2px solid ${attributes.shapeBorderColor}`,
                                'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%)',
                                'width': 55+"%",
                                'height': 100+"%",
                            }
                        },
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon.wpmozo-adfgu-border-hex:before`,
                            style: {
                                'border-top': `2px solid ${attributes.shapeBorderColor}`,
                                'border-left': `2px solid ${attributes.shapeBorderColor}`,
                                'transform': 'rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%)',
                                'width': 55+"%",
                                'height': 100+"%",
                            }
                        },
                    );

                } else {
                    allInline.push(
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon`,
                            style: {
                            }
                        },
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:after`,
                            style: {
                                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%)',
                                'width': 55+"%"
                            }
                        },
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:before`,
                            style: {
                                'transform': 'rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%)',
                                'width': 55+"%"
                            }
                        },
                    );
                }
                allInline.push(
                    {
                        selector: `#block-${clientId} .wpmozo-adfgu-list-icon`,
                        style: {
                            'width': `calc( ${parentAttributes.iconFontSize}px + ${(parentAttributes.iconFontSize/1.15)}px )`,
                        }
                    },
                    {
                        selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                        style: {
                            'font-size': `${parentAttributes.iconFontSize}px`,
                        }
                    },
                    {
                        selector: `#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:before,#block-${clientId} .wpmozo-adfgu-list-icon .hexagon:after, .wpmozo-adfgu-list-icon .hexagon`,
                        style: {
                            'background-color': attributes.shapeBackground,
                        }
                    }
                );
            } else { 
                if( true === attributes.enableShapeBorder ){ 
                    allInline.push(
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                            style: {
                                'border': `2px solid ${attributes.shapeBorderColor}`,
                            }
                        },
                        {
                            selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                            style: {
                                'font-size': `${parentAttributes.iconFontSize}px`,
                            }
                        },
                    );
                } else { 

                }
                allInline.push(
                    {
                        selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                        style: {
                            'font-size': `${parentAttributes.iconFontSize}px`,
                        }
                    },
                );
            }
            allInline.push(
                {
                    selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                    style: {
                        'background-color': attributes.shapeBackground,
                    }
                }
            );
        } else if ( true !== attributes.styleIcon ) {
            allInline.push(
                {
                    selector: `#block-${clientId} .wpmozo-adfgu-list-icon i`,
                    style: {
                        'font-size': `${parentAttributes.iconFontSize}px`,
                    }
                },
            );
        } else {

        }
    }

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);
    
    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
        css += `
            ${generateStyle}
        `;
    }



    return (
        <style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
    );

}

export default Style;