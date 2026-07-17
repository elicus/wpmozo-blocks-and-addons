// deprecated/version-2.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import {wpmozo_is_empty} from '../../../common/utils.js';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		animationType: { type: "string", default: "flip" },
		flipDirection: { type: "string", default: "top" },
		depth3dEffect: { type: "boolean", default: true },
		shakeOnFlip: { type: "boolean", default: false },
		flipSpeed: { type: "number", default: 700 },

		globalTitleColor: { type: "string", default: "#fff" },
		globalContentColor: { type: "string", default: "#fff" },
		globalTitletext: { type: "string" },
		globalTitleFontSize: { type: "string" },
		globalTitleFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		globalTitleLetterSpacing: { type: "string" },
		globalTitleDecoration: { type: "string" },
		globalTitleLetterCase: { type: "string" },
		globalTitleLineHeight: { type: "string" },
		globalContenttext: { type: "string" },
		globalContentFontSize: { type: "string" },
		globalContentFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		globalContentLetterSpacing: { type: "string" },
		globalContentDecoration: { type: "string" },
		globalContentLetterCase: { type: "string" },
		globalContentLineHeight: { type: "string" },

		frontTitle: { type: "string", default: "Front Title" },
		frontHeadingLevel: { type: "string", default: "h2" },
		frontTitleColor: { type: "string" },
		frontTitletext: { type: "string" },
		frontTitleFontSize: { type: "string" },
		frontTitleFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		frontTitleLetterSpacing: { type: "string" },
		frontTitleDecoration: { type: "string" },
		frontTitleLetterCase: { type: "string" },
		frontTitleLineHeight: { type: "string" },

		frontContnet: { type: "string", default: "Here you can set front text." },
		frontContentColor: { type: "string" },
		frontContenttext: { type: "string" },
		frontContentFontSize: { type: "string" },
		frontContentFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		frontContentLetterSpacing: { type: "string" },
		frontContentDecoration: { type: "string" },
		frontContentLetterCase: { type: "string" },
		frontContentLineHeight: { type: "string" },
		frontContentHorAlignment: { type: "string", default: "center" },
		frontContentVerAlignment: { type: "string", default: "center" },

		frontElType: { type: "string", default: "icon" },
		frontBackgroundColor: { type: "string", default: "#543EC4" },
		frontElementAlign: { type: "string", default: "top" },

		frontElIcon: { type: "string", default: "fas fa-star" },
		frontIconColor: { type: "string", default: "#fff" },
		frontIconSize: { type: "string" },
		frontIconSizeUnit: { type: "string" },
		frontIconStyle: { type: "boolean", default: false },
		frontIconShape: { type: "string", default: "square" },
		frontIconShapeBackground: { type: "string", default: "#000000" },
		frontIconHasShapeBorder: { type: "boolean", default: false },
		frontIconShapeborderRadius: { type: "string" },
		frontIconShapeborder: { type: "object" },
		frontIconShapeBorderColor: { type: "string" },

		frontElImage: { type: "string" },
		frontImageAlignment: { type: "string", default: "center" },
		frontImageWidth: { type: "string", default: "100px" },
		frontImageWidthUnit: { type: "string", default: "px" },

		frontFlipboxborder: { type: "object" },
		frontFlipboxborderRadius: { type: "string" },
		frontFlipboxBackground: { type: "string", default: "#543EC4" },
		frontDimensionspadding: {
			type: "object",
			default: { top: "10px", right: "10px", bottom: "10px", left: "10px" }
		},
		flipboxWidth: { type: "string", default: "100%" },
		flipboxWidthUnit: { type: "string", default: "%" },

		backTitle: { type: "string", default: "Back Title" },
		backHeadingLevel: { type: "string", default: "h2" },
		backTitleColor: { type: "string" },
		backTitletext: { type: "string" },
		backTitleFontSize: { type: "string" },
		backTitleFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		backTitleLetterSpacing: { type: "string" },
		backTitleDecoration: { type: "string" },
		backTitleLetterCase: { type: "string" },
		backTitleLineHeight: { type: "string" },

		backContnet: { type: "string", default: "Here you can set back text." },
		backContentColor: { type: "string" },
		backContenttext: { type: "string" },
		backContentFontSize: { type: "string" },
		backContentFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		backContentLetterSpacing: { type: "string" },
		backContentDecoration: { type: "string" },
		backContentLetterCase: { type: "string" },
		backContentLineHeight: { type: "string" },
		backContentHorAlignment: { type: "string", default: "center" },
		backContentVerAlignment: { type: "string", default: "center" },

		backElType: { type: "string", default: "icon" },
		backBackgroundColor: { type: "string", default: "#863AD0" },
		backElementAlign: { type: "string", default: "top" },

		backElIcon: { type: "string", default: "fas fa-star" },
		backIconColor: { type: "string", default: "#fff" },
		backIconSize: { type: "string" },
		backIconSizeUnit: { type: "string" },
		backIconStyle: { type: "boolean", default: false },
		backIconShape: { type: "string", default: "square" },
		backIconShapeBackground: { type: "string", default: "#000000" },
		backIconHasShapeBorder: { type: "boolean", default: false },
		backIconShapeborderRadius: { type: "string" },
		backIconShapeborder: { type: "object" },

		backElImage: { type: "string" },
		backImageAlignment: { type: "string", default: "center" },
		backImageWidth: { type: "string", default: "100px" },
		backImageWidthUnit: { type: "string", default: "px" },

		backFlipboxborder: { type: "object" },
		backFlipboxborderRadius: { type: "string" },
		backFlipboxBackground: { type: "string", default: "#863AD0" },
		backDimensionspadding: {
			type: "object",
			default: { top: "10px", right: "10px", bottom: "10px", left: "10px" }
		},
		backIconShapeBorderColor: { type: "string" },

		backHasButton: { type: "boolean", default: false },
		backBtnText: { type: "string", default: "Click ME!" },
		backBtnUrl: { type: "string", default: "#" },
		backBtnIcon: { type: "string", default: "fas fa-arrow-right" },
		backBtnIconPosition: { type: "string", default: "after" },
		backBtnIconOnHover: { type: "boolean", default: false },
		backBtnColor: { type: "string", default: "#fff" },
		backBtnBackground: { type: "string" },
		backBtntext: { type: "string" },
		backBtnFontSize: { type: "string" },
		backBtnFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		backBtnLetterSpacing: { type: "string" },
		backBtnDecoration: { type: "string", default: "none" },
		backBtnLetterCase: { type: "string" },
		backBtnLineHeight: { type: "string" },
		backBtnborder: {
			type: "object",
			default: { width: "1px", style: "solid", color: "#fff" }
		},
		backBtnborderRadius: { type: "string", default: "3px" },
		backBtnDimensionspadding: {
			type: "object",
			default: { top: "5px", right: "8px", bottom: "5px", left: "8px" }
		},
		backBtnDimensionsmargin: { type: "object" }
    },
    save( { attributes } ) {
        const clientId = attributes.ID,
        layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2';

        let backBtnIcon = (
            <i className={ attributes.backBtnIcon }></i>
        ),
        backBtnOnHover = ( attributes.backBtnIconOnHover ) ? ' show-on-hover' : '',
        frontHexagonIcon = (
            <div className="wpmozo-bna-hexagon-wrap">
                <div className="wpmozo-bna-hexagon-shape">
                    <i className={ attributes.frontElIcon }></i>
                </div>
            </div>
        ),
        backHexagonIcon = (
            <div className="wpmozo-bna-hexagon-wrap">
                <div className="wpmozo-bna-hexagon-shape">
                    <i className={ attributes.backElIcon }></i>
                </div>
            </div>
        );

        return ( <>
            <style>{ generateDynamicStyle({ attributes, clientId }) }</style>

            <div id={`block-${clientId}`} { ...useBlockProps.save( { className: 'wpmozo-bna-flip-box-main ' + attributes.className } ) }>
                <div className={`wpmozo-bna-flip-box-wrap${layoutType}`} flip-direction={ attributes.flipDirection }>
                    <div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-front">
                        <div className="wpmozo-bna-flip-box-inner">
                            { 'none' !== attributes.frontElType && (
                                <div className={ 'icon' === attributes.frontElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
                                    { 'icon' === attributes.frontElType && ( 
                                        <>
                                            { "hexagon" !== attributes.frontIconShape && (
                                                <i className={ attributes.frontElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.frontIconShape && 
                                                frontHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.frontElType && (
                                        <img src={ attributes.frontElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                { ! wpmozo_is_empty( attributes.frontTitle ) && 
                                    <div className="wpmozo-bna-flip-box-heading-wrap">
                                        <RichText.Content
                                            className="wpmozo-bna-flip-box-title"
                                            tagName={ attributes.frontHeadingLevel }
                                            value={ attributes.frontTitle }
                                        />
                                    </div>
                                }
                                { ! wpmozo_is_empty( attributes.frontContnet ) && 
                                    <div className="wpmozo-bna-flip-box-description">
                                        <RichText.Content
                                            value={ attributes.frontContnet }
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-back">
                        <div className="wpmozo-bna-flip-box-inner">
                            { 'none' !== attributes.backElType && (
                                <div className={ 'icon' === attributes.backElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
                                    { 'icon' === attributes.backElType && ( 
                                        <>
                                            { "hexagon" !== attributes.backIconShape && (
                                                <i className={ attributes.backElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.backIconShape && 
                                                backHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.backElType && (
                                        <img src={ attributes.backElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                { ! wpmozo_is_empty( attributes.backTitle ) && 
                                    <div className="wpmozo-bna-flip-box-heading-wrap">
                                        <RichText.Content
                                            className="wpmozo-bna-flip-box-title"
                                            tagName={ attributes.backHeadingLevel }
                                            value={ attributes.backTitle }
                                        />
                                    </div>
                                }
                                { ! wpmozo_is_empty( attributes.backContnet ) && 
                                    <div className="wpmozo-bna-flip-box-description">
                                        <RichText.Content
                                            value={ attributes.backContnet }
                                        />
                                    </div>
                                }
                            </div>
                            { 
                                attributes.backHasButton &&
                                ! wpmozo_is_empty( attributes.backBtnText ) && 
                                ! wpmozo_is_empty( attributes.backBtnUrl ) &&
                                <div className="wpmozo-bna-flip-box-button-wrap">
                                    <div className="wpmozo-bna-flip-box-button-wrap-inner">
                                        <a 
                                            className={`wpmozo-bna-flip-box-button${backBtnOnHover}`}
                                            target="_blank"
                                            href={ attributes.backBtnUrl }
                                        >
                                            { attributes.backBtnText }
                                            { backBtnIcon }
                                        </a>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V2;