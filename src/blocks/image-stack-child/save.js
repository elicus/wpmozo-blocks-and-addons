import classnames from 'classnames';
import generateDynamicStyle from "./style";
import { mergeWrapperProps, wpmozo_is_empty } from '../../common/utils.js';
import {useBlockProps} from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';

export default function save(props) {

	const { attributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-image-stack-item' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	const ID = attributes.ID;

	const {
		image,
		tooltipText,
		parentAtts
	} = attributes;

	const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
	const defaultedAlt = image && image.alt ? image.alt : '';
	const imageTitle = image && image.url ? image.title :  '';

	return ( <>
		<div id={'block-' + ID} {...blockProps}>
			<span className={`wpmozo-stack-item-wrapper stack-item-type-` + attributes.stackType}>
				{ 'image' === attributes.stackType && (
					<img className="wpmozo-stack-item-img"
						alt={defaultedAlt}
						src={imageSrc}
						loading="lazy"
						{...((!wpmozo_is_empty(parentAtts) && parentAtts.showTooltip && 'custom' === parentAtts.tooltipType) ? {title: tooltipText} : (!wpmozo_is_empty(parentAtts) && parentAtts.showTooltip && 'imageTitle' === parentAtts.tooltipType) ? {title: imageTitle} : {})}
						
						
						// title={!wpmozo_is_empty(parentAtts) ? (parentAtts.showTooltip && 'custom' === parentAtts.tooltipType) ? tooltipText : ((parentAtts.showTooltip && 'imageTitle' === parentAtts.tooltipType) ? imageTitle : '') : ''
						// }
					/>
				) }
				{ 'icon' === attributes.stackType && (
					<i className={attributes.stackIcon} title={tooltipText}></i>
				) }
			</span>
		</div>

		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>
	</> );
}
