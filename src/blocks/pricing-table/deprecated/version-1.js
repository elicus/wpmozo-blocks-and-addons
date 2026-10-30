// deprecated/version-1.js
import {RichText, useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		wrapperborder:{type: "object"},
		wrapperborderRadius:{type: "string"},

		title: { type: "string", default: "WPMozo Pricing" },
		titleLeval: { type: "string", default: "h2" },
		subtitle: { type: "string", default: "Ultimate plan" },
		headerGraphics: { type: "string", default: "icon" },
		headerIcon: { type: "string", default: "fas fa-star" },

		headerImage: { type: "string" },
		currencySymbol: { type: "string", default: "$" },
		customSymbol: { type: "string" },
		price: { type: "string", default: 99.00 },
		period: { type: "string", default: "Year" },
		features: {
			type: "array",
			default: [
				{ list: "feature 1", icon: "fas fa-check"},
				{ list: "feature 2", icon: "fas fa-check"},
				{ list: "feature 3", icon: "fas fa-check"}
			]
		},
		featuresIconFontSize: {type: "number"},
		featuresSpacing: {type: "number"},
		featuresMargin: {type: "number"},
		showButton: { type: "boolean", default: false },
		buttonText: { type: "string", default: "Read More" },
		buttonUrl: { type: "string" },
		buttonLinkTarget: { type: "string", default: "same" },
		buttonIconType: { type: "string", default: "icon" },
		buttonIcon: { type: "string", default: "" },
		buttonIconImage: { type: "string" },
		buttonIconPosition: { type: "string", default: "icon-after" },
		showIconOnHover: { type: "boolean", default: false },
		titleLavel: { type: "string", default: "h2" },
		titleAlign: { type: "string", default: "center" },
		titleColor: { type: "string" },
		titleFontSize: { type: "string" },
		titleFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		subTitleColor: { type: "string" },
		subTitleAlign: { type: "string", default: "center" },
		subTitleFontSize: { type: "string" },
		subTitleFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		subTitleLetterSpacing: { type: "string" },
		subTitleDecoration: { type: "string" },
		subTitleLetterCase: { type: "string" },
		subTitleLineHeight: { type: "string" },
		useIconFontSize: { type: "boolean", default: false },
		iconFontSize: { type: "string" },
		imageWidth: { type: "string", default: "100px" },
		imageHeight: { type: "string", default: "100px" },
		iconAlign: { type: "string", default: "center" },
		iconColor: { type: "string" },
		headerGraphicsDimensionspadding: { type: "object" },
		headerGraphicsDimensionsmargin: { type: "object" },
		backgroundColor: { type: "string" },
		mainDimensionspadding: { type: "object" },
		mainDimensionsmargin: { type: "object" },
		currencyColor: { type: "string" },
		currencyFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		currencyLetterSpacing: { type: "string" },
		currencyDecoration: { type: "string" },
		currencyLetterCase: { type: "string" },
		currencyLineHeight: { type: "string" },
		currencyFontSize: { type: "string" },
		priceColor: { type: "string" },
		priceFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		pricealign: {type: "string"},
		priceLetterSpacing: { type: "string" },
		priceDecoration: { type: "string" },
		priceLetterCase: { type: "string" },
		priceLineHeight: { type: "string" },
		priceFontSize: { type: "string" },
		periodColor: { type: "string" },
		periodFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		periodLetterSpacing: { type: "string" },
		periodDecoration: { type: "string" },
		periodLetterCase: { type: "string" },
		periodLineHeight: { type: "string" },
		periodFontSize: { type: "string" },
		featuresAlign: { type: "string" },
		featuresFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		featuresLetterSpacing: { type: "string" },
		featuresDecoration: { type: "string" },
		featuresLetterCase: { type: "string" },
		featuresLineHeight: { type: "string" },
		featuresFontSize: { type: "string" },
		featuresColor: { type: "string" },
		featuresBackground: { type: "string" },
		feturesAlign: { type: "string", default: "center" },
		showFeaturesIcon: { type: "boolean", default: false },
		featuresIconsColor: { type: "string" },
		featuresIconsSpacing: { type: "string", default: "5px" },
		featuresDimensionspadding: { type: "object" },
		featuresDimensionsmargin: { type: "object" },
		buttonAlign: { type: "string" },
		buttonStyle: { type: "string", default: "normal" },
		buttonTextColor: { type: "string" },
		buttonTextBackground: { type: "string" },
		iconTextColor: { type: "string" },
		iconTextBackground: { type: "string" },
		borderSelection: { type: "string", default: "solid" },
		borderWidth: { type: "string" },
		borderRadius: { type: "string" },
		borderColor: { type: "string" },
		buttonTextHoverColor: { type: "string" },
		buttonTextHoverBackground: { type: "string" },
		iconTextHoverColor: { type: "string" },
		iconTextHoverBackground: { type: "string" },
		borderSelectionHover: { type: "string", default: "solid" },
		borderWidthHover: { type: "string" },
		borderRadiusHover: { type: "string" },
		borderHoverColor: { type: "string" },
		borderDimensionspadding: { type: "object" },
		borderDimensionsmargin: { type: "object" },
		buttonFontSize: {type: "number"}
    },
    save( { attributes } ) {
        let linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
            showIconOnHover = ( attributes.showIconOnHover ) ? ' show-on-hover' : '',
            buttonIconPosition = ( attributes.buttonIconPosition ) ? attributes.buttonIconPosition : ' icon-after';


        const ID = attributes.ID;
        return (
            <>
                <style>{ generateDynamicStyle( { attributes } ) }</style>

                <div {...useBlockProps.save( { className: attributes.className } ) } id={`block-${ID}`}>
                    <div className="wpmozo-bna-pricing-table">
                        <div className="wpmozo-bna-pricing-table-wrapper">
                            <div className="wpmozo-bna-pricing-table-header-graphic">
                                {'icon' === attributes.headerGraphics && (
                                    <div className="wpmozo-bna-pricing-table-header-graphic-inner">
                                        <i className={attributes.headerIcon}></i>
                                    </div>
                                )}
                                {'image' === attributes.headerGraphics && (
                                    <div
                                        className="wpmozo-bna-pricing-table-header-graphic-inner wpmozo-bna-header-image-container">
                                        <img src={attributes.headerImage} className="wpmozo-bna-header-image"/>
                                    </div>
                                )}
                            </div>
                            <div className="wpmozo-bna-pricing-table-heading">
                                { '' != attributes.title && (
                                    <RichText.Content
                                        className="wpmozo-bna-pricing-table-title"
                                        tagName={attributes.titleLeval}
                                        value={attributes.title}
                                    />
                                )}
                                { '' != attributes.subtitle && (
                                    <RichText.Content
                                        className="wpmozo-bna-pricing-table-subtitle"
                                        tagName="span"
                                        value={attributes.subtitle}
                                    />
                                )}
                                <span className="wpmozo-bna-bar-container">
                                    <hr className="wpmozo-bna-bar"/>
                                </span>
                            </div>
                            <div className="wpmozo-bna-pricing-table-pricing">
                                { '' !== attributes.currencySymbol && 'custom' !== attributes.currencySymbol && (
                                    <span className="wpmozo-bna-pricing-table-currency-symbol">{attributes.currencySymbol} </span>
                                ) }
                                { 'custom' === attributes.currencySymbol && (
                                    <span className="wpmozo-bna-pricing-table-currency-symbol">{attributes.customSymbol} </span>
                                ) }
                                { '' !== attributes.price && (
                                    <span className="wpmozo-bna-pricing-table-price">{ parseFloat( attributes.price ) }</span>
                                ) }
                                { '' !== attributes.period && (
                                    <>
                                        <span className="wpmozo-bna-period-slash"> / </span>
                                        <span className="wpmozo-bna-pricing-table-period"> {attributes.period} </span>
                                    </>
                                ) }
                            </div>
                            <dl className="wpmozo-bna-pricing-table-features">
                                { attributes.features && attributes.features.length > 0 && attributes.features.map( (feature, index) => (
                                    <div key={`feature-${index}`}>
                                        <dt className="wpmozo-bna-pricing-table-features-list">
                                            {true === attributes.showFeaturesIcon && (
                                                <span className="wpmozo-bna-pricing-table-feature-icon">
                                                    <i className={feature.icon}></i>
                                                </span>
                                            )}
                                            <span className="wpmozo-bna-pricing-table-feature-text">
                                                {feature.list}
                                            </span>
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                            {true === attributes.showButton && (
                                <div className="wpmozo-bna-pricing-table-button-wrapper">
                                    <a href={attributes.buttonUrl}
                                    className={"wpmozo-bna-button " + buttonIconPosition + showIconOnHover}
                                    target={linkTarget}
                                    >
                                        <span className="button_text">
                                            <RichText.Content value={attributes.buttonText} />
                                        </span>
                                        { 'none' !== attributes.buttonIconType && (
                                            <div className={'icon' === attributes.buttonIconType ? "wpmozo-bna-button-icon" : "wpmozo-bna-button-image"}>
                                                { 'icon' === attributes.buttonIconType && (
                                                    <i className={attributes.buttonIcon}></i>
                                                ) }
                                                { 'image' === attributes.buttonIconType && (
                                                    <img src={attributes.buttonIconImage}/>
                                                ) }
                                            </div>
                                        ) }
                                    </a>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;