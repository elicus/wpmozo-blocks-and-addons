
import { WpmozoColorCombo, WpmozoAlignment, WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, WpmozoIconpicker } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { useState } from "react";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    RangeControl,
    TextControl,
    BaseControl,
    RadioControl,
    ButtonGroup,
    SelectControl,
    Button,
    ColorPicker,
    __experimentalNumberControl as NumberControl,
    __experimentalBorderControl as BorderControl,
    __experimentalBoxControl as BoxControl,
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;
    
    props = Object.assign({}, props, {preAttributes: {}});

    const headingLavels = [
        {
            label: __( 'H1', 'wpmozo-addons-for-gutenberg' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-addons-for-gutenberg' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-addons-for-gutenberg' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-addons-for-gutenberg' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-addons-for-gutenberg' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-addons-for-gutenberg' ),
            value: 'h6'
        }
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody key="title_controls" title = { __( 'Integration', 'wpmozo-addons-for-gutenberg' ) } initialOpen={true}>
                    <TextControl
                        label       = { __( 'Access Token', 'wpmozo-addons-for-gutenberg' ) }
                        placeholder ='Enter Access Token'
                        value       = {attributes.accessToken}
                        onChange    = { ( newValue ) => setAttributes( { accessToken: newValue } ) }
                    />
                    <NumberControl
                        label       = { __( 'Cache ( In Minutes )', 'wpmozo-addons-for-gutenberg' ) }
                        placeholder = { 60 }
                        shiftStep   = { 1 }
                        value       = {attributes.cache}
                        onChange    = { ( newValue ) => setAttributes( { cache: newValue } ) }
                    />
                </PanelBody>
                <PanelBody key="display_controls" title = { __( 'Display', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <NumberControl
                        label       = { __( 'Number of Posts', 'wpmozo-addons-for-gutenberg' ) }
                        placeholder = { 10 }
                        shiftStep   = { 1 }
                        value       = {attributes.numberOfPosts}
                        onChange    = { ( newValue ) => setAttributes( { numberOfPosts: newValue } ) }
                    />
                    <ToggleControl
                        label    ={ __( 'Link Post To Instagram', 'wpmozo-addons-for-gutenberg' ) }
                        checked  = {attributes.linkPostToInstagram }
                        onChange ={ ( newValue ) => setAttributes( { linkPostToInstagram: newValue } ) }
                    />
                    <ToggleControl
                        label    ={ __( 'Display Caption', 'wpmozo-addons-for-gutenberg' ) }
                        checked  = {attributes.displayCaption }
                        onChange ={ ( newValue ) => setAttributes( { displayCaption: newValue } ) }
                    />
                    <ToggleControl
                        label    ={ __( 'Display Button', 'wpmozo-addons-for-gutenberg' ) }
                        checked  = {attributes.displayButton }
                        onChange ={ ( newValue ) => setAttributes( { displayButton: newValue } ) }
                    />
                    { true === attributes.displayButton && (
                       <TextControl
                           label       = { __( 'Button Text', 'wpmozo-addons-for-gutenberg' ) }
                           placeholder ='Click here!'
                           value       = {attributes.buttonText}
                           onChange    = { ( newValue ) => setAttributes( { buttonText: newValue } ) }
                       />
                    )}
                    { true === attributes.displayButton && (
                       <WpmozoIconpicker
                           label         ={ __( 'Button Icon', 'wpmozo-addons-for-gutenberg' ) }
                           iconPickerKey ='buttonIcon'
                           props         ={ props }
                           value         ={ attributes.buttonIcon }
                           onChange      ={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
                       />
                    )}
                    { true === attributes.displayButton && (
                       <RadioControl
                           label    ="Button Icon Position"
                           selected ={ attributes.iconPosition }
                           options  ={ [
                               { label: 'Before', value: 'before' },
                               { label: 'After', value: 'after' },
                           ] }
                           onChange ={ ( newValue ) => setAttributes( { iconPosition: newValue } ) }
                       />
                    )}
                    { true === attributes.displayButton && (
                       <ToggleControl
                           label    ={ __( 'Show Icon On hover', 'wpmozo-addons-for-gutenberg' ) }
                           checked  = {attributes.iconOnHover }
                           onChange ={ ( newValue ) => setAttributes( { iconOnHover: newValue } ) }
                       />
                    )}
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody key="title_styles" title = { __( 'Layout', 'wpmozo-addons-for-gutenberg' ) } initialOpen={true}>
                    <SelectControl
                        label    ={ __( 'Layout', 'wpmozo-addons-for-gutenberg' ) }
                        value    ={ attributes.postLayout }
                        options  ={ [
                           { label: 'Grid', value: 'grid' },
                           { label: 'Masonry', value: 'masonry' },
                        ] }
                        onChange ={ ( newValue ) => setAttributes( { postLayout: newValue } ) }
                    />
                    <NumberControl
                        label       = { __( 'Number Of Columns', 'wpmozo-addons-for-gutenberg' ) }
                        placeholder = { 3 }
                        shiftStep   = { 1 }
                        value       = { attributes.columns }
                        onChange    = { ( newValue ) => setAttributes( { columns: newValue } ) }
                    />
                    { 'masonry' === attributes.postLayout && (
                        <RangeControl
                            label="Column Spacing"
                            value={ attributes.columnSpacing }
                            onChange    = { ( newValue ) => setAttributes( { columnSpacing: newValue } ) }
                            min={ 1 }
                            max={ 100 }
                        />
                    )}
                </PanelBody>
                <PanelBody key="caption_styles" title = { __( 'Caption', 'wpmozo-addons-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorCombo
                        label={ __( 'Text Color', 'wpmozo-addons-for-gutenberg' ) }
                        normal={{
                            ColorKey: "captionNormal",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                            ]
                        }}
                        hover={{
                            ColorKey: "captionHover",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                            ]
                        }}
                    />
                    <WpmozoTypography
                        TypographyKey="captionTypography"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='captionTextDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody key="post_styles" title = { __( 'Post', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <BorderControl
                        label={ __( 'Border' ) }
                        onChange    = { ( newValue ) => setAttributes( { postBorder: newValue } ) }
                        value    = {attributes.postBorder}
                    />
                    <BoxControl
                    label = "Rounded Corners"
                        onChange = { ( newValue ) => setAttributes( { roundedCorners: newValue } ) }
                    />
                </PanelBody>
                <PanelBody key="button_styles" title = { __( 'Button', 'wpmozo-addons-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoColorCombo
                        label={ __( 'Text Color', 'wpmozo-addons-for-gutenberg' ) }
                        normal={{
                            ColorKey: "buttonNormal",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                            ]
                        }}
                        hover={{
                            ColorKey: "buttonHover",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-for-gutenberg' ),
                                },
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Button Alignment', 'wpmozo-addons-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { buttonAlignment: newValue } ) }
                        value={ attributes.buttonAlignment }
                    />
                    <RangeControl
                        label="Font Size"
                        value={ attributes.buttonFontSize }
                        onChange    = { ( newValue ) => setAttributes( { buttonFontSize: newValue } ) }
                        min={ 1 }
                        max={ 100 }
                    />
                    <BorderControl
                        label={ __( 'Border' ) }
                        onChange    = { ( newValue ) => setAttributes( { buttonBorder: newValue } ) }
                        value    = {attributes.buttonBorder}
                    />
                    <BoxControl
                    label = "Border Radius"
                        onChange = { ( newValue ) => setAttributes( { buttonBorderRadius: newValue } ) }
                    />
                    <WpmozoDimensions
                        DimensionKey='buttonDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;