import {Fragment} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";
import Shape from './Shape';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const heighlighterShape = attributes.textHighlighterShape,
		ID = attributes.ID,
		displayInStackSpace = attributes.displayInStack ? '' : '\u00A0',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-text-highlighter' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
		<>
			<style>{generateDynamicStyle({attributes, ID})}</style>
			<div {...blockProps} id={`block-${ID}`}>
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
}
