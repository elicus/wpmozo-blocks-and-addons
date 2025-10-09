import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

export default function save( { attributes } ) {
	
	const ID = attributes.ID;

	const backImage = ( attributes.backImage ) ? attributes.backImage : wpmozo_bna_editor_object.placeholderImg;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-breadcrumb-main ' + attributes.className } ) }>
			<div className="wpmozo-bna-breadcrumb-wrap">
				<figure className={`effect-${attributes.layout}`}>
					<img className="wpmozo-bna-breadcrumb-image" src={backImage}/>
					<figcaption>
						<div className="wpmozo-bna-breadcrumb-inner">
							<RichText.Content
								className="wpmozo-bna-breadcrumb-title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
							/>
							<RichText.Content
								tagName="div"
								className="wpmozo-bna-breadcrumb-content"
								value={ attributes.content }
							/>
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	</> );
}
