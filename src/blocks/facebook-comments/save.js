import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-facebook-comments' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Get attributes.
	const fbAppId     = attributes.fbAppId ?? '';
	const pageURL     = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const numPosts    = attributes.numPosts ?? 10;
	const orderBy     = attributes.orderBy ?? 'social';
	const lazyLoading = attributes.lazyLoading ?? false;

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps }>
			{ ( fbAppId && '' !== fbAppId && pageURL && '' !== pageURL ) && (
				<div className="wpmozo_fb_comments_wrapper">
					<div className="fb-comments"
						data-fb-app={ fbAppId }
						data-href={ pageURL }
						data-numposts={ numPosts }
						data-order-by={ orderBy }
						data-lazy={ lazyLoading }
						data-width="100%"
					></div>
				</div>
			) }
		</div>
	</> );
}

export default Save;
