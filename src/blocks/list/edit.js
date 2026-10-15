import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment, useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import { getIdByClientid, mergeWrapperProps } from '../../common/utils.js';
import { createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {

    const { attributes, setAttributes, clientId } = props,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-list${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    const childBlocks = useSelect( (select) => {
        return select('core/block-editor').getBlocks(clientId);
    }, [clientId] );

    const childAttributes = childBlocks.map( block => block.attributes );
    const TEMPLATE = [
        [ 'wpmozo/list-item', { text: childAttributes.text} ] // Prefills a child block when parent is inserted.
    ];

    // Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.
    const hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "";
    const { insertBlocks } = useDispatch('core/block-editor');
    const innerBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId),
		[clientId]
	);
    const addChildBlock = () => {
        const newBlock = createBlock('wpmozo/list-item', { text: childAttributes.text});
        insertBlocks( newBlock, innerBlocks.length, clientId );
    };

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>{ generateDynamicStyle({ attributes, clientId, isEdit: true }) }</style>

            <div { ...blockProps}>
                <div>
                    <div className="wpmozo-bna-list-wrapper">
                        <div className={"wpmozo-bna-list-layout wpmozo-bna-list-" + attributes.layout + " " + hideDivider}>
                            <InnerBlocks 
                                templateLock={false}
                                template={ TEMPLATE }
                                //Custom appender button for adding new child blocks
                                renderAppender={() => (
                                    <button
                                        onClick={addChildBlock} // Custom handler to add a new child button
                                        type="button"
                                        className="wpmozo-bna-appender components-button block-editor-button-block-appender" // Default Gutenberg button style
                                        title={ __('Add List Item', 'wpmozo-blocks-and-addons') } // Tooltip text
                                    >
                                        {/* Plus (+) icon inside button */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                                            <path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
                                        </svg>
                                    </button>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
