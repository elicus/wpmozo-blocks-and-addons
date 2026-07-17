// deprecated/version-2.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from '../style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		separatorType: { type: "string", default: "line" },
		lineUseWith: { type: "string", default: "onlySeparator" },
		lineStyle: { type: "string", default: "solid" },

		separatorText: { type: "string", default: "Add text here" },
		textNormalColor: { type: "string", default: "#222222" },
		textHoverColor: { type: "string", default: "#000000" },
		textNormalFontSize: { type: "string" },
		textNormalFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
		textNormalLetterSpacing: { type: "string" },
		textNormalDecoration: { type: "string" },
		textNormalLetterCase: { type: "string" },
		textNormalLineHeight: { type: "string" },
		textHoverFontSize: { type: "string" },
		textHoverFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
		textHoverLetterSpacing: { type: "string" },
		textHoverDecoration: { type: "string" },
		textHoverLetterCase: { type: "string" },
		textHoverLineHeight: { type: "string" },
		textAlign: { type: "string", default: "center" },

		separatorImage: { type: "string", default: "" },
		imageWidth: { type: "number" },
		imagePosition: { type: "string", default: "center" },

		separatorIcon: { type: "string", default: "" },
		iconPosition: { type: "string", default: "center" },
		enableIconFontSize: { type: "boolean", default: false },
		iconFontSize: { type: "number", default: 32 },
		iconColor: { type: "string" },
		styleIcon: { type: "boolean", default: false },
		iconShape: { type: "string", default: "square" },
		shapeBackground: { type: "string" },
		enableShapeBorder: { type: "boolean", default: false },
		shapeBorderColor: { type: "string" },

		separatorThickness: { type: "number", default: 3 },
		separatorGradient: { type: "string" },
		separatorColor: { type: "string", default: "#2b87da" },
		shadowColor: { type: "string", default: "#2b87da" }
    },
    save( { attributes } ) {
        const ID = attributes.ID;
	
        let position = '';
        if ( 'line' === attributes.separatorType ) {
            if( 'onlySeparator' === attributes.lineUseWith ) {
                position = 'align-none';
            } else if ( 'textSeparator' === attributes.lineUseWith ) {
                position = `align-${undefined !== attributes.textAlign ? attributes.textAlign : 'none'}`;
            } else if ( 'iconSeparator' === attributes.lineUseWith ) {
                position = `align-${attributes.iconPosition}`;
            } else {
                position = `align-${attributes.imagePosition}`;
            }
        }

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-separator ' + attributes.className } ) }>
                { "line" === attributes.separatorType && (
                    <div className={`wpmozo-bna-separator-container ${position}`}>
                        <div className="wpmozo-bna-line wpmozo-bna-line-before"></div>
                            { 'textSeparator' === attributes.lineUseWith && (
                                <div className="wpmozo-bna-text-wrapper">
                                    <p>{`${attributes.separatorText}`}</p>
                                </div>
                            ) }
                            { 'iconSeparator' === attributes.lineUseWith && true !== attributes.styleIcon && (
                                <div className="wpmozo-bna-icon-wrapper">
                                    <i className={ attributes.separatorIcon }></i>
                                </div>
                            ) }
                            { 'iconSeparator' === attributes.lineUseWith && true === attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                                <div className="wpmozo-bna-icon-wrapper">
                                    <i className={ attributes.separatorIcon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
                                </div>

                            ) }
                            { 'iconSeparator' === attributes.lineUseWith && true === attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                                <div className="wpmozo-bna-icon-wrapper shape-hexagon">
                                    <div className={"hexagon" + ( true === attributes.enableShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
                                        <i className={ attributes.separatorIcon }></i>
                                    </div>
                                </div>
                            ) }
                            { 'imageSeparator' === attributes.lineUseWith && (
                                <img className="wpmozo-bna-separator-image" src={( attributes.separatorImage ) ? attributes.separatorImage : "WPMozoEditorObj.placeholderImg" }/>
                            ) }
                        <div className="wpmozo-bna-line wpmozo-bna-line-after"></div>
                    </div>
                ) }
                { 'shadow' === attributes.separatorType && (
                    <div className="wpmozo-bna-shadow"></div>
                ) }
            </div>
        </> );
    },
};

export default V2;