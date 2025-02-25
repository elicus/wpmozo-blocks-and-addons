
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Save = ({ attributes }) => {

    const ID = attributes.ID;
    let position = '';

    if( 'line' === attributes.separatorType ){
        if( 'onlySeparator' === attributes.lineUseWith ){
            position = '';
        } else if( 'textSeparator' === attributes.lineUseWith ){
            position = `align-${attributes.textAlign}`;
        } else if( 'iconSeparator' === attributes.lineUseWith ){
            position = `align-${attributes.iconPosition}`;
        } else {
            position = `align-${attributes.imagePosition}`;
        }

    } else {
        position = '';
    }

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-separator' })} id={`block-${ID}`}>
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
    );
};

export default Save;