import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect, useDispatch  } from '@wordpress/data';
import { Fragment,useEffect } from "@wordpress/element";
import generateDynamicStyle from './style';
import {getIdByClientid} from '../../common/utils.js';
import { createBlock } from '@wordpress/blocks';
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
		blockProps = useBlockProps({ className: 'wpmozo-advanced-button' });

	const childBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId);
	}, [clientId]);

	const childAttributes = childBlocks.map(block => block.attributes);

	const TEMPLATE = [
		[ 'wpmozo/advanced-button-child', { text: childAttributes.text} ] // Prefills a child block when parent is inserted
	];

	const innerBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId),
		[clientId]
	);

	const { insertBlocks } = useDispatch('core/block-editor');
	const addChildBlock = () => {
		const newBlock = createBlock('wpmozo/advanced-button-child', { text: childAttributes.text});
		insertBlocks( newBlock, innerBlocks.length, clientId );
	};

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>
				{ generateDynamicStyle({ attributes }) }
			</style>
			{/* Parent wrapper for the Advanced Button block */}
			<div {...useBlockProps({ className: `wpmozo-advanced-button` })}>

				{/* InnerBlocks allows adding child button blocks inside this parent */}
				<InnerBlocks
					templateLock={false} // Child blocks can be added/removed freely
					template={ TEMPLATE } // Default block template (predefined structure)

					//Custom appender button for adding new child blocks
					renderAppender={() => (
						<button
							onClick={addChildBlock} // Custom handler to add a new child button
							type="button"
							className="components-button block-editor-button-block-appender" // Default Gutenberg button style
							title={ __('Add Button Item', 'wpmozo-blocks-and-addons') } // Tooltip text
						>
							{/* Plus (+) icon inside button */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
								<path d="M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"></path>
							</svg>
						</button>
					)}
				/>
			</div>

		</Fragment>
	);
}
