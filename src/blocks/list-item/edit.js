
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    RichText
} from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import { useOnEnter } from './use-enter';
import { useEffect, useRef } from "react";
import { dispatch } from "@wordpress/data";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;


const Edit = (props) => {

    const { attributes, setAttributes, clientId } = props;
    const ID = window.wpmozo.getIdByClientid( clientId );
    const content = attributes.text;
    
    const blockProps = useBlockProps( {
        ref: useOnEnter( { clientId, content } ),
    } );
    const textRef = useRef();

    // Handle KeyDown (Backspace in Empty Block)
    const handleKeyDown = (event) => {
        if (event.key === "Backspace" && RichText.isEmpty(attributes.text)) {
            dispatch("core/block-editor").removeBlock(clientId);
        }
    };
        
    attributes.ID = ID;

    return (
        <Fragment>
            <Inspector {...props} />
            <div className="wpmozo-adfgu-list-item">
                <div className="list-item-wrap" id={`block-${clientId}`}>
                    <Style 
                        attributes={attributes} 
                        ID={ID}
                        clientId={clientId}  
                    />
                    {"icon" === attributes.markerType && true !== attributes.styleIcon && (
                        <div className="wpmozo-adfgu-list-icon use-icon">
                            <i className={ attributes.markerIcon }></i>
                        </div>

                    )}
                    {"icon" === attributes.markerType && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                        <div className={"wpmozo-adfgu-list-icon use-icon use-"+attributes.iconShape}>
                            <i className={ attributes.markerIcon +' wpmozo-adfgu-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-adfgu-icon-shape-border') : '' ) }></i>
                        </div>
                    )}
                    {"icon" === attributes.markerType && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                        <div className={"wpmozo-adfgu-list-icon use-icon shape-hexagon use-"+attributes.iconShape}>
                            <div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-adfgu-border-hex') : '' )}>
                                <i className={ attributes.markerIcon }></i>
                            </div>
                        </div>
                    )}
                    {"image" === attributes.markerType && (
                        <img className="wpmozo-adfgu-marker-image" src={( attributes.markerImage ) ? attributes.markerImage : WPMozoEditorObj.placeholderImg }/>
                    )}
                    <div className="wpmozo-adfgu-list-item-text">
                        <RichText
                            { ...blockProps }
                            identifier="text"
                            tagName="p"
                            value={ attributes.text }
                            onChange={ ( newContent ) =>
                                setAttributes( { text: newContent } )
                            }
                            key="editable"
                            placeholder={__("Enter list item…", "wpmozo-addons-lite-for-gutenberg")}
                            onKeyDown={ handleKeyDown }
                            ref={textRef}
                            inlineToolbar
                        />
                    </div>
                    <div className="wpmozo-adfgu-list-divider">
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;