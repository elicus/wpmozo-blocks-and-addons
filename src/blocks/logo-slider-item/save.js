import { wpmozo_is_empty } from "../../common/utils";
import {useBlockProps} from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {

	const clientId = attributes.ID,
		altText = !wpmozo_is_empty( attributes.altText )
			? attributes.altText
			: 'alt',
		linkTarget = ( 'external' === attributes.linkTarget ) ? '_blank' : '_self';


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
			<div className="swiper-slide" id={`block-${clientId}`}>
				{ logo }
			</div>
		</>
	);
}
