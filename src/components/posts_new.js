import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate the user to the index
				// by calling this.context.router.push with the new path 
				this.context.router.push('/');
			});
	}

	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		
		return (
			<div className="container">
				<br />
				<h1>
					New Post
				</h1>
				<hr />
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
						<label>Title</label>
						<input type="text" className="form-control" {...title} />
						<div className="text-help">{title.touched ? title.error : ''}</div>
					</div>
					<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
						<label>Categories</label>
						<input type="text" className="form-control" {...categories} />
						<div className="text-help">{categories.touched ? categories.error : ''}</div>
					</div>
					<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
						<label>Content</label>
						<textarea className="form-control" {...content} />
						<div className="text-help">{content.touched ? content.error : ''}</div>
					</div>
					<div>
						<button className="btn btn-primary" type="submit">Submit</button>
						<Link to="/" className="btn btn-danger pull-xs-right">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Please enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Please enter at least one category';
	}
	if (!values.content) {
		errors.content = 'Please enter content';
	}
	return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNew',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
