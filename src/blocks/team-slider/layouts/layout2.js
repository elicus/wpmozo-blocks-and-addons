
import Thumbnail from './parts/Thumbnail';
import SkillBars from './parts/SkillBars';
import LinkButton from './parts/LinkButton';
import SocialIcons from './parts/SocialIcons';

const Layout1 = ( { post, attributes } ) => {

	const postID     = post.id;
	const postLink   = post.link ?? 'javascript:void(0)';
	const classLists = new Set( post.class_list ?? [] );
		classLists.add( 'wpmozo_bna_team_member_card' );

	const NameLevel        = attributes.nameLevel ?? 'h2';
	const DesignationLevel = attributes.designationLevel ?? 'h4';
	const linkTarget       = attributes.linkTarget ?? 'same';

	// data attrs and class list.
	const dataAttrs = {};
	if ( attributes.enableLink ) {
		if ( attributes.usePopup ) {
			dataAttrs['data-id'] = postID;
		} else if ( 'item' === attributes.linkType ) {
			dataAttrs['data-link'] = postLink;
			dataAttrs['data-link_target'] = linkTarget;
		}

		// Above one is in else, so keep it here simple.
		if ( 'item' === attributes.linkType ) {
			if ( attributes.usePopup ) {
				classLists.add( 'wpmozo_bna_team_popup' );
			} else {
				classLists.add( 'wpmozo_bna_team_link' );
			}
		}
	}

	return (
		<div className="wpmozo_bna_team_member_slide swiper-slide">
			<div id={`wpmozo_bna_team_member_${postID}`}
				className={ [ ...classLists ].join(' ') }
				{ ...dataAttrs }
			>
				{/* Post Image. */}
				<Thumbnail post={ post } attributes={ attributes } />

				<div className="wpmozo_bna_team_content_wrapper">
					{/* Post title. */}
					{ ( post.title.rendered ) && 
						<div className="wpmozo_bna_team_member_name">
							<NameLevel>{ post.title.rendered }</NameLevel>
						</div>
					}
					{/* Designation. */}
					{ ( attributes.showDesignation && post.designation ) && 
						<div className="wpmozo_bna_team_member_designation">
							<DesignationLevel>{ post.designation }</DesignationLevel>
						</div>
					}
					{/* Short Description. */}
					{ ( attributes.showShortDesc && post.short_description ) && 
						<div className="wpmozo_bna_team_member_short_desc"
							dangerouslySetInnerHTML={ { __html: post.short_description } }
						/>
					}

					{/* Skill Bars. */}
					<SkillBars post={ post } attributes={ attributes } />

					{/* Link Button. */}
					<LinkButton post={ post } attributes={ attributes } />

					{/* Social Icons. */}
					<SocialIcons post={ post } attributes={ attributes } />
				</div>
			</div>
		</div>
	);
};

export default Layout1;
