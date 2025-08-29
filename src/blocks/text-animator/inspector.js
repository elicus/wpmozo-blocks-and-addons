<<<<<<< HEAD
import { __ } from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl
} from '@wordpress/components';

import { inspectorPanelTabs } from '../../common/utils.js';
import { GeneralPanel } from './settings/generalPanel';
import { DesignPanel } from './settings/designPanel';

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
		props = Object.assign( {}, props, { preAttributes: {} } );

	return (
		<InspectorControls>
			<TabPanel
				className="wpmozo-settings-tab-panel"
				activeClass="is-active"
				tabs={ inspectorPanelTabs() }
			>
				{ ( tab ) => ( <div className="wpmozo-settings-tab-panel-content">
					{ tab.name === 'general' && 
						<GeneralPanel attributes={attributes} setAttributes={setAttributes} />
					}
					{ tab.name === 'design' && 
						<DesignPanel attributes={attributes} setAttributes={setAttributes} />
					}
					{ tab.name === 'advanced' && 
						<PanelBody title={ __( 'Advanced', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
							<TextControl
								label={ __( 'Additional CSS Class(es)', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.className || '' }
								onChange={ ( value ) => setAttributes( { className: value } ) }
								help={ __( 'Separate multiple classes with spaces.', 'wpmozo-blocks-and-addons' ) }
							/>
						</PanelBody>
					}
				</div> ) }
			</TabPanel>
		</InspectorControls>
	);
};

export default Inspector;
=======
import {
    WpmozoBorder,
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoMediaUploader,
    WpmozoIconpicker,
    WpmozoDimensions, WpmozoRangeSize
} from '../../common/components/index.js';
import {__} from "@wordpress/i18n";
import {InspectorControls, HeightControl} from "@wordpress/block-editor";
import {useState} from "@wordpress/element";
import {
    PanelBody,
    TextControl,
    RangeControl,
    TextareaControl,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
    SelectControl,
    Icon
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
        setAttributes = props.setAttributes,
        displayTag = [
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
            },
            {
                label: __('P', 'wpmozo-blocks-and-addons'),
                value: 'p'
            }
        ],
        animationType = [
            {
                label: __('Fade', 'wpmozo-blocks-and-addons'),
                value: 'fade'
            },
            {
                label: __('Flip', 'wpmozo-blocks-and-addons'),
                value: 'flip'
            },
            {
                label: __('Typing', 'wpmozo-blocks-and-addons'),
                value: 'typing'
            },
            {
                label: __('Slide', 'wpmozo-blocks-and-addons'),
                value: 'slide'
            },
            {
                label: __('Zoom', 'wpmozo-blocks-and-addons'),
                value: 'zoom'
            },
            {
                label: __('Bounce', 'wpmozo-blocks-and-addons'),
                value: 'bounce'
            },
            {
                label: __('Wipe', 'wpmozo-blocks-and-addons'),
                value: 'wipe'
            },
            {
                label: __('Wave', 'wpmozo-blocks-and-addons'),
                value: 'wave'
            }
        ];

    props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} initialOpen={true}>
                    <TextControl
                        label={__('Prefix Text', 'wpmozo-blocks-and-addons')}
                        value={attributes.preText}
                        onChange={(newValue) => setAttributes({preText: newValue})}
                    />
                    <TextControl
                        label={__('Animated Text ( | Separated )', 'wpmozo-blocks-and-addons')}
                        value={attributes.animatedText}
                        onChange={(newValue) => setAttributes({animatedText: newValue})}
                    />
                    <TextControl
                        label={__('Postfix Text', 'wpmozo-blocks-and-addons')}
                        value={attributes.postText}
                        onChange={(newValue) => setAttributes({postText: newValue})}
                    />
                    <SelectControl
                        label={__('Select Display Tag', 'wpmozo-blocks-and-addons')}
                        value={attributes.selectDisplayTag}
                        options={displayTag}
                        onChange={(newValue) => setAttributes({selectDisplayTag: newValue})}
                    />
                </PanelBody>
                <PanelBody title={__('Animation', 'wpmozo-blocks-and-addons')} initialOpen={false}>
                    <SelectControl
                        label={__('Select Animation', 'wpmozo-blocks-and-addons')}
                        value={attributes.selectAnimation}
                        options={animationType}
                        onChange={(newValue) => setAttributes({selectAnimation: newValue})}
                    />
                    <ToggleControl
                        label={__('Display Text in Stack', 'wpmozo-blocks-and-addons')}
                        checked={attributes.displayInStack}
                        onChange={(newValue) => setAttributes({displayInStack: newValue})}
                    />
                    <RangeControl
                        label={__('Animation Duration ( in ms )', 'wpmozo-blocks-and-addons')}
                        value={attributes.animationDuration}
                        onChange={(newValue) => setAttributes({animationDuration: newValue})}
                        min={10}
                        step={10}
                        max={5000}
                        allowReset={true}
                    />
                    <RangeControl
                        label={__('Animation Delay ( in ms )', 'wpmozo-blocks-and-addons')}
                        value={attributes.animationDelay}
                        onChange={(newValue) => setAttributes({animationDelay: newValue})}
                        min={10}
                        step={10}
                        max={5000}
                        allowReset={true}
                    />
                    <ToggleControl
                        label={__('Stop Animation On Hover', 'wpmozo-blocks-and-addons')}
                        checked={attributes.stopAnimationOnHover}
                        onChange={(newValue) => setAttributes({stopAnimationOnHover: newValue})}
                    />
                </PanelBody>
            </InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={__('Text Settings', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={true}>
                    <BaseControl className="wpmozo-button-tabs-wrap">
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('global' === attributes.typeTextSettings) ? true : false}
                                onClick={() => setAttributes({typeTextSettings: 'global'})}
                                label={__('Global', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Global', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('prePost' === attributes.typeTextSettings) ? true : false}
                                onClick={() => setAttributes({typeTextSettings: 'prePost'})}
                                label={__('Pre/Post', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Pre/Post', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('animated' === attributes.typeTextSettings) ? true : false}
                                onClick={() => setAttributes({typeTextSettings: 'animated'})}
                                label={__('Animated', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Animated', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </ButtonGroup>
                    </BaseControl>
                    { 'global' === attributes.typeTextSettings && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="globalText"
                                props={props}
                                ColorTypes={[
                                    {
                                        key: 'Color',
                                        label: __( 'Global Text Color', 'wpmozo-blocks-and-addons' ),
                                    }
                                ]}
                            />
                            <WpmozoAlignment
                                label={__('Global Text Alignment', 'wpmozo-blocks-and-addons')}
                                onChange={(newValue) => setAttributes({globalTextAlignment: newValue})}
                                value={attributes.globalTextAlignment}
                            />
                            <WpmozoTypography
                                TypographyKey="global"
                                label="Global Typography"
                                props={props}
                            />
                        </>
                    )}
                    { 'prePost' === attributes.typeTextSettings && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="prePostText"
                                props={props}
                                ColorTypes={[
                                    {
                                        key: 'Color',
                                        label: __( 'Pre/Post Text Color', 'wpmozo-blocks-and-addons' ),
                                    }
                                ]}
                            />
                            <WpmozoTypography
                                TypographyKey="prePost"
                                label="Pre Typography"
                                props={props}
                            />
                        </>
                    )}
                    { 'animated' === attributes.typeTextSettings && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="animatedText"
                                props={props}
                                ColorTypes={[
                                    {
                                        key: 'Color',
                                        label: __( 'Animated Text Color', 'wpmozo-blocks-and-addons' ),
                                    }
                                ]}
                            />
                            <WpmozoTypography
                                TypographyKey="animated"
                                label="Main Typography"
                                props={props}
                            />
                        </>
                    )}
                </PanelBody>
                <PanelBody title={__('Text Background Settings', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
                    <BaseControl className="wpmozo-button-tabs-wrap">
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('prePost' === attributes.typeBackgroundSettings) ? true : false}
                                onClick={() => setAttributes({typeBackgroundSettings: 'prePost'})}
                                label={__('Pre/Post', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Pre/Post', 'wpmozo-blocks-and-addons')}
                            </Button>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={('animated' === attributes.typeBackgroundSettings) ? true : false}
                                onClick={() => setAttributes({typeBackgroundSettings: 'animated'})}
                                label={__('Animated', 'wpmozo-blocks-and-addons')}
                            >
                                {__('Animated', 'wpmozo-blocks-and-addons')}
                            </Button>
                        </ButtonGroup>
                        { 'prePost' === attributes.typeBackgroundSettings && (
                            <>
                                <ToggleControl
                                    label={__('Use Background', 'wpmozo-blocks-and-addons')}
                                    checked={attributes.useBackgroundPrepost}
                                    onChange={(newValue) => setAttributes({useBackgroundPrepost: newValue})}
                                />
                                {attributes.useBackgroundPrepost && (
                                    <>
                                        <BaseControl
                                            label={__('Background Type', 'wpmozo-blocks-and-addons')}
                                            className="wpmozo-button-tabs-wrap"
                                        >
                                            <ButtonGroup>
                                                <Button
                                                    className="wpmozo-button-tabs-btn"
                                                    isPressed={('classic' === attributes.prePostBackgroundType) ? true : false}
                                                    onClick={() => setAttributes({prePostBackgroundType: 'classic'})}
                                                    label={__('Classic', 'wpmozo-blocks-and-addons')}
                                                >
                                                    {__('Classic', 'wpmozo-blocks-and-addons')}
                                                </Button>
                                                <Button
                                                    className="wpmozo-button-tabs-btn"
                                                    isPressed={('gradient' === attributes.prePostBackgroundType) ? true : false}
                                                    onClick={() => setAttributes({prePostBackgroundType: 'gradient'})}
                                                    label={__('Gradient', 'wpmozo-blocks-and-addons')}
                                                >
                                                    {__('Gradient', 'wpmozo-blocks-and-addons')}
                                                </Button>
                                            </ButtonGroup>
                                            {'classic' === attributes.prePostBackgroundType && (
                                                <>
                                                    <WpmozoColorPicker
                                                        ColorKey="prePostBackground"
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
                                            {'gradient'=== attributes.prePostBackgroundType && (
                                                <>
                                                    <WpmozoColorPicker
                                                        ColorKey="prePostBackground"
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
                                            <WpmozoDimensions
                                                DimensionKey='prePostDimensions'
                                                DimensionsTypes={{
                                                    padding: true,
                                                    margin: true,
                                                }}
                                                props={props}
                                            />
                                        </BaseControl>
                                    </>
                                )}
                            </>
                        )}
                        { 'animated' === attributes.typeBackgroundSettings && (
                            <>
                                <ToggleControl
                                    label={__('Use Background', 'wpmozo-blocks-and-addons')}
                                    checked={attributes.useBackgroundAnimated}
                                    onChange={(newValue) => setAttributes({useBackgroundAnimated: newValue})}
                                />
                                {attributes.useBackgroundAnimated && (
                                    <>
                                        <BaseControl
                                            label={__('Background Type', 'wpmozo-blocks-and-addons')}
                                            className="wpmozo-button-tabs-wrap"
                                        >
                                            <ButtonGroup>
                                                <Button
                                                    className="wpmozo-button-tabs-btn"
                                                    isPressed={('classic' === attributes.animatedBackgroundType) ? true : false}
                                                    onClick={() => setAttributes({animatedBackgroundType: 'classic'})}
                                                    label={__('Classic', 'wpmozo-blocks-and-addons')}
                                                >
                                                    {__('Classic', 'wpmozo-blocks-and-addons')}
                                                </Button>
                                                <Button
                                                    className="wpmozo-button-tabs-btn"
                                                    isPressed={('gradient' === attributes.animatedBackgroundType) ? true : false}
                                                    onClick={() => setAttributes({animatedBackgroundType: 'gradient'})}
                                                    label={__('Gradient', 'wpmozo-blocks-and-addons')}
                                                >
                                                    {__('Gradient', 'wpmozo-blocks-and-addons')}
                                                </Button>
                                            </ButtonGroup>
                                            {'classic' === attributes.animatedBackgroundType && (
                                                <>
                                                    <WpmozoColorPicker
                                                        ColorKey="animatedBackground"
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
                                            {'gradient'=== attributes.animatedBackgroundType && (
                                                <>
                                                    <WpmozoColorPicker
                                                        ColorKey="animatedBackground"
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
                                            <WpmozoDimensions
                                                DimensionKey='animatedDimensions'
                                                DimensionsTypes={{
                                                    padding: true,
                                                    margin: true,
                                                }}
                                                props={props}
                                            />
                                        </BaseControl>
                                    </>
                                )}
                            </>
                        )}
                    </BaseControl>
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;
>>>>>>> 5f7ae3c (WIP: imported module but does not working.)
