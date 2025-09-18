import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
	}, [ clientId ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const postsNumber        = attributes.postsNumber ?? 10;
	const offsetNumber       = attributes.offsetNumber ?? 0;
	const postOrder          = attributes.postOrder ?? 'DESC';
	const postOrderBy        = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];
	const ignoreStickyPosts  = attributes.ignoreStickyPosts ?? false;

	// Get the posts.
	const posts = useSelect( (select) =>
		select( 'core' ).getEntityRecords( 'postType', 'post', {
			per_page: postsNumber,
			offset: offsetNumber,
			order: postOrder,
			orderby: postOrderBy,
			categories: includesCategories,
			ignore_sticky_posts: ignoreStickyPosts,
			// author: 1,
			_embed: true
		} ),
	[ postsNumber, offsetNumber, postOrder, postOrderBy, includesCategories, ignoreStickyPosts ] );

	// Props change event.
	useEffect( () => {
		const event = new CustomEvent( 'WPMozoBlogTimelinePropsChanged', {
			detail: { clientId: attributes.ID }
		} );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [ props ] );

	// Get attrs.
	const layout      = attributes.layout ?? 'layout1';
	const orientation = attributes.orientation ?? 'alternate';

	// Render post items based on layout.
	let postItems = [];
	if ( posts && posts.length > 0 ) {
		postItems = posts.map( ( post ) => {
			if ( 'layout2' === layout ) {
				return <Layout2 key={ post.id } post={ post } attributes={ attributes } />;
			}
			// default to layout1
			return <Layout1 key={ post.id } post={ post } attributes={ attributes } />;
		} );
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...useBlockProps() } id={`block-${attributes.ID}`}>
				<div className={`wpmozo_bna_blog_timeline_wrapper ${layout} wpmozo_bna_blog_timeline_${orientation}`}>
					{ postItems }
					<div className={`wpmozo_bna_stem_wrapper wpmozo_bna_blog_timeline_${orientation}_stem`}>
						<div className="wpmozo_bna_blog_stem"></div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Edit;
