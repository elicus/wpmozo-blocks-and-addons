import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save( { attributes } ) {
	
	const ID = attributes.ID;

	const backImage = ( attributes.backImage ) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-interactive-image-card-main ' + attributes.className } ) }>
			<div className="wpmozo-bna-interactive-image-card-wrap">
				<figure className={`effect-${attributes.layout}`}>
					<img className="wpmozo-bna-interactive-image-card-image" src={backImage}/>
					<figcaption>
						<div className="wpmozo-bna-interactive-image-card-inner">
							<RichText.Content
								className="wpmozo-bna-interactive-image-card-title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
							/>
							<RichText.Content
								tagName="div"
								className="wpmozo-bna-interactive-image-card-content"
								value={ attributes.content }
							/>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	</> );
}
