import React from 'react';

const SkillBars = ( { post, attributes } ) => {

	// If do not show.
	if ( ! attributes.showSkills ) {
		return null;
	}
	if ( ! post.member_skills || post.member_skills.length === 0 ) {
		return null; // no data, return nothing.
	}

	return (
		<div className="wpmozo_bna_skill_bar_wrapper">
			{ ( post.member_skills ).map( ( skill, index ) => (
				<div className="wpmozo_bna_skill_bar_wrapper_inner" key={index}>
					<div className="wpmozo_bna_skill_name">{ skill.title }</div>
					<div className="wpmozo_bna_empty_bar">
						<div className="wpmozo_bna_filled_bar" data-skill={ skill.value + "%" } />
					</div>
				</div>
			) ) }
		</div>
	);
};

export default SkillBars;
