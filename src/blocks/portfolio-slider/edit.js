import { Fragment } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	return (
		<Fragment>
			<Inspector attributes={ props.attributes } setAttributes={ props.setAttributes } />
			<div { ...blockProps }>
				<div className="wpmozo-portfolio-slider-placeholder">
					Portfolio Slider (Stage 1 Skeleton)
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
