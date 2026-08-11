import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	MozoStates
} from '../../../common/components/index';

import { useState } from "@wordpress/element";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
					
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( 'Layout', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<SelectControl
				label={ __( 'Select Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'lily', label: __( 'Lily', 'wpmozo-blocks-and-addons' ) },
					{ value: 'sadie', label: __( 'Sadie', 'wpmozo-blocks-and-addons' ) },
					{ value: 'roxy', label: __( 'Roxy', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bubba', label: __( 'Bubba', 'wpmozo-blocks-and-addons' ) },
					{ value: 'romeo', label: __( 'Romeo', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layla', label: __( 'Layla', 'wpmozo-blocks-and-addons' ) },
					{ value: 'oscar', label: __( 'Oscar', 'wpmozo-blocks-and-addons' ) },
					{ value: 'marley', label: __( 'Marley', 'wpmozo-blocks-and-addons' ) },
					{ value: 'ruby', label: __( 'Ruby', 'wpmozo-blocks-and-addons' ) },
					{ value: 'milo', label: __( 'Milo', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Layout Settings', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			{ 'romeo' !== attributes.layout && 'marley' !== attributes.layout &&
				<MozoStates
					value={hoverState}
					title={ __( 'Overlay Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "overlayHover" : "overlay" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Overlay Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Overlay Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					) }
				/>
			}
			{ 'lily' !== attributes.layout && 'sadie' !== attributes.layout &&
				<WpmozoBorder props={props}
					BorderKey="layout"
					BorderTypes={ { border: true } }
				/>
			}
		</PanelBody>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<BaseControl label={ __( 'Title Heading Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, key ) => (
						<Button key={ 'title-level-' + key }
							isPressed={ ( item.value === attributes.titleLevel ) ? true : false }
							onClick={ ( newValue ) => setAttributes( { titleLevel: item.value } ) }
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<MozoStates
				value={hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "titleHover" : "titleNormal" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "titleHover" : "titleNormal" }
					/>
				) }
			/>
			{ 'milo' !== attributes.layout &&
				<WpmozoAlignment
					label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleAlign }
					onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				/>
			}
		</PanelBody>
		<PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "contentHover" : "content" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Content Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			{ 'milo' !== attributes.layout &&
				<WpmozoAlignment
					label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.contentAlign }
					onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
				/>
			}
			<MozoStates
				value={hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "contentHover" : "content" }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
