// deprecated/version-1.js
import {Fragment} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";
import Shape from '../Shape';
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		pre: { type: "string", default: "WPMozo" },
		main: { type: "string", default: "Text Highlighter" },
		post: { type: "string", default: "Addon For Blocks" },

		textHighlighterShape: { type: "string", default: "zig_zag" },
		highlighterColor: { type: "string" },
		stockWidth: { type: "number", default: 2 },
		stockPaintAnimationDelay: { type: "number", default: 2 },
		customPositionForHighlighter: { type: "boolean", default: false },
		customVerticalPosition: { type: "number" },
		customHorizontalPosition: { type: "number" },

		displayInStack: { type: "boolean", default: false },
		wrapInHeadingTag: { type: "boolean", default: false },
		headingLevel: { type: "string", default: "h2" },

		typeTextSettings: { type: "string", default: "global" },
		globalTextColor: { type: "string" },
		globalTextAlignment: { type: "string" },
		globalFontSize: { type: "string" },
		globalFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		globalLetterSpacing: { type: "string" },
		globalLetterCase: { type: "string" },
		globalLineHeight: { type: "string" },

		preTextColor: { type: "string" },
		preTextAlignment: { type: "string" },
		preFontSize: { type: "string" },
		preFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		preLetterSpacing: { type: "string" },
		preDecoration: { type: "string" },
		preLetterCase: { type: "string" },
		preLineHeight: { type: "string" },
		premargin: {type: "object"},
		prepadding: {type: "object"},

		mainTextColor: { type: "string" },
		mainTextAlignment: { type: "string" },
		mainFontSize: { type: "string" },
		mainFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		mainLetterSpacing: { type: "string" },
		mainDecoration: { type: "string" },
		mainLetterCase: { type: "string" },
		mainLineHeight: { type: "string" },
		mainmargin: {type: "object"},
		mainpadding: {type: "object"},

		postTextColor: { type: "string" },
		postTextAlignment: { type: "string" },
		postFontSize: { type: "string" },
		postFontAppearance: {
			type: "object",
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		postLetterSpacing: { type: "string" },
		postDecoration: { type: "string" },
		postLetterCase: { type: "string" },
		postLineHeight: { type: "string" },
		postmargin: {type: "object"},
		postpadding: {type: "object"}

    },
    save( { attributes } ) {
        const heighlighterShape = attributes.textHighlighterShape,
            ID = attributes.ID,
            displayInStackSpace = attributes.displayInStack ? '' : '\u00A0';

        return (
            <>
                <style>{generateDynamicStyle({attributes, ID})}</style>
                <div {...useBlockProps.save()} id={`block-${ID}`}>
                <div className={`wpmozo-bna-text-highlighter ${attributes.displayInStack ? 'wpmozo-bna-text-highlighter-stack' : ''}`}>
                    <div className={`wpmozo-bna-text-highlighter-wrapper wpmozo-highlight-${attributes.textHighlighterShape}`}>
                        {attributes.wrapInHeadingTag ? (
                            (() => {
                                const Tag = attributes.headingLevel || 'h2';
                                return (
                                    <Tag className="wpmozo-bna-text-highlighter-title">
                                        <span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">{attributes.pre}{displayInStackSpace}</span>
                                        <span className="wpmozo-bna-text-highlighter-inner-wrapper">
                                                <span className="wpmozo-bna-text-highlighted-content">{attributes.main}{displayInStackSpace}</span>
                                            {Shape[heighlighterShape]}
                                            </span>
                                        <span className="wpmozo-bna-text-highlighter-post-inner-wrapper">{attributes.post}</span>
                                    </Tag>
                                );
                            })()
                        ) : (
                            <>
                                <span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">{attributes.pre}{displayInStackSpace}</span>
                                <span className="wpmozo-bna-text-highlighter-inner-wrapper">
                                        <span className="wpmozo-bna-text-highlighted-content">{attributes.main}{displayInStackSpace}</span>
                                    {Shape[heighlighterShape]}
                                    </span>
                                <span className="wpmozo-bna-text-highlighter-post-inner-wrapper">{attributes.post}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            </>
        );
    },
};

export default V1;