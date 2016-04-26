import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div className="container">
				<br />
				<h1>
					List of blog posts
					<Link to="/posts/new" className="btn btn-primary pull-xs-right">
						New Post
					</Link>
				</h1>
				<hr />
			</div>
		);	
	}
}

export default connect(null, { fetchPosts })(PostsIndex);
