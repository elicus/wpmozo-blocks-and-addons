// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import ReactDOMServer from 'react-dom/server';

const V1 = {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: 'string' },
        
        globalcolorHandle: { type: 'string' },
        handleOffset: { type: 'number' },
        moveHandleOnClick: { type: 'boolean', default: false },
        moveHandleOnHover: { type: 'boolean', default: false },
        
        sliderOrientation: { type: 'string', default: 'horizontal' },
        
        overlayOnHover: { type: 'boolean', default: false },
        globalcolorOverlay: { type: 'string' },
        
        beforeImage: { type: 'string' },
        beforeHasLabel: { type: 'boolean', default: false },
        beforeLabelOnHover: { type: 'boolean', default: false },
        beforeLabel: { type: 'string', default: 'Before' },
        beforeLabelbackground: { type: 'string' },
        beforeLabeltext: { type: 'string' },
        beforeLabelFontSize: { type: 'string' },
        beforeLabelFontAppearance: {
            type: 'object',
            default: { fontStyle: '', fontWeight: '' },
        },
        beforeLabelLetterSpacing: { type: 'string' },
        beforeLabelDecoration: { type: 'string' },
        beforeLabelLetterCase: { type: 'string' },
        beforeLabelLineHeight: { type: 'string' },
        
        afterImage: { type: 'string' },
        afterHasLabel: { type: 'boolean', default: false },
        afterLabelOnHover: { type: 'boolean', default: false },
        afterLabel: { type: 'string', default: 'After' },
        afterLabelbackground: { type: 'string' },
        afterLabeltext: { type: 'string' },
        afterLabelFontSize: { type: 'string' },
        afterLabelFontAppearance: {
            type: 'object',
            default: { fontStyle: '', fontWeight: '' },
        },
        afterLabelLetterSpacing: { type: 'string' },
        afterLabelDecoration: { type: 'string' },
        afterLabelLetterCase: { type: 'string' },
        afterLabelLineHeight: { type: 'string' },
    },
    migrate(attributes) {
        return {
            ...attributes,
            afterLabelFontAppearance: attributes.afterLabelFontAppearance,
            beforeLabelFontAppearance: attributes.beforeLabelFontAppearance,
        };
    },
    save( { attributes } ) {
        const WPMozoEditorObj = wpmozo_bna_editor_object,
            elId = `block-${attributes.ID}`,
            beforeImage = attributes.beforeImage || WPMozoEditorObj.placeholderImg,
            afterImage = attributes.afterImage || WPMozoEditorObj.placeholderImg,
            beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '',
            afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '',
            no_overlay = attributes.overlayOnHover ? false : true,
            handleOffset = attributes.handleOffset,
            sliderOrientation = attributes.sliderOrientation,
            moveHandleOnHover = attributes.moveHandleOnHover,
            moveHandleOnClick = attributes.moveHandleOnClick;

        return (
            <div {...useBlockProps.save()}>
                <div
                    className="wpmozo-bna-before-after-image-wrapper"
                    id={elId}
                    data-before-label={beforeLabel}
                    data-after-label={afterLabel}
                    data-handle-offset={handleOffset}
                    data-slider-orientation={sliderOrientation}
                    data-move-onhover={moveHandleOnHover}
                    data-move-onclick={moveHandleOnClick}
                    data-no-overlay={no_overlay}
                >
                    <img src={beforeImage} />
                    <img src={afterImage} />
                </div>
            </div>
        );
    },
};

export default V1;