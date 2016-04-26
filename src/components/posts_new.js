import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsNew extends Component {
	render() {
		return (
			<div className="container">
				<br />
				<h1>
					New Post
					<Link to="/" className="btn btn-secondary pull-xs-right">
						Back to All Posts
					</Link>
				</h1>
				<hr />
			</div>
		);
	}
}

export default PostsNew;
