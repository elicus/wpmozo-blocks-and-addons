import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	const Tag          = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set.
	const animation    = attributes.selectAnimation ?? 'fade';
	const animatedText = attributes.animatedText ?? '';
	const displayInStackSpace = attributes.displayInStack ? '' : '\u00A0';

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
				/>
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

	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
			<div className={`animated_text_wrapper wpmozo-${attributes.selectAnimation}`}>
				<Tag className={`wpmozo-animated-text`}>
					{/* Post text. */}
					{ ( attributes.preText && '' !== attributes.preText ) && (
						<span className="pre_text_wrapper wpmozo_pre_post">{ attributes.preText } {displayInStackSpace}</span>
					) }
					{ $animatedPhrase } {displayInStackSpace}
					{/* Post text. */}
					{ ( attributes.postText && '' !== attributes.postText ) && (
						<span className="post_text_wrapper wpmozo_pre_post">{ attributes.postText }</span>
					) }
				</Tag>
			</div>
		</div>
	</> );
};

export default Save;
