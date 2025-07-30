// inspector.js
import {
    WpmozoBorder,
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoRangeSize
} from '../../common/components';
import {__} from "@wordpress/i18n";
import {InspectorControls} from "@wordpress/block-editor";
import {
    PanelBody,
    TextControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    SelectControl,
} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes },
        headingLavels = [
            {
                label: __('H1', 'wpmozo-blocks-and-addons'),
                value: 'h1'
            },
            {
                label: __('H2', 'wpmozo-blocks-and-addons'),
                value: 'h2'
            },
            {
                label: __('H3', 'wpmozo-blocks-and-addons'),
                value: 'h3'
            },
            {
                label: __('H4', 'wpmozo-blocks-and-addons'),
                value: 'h4'
            },
            {
                label: __('H5', 'wpmozo-blocks-and-addons'),
                value: 'h5'
            },
            {
                label: __('H6', 'wpmozo-blocks-and-addons'),
                value: 'h6'
            }
        ],
        layoutType = [
            {
                label: __('Layout 1', 'wpmozo-blocks-and-addons'),
                value: 'layout1'
            },
            {
                label: __('Layout 2', 'wpmozo-blocks-and-addons'),
                value: 'layout2'
            }
        ];

    props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={__('Configuration', 'wpmozo-blocks-and-addons')} initialOpen={true}>
                    <SelectControl
                        label={__('Layout', 'wpmozo-blocks-and-addons')}
                        value={attributes.layoutType}
                        options={layoutType}
                        onChange={(newValue) => setAttributes({layoutType: newValue})}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <TextControl
                        label={__('Title', 'wpmozo-blocks-and-addons')}
                        value={attributes.title ?? ""}
                        onChange={(newValue) => setAttributes({title: newValue})}
                        placeholder={__('WPMozo Title', 'wpmozo-blocks-and-addons')}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <RangeControl
                        label={__('Percentage', 'wpmozo-blocks-and-addons')}
                        value={attributes.percentage}
                        onChange={(newValue) => setAttributes({percentage: newValue})}
                        min={0}
                        step={1}
                        max={100}
                        allowReset={true}
                        __next40pxDefaultSize={true}
                        __nextHasNoMarginBottom={true}
                    />
                    <ToggleControl
                        label={__('Display Empty Bar/Chunks', 'wpmozo-blocks-and-addons')}
                        checked={attributes.displayEmptyBar}
                        onChange={(newValue) => setAttributes({displayEmptyBar: newValue})}
                        __nextHasNoMarginBottom={true}
                    />
                    { 'layout1' === attributes.layoutType && (
                        <>
                            <ToggleControl
                                label={__('Use Stripes', 'wpmozo-blocks-and-addons')}
                                checked={attributes.useStripes}
                                onChange={(newValue) => setAttributes({useStripes: newValue})}
                                __nextHasNoMarginBottom={true}
                            />
                            {true === attributes.useStripes && (
                                <>
                                    <WpmozoColorPicker
                                        ColorKey="stripe"
                                        label="Stripe Color"
                                        props={props}
                                        ColorTypes={[
                                            {
                                                key: 'Color',
                                                label: __('Stripe Color', 'wpmozo-blocks-and-addons'),
                                                onlyGradient: true,
                                            }
                                        ]}
                                    />
                                    <ToggleControl
                                        label={__('Enable Stripe Animation', 'wpmozo-blocks-and-addons')}
                                        checked={attributes.stripeAnimation}
                                        onChange={(newValue) => setAttributes({stripeAnimation: newValue})}
                                        __nextHasNoMarginBottom={true}
                                    />

                                    {true === attributes.stripeAnimation && (
                                        <RangeControl
                                            label={__('Animation Speed', 'wpmozo-blocks-and-addons')}
                                            value={attributes.stripeAnimationSpeed}
                                            onChange={(newValue) => setAttributes({stripeAnimationSpeed: newValue})}
                                            min={0}
                                            step={1}
                                            max={10}
                                            allowReset={true}
                                            __next40pxDefaultSize={true}
                                            __nextHasNoMarginBottom={true}
                                        />
                                    )}
                                </>
                            )}
                        </>
                    )}
                    { 'layout2' === attributes.layoutType && (
                        <>
                            <ToggleControl
                                label={__('Enable Custom Chunks Size', 'wpmozo-blocks-and-addons')}
                                checked={attributes.useCustomChunksSize}
                                onChange={(newValue) => setAttributes({useCustomChunksSize: newValue})}
                                __nextHasNoMarginBottom={true}
                            />
                            {true === attributes.useCustomChunksSize && (
                                <>
                                    <WpmozoRangeSize
                                        label={ __( 'Chunks Width', 'wpmozo-blocks-and-addons') }
                                        rangeSizeKey='useChunksWidth'
                                        props={props}
                                    />
                                    <WpmozoRangeSize
                                        label={ __( 'Chunks Height', 'wpmozo-blocks-and-addons') }
                                        rangeSizeKey='useChunksHeight'
                                        props={props}
                                    />
                                </>
                            )}
                        </>
                    )}

                </PanelBody>
            </InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={__('Title', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={true}>
                    <WpmozoColorPicker
                        ColorKey="title"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __('Title Color', 'wpmozo-blocks-and-addons'),
                            }
                        ]}
                    />
                    <BaseControl
                        label={__('Heading Lavel', 'wpmozo-blocks-and-addons')}
                    >
                        <ButtonGroup>
                            {headingLavels.map((item, index) => (
                                <Button
                                    key={`heading-level-${index}`}
                                    isPressed={item.value === attributes.titleLavel}
                                    onClick={() => setAttributes({titleLavel: item.value})}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <WpmozoAlignment
                        label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
                        onChange={(newValue) => setAttributes({titleAlign: newValue})}
                        value={attributes.titleAlign}
                    />
                    <WpmozoTypography
                        TypographyKey="title"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={__('Percentage', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="percentage"
                        props={props}
                        ColorTypes={[
                            {
                                key: 'Color',
                                label: __('Title Color', 'wpmozo-blocks-and-addons'),
                            }
                        ]}
                    />
                    {'layout1' === attributes.layoutType && (
                        <WpmozoAlignment
                            label={__('Percentage Alignment', 'wpmozo-blocks-and-addons')}
                            onChange={(newValue) => setAttributes({percentageAlign: newValue})}
                            value={attributes.percentageAlign}
                        />
                    )}
                    <WpmozoTypography
                        TypographyKey="percentage"
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={__('Filled Bar/Chunks Background', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        label={__('Background Type', 'wpmozo-blocks-and-addons')}
                        className="wpmozo-button-tabs-wrap"
                    >
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('classic' === attributes.filledBackgroundType) ? true : false}
                                onClick={() => setAttributes({filledBackgroundType: 'classic'})}
                                label={__('Classic', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Classic', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('gradient' === attributes.filledBackgroundType) ? true : false}
                                onClick={() => setAttributes({filledBackgroundType: 'gradient'})}
                                label={__('Gradient', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Gradient', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </ButtonGroup>
                        {'classic' === attributes.filledBackgroundType && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="filledBackground"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                            </>
                        )}
                        {'gradient'=== attributes.filledBackgroundType && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="filledBackground"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Gradient',
                                            label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
                                            onlyGradient: true,
                                        },
                                    ]}
                                />
                            </>
                        )}
                    </BaseControl>
                </PanelBody>
                <PanelBody title={__('Bar/Chunks Background', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl
                        label={__('Background Type', 'wpmozo-blocks-and-addons')}
                        className="wpmozo-button-tabs-wrap"
                    >
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('classic' === attributes.backgroundType) ? true : false}
                                onClick={() => setAttributes({backgroundType: 'classic'})}
                                label={__('Classic', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Classic', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('gradient' === attributes.backgroundType) ? true : false}
                                onClick={() => setAttributes({backgroundType: 'gradient'})}
                                label={__('Gradient', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Gradient', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </ButtonGroup>
                        {'classic' === attributes.backgroundType && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="background"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Color',
                                            label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
                                        }
                                    ]}
                                />
                            </>
                        )}
                        {'gradient'=== attributes.backgroundType && (
                            <>
                                <WpmozoColorPicker
                                    ColorKey="background"
                                    props={props}
                                    ColorTypes={[
                                        {
                                            key: 'Gradient',
                                            label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
                                            onlyGradient: true,
                                        },
                                    ]}
                                />
                            </>
                        )}
                    </BaseControl>
                </PanelBody>
                <PanelBody title={__('Bar/Chunks Border', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoBorder
                        BorderKey="bar"
                        props={props}
                        BorderTypes={{border: true,radius:true}}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;
