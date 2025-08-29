<<<<<<< HEAD
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;
	
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
	</> );
=======
import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps} from "@wordpress/block-editor";

const WPMozoEditorObj = wpmozo_bna_editor_object;

const Save = ({attributes}) => {

    const coreFunc = window.wpmozo, ID = attributes.ID,
        Tag = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set


    return (
        <div{...useBlockProps.save({className: `wpmozo-bna-text-animator-main ${attributes.displayInStack ? ' display-in-stack-yes' : ''}`})} id={`block-${ID}`}>
            <div className={`wpmozo-bna-text-animator wpmozo-bna-text-animator-wrapper }`}>
                <Tag className={`wpmozo-${attributes.selectAnimation} wpmozo-text-heading`}>
                    <span className="wpmozo-pre-text-wrapper wpmozo-pre-post">{attributes.preText}</span>
                    <span
                        className="wpmozo-animated-text wpmozo-main-part"
                        data-wait-time={attributes.animationDelay}
                        data-animation-time={attributes.animationDuration}
                        data-text={attributes.animatedText}
                        data-stop-animation-on-hover={attributes.stopAnimationOnHover ? 'on' : 'off'}
                        data-typing-time="100"
                        data-erasing-time="100"
                    >
                          {attributes.animatedText}
                        </span>
                    <span className="wpmozo-pre-text-wrapper wpmozo-pre-post">{attributes.postText}</span>
                </Tag>
            </div>
        </div>
    );
>>>>>>> 5f7ae3c (WIP: imported module but does not working.)
};

export default Save;