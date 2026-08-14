// Render layout one.
export const renderTestimonialLayoutOne = ( {postTitle, postExcerpt,categoriesData, showFeaturedImage, authorName, authorLink, date, commentCount, post, button} ) => {

	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';
	const link = post.link;

	const catTag = (
		(categoriesData && 
			<div className="wpmozo_horizontal_scrolling_post_tag_wrapper">
				{categoriesData.map((cat, i) => (
					<span key={cat.id || i} className="wpmozo_horizontal_scrolling_post_tag">
						<a href={cat.link}>{cat.name}</a>
						{i < categoriesData.length - 1 ? '' : ''}
					</span>
				))}
			</div>
		)
	);

	return (
		<div id={'womozo_single_post_' + post.id}
			 className={"wpmozo_horizontal_scrolling_post_wrapper " + classLists}>
			{showFeaturedImage && (
				<>
					{catTag}
					{showFeaturedImage}
				</>
			)}
			{ ((!showFeaturedImage && catTag) || postTitle || postExcerpt || button ) && <>
				<div className="wpmozo_horizontal_scrolling_post_content_wrapper">
					{!showFeaturedImage && (
						<>
							{catTag}
						</>
					)}
					{postTitle && (
						<h2 className="wpmozo_horizontal_scrolling_post_title">
							<a href={link}>{postTitle}</a>
						</h2>
					)}
					{postExcerpt && (
						<div className={"wpmozo_horizontal_scrolling_post_excerpt"}>
							{postExcerpt}
						</div>
					)}
					{button}
				</div>
			</>}
			{ ( authorName || date || Array.isArray(commentCount) ) && <>
				<div className="wpmozo_horizontal_scrolling_post_meta_wrapper">
					{authorName && (
						<>
							<span className="author">
								<i className="fas fa-user"></i>
								<a href={authorLink} rel="author">{authorName}</a>
							</span>
							<span className="wpmozo_post_meta_divider">|</span>
						</>
					)}
					{date && (
						<>
							<span className="published">
								<i className="fas fa-calendar"></i>
								{(new Date(date)).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
							<span className="wpmozo_post_meta_divider">|</span>

						</>
					)}
					{Array.isArray(commentCount) && (
						<>
							<i className="fas fa-comment"></i>
							<span className="comments">{commentCount.length}</span>
						</>
					)}
				</div>
			</>}
		</div>
	);
}

// Render layout two.
export const renderTestimonialLayoutTwo = ({postTitle, postExcerpt,categoriesData, showFeaturedImage, authorName, authorLink, date, commentCount, post, button}) => {

	const classLists = ( post.class_list ) ? ( post.class_list ).join( ' ' ) : '';
	const link = post.link;

	const catTag = (
		((categoriesData || date) && 
			<div className="wpmozo_horizontal_scrolling_post_tag_wrapper">
				{ categoriesData.map((cat, i) => (
					<span key={cat.id || i} className="wpmozo_horizontal_scrolling_post_tag">
						<a href={cat.link}>{cat.name}</a>
						{i < categoriesData.length - 1 ? '' : ''}
					</span>
				))}
				{date && (
					<>
						<span className="published">
							{(new Date(date)).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})}
						</span>
					</>
				)}
			</div>
		)
	);

	return (
		<div id={'womozo_single_post_' + post.id} className={"wpmozo_horizontal_scrolling_post_wrapper " + classLists}>
			<div
				className="wpmozo_horizontal_scrolling_post_inner"
				style={{
					backgroundImage: showFeaturedImage && showFeaturedImage.props.children.props.children.props.src
						? `url("${showFeaturedImage.props.children.props.children.props.src}")`
						: 'none'
				}}
			>
				{(catTag ||postTitle ||postExcerpt ||button ||authorName || Array.isArray(commentCount))&& (
					<div className="wpmozo_horizontal_scrolling_post_content_wrapper">
						{catTag}
						{postTitle && (
							<h2 className="wpmozo_horizontal_scrolling_post_title">
								<a href={link}>{postTitle}</a>
							</h2>
						)}
						{postExcerpt && (
							<div className={"wpmozo_horizontal_scrolling_post_excerpt"}>
								{postExcerpt}
							</div>
						)}

						{button}
						{(authorName || Array.isArray(commentCount)) && (
							<div className="wpmozo_horizontal_scrolling_post_meta_wrapper">
								{authorName && (
									<>
										<span className="author">
											<i className="fas fa-user"></i>
											<a href={authorLink} rel="author">{authorName}</a>
										</span>
										<span className="wpmozo_post_meta_divider">|</span>
									</>
								)}

								{Array.isArray(commentCount) && (
									<>
										<span className="comments">
											<i className="fas fa-comment"></i>
											{commentCount.length}
										</span>
									</>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
