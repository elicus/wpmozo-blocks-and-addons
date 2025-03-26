
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    toggleSwitchTypeClass = ' wpmozo_'+attributes.toggleSwitchType,
    titleWrapClass = ( 'toggle' === attributes.toggleSwitchType ) ? ' wpmozo_switch_trigger' : '';

    attributes.ID = ID;

	const blockProps = useBlockProps({
        className: 'wpmozo-bna-content-toggle-main',
    });

    const wraperTemplate = [
        [ 'wpmozo/content-wraper', {
            className: 'wpmozo-bna-content-toggle-one wpmozo-bna-content-toggle-active',
            lock: { 
                remove: true 
            }
        } ],
        [ 'wpmozo/content-wraper', {
            className: 'wpmozo-bna-content-toggle-two',
            lock: { 
                remove: true 
            }
        } ],
    ];

    jQuery('.wpmozo-bna-toggle-field').change(function(e){

        let selector = jQuery(this).closest('.wpmozo-bna-content-toggle-main');
        wpmozo_toggle_switch( jQuery(this), selector );

    });

    jQuery('.wpmozo-bna-toggle-title-wrap > :header').click(function(e){

        let wrap = jQuery(this).closest('.wpmozo-bna-toggle-title-wrap'),
        selector = jQuery(this).closest('.wpmozo-bna-content-toggle-main'),
        input = selector.find('.wpmozo-bna-toggle-field');

        if ( wrap.hasClass('wpmozo-bna-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery('.wpmozo_switch_trigger').click(function(e){

        let selector = jQuery(this).closest('.wpmozo-bna-content-toggle-main'),
        input = selector.find('.wpmozo-bna-toggle-field');

        if ( jQuery(this).hasClass('wpmozo-bna-toggle-title-one') ) {
            input.prop('checked', false);
        }else{
            input.prop('checked', true);
        }

        wpmozo_toggle_switch( input, selector );

    });

    jQuery(document).ready(function ($) {
        jQuery('.wpmozo-bna-toggle-field').each(function( keym, el ){

            let selector = jQuery(this).closest('.wpmozo-bna-content-toggle-main');
            wpmozo_toggle_switch( jQuery(this), selector );

        });
    });

    function wpmozo_toggle_switch( input, main ){

        if( input.is(':checked') ){
            main.find('.wpmozo-bna-content-toggle-one').removeClass('wpmozo-bna-content-toggle-active');
            main.find('.wpmozo-bna-content-toggle-two').addClass('wpmozo-bna-content-toggle-active');
        }else{
            main.find('.wpmozo-bna-content-toggle-one').addClass('wpmozo-bna-content-toggle-active');
            main.find('.wpmozo-bna-content-toggle-two').removeClass('wpmozo-bna-content-toggle-active');
        }

    }

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
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
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
                        template={ wraperTemplate }
                        allowedBlocks={false}
                    />
                </div>    
            </div>
        </Fragment>
    );

};

export default Edit;