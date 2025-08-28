import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import {WpmozoIconpicker} from "../../../common/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	const	oneToTwenty = [
			{
				label: __( '1', 'wpmozo-blocks-and-addons' ),
				value: '1'
			},
			{
				label: __( '2', 'wpmozo-blocks-and-addons' ),
				value: '2'
			},
			{
				label: __( '3', 'wpmozo-blocks-and-addons' ),
				value: '3'
			},
			{
				label: __( '4', 'wpmozo-blocks-and-addons' ),
				value: '4'
			},
			{
				label: __( '5', 'wpmozo-blocks-and-addons' ),
				value: '5'
			},
			{
				label: __( '6', 'wpmozo-blocks-and-addons' ),
				value: '6'
			},
			{
				label: __( '7', 'wpmozo-blocks-and-addons' ),
				value: '7'
			},
			{
				label: __( '8', 'wpmozo-blocks-and-addons' ),
				value: '8'
			},
			{
				label: __( '9', 'wpmozo-blocks-and-addons' ),
				value: '9'
			},
			{
				label: __( '10', 'wpmozo-blocks-and-addons' ),
				value: '10'
			},
			{
				label: __( '11', 'wpmozo-blocks-and-addons' ),
				value: '11'
			},
			{
				label: __( '12', 'wpmozo-blocks-and-addons' ),
				value: '12'
			},
			{
				label: __( '13', 'wpmozo-blocks-and-addons' ),
				value: '13'
			},
			{
				label: __( '14', 'wpmozo-blocks-and-addons' ),
				value: '14'
			},
			{
				label: __( '15', 'wpmozo-blocks-and-addons' ),
				value: '15'
			},
			{
				label: __( '16', 'wpmozo-blocks-and-addons' ),
				value: '16'
			},
			{
				label: __( '17', 'wpmozo-blocks-and-addons' ),
				value: '17'
			},
			{
				label: __( '18', 'wpmozo-blocks-and-addons' ),
				value: '18'
			},
			{
				label: __( '19', 'wpmozo-blocks-and-addons' ),
				value: '19'
			},
			{
				label: __( '20', 'wpmozo-blocks-and-addons' ),
				value: '20'
			}
		],
		arrowsPositions = [
			{
				label: __( 'Inside', 'wpmozo-blocks-and-addons' ),
				value: 'inside'
			},
			{
				label: __( 'Outside', 'wpmozo-blocks-and-addons' ),
				value: 'outside'
			},
			{
				label: __( 'Top Left', 'wpmozo-blocks-and-addons' ),
				value: 'top_left'
			},
			{
				label: __( 'Top Right', 'wpmozo-blocks-and-addons' ),
				value: 'top_right'
			},
			{
				label: __( 'Top Center', 'wpmozo-blocks-and-addons' ),
				value: 'top_center'
			},
			{
				label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ),
				value: 'bottom_left'
			},
			{
				label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ),
				value: 'bottom_right'
			},
			{
				label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ),
				value: 'bottom_center'
			},
		],
		controlDotStyles = [
			{
				label: __( 'Solid Dot', 'wpmozo-blocks-and-addons' ),
				value: 'solid_dot'
			},
			{
				label: __( 'Transparent Dot', 'wpmozo-blocks-and-addons' ),
				value: 'transparent_dot'
			},
			{
				label: __( 'Stretched Dot', 'wpmozo-blocks-and-addons' ),
				value: 'stretched_dot'
			},
			{
				label: __( 'Line', 'wpmozo-blocks-and-addons' ),
				value: 'line'
			},
			{
				label: __( 'Rounded Line', 'wpmozo-blocks-and-addons' ),
				value: 'rounded_line'
			},
			{
				label: __( 'Squared Dot', 'wpmozo-blocks-and-addons' ),
				value: 'square_dot'
			},
		],
		[ deviceType, setDeviceType ] = useState('tablet');

	return ( <>
		<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Number of Logo Per View', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.logoPerSlide }
				options={oneToTwenty}
				onChange={ ( newValue ) => setAttributes( { logoPerSlide: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.slidesPerGroup }
				options={oneToTwenty}
				onChange={ ( newValue ) => setAttributes( { slidesPerGroup: newValue } ) }
			/>
			<RangeControl
				label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.spaceBetweenSlides }
				onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<ToggleControl
				label={ __( 'Enable Loop', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.sliderLoop }
				onChange={ ( newValue ) => setAttributes( { sliderLoop: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Autoplay', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.autoplay }
				onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Enable Linear Transition', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.enableLinearTransition }
				onChange={ ( newValue ) => setAttributes( { enableLinearTransition: newValue } ) }
			/>
			{ attributes.autoplay &&
				<>
					<RangeControl
						label={ __( 'Autoplay Delay', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.autoplaySpeed }
						onChange={ ( newValue ) => setAttributes( { autoplaySpeed: newValue } ) }
						min={ 0 }
						step={ 100 }
						max={ 10000 }
					/>
					<ToggleControl
						label={ __( 'Pause On Hover', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.pauseOnHover }
						onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
					/>
				</>
			}
			<RangeControl
				label={ __( 'Transition Duration', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.transitionDuration }
				onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
				min={ 0 }
				step={ 100 }
				max={ 10000 }
			/>
			<ToggleControl
				label={ __( 'Show Arrows', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showArrow }
				onChange={ ( newValue ) => setAttributes( { showArrow: newValue } ) }
			/>
			{ attributes.showArrow &&
				<>
					<WpmozoIconpicker
						label={ __( 'Previous Arrow', 'wpmozo-blocks-and-addons' ) }
						iconPickerKey='previousSlideArrow'
						props={ props }
						value={ attributes.previousSlideArrow }
						onChange={ ( newValue ) => setAttributes( { previousSlideArrow: newValue } ) }
					/>
					<WpmozoIconpicker
						label={ __( 'Next Arrow', 'wpmozo-blocks-and-addons' ) }
						iconPickerKey='nextSlideArrow'
						props={ props }
						value={ attributes.nextSlideArrow }
						onChange={ ( newValue ) => setAttributes( { nextSlideArrow: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Arrows Only On Hover', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showArrowOnHover }
						onChange={ ( newValue ) => setAttributes( { showArrowOnHover: newValue } ) }
					/>
					<SelectControl
						label={ __( 'Arrows Position', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.arrowsPosition }
						options={arrowsPositions}
						onChange={ ( newValue ) => setAttributes( { arrowsPosition: newValue } ) }
					/>
				</>
			}
			<ToggleControl
				label={ __( 'Show Dots Pagination', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showControlDot }
				onChange={ ( newValue ) => setAttributes( { showControlDot: newValue } ) }
			/>
			{ attributes.showControlDot &&
				<>
					<SelectControl
						label={ __( 'Dots Pagination Style', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.controlDotStyle }
						options={controlDotStyles}
						onChange={ ( newValue ) => setAttributes( { controlDotStyle: newValue } ) }
					/>
					{
						'stretched_dot' != attributes.controlDotStyle &&
						'line' != attributes.controlDotStyle &&
						'rounded_line' != attributes.controlDotStyle &&
						<ToggleControl
							label={ __( 'Enable Dynamic Dots', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.enableDynamicDots }
							onChange={ ( newValue ) => setAttributes( { enableDynamicDots: newValue } ) }
						/>
					}
				</>
			}
		</PanelBody>
		<PanelBody title={ __( 'Slider Responsive', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<BaseControl
				className='wpmozo-color-combo-wrap'
			>
				<ButtonGroup>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'tablet' === deviceType ) ? true : false }
						onClick={ () => setDeviceType( 'tablet' ) }
					>
						{ __( 'Tablet', 'wpmozo-blocks-and-addons' ) }
					</Button>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'mobile' === deviceType ) ? true : false }
						onClick={ () => setDeviceType( 'mobile' ) }
					>
						{ __( 'Mobile', 'wpmozo-blocks-and-addons' ) }
					</Button>
				</ButtonGroup>
				{ 'tablet' === deviceType &&
					<>
						<SelectControl
							label={ __( 'Number of Logo Per View', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.tabletLogoPerSlide }
							options={oneToTwenty}
							onChange={ ( newValue ) => setAttributes( { tabletLogoPerSlide: newValue } ) }
						/>
						<SelectControl
							label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.tabletSlidesPerGroup }
							options={oneToTwenty}
							onChange={ ( newValue ) => setAttributes( { tabletSlidesPerGroup: newValue } ) }
						/>
						<RangeControl
							label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.tabletSpaceBetweenSlides }
							onChange={ ( newValue ) => setAttributes( { tabletSpaceBetweenSlides: newValue } ) }
							min={ 0 }
							step={ 1 }
							max={ 100 }
						/>
					</>
				}
				{ 'mobile' === deviceType &&
					<>
						<SelectControl
							label={ __( 'Number of Logo Per View', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.mobileLogoPerSlide }
							options={oneToTwenty}
							onChange={ ( newValue ) => setAttributes( { mobileLogoPerSlide: newValue } ) }
						/>
						<SelectControl
							label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.mobileSlidesPerGroup }
							options={oneToTwenty}
							onChange={ ( newValue ) => setAttributes( { mobileSlidesPerGroup: newValue } ) }
						/>
						<RangeControl
							label={ __( 'Space between Slides', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.mobileSpaceBetweenSlides }
							onChange={ ( newValue ) => setAttributes( { mobileSpaceBetweenSlides: newValue } ) }
							min={ 0 }
							step={ 1 }
							max={ 100 }
						/>
					</>
				}
			</BaseControl>
		</PanelBody>
	</> );
};
