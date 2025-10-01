import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const { ID, className } = attributes;

	// Get attributes.
	const fbAppId     = attributes.fbAppId ?? '';
	const pageURL     = attributes.pageURL ?? 'https://wpmozoblocks.com/';
	const numPosts    = attributes.numPosts ?? 10;
	const orderBy     = attributes.orderBy ?? 'social';
	const lazyLoading = attributes.lazyLoading ?? false;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

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
