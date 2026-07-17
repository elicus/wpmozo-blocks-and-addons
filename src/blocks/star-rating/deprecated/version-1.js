// deprecated/version-1.js
import { RichText, useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		globalTextAlign: { type: "string" },

		title: { type: "string", default: "Review Title" },
		titleLevel: { type: "string", default: "h4" },
		hideTitle: { type: "boolean", default: false },
		titleColor: { type: "string" },
		titleFontSize: { type: "string" },
		titleLetterSpacing: { type: "string" },
		titleDecoration: { type: "string" },
		titleLetterCase: { type: "string" },
		titleLineHeight: { type: "string" },
		titleFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		titleFontStyle: { type: "string" },
		titleFontWeight: { type: "string" },

		rating: { type: "string", default: "5" },
		iconSVGs: { type: "object" },

		ratingColor: { type: "string" },
		ratingFontSize: { type: "string" },
		ratingLetterSpacing: { type: "string" },
		ratingDecoration: { type: "string" },
		ratingLetterCase: { type: "string" },
		ratingLineHeight: { type: "string" },
		ratingFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		ratingFontStyle: { type: "string" },
		ratingFontWeight: { type: "string" },

		ratingOutOf: { type: "number", default: 5 },
		image: { type: "string", default: "" },
		imageAlt: { type: "string", default: "" },
		description: { type: "string", default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
		descriptionColor: { type: "string" },
		descriptionFontSize: { type: "string" },
		descriptionLetterSpacing: { type: "string" },
		descriptionDecoration: { type: "string" },
		descriptionLetterCase: { type: "string" },
		descriptionLineHeight: { type: "string" },
		descriptionFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		descriptionFontStyle: { type: "string" },
		descriptionFontWeight: { type: "string" },

		rateIcon: { type: "string", default: "default" },
		rateIconFilledColor: { type: "string", default: "#fac917" },
		rateIconEmptyColor: { type: "string", default: "#fac917" },
		ratePosition: { type: "string", default: "below_title" },
		showRateNum: { type: "boolean", default: true },
		starFontSize: { type: "number", default: 24 },
		starSpacing: { type: "number", default: 2 },
		containerpadding: { type: "object" },
		containermargin: { type: "object" },
		containerborder: {type: "object"},
		containerborderRadius:{type: "string"}

    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        const imageUrl    = ( attributes.image ) ? attributes.image : '';
        const rateIcon    = ( attributes.rateIcon ) ?? 'default';
        const showRateNum = ( attributes.showRateNum ) ?? true;

        let ratingOutOf = ( attributes.ratingOutOf && '' !== attributes.ratingOutOf ) ? attributes.ratingOutOf : 5;
        // For smily icons, out of icons must be 5.
        if ( [ 'smiley_scale' ].includes( rateIcon ) && ratingOutOf !== 5 ) {
            ratingOutOf = 5;
        }

        // Calc rating.
        let rating = parseFloat( attributes.rating ) ?? 5;
        if ( rating > ratingOutOf ) {
            rating = ratingOutOf;
        } else {
            let rating_mid_value = parseFloat( Math.abs( parseInt( rating ) ) + 0.5 );
            if ( rating > rating_mid_value ) {
                rating = Math.ceil( rating );
            } else if ( rating !== Math.abs( parseInt( rating ) ) ) {
                rating = rating_mid_value;
            }
        }

        let ratingWrapper = '';
        if ( rating && rating > 0 ) {
            let unfilled_stars  = '',
                rating_number   = '',
                stars           = [],
                mood            = 1;

            const scalIcons = [ 'smiley_scale' ];

            for ( let $i = 1; $i <= Math.abs( parseInt( rating ) ); $i++ ) {
                if ( 'default' !== rateIcon ) {
                    let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_filled` : `${rateIcon}-filled`;
                    const svg = attributes.iconSVGs?.[key]?.[mood] || '';
                    stars.push(
                        <span dangerouslySetInnerHTML={ { __html: svg } }
                            className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_filled dipl-rating-icon-${rateIcon}`}
                        />
                    );
                } else {
                    stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_filled_star"></span> );
                }
                mood++;
            }
            if ( rating !== Math.abs( parseInt( rating ) ) ) {
                if ( 'default' !== rateIcon ) {
                    let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_half_filled` : `${rateIcon}-half_filled`;
                    const svg = attributes.iconSVGs?.[key]?.[mood] || '';
                    stars.push( <span dangerouslySetInnerHTML={ { __html: svg } }
                        className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_half_filled dipl-rating-icon-${rateIcon}`}
                    /> );
                } else {
                    stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_half_filled_star"></span> );
                }
                mood++;
                unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) ) - 1;
            } else {
                unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) );
            }
            for ( let $i = 1; $i <= unfilled_stars; $i++ ) {
                if ( 'default' !== rateIcon ) {
                    let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_empty` : `${rateIcon}-empty`;
                    const svg = attributes.iconSVGs?.[key]?.[mood] || '';
                    stars.push( <span dangerouslySetInnerHTML={ { __html: svg } }
                        className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_empty dipl-rating-icon-${rateIcon}`}
                    /> );
                } else {
                    stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_empty_star"></span> );
                }
                mood++;
            }

            if ( true === showRateNum ) {
                rating_number = <span className="wpmozo_star_rating_number">({rating}/{ratingOutOf})</span>;
            }

            ratingWrapper = <div className="wpmozo_star_rating_rating_wrapper">
                <span itemprop="starRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content={rating} />
                    <span className="wpmozo_star_rating_stars">{stars}</span>
                    {rating_number}
                </span>
            </div>;
        }

        return (
            <>
                <style>{ generateDynamicStyle( { attributes } ) }</style>

                <div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
                    <div className="wpmozo_star_rating_wrapper">
                        { ( imageUrl && '' !== imageUrl ) && (
                            <div className="wpmozo_star_rating_image_container">
                                <img src={ imageUrl } alt={ attributes?.imageAlt || '' } class="wpmozo_star_rating_image" />
                            </div>
                        ) }
                        <div className="wpmozo_star_rating_title_container">
                            { ( false === attributes.hideTitle ) && (
                                <RichText.Content
                                    className="wpmozo_star_rating_title"
                                    tagName={ attributes.titleLevel }
                                    value={ attributes.title }
                                />
                            ) }
                            { ratingWrapper }
                        </div>
                        <div className="wpmozo_star_rating_description">
                            <RichText.Content tagName="p"
                                className="wpmozo_star_rating_description"
                                value={ attributes.description }
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default V1;