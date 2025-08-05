// inspector.js
import {
	WpmozoMediaUploader,
	WpmozoIconpicker,
} from '../../common/components';
import {__} from "@wordpress/i18n";
import {InspectorControls,HeightControl} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl
} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes },
		stackTypeSelection = [
			{
				label: __('Image', 'wpmozo-blocks-and-addons'),
				value: 'image'
			},
			{
				label: __('Icon', 'wpmozo-blocks-and-addons'),
				value: 'icon'
			}
		],
		iconShape = [
			{
				label: __('None', 'wpmozo-blocks-and-addons'),
				value: 'none'
			},
			{
				label: __('Square', 'wpmozo-blocks-and-addons'),
				value: 'square'
			},
			{
				label: __('Circle', 'wpmozo-blocks-and-addons'),
				value: 'circle'
			}
		];

	const {
		image
	} = attributes;

	// Safely handle undefined image and its url to prevent errors.
	const imageUrl = image && image.url ? image.url : '';

    return (
        <>
			<InspectorControls key="controls">
				<PanelBody title={__('Stack item settings', 'wpmozo-blocks-and-addons')} initialOpen={true}>
					<SelectControl
						label={__('Stack Type', 'wpmozo-blocks-and-addons')}
						value={attributes.stackType}
						options={stackTypeSelection}
						onChange={(newValue) => setAttributes({stackType: newValue})}
					/>
					{'icon' === attributes.stackType && (
						<>
							<WpmozoIconpicker
								label={__('Icon', 'wpmozo-blocks-and-addons')}
								iconPickerKey='stackIcon'
								props={props}
								value={attributes.stackIcon}
								onChange={(newValue) => setAttributes({stackIcon: newValue})}
							/>
						</>
					)}
					{'image' === attributes.stackType && (
						<>
							<WpmozoMediaUploader
								attrKye="image"
								props={props}
								imageSrc={imageUrl}
								onSelect={ ( media ) => setAttributes( { image: media } ) }
							/>
						</>
					)}
					<TextControl
						label={__('Tooltip Text', 'wpmozo-blocks-and-addons')}
						value={attributes.tooltipText}
						onChange={(newValue) => setAttributes({tooltipText: newValue})}
						help={ __(
							"Note: Above tooltip setting will only take effect once you are on the live page, and not while you're editing.",
							'wpmozo-blocks-and-addons'
						) }
					/>
				</PanelBody>
			</InspectorControls>
        </>
    );
};

export default Inspector;
