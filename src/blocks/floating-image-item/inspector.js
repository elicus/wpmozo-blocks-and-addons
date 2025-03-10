import { WpmozoMediaUploader, WpmozoSize, WpmozoColorPicker } from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    TextControl,
    BaseControl,
    ButtonGroup,
    Button,
    Icon,
    RangeControl,
    SelectControl,
    __experimentalUnitControl
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;
    
    props = Object.assign({}, props, {preAttributes: {}});

    const [ contentType, setContentType ] = useState('front');

    const floatingImageEffects = [
        {
            label: __( 'Up Down', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'up_down'
        },
        {
            label: __( 'Left Right', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'left_right'
        },
        {
            label: __( 'No Effect', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'no_effect'
        }
    ];
    const speedCurveOptions = [
        {
            label: __( 'Ease-In-Out', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'ease-in-out'
        },
        {
            label: __( 'Ease', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'ease'
        },
        {
            label: __( 'Ease-In', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'ease-in'
        },
        {
            label: __( 'Ease-Out', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'ease-out'
        },
        {
            label: __( 'Linear', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'linear'
        }
    ];
    const animationRepeat = [
        {
            label: __( 'Infinite', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'infinite'
        },
        {
            label: __( 'Initial', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'initial'
        },
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'General Settings', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="image" 
                        props={props}
                        imageSrc={attributes.image.url}
                        onSelect={ ( media ) => setAttributes( { image: media} ) }
                    />
                    <TextControl
                        label={ __( 'Alt Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.altText }
                        onChange={ ( newValue ) => setAttributes( { altText: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Image Position', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <__experimentalUnitControl
                        label={ __( 'Horizontal Align', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.horizontalAlign }
                        onChange={ ( newValue ) => setAttributes( { horizontalAlign: newValue } ) }
                    />
                    <__experimentalUnitControl
                        label={ __( 'Vertical Align', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.verticalAlign }
                        onChange={ ( newValue ) => setAttributes( { verticalAlign: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image Animation', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Floating Effect', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.animationEffect }
                        options={floatingImageEffects}
                        onChange={ ( newValue ) => setAttributes( { animationEffect: newValue } ) }
                    />
                    <RangeControl
                        label={ __( 'Animation Delay', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.animationDelay }
                        onChange={ ( newValue ) => setAttributes( { animationDelay: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 5000 }
                    />
                    <RangeControl
                        label={ __( 'Animation Duration', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.animationDuration }
                        onChange={ ( newValue ) => setAttributes( { animationDuration: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 9000 }
                    />
                    <SelectControl
                        label={ __( 'Animation Speed Curve', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.speedCurve }
                        options={speedCurveOptions}
                        onChange={ ( newValue ) => setAttributes( { speedCurve: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Animation Repeat', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.animationRepeat }
                        options={animationRepeat}
                        onChange={ ( newValue ) => setAttributes( { animationRepeat: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image Sizing', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoSize
                        SizeKey="image"
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;