import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';
import {Fragment,useEffect,useCallback} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";
import { useDispatch, useSelect } from '@wordpress/data';
import Inspector from './inspector';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import generateDynamicStyle from "./style";
const ALLOWED_BLOCKS = [ 'wpmozo/image-stack-child' ];

export default function Edit(props) {

	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,
		isSelected = props.isSelected;

	attributes.ID = clientId;

	const blockProps = useBlockProps({className:'wpmozo-bna-image-stack'});
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'wpmozo-image-stack-inner'
		},
		{
			allowedBlocks: ALLOWED_BLOCKS
		}
	);

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes}/>
			)}
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} >
				<div className={`wpmozo-image-stack-wrap`} id="wpmozo-baca216" data-speech-bubble="yes" data-animation-type="away" data-animation-duration="400" data-animation-name="shift-away" data-tooltip-id="elementor-baca216" data-trigger="hover">
					<div {...innerBlockProps} />
				</div>
			</div>
		</>
	);
}
