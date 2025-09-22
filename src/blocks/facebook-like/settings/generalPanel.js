import {__} from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	Notice
} from '@wordpress/components';
import {useState} from '@wordpress/element';


export const GeneralPanel = ({attributes, setAttributes}) => {
	const {url, layout, size, share} = attributes;
	const [error, setError] = useState('');
	const props = {attributes, setAttributes, preAttributes: {}};

	const layoutOptions = [
		{value: 'standard', label: __('Standard', 'wpmozo-blocks-and-addons')},
		{value: 'box_count', label: __('Box Count', 'wpmozo-blocks-and-addons')},
		{value: 'button_count', label: __('Button Count', 'wpmozo-blocks-and-addons')},
		{value: 'button', label: __('Button', 'wpmozo-blocks-and-addons')},
	];
	const sizeOptions = [
		{value: 'small', label: __('Small', 'wpmozo-blocks-and-addons')},
		{value: 'large', label: __('Large', 'wpmozo-blocks-and-addons')}
	];

	const onChangeUrl = (newUrl) => {
		setAttributes({url: newUrl});
		// Show error only if value is not empty and not valid
		if (newUrl && !isValidFacebookUrl(newUrl)) {
			setError(__(
				'Please enter a valid Facebook page or content URL.',
				'wpmozo-blocks-and-addons'
			));
		} else {
			setError('');
		}
	};

	return (<>
		<PanelBody title={__('Configuration', 'wpmozo-blocks-and-addons')} initialOpen={true}>
			<TextControl
				label={__('URL to Like', 'wpmozo-blocks-and-addons')}
				value={url}
				onChange={onChangeUrl}
				placeholder="https://www.facebook.com/facebook"
				help={__(
					'Paste a Facebook page, post, or any public Facebook URL.',
					'wpmozo-blocks-and-addons'
				)}
			/>
			<SelectControl
				label={__('Layout', 'wpmozo-blocks-and-addons')}
				value={layout}
				options={layoutOptions}
				onChange={(layout) => setAttributes({layout})}
			/>
			<SelectControl
				label={__('Button Size', 'wpmozo-blocks-and-addons')}
				value={size}
				options={sizeOptions}
				onChange={(size) => setAttributes({size})}
			/>
			<ToggleControl
				label={__('Include Share Button', 'wpmozo-blocks-and-addons')}
				checked={!!share}
				onChange={() => setAttributes({share: !share})}
			/>
			{error && (
				<Notice status="error" isDismissible={false}>
					{error}
				</Notice>
			)}
		</PanelBody>
	</>);
};
