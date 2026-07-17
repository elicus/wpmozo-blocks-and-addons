// deprecated/version-1.js
import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "../style";
import {wpmozo_is_empty} from '../../../common/utils.js';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		containermargin: { type: "object"},
		containerpadding: { type: "object" },
		containerBackgroundColor: {type: "string"},
		containerborder: {type: "object"},
		containerborderRadius: {type: "string"},

		image: { type: "string" },
		imageborder: { type: "object", default: "" },
		imageborderRadius: { type: "string", default: "" },
		imageDimensionspadding: { type: "object", default: "" },

		icon: { type: "string", default: "far fa-star" },
		iconColor: { type: "string" },
		iconFontSize: { type: "number", default: "" },
		iconAlign: { type: "string", default: "left" },
		styleIcon: { type: "boolean", default: false },
		showShapeBorder: { type: "boolean", default: false },
		iconShape: { type: "string", default: "square" },
		iconBackground: { type: "string", default: "" },
		shapeBorderColor: { type: "string", default: "" },
		iconmargin: { type: "object"},
		iconpadding: { type: "object" },

		imageHeight: { type: "number", default: 200 },
		imageWidth: { type: "number", default: 200 },

		title: { type: "string", default: "Your title here." },
		titleAlign: { type: "string", default: "left" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string" },
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		titleLevel: { type: "string", default: "h2" },
		titleFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		titleFontStyle: { type: "string" },
		titleFontWeight: { type: "string" },

		titleHoverColor: { type: "string" },
		titleHoverFontSize: { type: "string" },
		titleHoverLetterSpacing: { type: "string" },
		titleHoverDecoration: { type: "string" },
		titleHoverLetterCase: { type: "string" },
		titleHoverLineHeight: { type: "string" },
		titleHoverFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		titleHoverFontStyle: { type: "string" },
		titleHoverFontWeight: { type: "string" },

		description: {
			type: "string",
			default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		descriptionTextAlign: { type: "string", default: "left" },
		descriptionTextColor: { type: "string" },
		descriptionTextFontSize: { type: "string" },
		descriptionTextLetterSpacing: { type: "string" },
		descriptionTextDecoration: { type: "string" },
		descriptionTextLetterCase: { type: "string" },
		descriptionTextLineHeight: { type: "string" },

		descriptionHoverTextColor: { type: "string" },
		descriptionHoverTextFontSize: { type: "string" },
		descriptionHoverTextLetterSpacing: { type: "string" },
		descriptionHoverTextDecoration: { type: "string" },
		descriptionHoverTextLetterCase: { type: "string" },
		descriptionHoverTextLineHeight: { type: "string" },

		contentAlign: { type: "string", default: "left" },
		contentColor: { type: "string" },
		contentHoverColor: { type: "string" },
		contentFontSize: { type: "string" },
		contentLetterSpacing: { type: "string" },
		contentDecoration: { type: "string" },
		contentLetterCase: { type: "string" },
		contentLineHeight: { type: "string" },
		contentFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		contentBackgroundColor: { type: "string" },
		contentpadding: {
			type: "object",
			default: {
				top: "",
				right: "15px",
				bottom: "",
				left: "15px"
			}
		},

		contentHoverBackgroundColor: { type: "string" },
		contentHoverpadding: {
			type: "object",
			default: {
				top: "",
				right: "15px",
				bottom: "",
				left: "15px"
			}
		},

		showButton: { type: "boolean", default: false },
		buttonText: { type: "string", default: "Read More" },
		buttonUrl: { type: "string", default: "" },
		buttonLinkTarget: { type: "string", default: "same" },
		buttonTextColor: { type: "string" },
		buttonTextBackground: { type: "string" },
		buttonTextHoverColor: { type: "string" },
		buttonTextHoverBackground: { type: "string" },
		buttonTextAlign: { type: "string", default: "left" },
		buttonTextFontSize: { type: "string" },
		buttonTextLetterSpacing: { type: "string" },
		buttonTextDecoration: { type: "string",default: "none" },
		buttonTextLetterCase: { type: "string" },
		buttonTextLineHeight: { type: "string" },
		buttonTextFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		buttonIcon: { type: "string", default: "fas fa-arrow-right" },
		buttonImage: { type: "string" },
		buttonMediaPosition: { type: "string", default: "after" },
		buttonMediaType: { type: "string", default: "icon" },
		buttonTextFontStyle: { type: "string" },
		buttonTextFontWeight: { type: "string" },
		buttonTextborder: { type: "object", default: { width: "1px", style: "solid", color: "#000" } },
		buttonTextborderRadius: { type: "string", default: "3px" },

		buttonDimensionspadding: { type: "object", default: { top: "5px", right: "8px", bottom: "5px", left: "8px" } },
		buttonDimensionsmargin: { type: "object" },

		showMediaOnHover: { type: "boolean", default: false }
    },
    save( { attributes } ) {
        const clientId    = attributes.ID;

        const image       = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;
        const showOnHover = ( attributes.showMediaOnHover ) ? ' show-on-hover' : '';
        const linkTarget  = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self';
    
        let buttonMedia = '';
    
        if( 'icon' === attributes.buttonMediaType &&  attributes.buttonIcon ){
            buttonMedia = <i className={ attributes.buttonIcon }></i>;
        } else if ( 'image' === attributes.buttonMediaType &&  attributes.buttonImage ) {
            buttonMedia = <img src={ attributes.buttonImage } />;
        }

        const button = (
            attributes.showButton &&
            ! wpmozo_is_empty( attributes.buttonText ) && 
            ! wpmozo_is_empty( attributes.buttonUrl ) &&
            <div className="wpmozo-bna-image-card-button-wrap">
                <div className="wpmozo-bna-image-card-button-wrap-inner">
                    <a className={`wpmozo-bna-image-card-button${showOnHover}`}
                        target={linkTarget}
                        href={ attributes.buttonUrl }
                    >
                        { attributes.buttonText }{buttonMedia}
                    </a>
                </div>
            </div>
        );

        return ( <>
            <style>{ generateDynamicStyle( { attributes, clientId } ) }</style>
            
            <div id={`block-${attributes.ID}`} {...useBlockProps.save( { className: 'wpmozo-bna-image-card-main ' + attributes.className } ) }>
                <div className="wpmozo-bna-image-card-wrapper">
                    <div className="wpmozo-bna-image-card-wrapper-inner">
                        <img className="wpmozo-bna-image-card-image" src={image}/>
                    </div>
                    <div className="wpmozo-bna-image-card-content-wrapper">
                        { attributes.icon && (
                            <div className="wpmozo-bna-image-card-icon-wrapper"> 
                                { ! attributes.styleIcon && (
                                    <i className={ attributes.icon }></i>
                                ) }
                                { attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                                    <i className={ attributes.icon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.showShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
                                ) }
                                { attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                                    <div className="wpmozo-bna-image-card-icon-inner-wrap shape-hexagon">
                                        <div className={"hexagon" + ( true === attributes.showShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
                                            <i className={ attributes.icon }></i>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        ) }

                        <div className="wpmozo-bna-image-card-inner-content-wrapper">
                            <RichText.Content
                                className="wpmozo-bna-image-card-title"
                                tagName={ attributes.titleLevel }
                                value={ attributes.title }
                            />
                            <RichText.Content
                                className="wpmozo-bna-image-card-content"
                                tagName="div"
                                value={ attributes.description }
                            />
                            { attributes.showButton && attributes.buttonText?.trim() && (
                                button
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;