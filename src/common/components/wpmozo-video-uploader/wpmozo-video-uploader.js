import {Button, BaseControl} from "@wordpress/components";
import {__} from "@wordpress/i18n";
import {MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {Fragment} from "@wordpress/element";
import './style.scss';

const WpmozoVideoUploader = ({
								 props,
								 attrKey,
								 label = __("Video", "wpmozo-blocks-and-addons"),
							 }) => {

	const videoSrc = props.attributes[attrKey];

	// Only allow MP4
	const handleSelect = (media) => {
		if (media?.mime !== "video/mp4") {
			alert(__("Only MP4 video is allowed.", "wpmozo-blocks-and-addons"));
			return;
		}

		props.setAttributes({
			[attrKey]: media.url,
		});
	};

	const handleRemove = () => {
		props.setAttributes({
			[attrKey]: "",
		});
	};

	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={handleSelect}
				allowedTypes={["video"]}
				accept="video/mp4"
				value={videoSrc}
				render={({open}) => (
					<Fragment>
						<BaseControl label={label}>
							<div className="wpmozo-video-uploader-wrap">

								{/* Preview */}
								{videoSrc ? (
									<video
										className="wpmozo-video-preview"
										src={videoSrc}
										controls
										style={{width: "100%", marginBottom: "10px"}}
									/>
								) : (
									<div className="wpmozo-video-placeholder">
										{__("No video selected", "wpmozo-blocks-and-addons")}
									</div>
								)}

								{/* Buttons */}
								<Button
									isPrimary
									onClick={(e) => {
										e.stopPropagation();
										open();
									}}
								>
									{videoSrc
										? __("Edit Video", "wpmozo-blocks-and-addons")
										: __("Select Video", "wpmozo-blocks-and-addons")}
								</Button>

								{videoSrc && (
									<Button
										isLink
										isDestructive
										onClick={handleRemove}
										style={{marginLeft: "10px"}}
									>
										{__("Remove Video", "wpmozo-blocks-and-addons")}
									</Button>
								)}
							</div>
						</BaseControl>
					</Fragment>
				)}
			/>
		</MediaUploadCheck>
	);
};

export default WpmozoVideoUploader;
