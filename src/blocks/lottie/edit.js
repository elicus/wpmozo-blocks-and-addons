import { Fragment,useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from './inspector';
import './editor.scss';

export default function Edit(props) {
	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		blockProps = useBlockProps({ className: 'wpmozo-bna-lottie' }),
		uniqueID = clientId;

	useEffect(() => {
		const event = new CustomEvent('WPMozoLottiePropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	attributes.ID = clientId;

	let dataAttr = {
		animationTrigger: attributes.animationTrigger,
		direction: attributes.direction,
		loop: attributes.loop,
		animationSpeed: attributes.animationSpeed,
		filePath: attributes.filePath,
		clientId: clientId
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps} id={`block-${attributes.ID}`}>
				<div
					className={`wpmozo-bna-lottie`}
					id={`wpmozo-bna-lottie-${uniqueID}`}
				>
					<div className="wpmozo-bna-lottie-wrapper">
						<div
							className="wpmozo-bna-lottie-params"
							id={`wpmozo-bna-lottie-params-${uniqueID}`}
							data-attr={JSON.stringify(dataAttr)}
						>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
