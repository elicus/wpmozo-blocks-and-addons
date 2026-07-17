import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils';
import {useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {

	const clientId = attributes.ID,
		altText = !wpmozo_is_empty( attributes.altText )
			? attributes.altText
			: 'alt',
		linkTarget = ( 'external' === attributes.linkTarget ) ? '_blank' : '_self',
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-logo-slider-item swiper-slide' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;


	let logo = '';

	if ( !wpmozo_is_empty( attributes.link ) ) {
		logo = (
			<a href={attributes.link} target={ linkTarget }>
				<div className="logo-wrap">
					<img className="logo-img" src={ attributes.logo.url } alt={altText} />
				</div>
			</a>
		)
	}else{
		logo = (
			<div className="logo-wrap">
				<img className="logo-img" src={ attributes.logo.url } alt={altText} />
			</div>
		)
	}

	return (
		<>
			<style>
					{generateDynamicStyle({attributes, clientId})}
				</style>
			<div {...blockProps} id={`block-${clientId}`}>
				{ logo }
			</div>
		</>
	);
}
