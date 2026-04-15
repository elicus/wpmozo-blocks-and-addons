import { __ } from '@wordpress/i18n';
import {MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";

import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
	TextareaControl,
    SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import {
	WpmozoColorPicker, WpmozoIconpicker, WpmozoMediaUploader,
	WpmozoRangeSize
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	let splitImg = ( attributes.splitImg ) ? attributes.splitImg : WPMozoEditorObj.placeholderImg;

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<BaseControl label={ __( 'Split Image', 'wpmozo-blocks-and-addons' ) }>
				<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["image"]}
					accept="image/*"
					value={splitImg}
					onSelect={ ( media ) => { setAttributes( { splitImg: media.url } ) } }
					render={ ( { open } ) => {
						return ( <>
							<button className="wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item">
								<div className="wpmozo-background-img-selction-overlay"
									 onClick={ ( event ) => {
										 event.stopPropagation();
										 open();
									 } }
								>{ __( 'Select Image', 'wpmozo-blocks-and-addons' ) }</div>
								<img src={splitImg} />
							</button>
						</> )
					} }
				>
				</MediaUpload>
			</MediaUploadCheck>
			</BaseControl>
			<RangeControl
				label={__('Rows', 'wpmozo-blocks-and-addons')}
				value={attributes.rows}
				onChange={(newValue) => setAttributes({rows: newValue})}
				min={1}
				step={1}
				max={20}
			/>
			<RangeControl
				label={__('Columns', 'wpmozo-blocks-and-addons')}
				value={attributes.columns}
				onChange={(newValue) => setAttributes({columns: newValue})}
				min={1}
				step={1}
				max={20}
			/>
			<RangeControl
				label={__('Gap (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.gap}
				onChange={(newValue) => setAttributes({gap: newValue})}
				min={0}
				step={1}
				max={100}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Link', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<TextControl
				label={ __( 'Link URL', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.blockLink || '' }
				onChange={ ( value ) => setAttributes( { blockLink: value } ) }
			/>
			<ToggleGroupControl
				label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.blockLinkTarget }
				onChange={ ( newValue ) => setAttributes( { blockLinkTarget: newValue } ) }
			>
				<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
			</ToggleGroupControl>
		</PanelBody>
	</> );
};
