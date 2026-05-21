import classnames from 'classnames';
import generateDynamicStyle from "./style";

export default function save(props) {

	const { attributes, clientId } = props;

	const ID = attributes.ID;

	const {
		image,
		tooltipText
	} = attributes;

	const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
	const defaultedAlt = image && image.alt ? image.alt : '';

	return ( <>
		<div id={'block-' + ID} className={ classnames( 'wpmozo-image-stack-item', attributes.className ) }>
			<span className={`wpmozo-stack-item-wrapper stack-item-type-` + attributes.stackType}>
				{ 'image' === attributes.stackType && (
					<img className="wpmozo-stack-item-img"
						alt={defaultedAlt}
						src={imageSrc}
						loading="lazy"
						title={tooltipText}
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
