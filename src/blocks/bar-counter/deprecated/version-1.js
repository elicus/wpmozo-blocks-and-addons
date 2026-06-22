// deprecated/version-1.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';

const V1 = {
    attributes: {
        ID: { type: "string"  },
		className: { type: "string" },

		layoutType: { type: "string", default: "layout1" },
		title: { type: "string", default: "WPMozo Title" },
		titleLavel: { type: "string", default: "h2" },
		percentage: { type: "number", default: 50 },
		displayEmptyBar: { type: "boolean", default: false },
		useStripes: { type: "boolean", default: false },

		stripeAnimation: { type: "boolean", default: false },
		stripeAnimationSpeed: { type: "number" },

		titleColor: { type: "string" },
		titleAlign: { type: "string" },
		titleFontSize: { type: "string" },
		titleFontAppearance: { type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },

		percentageColor: { type: "string" },
		percentageAlign: { type: "string" },
		percentageFontSize: { type: "string" },
		percentageFontAppearance: { type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		percentageLetterSpacing: { type: "string" },
		percentageDecoration: { type: "string" },
		percentageLetterCase: { type: "string" },
		percentageLineHeight: { type: "string" },

		filledBackgroundType: { type: "string", default: "classic" },
		filledBackgroundColor: { type: "string" },
		filledBackgroundGradient: { type: "string",
			default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
		},
		backgroundType: { type: "string", default: "classic" },
		backgroundColor: { type: "string" },
		backgroundGradient: { type: "string",
			default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
		},
		barborder: { type: "object" },
		barborderRadius: { type: "string" },

		useCustomChunksSize: { type: "boolean", default: false },
		useChunksWidth: { type: "string" },
		useChunksWidthUnit: { type: "string" },
		useChunksHeight: { type: "string" },
		useChunksHeightUnit: { type: "string" }
    },
    save( { attributes } ) {
        let ID = attributes.ID,
            emptyBarEnabled = '';

        if (attributes.displayEmptyBar) {
            emptyBarEnabled = 'empty-bar-enabled';
        }

        return (
            <>
                <style>{ generateDynamicStyle({attributes }) }</style>

                <div {...useBlockProps.save( { className: attributes.className } ) } id={`block-${ID}`}>
                    <div className={`wpmozo-bna-bar-counter ${emptyBarEnabled}`}>
                        <div className={`wpmozo-ban-bar-counter-wrapper ${attributes.layoutType}`}>
                            {attributes.title && (
                                <RichText.Content
                                    className="wpmozo-bna-bar-counter-title"
                                    tagName={attributes.titleLavel}
                                    value={attributes.title}
                                    onChange={(newValue) => setAttributes({title: newValue})}
                                />
                            )}
                            <div className="wpmozo-bna-bar-counter-bar-wrapper">
                                {/* Layout 1 */}
                                {attributes.layoutType === 'layout1' && (
                                    <>
                                        {attributes.displayEmptyBar && (
                                            <div className="wpmozo-bna-bar-counter-bar">
                                                <div
                                                    className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                                    data-percent={`${attributes.percentage}%`}
                                                    style={{width: `${attributes.percentage}%`}}
                                                >
                                                    {attributes.useStripes ? (
                                                        <div
                                                            className="wpmozo-bna-bar-counter-filled-bar wpmozo-bna-bar-counter-animated-striped-bar"></div>
                                                    ) : (
                                                        <div className="wpmozo-bna-bar-counter-filled-bar"></div>
                                                    )}
                                                    <span
                                                        className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
                                                </div>
                                            </div>
                                        )}

                                        {!attributes.displayEmptyBar && (
                                            <div
                                                className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                                data-percent={`${attributes.percentage}%`}
                                                style={{width: `${attributes.percentage}%`}}
                                            >
                                                {attributes.useStripes ? (
                                                    <div
                                                        className="wpmozo-bna-bar-counter-filled-bar wpmozo-bna-bar-counter-animated-striped-bar"></div>
                                                ) : (
                                                    <div className="wpmozo-bna-bar-counter-filled-bar"></div>
                                                )}
                                                <span
                                                    className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* Layout 2 */}
                                {attributes.layoutType === 'layout2' && (
                                    <div className="wpmozo-bna-bar-counter-filled-bar-wrapper"
                                        data-percent={`${attributes.percentage}%`}>
                                        {Array.from({length: 10}, (_, i) => {
                                            const index = i + 1;
                                            if (index <= (attributes.percentage / 10)) {
                                                return (
                                                    <div key={index}
                                                        className="wpmozo-bna-bar-counter-chunks wpmozo-bna-bar-counter-filled-chunks wpmozo-animate-filled"></div>
                                                );
                                            } else if (attributes.displayEmptyBar) {
                                                return (
                                                    <div key={index}
                                                        className="wpmozo-bna-bar-counter-chunks wpmozo-bna-bar-counter-empty-chunks"></div>
                                                );
                                            }
                                            return null;
                                        })}

                                        <span className="wpmozo-bna-bar-counter-percent">{attributes.percentage}%</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;