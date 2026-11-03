/**
 * Pattern thumbnail with a fixed aspect ratio (no layout shift), lazy loading and a
 * placeholder when the image is missing or fails.
 */
import { useState } from '@wordpress/element';
import { PlaceholderArt } from '../assets';

export default function Thumbnail( { image, eager = false } ) {
	const [ failed, setFailed ] = useState( false );
	const width = image?.width || 4;
	const height = image?.height || 3;

	return (
		<div
			className="wpmozo-library__thumb"
			style={ { aspectRatio: `${ width } / ${ height }` } }
		>
			{ image?.url && ! failed ? (
				<img
					src={ image.url }
					width={ width }
					height={ height }
					alt=""
					loading={ eager ? 'eager' : 'lazy' }
					decoding="async"
					onError={ () => setFailed( true ) }
				/>
			) : (
				<PlaceholderArt />
			) }
		</div>
	);
}
