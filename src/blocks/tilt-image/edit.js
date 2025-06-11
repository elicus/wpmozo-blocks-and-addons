import Inspector from "./inspector";
import generateDynamicStyle from "./style";
import {wpmozo_is_empty, getMainEl} from '../../common/utils';
import {__} from "@wordpress/i18n";
import {useEffect, Fragment} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";

export default function Edit(props) {

	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		blockProps = useBlockProps({className: 'wpmozo-bna-tilt-image'}),
		position = '',
		image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		contentAlignment = attributes.contentAlignment,
		linkTarget = ('external' === attributes.buttonLinkTarget) ? '_blank' : '_self',
		animationDirection = attributes.contentAnimationDirection,
		animationClass = (attributes.contentOnHover && 'off' !== animationDirection) ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '';


	attributes.ID = clientId;

	let wpmozo_init_tilt_img = (element, attributes) => {

		let axis = (attributes.useDisableAxis) ? attributes.tiltDisableAxis : null,
			glare = (attributes.useGlare) ? attributes.tiltMaxGlare : false;

		element.find('.wpmozo-bna-tilt-image-wrapper').tilt({
			maxTilt: attributes.tiltMax,
			perspective: attributes.tiltPerspective,
			scale: attributes.tiltScale,
			speed: attributes.tiltSpeed,
			disableAxis: axis,
			reset: true,
			glare: glare,
			maxGlare: attributes.tiltMaxGlare
		});

	}

	useEffect(() => {
		let $this = getMainEl(clientId);
		wpmozo_init_tilt_img($this, attributes);
	});

	useEffect(() => {
		let $this = getMainEl(clientId);
		wpmozo_init_tilt_img($this, attributes);
	}, [
		attributes.tiltMax,
		attributes.tiltPerspective,
		attributes.tiltScale,
		attributes.tiltSpeed,
		attributes.useDisableAxis,
		attributes.useGlare,
		attributes.tiltMaxGlare
	]);

	const icon = (
		<span className="wpmozo-bna-tilt-icon">
            <i className={`${attributes.icon}`}></i>
        </span>
	);

	const button = (
		<div className="wpmozo-bna-tilt-image-button-wrapper">
			<a href={attributes.buttonUrl}
			   className="wpmozo-bna-tilt-image-button wp-block-button__link wp-element-button" target={linkTarget}>
				<RichText
					value={attributes.buttonText}
					onChange={(newValue) => setAttributes({buttonText: newValue})}
				/>
			</a>
		</div>
	);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div
					className={`wpmozo-bna-tilt-image-wrapper wpmozo-editor wpmozo-bna-tilt-align-${contentAlignment}`}>
					<div className="wpmozo-bna-tilt-image-inner-wrapper">
						<img className="wpmozo-bna-tilt-image-image" src={image}/>
						<div className={`wpmozo-bna-tilt-content-wrapper${animationClass}`}>
							{attributes.useIcon &&
								icon
							}
							{!wpmozo_is_empty(attributes.title) &&
								<RichText
									className="wpmozo-bna-tilt-title"
									tagName={attributes.titleLavel}
									value={attributes.title}
									onChange={(newValue) => setAttributes({title: newValue})}
								/>
							}
							{!wpmozo_is_empty(attributes.content) &&
								<RichText
									className="wpmozo-bna-tilt-desc"
									tagName="div"
									value={attributes.content}
									onChange={(newValue) => setAttributes({content: newValue})}
								/>
							}
							{attributes.showButton && !wpmozo_is_empty(attributes.buttonText) &&
								button
							}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
