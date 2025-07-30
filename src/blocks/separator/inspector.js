// inspector.js
import { __ } from '@wordpress/i18n';

import { InspectorControls, __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {  PanelBody, TextControl, TextareaControl, SelectControl, RangeControl, BaseControl, ButtonGroup, Button, ToggleControl, GradientPicker } from "@wordpress/components";

import { WpmozoMediaUploader, WpmozoTypography, WpmozoColorPicker, WpmozoAlignment, WpmozoIconpicker } from '../../common/components/index';

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes },
    allLineStyles = [
        {
            value: 'solid',
            label: __( 'Solid', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'dashed',
            label: __( 'Dashed', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'double',
            label: __( 'Double', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'dotted',
            label: __( 'Dotted', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'ridge',
            label: __( 'Ridge', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'groove',
            label: __( 'Groove', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'inset',
            label: __( 'Inset', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'outset',
            label: __( 'Outset', 'wpmozo-blocks-and-addons' ),
        },
        {
            value: 'none',
            label: __( 'None', 'wpmozo-blocks-and-addons' ),
        },
    ],
    headingLevels = [
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
    ];
        
    props = Object.assign({}, props, {preAttributes: {}});

    const [ textStyleType, setTextStyleType ] = useState('normal');

    return (
        <>
            <InspectorControls key="controls">
{/*Separator Content*/}
                <PanelBody title={ __( 'Separator Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
                    <SelectControl
                        label={ __( 'Separator Type', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.separatorType }
                        options={ [{
                                value: 'line',
                                label: __( 'Line', 'wpmozo-blocks-and-addons' ),
                            },
                            {
                                value: 'shadow',
                                label: __( 'Shadow', 'wpmozo-blocks-and-addons' ),
                            },] 
                        }
                        onChange={ ( newValue ) => setAttributes( { separatorType: newValue } ) }
                    />
                    { 'line' === attributes.separatorType &&
                        <SelectControl
                            label={ __( 'Select Line Style', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.lineStyle }
                            options={ allLineStyles }
                            onChange={ ( newValue ) => setAttributes( { lineStyle: newValue } ) }
                        />
                    }
                    { 'line' === attributes.separatorType &&
                        <SelectControl
                            label={ __( 'Use With', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.lineUseWith }
                            options={[
                                {
                                    value: 'onlySeparator',
                                    label: __( 'Only Separator', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'textSeparator',
                                    label: __( 'Separator With Text', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'iconSeparator',
                                    label: __( 'Separator With Icon', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'imageSeparator',
                                    label: __( 'Separator With Image', 'wpmozo-blocks-and-addons' ),
                                },
                            ]}
                            onChange={ ( newValue ) => setAttributes( { lineUseWith: newValue } ) }
                        />
                    }
                    { 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
                        <TextareaControl
                            label={ __( 'Separator Text', 'wpmozo-blocks-and-addons' ) }
                            onChange={ ( newValue ) => setAttributes( { separatorText: newValue } ) }
                            value={ attributes.separatorText }
                        />
                    }
                    { 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith &&
                        <WpmozoIconpicker
                            label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
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
                <PanelBody title={ __( 'Separator Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
                    <RangeControl
                        label={ __( 'Separator Thickness', 'wpmozo-blocks-and-addons' ) }
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
                                    label: __( 'Separator Color', 'wpmozo-blocks-and-addons' ),
                                },
                            ]}
                        />
                    }
                </PanelBody>
{/*Image Styling*/}
                { 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith &&
                    <PanelBody title={ __( 'Image Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                        <SelectControl
                            label={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.imagePosition }
                            options={[
                                {
                                    value: 'center',
                                    label: __( 'Center', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'left',
                                    label: __( 'Left', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'right',
                                    label: __( 'Right', 'wpmozo-blocks-and-addons' ),
                                },
                            ]}
                            onChange={ ( newValue ) => setAttributes( { imagePosition: newValue } ) }
                        />
                        <RangeControl
                            label={ __( 'Image Width', 'wpmozo-blocks-and-addons' ) }
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
                    <PanelBody title={ __( 'Icon Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                        <SelectControl
                            label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
                            value={ attributes.iconPosition }
                            options={[
                                {
                                    value: 'center',
                                    label: __( 'Center', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'left',
                                    label: __( 'Left', 'wpmozo-blocks-and-addons' ),
                                },
                                {
                                    value: 'right',
                                    label: __( 'Right', 'wpmozo-blocks-and-addons' ),
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
                                    label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
                                },
                            ]}
                        />
                        <ToggleControl
                            label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                            checked={ attributes.enableIconFontSize }
                            onChange={ ( newValue ) => setAttributes( { enableIconFontSize: newValue } ) }
                        />
                        { true === attributes.enableIconFontSize && 
                            <RangeControl
                                label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.iconFontSize }
                                onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
                                min={ 0 }
                                step={ 1 }
                                max={ 120 }
                            />
                        }
                        <ToggleControl
                            label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
                            checked={ attributes.styleIcon }
                            onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
                        />
                        { true === attributes.styleIcon && 
                            <SelectControl
                                label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.iconShape }
                                options={[
                                    {
                                        value: 'square',
                                        label: __( 'Square', 'wpmozo-blocks-and-addons' ),
                                    },
                                    {
                                        value: 'circle',
                                        label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
                                    },
                                    {
                                        value: 'hexagon',
                                        label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
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
                                        label: __( 'Shape Background', 'wpmozo-blocks-and-addons' ),
                                    },
                                ]}
                            />
                        }
                        { true === attributes.styleIcon && 
                            <ToggleControl
                                label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
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
                                        label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ),
                                    },
                                ]}
                            />
                        }
                    </PanelBody>
                }
{/*Text Styling*/}
                { 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
                    <PanelBody title={ __( 'Text Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={false}>
                        <BaseControl
                            className="wpmozo-button-tabs-wrap"
                        >    
                            <ButtonGroup>
                                <Button
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'normal' === textStyleType ) ? true : false }
                                    onClick={ () => setTextStyleType( 'normal' ) }
                                >
                                    { __( 'Normal', 'wpmozo-blocks-and-addons' ) }
                                </Button>
                                <Button 
                                    className="wpmozo-button-tabs-btn"
                                    isPressed={ ( 'hover' === textStyleType ) ? true : false }
                                    onClick={ () => setTextStyleType( 'hover' ) }
                                >
                                    { __( 'Hover', 'wpmozo-blocks-and-addons' ) }
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
                                                label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
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
                                                label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
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
                            label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons') }
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