// inspector.js
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import {
	WpmozoColorCombo,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';
import {useState} from "@wordpress/element"

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Global Text Settings. */}
		<PanelBody title={ __( 'Global Text Settings', 'wpmozo-blocks-and-addons' ) }
			className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}
		>
			<WpmozoColorPicker
				ColorKey="heading"
				props={props}
				ColorTypes={[
					{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __('Background', 'wpmozo-blocks-and-addons') },
				] }
			/>
			<WpmozoAlignment
				label={ __( 'Heading Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { headingAlignment: newValue } ) }
				value={ attributes.headingAlignment }
			/>
			<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) } >
				<ButtonGroup>
					{ headingLevelsList.map( (item, key) => (
						<Button key={item.value}
							isPressed={ ( item.value === attributes.headingLevel ) ? true : false }
							onClick={(newValue) => setAttributes({headingLevel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
		</PanelBody>
		{/* Pre Text Settings. */}
		<PanelBody title={ __( 'Pre Text Settings', 'wpmozo-blocks-and-addons' ) }
			className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}
		>
			<WpmozoColorCombo
				label={ __( 'Pre Text Color', 'wpmozo-blocks-and-addons' ) }
				normal={ {
					ColorKey: "preText",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
				hover={ {
					ColorKey: "preTextHover",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Pre Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { preTextAlignment: newValue } ) }
					value={ attributes.preTextAlignment }
				/>
			) }
			<WpmozoTypography props={props}
				TypographyKey="preText"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='preTextDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		{/* Main Text Settings. */}
		<PanelBody title={ __( 'Main Text Settings', 'wpmozo-blocks-and-addons' ) }
			className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}
		>
			<WpmozoColorCombo
				label={ __( 'Main Text Color', 'wpmozo-blocks-and-addons' ) }
				normal={ {
					ColorKey: "mainText",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
				hover={ {
					ColorKey: "mainTextHover",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Main Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { mainTextAlignment: newValue } ) }
					value={ attributes.mainTextAlignment }
				/>
			) }
			<WpmozoTypography props={props}
				TypographyKey="mainText"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='mainTextDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		{/* Post Text Settings. */}
		<PanelBody title={ __( 'Post Text Settings', 'wpmozo-blocks-and-addons' ) }
			className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={() => handleToggle('panel4')}
		>
			<WpmozoColorCombo
				label={ __( 'Post Text Color', 'wpmozo-blocks-and-addons' ) }
				normal={ {
					ColorKey: "postText",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
				hover={{
					ColorKey: "postTextHover",
					props: props,
					ColorTypes: [
						{ key: 'Color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					]
				} }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Post Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { postTextAlignment: newValue } ) }
					value={ attributes.postTextAlignment }
				/>
			) }
			<WpmozoTypography props={props}
				TypographyKey="postText"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='postTextDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};
