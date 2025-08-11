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

	attributes.ID = clientId;
	
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'wpmozo-image-stack-inner' },
		{ allowedBlocks: ALLOWED_BLOCKS }
	);

	return (
		<>
			{ isSelected && ( <Inspector attributes={attributes} setAttributes={setAttributes} /> ) }
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div { ...useBlockProps( { className: 'wpmozo-bna-image-stack ' + attributes.className } ) } >
				<div className={`wpmozo-image-stack-wrap`}
					data-speech-bubble="yes"
					data-animation-type="away"
					data-animation-duration="400"
					data-animation-name="shift-away"
					data-tooltip-id="elementor-baca216"
					data-trigger="hover"
				>
					<div {...innerBlockProps} />
				</div>
			</div>
		</>
	);
}
