import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import Inspector from './inspector';
import generateDynamicStyle from "./style";

const Edit = (props) => {
	
	const { attributes, setAttributes, clientId } = props;
	
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const postsNumber        = parseInt( attributes.postsNumber ) ?? 10;
	const postOrder          = attributes.postOrder ?? 'desc';
	const postOrderBy        = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];

	// Get the post types.
	const posts = useSelect( (select) =>
		select( 'core' ).getEntityRecords( 'postType', 'mozo-team-member', {
			per_page: postsNumber,
			order: postOrder,
			orderby: postOrderBy,
			categories: includesCategories.join( ',' ),
			// author: 1,
			_embed: true
		} ),
	[ postsNumber, postOrder, postOrderBy, includesCategories.join(',') ] );

	const layout = attributes.layout ?? 'layout1';

	let $slides         = [],
		$sliderArrows   = '',
		$paginationDots = '';
	if ( posts && posts.length > 0 ) {

		posts.map( ( post ) => {


			// Add to the slides.
			$slides.push(
				<div className="swiper-slide wpmozo_testimonial_slide">
					{post.title.rendered}
				</div>
			);
		} );
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className={"wpmozo_swiper_wrapper"}>
					<div className={"wpmozo_bna_team_slider_container wpmozo_swiper_inner_wrap " + layout}>
						<div className="swiper swiper-container">
							<div className="swiper-wrapper">{ $slides }</div>
						</div>
						{ $sliderArrows }
						{ $paginationDots }
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
