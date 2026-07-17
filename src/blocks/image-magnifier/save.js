import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({attributes}) {
	const ID = attributes.ID,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-image-magnifier' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;
	let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg;

	return ( <>
		<style>{ generateDynamicStyle( { attributes } ) }</style>

		<div { ...blockProps}
			id={`block-${ID}`}
			data-speed={attributes.lenseSpeed}
			data-src={image}
		>
			<div className={`wpmozo-bna-image-magnifier-wrapper`}>
				<div className="magnify">
					<img className="wpmozo-bna-image-magnifier-image zoom" src={image} alt={attributes.imageAlt}/>
				</div>
			</div>
		</div>
	</> );
}
