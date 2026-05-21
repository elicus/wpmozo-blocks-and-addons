import { useBlockProps } from '@wordpress/block-editor';

const deprecatedSave = ({ attributes }) => {
const WPMozoEditorObj = wpmozo_bna_editor_object;
    const elId = `block-${attributes.ID}`;
    const beforeImage = attributes.beforeImage || WPMozoEditorObj.placeholderImg;
    const afterImage = attributes.afterImage || WPMozoEditorObj.placeholderImg;
    const beforeLabel = attributes.beforeHasLabel ? attributes.beforeLabel : '';
    const afterLabel = attributes.afterHasLabel ? attributes.afterLabel : '';
    const no_overlay = attributes.overlayOnHover ? false : true;
    const handleOffset = attributes.handleOffset;
    const sliderOrientation = attributes.sliderOrientation;
    const moveHandleOnHover = attributes.moveHandleOnHover;
    const moveHandleOnClick = attributes.moveHandleOnClick;

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
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: 'string' },
        globalcolorHandle: { type: 'string' },
        globalcolorOverlay: { type: 'string' },
        sliderOrientation: { type: 'string', default: 'horizontal' },
        handleOffset: { type: 'number' },
        moveHandleOnHover: { type: 'boolean', default: false },
        moveHandleOnClick: { type: 'boolean', default: false },
        overlayOnHover: { type: 'boolean', default: false },
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
    save: deprecatedSave,
};
