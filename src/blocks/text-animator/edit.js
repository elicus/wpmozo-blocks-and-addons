import { __ } from "@wordpress/i18n";
import {Fragment, useEffect} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

const Edit = (props) => {

    const attributes = props.attributes,
        clientId = props.clientId,
        ID = window.wpmozo.getIdByClientid(clientId),
        setAttributes = props.setAttributes,
        blockProps = useBlockProps({className: `wpmozo-bna-text-animator-main ${attributes.displayInStack ? ' display-in-stack-yes' : ''}`}),
        Tag = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set

    useEffect(() => {

        jQuery(function ($) {
            $('.wpmozo-bna-text-animator').each(function () {
                const $this = $(this);
                let animatedBlock = $this.find('.wpmozo-animated-text');
                let words = [];

                const rawText = animatedBlock.data('text');
                if (rawText) {
                    words = rawText.toString().split('|').map(e => e.trim());
                }

                if (!words.length) return;

                const animationMap = {
                    '.wpmozo-fade': wpmozoFadeEffect,
                    '.wpmozo-flip': wpmozoFlipEffect,
                    '.wpmozo-typing': wpmozoTypingEffect,
                    '.wpmozo-slide': wpmozoSlideEffect,
                    '.wpmozo-zoom': wpmozoZoomEffect,
                    '.wpmozo-bounce': wpmozoBounceEffect,
                    '.wpmozo-wipe': wpmozoWipeEffect,
                    '.wpmozo-wave': wpmozoWaveEffect,
                };

                for (const selector in animationMap) {
                    if ($this.find(selector).length > 0) {
                        animationMap[selector](animatedBlock, words);
                        break;
                    }
                }

                if (animatedBlock.data('stop-animation-on-hover') === 'on') {
                    $this.on('mouseenter mouseleave', function (e) {
                        animatedBlock.toggleClass('wpmozo-animation-paused', e.type === 'mouseenter');
                    });
                }
            });

            function wpmozoTypingEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 1000;
                let typingTime          = animatedBlock.data( 'typing-time' ) ? parseInt( animatedBlock.data( 'typing-time' ) ) : 800;
                let erasingTime         = animatedBlock.data( 'erasing-time' ) ? parseInt( animatedBlock.data( 'erasing-time' ) ) : 300;
                let currentIntervalId   = 0;
                let charIndex           = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.html( '' );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let type = function() {
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }
                    // Get substring with 1 character added
                    let text = words[ i ].substring( 0, charIndex + 1 );
                    animatedBlock.text( text );
                    charIndex++;

                    if ( text === words[ i ] ) {
                        clearInterval( currentIntervalId );
                        setTimeout( function() {
                            currentIntervalId = setInterval( erase, erasingTime );
                        }, waitTime );
                    }
                }

                let erase = function() {
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    // Add a blank space while erasing
                    let text = words[ i ].substring( 0, charIndex - 1 ) + " ";
                    animatedBlock.text( text );
                    charIndex--;

                    if ( charIndex === 0 ) {
                        clearInterval( currentIntervalId );

                        if ( i === ( words.length - 1 ) ) {
                            i = 0;
                        } else {
                            i++;
                        }

                        charIndex = 0;

                        setTimeout( function() {
                            currentIntervalId = setInterval( type, typingTime );
                        }, 0 );
                    }
                }

                currentIntervalId = setInterval( type, typingTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoWaveEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 800;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 300;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let splitWords = [  ];

                let splitLetters = function( word ) {
                    let letters = [  ];
                    for ( let j = 0; j < word.length; j++ ) {
                        let char = ' ' === word.charAt( j ) ? '&nbsp;' : word.charAt( j );
                        let letter = jQuery( '<span class="wpmozo-wave-letter">'+char+'</span>' );
                        letters.push( letter );
                    }
                    splitWords.push( letters );
                }

                for ( let j = 0; j < words.length; j++ ) {
                    splitLetters( words[ j ] );
                }

                animatedBlock.html( splitWords[ 0 ] );

                let animateLetterOut = function( cw, i ) {
                    let animation = parseInt( animationTime/cw.length );
                    setTimeout( function() {
                        cw[ i ].removeClass( 'behind' );
                        cw[ i ].removeClass( 'in' );
                        cw[ i ].addClass( 'out' );
                    }, i*animation );
                }

                let animateLetterIn = function( nw, i ) {
                    let animation = parseInt( animationTime/nw.length );
                    setTimeout( function() {
                        nw[ i ].removeClass( 'out' );
                        nw[ i ].removeClass( 'behind' );
                        nw[ i ].addClass( 'in' );
                    }, i*animation );
                }

                let changeWord = function() {
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }
                    let cw = splitWords[ i ];
                    let nw = splitWords.length === ( i + 1 ) ? splitWords[ 0 ] : splitWords[ i+1 ];

                    for ( let j = 0; j < cw.length; j++ ) {
                        animateLetterOut( cw, j );
                    }

                    setTimeout( function() {
                        animatedBlock.html( nw );
                        for ( let j = 0; j < nw.length; j++ ) {
                            nw[ j ].removeClass( 'out' );
                            nw[ j ].addClass( 'behind' );
                            animateLetterIn( nw, j );
                        }
                    }, animationTime );

                    i = splitWords.length === ( i + 1 ) ? 0 : i + 1;
                }

                currentIntervalId = setInterval( changeWord, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoBounceEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 800;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 300;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let bounce = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else {
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-bounceIn' );
                    animatedBlock.addClass( 'wpmozo-bounceOut' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-bounceOut' );
                            animatedBlock.addClass( 'wpmozo-bounceIn' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };
                currentIntervalId = setInterval( bounce, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoZoomEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 800;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 300;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let zoom = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else {
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-zoomIn' );
                    animatedBlock.addClass( 'wpmozo-zoomOut' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-zoomOut' );
                            animatedBlock.addClass( 'wpmozo-zoomIn' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };
                currentIntervalId = setInterval( zoom, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoSlideEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 800;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 300;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let slide = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else {
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-slideIn' );
                    animatedBlock.addClass( 'wpmozo-slideOut' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-slideOut' );
                            animatedBlock.addClass( 'wpmozo-slideIn' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };
                currentIntervalId = setInterval( slide, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoFlipEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 500;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 1500;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let flip = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else{
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-flipUpSecond' );
                    animatedBlock.addClass( 'wpmozo-flipUpFirst' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-flipUpFirst' );
                            animatedBlock.addClass( 'wpmozo-flipUpSecond' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };
                currentIntervalId = setInterval( flip, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoFadeEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 500;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 1500;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let fade = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else {
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-fadeIn' );
                    animatedBlock.addClass( 'wpmozo-fadeOut' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-fadeOut' );
                            animatedBlock.addClass( 'wpmozo-fadeIn' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };
                currentIntervalId = setInterval( fade, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
            function wpmozoWipeEffect( animatedBlock, words ) {
                let intervalId          = animatedBlock.data( 'interval-id' ) ? parseInt( animatedBlock.data( 'interval-id' ) ) : 0;
                let waitTime            = animatedBlock.data( 'wait-time' ) ? parseInt( animatedBlock.data( 'wait-time' ) ) : 800;
                let animationTime       = animatedBlock.data( 'animation-time' ) ? parseInt( animatedBlock.data( 'animation-time' ) ) : 300;
                let currentIntervalId   = 0;
                let i                   = 0;

                if ( intervalId !== 0 ) {
                    clearInterval( intervalId );
                    animatedBlock.removeClass( 'wpmozo-wipeIn wpmozo-wipeOut wpmozo-zoomIn wpmozo-zoomOut wpmozo-bounceIn wpmozo-bounceOut wpmozo-flipUpFirst wpmozo-flipUpSecond wpmozo-slideIn wpmozo-slideOut wpmozo-fadeIn wpmozo-fadeOut' );
                }

                let wipe = function(){
                    if ( animatedBlock.hasClass( 'wpmozo-animation-paused' ) ) {
                        return false;
                    }

                    if ( words.length === ( parseInt( i ) + 1 ) )  {
                        i = 0;
                    } else {
                        i = i + 1;
                    }

                    animatedBlock.removeClass( 'wpmozo-wipeIn' );
                    animatedBlock.addClass( 'wpmozo-wipeOut' );
                    setTimeout( function(){
                        animatedBlock.fadeIn( '100', 'swing', function() {
                            animatedBlock.removeClass( 'wpmozo-wipeOut' );
                            animatedBlock.addClass( 'wpmozo-wipeIn' );
                            animatedBlock.html( words[ i ] );
                        } );
                    }, animationTime );
                };

                currentIntervalId = setInterval( wipe, waitTime );
                animatedBlock.data( 'interval-id', currentIntervalId );
            }
        });

    });


    attributes.ID = ID;

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

            <div {...blockProps}>
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
        </Fragment>
    );

};

export default Edit;