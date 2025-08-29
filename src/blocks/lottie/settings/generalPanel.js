import { __ } from '@wordpress/i18n';
import {MediaUpload} from "@wordpress/block-editor";
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
	Button
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} },
		animationTrigger = [
			{
				label: __('Autoplay', 'wpmozo-blocks-and-addons'),
				value: 'autoplay'
			},
			{
				label: __('Hover', 'wpmozo-blocks-and-addons'),
				value: 'hover'
			},
			{
				label: __('Click', 'wpmozo-blocks-and-addons'),
				value: 'click'
			},
		],
		direction = [
			{
				label: __('Normal', 'wpmozo-blocks-and-addons'),
				value: '1'
			},
			{
				label: __('Reverse', 'wpmozo-blocks-and-addons'),
				value: '-1'
			},
		];

	return ( <>
		<PanelBody title={__('Configuration', 'wpmozo-blocks-and-addons')} initialOpen={true}>
			{!attributes.fileName ? (
				<MediaUpload
					onSelect={(media) => {
						if (media && media.url && media.url.endsWith('.json')) {
							fetch(media.url)
								.then(response => response.json())
								.then(jsonData => {
									setAttributes({
										lottieJson: jsonData,
										fileName: media.filename || media.title.rendered,
										filePath: media.url
									});
								})
								.catch(error => {
									console.error('Error loading JSON file:', error);
								});
						} else {
							console.error('Please select a valid JSON file');
							// Could add a notification here for the user
						}
					}}
					allowedTypes={['application/json']}
					render={({ open }) => (
						<div style={{marginBottom: "20px"}}>
							<p>Upload a JSON file below: </p>
							<Button isSecondary onClick={open}>
								Upload JSON
							</Button>
						</div>
					)}
				/>
			) : (
				<div className="file-upload-success" style={{marginBottom: "20px"}}>
					<div className="file-info" style={{display: "flex"}}>
						<p><strong>File:</strong> {attributes.fileName}</p>
						<Button
							isDestructive
							icon="trash"
							onClick={() => {
								setAttributes({
									lottieJson: null,
									fileName: null,
									filePath: null
								});
							}}
							label="Delete file"
						/>
					</div>
					<MediaUpload
						onSelect={(media) => {
							if (media && media.url && media.url.endsWith('.json')) {
								fetch(media.url)
									.then(response => response.json())
									.then(jsonData => {
										setAttributes({
											lottieJson: jsonData,
											fileName: media.filename || media.title.rendered,
											filePath: media.url
										});
									})
									.catch(error => {
										console.error('Error loading JSON file:', error);
									});
							} else {
								console.error('Please select a valid JSON file');
							}
						}}
						allowedTypes={['application/json']}
						render={({ open }) => (
							<Button isSecondary onClick={open}>
								Upload New File
							</Button>
						)}
					/>
				</div>
			)}
			<SelectControl
				label={__('Animation Trigger', 'wpmozo-blocks-and-addons')}
				value={attributes.animationTrigger}
				options={animationTrigger}
				onChange={(newValue) => setAttributes({animationTrigger: newValue})}
			/>
			<SelectControl
				label={__('Direction', 'wpmozo-blocks-and-addons')}
				value={attributes.direction}
				options={direction}
				onChange={(newValue) => setAttributes({direction: newValue})}
			/>
			<ToggleControl
				label={__('Loop', 'wpmozo-blocks-and-addons')}
				checked={attributes.loop}
				onChange={(newValue) => setAttributes({loop: newValue})}
			/>
			<RangeControl
				label={__('Animation Speed', 'wpmozo-blocks-and-addons')}
				value={attributes.animationSpeed}
				onChange={(newValue) => setAttributes({animationSpeed: newValue})}
				min={0.1}
				step={0.1}
				max={6}
				allowReset={true}
			/>
		</PanelBody>
	</> );
};
