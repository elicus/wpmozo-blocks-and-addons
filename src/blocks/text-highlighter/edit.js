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

export default function Edit(props) {

	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,blockProps = useBlockProps(),
		heighlighterShape = attributes.textHighlighterShape;

	useEffect(() => {
		const event = new CustomEvent('WPMozoTextHighlighterPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	attributes.ID = clientId;

    return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes, clientId})}</style>
			<div {...blockProps}>
				<div className={`wpmozo-bna-text-highlighter ${attributes.displayInStack ? 'wpmozo-bna-text-highlighter-stack' : ''}`}>
					<div className={`wpmozo-bna-text-highlighter-wrapper wpmozo-highlight-${attributes.textHighlighterShape}`}>
						{attributes.wrapInHeadingTag ? (
							(() => {
								const Tag = attributes.headingLevel || 'h2';
								return (
									<Tag className="wpmozo-bna-text-highlighter-title">
										<span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">{attributes.pre}</span>
										<span className="wpmozo-bna-text-highlighter-inner-wrapper">
											<span className="wpmozo-bna-text-highlighted-content">{attributes.main}</span>
											{Shape[heighlighterShape]}
										</span>
										<span className="wpmozo-bna-text-highlighter-post-inner-wrapper">{attributes.post}</span>
									</Tag>
								);
							})()
						) : (
							<>
								<span className="wpmozo-bna-text-highlighter-pre-inner-wrapper">{attributes.pre}</span>
								<span className="wpmozo-bna-text-highlighter-inner-wrapper">
									<span className="wpmozo-bna-text-highlighted-content">{attributes.main}</span>
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
