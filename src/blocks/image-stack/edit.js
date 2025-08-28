import { useInnerBlocksProps } from '@wordpress/block-editor';
import {useBlockProps} from "@wordpress/block-editor";
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";
const ALLOWED_BLOCKS = [ 'wpmozo/image-stack-child' ];

export default function Edit(props) {

	const { attributes, setAttributes, isSelected, clientId } = props;

	const blockProps = useBlockProps({ className: 'wpmozo-bna-image-stack' });

	attributes.ID = clientId;

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS
	});

	return (
		<>
			{ isSelected && ( <Inspector attributes={attributes} setAttributes={setAttributes} /> ) }
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div className="wpmozo-bna-image-stack" id={`block-${clientId}`}  data-client-id={clientId}  >
				<div className={`wpmozo-image-stack-wrap`}
					data-speech-bubble="yes"
					data-animation-type="away"
					data-animation-duration="400"
					data-animation-name="shift-away"
					data-tooltip-id="elementor-baca216"
					data-trigger="hover"
				>
					{innerBlocksProps.children}
				</div>
			</div>
		</>
	);
}
