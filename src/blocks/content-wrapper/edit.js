import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

export default function Edit(props) {

    const { clientId } = props;
    return (
        <div {...useBlockProps({ className: 'wpmozo-content-wrapper' })}>
            <InnerBlocks
                renderAppender={
                    select( "core/block-editor" ).getBlockOrder(clientId).length > 0 ? undefined : InnerBlocks.ButtonBlockAppender
                }
            />
        </div>
    );
}
