import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({attributes}) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-rotating-text' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		useImage = attributes.useImage,
		text = attributes.rotatingText,
		iconImage = null;

	if ( useImage ) {
		iconImage = (
		  	<img
				src={image}
				alt=""
				className="wpmozo-bna-rotating-text-img-img_icon"
		  	/>
		);
	} else if ( attributes.icon ) {
		iconImage = (
			<div className="icon-wrapper">
				<i className={attributes.icon}></i>
		    </div>
		);
	}

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }
		<div {...blockProps} id={`block-${ ID }`}>
			<div className="wpmozo-bna-rotating-text-wrap" data-pause={attributes?.pauseOnHover ? '1': '0'}>
				<div className="wpmozo-bna-rotating-text-inner">
					<p>{text}</p>
				</div>
				{iconImage && (
					<div className="wpmozo-bna-rotating-text-icon-wrapper">
						{iconImage}
					</div>
				)}
			</div>
		</div>
	</>);
}
