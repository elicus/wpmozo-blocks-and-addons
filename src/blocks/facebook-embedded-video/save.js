import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	// Get attributes.
	const fbAppId         = attributes.fbAppId ?? '';
	const videoURL        = attributes.videoURL ?? '';
	const frameWidth      = attributes.frameWidth ?? 450;
	const autoplay        = attributes.autoplay ?? false;
	const allowFullScreen = attributes.allowFullScreen ?? false;
	const displayText     = attributes.displayText ?? false;
	const displayCaption  = attributes.displayCaption ?? false;
	const lazyLoading     = attributes.lazyLoading ?? false;
	
	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${attributes.ID}`}>
			{ ( fbAppId && '' !== fbAppId && videoURL && '' !== videoURL ) && (
				<div className="wpmozo_fb_embedded_video_wrapper">
					<div className="fb-video"
						data-fb-app={ fbAppId }
						data-href={ videoURL }
						data-width={ frameWidth + 'px' }
						data-autoplay={ autoplay }
						data-allowfullscreen={ allowFullScreen }
						data-show-text={ displayText }
						data-show-captions={ displayCaption }
						data-lazy={ lazyLoading }
					></div>
				</div>
			) }
		</div>
	</> );
}

export default Save;
