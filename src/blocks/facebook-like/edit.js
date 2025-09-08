import {__} from '@wordpress/i18n';
import {useBlockProps,} from '@wordpress/block-editor';
import {Notice} from '@wordpress/components';
import {useEffect, useRef, useState} from '@wordpress/element';
import Inspector from "./inspector";

function isValidFacebookUrl(url) {
	return /^https?:\/\/(www\.)?facebook\.com\/.+/.test(url);
}

/**
 * Ensure Facebook SDK is loaded and ready.
 * Calls the callback once FB is loaded and available.
 */
function ensureFbSdk(callback) {
	if (window.FB && window.FB.XFBML) return callback(window.FB);
	if (window._wpFbLoader) return window._wpFbLoader.then(() => window.FB && window.FB.XFBML && callback(window.FB));
	window._wpFbLoader = new Promise((resolve) => {
		function done() {
			if (window.FB && window.FB.XFBML) {
				resolve(window.FB);
				callback(window.FB);
			}
		}

		if (!jQuery('#facebook-jssdk').length) {
			jQuery('body').append('<script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0" async></script>');
			jQuery('#facebook-jssdk').on('load', done);
		}
	});
}

export default function Edit({attributes, setAttributes}) {
	const {url, layout, size, share} = attributes;
	const [error, setError] = useState('');
	const previewRef = useRef();

	// Update FB Like button preview when props change
	useEffect(() => {
		if (url && isValidFacebookUrl(url) && previewRef.current) {
			ensureFbSdk((FB) => {
				// Parse only this container
				FB.XFBML.parse(previewRef.current);
			});
		}
		// If the url becomes invalid, clear children (to avoid stuck like button from previous valid entry)
		if ((!url || !isValidFacebookUrl(url)) && previewRef.current) {
			previewRef.current.innerHTML = '';
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, layout, size, share]);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<div {...useBlockProps()}>
				{!url ? (
					<p>
						{__(
							'Paste a public Facebook URL in the block settings to generate the Like button.',
							'wpmozo-blocks-and-addons'
						)}
					</p>
				) : error ? (
					<Notice status="error" isDismissible={false}>
						{error}
					</Notice>
				) : isValidFacebookUrl(url) ? (
					<div ref={previewRef}>
						<div
							className="fb-like"
							data-href={url}
							data-layout={layout}
							data-action="like"
							data-size={size}
							data-share={share ? 'true' : 'false'}
						></div>
					</div>
				) : null}
			</div>
		</>
	);
}
