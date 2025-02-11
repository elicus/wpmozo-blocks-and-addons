
const Style = (attributes) => {

	const clientId = attributes.clientId,
	columns = attributes.columns,
    parent = '#block-'+clientId,
    toConvertStyles = [
    	'captionTypography',
    	'captionTextDimensions',
    	'mainText',
    	'mainTextDimensions',
    	'postText',
    	'postTextDimensions',
    ];
    let width = 100/columns;

    let convertedStyle = window.wpmozo.convetInlineStyleStr( toConvertStyles, attributes ),
    flexDirection = attributes.displayInStack ? 'column' : 'initial',
    headingAlignment = ( 'left' === attributes.headingAlignment ) ? 'flex-start' : 'flex-end';

    if ( 'center' === attributes.headingAlignment ) {
    	headingAlignment = 'center';
    }
    
    let css = `
    	${parent} {
    		.wpmozo-adfgu-instagram-posts{
				display: flex;
			    line-height: 1;
			    padding: 0;
			    margin: 0;
			    align-items: ${headingAlignment};
			    white-space: pre-wrap;
			    flex-wrap: wrap;
			    justify-content: ${headingAlignment};
			    flex-direction: ${flexDirection};
			    width:100%;
			}
			.wpmozo-adfgu-instagram-single-post
			{
				width: ${width}%;
				transition: all 300ms;
			}
			h2{
				display: inline-block;
				color: ${attributes.headingColor};
				background: ${attributes.headingBackground};
			}
			span.wpmozo-adfgu-pre-text{
    			${convertedStyle.captionTypography}
    			${convertedStyle.captionTextDimensions}
    			color: ${attributes.preTextColor};
    			background: ${attributes.captionTextDimensions};
    		}
    		span.wpmozo-adfgu-pre-text:hover{
    			color: ${attributes.preTextHoverColor};
    			background: ${attributes.preTextHoverBackground};
    		}
    		span.wpmozo-adfgu-main-text{
    			${convertedStyle.mainText}
    			${convertedStyle.mainTextDimensions}
    			color: ${attributes.mainTextColor};
    			background: ${attributes.mainTextBackground};
    		}
    		span.wpmozo-adfgu-main-text:hover{
    			color: ${attributes.mainTextHoverColor};
    			background: ${attributes.mainTextHoverBackground};
    		}
    		span.wpmozo-adfgu-post-text{
    			${convertedStyle.postText}
    			${convertedStyle.postTextDimensions}
    			color: ${attributes.postTextColor};
    			background: ${attributes.postTextBackground};
    		}
    		span.wpmozo-adfgu-post-text:hover{
    			color: ${attributes.postTextHoverColor};
    			background: ${attributes.postTextHoverBackground};
    		}
    	}
    `;

	return (
		<style>{css}</style>
	);

}

export default Style;