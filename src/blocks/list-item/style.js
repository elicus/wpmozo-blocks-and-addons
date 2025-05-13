import {convertInlineStyleStr} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';

const generateDynamicStyle = ({ attributes, clientId }) => {

    const parentAttributes = useSelect((select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId]); // Re-run when clientId changes
	const parent = '#block-'+clientId,
	toConvertStyles = [
    	'textNormal',
        'textHover',
        'item'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );


	let styles = `#block-${attributes.ID}{`;

	styles += `
		#block-${clientId}.wpmozo-bna-list-item {
			${convertedStyle.item}
		}
		#block-${clientId} .wpmozo-bna-list-item-text p {
			color: ${attributes.textNormalColor};
			${convertedStyle.textNormal}
		}
		#block-${clientId} .wpmozo-bna-list-item-text p:hover {
			color: ${attributes.textHoverColor};
			${convertedStyle.textHover}
		}
	`;
	if ( undefined === attributes.itemBackgroundColor ) {
		styles += `
			#block-${clientId}.wpmozo-bna-list-item {
				background: ${attributes.itemBackgroundGradient};
			}
		`;
	} else {
        styles += `
        #block-${clientId}.wpmozo-bna-list-item {
				background: ${attributes.itemBackgroundColor};
			}
    	`;
	}

	if ( 'icon' === attributes.markerType ) {
		styles += `
			#block-${clientId} .wpmozo-bna-list-icon i {
				color: ${attributes.iconColor};
			}
		`;
		if( true === attributes.styleIcon ){
			if( 'hexagon' === attributes.iconShape ){
				if( true === attributes.enableShapeBorder ){
					styles += `
						#block-${clientId} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex {
							box-shadow: 2px 0px 0px 0px inset ${attributes.shapeBorderColor}, -2px 0px 0px 0px inset ${attributes.shapeBorderColor};
						}

						#block-${clientId} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ${attributes.shapeBorderColor};
                            border-bottom: 2px solid ${attributes.shapeBorderColor};
                            transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%);
                            width: 55%;
                            height: 100%;
						}

						#block-${clientId} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid ${attributes.shapeBorderColor};
                            border-left: 2px solid ${attributes.shapeBorderColor};
                            transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
                            width: 55%;
                            height: 100%;
						}
					`;
				} else {
					styles += `
					    #block-${clientId} .wpmozo-bna-list-icon .hexagon:after{
					            transform: rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%);
					            width: 55%;
				        }
					    #block-${clientId} .wpmozo-bna-list-icon .hexagon:before {
					            transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%);
					            width: 55%;
				        }
					`;
				}
				styles += `
				    #block-${clientId} 
				    .wpmozo-bna-list-icon {
                        width: calc( ${parentAttributes.iconFontSize}px + ${(parentAttributes.iconFontSize/1.15)}px );
                    }
				    #block-${clientId} .wpmozo-bna-list-icon i {
                        font-size: ${parentAttributes.iconFontSize}px;
                    }
				    #block-${clientId} .wpmozo-bna-list-icon .hexagon:before,#block-${clientId} .wpmozo-bna-list-icon .hexagon:after, .wpmozo-bna-list-icon .hexagon {
                        background-color: ${attributes.shapeBackground};
                    }
				`;
			} else {
				if( true === attributes.enableShapeBorder ){
					styles += `
					    #block-${clientId} .wpmozo-bna-list-icon i {
                            border: 2px solid ${attributes.shapeBorderColor};
                        }
						#block-${clientId} .wpmozo-bna-list-icon i {
                            font-size: ${parentAttributes.iconFontSize}px;
                        }
					`;
				}
				styles += `
				    #block-${clientId} .wpmozo-bna-list-icon i {
                        font-size: ${parentAttributes.iconFontSize}px;
                    }
				`;
			}
			styles += `
			    #block-${clientId} .wpmozo-bna-list-icon i {
                    background-color: ${attributes.shapeBackground};
                }
			`;
		} else if ( true !== attributes.styleIcon ){
			styles += `
			    #block-${clientId} .wpmozo-bna-list-icon i {
                    font-size: ${parentAttributes.iconFontSize}px;
                }
			`;
		}
	} 	
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;