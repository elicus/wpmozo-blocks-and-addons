import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { useSelect, useDispatch  } from '@wordpress/data';
import { Fragment } from "@wordpress/element";
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

	attributes.ID = clientId;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>
				{ generateDynamicStyle({ attributes, clientId }) }
			</style>
			<div {...useBlockProps({ className: `wpmozo-advanced-button` })}>
				<InnerBlocks
					templateLock={false}
					template={ TEMPLATE }
					renderAppender={() => (
						<button
							onClick={addChildBlock}
							type="button"
							className="components-button block-editor-button-block-appender"
							title={ __('Add Button Item', 'wpmozo-blocks-and-addons') }>
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
