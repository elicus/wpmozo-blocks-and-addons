
import Inspector from "./inspector";
import generateDynamicStyle from './style';

import { __ } from "@wordpress/i18n";
import { Fragment, useState, useEffect } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
/*const WPMozoEditorObj = wpmozo_bna_editor_object;*/
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const Edit = (props) => {
    const { iconFontSize } = props.attributes;

  // Add styles dynamically from attributes
  const blockStyles = {
    fontSize: iconFontSize,
  };

    const attributes = props.attributes,
    clientId = props.clientId,
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-bna-separator' });

    attributes.ID = clientId;
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
            if ( jQuery('body').find('.wpmozo-bna-separator').length > 0 ) {
                $('body').find('.wpmozo-bna-separator').each(function() {
                    let height = $(this).find('.wpmozo-bna-icon-wrapper').outerHeight(true);
                    let padding = height/2;
                    $(this).css('padding-top', padding+'px');
                    $(this).css('padding-bottom', padding+'px');
                });
            }
        });
    });

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps()}>
            {"line" === attributes.separatorType && (
                <div className={`wpmozo-bna-separator-container ${position}`}>
                    <div className="wpmozo-bna-line wpmozo-bna-line-before"></div>
                        {"textSeparator" === attributes.lineUseWith && (
                            <div className="wpmozo-bna-text-wrapper">
                                <p>{`${attributes.separatorText}`}</p>
                            </div>
                        )}
                        {"iconSeparator" === attributes.lineUseWith && true !== attributes.styleIcon && (
                            <div className="wpmozo-bna-icon-wrapper">
                                <i className={ attributes.separatorIcon }></i>
                            </div>

                        )}
                        {"iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                            <div className="wpmozo-bna-icon-wrapper">
                                <i className={ attributes.separatorIcon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
                            </div>

                        )}
                        {"iconSeparator" === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                            <div className="wpmozo-bna-icon-wrapper shape-hexagon">
                                <div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
                                    <i className={ attributes.separatorIcon }></i>
                                </div>
                            </div>
                        )}
                        {"imageSeparator" === attributes.lineUseWith && (
                            <img className="wpmozo-bna-separator-image" src={( attributes.separatorImage ) ? attributes.separatorImage : "" }/>
                        )}
                    <div className="wpmozo-bna-line wpmozo-bna-line-after"></div>
                </div>
            )}
            {"shadow" === attributes.separatorType && (
                <div className="wpmozo-bna-shadow">
                </div>
            )}
            </div>
        </Fragment>
    );

};

export default Edit;