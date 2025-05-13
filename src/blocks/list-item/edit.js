import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Fragment } from "@wordpress/element";
import generateDynamicStyle from './style';

import { useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
    const WPMozoEditorObj = wpmozo_bna_editor_object;

    const attributes = props.attributes,

    setAttributes = props.setAttributes,
    
    clientId = props.clientId,
    
    content = attributes.text;
    
    attributes.ID = clientId;

    const { insertBlocksAfter, removeBlock } = useDispatch('core/block-editor');

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
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
                            onSplit={(before, after) => {
                                const newBlock = createBlock('wpmozo/list-item', {
                                    content: after,
                                });
                                insertBlocksAfter(newBlock);
                                return createBlock('wpmozo/list-item', {
                                    content: before,
                                });
                            }}
                            onRemove={() => removeBlock(clientId)}
                            key="editable"
                            placeholder={__("Enter list item…", "wpmozo-blocks-and-addons")}
                            __unstableAllowLineBreaks={false}
                            inlineToolbar
                        />
                    </div>
                    <div className="wpmozo-bna-list-divider">
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
