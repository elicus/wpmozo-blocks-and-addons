
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment, useState, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-separator' });

    attributes.ID = ID;
    let position = '';

    if( 'line' === attributes.separatorType ){
        if( 'onlySeparator' === attributes.lineUseWith ){
            position = 'align-none';
        } else if( 'textSeparator' === attributes.lineUseWith ){
            position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
        } else if( 'iconSeparator' === attributes.lineUseWith ){
            position = `align-${attributes.iconPosition}`;
        } else {
            position = `align-${attributes.imagePosition}`;
        }

    } else {
        position = '';
    }
    useEffect(() => {
        jQuery(document).ready(function($){
            if ( jQuery('body').find('.wpmozo-adfgu-separator').length > 0 ) {
                $('body').find('.wpmozo-adfgu-separator').each(function() {
                    let height = $(this).find('.wpmozo-adfgu-icon-wrapper').outerHeight(true);
                    let padding = height/2;
                    $(this).css('padding-top', padding+'px');
                    $(this).css('padding-bottom', padding+'px');
                });
            }
        });
    });

	return (
        <Fragment>
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
            {"line" === attributes.separatorType && (
                <div className={`wpmozo-adfgu-separator-container ${position}`}>
                    <div className="wpmozo-adfgu-line wpmozo-adfgu-line-before"></div>
                        {"textSeparator" === attributes.lineUseWith && (
                            <div className="wpmozo-adfgu-text-wrapper">
                                <p>{`${attributes.separatorText}`}</p>
                            </div>
                        )}
                        {"iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && (
                            <div className="wpmozo-adfgu-icon-wrapper">
                                <i className={ attributes.separatorIcon }></i>
                            </div>

                        )}
                        {"iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                            <div className="wpmozo-adfgu-icon-wrapper">
                                <i className={ attributes.separatorIcon +' wpmozo-adfgu-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-adfgu-icon-shape-border') : '' ) }></i>
                            </div>

                        )}
                        {"iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                            <div className="wpmozo-adfgu-icon-wrapper shape-hexagon">
                                <div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-adfgu-border-hex') : '' )}>
                                    <i className={ attributes.separatorIcon }></i>
                                </div>
                            </div>
                        )}
                        {"imageSeparator" === attributes.lineUseWith && (
                            <img className="wpmozo-adfgu-separator-image" src={( attributes.separatorImage ) ? attributes.separatorImage : WPMozoEditorObj.placeholderImg }/>
                        )}
                    <div className="wpmozo-adfgu-line wpmozo-adfgu-line-after"></div>
                </div>
            )}
            {"shadow" === attributes.separatorType && (
                <div className="wpmozo-adfgu-shadow">
                </div>
            )}
            </div>
        </Fragment>
    );

};

export default Edit;