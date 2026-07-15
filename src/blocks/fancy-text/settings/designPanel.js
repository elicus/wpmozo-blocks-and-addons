import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	BaseControl,
} from "@wordpress/components";
import {
	WpmozoDimensions,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';
import { useState } from '@wordpress/element';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	let backImage = ( attributes.fancyTextBackgroundImg ) ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;
	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		<PanelBody title={__('Fancy Text Style', 'wpmozo-blocks-and-addons')}
				className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}
		>
			{ 'gradient' === attributes.textStyle && (
				<WpmozoColorPicker props={props}
					ColorKey="fancyText"
					ColorTypes={ [ {
						key: 'Background',
						label: __( 'Background', 'wpmozo-blocks-and-addons' ),
						onlyGradient: true,
					} ] }
				/>
			) }
			{ 'clipping' === attributes.textStyle && ( <>
				<BaseControl label={ __( 'Background Image', 'wpmozo-blocks-and-addons' ) }>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							accept="image/*"
							value={backImage}
							onSelect={ ( media ) => { setAttributes( { fancyTextBackgroundImg: media.url } ) } }
							render={ ( { open } ) => {
								return ( <>
									<button className="wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item">
										<div className="wpmozo-background-img-selction-overlay"
											onClick={ ( event ) => {
												event.stopPropagation();
												open();
											} }
										>{ __( 'Select Image', 'wpmozo-blocks-and-addons' ) }</div>
										<img src={backImage} />
									</button>
								</> )
							} }
						>
						</MediaUpload>
					</MediaUploadCheck>
				</BaseControl>
				<SelectControl
					label={ __( 'Background Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.textBgSize }
					options={ [
						{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
						{ value: 'contain', label: __( 'Contain', 'wpmozo-blocks-and-addons' ) },
						{ value: 'auto', label: __( 'Auto', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { textBgSize: newValue } ) }
				/>
				<SelectControl
					label={ __( 'Background Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.textBgPosition }
					options={ [
						{ value: 'top left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'top center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'top right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center left', label: __( 'Center Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center',  label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center right', label: __( 'Center Right', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { textBgPosition: newValue } ) }
				/>
				<SelectControl
					label={ __( 'Background Repeat', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.textBgRepeat }
					options={ [
						{ value: 'no-repeat', label: __( 'No Repeat', 'wpmozo-blocks-and-addons' ) },
						{ value: 'repeat', label: __( 'Repeat', 'wpmozo-blocks-and-addons' ) },
						{ value: 'repeat-x', label: __( 'Repeat X (horizontal)', 'wpmozo-blocks-and-addons' ) },
						{ value: 'repeat-y', label: __( 'Repeat Y (vertical)', 'wpmozo-blocks-and-addons' ) },
						{ value: 'space', label: __( 'Space', 'wpmozo-blocks-and-addons' ) },
						{ value: 'round', label: __( 'Round', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { textBgRepeat: newValue } ) }
				/>
				<SelectControl
					label={ __( 'Background Overlay', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.textBgOverlay }
					options={ [
						{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
						{ value: 'color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { textBgOverlay: newValue } ) }
				/>
				{ 'none' !== attributes.textBgOverlay && ( <>
					<WpmozoColorPicker props={props}
						ColorKey="textBgOverlay"
						ColorTypes={ [ {
							key: 'Color',
							label: __( 'Clip Background Color', 'wpmozo-blocks-and-addons' ),
							withGradient: true,
						} ] }
					/>
					<WpmozoDimensions props={props}
						DimensionKey='textBgDimensions'
						DimensionsTypes={ { padding: true } }
					/>
				</> ) }
			</> ) }
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
				value={attributes.textAlignment}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Fancy Text Typography', 'wpmozo-blocks-and-addons' ) }
			className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}
		>
			<WpmozoTypography props={props}
				TypographyKey="text"
				TypoTypes={ {
					'FontSize': true,
					'FontAppearance': true,
					'LetterSpacing': true,
					'LetterCase': true,
					'LineHeight': true,
				} }
			/>
		</PanelBody>
	</> );
};
