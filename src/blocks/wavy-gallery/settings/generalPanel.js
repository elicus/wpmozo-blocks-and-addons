import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	Notice,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import {
	WpmozoIconpicker,
	WpmozoMediaUploader
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return (
		<>
			<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
				<Notice status="warning" isDismissible={false}>
					<p>{__('Wavy Gallery does not work in the Visual Builder. Please check the frontend to see the effect correctly.','wpmozo-blocks-and-addons')}</p>
				</Notice>
				<hr/>
				<RangeControl
					label={__('Images Width', 'wpmozo-blocks-and-addons')}
					value={attributes.imagesWidth}
					onChange={(newValue) => setAttributes({imagesWidth: newValue})}
					min={10} step={1} max={300}
				/>
				<RangeControl
					label={__('Images Height', 'wpmozo-blocks-and-addons')}
					value={attributes.imagesHeight}
					onChange={(newValue) => setAttributes({imagesHeight: newValue})}
					min={10} step={1} max={700}
				/>
				<RangeControl
					label={__('Images Gap', 'wpmozo-blocks-and-addons')}
					value={attributes.imagesGap}
					onChange={(newValue) => setAttributes({imagesGap: newValue})}
					min={0} step={1} max={150}
				/>
				<ToggleControl
					label={__('Show Title on Overlay', 'wpmozo-blocks-and-addons')}
					checked={attributes.showOverlayTitle}
					onChange={(newValue) => setAttributes({showOverlayTitle: newValue})}
				/>
			</PanelBody>
		</>
	);
};
