import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {

	const highlighterShape = [
			{
				label: __('Zig Zag', 'wpmozo-blocks-and-addons'),
				value: 'zig_zag'
			},
			{
				label: __('Underline', 'wpmozo-blocks-and-addons'),
				value: 'underline'
			},
			{
				label: __('Double Underline', 'wpmozo-blocks-and-addons'),
				value: 'double_underline'
			},
			{
				label: __('Circle', 'wpmozo-blocks-and-addons'),
				value: 'circle'
			},
			{
				label: __('Diagonal', 'wpmozo-blocks-and-addons'),
				value: 'diagonal'
			},
			{
				label: __('Cross', 'wpmozo-blocks-and-addons'),
				value: 'cross'
			},
			{
				label: __('Curly Line', 'wpmozo-blocks-and-addons'),
				value: 'curly_line'
			}
		];

	const props = { attributes, setAttributes, preAttributes: {} };

	return (
		<>
			{/* Configuration. */}
			<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
				<TextControl
					label={__('Pre', 'wpmozo-blocks-and-addons')}
					value={attributes.pre}
					onChange={(newValue) => setAttributes({pre: newValue})}
				/>
				<TextControl
					label={__('Main', 'wpmozo-blocks-and-addons')}
					value={attributes.main}
					onChange={(newValue) => setAttributes({main: newValue})}
				/>
				<TextControl
					label={__('Post', 'wpmozo-blocks-and-addons')}
					value={attributes.post}
					onChange={(newValue) => setAttributes({post: newValue})}
				/>
				<SelectControl
					label={__('Text Highlighter Shape', 'wpmozo-blocks-and-addons')}
					value={attributes.textHighlighterShape}
					options={highlighterShape}
					onChange={(newValue) => setAttributes({textHighlighterShape: newValue})}
				/>
				<ToggleControl
					label={__('Display in Stack', 'wpmozo-blocks-and-addons')}
					checked={attributes.displayInStack}
					onChange={(newValue) => setAttributes({displayInStack: newValue})}
				/>
				<ToggleControl
					label={__('Wrap in Heading Tag', 'wpmozo-blocks-and-addons')}
					checked={attributes.wrapInHeadingTag}
					onChange={(newValue) => setAttributes({wrapInHeadingTag: newValue})}
				/>
			</PanelBody>
		</>
	);
};
