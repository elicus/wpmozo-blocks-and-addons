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

    const { attributes, setAttributes, clientId } = props;

    const parentAttributes = useSelect( (select) => {
        const { getBlockRootClientId, getBlock } = select('core/block-editor');
        const parentId = getBlockRootClientId(clientId);
        return parentId ? getBlock(parentId)?.attributes : null;
    }, [clientId] );
    
    attributes.parentAtts = parentAttributes;
    
    attributes.ID = clientId;

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>{ generateDynamicStyle({ attributes, clientId, parentAttributes }) }</style>
            
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
                        <img className="wpmozo-bna-marker-image" src={( attributes.markerImage ) ? attributes.markerImage : wpmozo_bna_editor_object.placeholderImg }/>
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
