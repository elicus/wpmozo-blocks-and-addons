import {__} from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

export const GeneralPanel = ({attributes, setAttributes}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	return (<>
		<PanelBody title={__('Configuration', 'wpmozo-blocks-and-addons')} initialOpen={true}>
			<TextControl
				label={__('Button Text', 'wpmozo-blocks-and-addons')}
				value={attributes.buttonText ?? ""}
				onChange={(newValue) => setAttributes({buttonText: newValue})}
				placeholder={__('WPMozo Title', 'wpmozo-blocks-and-addons')}
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<TextControl
				label={__('Button Secondary Text', 'wpmozo-blocks-and-addons')}
				value={attributes.buttonSecondaryText ?? ""}
				onChange={(newValue) => setAttributes({buttonSecondaryText: newValue})}
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<TextControl
				label={__('Button Url', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({buttonUrl: newValue})}
				value={attributes.buttonUrl}
			/>
			<ToggleGroupControl
				label={__('Link Target', 'wpmozo-blocks-and-addons')}
				value={attributes.buttonLinkTarget}
				onChange={(newValue) => setAttributes({buttonLinkTarget: newValue})}
			>
				<ToggleGroupControlOptionIcon value="external" icon="external"
											  label={__('New Window', 'wpmozo-blocks-and-addons')}/>
				<ToggleGroupControlOptionIcon value="same" icon="admin-links"
											  label={__('Same Window', 'wpmozo-blocks-and-addons')}/>
			</ToggleGroupControl>
		</PanelBody>
	</>);
};
