import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';
export default function save({ attributes }) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-image-card-ticker' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	let dataClass = '';
	if('marquee' === attributes.tickerLayout){
		dataClass = `layout-${attributes.tickerLayout} direction-${attributes.marqueeDirection} marquee-inited`;
	} else if('3d_circular' === attributes.tickerLayout){
		dataClass = `layout-${attributes.tickerLayout} circle-carousel`;
	} else {
		dataClass = `layout-${attributes.tickerLayout} curve-carousel`;
	}

	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div {...blockProps} id={`block-${clientId}`}>
			{'curve' === attributes.tickerLayout && (
				<svg width="0" height="0">
					<defs>
						<mask id="wpmozo_image_card_ticker_curve_mask" x="0" y="0" width="1" height="1"
							  maskContentUnits="objectBoundingBox">
							<rect x="0" y="0" width="1" height="1" fill="black"></rect>
							<path d="M0,0 Q0.5,0.25 1,0 V1 Q0.5,0.75 0,1 Z" fill="white"></path>
						</mask>
					</defs>
				</svg>
			)}
			<div
				className={`wpmozo_image_card_ticker_wrapper ${dataClass}`}
				data-layout={attributes.tickerLayout}
				data-direction={attributes.marqueeDirection}
				data-image_gap={attributes.imagesGap}
				data-ticker_speed={attributes.tickerSpeed}
				data-image_width={attributes.image_width}
				data-image_height={attributes.image_height}
			>
				<div className={`wpmozo_image_card_ticker_inner`}>
					{attributes.images_data && attributes.images_data.length > 0 && attributes.images_data.map((image, idx) => {
						if (attributes.tickerLayout === '3d_circular') {
							return (
								<div key={idx} className="wpmozo_image_card_ticker_image_wrapper">
									<img src={image.url} alt={image.alt || ''} />
								</div>
							);
						}
						return (
							<img key={idx} src={image.url} alt={image.alt || ''} />
						);
					})}
				</div>
			</div>
		</div>
	</>);
}
