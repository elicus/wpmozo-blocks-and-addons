import {useBlockProps, RichText} from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save({attributes}) {
	const ID = attributes.ID;
	let backImage = (attributes.backImage) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;
	return (
		<>
			<style>
				{generateDynamicStyle({attributes})}
			</style>
			<div {...useBlockProps.save({className: 'wpmozo-bna-interactive-image-card-main'})} id={`block-${ID}`}>
				<div className="wpmozo-bna-interactive-image-card-wrap">
					<figure className={`effect-${attributes.layout}`}>
						<img className="wpmozo-bna-interactive-image-card-image" src={backImage}/>
						<figcaption>
							<div className="wpmozo-bna-interactive-image-card-inner">
								<RichText.Content
									className="wpmozo-bna-interactive-image-card-title"
									tagName={attributes.titleLavel}
									value={attributes.title}
								/>
								<RichText.Content
									className="wpmozo-bna-interactive-image-card-content"
									tagName="div"
									value={attributes.content}
								/>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</>
	);
}
