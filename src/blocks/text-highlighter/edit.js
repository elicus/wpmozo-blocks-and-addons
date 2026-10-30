import Inspector from "./inspector";
import Shape from './Shape';
import generateDynamicStyle from "./style";

import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {

	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,
		heighlighterShape = attributes.textHighlighterShape,
		displayInStackSpace = attributes.displayInStack ? '' : '\u00A0',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-text-highlighter${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	useEffect(() => {
		const event = new CustomEvent('WPMozoTextHighlighterPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector('iframe[name="editor-canvas"]');
		if (iframe?.contentWindow) {
			iframe.contentWindow.dispatchEvent(event);
		}
	}, [
		attributes.textHighlighterShape,
		attributes.displayInStack,
		attributes.wrapInHeadingTag,
		attributes.headingLevel,
		attributes.stockWidth,
		attributes.stockPaintAnimationDelay
	]);

    return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes, clientId, isEdit})}</style>
			<div {...blockProps}>
				<div className={`wpmozo-bna-text-highlighter ${attributes.displayInStack ? 'wpmozo-bna-text-highlighter-stack' : ''}`}>
					<div className={`wpmozo-bna-text-highlighter-wrapper wpmozo-highlight-${attributes.textHighlighterShape}`}>
						{attributes.wrapInHeadingTag ? (
							(() => {
								const Tag = attributes.headingLevel || 'h2';
								return (
									<Tag className="wpmozo-bna-text-highlighter-title">
										<span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">
											{attributes.pre}
											{displayInStackSpace}
										</span>
										<span className="wpmozo-bna-text-highlighter-inner-wrapper">
											<span className="wpmozo-bna-text-highlighted-content"> {attributes.main} {displayInStackSpace}</span>
											{Shape[heighlighterShape]}
										</span>
										<span className="wpmozo-bna-text-highlighter-post-inner-wrapper"> {attributes.post} </span>
									</Tag>
								);
							})()
						) : (
							<>
								<span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">{attributes.pre}
									{displayInStackSpace}</span>
								<span className="wpmozo-bna-text-highlighter-inner-wrapper">
									<span className="wpmozo-bna-text-highlighted-content">{attributes.main} {displayInStackSpace}</span>
									{Shape[heighlighterShape]}
								</span>
								<span className="wpmozo-bna-text-highlighter-post-inner-wrapper">{attributes.post}</span>
							</>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
