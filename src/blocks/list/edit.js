import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect } from '@wordpress/data';
import { Fragment } from "@wordpress/element";
import generateDynamicStyle from './style';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    blockProps = useBlockProps({ className: 'wpmozo-bna-list' });

    const childBlocks = useSelect((select) => {
        return select('core/block-editor').getBlocks(clientId);
    }, [clientId]);

    const childAttributes = childBlocks.map(block => block.attributes);

    const TEMPLATE = [
        [ 'wpmozo/list-item', { text: childAttributes.text} ] // Prefills a child block when parent is inserted
    ];

    attributes.ID = ID;
    const hideDivider = true === attributes.lastDivider ? "wpmozo-bna-hide-last-divider" : "";

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>  
            <div {...useBlockProps()}>
                <div>
                    <div className="wpmozo-bna-list-wrapper">
                        <div className={"wpmozo-bna-list-layout wpmozo-bna-list-" + attributes.layout + " " + hideDivider}>
                            <InnerBlocks templateLock={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
