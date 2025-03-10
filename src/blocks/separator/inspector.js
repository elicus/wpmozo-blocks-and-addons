
import { WpmozoBorder, WpmozoIconpicker, WpmozoAlignment, WpmozoColorPicker, WpmozoTypography, WpmozoMediaUploader } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor";
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
    GradientPicker
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    allLineStyles = [
        {
            value: 'solid',
            label: __( 'Solid', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'dashed',
            label: __( 'Dashed', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'double',
            label: __( 'Double', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'dotted',
            label: __( 'Dotted', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'ridge',
            label: __( 'Ridge', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'groove',
            label: __( 'Groove', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'inset',
            label: __( 'Inset', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'outset',
            label: __( 'Outset', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        {
            value: 'none',
            label: __( 'None', 'wpmozo-addons-lite-for-gutenberg' ),
        },
    ],
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
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

    const [ textStyleType, setTextStyleType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
{/*Separator Content*/}
                <PanelBody title={ __( 'Separator Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={true}>
                    <SelectControl
                        label={ __( 'Separator Type', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.separatorType }
                        options={ [{
                                value: 'line',
                                label: __( 'Line', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                value: 'shadow',
                                label: __( 'Shadow', 'wpmozo-addons-lite-for-gutenberg' ),
                            },] 
                        }
                        onChange={ ( newValue ) => setAttributes( { separatorType: newValue } ) }
                    />
                    { 'line' === attributes.separatorType &&
                        <SelectControl
                            label={ __( 'Select Line Style', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.lineStyle }
                            options={ allLineStyles }
                            onChange={ ( newValue ) => setAttributes( { lineStyle: newValue } ) }
                        />
                    }
                    { 'line' === attributes.separatorType &&
                        <SelectControl
                            label={ __( 'Use With', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.lineUseWith }
                            options={[
                                {
                                    value: 'onlySeparator',
                                    label: __( 'Only Separator', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'textSeparator',
                                    label: __( 'Separator With Text', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'iconSeparator',
                                    label: __( 'Separator With Icon', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'imageSeparator',
                                    label: __( 'Separator With Image', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                            onChange={ ( newValue ) => setAttributes( { lineUseWith: newValue } ) }
                        />
                    }
                    { 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
                        <TextareaControl
                            label={ __( 'Separator Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                            onChange={ ( newValue ) => setAttributes( { separatorText: newValue } ) }
                            value={ attributes.separatorText }
                        />
                    }
                    { 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith &&
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                            iconPickerKey='separatorIcon'
                            props={ props }
                            value={ attributes.separatorIcon }
                            onChange={ ( newValue ) => setAttributes( { separatorIcon: newValue } ) }
                        />
                    }
                    { 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith &&
                        <WpmozoMediaUploader 
                            attrKye="separatorImage" 
                            props={props} 
                        />
                    }
                </PanelBody>
           	</InspectorControls>
{/*Styling*/}
            <InspectorControls key="styles" group="styles">
{/*Separator Styling*/}
                <PanelBody title={ __( 'Separator Styling', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={true}>
                    <RangeControl
                        label={ __( 'Separator Thickness', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.separatorThickness }
                        onChange={ ( newValue ) => setAttributes( { separatorThickness: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 100 }
                    />
                    {'line' === attributes.separatorType && 'solid' === attributes.lineStyle &&
                        <ColorGradientControl
                            colorValue={ attributes.separatorColor }
                            gradientValue={ attributes.separatorGradient }
                            colors={ [
                                { name: 'red', color: '#f00' },
                                { name: 'white', color: '#fff' },
                                { name: 'blue', color: '#00f' },
                            ] }
                            gradients={[
                                {
                                    name: 'Vivid cyan blue to vivid purple',
                                    gradient:
                                        'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                                    slug: 'vivid-cyan-blue-to-vivid-purple',
                                },
                                {
                                    name: 'Light green cyan to vivid green cyan',
                                    gradient:
                                        'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
                                    slug: 'light-green-cyan-to-vivid-green-cyan',
                                },
                                {
                                    name: 'Luminous vivid amber to luminous vivid orange',
                                    gradient:
                                        'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
                                    slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
                                },
                            ]}
                            label={ __("Separator Color") }
                            onColorChange={ (newValue) => setAttributes({ separatorColor: newValue }) }
                            onGradientChange={ (newValue) => setAttributes({ separatorGradient: newValue }) }
                        /> 
                    }
                    {('shadow' === attributes.separatorType || ( 'line' === attributes.separatorType && 'solid' !== attributes.lineStyle )) &&
                        <WpmozoColorPicker  
                            ColorKey="shadow"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'Color',
                                    label: __( 'Separator Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                        /> 
                    }
                </PanelBody>
{/*Image Styling*/}
                { 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith &&
                    <PanelBody title={ __( 'Image Styling', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                        <SelectControl
                            label={ __( 'Image Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.imagePosition }
                            options={[
                                {
                                    value: 'center',
                                    label: __( 'Center', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'left',
                                    label: __( 'Left', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'right',
                                    label: __( 'Right', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                            onChange={ ( newValue ) => setAttributes( { imagePosition: newValue } ) }
                        />
                        <RangeControl
                            label={ __( 'Image Width', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.imageWidth }
                            onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
                            min={ 0 }
                            step={ 1 }
                            max={ 100 }
                        />
                    </PanelBody>
                }
{/*Icon Styling*/}
                { 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith &&
                    <PanelBody title={ __( 'Icon Styling', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                            value={ attributes.iconPosition }
                            options={[
                                {
                                    value: 'center',
                                    label: __( 'Center', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'left',
                                    label: __( 'Left', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    value: 'right',
                                    label: __( 'Right', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                            onChange={ ( newValue ) => setAttributes( { iconPosition: newValue } ) }
                        />
                        <WpmozoColorPicker  
                            ColorKey="icon"
                            props={props}
                            ColorTypes={[ 
                                {
                                    key: 'Color',
                                    label: __( 'Icon Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]}
                        />
                        <ToggleControl
                            label={ __( 'Use Icon Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                            checked={ attributes.enableIconFontSize }
                            onChange={ ( newValue ) => setAttributes( { enableIconFontSize: newValue } ) }
                        />
                        { true === attributes.enableIconFontSize && 
                            <RangeControl
                                label={ __( 'Icon Font Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.iconFontSize }
                                onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                                min={ 0 }
                                step={ 1 }
                                max={ 120 }
                            />
                        }
                        <ToggleControl
                            label={ __( 'Style Icon', 'wpmozo-addons-lite-for-gutenberg' ) }
                            checked={ attributes.styleIcon }
                            onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
                        />
                        { true === attributes.styleIcon && 
                            <SelectControl
                                label={ __( 'Shape', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.iconShape }
                                options={[
                                    {
                                        value: 'square',
                                        label: __( 'Square', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        value: 'circle',
                                        label: __( 'Circle', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        value: 'hexagon',
                                        label: __( 'Hexagon', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                                onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
                            />
                        }
                        { true === attributes.styleIcon && 
                            <WpmozoColorPicker  
                                ColorKey="shape"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Background',
                                        label: __( 'Shape Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        }
                        { true === attributes.styleIcon && 
                            <ToggleControl
                                label={ __( 'Display Shape Border', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.enableShapeBorder }
                                onChange={ ( newValue ) => setAttributes( { enableShapeBorder: newValue } ) }
                            />
                        }
                        { true === attributes.styleIcon && true === attributes.enableShapeBorder &&
                            <WpmozoColorPicker  
                                ColorKey="shapeBorder"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Color',
                                        label: __( 'Shape Border Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                ]}
                            />
                        }
                    </PanelBody>
                }
{/*Text Styling*/}
                { 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
                    <PanelBody title={ __( 'Text Styling', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={false}>
                        <BaseControl
                            className="wpmozo-button-tabs-wrap"
                        >    
                            <ButtonGroup>
                                <Button
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'normal' === textStyleType ) ? true : false }
                                    onClick={ () => setTextStyleType( 'normal' ) }
                                >
                                    { __( 'Normal', 'wpmozo-addons-lite-for-gutenberg' ) }
                                </Button>
                                <Button 
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'hover' === textStyleType ) ? true : false }
                                    onClick={ () => setTextStyleType( 'hover' ) }
                                >
                                    { __( 'Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                </Button>
                            </ButtonGroup>
                            { 'normal' === textStyleType &&
                                <>
                                    <WpmozoColorPicker  
                                        ColorKey="textNormal"
                                        props={props}
                                        ColorTypes={[ 
                                            {
                                                key: 'Color',
                                                label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                            },
                                        ]}
                                    />
                                    <WpmozoTypography
                                        TypographyKey="textNormal"
                                        props={props}
                                    />
                                </>
                            }
                            { 'hover' === textStyleType &&
                                <>
                                    <WpmozoColorPicker  
                                        ColorKey="textHover"
                                        props={props}
                                        ColorTypes={[ 
                                            {
                                                key: 'Color',
                                                label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                            },
                                        ]}
                                    />
                                    <WpmozoTypography
                                        TypographyKey="textHover"
                                        props={props}
                                    />
                                </>
                            }
                        </BaseControl>
                        <WpmozoAlignment
                            label={ __( 'Text Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                            onChange={ ( newValue ) => setAttributes( { textAlign: newValue } ) }
                            value={ attributes.textAlign }
                        />
                    </PanelBody>
                }
            </InspectorControls>
        </>
    );
};

export default Inspector;