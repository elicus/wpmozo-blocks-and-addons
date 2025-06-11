import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment, useEffect } from "@wordpress/element";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {
    const attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId,
        ID = clientId,
        toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType,
        titleWrapClass = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

    attributes.ID = ID;

    useEffect(() => {
        const event = new CustomEvent('toggleAdded');
        const iframe = document.querySelector('iframe[name="editor-canvas"]');
        window.dispatchEvent(event);
        if (iframe?.contentWindow) {
            iframe.contentWindow.dispatchEvent(event);
        }
    }, [props]);

    const wrapperTemplate = [
        [ 'wpmozo/content-wrapper', {
            className: 'wpmozo-bna-content-toggle-one wpmozo-bna-content-toggle-active',
            lock: { 
                remove: true 
            }
        } ],
        [ 'wpmozo/content-wrapper', {
            className: 'wpmozo-bna-content-toggle-two',
            lock: { 
                remove: true 
            }
        } ],
    ];

    const iconOne = '' === attributes.toggleOneIcon ? '' : (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleOneIcon }`}></i>
        </div>
    );

    const iconTwo = '' === attributes.toggleTwoIcon ? '' : (
        <div className="icon-wrapper">
            <i className={`${ attributes.toggleTwoIcon }`}></i>
        </div>
    );

    const titleOne = (
       <div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-one${titleWrapClass}`}>
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
        <div className={`wpmozo-bna-toggle-title-wrap wpmozo-bna-toggle-title-two${titleWrapClass}`}>
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
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps({ className: 'wpmozo-bna-content-toggle-main' })}>
                <div className={`wpmozo-bna-toggle-button-wrap${toggleSwitchTypeClass}`}>
                    { 'toggle' === attributes.toggleSwitchType && (
                        <>
                            <input 
                                className="wpmozo-bna-toggle-field" 
                                type="checkbox" 
                                value=""
                            />
                            <label className={`wpmozo-bna-toggle-switch`}>
                                { titleOne }
                                { titleTwo }
                            </label>
                        </>
                    )}
                    { 'toggle' !== attributes.toggleSwitchType && (
                        <>
                            { titleOne }
                            <div className={`wpmozo-bna-toggle-button${toggleSwitchTypeClass}`}>
                                <label className="wpmozo-bna-toggle-button-inner">
                                    <input 
                                        className="wpmozo-bna-toggle-field" 
                                        type="checkbox" 
                                        value=""
                                    />
                                    <div className={`wpmozo-bna-toggle-switch${toggleSwitchTypeClass}`}></div>
                                </label>
                            </div>
                            { titleTwo }
                        </>
                    )}
                </div>
                <div className="wpmozo-bna-content-toggle-content-wrap">
                    <InnerBlocks 
                        template={ wrapperTemplate }
                        allowedBlocks={false}
                    />
                </div>
            </div>
        </Fragment>
    );
}
