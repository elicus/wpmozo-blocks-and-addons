
import { WpmozoDimensions, WpmozoIconpicker, WpmozoBorder, WpmozoAlignment, WpmozoColorPicker, WpmozoTypography, WpmozoMediaUploader } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, HeightControl } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { 
    PanelBody,
    TextControl,
    TextareaControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    Icon
} from "@wordpress/components";

const Inspector = (props) => {

    props = Object.assign({}, props, {preAttributes: {}});

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    headingLavels = [
        {
            label: __( 'H1', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h6'
        }
    ],
    contentAlignment = [
        {
            label: __('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top-left'
        },
        {
            label: __('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top-center'
        },
        {
            label: __('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top-right'
        },
        {
            label: __('Center Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center-left'
        },
        {
            label: __('Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center'
        },
        {
            label: __('Center Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center-right'
        },
        {
            label: __('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom-left'
        },
        {
            label: __('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom-center'
        },
        {
            label: __('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom-right'
        },
    ],
    contentAnimationDirection = [
        {
            label: __('Top To Bottom', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top'
        },
        {
            label: __('Left To Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'left'
        },
        {
            label: __('Right To Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'right'
        },
        {
            label: __('Bottom To Top', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom'
        },
        {
            label: __('No Animation', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'off'
        }
    ];

    const [ titleStyleType, setTitleStyleType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Tilt Image', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="image" 
                        props={props} 
                    />
                </PanelBody>
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.title }
                        onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
                    />
                    <TextareaControl
                        label={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
                        onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
                        value={ attributes.content }
                    />
                    <ToggleControl
                        label={ __( 'Use Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.useIcon }
                        onChange={ ( newValue ) => setAttributes( { useIcon: newValue } ) }
                    />
                    { attributes.useIcon &&
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                            iconPickerKey='icon'
                            props={ props }
                            value={ attributes.icon }
                            onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Show Button', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.showButton }
                        onChange={ ( newValue ) => setAttributes( { showButton: newValue } ) }
                    />
                    { attributes.showButton &&
                        <>
                            <TextControl
                                label={ __( 'Button Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.buttonText }
                                onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
                            />
                            <TextControl
                                label={ __( 'Button Url', 'wpmozo-addons-lite-for-gutenberg' ) }
                                onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
                                value={ attributes.buttonUrl }
                            />
                            <BaseControl
                                label={ __( 'Link Target', 'wpmozo-addons-lite-for-gutenberg' ) }
                                className="wpmozo-button-tabs-wrap"
                            >    
                                <ButtonGroup>
                                    <Button
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={ ( 'same' === attributes.buttonLinkTarget ) ? true : false }
                                        onClick={ () => setAttributes( { buttonLinkTarget: 'same' } ) }
                                        icon={ <Icon icon="admin-links" /> }
                                        label={ __( 'Same Window', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    /> 
                                    <Button 
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={ ( 'external' === attributes.buttonLinkTarget ) ? true : false }
                                        onClick={ () => setAttributes( { buttonLinkTarget: 'external' } ) }
                                        icon={ <Icon icon="external" /> }
                                        label={ __( 'External', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    />
                                </ButtonGroup>
                            </BaseControl>
                        </>
                    }
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Tilt Setting', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <RangeControl
                        label={ __( 'Max Rotation', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.tiltMax }
                        onChange={ ( newValue ) => setAttributes( { tiltMax: newValue } ) }
                        min={ 1 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __( 'Perspective', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.tiltPerspective }
                        onChange={ ( newValue ) => setAttributes( { tiltPerspective: newValue } ) }
                        min={ 100 }
                        max={ 2000 }
                    />
                    <RangeControl
                        label={ __( 'Scale on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.tiltScale }
                        onChange={ ( newValue ) => setAttributes( { tiltScale: newValue } ) }
                        min={ 1 }
                        step={ 0.1 }
                        max={ 3 }
                    />
                    <RangeControl
                        label={ __( 'Speed', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.tiltSpeed }
                        onChange={ ( newValue ) => setAttributes( { tiltSpeed: newValue } ) }
                        min={ 10 }
                        max={ 1000 }
                    />
                    <ToggleControl
                        label={ __( 'Disable on Mobile', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.tiltMobile }
                        onChange={ ( newValue ) => setAttributes( { tiltMobile: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Use Glare', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.useGlare }
                        onChange={ ( newValue ) => setAttributes( { useGlare: newValue } ) }
                    />
                    { attributes.useGlare &&
                        <RangeControl
                            label={ __( 'Max Glare', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.tiltMaxGlare }
                            onChange={ ( newValue ) => setAttributes( { tiltMaxGlare: newValue } ) }
                            min={ 0.1 }
                            max={ 1 }
                            step={ 0.1 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Use 3D Effect', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.use3dEffect }
                        onChange={ ( newValue ) => setAttributes( { use3dEffect: newValue } ) }
                    />
                    { attributes.use3dEffect &&
                        <RangeControl
                            label={ __( '3D Effect', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.tilt3dValue }
                            onChange={ ( newValue ) => setAttributes( { tilt3dValue: newValue } ) }
                            min={ 10 }
                            max={ 100 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Use Disable X/Y axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.useDisableAxis }
                        onChange={ ( newValue ) => setAttributes( { useDisableAxis: newValue } ) }
                    />
                    { attributes.useDisableAxis &&
                        <BaseControl
                            label={ __( 'Disable X/Y axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                            className="wpmozo-button-tabs-wrap"
                        >    
                            <ButtonGroup>
                                <Button
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'x' === attributes.tiltDisableAxis ) ? true : false }
                                    onClick={ () => setAttributes( { tiltDisableAxis: 'x' } ) }
                                    label={ __( 'X axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    text={ __( 'X axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                                /> 
                                <Button 
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'y' === attributes.tiltDisableAxis ) ? true : false }
                                    onClick={ () => setAttributes( { tiltDisableAxis: 'y' } ) }
                                    label={ __( 'Y axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                                    text={ __( 'Y axis', 'wpmozo-addons-lite-for-gutenberg' ) }
                                />
                            </ButtonGroup>
                        </BaseControl>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Overlay', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <ToggleControl
                        label={ __( 'Image Overlay', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.useOverlay }
                        onChange={ ( newValue ) => setAttributes( { useOverlay: newValue } ) }
                    />
                    { attributes.useOverlay &&
                        <WpmozoColorPicker  
                            ColorKey="overlay"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'Color',
                                    label: __( 'Overlay Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                }
                            ]}
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="icon"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <ToggleControl
                        label={ __( 'Use Icon Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.useIconFontSize }
                        onChange={ ( newValue ) => setAttributes( { useIconFontSize: newValue } ) }
                    />
                    { attributes.useIconFontSize &&
                        <HeightControl
                            label={ __( 'Icon Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.iconFontSize }
                            onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Content Styling', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoDimensions
                        DimensionKey='content'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                    <SelectControl
                        label={ __( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.contentAlignment }
                        options={ contentAlignment }
                        onChange={ ( newValue ) => setAttributes( { contentAlignment: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Content on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.contentOnHover }
                        onChange={ ( newValue ) => setAttributes( { contentOnHover: newValue } ) }
                    />
                    { attributes.contentOnHover &&
                        <SelectControl
                            label={ __( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.contentAnimationDirection }
                            options={ contentAnimationDirection }
                            onChange={ ( newValue ) => setAttributes( { contentAnimationDirection: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="title"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <BaseControl
                        label={ __( 'Heading Lavel', 'wpmozo-addons-lite-for-gutenberg' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    isPressed={ ( item.value === attributes.titleLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { titleLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoTypography
                        TypographyKey="title"
                        props={props}
                    />
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                        onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                        value={ attributes.titleAlign }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Description', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="description"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="description"
                        props={props}
                    />
                    <WpmozoAlignment
                        label={ __( 'Description Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                        onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
                        value={ attributes.descriptionAlign }
                    />
                </PanelBody>
                { attributes.showButton && 
                    <PanelBody title={ __( 'Button Style', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                        <WpmozoColorPicker  
                            ColorKey="button"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'TextColor',
                                    label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'BackgroundColor',
                                    label: __( 'Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                }
                            ]}
                        />
                        <WpmozoTypography
                            TypographyKey="button"
                            props={props}
                        />
                        <WpmozoBorder
                            BorderKey="button"
                            props={props}
                        />
                        <WpmozoDimensions
                            DimensionKey='button'
                            props={props}
                        />
                    </PanelBody>
                }
            </InspectorControls>
        </>
    );

};

export default Inspector;