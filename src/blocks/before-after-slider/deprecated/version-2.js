// deprecated/version-2.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import ReactDOMServer from 'react-dom/server';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		
		globalcolorHandle: { type: "string" },
		handleOffset: { type: "number", default: 0.5 },
		moveHandleOnClick: { type: "boolean", default: false },
		moveHandleOnHover: { type: "boolean", default: false },
		sliderOrientation: { type: "string", default: "horizontal" },
		
		overlayOnHover: { type: "boolean", default: false },
		globalcolorOverlay: { type: "string" },
		
		beforeImage: { type: "string" },
		beforeHasLabel: { type: "boolean", default: false },
		beforeLabelOnHover: { type: "boolean", default: false },
		beforeLabel: { type: "string", default: "Before" },
		beforeLabelbackground: { type: "string" },
		beforeLabeltext: { type: "string" },
		beforeLabelFontSize: { type: "string" },
		beforeLabelFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		beforeLabelLetterSpacing: { type: "string" },
		beforeLabelDecoration: { type: "string" },
		beforeLabelLetterCase: { type: "string" },
		beforeLabelLineHeight: { type: "string" },
		
		afterImage: { type: "string" },
		afterHasLabel: { type: "boolean", default: false },
		afterLabelOnHover: { type: "boolean", default: false },
		afterLabel: { type: "string", default: "After" },
		afterLabelbackground: { type: "string" },
		afterLabeltext: { type: "string" },
		afterLabelFontSize: { type: "string" },
		afterLabelFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		afterLabelLetterSpacing: { type: "string" },
		afterLabelDecoration: { type: "string" },
		afterLabelLetterCase: { type: "string" },
		afterLabelLineHeight: { type: "string" }
    },
    save( { attributes } ) {
        const ID = attributes.ID;
        const clientId = attributes?.ID && ID;

        const beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : wpmozo_bna_editor_object.placeholderImg;
        const afterImage  = ( attributes.afterImage )  ? attributes.afterImage  : wpmozo_bna_editor_object.placeholderImg;

        let beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
            afterLabel  = ( attributes.afterHasLabel )  ? attributes.afterLabel  : '';

        return ( <>
            <style>{ generateDynamicStyle( { attributes, clientId } ) }</style>
            <div id={ `block-${ clientId }` } { ...useBlockProps.save( {className: 'wpmozo-bna-before-after-main ' + attributes.className} ) } >
                <div className="wpmozo-bna-before-after-image-wrapper"
                    data-before-label={ beforeLabel }
                    data-after-label={ afterLabel }
                    data-handle-offset={ attributes.handleOffset || 0.5 }
                    data-slider-orientation={ attributes.sliderOrientation || 'horizontal' }
                    data-move-onhover={ attributes.moveHandleOnHover || 'false' }
                    data-move-onclick={ attributes.moveHandleOnClick || 'false' }
                    data-no-overlay={ attributes.overlayOnHover ? 'false' : 'true' }
                >
                    <img src={ beforeImage } />
                    <img src={ afterImage } />
                </div>
            </div>
        </> );
    },
};

export default V2;