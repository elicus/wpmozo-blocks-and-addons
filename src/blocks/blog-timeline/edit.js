import { __ } from "@wordpress/i18n";
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { renderToString } from '@wordpress/element';

import Inspector from "./inspector";
import generateDynamicStyle from "./style";

import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = (props) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-blog-timeline${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const postsNumber        = attributes.postsNumber ?? 10;
	const offsetNumber       = attributes.offsetNumber ?? 0;
	const postOrder          = attributes.postOrder ?? 'DESC';
	const postOrderBy        = attributes.postOrderBy ?? 'date';
	const includesCategories = attributes.includesCategories ?? [];
	let ignoreStickyPosts  = attributes.ignoreStickyPosts ?? false;

	const queryArgs = {
		per_page: postsNumber,
		offset: offsetNumber,
		order: postOrder,
		orderby: postOrderBy,
		categories: includesCategories,
		_embed: true
	};

	if(true === attributes.ignoreStickyPosts){
		queryArgs.sticky = false;
	}

	// Get the posts.
	const posts = useSelect(
		(select) =>
			select('core').getEntityRecords('postType', 'post', queryArgs),
		[postsNumber, offsetNumber, postOrder, postOrderBy, includesCategories, ignoreStickyPosts]
	);

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
	let postItems = '';
	useEffect( () => {
		if ( posts && posts.length > 0 ) {
			postItems = posts.map( ( post ) => {
				if ( 'layout2' === layout ) {
					return renderToString( <Layout2 key={ post.id } post={ post } attributes={ attributes } /> );
				}
				// default to layout1
				return renderToString( <Layout1 key={ post.id } post={ post } attributes={ attributes } /> );
			} ).join('');

			// Save items html to db.
			setAttributes( { postItemsDB: postItems } );
		}
	}, [ posts, props ] );

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes } ) }</style>

			<div { ...blockProps} id={`block-${attributes.ID}`}>
				<div className={`wpmozo_bna_blog_timeline_wrapper ${layout} wpmozo_bna_blog_timeline_${orientation}`}
					dangerouslySetInnerHTML={ {
						__html: ( attributes.postItemsDB || '' ) +
						renderToString( <div className={`wpmozo_bna_stem_wrapper wpmozo_bna_blog_timeline_${orientation}_stem`}>
							<div className="wpmozo_bna_blog_stem"></div>
						</div> )
					} }
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
