import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect } from '@wordpress/data';
import { Fragment, useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import { getIdByClientid, mergeWrapperProps } from '../../common/utils.js';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

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

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>{ generateDynamicStyle({ attributes, clientId }) }</style>

            <div { ...blockProps}>
                <div>
                    <div className="wpmozo-bna-list-wrapper">
                        <div className={"wpmozo-bna-list-layout wpmozo-bna-list-" + attributes.layout + " " + hideDivider}>
                            <InnerBlocks templateLock={false} template={ TEMPLATE }/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
