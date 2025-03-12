
import { 
    WpmozoMediaUploader,
    WpmozoColorPicker,
    WpmozoTypography 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl
} from "@wordpress/components";

const Inspector = (props) => {

    const beforeTitle = __( 'Before', 'wpmozo-addons-lite-for-gutenberg' ),
    afterTitle = __( 'After', 'wpmozo-addons-lite-for-gutenberg' ),
    attributes = props.attributes,
    setAttributes = props.setAttributes,
    globalColorTypes = [ 
        {
            key: 'Handle',
            label: __( 'Handle Color', 'wpmozo-addons-lite-for-gutenberg' ),
        },
        ... attributes.overlayOnHover ? [{key: 'Overlay',label: __( 'Overlay Color', 'wpmozo-addons-lite-for-gutenberg' )}] : [],
    ];
    
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'General', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Slider Orientation', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.sliderOrientation }
                        options={[
                            {
                                label: __( 'Horizontal', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'horizontal',
                            },
                            {
                                label: __( 'Vertical', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'vertical',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { sliderOrientation: newValue } ) }
                    />
                    <RangeControl
                        label={ __( 'Handle Offset', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.handleOffset }
                        onChange={ ( newValue ) => setAttributes( { handleOffset: newValue } ) }
                        min={ 0 }
                        step={ 0.1 }
                        max={ 1 }
                        allowReset={true}
                        initialPosition={ 0.5 }
                        resetFallbackValue={ 0.5 }
                    />
                    { ! attributes.moveHandleOnClick && (
                        <>
                            <ToggleControl
                                label={ __( 'Move Handle on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.moveHandleOnHover }
                                onChange={ ( newValue ) => setAttributes( { moveHandleOnHover: newValue } ) }
                            />
                        </>
                    )}
                    { ! attributes.moveHandleOnHover && (
                        <>
                            <ToggleControl
                                label={ __( 'Move Handle on Click', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.moveHandleOnClick }
                                onChange={ ( newValue ) => setAttributes( { moveHandleOnClick: newValue } ) }
                            />
                        </>
                    )}
                </PanelBody>
            	<PanelBody title={beforeTitle} initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="beforeImage" 
                        props={props} 
                    />
                    <ToggleControl
                        label={ __( 'Show Label', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.beforeHasLabel }
                        onChange={ ( newValue ) => setAttributes( { beforeHasLabel: newValue } ) }
                    />
                    {attributes.beforeHasLabel && (
                        <>
                            <ToggleControl
                                label={ __( 'Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.beforeLabelOnHover }
                                onChange={ ( newValue ) => setAttributes( { beforeLabelOnHover: newValue } ) }
                            />
                            <TextControl
                                label={ __( 'Enter Label', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.beforeLabel }
                                onChange={ ( newValue ) => setAttributes( { beforeLabel: newValue } ) }
                            />
                        </>
                    )}
                </PanelBody>
                <PanelBody title={afterTitle} initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="afterImage" 
                        props={props} 
                    />
                    <ToggleControl
                        label={ __( 'Show Label', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.afterHasLabel }
                        onChange={ ( newValue ) => setAttributes( { afterHasLabel: newValue } ) }
                    />
                    {attributes.afterHasLabel && (
                        <>
                            <ToggleControl
                                label={ __( 'Show Label Only on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                                checked={ attributes.afterLabelOnHover }
                                onChange={ ( newValue ) => setAttributes( { afterLabelOnHover: newValue } ) }
                            />
                            <TextControl
                                label={ __( 'Enter Label', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.afterLabel }
                                onChange={ ( newValue ) => setAttributes( { afterLabel: newValue } ) }
                            />
                        </>
                    )}
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'General Style' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <ToggleControl
                        label={ __( 'Overlay on Hover', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.overlayOnHover }
                        onChange={ ( newValue ) => setAttributes( { overlayOnHover: newValue } ) }
                    />
                    <WpmozoColorPicker
                        ColorKey="globalcolor"
                        props={props}
                        ColorTypes={globalColorTypes}
                    />
                </PanelBody>
                {attributes.beforeHasLabel && (
                    <>
                        <PanelBody title={ __( 'Before Label Style' ) } className="wpmozo-typography-panel" initialOpen={false}>
                            <WpmozoColorPicker
                                ColorKey="beforeLabel"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'text',
                                        label: __( 'Label Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        key: 'background',
                                        label: __( 'Label Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                    } 
                                ]}
                            />
                            <WpmozoTypography
                                TypographyKey="beforeLabel"
                                props={props}
                            />
                        </PanelBody>
                    </>
                )}
                {attributes.afterHasLabel && (
                    <>
                        <PanelBody title={ __( 'After Label Style' ) } className="wpmozo-typography-panel" initialOpen={false}>
                            <WpmozoColorPicker
                                ColorKey="afterLabel"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'text',
                                        label: __( 'Label Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                    },
                                    {
                                        key: 'background',
                                        label: __( 'Label Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                    } 
                                ]}
                            />
                            <WpmozoTypography
                                TypographyKey="afterLabel"
                                props={props}
                            />
                        </PanelBody>
                    </>
                )}
            </InspectorControls>
        </>
    );

};

export default Inspector;