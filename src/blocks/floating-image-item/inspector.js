import { 
    WpmozoMediaUploader, 
    WpmozoSize,
    WpmozoBorder
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    TextControl,
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
            label: __( 'Up Down', 'wpmozo-blocks-and-addons' ),
            value: 'up_down'
        },
        {
            label: __( 'Left Right', 'wpmozo-blocks-and-addons' ),
            value: 'left_right'
        },
        {
            label: __( 'No Effect', 'wpmozo-blocks-and-addons' ),
            value: 'no_effect'
        }
    ];
    const speedCurveOptions = [
        {
            label: __( 'Ease-In-Out', 'wpmozo-blocks-and-addons' ),
            value: 'ease-in-out'
        },
        {
            label: __( 'Ease', 'wpmozo-blocks-and-addons' ),
            value: 'ease'
        },
        {
            label: __( 'Ease-In', 'wpmozo-blocks-and-addons' ),
            value: 'ease-in'
        },
        {
            label: __( 'Ease-Out', 'wpmozo-blocks-and-addons' ),
            value: 'ease-out'
        },
        {
            label: __( 'Linear', 'wpmozo-blocks-and-addons' ),
            value: 'linear'
        }
    ];
    const animationRepeat = [
        {
            label: __( 'Infinite', 'wpmozo-blocks-and-addons' ),
            value: 'infinite'
        },
        {
            label: __( 'Initial', 'wpmozo-blocks-and-addons' ),
            value: 'initial'
        },
    ];

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'General Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="image" 
                        props={props}
                        imageSrc={attributes.image.url}
                        onSelect={ ( media ) => setAttributes( { image: media} ) }
                    />
                    <TextControl
                        label={ __( 'Alt Text', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.altText }
                        onChange={ ( newValue ) => setAttributes( { altText: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <__experimentalUnitControl
                        label={ __( 'Horizontal Align', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.horizontalAlign }
                        onChange={ ( newValue ) => setAttributes( { horizontalAlign: newValue } ) }
                    />
                    <__experimentalUnitControl
                        label={ __( 'Vertical Align', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.verticalAlign }
                        onChange={ ( newValue ) => setAttributes( { verticalAlign: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image Animation', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Floating Effect', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.animationEffect }
                        options={floatingImageEffects}
                        onChange={ ( newValue ) => setAttributes( { animationEffect: newValue } ) }
                    />
                    <RangeControl
                        label={ __( 'Animation Delay', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.animationDelay }
                        onChange={ ( newValue ) => setAttributes( { animationDelay: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 5000 }
                    />
                    <RangeControl
                        label={ __( 'Animation Duration', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.animationDuration }
                        onChange={ ( newValue ) => setAttributes( { animationDuration: newValue } ) }
                        min={ 0 }
                        step={ 1 }
                        max={ 9000 }
                    />
                    <SelectControl
                        label={ __( 'Animation Speed Curve', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.speedCurve }
                        options={speedCurveOptions}
                        onChange={ ( newValue ) => setAttributes( { speedCurve: newValue } ) }
                    />
                    <SelectControl
                        label={ __( 'Animation Repeat', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.animationRepeat }
                        options={animationRepeat}
                        onChange={ ( newValue ) => setAttributes( { animationRepeat: newValue } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image Sizing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoSize
                        SizeKey="image"
                        props={props}
                    />
                </PanelBody>
                 <PanelBody title={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoBorder
                        BorderKey="image"
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;