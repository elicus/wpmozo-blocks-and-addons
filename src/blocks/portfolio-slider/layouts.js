// layouts.js
import { __ } from '@wordpress/i18n';

export const renderPortfolioLayout = ( {
	portfolioImage,
	portfolioCats,
	portfolioTitle,
	portfolioContent,
	portfolioExcerpt,
	portfolioButtons,
	post
} ) => {
	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';

	let contentWrapper = '';
	if ( portfolioCats || portfolioTitle || portfolioContent || portfolioExcerpt || portfolioButtons ) {
		contentWrapper = (
			<div className="wpmozo_portfolio_slider_content_wrap">
				{ portfolioCats }
				{ portfolioTitle }
				{ portfolioContent }
				{ portfolioExcerpt }
				{ portfolioButtons }
			</div>
		);
	}

	return (
		<div id={ 'wpmozo_single_portfolio_' + post.id } className={ "wpmozo_portfolio_slider_item_card " + classLists }>
			{ portfolioImage }
			{ contentWrapper }
		</div>
	);
};

export const renderPortfolioLayoutOne = ( args ) => {
	return renderPortfolioLayout( args );
};

export const renderPortfolioLayoutTwo = ( args ) => {
	return renderPortfolioLayout( args );
};
