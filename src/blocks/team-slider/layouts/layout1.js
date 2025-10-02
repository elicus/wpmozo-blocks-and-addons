
import Thumbnail from './parts/Thumbnail';
import SkillBars from './parts/SkillBars';
import LinkButton from './parts/LinkButton';
import SocialIcons from './parts/SocialIcons';

const Layout1 = ( { post, attributes } ) => {

	const postID     = post.id;
	const classLists = new Set( post.class_list ?? [] );

	const NameLevel        = attributes.nameLevel ?? 'h2';
	const DesignationLevel = attributes.designationLevel ?? 'h4';

	classLists.add( 'wpmozo_bna_team_member_card' );
	classLists.add( 'swiper-slide' );
	

	return (
		<div id={`wpmozo_bna_team_member_${postID}`} className={ [ ...classLists ].join(' ') }>
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
	);
};

export default Layout1;
