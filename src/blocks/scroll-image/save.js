import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({attributes}) {
	const ID = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-scroll-image' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		title = attributes.imageTitle;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div { ...blockProps} id={`block-${ID}`}
		>
			<div className="wpmozo-bna-scroll-image-wrapper">
				<div className="wpmozo-bna-scroll-image-inner-wrap" data-direction={`${attributes.scrollDirection}`}>
					<img className="wpmozo-bna-scroll-image-img" title={title} src={image} alt={attributes.imageAlt} />
				</div>
			</div>
		</div>
	</> );
}
