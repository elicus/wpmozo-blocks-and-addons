import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect, useDispatch  } from '@wordpress/data';
import { Fragment, useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import {getMainEl} from '../../common/utils.js';
import { createBlock } from '@wordpress/blocks';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {
   
   const { attributes, setAttributes, clientId } = props;

    // Ensure ID is set once (no render-time mutation).
    useEffect( () => {
        setAttributes( { ID: clientId } );
    }, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

    const childBlocks = useSelect((select) => {
        return select('core/block-editor').getBlocks(clientId);
    }, [clientId]);

    const childAttributes = childBlocks.map(block => block.attributes);

    const TEMPLATE = [
        [ 'wpmozo/scroll-stack-cards-item', { text: childAttributes.text} ] // Prefills a child block when parent is inserted
    ];

    const innerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId),
        [clientId]
    );

    const { insertBlocks } = useDispatch('core/block-editor');
    const addChildBlock = () => {
        const newBlock = createBlock('wpmozo/scroll-stack-cards-item', { text: childAttributes.text});
        insertBlocks( newBlock, innerBlocks.length, clientId );
    };

    useEffect(() => {
        jQuery( document ).ready( function($) {
            let main = getMainEl(clientId);
            if ( jQuery( main ).find('.pin-spacer').length ) {
                jQuery( main ).find('.pin-spacer').removeAttr("style");
            }
            if ( jQuery( main ).find('.wpmozo-bna-scroll-stack-cards-items').length ) {
                jQuery( main ).find('.wpmozo-bna-scroll-stack-cards-items').removeAttr("style");
            }
            if ( jQuery( main ).find('.wp-block-wpmozo-scroll-stack-cards-item').length ) {
                jQuery( main ).find('.wp-block-wpmozo-scroll-stack-cards-item').removeAttr("style");
            }
            setTimeout(() => {
                const event = new CustomEvent('WPMozoScrollStackCardsPropsChanged');
                window.dispatchEvent(event);
                const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
                if ( iframe?.contentWindow ) {
                    iframe.contentWindow.dispatchEvent( event );
                }
            }, 100);
         });
    }, [props]);

    let dataCollapsedWidth = ( 'horizontal' === attributes.layout ) 
        ? { 'data-collapsed_width': `${attributes.collapsedWidth}px` } 
        : {};

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes }) }
            </style>  
            <div {...useBlockProps()}>
                <div 
                    className={`wpmozo-bna-scroll-stack-cards-wrapper layout-${attributes.layout}`}
                    data-layout={attributes.layout}
                    data-animation_start_viewport_pos={`${attributes.animationStartViewportPos}%`}
                    {...dataCollapsedWidth}
                >
                    <div className="wpmozo-bna-scroll-stack-cards-items">
                        <InnerBlocks 
                            templateLock={false} 
                            template={ TEMPLATE }
                            renderAppender={() => (
                                <button
                                    onClick={addChildBlock} 
                                    type="button" 
                                    className="components-button block-editor-button-block-appender" 
                                    title={ __('Add Scroll Stack Cards Item', 'wpmozo-blocks-and-addons') }>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                                        <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
                                    </svg>
                                </button>
                            )}
                        />
                    </div>
                </div>
                <input className="wpmozo-bna-scroll-stack-cards-layout-input" type="hidden" value={attributes.layout} />
            </div>
        </Fragment>
    );
}
