
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const ID = attributes.ID,
    toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType,
    titleWrapClass = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

    const iconOne = (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleOneIcon }`}></i>
        </div>
    );

    const iconTwo = (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleTwoIcon }`}></i>
        </div>
    );

    const titleOne = (
       <div className={`wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-one${titleWrapClass}`}>
            { 'before' === attributes.toggleOneIconPostion &&
                iconOne
            }
            <h5>
                { attributes.toggleOneTitle }
            </h5>
            { 'after' === attributes.toggleOneIconPostion &&
                iconOne
            }
        </div>
    );

    const titleTwo = (
        <div className={`wpmozo-adfgu-toggle-title-wrap wpmozo-adfgu-toggle-title-two${titleWrapClass}`}>
            { 'before' === attributes.toggleTwoIconPostion &&
                iconTwo
            }
            <h5>
                { attributes.toggleTwoTitle }
            </h5>
            { 'after' === attributes.toggleTwoIconPostion &&
                iconTwo
            }
        </div>
    );

    return (
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-content-toggle-main' })} id={`block-${ID}`}>
            <div className={`wpmozo-adfgu-toggle-button-wrap${toggleSwitchTypeClass}`}>
                { 'toggle' === attributes.toggleSwitchType && (
                    <>
                        <input 
                            className="wpmozo-adfgu-toggle-field" 
                            type="checkbox" 
                            value=""
                        />
                        <label className={`wpmozo-adfgu-toggle-switch`}>
                            { titleOne }
                            { titleTwo }
                        </label>
                    </>
                )}
                { 'toggle' !== attributes.toggleSwitchType && (
                    <>
                        { titleOne }
                        <div className={`wpmozo-adfgu-toggle-button${toggleSwitchTypeClass}`}>
                            <label className="wpmozo-adfgu-toggle-button-inner">
                                <input 
                                    className="wpmozo-adfgu-toggle-field" 
                                    type="checkbox" 
                                    value=""
                                />
                                <div className={`wpmozo-adfgu-toggle-switch${toggleSwitchTypeClass}`}></div>
                            </label>
                        </div>
                        { titleTwo }
                    </>
                )}
            </div>
            <div className="wpmozo-adfgu-content-toggle-content-wrap">
                <InnerBlocks.Content />
            </div>    
        </div>
    );
};

export default Save;