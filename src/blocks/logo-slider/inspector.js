
import {
    WpmozoDimensions, 
    WpmozoColorPicker, 
    WpmozoTypography, 
    WpmozoIconpicker 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    [ deviceType, setDeviceType ] = useState('tablet');

    props = Object.assign({}, props, {preAttributes: {}});

    const oneToTwenty = [
        {
            label: __( '1', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '1'
        },
        {
            label: __( '2', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '2'
        },
        {
            label: __( '3', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '3'
        },
        {
            label: __( '4', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '4'
        },
        {
            label: __( '5', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '5'
        },
        {
            label: __( '6', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '6'
        },
        {
            label: __( '7', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '7'
        },
        {
            label: __( '8', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '8'
        },
        {
            label: __( '9', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '9'
        },
        {
            label: __( '10', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '10'
        },
        {
            label: __( '11', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '11'
        },
        {
            label: __( '12', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '12'
        },
        {
            label: __( '13', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '13'
        },
        {
            label: __( '14', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '14'
        },
        {
            label: __( '15', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '15'
        },
        {
            label: __( '16', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '16'
        },
        {
            label: __( '17', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '17'
        },
        {
            label: __( '18', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '18'
        },
        {
            label: __( '19', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '19'
        },
        {
            label: __( '20', 'wpmozo-addons-lite-for-gutenberg' ),
            value: '20'
        }
    ];
    const arrowsPositions = [
        {
            label: __( 'Inside', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'inside'
        },
        {
            label: __( 'Outside', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'outside'
        },
        {
            label: __( 'Top Left', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'top_left'
        },
        {
            label: __( 'Top Right', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'top_right'
        },
        {
            label: __( 'Top Center', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'top_center'
        },
        {
            label: __( 'Bottom Left', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'bottom_left'
        },
        {
            label: __( 'Bottom Right', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'bottom_right'
        },
        {
            label: __( 'Bottom Center', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'bottom_center'
        },
    ];
    const controlDotStyles = [
        {
            label: __( 'Solid Dot', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'solid_dot'
        },
        {
            label: __( 'Transparent Dot', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'transparent_dot'
        },
        {
            label: __( 'Stretched Dot', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'stretched_dot'
        },
        {
            label: __( 'Line', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'line'
        },
        {
            label: __( 'Rounded Line', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'rounded_line'
        },
        {
            label: __( 'Squared Dot', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'square_dot'
        },
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Slider', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.logoPerSlide }
                        options={oneToTwenty}
                        onChange={ ( newValue ) => setAttributes( { logoPerSlide: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.slidesPerGroup }
                        options={oneToTwenty}
                        onChange={ ( newValue ) => setAttributes( { slidesPerGroup: newValue } ) }
                    />
                    <RangeControl
                        label={ __( 'Space between Slides', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.spaceBetweenSlides }
                        onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    <ToggleControl
                        label={ __( 'Enable Loop', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.sliderLoop }
                        onChange={ ( newValue ) => setAttributes( { sliderLoop: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Autoplay', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.autoplay }
                        onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Enable Linear Transition', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.enableLinearTransition }
                        onChange={ ( newValue ) => setAttributes( { enableLinearTransition: newValue } ) }
                    />
                    { attributes.autoplay &&
                        <TextControl
                            label={ __( 'Autoplay Delay', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.autoplaySpeed }
                            onChange={ ( newValue ) => setAttributes( { autoplaySpeed: newValue } ) }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Pause On Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.pauseOnHover }
                        onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Transition Duration', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.transitionDuration }
                        onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Show Arrows', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.showArrow }
                        onChange={ ( newValue ) => setAttributes( { showArrow: newValue } ) }
                    />
                    { attributes.showArrow && 
                        <>
                            <WpmozoIconpicker
                                label={ __( 'Previous Arrow', 'wpmozo-addons-lite-for-gutenberg' ) }
                                iconPickerKey='previousSlideArrow'
                                props={ props }
                                value={ attributes.previousSlideArrow }
                                onChange={ ( newValue ) => setAttributes( { previousSlideArrow: newValue } ) }
                            />
                            <WpmozoIconpicker
                                label={ __( 'Next Arrow', 'wpmozo-addons-lite-for-gutenberg' ) }
                                iconPickerKey='nextSlideArrow'
                                props={ props }
                                value={ attributes.nextSlideArrow }
                                onChange={ ( newValue ) => setAttributes( { nextSlideArrow: newValue } ) }
                            />
                            <ToggleControl
                                label={ __( 'Show Arrows Only On Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.showArrowOnHover }
                                onChange={ ( newValue ) => setAttributes( { showArrowOnHover: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Arrows Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.arrowsPosition }
                                options={arrowsPositions}
                                onChange={ ( newValue ) => setAttributes( { arrowsPosition: newValue } ) }
                            />
                        </>
                    }
                    <ToggleControl
                        label={ __( 'Show Dots Pagination', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.showControlDot }
                        onChange={ ( newValue ) => setAttributes( { showControlDot: newValue } ) }
                    />
                    { attributes.showControlDot && 
                        <>
                            <SelectControl
                                label={ __( 'Dots Pagination Style', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.controlDotStyle }
                                options={controlDotStyles}
                                onChange={ ( newValue ) => setAttributes( { controlDotStyle: newValue } ) }
                            />
                            { 
                                'stretched_dot' != attributes.controlDotStyle && 
                                'line' != attributes.controlDotStyle &&
                                'rounded_line' != attributes.controlDotStyle &&
                                <ToggleControl
                                    label={ __( 'Enable Dynamic Dots', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    checked={ attributes.enableDynamicDots }
                                    onChange={ ( newValue ) => setAttributes( { enableDynamicDots: newValue } ) }
                                />
                            }
                        </>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Slider Responsive', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <BaseControl
                        className='wpmozo-color-combo-wrap'
                    >    
                        <ButtonGroup>
                            <Button
                                className='wpmozo-color-combo-type'
                                isPressed={ ( 'tablet' === deviceType ) ? true : false }
                                onClick={ () => setDeviceType( 'tablet' ) }
                            >
                                { __( 'Tablet', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                            <Button 
                                className='wpmozo-color-combo-type'
                                isPressed={ ( 'mobile' === deviceType ) ? true : false }
                                onClick={ () => setDeviceType( 'mobile' ) }
                            >
                                { __( 'Mobile', 'wpmozo-addons-lite-for-gutenberg' ) }
                            </Button>
                        </ButtonGroup>
                        { 'tablet' === deviceType &&
                            <>
                                <SelectControl
                                    label={ __( 'Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.tabletLogoPerSlide }
                                    options={oneToTwenty}
                                    onChange={ ( newValue ) => setAttributes( { tabletLogoPerSlide: newValue } ) }
                                />
                                <SelectControl
                                    label={ __( 'Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.tabletSlidesPerGroup }
                                    options={oneToTwenty}
                                    onChange={ ( newValue ) => setAttributes( { tabletSlidesPerGroup: newValue } ) }
                                />
                                <RangeControl
                                    label={ __( 'Space between Slides', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                    label={ __( 'Number of Logo Per View', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.mobileLogoPerSlide }
                                    options={oneToTwenty}
                                    onChange={ ( newValue ) => setAttributes( { mobileLogoPerSlide: newValue } ) }
                                />
                                <SelectControl
                                    label={ __( 'Number of Slides Per Group', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    value={ attributes.mobileSlidesPerGroup }
                                    options={oneToTwenty}
                                    onChange={ ( newValue ) => setAttributes( { mobileSlidesPerGroup: newValue } ) }
                                />
                                <RangeControl
                                    label={ __( 'Space between Slides', 'wpmozo-addons-lite-for-gutenberg' ) }
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
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Container', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="container"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'background',
                                label: __( 'Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <WpmozoDimensions
                        DimensionKey='container'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Slider', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="slider"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'ArrowColor',
                                label: __( 'Arrow Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'ArrowBackground',
                                label: __( 'Arrow Background', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'ActiveDoteColor',
                                label: __( 'Active Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'InactiveDoteColor',
                                label: __( 'Inactive Dot Pagination Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="arrow"
                        label={ __( 'Arrow Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                        props={props}
                        TypoTypes={{
                            'FontSize': true
                        }}
                    />
                    <WpmozoDimensions
                        DimensionKey='arrow'
                        label={ __( 'Arrows Padding', 'wpmozo-addons-lite-for-gutenberg' ) }
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Logo', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <RangeControl
                        label={ __( 'Logo Width', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.logoWidth }
                        onChange={ ( newValue ) => setAttributes( { logoWidth: newValue } ) }
                        min={ 100 }
                        step={ 1 }
                        max={ 500 }
                    />
                    <RangeControl
                        label={ __( 'Logo Height', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.logoHeight }
                        onChange={ ( newValue ) => setAttributes( { logoHeight: newValue } ) }
                        min={ 100 }
                        step={ 1 }
                        max={ 500 }
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;