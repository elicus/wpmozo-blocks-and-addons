// inspector.js
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography,
	MozoStates,
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
			<MozoStates
				value={hoverState}
				title={ __( 'Global Text Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "headingHover" : "heading" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Global Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Global Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Global Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Global Background', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Global Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "headingHover" : "heading" }
					/>
				) }
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
			<MozoStates
				value={hoverState}
				title={ __( 'Pre Text Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "preTextHover" : "preText" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Pre Text Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Pre Text Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Pre Text Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Pre Text Background', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Pre Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { preTextAlignment: newValue } ) }
					value={ attributes.preTextAlignment }
				/>
			) }
			<MozoStates
				value={hoverState}
				title={ __( 'Pre Text Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "preTextHover" : "preText" }
					/>
				) }
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
			<MozoStates
				value={hoverState}
				title={ __( 'Main Text Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "mainTextHover" : "mainText" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Main Text Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Main Text Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Main Text Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Main Text Background', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Main Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { mainTextAlignment: newValue } ) }
					value={ attributes.mainTextAlignment }
				/>
			) }
			<MozoStates
				value={hoverState}
				title={ __( 'Main Text Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "mainTextHover" : "mainText" }
					/>
				) }
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
			<MozoStates
				value={hoverState}
				title={ __( 'Post Text Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "postTextHover" : "postText" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Post Text Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Post Text Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Post Text Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Post Text Background', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			{ attributes.displayInStack && (
				<WpmozoAlignment
					label={ __( 'Post Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { postTextAlignment: newValue } ) }
					value={ attributes.postTextAlignment }
				/>
			) }
			<MozoStates
				value={hoverState}
				title={ __( 'Post Text Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "postTextHover" : "postText" }
					/>
				) }
			/>
			<WpmozoDimensions props={props}
				DimensionKey='postTextDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};

