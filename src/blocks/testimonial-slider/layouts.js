// Render layout one.
export const renderTestimonialLayoutOne = ( {
	postExcerpt,
	rating,
	authorImage,
	authorName,
	authorDesignation,
	companyName,
	post
} ) => {

	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';

	let authorData = '';
	if ( '' !== authorName || '' !== authorDesignation || '' !== companyName ) {
		authorData = <div className="wpmozo_testimonial_author_details">
			{ authorName }{ authorDesignation }{ companyName }
		</div>;
	}

	let $meta = '';
	if ( '' !== authorImage || '' !== authorData ) {
		$meta = <div className="wpmozo_testimonial_meta">{ authorImage }{ authorData }</div>;
	}

	return (
		<div id={ 'womozo_single_testimonial_' + post.id } className={"wpmozo_single_testimonial_card " + classLists}>
			{ postExcerpt }
			{ rating }
			{ $meta }
		</div>
	);
}

// Render layout two.
export const renderTestimonialLayoutTwo = ( {
	postExcerpt,
	rating,
	authorImage,
	authorName,
	authorDesignation,
	companyName,
	post
} ) => {

	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';

	let $meta = '';
	if ( '' !== authorName || '' !== authorDesignation || '' !== companyName ) {
		$meta = <div className="wpmozo_testimonial_meta">
			<div className="wpmozo_testimonial_author_details">
				{ authorName }{ authorDesignation }{ companyName }
			</div>
		</div>;
	}

	return (
		<div id={ 'womozo_single_testimonial_' + post.id } className={"wpmozo_single_testimonial_card " + classLists}>
			{ authorImage }
			{ postExcerpt }
			{ rating }
			{ $meta }
		</div>
	);
}
