import { Fragment,useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from './inspector';
import './editor.scss';
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit(props) {
	let attributes = props.attributes,
		clientId = props.clientId,
		setAttributes = props.setAttributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-lottie${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	useEffect(() => {
		const event = new CustomEvent('WPMozoLottiePropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

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
					id={`wpmozo-bna-lottie-${clientId}`}
				>
					<div className="wpmozo-bna-lottie-wrapper">
						<div
							className="wpmozo-bna-lottie-params"
							id={`wpmozo-bna-lottie-params-${clientId}`}
							data-attr={JSON.stringify(dataAttr)}
						>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
