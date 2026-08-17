// deprecated/version-1.js
import generateDynamicStyle from './style';
import { useBlockProps } from '@wordpress/block-editor';

const V1 = {
    attributes: {
        parentAtts: { type: "object" },

		ID: { type: "string" },
		className: { type: "string" },
		buttonText: {type: "string", default: "WPMozo Title"},
		buttonUrl: {type: "string", default: ""},
		buttonLinkTarget: {type: "string", default: "same"},
		buttonSecondaryText: {type: "string"},
		secondaryTextColor: {type: "string"},
		secondaryTextFontSize: {type: "string"},
		secondaryTextLetterSpacing: {type: "string"},
		secondaryTextDecoration: {type: "string", default: "none"},
		secondaryTextLetterCase: {type: "string"},
		secondaryTextLineHeight: {type: "string"},
		secondaryTextFontAppearance: {type: "object", default: {fontStyle: "", fontWeight: ""}},
		buttonColor: {type: "string"},
		buttonAlign: {type: "string"},
		buttonFontSize: {type: "string"},
		buttonLetterSpacing: {type: "string"},
		buttonDecoration: {type: "string", default: "none"},
		buttonLetterCase: {type: "string"},
		buttonLineHeight: {type: "string"},
		buttonFontAppearance: {type: "object", default: {fontStyle: "", fontWeight: ""}},
		buttonContainermargin: {type: "object"},
		buttonContainerpadding: {type: "object"},
		buttonContainerborder: {type: "object"},
		buttonContainerborderRadius: {type: "object"},
		iconButton: {type: "boolean", default: false},
		icon: {type: "string"},
		iconColor: {type: "string"},
		buttonMediaPosition: {type: "string", default: "after"},
		showMediaOnHover: {type: "boolean", default: false},
		iconFontSize: {type: "number"},
		iconmargin: {type: "object"},
		iconpadding: {type: "object"},
		filledBackgroundType: {type: "string"},
		classicBackgroundColor: {type: "string"},
		classicBackgroundImage: {type: "string"},
		gradientBackgroundColor: {type: "string"},
		backgroundFillStyle: {type: "string", default: "default_fill"},
		filledBackgroundTypeHover: {type: "string"},
		ButtonHoverColor: {type: "string"},
		ButtonHoversecColor: {type: "string"},
		ButtonHoverIconColor: {type: "string"},
		classicBackgroundColorHover: {type: "string"},
		classicBackgroundImageHover: {type: "string"},
		gradientBackgroundColorHover: {type: "string"},

		primaryAlign: {type: "string"},
		secAlign: {type: "string"}
    },
    save( { attributes } ) {
        const clientId   = attributes.ID;

        let showOnHover = (attributes.showMediaOnHover) ? ' show-on-hover' : '',
            bkStyle = attributes.backgroundFillStyle ? ` wpmozo_button_${attributes.backgroundFillStyle}` : '';

        return (
            <>
                <style>
                    { generateDynamicStyle({ attributes }) }
                </style>
                <div {...useBlockProps.save({className: "wpmozo-advanced-button-child", id: `block-${clientId}`})}>
                    {/* Button container */}
                    <div className="wpmozo-button-container">
                        <div className="wpmozo-button-item">
                            <div className="wpmozo-button-wrapper">

                                {/* Main button link */}
                                <a
                                    className={`wpmozo-button-link${showOnHover}${bkStyle}`} // Dynamic classes (hover effect + background style)
                                    href="javascript:void(0)" // Prevents navigation
                                    {...(attributes.buttonLinkTarget !== 'same' ? {target: "_blank"} : {})} // Open in new tab if target ≠ 'same'
                                >
                                    {/* Primary text + optional icon */}
                                    <span className="wpmozo-primary-text-with-icon">
                                        <span className="wpmozo-button-text wpmozo-button-icon">
                                            {attributes.buttonText} {/* Button text */}
                                        </span>

                                        {/* Icon (rendered only if enabled) */}
                                        {true === attributes.iconButton && (
                                            <i className={attributes.icon + ' wpmozo-bna-button-icon'}></i>
                                        )}
                                    </span>

                                    {/* Secondary text (optional) */}
                                    {attributes.buttonSecondaryText && (
                                        <span className="wpmozo-button-secondary-text">
                                            {attributes.buttonSecondaryText}
                                        </span>
                                    )}

                                    {/* Background hover/animation effect */}
                                    <span className="wpmozo-background-effect-wrap"></span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;