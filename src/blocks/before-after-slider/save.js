import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save( { attributes } ) {

	const ID = attributes.ID;
	const clientId = ID;

	const beforeImage = ( attributes.beforeImage ) ? attributes.beforeImage : wpmozo_bna_editor_object.placeholderImg;
	const afterImage  = ( attributes.afterImage ) ? attributes.afterImage : wpmozo_bna_editor_object.placeholderImg;

	let beforeLabel = ( attributes.beforeHasLabel ) ? attributes.beforeLabel : '',
		afterLabel  = ( attributes.afterHasLabel ) ? attributes.afterLabel : '';

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-before-after-main ' + attributes.className } ) }>
			<div className="wpmozo-bna-before-after-image-wrapper"
				data-before-label={beforeLabel}
				data-after-label={afterLabel}
				data-handle-offset={ attributes.handleOffset || 0.5 }
				data-slider-orientation={ attributes.sliderOrientation || 'horizontal' }
				data-move-onhover={ attributes.moveHandleOnHover || 'false' }
				data-move-onclick={ attributes.moveHandleOnClick || 'false' }
				data-no-overlay={ attributes.overlayOnHover ? 'false' : 'true' }
			>
				<img src={beforeImage} />
				<img src={afterImage} />
			</div>
		</div>
	</> );
}
