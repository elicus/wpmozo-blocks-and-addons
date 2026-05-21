import { __ } from "@wordpress/i18n";
import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const Tag          = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set.
	const animation    = attributes.selectAnimation ?? 'fade';
	const animatedText = attributes.animatedText ?? '';

	// Get first part before "|"
	const initialText = animatedText.split('|')[0];

	let $animatedPhrase = '';
	switch ( animation ) {
		case "typing":
			$animatedPhrase = (
				<span className="animated_text wpmozo_main_part"
					data-wait-time={ parseInt( attributes?.animationDelay ?? 2000 ) }
					data-typing-time={ parseInt( attributes?.typingSpeed ?? 100 ) }
					data-erasing-time={ parseInt( attributes?.erasingSpeed ?? 100 ) }
					data-stop-animation-on-hover={ attributes?.stopAnimationOnHover ?? 'false' }
					data-animate-only-once={ attributes?.animateOnlyOnce ?? 'false' }
					data-text={ animatedText }
					data-interval-id="0"
				></span>
			);
		break;
		default:
			$animatedPhrase = (
				<span className="animated_text wpmozo_main_part"
					data-wait-time={ parseInt( attributes?.animationDelay ?? 2000 ) }
					data-animation-time={ parseInt( attributes.animationDuration ?? 500 ) }
					data-stop-animation-on-hover={ attributes?.stopAnimationOnHover ?? 'false' }
					data-animate-only-once={ attributes?.animateOnlyOnce ?? 'false' }
					data-text={ animatedText }
				>{ initialText }</span>
			);
		break;
	}

	useEffect( () => {
		const event = new CustomEvent( 'WPMozoTextAnimatorPropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [animation] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className={`animated_text_wrapper wpmozo-${attributes.selectAnimation}`}>
					<Tag className={`wpmozo-animated-text`}>
						{/* Post text. */}
						{ ( attributes.preText && '' !== attributes.preText ) && (
							<span className="pre_text_wrapper wpmozo_pre_post">{ attributes.preText }</span>
						) }
						{ $animatedPhrase }
						{/* Post text. */}
						{ ( attributes.postText && '' !== attributes.postText ) && (
							<span className="post_text_wrapper wpmozo_pre_post">{ attributes.postText }</span>
						) }
					</Tag>
				</div>
			</div>
		</Fragment>
	);

};

export default Edit;
