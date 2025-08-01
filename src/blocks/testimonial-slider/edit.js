import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const Edit = (props) => {

	const attributes    = props.attributes;
	const setAttributes = props.setAttributes;
	const clientId      = props.clientId;

	const postsToShow = parseInt( attributes.postsToShow ) ?? 5;

	// Get the post types.
	const posts = useSelect( (select) =>
		select( 'core' ).getEntityRecords( 'postType', 'mozo-testimonial', {
			per_page: postsToShow,
			// order: 'asc',
			// orderby: 'title',
			// categories: 4,
			// author: 1,
			_embed: true
		} ),
	[ postsToShow ] );

	// Get props.
	const layout = attributes.layout ?? 'layout1';

	// Get slides.
	let $slides = [];
	if ( posts && posts.length > 0 ) {

		// Start quote.
		const startQuote = '<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_opening_quote_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg></span>';


		posts.map( ( post ) => {

			const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';

			const rawContent      = post.content?.rendered || '';
			const modifiedContent = startQuote + rawContent;
			
			let $postExcerpt = '';
			if ( post.content.rendered ) {
				$postExcerpt = <div className="wpmozo_testimonial_desc"
					dangerouslySetInnerHTML={ {__html: modifiedContent } }
				/>;
			}
			
			let authorImage = '';
			const imageUrl = post._embedded['wp:featuredmedia'][0].source_url ?? '';
			if ( imageUrl ) {
				authorImage = <div class="wpmozo_testimonial_author_image">
					<img src={ imageUrl } alt={ post._embedded['wp:featuredmedia'][0].alt_text || '' } />
				</div>;
			}


			let $meta = '';
			if ( '' !== imageUrl ) {
				$meta = <div className="wpmozo_testimonial_meta">{ authorImage }</div>;
			}

			$slides.push(
				<div className="wpmozo_testimonial_slide">
					<div id={ 'womozo_single_testimonial_' + post.id } className={"wpmozo_single_testimonial_card " + classLists}>
						{ $postExcerpt }
						{ $meta }
					</div>
				</div>
			);
		} );
	}
	

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div {...useBlockProps()}>

				<div className="wpmozo_swiper_wrapper">
					<div className={"wpmozo_testimonial_layout wpmozo_swiper_inner_wrap " + layout}>
						{ $slides }
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
