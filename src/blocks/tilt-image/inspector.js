
import { 
    WpmozoDimensions, 
    WpmozoIconpicker, 
    WpmozoBorder, 
    WpmozoAlignment, 
    WpmozoColorPicker, 
    WpmozoTypography, 
    WpmozoMediaUploader 
} from '../../components/index';
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
            label: __( 'H1', 'wpmozo-blocks-and-addons' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-blocks-and-addons' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-blocks-and-addons' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-blocks-and-addons' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-blocks-and-addons' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-blocks-and-addons' ),
            value: 'h6'
        }
    ],
    contentAlignment = [
        {
            label: __('Top Left', 'wpmozo-blocks-and-addons'),
            value: 'top-left'
        },
        {
            label: __('Top Center', 'wpmozo-blocks-and-addons'),
            value: 'top-center'
        },
        {
            label: __('Top Right', 'wpmozo-blocks-and-addons'),
            value: 'top-right'
        },
        {
            label: __('Center Left', 'wpmozo-blocks-and-addons'),
            value: 'center-left'
        },
        {
            label: __('Center', 'wpmozo-blocks-and-addons'),
            value: 'center'
        },
        {
            label: __('Center Right', 'wpmozo-blocks-and-addons'),
            value: 'center-right'
        },
        {
            label: __('Bottom Left', 'wpmozo-blocks-and-addons'),
            value: 'bottom-left'
        },
        {
            label: __('Bottom Center', 'wpmozo-blocks-and-addons'),
            value: 'bottom-center'
        },
        {
            label: __('Bottom Right', 'wpmozo-blocks-and-addons'),
            value: 'bottom-right'
        },
    ],
    contentAnimationDirection = [
        {
            label: __('Top To Bottom', 'wpmozo-blocks-and-addons'),
            value: 'top'
        },
        {
            label: __('Left To Right', 'wpmozo-blocks-and-addons'),
            value: 'left'
        },
        {
            label: __('Right To Left', 'wpmozo-blocks-and-addons'),
            value: 'right'
        },
        {
            label: __('Bottom To Top', 'wpmozo-blocks-and-addons'),
            value: 'bottom'
        },
        {
            label: __('No Animation', 'wpmozo-blocks-and-addons'),
            value: 'off'
        }
    ];

    const [ titleStyleType, setTitleStyleType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Tilt Image', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="image" 
                        props={props} 
                    />
                </PanelBody>
                <PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.title }
                        onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
                    />
                    <TextareaControl
                        label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
                        onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
                        value={ attributes.content }
                    />
                    <ToggleControl
                        label={ __( 'Use Icon', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.useIcon }
                        onChange={ ( newValue ) => setAttributes( { useIcon: newValue } ) }
                    />
                    { attributes.useIcon &&
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
                            iconPickerKey='icon'
                            props={ props }
                            value={ attributes.icon }
                            onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.showButton }
                        onChange={ ( newValue ) => setAttributes( { showButton: newValue } ) }
                    />
                    { attributes.showButton &&
                        <>
                            <TextControl
                                label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.buttonText }
                                onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
                            />
                            <TextControl
                                label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
                                onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
                                value={ attributes.buttonUrl }
                            />
                            <BaseControl
                                label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
                                className="wpmozo-button-tabs-wrap"
                            >    
                                <ButtonGroup>
                                    <Button
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={ ( 'same' === attributes.buttonLinkTarget ) ? true : false }
                                        onClick={ () => setAttributes( { buttonLinkTarget: 'same' } ) }
                                        icon={ <Icon icon="admin-links" /> }
                                        label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) }
                                    /> 
                                    <Button 
                                        className="wpmozo-button-tabs-btn"
                                        isPressed={ ( 'external' === attributes.buttonLinkTarget ) ? true : false }
                                        onClick={ () => setAttributes( { buttonLinkTarget: 'external' } ) }
                                        icon={ <Icon icon="external" /> }
                                        label={ __( 'External', 'wpmozo-blocks-and-addons' ) }
                                    />
                                </ButtonGroup>
                            </BaseControl>
                        </>
                    }
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Tilt Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <RangeControl
                        label={ __( 'Max Rotation', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.tiltMax }
                        onChange={ ( newValue ) => setAttributes( { tiltMax: newValue } ) }
                        min={ 1 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __( 'Perspective', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.tiltPerspective }
                        onChange={ ( newValue ) => setAttributes( { tiltPerspective: newValue } ) }
                        min={ 100 }
                        max={ 2000 }
                    />
                    <RangeControl
                        label={ __( 'Scale on Hover', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.tiltScale }
                        onChange={ ( newValue ) => setAttributes( { tiltScale: newValue } ) }
                        min={ 1 }
                        step={ 0.1 }
                        max={ 3 }
                    />
                    <RangeControl
                        label={ __( 'Speed', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.tiltSpeed }
                        onChange={ ( newValue ) => setAttributes( { tiltSpeed: newValue } ) }
                        min={ 10 }
                        max={ 1000 }
                    />
                    <ToggleControl
                        label={ __( 'Disable on Mobile', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.tiltMobile }
                        onChange={ ( newValue ) => setAttributes( { tiltMobile: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Use Glare', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.useGlare }
                        onChange={ ( newValue ) => setAttributes( { useGlare: newValue } ) }
                    />
                    { attributes.useGlare &&
                        <RangeControl
                            label={ __( 'Max Glare', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.tiltMaxGlare }
                            onChange={ ( newValue ) => setAttributes( { tiltMaxGlare: newValue } ) }
                            min={ 0.1 }
                            max={ 1 }
                            step={ 0.1 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Use 3D Effect', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.use3dEffect }
                        onChange={ ( newValue ) => setAttributes( { use3dEffect: newValue } ) }
                    />
                    { attributes.use3dEffect &&
                        <RangeControl
                            label={ __( '3D Effect', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.tilt3dValue }
                            onChange={ ( newValue ) => setAttributes( { tilt3dValue: newValue } ) }
                            min={ 10 }
                            max={ 100 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Use Disable X/Y axis', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.useDisableAxis }
                        onChange={ ( newValue ) => setAttributes( { useDisableAxis: newValue } ) }
                    />
                    { attributes.useDisableAxis &&
                        <BaseControl
                            label={ __( 'Disable X/Y axis', 'wpmozo-blocks-and-addons' ) }
                            className="wpmozo-button-tabs-wrap"
                        >    
                            <ButtonGroup>
                                <Button
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'x' === attributes.tiltDisableAxis ) ? true : false }
                                    onClick={ () => setAttributes( { tiltDisableAxis: 'x' } ) }
                                    label={ __( 'X axis', 'wpmozo-blocks-and-addons' ) }
                                    text={ __( 'X axis', 'wpmozo-blocks-and-addons' ) }
                                /> 
                                <Button 
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'y' === attributes.tiltDisableAxis ) ? true : false }
                                    onClick={ () => setAttributes( { tiltDisableAxis: 'y' } ) }
                                    label={ __( 'Y axis', 'wpmozo-blocks-and-addons' ) }
                                    text={ __( 'Y axis', 'wpmozo-blocks-and-addons' ) }
                                />
                            </ButtonGroup>
                        </BaseControl>
                    }
                </PanelBody>
                <PanelBody title={ __( 'Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <ToggleControl
                        label={ __( 'Image Overlay', 'wpmozo-blocks-and-addons' ) }
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
                                    label: __( 'Overlay Color', 'wpmozo-blocks-and-addons' ),
                                }
                            ]}
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="icon"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Icon Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                        onChange={ ( newValue ) => setAttributes( { iconAlign: newValue } ) }
                        value={ attributes.iconAlign }
                    />
                    <ToggleControl
                        label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.useIconFontSize }
                        onChange={ ( newValue ) => setAttributes( { useIconFontSize: newValue } ) }
                    />
                    { attributes.useIconFontSize &&
                        <HeightControl
                            label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.iconFontSize }
                            onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoDimensions
                        DimensionKey='content'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                    <SelectControl
                        label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.contentAlignment }
                        options={ contentAlignment }
                        onChange={ ( newValue ) => setAttributes( { contentAlignment: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Content on Hover', 'wpmozo-blocks-and-addons' ) }
                        checked={ attributes.contentOnHover }
                        onChange={ ( newValue ) => setAttributes( { contentOnHover: newValue } ) }
                    />
                    { attributes.contentOnHover &&
                        <SelectControl
                            label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.contentAnimationDirection }
                            options={ contentAnimationDirection }
                            onChange={ ( newValue ) => setAttributes( { contentAnimationDirection: newValue } ) }
                        />
                    }
                </PanelBody>
                <PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="title"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <BaseControl
                        label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }
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
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                        value={ attributes.titleAlign }
                    />
                    <WpmozoTypography
                        TypographyKey="title"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="description"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                            }
                        ]}
                    />
                    <WpmozoAlignment
                        label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons') }
                        onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
                        value={ attributes.descriptionAlign }
                    />
                    <WpmozoTypography
                        TypographyKey="description"
                        props={props}
                    />
                </PanelBody>
                { attributes.showButton && 
                    <PanelBody title={ __( 'Button Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                        <WpmozoColorPicker  
                            ColorKey="button"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'TextColor',
                                    label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    key: 'BackgroundColor',
                                    label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
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
                            DimensionsTypes={{
                                padding: true,
                                margin: true
                            }}
                        />
                    </PanelBody>
                }
            </InspectorControls>
        </>
    );

};

export default Inspector;